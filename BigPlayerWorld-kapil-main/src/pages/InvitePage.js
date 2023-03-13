import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DashFooter from "../components/DashFooter";
import { deleteCookie, getCookie } from "../cookie";
import { UserReferHistory } from "../api";

function InvitePage(props) {
  const navigate = useNavigate();
  const [userHis, setUserHis] = useState([]);
  // const history = useNavigate();
  var footerMode = props.darkTheme;

  const share_url = window.location.origin + "/phoneno?ref=" + getCookie("ref");
  const copyToClip = (e) => {
    navigator.clipboard.writeText(share_url);
    if (navigator.share) {
      navigator
        .share({
          title: "game.win99x.com",
          url: share_url,
        })
        .then(() => {
          console.log("Thanks for sharing!");
        })
        .catch((err) => {
          console.log("Error while using Web share");
          console.log(err);
        });
    } else {
      console.log("Browser doesn't support!");
    }
  };

  useEffect(() => {
    UserReferHistory(getCookie("token"), { offset: 0, limit: 10 })
      .then(({ data }) => {
        if (data.status === "Unauthorized") {
          deleteCookie("token");
          deleteCookie("ref");
          navigate("/login");
        }
        setUserHis(data);
      })
      .catch((e) => {
        console.log("errror UserReferHistory", e);
      });
  }, []);

  const truncate = (input) =>
    input.length > 5 ? `${input.substring(0, 30)}...` : input;
  return (
    <div
      className="container"
      style={{
        backgroundColor: props.darkTheme ? "#181818" : "white",
        color: props.darkTheme ? "white" : "black",
      }}
    >
      <div className="topblue"></div>
      <div className="my_main">
        <div
          className="invite_top"
          style={{
            backgroundColor: props.darkTheme ? "#121212" : "#f9fcff",
            border: props.darkTheme
              ? "1px solid #343536 "
              : "1px solid #d0ebff",
            marginTop: "6px",
            marginBottom: "10px",
          }}
        >
          <div className="invite_top_left">
            <span
              style={{ fontSize: "14px", color: "gray", fontWeight: "500" }}
            >
              Total Earning
            </span>
            <p>
              <span style={{ fontSize: "12px" }}>₹</span>{" "}
              <span style={{ fontSize: "24px", fontWeight: "bolder" }}>
                0.00
              </span>
            </p>
          </div>
          <div className="invite_top_right">
            <button
              onClick={() => navigate("/withdraw")}
              style={{
                color: "white",
                backgroundColor: props.darkTheme ? "black" : "#1781ff",
              }}
            >
              Withdraw
            </button>
          </div>
        </div>
        <div className="invite_main">
          <div className="invite_main_header">
            <div className="invite_main_header_options">
              {truncate(share_url)}
            </div>
            <span style={{ border: "0.3px solid gray", height: 30 }}></span>
            <button className="invite_main_header_options" onClick={copyToClip}>
              Copy
            </button>
          </div>
          <div className="invite_devider"></div>
          <div
            className="invite_main_middle invite_refers"
            style={{
              backgroundColor: props.darkTheme ? "#121212" : "#f9fcff",
              border: props.darkTheme
                ? "1px solid #343536 "
                : "1px solid #d0ebff",
            }}
          >
            <div className="invite_main_middle1">
              <div
                className="invite_main_middle_box"
                style={{ marginLeft: "30px" }}
              >
                <p
                  style={{
                    fontSize: "16px",
                    color: "gray",
                    fontWeight: "500",
                    // marginLeft: 20,
                  }}
                >
                  Attempt
                </p>
                <div class="invite_left_tooltip">
                  <i
                    style={{ color: "gray", fontSize: "10px" }}
                    class="fa-solid fa-circle-info"
                  ></i>
                  <span class="invite_left_tooltiptext">
                    You're in good hands!
                  </span>
                </div>
              </div>
              <p>
                <span style={{ fontSize: "24px", fontWeight: "bolder" }}>
                  {userHis.attempts}
                </span>
              </p>
            </div>
            <div className="invite_main_middle1">
              <div
                className="invite_main_middle_box"
                style={{ width: 160, height: 30, marginLeft: "25px" }}
              >
                <p
                  style={{
                    fontSize: "16px",
                    color: "gray",
                    fontWeight: "500",
                    // marginLeft: 40,
                  }}
                >
                  Success Refers
                </p>
                <div class="invite_right_tooltip">
                  <i
                    style={{ color: "gray", fontSize: "10px" }}
                    class="fa-solid fa-circle-info"
                  ></i>
                  <span class="invite_right_tooltiptext">
                    You're in good hands!
                  </span>
                </div>
              </div>
              <p>
                <span style={{ fontSize: "24px", fontWeight: "bolder" }}>
                  {userHis.success_refer}
                </span>
              </p>
            </div>
          </div>
          <div className="invite_devider"></div>

          <div className="invite_main_bottom">
            <div className="game_main_users_table">
              <table
                style={{ marginTop: "25px" }}
                className="game_main_users_table_table"
              >
                <tbody>
                  <tr style={{ borderBottom: "1px solid" }}>
                    <td
                      style={{
                        fontWeight: "bold",
                        paddingLeft: "4px",
                        paddingRight: "6px",
                        textAlign: "center",
                      }}
                    >
                      No.
                    </td>
                    <td style={{ fontWeight: "bold", textAlign: "center" }}>
                      Phone No.
                    </td>
                    <td style={{ fontWeight: "bold", textAlign: "center" }}>
                      Amount
                    </td>
                    <td style={{ fontWeight: "bold", textAlign: "center" }}>
                      Date
                    </td>
                  </tr>
                  {userHis?.result?.length > 0 &&
                    userHis?.result?.map((data, index) => (
                      <tr key={index}>
                        <td style={{ textAlign: "center" }}>{index+1}</td>
                        <td style={{ textAlign: "center" }}>{data.mobile}</td>
                        <td style={{ textAlign: "center" }}>
                          {data.user_bonus_amount}
                        </td>
                        <td style={{ textAlign: "center" }}>
                          {data.created_at.substring(0, 10)}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <DashFooter selected={"invite"} footerMode={footerMode} />
    </div>
  );
}

export default InvitePage;
