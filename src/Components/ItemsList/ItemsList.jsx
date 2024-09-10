import React from "react";
import { Items } from "../Items/Items";

export const ItemsList = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <Items
          key={item.id}
          id={item.id}
          image={item.image}
          name={item.name}
          old_price={item.old_price}
          new_price={item.new_price}
        />
      ))}
    </>
  );
};
