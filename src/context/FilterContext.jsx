import React, {
  createContext,
  useState,
} from "react";

export const FilterContextState =
  createContext(null);

const FilterContextProvider = ({ children }) => {
  const [filter, setFilter] = useState({
    category: "",
    price: "",
    company: "",
    title: "",
    color: "",
  });
  // const [category, setCategory] = useState({
  //   img:"",
  //   category:"",
  //   name:"",
  //   seller:"",
  //   price:"",
  //   stock:"",
  //   ratings:"",
  //   ratingsCount:"",
  // });

  return (
    <FilterContextState.Provider
      value={{
        filter,
        setFilter,
        // category,
        // setCategory,
      }}>
      {children}
    </FilterContextState.Provider>
  );
};

export default FilterContextProvider;
