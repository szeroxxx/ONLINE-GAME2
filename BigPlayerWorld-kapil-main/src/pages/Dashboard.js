import React, { useState, useEffect, useRef } from "react";
import DashFooter from "../components/DashFooter";
import { Link, Navigate, useNavigate } from "react-router-dom";
import {
  GetGameId,
  GetOrders,
  SendGamePlay,
  GetBettingResult,
  GetWalletAmount,
} from "../api";
import { getCookie, deleteCookie } from "../cookie";

function Dashboard(props) {
  const [walletAmount, setWalletAmount] = useState(0);
  const [userid, setuserid] = useState("");

  const navigate = useNavigate();

  async function fetchWalletData() {
    try {
      const token = getCookie("token");
      const { data } = await GetWalletAmount(token);
      if (data.status === "Unauthorized") {
        deleteCookie("token");
        deleteCookie("ref");
        navigate("/login");
        return;
      } else if (data?.result?.user_recharge_amount) {
        let ta = 0;
        if (data.result.user_recharge_amount)
          ta = +data.result.user_recharge_amount;
        if (data.result.user_bonus_amount)
          ta = ta + +data.result.user_bonus_amount;

        setWalletAmount(ta);
        setuserid(data.result.user_id);
      }
    } catch (e) {
      console.log("fetchWalletData error:", e);
      return false;
    }
  }

  useEffect(() => {
    fetchWalletData();
  }, []);

  var footerMode = props.darkTheme;
  const handleLinkClick = () => {
    window.location.href = "https://seven.bigplayerworld.com/";
  };
  return (
    <div
      className="container"
      style={{ backgroundColor: props.darkTheme ? "#181818" : "white" }}
    >
      <div className="dash_upper">
        <div className="dash_upper_desc">
          <p style={{ color: props.darkTheme ? "white" : "rgb(90,82,82)" }}>
            Balance
          </p>
          <p
            style={{
              color: props.darkTheme ? "white" : "black",
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            {"₹ " + walletAmount}
            <syncAlt />
          </p>
          <p style={{ color: "gray" }}>ID: {userid}</p>
        </div>
        <div className="dash_upper_btns">
          <button
            style={{
              color: "white",
              backgroundColor: props.darkTheme ? "black" : "#1781ff",
            }}
            onClick={() => navigate("/recharge")}
          >
            Recharge
          </button>
          <button onClick={() => navigate("/withdraw")}>Withdraw</button>
        </div>
      </div>
      <div className="dash_options">
        <Link to={"/reward"} className="dash_option">
          <div className="dash_option_icon" style={{ background: "#e09307" }}>
            <img src="assets/gift.png" alt="" />
          </div>
          <p
            style={{
              color: props.darkTheme ? "white" : "black",
            }}
          >
            Task reward
          </p>
        </Link>
        <Link to={"/spin"} className="dash_option">
          <div className="dash_option_icon" style={{ background: "#20bc20" }}>
            <img
              src="assets/fortune-wheel-5192222-4333637.gif"
              alt=""
              style={{ width: "120%", borderRadius: "100%" }}
            />
          </div>
          <p
            style={{
              color: props.darkTheme ? "white" : "black",
            }}
          >
            Spin
          </p>
        </Link>
      </div>

      <div
        className="dashgames"
        style={{ backgroundColor: props.darkTheme ? "#181818" : "white" }}
      >
        <a
          href="https://seven.bigplayerworld.com/gamedashboard.php"
          className="dashgame"
        >
          <img src="assets/rainbow_colour.jpeg" alt="" />
        </a>
        <Link to={"/fastparty"} className="dashgame">
          <img src="assets/fast-parity.jpg" alt="" />
        </Link>
        {/* <img src="assets/opening_soon.png" className="opening_soon_AB" /> */}
        <Link to={"/andarbahar"} className="dashgame">
          <img src="assets/AnB.jpg" alt="" />
        </Link>

        <img src="assets/opening_soon.png" className="opening_soon_parity" />
        <Link to={"/Parity"} className="dashgame">
          <img src="assets/parity.jpg" alt="" />
        </Link>

        <img src="assets/opening_soon.png" className="opening_soon_sapre" />
        <Link to={"/HeadandTail"} className="dashgame">
          <img src="assets/head&tail.jpeg" alt="" />
        </Link>

        <img src="assets/opening_soon.png" className="opening_soon_dice" />
        <Link to={"/dice"} className="dashgame">
          <img src="assets/dice.jpg" alt="" />
        </Link>

        <img src="assets/opening_soon.png" className="opening_soon_wheel" />
        <Link to={"/wheelocity"} className="dashgame">
          <img src="assets/wheel.png" alt="" />
        </Link>
        <img
          src="assets/opening_soon.png"
          className="opening_soon_minesweeper"
        />
        <Link
          href="#"
          onClick={handleLinkClick}
          className="dashgame"
          style={{ marginBottom: "50px" }}
        >
          <img src="assets/MineSweeper.png" alt="" />
        </Link>
      </div>
      <DashFooter selected={"home"} footerMode={footerMode} />
    </div>
  );
}

export default Dashboard;
