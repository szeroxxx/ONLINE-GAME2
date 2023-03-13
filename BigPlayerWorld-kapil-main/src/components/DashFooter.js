import React from "react";
import { Link } from "react-router-dom";
import "./DashFooter.css";
function DashFooter({ selected, footerMode }) {
  console.log(selected);
  return (
    <div
      className="dash_footer"
      style={{
        backgroundColor: footerMode ? "black" : "white",
        color: footerMode ? "white" : "black",
      }}
    >
      <Link to={"/dashboard"} className="footer_options">
        <i
          class="fa-solid fa-house"
          style={{ fontSize: "18px", marginBottom: "3px", marginTop: "3px" }}
        ></i>
        <p
          style={{ fontSize: 13 }}
          className={`${selected == "home" && "selected"}`}
        >
          Home
        </p>
      </Link>
      <Link to={"/invite"} className="footer_options">
        <i
          class="fa-solid fa-users"
          style={{ fontSize: "18px", marginBottom: "3px", marginTop: "3px" }}
        ></i>
        <p
          style={{ fontSize: 13 }}
          className={`${selected == "invite" && "selected"}`}
        >
          Invite
        </p>
      </Link>
      <Link to={"/recharge"} className="footer_options">
        <i
          class="fa-solid fa-wallet"
          style={{ fontSize: "18px", marginBottom: "3px", marginTop: "3px" }}
        ></i>
        <p
          style={{ fontSize: 13 }}
          className={`${selected == "recharge" && "selected"}`}
        >
          Recharge
        </p>
      </Link>

      <Link to={"/my"} className="footer_options">
        <i
          class="fa-solid fa-user"
          style={{ fontSize: "18px", marginBottom: "3px", marginTop: "3px" }}
        ></i>
        <p
          style={{ fontSize: 13 }}
          className={`${selected == "my" && "selected"}`}
        >
          Profile
        </p>
      </Link>
    </div>
  );
}

export default DashFooter;
