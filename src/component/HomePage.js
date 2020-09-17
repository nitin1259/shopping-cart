import React from "react";
import "./HomePage.css";
import Product from "./Product";

function HomePage() {
  return (
    <div className="home">
      {/* <h2> THis is the home page</h2> */}
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Rajeshwari/september/GWbanners/DesktopHero_1500x600._CB403958842_.jpg"
        alt="accesories"
      />

      {/* Product id, title, price, rating, image */}
      {/* multiple products */}
      {/* https://images-na.ssl-images-amazon.com/images/I/61fv4VZRQ7L._SL1500_.jpg */}

      <div className="home__row">
        <Product
          id="1234"
          title="The Lean startup:How constant invocation creates"
          price={33.43}
          image="https://images-na.ssl-images-amazon.com/images/I/712rw0zcH8L._SL1500_.jpg"
          rating={5}
        />
        <Product
          id="1234"
          title="The Lean startup:How constant invocation creates"
          price={33.43}
          image="https://images-na.ssl-images-amazon.com/images/I/712rw0zcH8L._SL1500_.jpg"
          rating={5}
        />
      </div>

      <div className="home__row">
        <Product
          id="1234"
          title="The Lean startup:How constant invocation creates"
          price={33.43}
          image="https://images-na.ssl-images-amazon.com/images/I/712rw0zcH8L._SL1500_.jpg"
          rating={5}
        />
        <Product
          id="1234"
          title="The Lean startup:How constant invocation creates"
          price={33.43}
          image="https://images-na.ssl-images-amazon.com/images/I/712rw0zcH8L._SL1500_.jpg"
          rating={5}
        />
        <Product
          id="1234"
          title="The Lean startup:How constant invocation creates"
          price={33.43}
          image="https://images-na.ssl-images-amazon.com/images/I/712rw0zcH8L._SL1500_.jpg"
          rating={5}
        />
      </div>

      <div className="home__row">
        <Product
          id="1234"
          title="The Lean startup:How constant invocation creates"
          price={33.43}
          image="https://images-na.ssl-images-amazon.com/images/I/712rw0zcH8L._SL1500_.jpg"
          rating={5}
        />
      </div>
    </div>
  );
}

export default HomePage;
