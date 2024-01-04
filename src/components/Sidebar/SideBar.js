import React from "react";
import "./SideBar.css";
import Category from "./Category/Category";
import { FaCartShopping } from "react-icons/fa6";
import Price from "./Price/Price";

export const SideBar = () => {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">

        </div>
        <Category />
        <Price />
      </section>
    </>
  );
};
export default SideBar;
