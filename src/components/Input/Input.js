import React, { useState, useRef } from "react";
import { useFirestore } from "../../firebase/useFirestore";
import "./input.css";

const initialItem = { title: "", type: "", date: "" };

function Input() {
  //export
  const { addItem } = useFirestore();
  // State || React Hock
  const [item, setItem] = useState(initialItem);
  const [amount, setAmount] = useState("");
  const selectedOption = useRef(null);
  // Functions
  const handleChange = ({ target }) => {
    setItem({
      ...item,
      [target.name]: target.value,
      type: selectedOption.current.value,
    });
  };
  const handleAmount = ({ target }) => {
    setAmount(target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let actualAmount =
      selectedOption.current.value === "expense"
        ? -Math.abs(parseInt(amount))
        : parseInt(amount);

    await addItem(item, actualAmount);

    setItem(initialItem);
    setAmount("");
  };
  return (
    <div className="input">
      <from onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Enter Title"
          onChange={handleChange}
          autoComplete="off"
          value={item.title}
        />
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          autoComplete="off"
          onChange={handleAmount}
          value={amount}
        />
        <input
          type="date"
          name="date"
          placeholder="Date"
          onChange={handleChange}
          autoComplete="off"
          value={item.date}
        />

        <label htmlFor="type">Type</label>
        <select name="type" onChange={handleChange} ref={selectedOption}>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <input type="submit" value="ADD" onClick={handleSubmit} />
      </from>
    </div>
  );
}

export default Input;
