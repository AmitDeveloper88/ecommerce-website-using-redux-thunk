import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import imgLogo from "../assets/logo192.png";

const Navbar = () => {
  const items = useSelector((state) => state.cart);
  return (
    <>
      {/* <span className="logo">REDUX STORE</span>
      <div>
        <Link className="navLink" to="/">
          Home
        </Link>
        <Link className="navLink" to="/cart">
          Cart
        </Link>
        <span className="cartCount">Cart items: {items.length}</span>
      </div> */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse m-1 p-2  "
          id="navbarTogglerDemo01"
        >
          <Link class="navbar-brand" to="/">
            <img
              src={imgLogo}
              alt=""
              width="30"
              height="24"
              class="d-inline-block align-text-top"
            />
            E-store
          </Link>

          <form class="d-flex ms-auto">
            <input
              class="form-control me-2 bg-dark"
              type="search"
              placeholder="Search product..."
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>

          <ul className="navbar-nav mr-auto ms-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home <span className="sr-only"></span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                Cart
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <span className="cartCount">Cart items: {items.length}</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
