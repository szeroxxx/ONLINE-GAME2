import React from "react";
import { Link, NavLink } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";

import { links } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

const Sidebar = () => {
  const { currentColor, activeMenu, setActiveMenu, screenSize } =
    useStateContext();

  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-white hover:text-gray-900 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";

  return (
    <div
      className="sidebar_background text-color h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10"
      style={{ widhth: "250px" }}
    >
      {activeMenu && (
        <>
          <div className="flex justify-between items-center text-color">
            <Link
              to="/"
              onClick={handleCloseSideBar}
              className=" text-color items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
            ></Link>
            <div content="Menu" position="BottomCenter">
              <button
                type="button"
                onClick={() => setActiveMenu(!activeMenu)}
                style={{ color: currentColor }}
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
              >
                <MdOutlineCancel />
              </button>
            </div>
          </div>
          <div
            className="mt-10 sidebar_background"
            style={{ fontSize: "13px" }}
          >
            <h1 className="admin_sidebar_heading">Win99x</h1>
            {links.map((item) => (
              <div key={item.title}>
                <NavLink
                  to={`/${item.link}`}
                  key={item.title}
                  onClick={handleCloseSideBar}
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? "#7367F0" : "",
                    // color: isActive ? "white" : "#e4e6f4ad",
                  })}
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  {/* {link.icon} */}
                  <img src={item.imgLink} style={{ width: "8%" }} />
                  <p className="capatalize" style={{ marginLeft: "-10px" }}>
                    {item.title}
                  </p>
                </NavLink>
              </div>
            ))}
          </div>
        </>
      )}
      <Link to={"/adminlogin"}>
        <button className="admin_logout">Log out</button>
      </Link>
    </div>
  );
};

export default Sidebar;
