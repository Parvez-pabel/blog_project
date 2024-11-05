import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { postCategories } from "../APIReq/APIReq";

const Layout = (props) => {
  let [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      let res = await postCategories();
      setCategories(res);
    })();
  }, []);

  return (
    <div>
      <div className="navbar top-0  fixed z-50 bg-base-100 drop-shadow-md">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            {/* //*Mobile view// */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li className=" m-2 ">
                <NavLink to={"/"}>Home</NavLink>
              </li>
              {categories.map((item, index) => {
                return (
                  <li key={index.toString()} className=" m-auto ">
                    <NavLink to={"/byCategory/" + item["id"]}>
                      {item["name"]}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>

          <h1 className="ml-52 font-bold">
            <a className=" text-xl"> BLOOGIES </a>
          </h1>
        </div>
        <div className="navbar-center hidden lg:flex">
          {/* desktop view */}
          <ul className="menu menu-horizontal px-1 mr-48">
            <li className="m-2">
              <NavLink to={"/"}>Home</NavLink>
            </li>
            {categories.map((item, index) => {
              return (
                <li key={index.toString()} className="  m-2 ">
                  <NavLink to={"/byCategory/" + item["id"]}>
                    {item["name"]}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {props.children}
    </div>
  );
};

export default Layout;
