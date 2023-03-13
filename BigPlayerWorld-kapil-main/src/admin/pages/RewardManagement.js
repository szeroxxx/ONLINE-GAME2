import React from "react";
import { Button } from "../components";
import { useStateContext } from "../contexts/ContextProvider";
import { useEffect } from "react";
import { Navbar, Sidebar } from "../components";
import "./RewardManagement.css";
import { GetPhoneList, SentRewardAmount } from "../../api";
import { getCookie } from "../../cookie";
import ToasterMessage from "../../utils/ToasterMessage";
import { useState } from "react";

const RewardManagement = () => {
  const {
    setCurrentColor,
    setCurrentMode,
    currentMode,
    activeMenu,
    currentColor,
    themeSettings,
    setThemeSettings,
  } = useStateContext();
  const [phoneNumberId, setPhoneNumberId] = useState();
  const [numberOption, setNumbberOption] = useState([]);
  const [clickOnNumber, setClickOnNumber] = useState(true);
  const [amount, setAmount] = useState();
  const [searchText, setSearchText] = useState();

  const token = getCookie("token");
  useEffect(() => {
    const currentThemeColor = localStorage.getItem("colorMode");
    const currentThemeMode = localStorage.getItem("themeMode");
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  const handleSelectChange = (e) => {
    setSearchText(e.target.value);
    getPhoneList(e.target.value);
    setClickOnNumber(false);
  };
  const getPhoneList = async (value) => {
    try {
      const response = await GetPhoneList(token, value);
      if (response.data.result.length > 0) {
        setNumbberOption(response?.data?.result);
      } else {
        ToasterMessage(response.data.message, "succes");
      }
    } catch (err) {
      console.log("getTradeHistory error-", err);
    }
  };
  const sentRewardAmount = async () => {
    try {
      const payload = {
        id: phoneNumberId,
        amount: amount,
      };
      const response = await SentRewardAmount(token, payload);

      ToasterMessage("Saved successfully", "success");
    } catch (error) {
      ToasterMessage("error", "error");
    }
  };

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
        <div className="reward_main">
          <div className="top_input">
            <div className="searchPhoneContainer" style={{ height: "200px" }}>
              <div
                className="User_management_heading_right"
                style={{ marginTop: "10px" }}
              >
                <input
                  style={{ marginLeft: 4 }}
                  className="input_heading"
                  placeholder="Search by mobile number"
                  value={searchText}
                  onChange={(e) => handleSelectChange(e)}
                />
              </div>
              {!clickOnNumber && (
                <div className="phoneList">
                  {numberOption?.length > 0
                    ? numberOption.map((data) => {
                        return (
                          <div
                            onClick={() => {
                              setSearchText(data?.mobile);
                              setPhoneNumberId(data?.id);
                              setClickOnNumber(true);
                            }}
                            style={{ cursor: "pointer" }}
                          >
                            {data?.mobile}
                          </div>
                        );
                      })
                    : null}
                </div>
              )}
            </div>
            <input
              type="text"
              placeholder="Amount"
              value={amount}
              className="amount_input"
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <button className="reward_button" onClick={() => sentRewardAmount()}>
            GET
          </button>
          {/* <div className="reward_management_table"> */}
          <table className="reward_management_table">
            <thead>
              <tr>
                <th>Amount</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>5,000</td>
                <td>01/01/2023</td>
              </tr>
            </tbody>
          </table>
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default RewardManagement;
