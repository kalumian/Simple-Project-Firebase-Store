import React, { useState } from "react";
import { useFirestore } from "../../firebase/useFirestore";
import Item from "../item/Item";

function ItemList() {
  var items = "";
  var { items } = useFirestore();

  return (
    <div className="item-list">
      <ul>
        {items.map((item) => {
          return <Item item={item} key={item.id} />;
        })}
      </ul>
    </div>
  );
}

export default ItemList;
