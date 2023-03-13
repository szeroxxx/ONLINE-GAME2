import React from "react";
import { useStateContext } from "../contexts/ContextProvider";
import { useEffect, useState } from "react";
import { Navbar, Footer, Sidebar, ThemeSettings } from "../components";
import { GetUserRechargeList } from "../../api";
import { getCookie } from "../../cookie";
import "./Recharge.css";
const RechargeM = () => {
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
        limit: 100,
        key: text,
      };
      GetUserRechargeList(token, param)
        .then(({ data }) => {
          setUserListFiltered(data.recharge);
        })
        .catch((e) => {
          console.log("getUserList errror-", e);
        });
    } catch (error) {
      console.log("error-", error);
    }
  };

  const getUserList = () => {
    try {
      const param = {
        offset: 0,
        search: 0,
        limit: 100,
      };
      GetUserRechargeList(token, param)
        .then(({ data }) => {
          setUserList(data.recharge);
          setUserListFiltered(data.recharge);
        })
        .catch((e) => {
          console.log("getUserList errror-", e);
        });
    } catch (error) {
      console.log("error-", error);
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
          <div className="fixed static bg-main-bg dark:bg-main-dark-bg navbar w-full recharge_management_navbar">
            <Navbar />
          </div>
        </div>
      </div>
      <div className="admin_background p-7 w-full">
        <div class="recharge_management_main">
          <div
            className="flex flrx-wrap"
            style={{
              display: "flex",
              justifyContentt: "right",
              float: "right",
            }}
          >
            <div className="recharge_heading_right">
              <input
                style={{ marginBottom: "10" }}
                className="recharge_input_heading"
                placeholder="Search by number and user ID"
                value={searchText}
                onChange={(e) => {
                  setSearchText(e.target.value);
                  searchUserList(e.target.value);
                }}
              ></input>
            </div>
          </div>
          {/* <div className="user_management_table"> */}
          <table className="recharge_table">
            <thead>
              <tr>
                <th>Number</th>
                <th>User ID</th>
                <th>Amount</th>
                <th>Trans Id</th>
                <th>Date</th>
                <th>Status</th>
                <th>Total Recharge</th>
              </tr>
            </thead>
            <tbody>
              {userListFiltered && userListFiltered.length > 0 ? (
                userListFiltered.map((data, idx) => (
                  <tr key={idx}>
                    <td>{data?.user?.mobile}</td>
                    <td>{data?.user?.id}</td>
                    <td>{data?.amount}</td>
                    <td>{data?.txn_id?.substring(20)}</td>
                    <td>{data?.created_at.substring(0, 10)}</td>
                    <td>{data?.status}</td>
                    <td>{data?.user?.totalRecharge}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7}>{"No Result Found"}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default RechargeM;
