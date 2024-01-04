import { useContext } from "react";
import { FilterContextState } from "../context/FilterContext";

const useFilterState = () => {
  const data = useContext(FilterContextState);

  if (data === undefined) {
    throw new Error(
      "Use Context use in Provider!..."
    );
  }

  const {
    filter,
    setFilter,
    category,
    setCategory,
  } = data;

  const addFilter = (value) => {
    setFilter((prev) => ({ ...prev, ...value }));
  };

  return {
    filter,
    setFilter,
    addFilter,
    category,
    setCategory,
  };
};

export { useFilterState };
