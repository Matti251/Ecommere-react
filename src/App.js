import React from "react";
import Nav from "./components/Navigation/Nav";
import Products from "./View/products/Products";
import Recommended from "./components/Recommended/Recommended";
import "bootstrap/dist/css/bootstrap.min.css";
import { data as productss } from "./utils/Data";
import Card from "./components/Card";
import Colors from "./components/Colors/Colors";
import "./style/App.css";
import { useFilterState } from "./hooks/filter-hook";
import SideBar from "./components/Sidebar/SideBar";
const App = () => {
  const { filter, setFilter } = useFilterState();

  return (
    <>
      <Nav />
      <SideBar />
      <Colors
        Setcolor={(val) =>
          setFilter({ ...filter, color: val })
        }
      />
      <Recommended
        setCompany={(val) =>
          setFilter({ ...filter, company: val })
        }
      />
      <Products>
        {productss
          .filter(
            (item) =>
              item.category.includes(
                filter.category
              ) &&
              item.newPrice.includes(
                filter.price
              ) &&
              item.company.includes(
                filter.company
              ) &&
              item.title
                .toLowerCase()
                .includes(
                  filter.title.toLowerCase()
                ) &&
              item.color.includes(filter.color)
          )
          .map((item, i) => (
            <Card
              key={"product-car--" + i}
              data={item}
            />
          ))}
      </Products>
    </>
  );
};

export default App;
