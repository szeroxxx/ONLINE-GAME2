import React from "react";
import { Link } from "react-router-dom";
import "./reward.css";
function Rewards(props) {
  return (
    <div
      className="container"
      style={{
        backgroundColor: props.darkTheme ? "#181818" : "white",
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
        <p style={{ fontWeight: "bolder", fontSize: "18px" }}>Rewards</p>
        <p></p>
      </div>
      <div className="withdraw_main">
        <div
          className="withdraw_main_box"
          style={{
            backgroundColor: props.darkTheme ? "black" : "white",
            color: props.darkTheme ? "white" : "#333",
            border: props.darkTheme ? " 1px solid gray" : " 1px solid #d0ebff",
          }}
        >
          <div className="withdraw_main_box_up">
            <p className="withdraw_main_box_up_heading">Welcome</p>
            <p className="withdraw_main_box_up_amount">₹20</p>
          </div>

          <div className="pback">
            <span class="pgbx p100"></span>
          </div>
          <p>We will reward you with ₹20 when you join our Telegram Channel.</p>
          <button
            className="withdraw_main_box_button"
            style={{
              backgroundColor: props.darkTheme ? "#181818" : "#0093ff",
            }}
          >
            Join & Get
          </button>
        </div>
        <div
          className="withdraw_main_box"
          style={{
            backgroundColor: props.darkTheme ? "black" : "white",
            color: props.darkTheme ? "white" : "#333",
            border: props.darkTheme ? " 1px solid gray" : " 1px solid #d0ebff",
          }}
        >
          <div className="withdraw_main_box_up">
            <p className="withdraw_main_box_up_heading">First Recharge</p>
            <p className="withdraw_main_box_up_amount">₹20</p>
          </div>

          <div className="pback">
            <span class="pgbx p100" style={{ width: "10%" }}></span>
          </div>
          <p>This reward can only be obtained by doing your first recharge.</p>
          <button
            className="withdraw_main_box_button reward_light_button"
            style={{
              backgroundColor: props.darkTheme ? "#181818" : "#cecece",
            }}
          >
            Collect
          </button>
        </div>
        <div
          className="withdraw_main_box"
          style={{
            backgroundColor: props.darkTheme ? "black" : "white",
            color: props.darkTheme ? "white" : "#333",
            border: props.darkTheme ? " 1px solid gray" : " 1px solid #d0ebff",
          }}
        >
          <div className="withdraw_main_box_up">
            <p className="withdraw_main_box_up_heading">Daily 100 orders</p>
            <p className="withdraw_main_box_up_amount">₹20</p>
          </div>

          <div className="pback">
            <span class=" pgbx p100" style={{ width: "10%" }}></span>
          </div>
          <p>You need to complete 100 games in order to receive this reward.</p>
          <button
            className=" withdraw_main_box_button reward_light_button"
            style={{
              backgroundColor: props.darkTheme ? "#181818" : "#cecece",
            }}
          >
            Collect
          </button>
        </div>
      </div>
    </div>
  );
}

export default Rewards;
