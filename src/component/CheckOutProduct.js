import React from "react";
import "./CheckOutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckOutProduct({ id, title, image, rating, price }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    // remove the item from basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutproduct">
      {/* <h3>Checkout Item</h3> */}
      <img className="checkoutproduct__img" src={image} alt="product image" />

      <div className="checkoutproduct__info">
        <p className="checkoutproduct__title">{title}</p>
        <p className="checkoutproduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutproduct__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <span>⭐️</span>
            ))}
        </div>
        <button onClick={removeFromBasket} className="checkoutproduct__button">
          Remove from basket
        </button>
      </div>
    </div>
  );
}

export default CheckOutProduct;
