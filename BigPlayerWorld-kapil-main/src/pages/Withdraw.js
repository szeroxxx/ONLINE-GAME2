import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./withdraw.css";
import { SentWithdrawlRequest, GetWithdrawlPaymentMethod ,GetWalletAmount} from "../api";
import { getCookie, deleteCookie } from "../cookie";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

function Withdraw(props) {
  const [number, setnumber] = useState("");
  const [email, setemail] = useState("");
  const [amount, setamount] = useState("");
  const [payment_method, setpayment_method] = useState("");
  const [walletAmount, setWalletAmount] = useState("");

  const history = useNavigate();

const token = getCookie("token");
useEffect(() => {
  fetchData();
  fetchWalletData();
}, []);
async function fetchWalletData() {
  try {
    const { data } = await GetWalletAmount(token);
    console.log("res", data);
    if (data?.result?.user_recharge_amount) {
      setWalletAmount(data.result.user_bonus_amount);
    }
  } catch (e) {
   
    return false;
  }
}
  async function fetchData() {
    try {
      if (!token) history("/");
      const { data } = await GetWithdrawlPaymentMethod(token);
      console.log("res", data);
      let res = data?.result?.find(
        (data) => data.payment_method == "UPI_ADDRESS"
      );
      if (res?.name) {
        setemail(res.email);
      }

      let res1 = data?.result?.find(
        (data) => data.payment_method == "PAYTM_WALLET"
      );
      console.log("res1?.payment_id", res1?.payment_id);
      if (res1?.payment_id) {
        setnumber(res1.payment_id);
      }
    } catch (e) {
      const errorMessage = e.message ? e.message : e;
      console.log("errorMessage:", errorMessage, " error:", e);
      return false;
    }
  }

  function checkFields() {
    console.log("checkFields called");

    if (!amount) {
      alert("amount is required");
    } else if (!payment_method) {
      alert("payment method is required");
    } else if (+amount < 250) {
      alert("Minimum amount should be 250");
    } else if (amount && payment_method) {
      return true;
    }
    return false;
  }

  async function addDetails(e) {
    try {
      console.log("addDetails called");
      e.preventDefault();
      const isValid = checkFields();
      if (isValid) {
        const payload = {
          amount,
          payment_method,
        };
        const { data } = await SentWithdrawlRequest(token, payload);
        console.log("data-", data);
        if (data.result?.withdrawl_payment_id) alert("Withdrawl Request Sent");
      }
    } catch (e) {
      console.log("error:", e);
      if (e?.response?.data?.message) alert(e.response.data.message);
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
        }}
      >
        <Link to={"/dashboard"}>
          <img
            src="https://www.fastwin.app/includes/icons/back_wt.png"
            alt=""
          />
        </Link>

        <p
          style={{
            color: props.darkTheme ? "white" : "white",
            fontWeight: "bolder",
            fontSize: "18px",
          }}
        >
          Withdraw
        </p>
        <Link to={"/WithdrawRecords"}>
          {" "}
          <p
            style={{
              color: props.darkTheme ? "white" : "white",
              fontWeight: "bolder",
              fontSize: "18px",
            }}
          >
            Records
          </p>
        </Link>
      </div>
      <div className="withdraw_main">
        <div className="withdraw_main_1">
          <p style={{ color: "gray", fontSize: "14px" }}>Balance</p>
          <p style={{ fontWeight: "bold", fontSize: 24 }}>{`₹ ${walletAmount}`}</p>
        </div>
        <div
          className="withdraw_main_2"
          style={{
            backgroundColor: props.darkTheme ? "black" : "white",
            color: props.darkTheme ? "white" : "#383b45",
            border: props.darkTheme ? "1px solid gray" : "1px solid #d0ebff",
          }}
        >
          <Link to={"/AddUpi"}>
            {" "}
            <p>{email ? email : "Add UPI"}</p>
          </Link>
        </div>
        <div
          className="withdraw_main_3 lightblue"
          style={{
            backgroundColor: props.darkTheme ? "black" : "#ebf7ff",
            color: props.darkTheme ? "white" : "#383b45",
            border: props.darkTheme ? "1px solid gray" : "1px solid #d0ebff",
          }}
        >
          <div style={{ width: "105%" }}>
            <button
              className="ptm_wallet blue"
              style={{
                backgroundColor: props.darkTheme ? "#181818" : "#0093ff",
                color: props.darkTheme ? "white" : "white",
              }}
            >
              Paytm Wallet
            </button>
          </div>
          <div className="withdraw_main_3_main">
            <p
              style={{
                color: props.darkTheme ? "white" : "gray",
                fontSize: "14px",
              }}
            >
              Paytm wallet can be added to get fast withdrawals.
            </p>
            <Link to={"/AddPaytmWallet"}>
              {" "}
              <p style={{ color: "black", fontSize: "14px" }}>
                {" "}
                {number ? number : "Click here to add"}
              </p>
            </Link>
          </div>
        </div>

        <div
          style={{
            color: props.darkTheme ? "white" : "gray",
            backgroundColor: props.darkTheme ? "black" : "white",
            margin: "-15px 0 15px 0",
          }}
        >
          <FormControl fullWidth>
            <InputLabel
              id="demo-simple-select-label"
              style={{ color: props.darkTheme ? "white" : "gray" }}
            >
              Payment Method
            </InputLabel>
            <Select
              labelId="select-label"
              id="payment_method"
              name="payment_method"
              value={payment_method}
              label="Payment Method"
              onChange={(e) => setpayment_method(e.target.value)}
              style={{ color: props.darkTheme ? "white" : "gray" }}
            >
              <MenuItem value={"UPI_ADDRESS"}>UPI ADDRESS</MenuItem>
              <MenuItem value={"PAYTM_WALLET"}>PAYTM WALLET</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="withdraw_main_4 ">
          <p style={{ fontWeight: "bolder", fontSize: "20px" }}>Amount</p>
          <div>
            <input
              type="tel"
              placeholder="230 ~ 50000"
              maxLength={10}
              value={amount}
              onChange={(e) => setamount(e.target.value)}
              style={{
                color: props.darkTheme ? "white" : "",
                backgroundColor: props.darkTheme ? "black" : "white",
              }}
            />
          </div>
          <div className="withdraw_main_4_para">
            <p>Amount {"<"} ₹1500,fee ₹30</p>
            <p>
              Maximum:{" "}
              <span>
                <span style={{ color: "blue" }}>₹0</span>
              </span>
            </p>
          </div>
          <div className="withdraw_main_4_para">
            <p>Amount {"<"} ₹1500,fee 2%</p>
            <p>
              Maximum: <span>₹230</span>
            </p>
          </div>
          <button
            style={{
              color: props.darkTheme ? "white" : "white",
              backgroundColor: props.darkTheme ? "black" : "#0093ff",
              pointerEvents: "auto",
            }}
            onClick={addDetails}
          >
            Withdrawal
          </button>
        </div>
      </div>
    </div>
  );
}

export default Withdraw;
