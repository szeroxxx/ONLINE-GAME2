import React from "react";
import { Navbar, Footer, Sidebar, ThemeSettings } from "../components";
import { useStateContext } from "../contexts/ContextProvider";
import { useEffect } from "react";
import "./Dashboards.css";
import { deleteCookie, getCookie } from "../../cookie";
import { useNavigate } from "react-router-dom";
import { GetDashBoard } from "../../api";
import { useState } from "react";
const Dashboards = () => {
  const {
    setCurrentColor,
    setCurrentMode,
    currentMode,
    activeMenu,
    currentColor,
    themeSettings,
    setThemeSettings,
  } = useStateContext();
  const history = useNavigate();
  const token = getCookie("token");
  useEffect(() => {
    getDashBoardData();
    const currentThemeColor = localStorage.getItem("colorMode");
    const currentThemeMode = localStorage.getItem("themeMode");
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);
  const [dashboardData, setDashboardData] = useState({
    monthUserCount: "",
    totalUserCount: "",
    monthyRecharge: "",
  });

  const getDashBoardData = () => {
    try {
      GetDashBoard(token)
        .then(({ data }) => {
          if (data.status === "Unauthorized") {
            deleteCookie("token");
            deleteCookie("ref");
            history("/login");
            return;
          } else {
            setDashboardData((prev) => ({
              ...prev,
              totalUserCount: data?.result?.totalUserCount,
              monthyRecharge: data?.result?.monthyRecharge,
              monthUserCount:data?.result?.monthUserCount
            }));
            console.log(data, "data");
          }
        })
        .catch((e) => {});
    } catch (error) {}
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
          <div className="fixed static bg-main-bg dark:bg-main-dark-bg navbar w-full dashboard_navbar">
            <Navbar />
          </div>
        </div>
      </div>
      <div className="admin_background w-full ">
        <div className="dashboard_main">
          <div className="dashboards_cards">
            <div className="main-div">
              <div>
                <h1 className="heading">User</h1>
                <p className="amount">{dashboardData?.totalUserCount}</p>
              </div>
            </div>
           
            <div className="main-div">
              <div>
                <h1 className="heading">Month User</h1>
                <p className="amount">{dashboardData?.monthUserCount}</p>
              </div>
            </div>
            <div className="main-div">
              <div>
                <h1 className="heading">Monthy Recharge</h1>
                <p className="amount">{dashboardData?.monthyRecharge}</p>
              </div>
            </div>
            <div className="main-div">
            <div>
              <h1 className="heading">Month User</h1>
              <p className="amount">"5,000"</p>
            </div>
          </div>
          </div>

          <div className="flex flex-wrap mt-10">
            <div className="div-2">
              <div>
                <h1 className="heading-2">Manage Parity Result</h1>
              </div>
              <div
                className="mt-5"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <div>
                  <p className="left-content">20221201211</p>
                </div>
                <div className="timestamp">
                  <h1>0:55</h1>
                </div>
              </div>
              <div className="numbers mt-5">
                <div className="row flex flex-wrap justify-between mt-5">
                  <div className="number">
                    <p>1</p>
                  </div>
                  <div className="number">
                    <p>2</p>
                  </div>
                  <div className="number">
                    <p>3</p>
                  </div>
                </div>
                <div className="row flex flex-wrap justify-between mt-5">
                  <div className="number">
                    <p>4</p>
                  </div>
                  <div className="number">
                    <p>5</p>
                  </div>
                  <div className="number">
                    <p>6</p>
                  </div>
                </div>
                <div className="row flex flex-wrap justify-between mt-5">
                  <div className="number">
                    <p>7</p>
                  </div>
                  <div className="number">
                    <p>8</p>
                  </div>
                  <div className="number">
                    <p>9</p>
                  </div>
                </div>
              </div>
              <button className="get_button">Get</button>
            </div>

            <div className="div-2">
              <div>
                <h1 className="heading-2">Manage A&B Result</h1>
              </div>
              <div
                className="mt-5"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <div>
                  <p className="left-content">20221201211</p>
                </div>
                <div className="timestamp">
                  <h1>0:55</h1>
                </div>
              </div>
              <div className="numbers mt-9">
                <div className="row flex flex-wrap justify-between mt-5">
                  <div className="number">
                    <p>Yes</p>
                  </div>
                  <div className="number">
                    <p>May</p>
                  </div>
                  <div className="number">
                    <p>No</p>
                  </div>
                </div>
              </div>
              <button style={{ marginTop: "50px" }} className="get_button">
                Get
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboards;
