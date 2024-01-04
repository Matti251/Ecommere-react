import React from "react";
import "./Category.css";
import Input from "../../../components/Input"
import { useFilterState } from "../../../hooks/filter-hook";

const data = [
  { title: "All", value: "" },
  { title: "Sneakers", value: "sneakers" },
  { title: "Flats", value: "flats" },
  { title: "Sandals", value: "sandals" },
  { title: "Heels", value: "heels" },
];

export const Category = () => {
  const { filter, addFilter } = useFilterState();

  return (
    <>
      <div className="">
        <h2 className="sidebar-title">
          Category
        </h2>
        <div className="d-flex flex-column ">
          {data.map(({ title, value }, i) => (
            <Input
              key={"category-input--" + i}
              handleChange={({ target }) =>
                addFilter({
                  category: target.value,
                })
              }
              value={value}
              name="test"
              type="radio"
              title={title}
              checked={value === filter.category}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default Category;
