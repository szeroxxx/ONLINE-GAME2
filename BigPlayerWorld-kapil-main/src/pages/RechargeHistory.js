import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./RechargeHistory.css";
import { getCookie } from "../cookie";
import { GetUserRechargeHistory } from "../api";

function RechargeHistory(props) {
  const [selected, setselected] = useState("fastparity");
  const [myOrder, setMyOrder] = useState([]);
  const history = useNavigate();
  const token = getCookie("token");

  async function fetchOrders() {
    try {
      console.log("fetchOrder called");
      if (!token) history("/");
      const payload = {
        offset: 0,
        limit: 100,
      };
      const { data } = await GetUserRechargeHistory(token, payload);
      if (data?.result) {
        setMyOrder(data.result);
      }
    } catch (e) {
      const errorMessage = e.message ? e.message : e;
      console.log("fetchOrders errorMessage:", errorMessage, " error:", e);
      return false;
    }
  }

  useEffect(() => {
    fetchOrders();
  }, []);

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
        <Link to={"/recharge"}>
          <img
            src="https://www.fastwin.app/includes/icons/back_wt.png"
            alt=""
          />
        </Link>
        <p style={{ fontWeight: "bolder", fontSize: "18px", padding: "6px" }}>
          Recharge Records
        </p>
        <p></p>
      </div>

      {myOrder.length > 0 &&
        myOrder.map((data, i) => (
          <div
            className="recahrge_records_main"
            key={i}
            style={{
              backgroundColor: props.darkTheme ? "black" : "white",
              color: props.darkTheme ? "white" : "black",
              border: props.darkTheme ? "1px solid gray" : "1px solid #f1f1f1",
            }}
          >
            <div className="button_time">
              <button
                className="recharge_record_button"
                style={{
                  backgroundColor: props.darkTheme ? "#181818" : "#2f90d5",
                  boxShadow: props.darkTheme
                    ? "none"
                    : " rgba(109, 108, 108, 0.25) 0px 8px 8px",
                }}
              >
                {data.status}
              </button>
              <p
                style={{
                  marginRight: "7px",
                  marginTop: "10px",
                  color: props.darkTheme ? "white" : "gray",
                  fontWeight: props.darkTheme ? "normal" : "bold",
                }}
              >
                {data.created_at.substring(0, 10)}
              </p>
            </div>
            <div className="paytm_money">
              <p style={{ fontWeight: props.darkTheme ? "normal" : "bold" }}>
                By: Paytm
              </p>
              <p style={{ fontWeight: props.darkTheme ? "normal" : "bold" }}>
                ₹ {data.amount}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
}

export default RechargeHistory;
