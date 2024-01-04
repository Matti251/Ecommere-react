import React from "react";
import "./Recommended.css";

export const Recommended = ({ setCompany }) => {
  return (
    <>
      <div className="Recommended">
        <h2>Recommended</h2>
        <div className="d-flex gap-2 ">
          <div className="">
            <a
              className="btn btn-sm animated-button victoria-two all-products"
              onClick={() => setCompany("")}>
              All products
            </a>
          </div>
          <div>
            <a
              onClick={() => setCompany("Puma")}
              className="btn btn-sm animated-button victoria-two">
              Puma
            </a>
          </div>
          <div>
            <a
              className="btn btn-sm animated-button victoria-two"
              onClick={() =>
                setCompany("Adidas")
              }>
              Adidas
            </a>
          </div>
          <div >
            <a
              className="btn btn-sm animated-button victoria-two"
              onClick={() => setCompany("Vans")}>
              Vans
            </a>
          </div>
          <div>
            <a
              className="btn btn-sm animated-button victoria-two"
              value="Nike"
              onClick={() => setCompany("Nike")}>
              nike
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Recommended;
