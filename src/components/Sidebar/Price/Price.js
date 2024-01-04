import React from "react";
import "./Price.css";
import Input from "../../../components/Input"
import { useFilterState } from "../../../hooks/filter-hook";

export const Price = () => {
  const { addFilter } = useFilterState();
  return (
    <>
      <div>
        <h2 className="sidebar-title price-title">
          Price
        </h2>
        <label className="sidebar-label-container">
          <input
            onChange={({ target }) =>
              addFilter({
                price: target.value,
              })
            }
            value=""
            type="radio"
            name="test2"
          />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={({ target }) =>
            addFilter({
              price: target.value,
            })
          }
          value="50"
          title="$0-50"
          name="test2"
        />
        <Input
          handleChange={({ target }) =>
            addFilter({
              price: target.value,
            })
          }
          value="100"
          title="$50-100"
          name="test2"
        />
        <Input
          handleChange={({ target }) =>
            addFilter({
              price: target.value,
            })
          }
          value="150"
          title="$100-150"
          name="test2"
        />
        <Input
          handleChange={({ target }) =>
            addFilter({
              price: target.value,
            })
          }
          value="200"
          title="over-150"
          name="test2"
        />
      </div>
    </>
  );
};
export default Price;
