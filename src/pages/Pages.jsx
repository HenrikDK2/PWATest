import Index from "./index";
import Product from "./product";
import React from "react";
import { Route } from "react-router-dom";

const Pages = () => {
  return (
    <>
      <main>
        <Route exact path="/" component={Index} />
        <Route exact path="/product" component={Product} />
      </main>
    </>
  );
};

export default Pages;
