import React, { useState, useEffect } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import { Navbar, Footer, Sidebar, ThemeSettings } from "../components";
import "./Withdrawal.css";
import { GetWithdrawlList, UpdateWithdrawlRequest } from "../../api";
import { getCookie } from "../../cookie";

const Withdrawal = () => {
  const [userList, setUserList] = useState([]);
  const [userListFiltered, setUserListFiltered] = useState([]);
  const [searchText, setSearchText] = useState("");
  const { setCurrentColor, setCurrentMode, activeMenu } = useStateContext();
  const [month, setmonth] = React.useState("Review");

  let token = getCookie("token");
  console.log("token", token);
  const searchUserList = (text) => {
    try {
      const param = {
        offset: 0,
        search: 1,
        key: text,
      };
      GetWithdrawlList(token, param)
        .then(({ data }) => {
          setUserListFiltered(data.result);
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
        limit: 1000,
      };
      GetWithdrawlList(token, param)
        .then(({ data }) => {
          console.log("data--", data);
          setUserList(data.result);
          setUserListFiltered(data.result);
        })
        .catch((e) => {
          console.log("getUserList errror-", e);
        });
    } catch (error) {
      console.log("error-", error);
    }
  };

  const handleChange = (e, data) => {
    console.log("data", data);
    try {
      const param = {
        status: e.target.value,
        withdraw_id: data.id,
        withdrawl_amount: data.withdraw_amount,
        user_id: data.user_id,
      };
      console.log("param", param);
      UpdateWithdrawlRequest(token, param)
        .then(({ data }) => {
          console.log("({data})", { data });
          alert("Request updated Successfully");
          window.location.reload();
        })
        .catch((e) => {
          console.log("handleChange errror-", e);
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
          <div className="fixed static bg-main-bg dark:bg-main-dark-bg navbar w-full user_management_navbar">
            <Navbar />
          </div>
        </div>
      </div>
      <div className="admin_background p-7 w-full">
        <div className="withdrawal_management_main">
          <div
            className="flex flrx-wrap"
            style={{
              display: "flex",
              justifyContentt: "right",
              float: "right",
            }}
          >
            <div className="withdrawal_heading">
              <input
                className="withdrawal_input_heading"
                placeholder="Search by number"
              ></input>
            </div>
          </div>
          <table className="withdrawal_table">
            <thead>
              <tr>
                <th>Sr No</th>
                <th>Number</th>
                <th>Name</th>
                <th>UPI /PAYTM</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {userListFiltered && userListFiltered.length > 0
                ? userListFiltered.map((data, idx) => (
                    <tr key={idx}>
                      <td>{idx + 1}</td>
                      <td>{data.mobile}</td>
                      <td>{data.name}</td>
                      <td>{data.payment_id}</td>
                      <td>{data.withdraw_amount}</td>
                      <td>{data.created_at.substring(0, 10)}</td>

                      {/* <td>{data.withdraw_status}</td> */}
                      {data.withdraw_status == "PENDING" ? (
                        <td>
                          <select
                            className="dropdown"
                            onChange={(e) => handleChange(e, data)}
                          >
                            <option value="Review">Review</option>
                            <option value="REJECTED">Reject</option>
                            <option value="ACCEPTED">Success</option>
                          </select>
                        </td>
                      ) : (
                        <td>{data.withdraw_status}</td>
                      )}
                    </tr>
                  ))
                : null}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Withdrawal;
