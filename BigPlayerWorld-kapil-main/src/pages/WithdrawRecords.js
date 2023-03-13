import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GetUserWithdrawlHistory } from "../api";
import { getCookie } from "../cookie";
import "./RechargeHistory.css";
function WithdrawRecords(props) {
  const history = useNavigate();
  const token = getCookie("token");
  const [withdrawlRecords, sentWithdrawlRecords] = useState([]);
  useEffect(() => {
    getUserWithdrawlHistory();
  }, []);
  async function getUserWithdrawlHistory() {
    const payload = {
      offset: 0,
      limit: 100,
    };
    const resp = await GetUserWithdrawlHistory(token, payload);
    sentWithdrawlRecords(resp?.data?.result);
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
        }}
      >
        <Link to={"/recharge"}>
          <img
            src="https://www.fastwin.app/includes/icons/back_wt.png"
            alt=""
          />
        </Link>
        <p style={{ fontWeight: "bolder", fontSize: "18px", padding: "6px" }}>
          Withdrawal Records
        </p>
        <p></p>
      </div>
      {withdrawlRecords?.map((item) => {
        return (
          <div>
            <div
              className="recahrge_records_main"
              style={{
                backgroundColor: props.darkTheme ? "black" : "white",
                color: props.darkTheme ? "white" : "black",
                border: props.darkTheme
                  ? "1px solid gray"
                  : "1px solid #f1f1f1",
              }}
            >
              <div className="button_time">
                <button
                  className={
                    item.withdraw_status === "pending"
                      ? "recharge_record_button_pending"
                      : item.withdraw_status === "ACCEPTED"
                      ? "recharge_record_button_succes"
                      : "recharge_record_button_reject"
                  }
                  style={{
                    backgroundColor: props.darkTheme ? "#181818" : "#2f90d5",
                    boxShadow: props.darkTheme
                      ? "none"
                      : " rgba(109, 108, 108, 0.25) 0px 8px 8px",
                  }}
                >
                  {item?.withdraw_status}
                </button>
                <p style={{ marginRight: "7px", marginTop: "10px" }}>
                  {item?.created_at}
                </p>
              </div>
              <div className="paytm_money">
                <p>By: {item?.payment_method}</p>
                <p>₹ {item?.withdraw_amount}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default WithdrawRecords;
