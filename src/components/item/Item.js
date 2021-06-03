import React, { useRef } from "react";
import { useFirestore } from "../../firebase/useFirestore";
import "./item.css";
function Item({ item }) {
  const delBtn = useRef();
  const { deletItem } = useFirestore();
  return (
    <div
      className="item"
      onMouseEnter={() => (delBtn.current.style.display = "block")}
      onMouseLeave={() => (delBtn.current.style.display = "none")}
    >
      <div className="item__title">
        <h4>{item.title}</h4>
      </div>
      <div className="item__info">
        <p className={item.amount >= 0 ? "income" : "expense"}>
          ${Math.abs(item.amount)}
        </p>
        <p>{item.date}</p>
        <button
          ref={delBtn}
          className="item__delete"
          onClick={() => deletItem(item.id)}
        >
          delete
        </button>
      </div>
    </div>
  );
}

export default Item;
