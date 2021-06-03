import { useEffect, useState } from "react";
import { db } from "./firebase";

export const useFirestore = () => {
  const [items, setItems] = useState([]);
  const [budget , setBudget] = useState(0)
  useEffect(() => {
    const subscribers = db
      .collection("items")
      .orderBy("date")
      .onSnapshot((snap) => {
        let fetched = snap.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        let budget = snap.docs.map(doc => {
          return doc.data().amount;
        })
        setItems(fetched);
        if(budget[0]){setBudget(budget.reduce((acc,curr)=> acc + curr),0)}
      });
    return subscribers;
  }, []);

  const addItem = async (item, amount) => {
    await db.collection("items").add({
      ...item,
      amount,
    });
  };

  const deletItem = async (id) => {
    await db.collection("items").doc(id).delete();
  };
  return { items, addItem, deletItem, budget };
};
