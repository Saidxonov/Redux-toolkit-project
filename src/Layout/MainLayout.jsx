import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../images/layout/pixl-logo.svg";

function MainLayout({ children }) {
  return (
    <div className="flex">
      <div className="w-[310px] border-r-2 h-[100vh] bg-[#89512A] fixed">
        <div className="w-[44px] mt-[50px] flex ml-[50px] items-end">
          <img src={Logo} alt="logo" />
          <h2 className="text-white text-3xl mt-[10px]">ixl</h2>
        </div>
        <div className="menu">
          <ul className="text-white mt-[50px] ml-[50px]">
            <li className="text-3xl p-[10px] hover:bg-[#986F50] rounded-md cursor-pointer">
              <NavLink to="/">To Do</NavLink>
            </li>
            <li className="text-3xl p-[10px] hover:bg-[#986F50] rounded-md cursor-pointer">
              <NavLink to="/crud">CRUD</NavLink>
            </li>
            <li className="text-3xl p-[10px] hover:bg-[#986F50] rounded-md cursor-pointer">
              <NavLink to="/shop">Shop</NavLink>
            </li>
          </ul>
        </div>
        <div className="powered">
          <h2 className="fixed bottom-10 left-10 text-[#fff]">
            Powered by{" "}
            <NavLink
              to="https://pixl.uz/"
              target="_blank"
              className="text-[#fff] underline"
            >
              Pixl
            </NavLink>
          </h2>
        </div>
      </div>
      {children}
    </div>
  );
}

export default MainLayout;
