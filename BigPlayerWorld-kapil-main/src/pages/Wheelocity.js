import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import EveryonesOrder from "../components/EveryonesOrder";
import MyOrder from "../components/MyOrder";
import Fastparityform from "../components/Fastparityform";
import "./Wheelocity.css";
function Wheelocity(props) {
  const [ordertype, setordertype] = useState("everyone");
  const [everyOrder, setEveryOrder] = useState([]);
  const [select, setselect] = useState("");
  const [walletAmount, setWalletAmount] = useState(0);
  const [color, setcolor] = useState("");

  var myOrderMode = props.darkTheme;
  var formDarkMode = props.darkTheme;
  return (
    <div
      className="container posfixed"
      style={{
        backgroundColor: props.darkTheme ? "#181818" : "white",
        color: props.darkTheme ? "white" : "black",
      }}
    >
      <div
        className="van-nav-bar__content background-top"
        style={{
          backgroundColor: props.darkTheme ? "black" : "#0093ff",
          color: props.darkTheme ? "white" : "white",
        }}
      >
        <div className="van-nav-bar__left">
          <Link
            to={"/dashboard"}
            className="van-icon van-icon-arrow-left van-nav-bar__arrow"
          >
            {/**/}
          </Link>
        </div>
        <div className="title van-ellipsis">Wheelocity</div>
        <div className="van-nav-bar__right">
          <div data-v-11837e31="" className="wh">
            <h2 style={{ fontSize: "17px" }}>Rule</h2>
          </div>
        </div>
      </div>
      <div
        className="wheel_game"
        style={{
          backgroundColor: props.darkTheme ? "#181818" : "#0e1621",
          color: props.darkTheme ? "white" : "white",
        }}
      >
        <div data-v-3e76bb0a="" className="head-top">
          <span
            data-v-3e76bb0a=""
            style={{
              fontSize: "1rem",
              color: props.darkTheme ? "white" : "white",
            }}
          >
            Period
          </span>
          <span
            data-v-3e76bb0a=""
            style={{
              fontSize: "1rem",
              color: props.darkTheme ? "white" : "white",
            }}
          >
            Count Down
          </span>
        </div>
        <div data-v-3e76bb0a="" className="head-bot">
          <span
            data-v-3e76bb0a=""
            style={{ color: props.darkTheme ? "white" : "white" }}
          >
            11202210271317
          </span>
          <div data-v-3e76bb0a="" className="van-count-down">
            <div data-v-3e76bb0a="" className="head-time">
              {/**/}
              <span className="dice_timer head-time-s1 numdupdate">0</span>
              <span className="dice_timer head-time-s2 numdupdate">0</span>
              <i className="head-time-i numdupdate">:</i>
              {/**/}
              <span className="dice_timer head-time-s3 numdupdate">0</span>
              <span className="dice_timer head-time-s4 numdupdate">0</span>
            </div>
          </div>
        </div>

        <div className="wheelocity_main">
          <div className="wheelocity_colors_div">
            <span
              className="wheelocity_colors"
              style={{ backgroundColor: "#3b4859" }}
            ></span>
            <span
              className="wheelocity_colors"
              style={{ backgroundColor: "#3c96ff" }}
            ></span>
            <span
              className="wheelocity_colors"
              style={{ backgroundColor: "#3b4859" }}
            ></span>
            <span
              className="wheelocity_colors"
              style={{ backgroundColor: "#3b4859" }}
            ></span>
            <span
              className="wheelocity_colors"
              style={{ backgroundColor: "#fa4359" }}
            ></span>
            <span
              className="wheelocity_colors"
              style={{ backgroundColor: "#3c96ff" }}
            ></span>
            <span
              className="wheelocity_colors"
              style={{ backgroundColor: "#3c96ff" }}
            ></span>
            <span
              className="wheelocity_colors"
              style={{ backgroundColor: "#3b4859" }}
            ></span>
            <span
              className="wheelocity_colors"
              style={{ backgroundColor: "#fa4359" }}
            ></span>
            <span
              className="wheelocity_colors"
              style={{ backgroundColor: "#3b4859" }}
            ></span>
            <span
              className="wheelocity_colors"
              style={{ backgroundColor: "#3b4859" }}
            ></span>
            <span
              className="wheelocity_colors"
              style={{ backgroundColor: "#fa4359" }}
            ></span>
            <span
              className="wheelocity_colors"
              style={{ backgroundColor: "#fa4359" }}
            ></span>
            <span
              className="wheelocity_colors"
              style={{ backgroundColor: "#3b4859" }}
            ></span>
            <span
              className="wheelocity_colors"
              style={{ backgroundColor: "#3b4859" }}
            ></span>
            <span
              className="wheelocity_colors"
              style={{ backgroundColor: "#5ec221" }}
            ></span>
            <span
              className="wheelocity_colors"
              style={{ backgroundColor: "#fa4359" }}
            ></span>
            <span
              className="wheelocity_colors"
              style={{ backgroundColor: "#3b4859" }}
            ></span>
            <span
              className="wheelocity_colors"
              style={{ backgroundColor: "#fa4359" }}
            ></span>
            <span
              className="wheelocity_colors"
              style={{
                backgroundColor: "#f0f8ff",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              ?
            </span>
          </div>
          <div className="wheel" style={{ marginTop: "20px" }}>
            <div className="wheelArrow"></div>
            <div className="wheel_png">
              <img className="wheel_main_img" src="./assets/wheel.svg" />
              <div className="wlpcity">
                <div className="">Place your bets</div>
              </div>
            </div>
            <div className="wljbb">
              <div
                className="wlj"
                style={{ color: "#626b76" }}
                onClick={() => {
                  setselect("2x");
                  setcolor("black");
                }}
              >
                2x
              </div>
              <div
                className="wlj"
                style={{ color: "#fa4359" }}
                onClick={() => {
                  setselect("3x");
                  setcolor("red");
                }}
              >
                3x
              </div>
              <div
                className="wlj"
                style={{ color: "#3c96ff" }}
                onClick={() => {
                  setselect("5x");
                  setcolor("blue");
                }}
              >
                5x
              </div>
              <div
                className="wlj"
                style={{ color: "#5ec221" }}
                onClick={() => {
                  setselect("50x");
                  setcolor("green");
                }}
              >
                50x
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="game_main4" style={{ marginTop: "0px" }}>
        <div className="game_main4_header dice_last">
          <p
            style={{
              backgroundColor: props.darkTheme ? "black" : "white",
              color: props.darkTheme ? "white" : "black",
              borderRight: "2px solid lightgray",
              fontWeight: "bold",
            }}
            className={`fs20 lightcolor ${
              ordertype == "everyone" && "game_users_selected"
            }`}
            onClick={() => setordertype("everyone")}
          >
            Everyone's Order
          </p>
          <p
            className={`fs20 lightcolor ${
              ordertype == "my" && "game_users_selected"
            }`}
            style={{
              backgroundColor: props.darkTheme ? "black" : "white",
              color: props.darkTheme ? "white" : "black",

              fontWeight: "bold",
            }}
            onClick={() => setordertype("my")}
          >
            My Order
          </p>
        </div>
        {ordertype == "everyone" ? (
          <EveryonesOrder result={everyOrder} />
        ) : (
          <MyOrder result={MyOrder} myOrderMode={myOrderMode} />
        )}
      </div>
      {select && (
        <Fastparityform
          selected={select}
          walletAmount={walletAmount}
          setselected={setselect}
          formDarkMode={formDarkMode}
          color={color}
        />
      )}
    </div>
  );
}

export default Wheelocity;
