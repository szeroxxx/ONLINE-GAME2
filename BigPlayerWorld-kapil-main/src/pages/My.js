import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import DashFooter from "../components/DashFooter";
import { GetUserDetail } from "../api";
import { deleteCookie, getCookie } from "../cookie";

import "./my.css";
function My(props) {
  const history = useNavigate();
  const [mobile, setMobile] = useState("");
  const [name, setName] = useState("");
  const [id, setId] = useState("");

  var footerMode = props.darkTheme;

  <script
    src="https://app.wotnot.io/chat-widget/5HYsNfAk3BQd062048601248PaW2MKsk.js"
    defer
  ></script>;

  useEffect(() => {
    try {
      const token = getCookie("token");
      if (!token) history("/");
      GetUserDetail(token)
        .then(({ data }) => {
          if (data.status === "Unauthorized") {
            deleteCookie("token");
            deleteCookie("ref");
            history("/login");
            return;
          } else if (data?.result?.mobile) {
            setMobile(data?.result?.mobile);
            setId(data?.result?.id);
          }
          if (data?.result?.name) {
            setName(data?.result?.name);
          }
        })
        .catch((e) => {
          console.log("GetUserDetail error-", e);
        });
    } catch (e) {
      const errorMessage = e.message ? e.message : e;
      console.log("errorMessage:", errorMessage, " error:", e);
      return false;
    }
  }, []);

  const logOut = () => {
    deleteCookie("token");
    deleteCookie("ref");
  };

  let toggleOpen = document.getElementById("toggleOpen");
  const toggleMenu = () => {
    toggleOpen.classList.toggle("open_toggle");
  };

  let toggleOpen2 = document.getElementById("toggleOpen2");
  const toggleMenu2 = () => {
    toggleOpen2.classList.toggle("open_toggle");
  };
  return (
    <div
      className="my_container"
      //   style={{
      //     backgroundColor: props.mode === "light" ? "white" : "#181818",
      //     // color: props.mode === "light" ? "black" : "white",
      //   }}
      style={{
        backgroundColor: props.darkTheme ? "#181818" : "white",
        color: props.darkTheme ? "white" : "black",
      }}
    >
      <div className="my_main">
        <div
          className="my_main_usercard"
          //   style={{
          //     backgroundColor: props.mode === "light" ? "#f9fcff" : "#121212",
          //     border:
          //       props.mode === "light"
          //         ? "1px solid #d0ebff"
          //         : "1px solid #343536",
          //   }}
          style={{
            backgroundColor: props.darkTheme ? "#121212" : "#f9fcff",
            border: props.darkTheme
              ? "1px solid #343536 "
              : "1px solid #d0ebff",
          }}
        >
          <div
            className="user_card_up"
            // style={{
            //   color: props.mode === "light" ? "black" : "white",
            // }}
            style={{
              color: props.setDarkTheme ? "white" : "black",
            }}
          >
            <img src="./assets/avatar.png" />
            <div className="user_card_info">
              <p
                // style={{
                //   color: props.mode === "light" ? "black" : "white",
                //   fontWeight: "bold",
                // }}
                style={{
                  color: props.darkTheme ? "white" : "black",
                  fontWeight: "bold",
                }}
              >
                {name ? name : mobile}
              </p>
              <div className="user_card_info_details">
                <p style={{ color: props.darkTheme ? "white" : "black" }}>
                  Mob:{" "}
                  <span
                    style={{
                      color: "#959ea6",
                      fontFamily: "monospace",
                      fontSize: 16,
                    }}
                  >
                    {mobile}
                  </span>
                </p>
                <p style={{ color: props.darkTheme ? "white" : "black" }}>
                  {"  "}ID:{" "}
                  <span
                    style={{
                      color: "#959ea6",
                      fontFamily: "monospace",
                      fontSize: 16,
                    }}
                  >
                    {id}
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="usercard_down">
            <button
              style={{
                backgroundColor: props.darkTheme ? "black" : "white",
                border: props.darkTheme
                  ? "1px solid #343536 "
                  : "1px solid #644fd1",
                color: props.darkTheme ? "white" : "#6655d3",
              }}
            >
              <Link style={{ textDecoration: "none" }} to={"/updateprofile"}>
                {" "}
                Edit Profile
              </Link>
            </button>
            <button
              style={{
                backgroundColor: props.darkTheme ? "black" : "white",
                border: props.darkTheme
                  ? "1px solid #343536 "
                  : "1px solid #644fd1",
                color: props.darkTheme ? "white" : "#6655d3",
              }}
            >
              <Link style={{ textDecoration: "none" }} to={"/forgot"}>
                Change Password
              </Link>
            </button>
          </div>
        </div>

        <div
          className="my_main_options"
          style={{
            color: props.darkTheme ? "white" : "#413f3f",
            marginTop: "10px",
          }}
        >
          <Link
            to={"/order"}
            className="my_main_option"
            style={{
              color: props.darkTheme ? "white" : "#413f3f",
            }}
          >
            <div className="my_main_option_left">
              <i class="fa-solid fa-list" style={{ marginRight: "17px" }}></i>
              <p style={{ fontWeight: props.darkTheme ? "normal" : "bold" }}>
                Order Records
              </p>
            </div>
            <img
              className="my_main_option_img"
              src="https://www.fastwin.app/includes/icons/arrowRight.png"
              alt=""
            />
          </Link>
          <Link to={"/withdraw"} className="my_main_option">
            <div className="my_main_option_left">
              <i
                class="fa-solid fa-money-bill-transfer"
                style={{ marginRight: "14px" }}
              ></i>
              <p style={{ fontWeight: props.darkTheme ? "normal" : "bold" }}>
                Withdrawal
              </p>
            </div>
            <img
              className="my_main_option_img"
              src="https://www.fastwin.app/includes/icons/arrowRight.png"
              alt=""
            />
          </Link>

          <Link onClick={toggleMenu}>
            <div className="my_main_option">
              <div className="my_main_option_left">
                <i
                  class="fa-solid fa-indian-rupee-sign"
                  style={{ marginRight: "20px", marginLeft: "10px" }}
                ></i>
                <p style={{ fontWeight: props.darkTheme ? "normal" : "bold" }}>
                  Financial Details
                </p>
              </div>
              <img
                className="my_main_option_img"
                src="https://www.fastwin.app/includes/icons/arrowRight.png"
                alt=""
              />
            </div>
          </Link>

          <div className="follow_us_toggle" id="toggleOpen">
            <div className="financial_details_menu">
              <Link to={"/RechargeHistory"}>
                <p
                  style={{
                    color: props.darkTheme ? "white" : "black",
                  }}
                >
                  Recharge Records
                </p>
              </Link>
            </div>

            <div className="financial_details_menu">
              <Link to={"/WithdrawRecords"}>
                <p
                  style={{
                    color: props.darkTheme ? "white" : "black",
                  }}
                >
                  Withdrawal Records
                </p>
              </Link>
            </div>
          </div>

          <div
            className="invite_devider"
            style={{ background: "lightgray" }}
          ></div>
          <Link to={"/appdownload"}>
            <div className="my_main_option">
              <div className="my_main_option_left">
                <i class="fa-solid fa-download"></i>
                <p style={{ fontWeight: props.darkTheme ? "normal" : "bold" }}>
                  Downloads
                </p>
              </div>
              <img
                className="my_main_option_img"
                src="https://www.fastwin.app/includes/icons/arrowRight.png"
                alt=""
              />
            </div>
          </Link>

          <Link to={""} onClick={() => props.setDarkTheme(!props.darkTheme)}>
            <div className="my_main_option">
              <div className="my_main_option_left">
                <i
                  class="fa-solid fa-moon"
                  style={{
                    color: props.darkTheme ? "white" : "black",
                  }}
                ></i>
                <p style={{ fontWeight: props.darkTheme ? "normal" : "bold" }}>
                  Dark Mode
                </p>
              </div>
              <button
                type="button"
                style={{
                  color: props.darkTheme ? "white" : "black",
                  marginLeft: "70px",
                }}
                className="darkmode-button-new"
              >
                {props.darkTheme ? (
                  <span>
                    <i class="fas fa-sun" style={{ fontSize: "17px" }}></i>
                  </span>
                ) : (
                  <span>
                    <i class="fas fa-moon" style={{ fontSize: "17px" }}></i>
                  </span>
                )}
              </button>
            </div>
          </Link>

          <Link onClick={toggleMenu2}>
            <div className="my_main_option">
              <div className="my_main_option_left">
                <i
                  class="fa-solid fa-handshake"
                  style={{ marginRight: "15px", marginLeft: "6px" }}
                ></i>
                <p style={{ fontWeight: props.darkTheme ? "normal" : "bold" }}>
                  About Us
                </p>
              </div>
              <img
                className="my_main_option_img"
                src="https://www.fastwin.app/includes/icons/arrowRight.png"
                alt=""
              />
            </div>
          </Link>

          <div className="follow_us_toggle" id="toggleOpen2">
            <div className="financial_details_menu">
              <Link to={"/PrivacyPolicy"}>
                <p
                  style={{
                    color: props.darkTheme ? "white" : "black",
                  }}
                >
                  Privacy Policy
                </p>
              </Link>
            </div>

            <div className="financial_details_menu">
              <Link to={"/TermsCondition"}>
                <p
                  style={{
                    color: props.darkTheme ? "white" : "black",
                  }}
                >
                  Terms & Conditions
                </p>
              </Link>
            </div>
          </div>

          <a target="_blank" href="https://win99x.com/support">
            <div className="my_main_option">
              <div className="my_main_option_left">
                <i class="fa-regular fa-circle-question"></i>
                <p style={{ fontWeight: props.darkTheme ? "normal" : "bold" }}>
                  Supports
                </p>
              </div>

              <img
                className="my_main_option_img"
                src="https://www.fastwin.app/includes/icons/arrowRight.png"
                alt=""
              />
            </div>
          </a>

          <div
            className="invite_devider"
            style={{ background: "lightgray" }}
          ></div>
          <div
            style={{
              display: "flex",
              alignItem: "center",
              justifyContent: "center",
            }}
          >
            <ul
              class="wrapper"
              style={{ marginTop: "25px", marginBottom: "20px" }}
            >
              <li
                class="icon facebook"
                style={{
                  backgroundColor: props.darkTheme ? "black" : "white",

                  color: props.darkTheme ? "white" : "black",
                }}
              >
                <span class="tooltip">Facebook</span>
                <span>
                  <i class="fab fa-facebook-f"></i>
                </span>
              </li>
              <li
                class="icon twitter"
                style={{
                  backgroundColor: props.darkTheme ? "black" : "white",

                  color: props.darkTheme ? "white" : "black",
                }}
              >
                <span class="tooltip">Twitter</span>
                <span>
                  <i class="fab fa-twitter"></i>
                </span>
              </li>
              <li
                class="icon instagram"
                style={{
                  backgroundColor: props.darkTheme ? "black" : "white",

                  color: props.darkTheme ? "white" : "black",
                }}
              >
                <span class="tooltip">Instagram</span>
                <span>
                  <i class="fab fa-instagram"></i>
                </span>
              </li>
              <li
                class="icon github"
                style={{
                  backgroundColor: props.darkTheme ? "black" : "white",

                  color: props.darkTheme ? "white" : "black",
                }}
              >
                <span class="tooltip">Github</span>
                <span>
                  <i class="fab fa-github"></i>
                </span>
              </li>
              <li
                class="icon youtube"
                style={{
                  backgroundColor: props.darkTheme ? "black" : "white",

                  color: props.darkTheme ? "white" : "black",
                }}
              >
                <span class="tooltip">Youtube</span>
                <span>
                  <i class="fab fa-youtube"></i>
                </span>
              </li>
            </ul>
          </div>
          <Link
            to={"/"}
            onClick={logOut}
            className="signout_button"
            style={{
              backgroundColor: props.darkTheme
                ? "black"
                : "rgba(51, 51, 51, 0.05)",

              color: props.darkTheme ? "white" : "#333333",
            }}
          >
            <p
              style={{
                color: props.darkTheme ? "white" : "#333333",
                fontWeight: "bold",
              }}
            >
              Signout
            </p>
          </Link>
        </div>
      </div>
      <DashFooter selected={"my"} footerMode={footerMode} />
    </div>
  );
}

export default My;
