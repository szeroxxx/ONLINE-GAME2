import React, { useState } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import { useEffect } from "react";
import { Navbar, Sidebar } from "../components";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./TradeHistory.css";
// import getTradeHistory from "../apiCalls/getTradeHistory";
import { Select } from "@mui/material";
import { GetPhoneList, GetTradeHistory } from "../../api";
import { getCookie } from "../../cookie";
import ToasterMessage from "../../utils/ToasterMessage";
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const numberOptions = [
  { value: "8787200626", label: "8787200626" },
  { value: "8824478072", label: "8824478072" },
  { value: "7340351974", label: "7340351974" },
  { value: "9925487451", label: "9925487451" },
];

const TradeHistory = () => {
  const {
    setCurrentColor,
    setCurrentMode,
    currentMode,
    activeMenu,
    currentColor,
    themeSettings,
    setThemeSettings,
  } = useStateContext();
  const token = getCookie("token");

  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [numberOption, setNumbberOption] = useState([]);
  const [phoneNumberId, setPhoneNumberId] = useState();
  const [rowValue, setRowValue] = useState([]);
  const [clickOnNumber, setClickOnNumber] = useState(true);

  const [searchText, setSearchText] = useState();

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
      setNumbberOption(response?.data?.result);
    } catch (err) {
      console.log("getTradeHistory error-", err);
    }
  };

  const getTradeHistory = async (phoneNumberId) => {
    const token = getCookie("token");
    const payload = {
      id: phoneNumberId,
      from_date: fromDate,
      to_date: toDate,
      offset: 0,
      limit: 10,
    };
    try {
      const response = await GetTradeHistory(token, payload);
      setRowValue(response?.data?.result);
      ToasterMessage(response.data.message, "success");
    } catch (err) {
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
        <div className="trade_main">
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
              {!clickOnNumber ? (
                <div className="phoneList" >
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
              ) : ""}
            </div>

            <div className="from-to-date-container">
              <div style={{ display: "flex" }}>
                <label
                  style={{
                    marginTop: "40px",
                    marginRight: "20px",
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: "bold",
                  }}
                >
                  From Date
                </label>
                <input
                  type="date"
                  placeholder="Calender"
                  className="trade_amount_input"
                  onChange={({ target }) => {
                    setFromDate(target.value);
                  }}
                  style={{ marginRight: "30px" }}
                />
              </div>
              <div style={{ display: "flex" }}>
                <label
                  style={{
                    marginTop: "40px",
                    marginRight: "20px",
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: "bold",
                  }}
                >
                  To Date
                </label>
                <input
                  type="date"
                  placeholder="Calender"
                  className="trade_amount_input"
                  onChange={({ target }) => {
                    setToDate(target.value);
                  }}
                  style={{ marginRight: "20px" }}
                />
              </div>
            </div>
          </div>
          <button
            className="trade_button"
            onClick={() => getTradeHistory(phoneNumberId)}
          >
            GET
          </button>
          <div className="trade_history_table">
            <table className="trade_history_table">
              <thead>
                <tr
                //   className="reward_table_head"
                //   style={{ paddingRight: 200, paddingLeft: 200 }}
                >
                  <th>Period ID</th>
                  <th>Value</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Game Type</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {rowValue?.map((data) => {
                  return (
                    <>
                      {data.message ? (
                        <tr>{data.message}</tr>
                      ) : (
                        <tr>
                          <td>{data?.game_id}</td>
                          <td>{data?.value}</td>
                          <td>{data?.amount}</td>
                          <td>{data?.status ? "Success" : "Loose"}</td>
                          <td>fast parity</td>
                          <td>{data?.created_at}</td>
                        </tr>
                      )}
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default TradeHistory;
