import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import EveryonesOrder from "../components/EveryonesOrder";
import Fastparityform from "../components/Fastparityform";
import MyOrder from "../components/MyOrder";
import "./MineSweeper.css";
function MineSweeper(props) {
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
        <div className="title van-ellipsis">Mine Sweeper</div>
        <div className="van-nav-bar__right">
          <div data-v-11837e31="" className="wh">
            <h2 style={{ fontSize: "17px" }}>Rule</h2>
          </div>
        </div>
      </div>
      <div
        className="minesweeper_game"
        style={{
          backgroundColor: props.darkTheme ? "#181818" : "#4ba3d4",
          color: props.darkTheme ? "white" : "white",
        }}
      >
        <div className="minesweeper_top">
          <div className="left_top">
            <span>
              <img src="./assets/ms_timer.svg" />
            </span>
            <span style={{ marginTop: "5px" }}>_</span>
          </div>
          <div className="left_top">
            <span>
              <img src="./assets/coin_rs.svg" />
            </span>
            <span style={{ marginLeft: "3px" }}>0.00</span>
          </div>
        </div>

        <div className="minesweeper_main">
          <div className="msbox">
            <div className="ms-embox"></div>
          </div>
          <div className="msbox">
            <div className="ms-embox"></div>
          </div>
          <div className="msbox">
            <div className="ms-embox"></div>
          </div>
          <div className="msbox">
            <div className="ms-embox"></div>
          </div>
          <div className="msbox">
            <div className="ms-embox"></div>
          </div>
          <div className="msbox">
            <div className="ms-embox"></div>
          </div>
          <div className="msbox">
            <div className="ms-embox"></div>
          </div>
          <div className="msbox">
            <div className="ms-embox"></div>
          </div>
          <div className="msbox">
            <div className="ms-embox"></div>
          </div>
          <div
            className="ms_start zooani"
            onClick={() => {
              setselect("Start");
              setcolor("green");
            }}
          ></div>
        </div>
      </div>

      <div className="second_main up">
        <p style={{ fontSize: "18px", textAlign: "center" }}>
          To get a bonus, check the boxes where you think there are no mines!
        </p>
      </div>
      <div className="ms_my_order">My order</div>
      <div className="m_order">more ></div>
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

export default MineSweeper;
