import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import DashFooter from "../components/DashFooter";
import { GetUserDetail, UserProfileUpdate } from "../api";
import { deleteCookie, getCookie } from "../cookie";

function UpdateProfile(props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [pincode, setPincode] = useState("");
  const [address, setAddress] = useState("");
const history=useNavigate()
  var footerMode = props.darkTheme;

  const token = getCookie("token");

  useEffect(() => {
    GetUserDetail(token)
      .then(({ data }) => {
        if(data.status==="Unauthorized")
          { 
            deleteCookie("token");
            deleteCookie("ref");
            history("/login"); 
            return

          }else 
        if (data.result.name) {
          setName(data.result.name);
        }
        setPhone(data.result.mobile);
        setAddress(data.result.address);
        setPincode(data.result.pincode);
      })
      .catch((e) => {
        console.log("error-", e);
      });
  }, []);

  const updateDetails = (e) => {
    e.preventDefault();
    const payload = {
      name,
      mobile: phone,
      address,
      pincode,
    };
    UserProfileUpdate(token, payload)
      .then(({ data }) => {
        if (data.responseCode == 200) {
          alert("User Updated Succesfully");
        } else {
          console.error(data);
        }
      })
      .catch((e) => {
        console.error(e);
      });
  };

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
        <Link to={"/my"}>
          <img
            src="https://www.fastwin.app/includes/icons/back_wt.png"
            alt=""
          />
        </Link>
        <p style={{ fontWeight: "bolder", fontSize: "18px" }}>Update Profile</p>
        <p></p>
      </div>
      <div className="auth_form">
        <div className="auth_form_options">
          <img src="assets/user.png" alt="" />
          <input
            style={{ color: props.darkTheme ? "black" : "gray" }}
            className="auth_form_input"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            required
          />
        </div>
        <div className="auth_form_options">
          <img src="assets/cell-phone.png" alt="" />
          <input
            style={{ color: props.darkTheme ? "black" : "gray" }}
            className="auth_form_input"
            placeholder="Mobile Number"
            type="tel"
            value={phone}
            // onChange = {e => setPhone(e.target.value)}
            disabled
            maxLength={10}
          />
        </div>
        <div className="auth_form_options">
          <img src="assets/placeholder.png" alt="" />
          <input
            style={{ color: props.darkTheme ? "black" : "white" }}
            className="auth_form_input"
            placeholder="Address"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className="auth_form_options">
          <img src="assets/placeholder.png" alt="" />
          <input
            style={{ color: props.darkTheme ? "black" : "white" }}
            className="auth_form_input"
            placeholder="Pincode"
            type="Number"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
            maxLength={6}
            minLength={6}
            required
          />
        </div>
        {/* <div className="auth_form_options">
          <p
            style={{
              margin: "0px 10px",
              margin: "0px 10px",
              fontWeight: "bold",
              color: "#494949",
            }}
          >
            profile Photo{" "}
          </p>
          <input
            className="auth_form_input"
            placeholder="Avatar"
            type="file"
          />
        </div> */}

        <div className="auth_form_submit">
          <button
            className="auth_submit_btn blue"
            style={{
              backgroundColor: props.darkTheme ? "black" : "#0093ff",
            }}
            onClick={updateDetails}
          >
            Update
          </button>
        </div>
      </div>
      <DashFooter selected={"my"} footerMode={footerMode} />
    </div>
  );
}

export default UpdateProfile;
