import { useState } from "react";
import "./LoginAdmin.css";
import Modal from "./Modal";
import { Link } from "react-router-dom";
import { axiosInstance } from "../api";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { getCookie, setCookie } from "../cookie";
// import { fetchToken } from "../fbase";

function AdminLogin({ setLoginUser }) {
  const history = useNavigate();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user, //spread operator
      [name]: value,
    });
  };
  // const fcmToken=fetchToken()
 
  const login = (e) => {
    e.preventDefault();
    axiosInstance
      .post("/admin/adminLogin", user)
      .then(({ data }) => {
        console.log("res--", data);
        setCookie("token", data.admin.access_token);
        setCookie("ref", data.admin.referral_code);
        setCookie("isAdmin", true);
        history("/dashboardd");
      })
      .catch((e) => {
        console.log("Adminlogin errror", e);
      });
  };
  return (
    <div className="admin_login_container">
      <div className="admin_login">
        <h1 className="admin_login_heading">Welcome to Win99x 👋🏻</h1>
        <p className="adminLoginP">
          {" "}
          Please sign-in to your account and start the adventure{" "}
        </p>
        <label className="email_label">Email Address</label>
        <input
          className="email_input"
          type="email"
          placeholder="Enter Your Email"
          name="username"
          value={user.email}
          onChange={handleChange}
          required
        />
        <div className="password_forgotpassword">
          <label className="email_label">Password</label>
          <Link to="/forgot" className="forgot_password_button">
            Forgot Password?
          </Link>
        </div>
        <input
          className="email_input"
          placeholder="Enter Your Password"
          value={user.password}
          type="password"
          name="password"
          onChange={handleChange}
        />
        <button type="submit" className="signin_button" onClick={login}>
          LOGIN
        </button>
        <div style={{ display: "grid", marginLeft: "-20px" }}>
          <ul
            class="wrapper"
            style={{
              marginTop: "25px",
              marginBottom: "20px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <li
              class="icon facebook"
              style={{
                backgroundColor: "white",
                color: "rgb(66, 103, 178)",
              }}
            >
              <span class="tooltip">Facebook</span>
              <span>
                <i class="fab fa-facebook-f"></i>
              </span>
            </li>
            <li
              class="icon instagram"
              style={{
                backgroundColor: "white",
                color: "#dd4b39",
              }}
            >
              <span class="tooltip">Google</span>
              <span>
                <i class="fa-brands fa-google"></i>
              </span>
            </li>
            <li
              class="icon twitter"
              style={{
                backgroundColor: "white",
                color: "#1da1f2",
              }}
            >
              <span class="tooltip">Twitter</span>
              <span>
                <i class="fab fa-twitter"></i>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;

{
  /* <h1 className="admin_login_heading">Sign In</h1>

<div className="admin_login_form">
  <label className="email_label">Email Address</label>
  <input
    className="email_input"
    type="email"
    placeholder="Enter Your Email"
    name="username"
    value={user.email}
    onChange={handleChange}
    required
  />
  <div className="password_forgotpassword">
    <label className="email_label">Password</label>
    <Link to="/forgot" className="forgot_password_button">
      Forgot Password?
    </Link>
  </div>
  <input
    className="email_input"
    placeholder="Enter Your Password"
    value={user.password}
    type="password"
    name="password"
    onChange={handleChange}
  />
  <button type="submit" className="signin_button" onClick={login}>
    Sign In
  </button>
</div> */
}

{
  /* <hr className="hr" />
<div className="admin_login_footer">
  <p className="footer_text">
    <span style={{ fontSize: 20 }}>&copy;</span> 2022 Limited
  </p>
  <div style={{ marginTop: 25, marginRight: 40 }}>
    <button className="footer_button">Terms</button>
    <button className="footer_button">Privacy</button>
    <button className="footer_button">Security</button>
    <button className="footer_button">Get in Touch</button>
  </div>
</div> */
}
