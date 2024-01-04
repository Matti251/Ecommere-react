import React from "react";
import "./Products.css";

export const Products = ({ children }) => {
  return (
    <>
      <div className="card-container d-flex flex-wrap gap-1 ">
        {children}
      </div>
    </>
  );
};
export default Products;
