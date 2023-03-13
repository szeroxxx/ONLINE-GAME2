import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import EveryonesOrder from "../components/EveryonesOrder";
import MyOrder from "../components/MyOrder";
import "./Dice.css";
function Dice(props) {
  const [ordertype, setordertype] = useState("everyone");
  const [everyOrder, setEveryOrder] = useState([]);

  var myOrderMode = props.darkTheme;
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
        <div className="title van-ellipsis">DICE</div>
        <div className="van-nav-bar__right">
          <div data-v-11837e31="" className="wh">
            <h2 style={{ fontSize: "17px" }}>Rule</h2>
          </div>
        </div>
      </div>
      <div
        className="dice_game"
        style={{
          backgroundColor: props.darkTheme ? "#181818" : "white",
          color: props.darkTheme ? "white" : "black",
        }}
      >
        <div data-v-3e76bb0a="" className="head-top">
          <span
            data-v-3e76bb0a=""
            style={{
              fontSize: "1rem",
              color: props.darkTheme ? "white" : "#979797",
            }}
          >
            Period
          </span>
          <span
            data-v-3e76bb0a=""
            style={{
              fontSize: "1rem",
              color: props.darkTheme ? "white" : "#979797",
            }}
          >
            Count Down
          </span>
        </div>
        <div data-v-3e76bb0a="" className="head-bot">
          <span
            data-v-3e76bb0a=""
            style={{ color: props.darkTheme ? "white" : "#383b45" }}
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
        <div className="main-1">
          <div className="less_than_div">
            <div className="f-16">Less than</div>
            <div className="f-20">48</div>
          </div>
          <div className="multiplier_div">
            <div className="f-16">Multiplier</div>
            <div className="f-20">1.98</div>
          </div>
        </div>
        <div className="range_div">
          <input type="range" className="slider" min={1} max={99} value={48} />
          <div className="slidPro"></div>
        </div>
        <div>
          <div className="range_down">
            <span>1</span>
            <span>|</span>
            <span>25</span>
            <span>|</span>
            <span>50</span>
            <span>|</span>
            <span>75</span>
            <span>|</span>
            <span>99</span>
          </div>
        </div>

        <div className="jnum dn">
          <div style={{ fontSize: "16px", fontWeight: "bold" }}>
            Less than
            <span style={{ fontSize: "16px", fontWeight: "bold" }}> 48</span>
          </div>
        </div>
      </div>

      <div
        className="DiceRecord"
        style={{
          backgroundColor: props.darkTheme ? "black" : "white",
          color: props.darkTheme ? "white" : "#383b45",
          borderBottom: "3px solid #1e88e5",
          boxShadow: "0 -3px 4px 0 #6e6e6e30",
        }}
      >
        Record
      </div>
      <div data-v-11837e31="" className="Dice-content">
        <div
          data-v-11837e31=""
          style={{ marginBottom: "10px", color: "#383b45" }}
          className="pokerRecord-content-top"
        >
          {" "}
          Dice Record(s){" "}
        </div>
        <Link to="/dicerecords">
        <div
          data-v-11837e31=""
          style={{ marginBottom: "10px", color: "#979797" }}
          className="pokerRecord-content-top2"
        >
          {" "}
          more &gt;{" "}
        </div>
        </Link>
        <div data-v-11837e31="" className="pokerRecord-content-record">
          <div data-v-11837e31="" className="pokerRecord-result">
            <div data-v-11837e31="" className="pokerRecord-result1">
              317
            </div>
            {/**/}
            <div data-v-11837e31="" className="pokerRecord-result3">
              T
            </div>
            {/**/}
          </div>
          <div data-v-11837e31="" className="pokerRecord-result">
            <div data-v-11837e31="" className="pokerRecord-result1">
              316
            </div>
            {/**/}
            {/**/}
            <div data-v-11837e31="" className="pokerRecord-result4">
              B
            </div>
          </div>
          <div data-v-11837e31="" className="pokerRecord-result">
            <div data-v-11837e31="" className="pokerRecord-result1">
              315
            </div>
            <div data-v-11837e31="" className="pokerRecord-result2">
              A
            </div>
            {/**/}
            {/**/}
          </div>
          <div data-v-11837e31="" className="pokerRecord-result">
            <div data-v-11837e31="" className="pokerRecord-result1">
              314
            </div>
            {/**/}
            {/**/}
            <div data-v-11837e31="" className="pokerRecord-result4">
              B
            </div>
          </div>
          <div data-v-11837e31="" className="pokerRecord-result">
            <div data-v-11837e31="" className="pokerRecord-result1">
              313
            </div>
            {/**/}
            {/**/}
            <div data-v-11837e31="" className="pokerRecord-result4">
              B
            </div>
          </div>
          <div data-v-11837e31="" className="pokerRecord-result">
            <div data-v-11837e31="" className="pokerRecord-result1">
              312
            </div>
            <div data-v-11837e31="" className="pokerRecord-result2">
              A
            </div>
            {/**/}
            {/**/}
          </div>
          <div data-v-11837e31="" className="pokerRecord-result">
            <div data-v-11837e31="" className="pokerRecord-result1">
              311
            </div>
            <div data-v-11837e31="" className="pokerRecord-result2">
              A
            </div>
            {/**/}
            {/**/}
          </div>
          <div data-v-11837e31="" className="pokerRecord-result">
            <div data-v-11837e31="" className="pokerRecord-result1">
              310
            </div>
            {/**/}
            <div data-v-11837e31="" className="pokerRecord-result3">
              T
            </div>
            {/**/}
          </div>
          <div data-v-11837e31="" className="pokerRecord-result">
            <div data-v-11837e31="" className="pokerRecord-result1">
              309
            </div>
            {/**/}
            {/**/}
            <div data-v-11837e31="" className="pokerRecord-result4">
              B
            </div>
          </div>
          <div data-v-11837e31="" className="pokerRecord-result">
            <div data-v-11837e31="" className="pokerRecord-result1">
              308
            </div>
            <div data-v-11837e31="" className="pokerRecord-result2">
              A
            </div>
            {/**/}
            {/**/}
          </div>
          <div data-v-11837e31="" className="pokerRecord-result">
            <div data-v-11837e31="" className="pokerRecord-result1">
              307
            </div>
            <div data-v-11837e31="" className="pokerRecord-result2">
              A
            </div>
            {/**/}
            {/**/}
          </div>
          <div data-v-11837e31="" className="pokerRecord-result">
            <div data-v-11837e31="" className="pokerRecord-result1">
              306
            </div>
            {/**/}
            {/**/}
            <div data-v-11837e31="" className="pokerRecord-result4">
              B
            </div>
          </div>
          <div data-v-11837e31="" className="pokerRecord-result">
            <div data-v-11837e31="" className="pokerRecord-result1">
              305
            </div>
            <div data-v-11837e31="" className="pokerRecord-result2">
              A
            </div>
            {/**/}
            {/**/}
          </div>
          <div data-v-11837e31="" className="pokerRecord-result">
            <div data-v-11837e31="" className="pokerRecord-result1">
              304
            </div>
            {/**/}
            {/**/}
            <div data-v-11837e31="" className="pokerRecord-result4">
              B
            </div>
          </div>
          <div data-v-11837e31="" className="pokerRecord-result">
            <div data-v-11837e31="" className="pokerRecord-result1">
              303
            </div>
            {/**/}
            {/**/}
            <div data-v-11837e31="" className="pokerRecord-result4">
              B
            </div>
          </div>
          <div data-v-11837e31="" className="pokerRecord-result">
            <div data-v-11837e31="" className="pokerRecord-result1">
              302
            </div>
            {/**/}
            {/**/}
            <div data-v-11837e31="" className="pokerRecord-result4">
              B
            </div>
          </div>
          <div data-v-11837e31="" className="pokerRecord-result">
            <div data-v-11837e31="" className="pokerRecord-result1">
              301
            </div>
            <div data-v-11837e31="" className="pokerRecord-result2">
              A
            </div>
            {/**/}
            {/**/}
          </div>
          <div data-v-11837e31="" className="pokerRecord-result">
            <div data-v-11837e31="" className="pokerRecord-result1">
              300
            </div>
            {/**/}
            {/**/}
            <div data-v-11837e31="" className="pokerRecord-result4">
              B
            </div>
          </div>
          <div data-v-11837e31="" className="pokerRecord-result">
            <div data-v-11837e31="" className="pokerRecord-result1">
              299
            </div>
            <div data-v-11837e31="" className="pokerRecord-result2">
              A
            </div>
            {/**/}
            {/**/}
          </div>
          <div data-v-11837e31="" className="pokerRecord-result">
            <div data-v-11837e31="" className="pokerRecord-result1">
              298
            </div>
            {/**/}
            {/**/}
            <div data-v-11837e31="" className="pokerRecord-result4">
              B
            </div>
          </div>
          <div data-v-11837e31="" className="pokerRecord-result">
            <div data-v-11837e31="" className="pokerRecord-result1">
              297
            </div>
            <div data-v-11837e31="" className="pokerRecord-result2">
              A
            </div>
            {/**/}
            {/**/}
          </div>
          <div data-v-11837e31="" className="pokerRecord-result">
            <div data-v-11837e31="" className="pokerRecord-result1">
              296
            </div>
            <div data-v-11837e31="" className="pokerRecord-result2">
              A
            </div>
            {/**/}
            {/**/}
          </div>
          <div data-v-11837e31="" className="pokerRecord-result">
            <div data-v-11837e31="" className="pokerRecord-result1">
              295
            </div>
            {/**/}
            {/**/}
            <div data-v-11837e31="" className="pokerRecord-result4">
              B
            </div>
          </div>
          <div data-v-11837e31="" className="pokerRecord-result">
            <div data-v-11837e31="" className="pokerRecord-result1">
              294
            </div>
            <div data-v-11837e31="" className="pokerRecord-result2">
              A
            </div>
            {/**/}
            {/**/}
          </div>
          <div data-v-11837e31="" className="pokerRecord-result">
            <div data-v-11837e31="" className="pokerRecord-result1">
              293
            </div>
            <div data-v-11837e31="" className="pokerRecord-result2">
              A
            </div>
            {/**/}
            {/**/}
          </div>
          <div data-v-11837e31="" className="pokerRecord-result">
            <div data-v-11837e31="" className="pokerRecord-result1">
              292
            </div>
            <div data-v-11837e31="" className="pokerRecord-result2">
              A
            </div>
            {/**/}
            {/**/}
          </div>
          <div data-v-11837e31="" className="pokerRecord-result">
            <div data-v-11837e31="" className="pokerRecord-result1">
              291
            </div>
            {/**/}
            <div data-v-11837e31="" className="pokerRecord-result3">
              T
            </div>
            {/**/}
          </div>
          <div data-v-11837e31="" className="pokerRecord-result">
            <div data-v-11837e31="" className="pokerRecord-result1">
              290
            </div>
            <div data-v-11837e31="" className="pokerRecord-result2">
              A
            </div>
            {/**/}
            {/**/}
          </div>
          <div data-v-11837e31="" className="pokerRecord-result">
            <div data-v-11837e31="" className="pokerRecord-result1">
              289
            </div>
            {/**/}
            {/**/}
            <div data-v-11837e31="" className="pokerRecord-result4">
              B
            </div>
          </div>
          <div data-v-11837e31="" className="pokerRecord-result">
            <div data-v-11837e31="" className="pokerRecord-result1">
              288
            </div>
            <div data-v-11837e31="" className="pokerRecord-result2">
              A
            </div>
            {/**/}
            {/**/}
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
      {/* {select && (
        <Fastparityform
          selected={select}
          walletAmount={walletAmount}
          setselected={setselect}
          formDarkMode={formDarkMode}
          
          color={color}
         
        />
      )} */}
    </div>
  );
}

export default Dice;
