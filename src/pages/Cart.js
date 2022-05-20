import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";
// eslint-disable-next-line

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);
  const handleRemove = (productId) => dispatch(remove(productId));
  let total = 0;

  return (
    <div>
      <h3>Cart</h3>
      <div className="cartWrapper">
        {products.map((product, index) => {
          total += product.price;
          return (
            <div key={product.id} className="cartCard">
              <img src={product.image} style={{ height: "80px" }} alt="" />
              <h5>{product.title}</h5>
              <h5>{product.price}</h5>
              <button className="btn" onClick={() => handleRemove(product.id)}>
                Remove
              </button>
            </div>
          );
        })}
      </div>
      <div className="cartWrapper text-end">
        <h4 className="text-end">total : {total}</h4>
        <button className="btn">Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
