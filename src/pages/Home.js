import React from "react";
import Products from "../components/Products";
import Crousel from "../components/Crousel";

const Home = () => {
  return (
    <div>
      <Crousel />

      <section>
        <h3>Products</h3>

        <Products />
      </section>
    </div>
  );
};

export default Home;
