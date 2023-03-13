import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { WheelComponent } from "../components/react-wheel-of-prizes";
import DashFooter from "../components/DashFooter";
import "./spin.css";
import { GetSpinPlayValue } from "../api";
import { getCookie } from "../cookie";
function Spin(props) {
  const segments = [
    // "Buy a nice cake now!",
    // "Hit me a phone call， I'll sing happy birthday song to you!",
    // "Go to get a stranger and take a photo, tell him/her it's your birthday",
    // "Find the best restaurant in the airport and have a nice meal",
    // "Let me buy you a amazon prime membership as gift",
    // "Do all of the them on the list",
    // "Others - You could improvise, tell me what you want, I could try to fulfill you",

    "1",
    "Better Luck Next Time",
    "4",
    "3",
    "7",
    "2",
    "Better Luck Next Time",
    "5",
    "9",
    "6",
    "Better Luck Next Time",
    "8",
    "10",
  ];
  const seg_colors = [
    // "#F0CF50",
    // "#815CD1",

    // "#3DA5E0",
    // "#34A24F",
    // "#F9AA1F",
    // "#FF9000",
    // "#FF9000",

    "#ba4d4e",
    "#1592e8",
    "#14c187",
    "#fc7800",
    "#14c187",
    "#1592e8",
    "#ba4d4e",
    "#1592e8",
    "#14c187",
    "#fc7800",
    "#14c187",
    "#1592e8",
    "#F0CF50",
  ];
  const navigate = useNavigate();
  // useEffect(()=>{
  //   getSpinPlayValue()
  // },[])
  // let num;
  // const token = getCookie("token");
  // const getSpinPlayValue = () => {
  //   const resp = GetSpinPlayValue(token);
  //   num = 3;
  // };
  var footerMode = props.darkTheme;
  return (
    <div
      className="container spin_page_color"
      style={{
        backgroundColor: props.darkTheme ? "#181818" : "rgb(176, 234, 255)",
        color: props.darkTheme ? "white" : "black",
      }}
    >
      <div
        className="card_header"
        style={{
          backgroundColor: props.darkTheme ? "black" : "#644fd1",
          color: props.darkTheme ? "white" : "white",
        }}
      >
        <Link to={"/dashboard"}>
          <img
            src="https://www.fastwin.app/includes/icons/back_wt.png"
            alt=""
          />
        </Link>
        <p style={{ fontWeight: "bolder", fontSize: "20px" }}>Spin</p>
        <p></p>
      </div>
      <div className="spin_main">
        <p>Spin And Win</p>
        <WheelComponent
          // getSpinPlayValue={getSpinPlayValue}
          segments={segments}
          seg_colors={seg_colors}
          onFinished={(winner) => {
            alert(winner);
            navigate("/dashboard");
          }}
          primaryColor="white"
          contrastColor="black"
          buttonText="Draw!"
        />
      </div>
      <DashFooter selected={"spin"} footerMode={footerMode} />
    </div>
  );
}

export default Spin;
