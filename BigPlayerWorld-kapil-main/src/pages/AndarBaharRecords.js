import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ParityRecords.css";
import { getCookie } from "../cookie";
import { GetUserRechargeHistory } from "../api";

function AndaraBaharRecords(props) {
  const [selected, setselected] = useState("fastparity");
  const [myOrder, setMyOrder] = useState([]);
  const history = useNavigate();
  const token = getCookie("token");

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
          justifyContent: "normal",
        }}
      >
        <Link to={"/andarbahar"}>
          <img
            src="https://www.fastwin.app/includes/icons/back_wt.png"
            alt=""
          />
        </Link>
        <p
          style={{
            fontWeight: "bolder",
            fontSize: "18px",
            padding: "6px",
          }}
        >
          Andar Bahar Records
        </p>
        <p></p>
      </div>
      <div className="parity_records_table">
        <table className="parity_records_table">
          <thead>
            <th
              style={{
                backgroundColor: props.darkTheme ? "black" : "#644fd1",
                color: props.darkTheme ? "white" : "white",
              }}
            >
              Period
            </th>
            <th
              style={{
                backgroundColor: props.darkTheme ? "black" : "#644fd1",
                color: props.darkTheme ? "white" : "white",
              }}
            >
              Price
            </th>
            <th
              style={{
                backgroundColor: props.darkTheme ? "black" : "#644fd1",
                color: props.darkTheme ? "white" : "white",
              }}
            >
              Result
            </th>
            <th
              style={{
                backgroundColor: props.darkTheme ? "black" : "#644fd1",
                color: props.darkTheme ? "white" : "white",
              }}
            >
              Time
            </th>
          </thead>
          <tbody>
            <tr>
              <td>20230208723</td>
              <td>5,000</td>
              <td>Win</td>
              <td>05/02/2023</td>
            </tr>
            <tr>
              <td>20230208723</td>
              <td>5,000</td>
              <td>Win</td>
              <td>05/02/2023</td>
            </tr>
            <tr>
              <td>20230208723</td>
              <td>5,000</td>
              <td>Win</td>
              <td>05/02/2023</td>
            </tr>
            <tr>
              <td>20230208723</td>
              <td>5,000</td>
              <td>Win</td>
              <td>05/02/2023</td>
            </tr>
            <tr>
              <td>20230208723</td>
              <td>5,000</td>
              <td>Win</td>
              <td>05/02/2023</td>
            </tr>
          </tbody>
        </table>
        {/* <div>Period</div>
        <div>Price</div>
        <div>Result</div>
        <div>Time</div> */}
      </div>
    </div>
  );
}

export default AndaraBaharRecords;
