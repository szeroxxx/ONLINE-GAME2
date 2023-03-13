import { useState, useContext, useEffect } from "react";
import "react-phone-input-2/lib/style.css";
import "./PasswordConfirm.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { TextFormFieldDialog } from "@syncfusion/ej2/documenteditor";

const baseURL = "https://win99x.com/public/api/auth/register";
function Password() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [p1, setp1] = useState("");
  const [p2, setp2] = useState("");
  const history = useNavigate();
  useEffect(() => {
    setPhone(localStorage.getItem("localPhoneNumber"));
    setOtp(localStorage.getItem("localCodeNumber"));
  }, []);

  const register = () => {
    if (p1.length < 6) {
      alert("Password Must be more than 6 characters long");
      return;
    } else if (p1 != p2) {
      alert("Both password should be same");
      return;
    }
    axios({
      method: "POST",
      url: baseURL,
      headers: {
        "Content-type": "application/json",
      },
      data: {
        mobile: phone,
        code: otp,
        name: "chirag",
        password: p1,
        password_confirmation: p1,
        share_referral_code: 1251,
      },
    })
      .then((res) => {
        console.log("data added");
        console.log(JSON.stringify(res.data));
        history("/login");
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <div className="container reg scroll-hide">
      <Link to="/verify" className="back-icon-container">
        <KeyboardArrowLeftIcon />
      </Link>
      <p
        className="light-text"
        style={{
          margin: 20,
          fontFamily: "Kumbh Sans",
        }}
      >
        password
      </p>
      <h1
        className="second-line-text"
        style={{
          width: "90%",
          fontSize: 20,
          fontWeight: "bold",
          marginLeft: 20,
          fontFamily: "Kumbh Sans",
        }}
      >
        Please set a password for your account
      </h1>
      <div className="input-container">
        <TextField
          required
          id="outlined-required"
          label="Password"
          name="password"
          autoComplete="current-password"
          value={p1}
          type="password"
          onChange={(e) => setp1(e.target.value)}
          sx={{ width: "80%" }}
          style={{ width: "80%" }}
        />
        <TextField
          required
          id="outlined-required"
          label="Confirm Password"
          type="password"
          autoComplete="current-password"
          value={p2}
          onChange={(e) => setp2(e.target.value)}
          sx={{ width: "80%" }}
          style={{ width: "80%", marginTop: 20 }}
        />
        <Button
          variant="contained"
          onClick={register}
          sx={{
            marginTop: 1,
            borderRadius: 2,
            width: "80%",
            padding: 1,
            backgroundColor: "#644FD1",
            marginBottom: "5%",
            fontFamily: "Kumbh Sans",
          }}
        >
          Register
        </Button>
      </div>
    </div>
  );
}

export default Password;
