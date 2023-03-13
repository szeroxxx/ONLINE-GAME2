import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import "./AddUpi.css";
import { AddUpiAddress, GetWithdrawlPaymentMethod } from "../api"
import { getCookie, deleteCookie } from "../cookie";

const AddUpi = () => {
  const history = useNavigate();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [upi_address, setupi_address] = useState("");
  const [confirm_upi_address, setconfirm_upi_address] = useState("");



  const token = getCookie("token");

  async function fetchData() {
    try {
      if (!token) history("/");
      const { data } = await GetWithdrawlPaymentMethod(token);
      console.log("res", data);
      let res = data?.result?.find(data => data.payment_method == "UPI_ADDRESS");
      if (res?.name) {
        setname(res.name);
        setemail(res.email);
        setupi_address(res.payment_id);
        setconfirm_upi_address(res.payment_id);
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
    if(name && email && upi_address && confirm_upi_address && upi_address == confirm_upi_address) {
      return true;
    }
    if(upi_address != confirm_upi_address) {
      alert("UPI Address and Confirm UPI Address did not match");
    } else if(!name) {
      alert("name is required");
    } else if(!email) {
      alert("email is required");
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
            email,
            upi_address,
            confirm_upi_address
          }
          const { data } = await AddUpiAddress(token, payload);
          console.log('data-', data);
          if(data.result.id) alert("UPI added");
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

        <p className="heading">My UPI</p>
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
          <h1>Email ID:</h1>
          <input type="email" placeholder="Enter Email"
          value={email}
          onChange={e => setemail(e.target.value)} />
          <hr />
        </div>
        <div className="fields">
          <h1>UPI Address:</h1>
          <input type="text" placeholder="Enter Address"
          value={upi_address}
          onChange={e => setupi_address(e.target.value)}
          />
          <hr />
        </div>
        <div className="fields">
          <h1>Confirm UPI Address:</h1>
          <input type="text" placeholder="Confirm Address"
          value={confirm_upi_address}
          onChange={e => setconfirm_upi_address(e.target.value)}
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

export default AddUpi;
