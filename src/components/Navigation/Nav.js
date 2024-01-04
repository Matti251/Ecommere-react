import "./Nav.css";
import {
  FaShoppingBag,
  FaRegHeart,
  FaUserPlus,
} from "react-icons/fa";
import { SiApachemaven } from "react-icons/si";
import { useFilterState } from "../../hooks/filter-hook";
import NavLinkButton from "../buttons/NavLinkButton";
import { URL } from "../../config/constant.route";

const linkData = [
  { to: URL.HOME_PAGE, title: "Home" },
  { to: URL.SHOES_PAGE, title: "Shoes" },
  { to: URL.CATEGORY_PAGE, title: "Category" },
  { to: URL.BLOG_PAGE, title: "Blog" },
  { to: URL.CONTACT_PAGE, title: "Contact Us" },
];

export const Nav = () => {
  const { filter, addFilter } = useFilterState();
  return (
    <>
      <nav className="navbar navbar-expand-lg position-sticky top-0 z-999 py-2 ">
        <div className="container-fluid">
          <div className=" px-4 ">
            <a className="navbar-brand" href="#">
              Cart
              <SiApachemaven className="logo" />
            </a>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="container lime pullUp">
            {linkData.map((item, i) => {
              return (
                <NavLinkButton
                  key={"nav-link-items--" + i}
                  to={item.to}
                  title={item.title}
                />
              );
            })}
          </div>
          <div
            className="collapse navbar-collapse"
            id="navbarScroll">
            <form
              className="d-flex nav-input"
              role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search Products,Brand,and More"
                aria-label="Search"
                onChange={({ target }) =>
                  addFilter({
                    title: target.value,
                  })
                }
                value={filter.title}
              />
            </form>
          </div>
          <div>
            <div className="shop-icon d-flex gap-3">
              <a href="/">
                <FaRegHeart />
                <span>Wishlist</span>
              </a>
              <a href="/">
                <FaUserPlus />
                <span>Profile</span>
              </a>
              <a href="#">
                <FaShoppingBag />
                <span>Bag</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Nav;
