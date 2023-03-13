import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./HeadTailParityRecords.css";
import { deleteCookie, getCookie } from "../cookie";
import { GetHeadTailBettingResult, GetUserRechargeHistory } from "../api";

function HeadTailParityRecords(props) {
  const [selected, setselected] = useState("fastparity");
  const [myOrder, setMyOrder] = useState([]);
  const [bettingResult, setBettingResult] = useState([]);

  const history = useNavigate();
  const token = getCookie("token");
  useEffect(() => {
    fetchBettingResult();
  }, []);
  async function fetchBettingResult() {
    try {
      if (!token) history("/");
      const payload = {
        offset: 0,
        limit: 20,
      };
      const { data } = await GetHeadTailBettingResult(token, payload);

      if (data?.result) {
        setBettingResult(data.result);
      } else if (data.status === "Unauthorized") {
        deleteCookie("token");
        history("/");
      }
    } catch (e) {
      const errorMessage = e.message ? e.message : e;

      return false;
    }
  }

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
        <Link to={"/HeadandTail"}>
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
          Head & tail Parity Records
        </p>
        <p></p>
      </div>
      <div className="h_t_records_table">
        <table className="h_t_records_table">
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
              Winner
            </th>
            <th
              style={{
                backgroundColor: props.darkTheme ? "black" : "#644fd1",
                color: props.darkTheme ? "white" : "white",
              }}
            >
              Date
            </th>
          </thead>
          <tbody>
            {bettingResult.map((data) => {
              return (
                <tr>
                  <td>{data?.play_id}</td>
                  <td>{data?.ht_winning_value}</td>

                  <td>{data?.created_at.substring(0, 10)}</td>
                </tr>
              );
            })}
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

export default HeadTailParityRecords;
