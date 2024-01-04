import React from "react";
import Card from "../../components/categoryCard/Card";
import Products from "../../utils/products";
import { useFilterState } from "../../hooks/filter-hook";
import ProductsUs from "../products/Products";

const Category = () => {
  const { category, setCategory } =
    useFilterState();
    console.log(Products);
  return (
    <>
      <h1>Category</h1>
      <ProductsUs>
        {Products.filter((item) =>
          item.title.includes(
            category.title.toLowerCase()
          )
        ).map((item, i) => (
          <Card
            key={"product-car--" + i}
            Products={item}
          />
        ))}
      </ProductsUs>
    </>
  );
};

export default Category;
