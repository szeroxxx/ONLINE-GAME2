import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
const AppDownload = () => {
  return (
    <div className="dashboard_container">
      {/* <div
        className="card_header"
        
      >
        <Link to={"/recharge"}>
          <img
            src="https://www.fastwin.app/includes/icons/back_wt.png"
            alt=""
          />
        </Link>
        <p style={{ fontWeight: "bolder", fontSize: "18px", padding: "6px" }}>
          Win99x
        </p>
        <p></p>
      </div> */}
      <div className="dashboard_header">
        <Link to={"/"}>
          <i class="fa-solid fa-chevron-left"></i>
        </Link>
        <h1 style={{ fontSize: 22, fontWeight: "bold" }}>Win99x</h1>
        <h1></h1>
      </div>
      <div className="top_heading">
        <h1 style={{ fontSize: 16, fontWeight: "bold" }}>#WINBIG</h1>
        <h1 style={{ fontSize: 30, fontWeight: "bold", marginTop: "0px" }}>
          Download App
        </h1>
        <h1 style={{ fontSize: 27, fontWeight: "bolder", marginTop: "-13px" }}>
          Now
        </h1>
        <div className="top_img">
          <img src="assets/boy-removebg-preview.png" />
        </div>
      </div>
      <div className="second_div">
        <div className="left_div">
          <h1 style={{ marginTop: "15px" }}>Download</h1>
          <h1 style={{ marginTop: "-10px" }}>Now</h1>
          <p
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              marginBottom: "10px",
            }}
          >
            10000+ Install
          </p>
        </div>
        <div className="right_div">
          <div
            style={{
              border: "1px solid gray",
              padding: "2px",
              borderRadius: "8px",
              marginTop: "10px",
            }}
          >
            <img src="./assets/GooglePlay.png" />
          </div>
          <div
            style={{
              border: "1px solid gray",
              marginTop: "10px",
              padding: "2px",
              borderRadius: "8px",
            }}
          >
            <img src="./assets/AppStore.png" style={{ height: "50px" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDownload;
