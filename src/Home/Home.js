import React from "react";
import Category from "./Category";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <img src="https://m.media-amazon.com/images/I/610aFo74RdL._SX3000_.jpg" />
      <div className="category">
        <Category />
      </div>
    </div>
  );
}

export default Home;
