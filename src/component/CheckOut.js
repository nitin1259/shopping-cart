import React from "react";
import "./CheckOut.css";
import CheckOutProduct from "./CheckOutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function CheckOut() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/CEPC/Wearables/Mi/Redmi_Band/SaleOn/MI-Xiaomi_redmi_Smart_Band_shop-now_1500x300.jpg"
          alt="offer image"
        />
        <h3>Hi, {user?.email}</h3>
        {basket?.length === 0 ? (
          <div>
            <h2>Your Shopping Basket is empty </h2>
            <p>
              Your have no item in your basket. To buy one or more item , click
              "Add to basket" next to the item
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your Shopping Basket</h2>

            {/* list of all checkout items */}
            {basket?.map((item) => (
              <CheckOutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                rating={item.rating}
                price={item.price}
              />
            ))}
          </div>
        )}
      </div>
      {basket?.length > 0 && (
        <div className="checout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default CheckOut;
