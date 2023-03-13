import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import "./AddPaytmWallet.css";
import { CreatePaytmWallet, GetWithdrawlPaymentMethod } from "../api"
import { getCookie, deleteCookie } from "../cookie";

const AddPaytmWallet = () => {
  const history = useNavigate();
  const [name, setname] = useState("");
  const [paytm_wallet, setpaytm_wallet] = useState("");
  const [confirm_paytm_wallet, setconfirm_paytm_wallet] = useState("");

  const token = getCookie("token");

  async function fetchData() {
    try {
      if (!token) history("/");
      const { data } = await GetWithdrawlPaymentMethod(token);
      console.log("res", data);
      let res = data?.result?.find(data => data.payment_method == "PAYTM_WALLET");
      if (res?.name) {
        setname(res.name);
        setpaytm_wallet(res.payment_id);
        setconfirm_paytm_wallet(res.payment_id);
      } else if (data.status === "Unauthorized") {
        deleteCookie("token");
        history("/");
      }
    } catch (e) {
      const errorMessage = e.message ? e.message : e;
      console.log("errorMessage:", errorMessage, " error:", e);
      return false;
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  function checkFields() {

    if(paytm_wallet.length != 10 || confirm_paytm_wallet.length != 10) {
      alert("Wallet Number Should be 10 digit");
    }else if(paytm_wallet != confirm_paytm_wallet) {
      alert("Wallet Number and Confirm Wallet Number did not match");
    } else if(!name) {
      alert("name is required");
    } else if(name && paytm_wallet && confirm_paytm_wallet && paytm_wallet == confirm_paytm_wallet) {
      return true;
    }
      return false;
  }
  async function addDetails(e) {
    try {
      e.preventDefault();
      const isValid = checkFields();
      if(isValid) {
          const payload = {
            name,
            paytm_wallet,
            confirm_paytm_wallet
          }
          const { data } = await CreatePaytmWallet(token, payload);
          console.log('data-', data);
          if(data.result.id) alert("Wallet added");
      }
    } catch(e) {
        console.log('error:', e);
        return false;
    };
  }

  return (
    <div className="container">
      <div className="add_upi_header">
        <Link to={"/withdraw"}>
          <img
            src="https://www.fastwin.app/includes/icons/back_wt.png"
            alt=""
          />
        </Link>

        <p className="paytm_wallet_heading">Paytm Wallet</p>
        {/* <p>Records</p> */}
      </div>
      <div className="main-content">
        <div className="fields">
          <h1>Actual Name:</h1>
          <input type="text" placeholder="Enter Name"
            value={name}
            onChange={e => setname(e.target.value)}
          />
          <hr />
        </div>

        <div className="fields">
          <h1>Paytm Wallet:</h1>
          <input type="number" maxLength={10} minLength={10} placeholder="Mobile Number"
          value={paytm_wallet}
          onChange={e => setpaytm_wallet(e.target.value)}
           />
          <hr />
        </div>
        <div className="fields">
          <h1>Confirm Paytm Wallet:</h1>
          <input type="number" maxLength={10} minLength={10} placeholder="Confirm Mobile Number"
          value={confirm_paytm_wallet}
          onChange={e => setconfirm_paytm_wallet(e.target.value)}
           />
          <hr />
        </div>
      </div>

      <div className="Add_Upi_Buttons">
        <button className="add_button" onClick={addDetails}>Add</button>
        <button className="cancel_button" onClick={() => history("/withdraw")}>Cancel</button>
      </div>
    </div>
  );
};

export default AddPaytmWallet;
