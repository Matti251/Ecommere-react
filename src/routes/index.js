import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Blog from "../View/Blog/index";
import Home from "../View/home/Home";
import Shoes from ".././View/shoes/Index";
import Category from ".././View/category/index";
import { URL } from "../config/constant.route";
import { Contact } from "../View/contact";
import Layout from "../layout";

const MainRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element=<Layout />>
            <Route
              path={URL.HOME_PAGE}
              element={<Home />}
            />
            {/* <Route
              path={URL.CATEGORY_PAGE}
              element={<Category />}
            /> */}
            <Route
              path={URL.SHOES_PAGE}
              element={<Shoes />}
            />
            <Route
              path={URL.BLOG_PAGE}
              element={<Blog />}
            />
            <Route
              path={URL.CONTACT_PAGE}
              element={<Contact />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default MainRouter;
