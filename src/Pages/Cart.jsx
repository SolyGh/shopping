import React from "react";
import { ItemsList } from "../Components/ItemsList/ItemsList";
import { useSelector } from "react-redux";

const styles = {
  cart: {
    width: '100%',
    minHeight: '80vh',
    marginTop: '30px',
    marginBottom: '30px',
  },
  products: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '20px',
    margin: '0 30px',
  },
  totalPrice: {
    marginTop: '30px',
    fontSize: '1.5rem',
    fontWeight: '500',
    textAlign: 'center',
  }
};

export const Cart = () => {
  const cart = useSelector((state) => state.cart);

  
  const totalPrice = cart.reduce((total, item) => {
    return total + item.new_price * item.quantity;
  }, 0);

  return (
    <div style={styles.cart}>
      <div style={styles.products}>
        <ItemsList items={cart} />
      </div>
      <div style={styles.totalPrice}>
        <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
      </div>
    </div>
  );
};
