import React, { useState, useEffect } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import { Navbar, Sidebar } from "../components";
import {  GetUserList } from "../../api";
import { getCookie } from "../../cookie";
import Button from "@mui/material/Button";
import "./Users.css";
import { Link } from "react-router-dom";

const User = () => {
  const token = getCookie("token");
  const [userList, setUserList] = useState([]);
  const [userListFiltered, setUserListFiltered] = useState([]);
  const [searchText, setSearchText] = useState("");
  const { setCurrentColor, setCurrentMode, activeMenu } = useStateContext();

  const searchUserList = (text) => {
    try {
      const param = {
        offset: 0,
        search: 1,
        key: text,
      };
      GetUserList(token, param)
        .then(({ data }) => {
          setUserListFiltered(data.user);
        })
        .catch((e) => {
        });
    } catch (error) {
    }
  };

  const getUserList = () => {
    try {
      const param = {
        offset: 0,
        search: 0,
      };
      GetUserList(token, param)
        .then(({ data }) => {
          setUserList(data.user);
          setUserListFiltered(data.user);
        })
        .catch((e) => {
        });
    } catch (error) {
    }
  };
  useEffect(() => {
    const currentThemeColor = localStorage.getItem("colorMode");
    const currentThemeMode = localStorage.getItem("themeMode");
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
    getUserList();
  }, []);
 
  return (
    <>
      <div className="flex relative dark:bg-main-dark-bg">
        {activeMenu ? (
          <div
            className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ml-0"
            style={{ width: "15rem" }}
          >
            <Sidebar />
          </div>
        ) : (
          <div className="w-0 dark:bg-secondary-dark-bg ml-0">
            <Sidebar />
          </div>
        )}
        <div
          className={
            activeMenu
              ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  margin-left-big"
              : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 margin-left-small"
          }
        >
          <div className="fixed static bg-main-bg dark:bg-main-dark-bg navbar w-full user_management_navbar">
            <Navbar />
          </div>
        </div>
      </div>
      <div className="admin_background p-7 w-full">
        <div className="user_management_main">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div className="User_management_heading_left">
              <h1 className="total_user">
                Total User:{" "}
                <span
                  style={{
                    marginLeft: 10,
                    color: "#7367F0",
                    fontWeight: "bold",
                  }}
                >
                  {userList?.length}
                </span>{" "}
              </h1>
            </div>

            <div className="User_management_heading_right">
              <input
                style={{ marginLeft: 4 }}
                className="input_heading"
                placeholder="Search by mobile number"
                value={searchText}
                onChange={(e) => {
                  setSearchText(e.target.value);
                  searchUserList(e.target.value);
                }}
              />
            </div>
          </div>
          <table className="user_management_table">
            <thead>
              <tr>
                <th>Number</th>
                <th>User ID</th>
                <th>Wallet</th>
                <th>Date</th>
                <th>Recharge</th>
                <th>Withdrawal</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {userListFiltered && userListFiltered.length > 0
                ? userListFiltered.map((data, idx) => (
                    <tr key={idx}>
                      <td>{data.mobile}</td>
                      <td>{data.id}</td>
                      <td>{+data.totalWalletAmount + +data.totalRecharge}</td>
                      <td>{data.created_at.substring(0, 10)}</td>
                      <td>{data.totalRecharge}</td>
                      <td>{data.totalWithdrawlAmount}</td>
                      <td>
                        <Link to={"/useractivity"} state={{ userId: data?.id }}>Activity</Link>
                      </td>
                    </tr>
                  ))
                : null}
            </tbody>
          </table>
          {/* <div className="user_management_table_div"> */}
          {/* <table className="user_management_table">
          <thead>
            <tr>
              <th>Number</th>
              <th>User ID</th>
              <th>Wallet</th>
              <th>Date</th>
              <th>Recharge</th>
              <th>Withdrawal</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {userListFiltered && userListFiltered.length > 0
              ? userListFiltered.map((data, idx) => (
                  <tr key={idx}>
                    <td>{data.mobile}</td>
                    <td>{data.id}</td>
                    <td>{+data.totalWalletAmount + +data.totalRecharge}</td>
                    <td>{data.created_at.substring(0, 10)}</td>
                    <td>{data.totalRecharge}</td>
                    <td>{data.totalWithdrawlAmount}</td>
                    <td>
                      <Link to={"/useractivity"}>Activity</Link>
                    </td>
                  </tr>
                ))
              : null}
          </tbody>
        </table> */}
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default User;
