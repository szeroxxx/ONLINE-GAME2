import React, { useState, useEffect, useRef } from "react";

import { Link, useNavigate } from "react-router-dom";
import DashFooter from "../components/DashFooter";
import TextField from "@mui/material/TextField";
import {
  GetGameId,
  GetOrders,
  SendGamePlay,
  GetUserDetail,
  GetWalletAmount,
} from "../api";
import { getCookie, deleteCookie } from "../cookie";

function Recharge(props) {
  const [amt, setamt] = useState("");
  const [walletAmount, setWalletAmount] = useState("");
  const [topupAmount, setTopupAmount] = useState("");
  const [id, setId] = useState("");
  const [showPayment, setShowPayment] = useState(false);
  const history = useNavigate();
  var footerMode = props.darkTheme;

  const token = getCookie("token");
  async function fetchWalletData() {
    try {
      const { data } = await GetWalletAmount(token);
      console.log("res", data);
      if (data?.result?.user_recharge_amount) {
        setTopupAmount(data.result.user_recharge_amount);
        setWalletAmount(data.result.user_bonus_amount);
      }
    } catch (e) {
      console.log("fetchWalletData error:", e);
      return false;
    }
  }

  // async function sendReachargePayload() {
  //   try {
  //     const token = getCookie("token");
  //     const {data} = await SendRechargeAmount(token, {amount: 1});
  //     console.log('sendReachargePayload res', data);
  //     setHtml({__html: data});

  //   } catch(e) {
  //       console.log('sendReachargePayload error:', e);
  //       return false;
  //   };
  // }

  function sendAmount() {
    if (!id) {
      alert("Opps something went wrong");
    } else {
      // window.open(
      //   "http://win99x.com/public/api/auth/recharge?id=" +
      //     id +
      //     "&amount=" +
      //     amt,
      //   "_blank"
      // );
      setShowPayment(true);
    }
  }

  useEffect(() => {
    fetchWalletData();
    GetUserDetail(token)
      .then(({ data }) => {
        if (data.status === "Unauthorized") {
          deleteCookie("token");
          deleteCookie("ref");
          history("/login");
          return;
        } else if (data?.result?.id) {
          setId(data?.result?.id);
        }
      })
      .catch((e) => {
        console.log("GetUserDetail error-", e);
      });
  }, []);

  //   function info() {
  //     <div class="alert-box success">Successful Alert !!!</div>;
  //     `$("div.success").fadeIn(300).delay(1500).fadeOut(400)`;
  //   }

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
        <Link to="/RechargeHistory">
          <p>Records</p>
        </Link>
        <p style={{ fontWeight: "bolder", fontSize: "18px", padding: "6px" }}>
          Recharge
        </p>
        <p>Help</p>
      </div>
      {showPayment ? (
        <div>
          <iframe
            src={
              "https://win99x.com/public/api/auth/recharge?id=" +
              id +
              "&amount=" +
              amt
            }
            height={700}
            width={425}
          />
        </div>
      ) : (
        <div className="card_main">
          <div
            className="invite_main_middle recharge_top"
            style={{
              backgroundColor: props.darkTheme ? "#121212" : "#f9fcff",
              border: props.darkTheme
                ? "1px solid #343536 "
                : "1px solid #d0ebff",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            <div className="invite_main_middle1">
              <div className="invite_main_middle_box">
                <p
                  style={{ fontSize: "16px", color: "gray", fontWeight: "500" }}
                >
                  Topup
                </p>
                <div class="recharge_left_tooltip">
                  <i
                    style={{ color: "gray", fontSize: "10px" }}
                    class="fa-solid fa-circle-info"
                  ></i>
                  <span class="recharge_left_tooltiptext">
                    You're in good hands!
                  </span>
                </div>
              </div>
              <p style={{ fontSize: "26px", fontWeight: "bold" }}>
                ₹ {topupAmount}
              </p>
            </div>
            <div className="invite_main_middle1">
              <div
                className="invite_main_middle_box"
                style={{ marginLeft: "35px" }}
              >
                <p
                  style={{ fontSize: "16px", color: "gray", fontWeight: "500" }}
                >
                  Winnings
                </p>

                <div class="recharge_right_tooltip">
                  <i
                    style={{ color: "gray", fontSize: "10px" }}
                    class="fa-solid fa-circle-info"
                  ></i>
                  <span class="recharge_right_tooltiptext">
                    You're in good hands!
                  </span>
                </div>
              </div>
              <p>
                <span style={{ fontSize: "24px", fontWeight: "bolder" }}>
                  ₹ {walletAmount}
                </span>
              </p>
            </div>
          </div>

          <div className="card_main_middle">
            <p
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                marginTop: "30px",
                marginBottom: "5px",
              }}
            >
              Amount
            </p>
            <div className="card_main_middle_1">
              <span>₹</span>{" "}
              <TextField
                required
                id="standard-basic"
                placeholder="200 ~ 50000"
                value={amt}
                variant="standard"
                onChange={(e) => setamt(e.target.value)}
              />
            </div>
          </div>

          <div className="card_main_down">
            <div className="card_main_boxes">
              <button
                onClick={(e) => setamt(200)}
                style={{
                  backgroundColor: props.darkTheme ? "black" : "#ebf7ff",
                  color: props.darkTheme ? "white" : "rgb(56, 59, 69)",
                  marginBottom: "10px",
                }}
              >
                ₹200
              </button>
              <button
                onClick={(e) => setamt(500)}
                style={{
                  backgroundColor: props.darkTheme ? "black" : "#ebf7ff",
                  color: props.darkTheme ? "white" : "rgb(56, 59, 69)",
                  marginBottom: "10px",
                }}
              >
                ₹500
              </button>
              <button
                onClick={(e) => setamt(1320)}
                style={{
                  backgroundColor: props.darkTheme ? "black" : "#ebf7ff",
                  color: props.darkTheme ? "white" : "rgb(56, 59, 69)",
                  marginBottom: "10px",
                }}
              >
                ₹1320
              </button>
              <button
                onClick={(e) => setamt(2500)}
                style={{
                  backgroundColor: props.darkTheme ? "black" : "#ebf7ff",
                  color: props.darkTheme ? "white" : "rgb(56, 59, 69)",
                }}
              >
                ₹2500
              </button>
              <button
                onClick={(e) => setamt(7000)}
                style={{
                  backgroundColor: props.darkTheme ? "black" : "#ebf7ff",
                  color: props.darkTheme ? "white" : "rgb(56, 59, 69)",
                }}
              >
                ₹7000
              </button>
              <button
                onClick={(e) => setamt(40000)}
                style={{
                  backgroundColor: props.darkTheme ? "black" : "#ebf7ff",
                  color: props.darkTheme ? "white" : "rgb(56, 59, 69)",
                }}
              >
                ₹40000
              </button>
            </div>
            <div className="card_main_submit">
              <button
                onClick={() => {
                  sendAmount();
                }}
                style={{
                  backgroundColor: props.darkTheme ? "black" : "#644fd1",
                }}
              >
                Recharge
              </button>
            </div>
          </div>
          <div className="botton_logo">
            <img src="./assets/paytm_logo.png" />
          </div>
        </div>
      )}
      <DashFooter selected={"recharge"} footerMode={footerMode} />
    </div>
  );
}

export default Recharge;
