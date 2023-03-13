import React from "react";
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
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

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

const Agent = () => {
  const { setCurrentColor, setCurrentMode, activeMenu } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem("colorMode");
    const currentThemeMode = localStorage.getItem("themeMode");
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  return (
    <>
      <div className="flex relative dark:bg-main-dark-bg">
        {activeMenu ? (
          <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ml-0">
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
              ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  "
              : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
          }
        >
          <div className="fixed static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
            <Navbar />
          </div>
        </div>
      </div>
      <div className="admin_background mt-10 p-7 w-full">
        <div className=" flex flrx-wrap">
          <div className="User_management_heading">
            <h1 style={{ fontSize: 20 }}>Agent</h1>
          </div>
          <div className="User_management_heading">
            <h1 style={{ fontSize: 17 }}>
              Total Agent:{" "}
              <span style={{ marginLeft: 10, color: "gray" }}>1,00,000</span>{" "}
            </h1>
          </div>

          <div className="User_management_heading">
            <input
              style={{ marginLeft: 4 }}
              className="input_heading"
              placeholder="Search by number and agent ID"
            />
          </div>
        </div>
        <div className="user_management_table">
          <table className="user_management_table">
            <tr>
              <th>Number</th>
              <th>User ID</th>
              <th>Wallet</th>
              <th>Date</th>
              <th>Recharge</th>
              <th>Withdrawal</th>
              <th>Action</th>
            </tr>
            <tr>
              <td>7340351974</td>
              <td>001</td>
              <td>10,000</td>
              <td>01/12/2022</td>
              <td>15.000</td>
              <td>1,000</td>
              <td>Activity</td>
            </tr>
            <tr>
              <td>7340351974</td>
              <td>001</td>
              <td>10,000</td>
              <td>01/12/2022</td>
              <td>15.000</td>
              <td>1,000</td>
              <td>Activity</td>
            </tr>
            <tr>
              <td>7340351974</td>
              <td>001</td>
              <td>10,000</td>
              <td>01/12/2022</td>
              <td>15.000</td>
              <td>1,000</td>
              <td>Activity</td>
            </tr>
            <tr>
              <td>7340351974</td>
              <td>001</td>
              <td>10,000</td>
              <td>01/12/2022</td>
              <td>15.000</td>
              <td>1,000</td>
              <td>Activity</td>
            </tr>
            <tr>
              <td>7340351974</td>
              <td>001</td>
              <td>10,000</td>
              <td>01/12/2022</td>
              <td>15.000</td>
              <td>1,000</td>
              <td>Activity</td>
            </tr>
            <tr>
              <td>7340351974</td>
              <td>001</td>
              <td>10,000</td>
              <td>01/12/2022</td>
              <td>15.000</td>
              <td>1,000</td>
              <td>Activity</td>
            </tr>
            <tr>
              <td>7340351974</td>
              <td>001</td>
              <td>10,000</td>
              <td>01/12/2022</td>
              <td>15.000</td>
              <td>1,000</td>
              <td>Activity</td>
            </tr>
            <tr>
              <td>7340351974</td>
              <td>001</td>
              <td>10,000</td>
              <td>01/12/2022</td>
              <td>15.000</td>
              <td>1,000</td>
              <td>Activity</td>
            </tr>
            <tr>
              <td>7340351974</td>
              <td>001</td>
              <td>10,000</td>
              <td>01/12/2022</td>
              <td>15.000</td>
              <td>1,000</td>
              <td>Activity</td>
            </tr>
            <tr>
              <td>7340351974</td>
              <td>001</td>
              <td>10,000</td>
              <td>01/12/2022</td>
              <td>15.000</td>
              <td>1,000</td>
              <td>Activity</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
};

export default Agent;
