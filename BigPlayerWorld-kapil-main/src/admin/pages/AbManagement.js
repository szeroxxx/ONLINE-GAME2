import React from "react";
import { useStateContext } from "../contexts/ContextProvider";
import { useEffect } from "react";
import { Navbar, Sidebar } from "../components";
import "./AbManagement.css";

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

const AbManagement = () => {
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
        <div className="ab_management_heading">
          <h1 style={{ fontSize: 25 }}>A&B Management</h1>
        </div>

        <div className="ab_management_main">
          <div className="flex flex-wrap main-head mt-8 mb-5">
            <div className="timer">
              <p style={{ fontSize: 18 }}>
                Timer <span style={{ fontSize: 22, marginLeft: 4 }}>0:55</span>
              </p>
            </div>
            <div className="gameId">
              <p style={{ fontSize: 18 }}>
                Game ID :{" "}
                <span style={{ fontSize: 22, marginLeft: 4 }}>01122022022</span>
              </p>
            </div>
            <input type="button" />
          </div>
          <table className="ab_management_table">
            <tr>
              <th>Number</th>
              <th>User</th>
              <th>Amount</th>
              <th>Result</th>
            </tr>
            <tr>
              <td>Yes</td>
              <td>55</td>
              <td>10,000</td>
              <td>
                <input type="radio" />
              </td>
            </tr>
            <tr>
              <td>May</td>
              <td>55</td>
              <td>1,000</td>
              <td>
                <input type="radio"></input>
              </td>
            </tr>
            <tr>
              <td>No</td>
              <td>55</td>
              <td>00</td>
              <td>
                <input type="radio"></input>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
};
export default AbManagement;
