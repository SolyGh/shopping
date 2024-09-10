import React from "react";
import "./Items.css";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  addToCart,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../../Store/actions";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export const Items = ({ id, image, name, old_price, new_price }) => {
  const dispatch = useDispatch();
  const isInCart = useLocation().pathname.includes("cart");

  // Get the item from the cart based on the id
  const item = useSelector((state) =>
    state.cart.find((product) => product.id === id)
  );

  // Ensure quantity is available
  const quantity = item ? item.quantity : 1;

  // Calculate total price for the item
  const totalPrice = new_price * quantity;

  return (
    <div className="items">
      <img src={image} alt="item" />
      <h2>{name}</h2>
      <div className="container">
        <div className="item-price">
          <div className="new">${new_price.toFixed(2)}</div>
          {old_price && <div className="old">${old_price.toFixed(2)}</div>}
        </div>
        <div className="button">
          {!isInCart && (
            <button className="add-btn" onClick={() => dispatch(addToCart({ id, name, new_price, old_price, image }))}>
              Add To Cart
            </button>
          )}
          {isInCart && (
            <button className="rem-btn" onClick={() => dispatch(removeFromCart({ id }))}>
              Remove
            </button>
          )}
        </div>
      </div>
      {isInCart && (
        <div className="quantity">
          <button
            className="minus"
            onClick={() => dispatch(decreaseQuantity({ id }))}
            disabled={quantity <= 1}
          >
            <AiOutlineMinus />
          </button>
          <span>{quantity}</span>
          <button
            className="plus"
            onClick={() => dispatch(increaseQuantity({ id }))}
            disabled={quantity >= 5}>
            <AiOutlinePlus />
          </button>
        </div>
      )}
      {isInCart && (
        <div className="total-prices">
          Total: ${totalPrice.toFixed(2)}
        </div>
      )}
    </div>
  );
};
