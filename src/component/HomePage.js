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
          title="Lenovo Ideapad Slim 3i 10th Gen Intel Core i3 14 inch FHD Thin and Light Laptop (4GB/256GB/Windows 10/MS Office/Grey/1.6Kg), 81WD0044IN"
          price={33.43}
          image="https://images-na.ssl-images-amazon.com/images/I/712rw0zcH8L._SL1500_.jpg"
          rating={5}
        />
        <Product
          id="123412"
          title="Samsung Galaxy M31 (Ocean Blue, 6GB RAM, 128GB Storage)"
          price={23.43}
          image="https://images-na.ssl-images-amazon.com/images/I/71-Su4Wr0HL._SL1500_.jpg"
          rating={4}
        />
      </div>

      <div className="home__row">
        <Product
          id="123432"
          title="OnePlus 8 Pro (Glacial Green 8GB RAM+128GB Storage)"
          price={55.43}
          image="https://images-na.ssl-images-amazon.com/images/I/61fv4VZRQ7L._SL1500_.jpg"
          rating={3}
        />
        <Product
          id="1234"
          title="Logitech H390 USB Headset (Black)s"
          price={13.43}
          image="https://images-na.ssl-images-amazon.com/images/I/61CqYq%2BxwNL._SL1500_.jpg"
          rating={5}
        />
        <Product
          id="1234"
          title="The Storyteller: the heart-breaking and unforgettable novel by the number one bestselling"
          price={7.12}
          image="https://images-na.ssl-images-amazon.com/images/I/51GfKb1bfdL.jpg"
          rating={2}
        />
      </div>

      <div className="home__row">
        <Product
          id="1234"
          title="Sony HT-S20R 5.1 Channel Dolby Digital Soundbar Home Theatre System with Bluetooth Connectivity - Black"
          price={55.05}
          image="https://images-na.ssl-images-amazon.com/images/I/71%2Bs6K1eovL._SL1500_.jpg"
          rating={5}
        />
      </div>
    </div>
  );
}

export default HomePage;
