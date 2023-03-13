import "./App.css";
import React, { useState, createContext, useEffect } from "react";
import { Routes, Route, useNavigate, useParams } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import InvitePage from "./pages/InvitePage";
import My from "./pages/My";
import Recharge from "./pages/Recharge";
import RechargeHistory from "./pages/RechargeHistory";
import Withdraw from "./pages/Withdraw";
import Rewards from "./pages/Rewards";
import FastParty from "./pages/FastParty";
import Spin from "./pages/Spin";
import Order from "./pages/Order";
import UpdateProfile from "./pages/UpdateProfile";
import OTP from "./pages/OTP";
import AndarBahar from "./pages/AndarBahar";
import PhoneNo from "./pages/PhoneNo";
import Verify from "./pages/Verify";
import Login from "./pages/Login";
import Password from "./pages/Password";
import Forgot_password from "./pages/Forgot_password";
import AddUpi from "./pages/AddUpi";
import AddPaytmWallet from "./pages/AddPaytmWallet";
import Home from "./pages/Home";
import {
  Dashboards,
  Agents,
  Users,
  Withdrawal,
  //   Analytics,
  GameManagement,
  TradeHistory,
  RechargeM,
  ParityManagement,
  HeadTailManagement,
  AbManagement,
  Notifications,
  Setting,
  RewardManagement,
  UserActivity,
  AdminParityManagement,
} from "./admin/pages";
import Payment from "./pages/Payment";
import AdminLogin from "./pages/LoginAdmin";
import { getCookie, deleteCookie } from "./cookie";
import { GetGameId } from "./api";
import { fetchToken } from "./fbase";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsCondition from "./pages/TermsCondition";
import WithdrawRecords from "./pages/WithdrawRecords";
import ParityRecords from "./pages/ParityRecords";
import AndarBaharRecords from "./pages/AndarBaharRecords";
import SapreRecords from "./pages/SapreRecords";
import DiceRecords from "./pages/DiceRecords";
import HeadandTail from "./pages/HeadandTail";
import Dice from "./pages/Dice";
import Wheelocity from "./pages/Wheelocity";
import MineSweeper from "./pages/MineSweeper";
import AppDownload from "./pages/AppDownload";
import Parity from "./pages/Parity";
import ParityRecordsHeadTail from "./pages/HeadTailParityRecords";
import MyOrderForHeadTail from "./pages/MyOrderForHeadTail";
export const ContextData = createContext();
function App() {
  const [isTokenFound, setTokenFound] = useState(false);

  const [darkTheme, setDarkTheme] = useState(false);

  const history = useNavigate();
  async function fetchData() {
    try {
      if (isTokenFound) {
        const token = getCookie("token");
        if (!token) {
          if (
            window.location.pathname == "/phoneno" ||
            window.location.pathname == "/adminlogin"
          ) {
            return null;
          } else {
            history("/");
          }
        }
        const { data } = await GetGameId(token);
        console.log("res", data);
        if (data.status === "Unauthorized") {
          deleteCookie("token");
          deleteCookie("isAdmin");
          deleteCookie("ref");
          history("/");
        }
        console.log('getCookie("isAdmin")', getCookie("isAdmin"));
        if (getCookie("isAdmin")) {
          history("/dashboardd");
        } else {
          history("/");
        }
      } else {
        console.log("token not found");
      }
    } catch (e) {
      console.log("fetchData error:", e);
      return false;
    }
  }

  useEffect(() => {
    fetchData();
    fetchToken(setTokenFound);
  }, []);

  document.addEventListener("keydown", function (e) {
    if (
      e.ctrlKey &&
      (e.keyCode == "61" ||
        e.keyCode == "107" ||
        e.keyCode == "173" ||
        e.keyCode == "109" ||
        e.keyCode == "187" ||
        e.keyCode == "189")
    ) {
      e.preventDefault();
    }
  });

  document.addEventListener(
    "wheel",
    function (e) {
      if (e.ctrlKey) {
        e.preventDefault();
      }
    },
    {
      passive: false,
    }
  );

  return (
    <div className="app">
      <Routes>
        {/* auth pages */}
        <Route path="/" element={<Login />} />
        <Route path="/phoneno" element={<PhoneNo />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/password" element={<Password />} />
        <Route
          path="/forgot"
          element={<Forgot_password darkTheme={darkTheme} />}
        />

        <Route path="/adminlogin" element={<AdminLogin />} />

        <Route
          path="/my"
          element={
            <My
              darkTheme={darkTheme}
              setDarkTheme={setDarkTheme}
              //   mode={mode}
              //   toggleMode={toggleMode}
            />
          }
        />
        <Route
          path="/updateprofile"
          element={<UpdateProfile darkTheme={darkTheme} />}
        />
        <Route
          path="/dashboard"
          element={<Dashboard darkTheme={darkTheme} />}
        />
        <Route path="/withdraw" element={<Withdraw darkTheme={darkTheme} />} />
        <Route path="/reward" element={<Rewards darkTheme={darkTheme} />} />
        <Route path="/invite" element={<InvitePage darkTheme={darkTheme} />} />
        <Route path="/recharge" element={<Recharge darkTheme={darkTheme} />} />
        <Route
          path="/fastparty"
          element={<FastParty darkTheme={darkTheme} />}
        />
        <Route path="/parity" element={<Parity darkTheme={darkTheme} />} />

        <Route path="/spin" element={<Spin darkTheme={darkTheme} />} />
        <Route path="/order" element={<Order darkTheme={darkTheme} />} />
        <Route
          path="/RechargeHistory"
          element={<RechargeHistory darkTheme={darkTheme} />}
        />
        <Route
          path="/andarbahar"
          element={<AndarBahar darkTheme={darkTheme} />}
        />
        <Route
          path="/parityrecords"
          element={<ParityRecords darkTheme={darkTheme} />}
        />
        <Route
          path="/parityrecordsForHeadTail"
          element={<ParityRecordsHeadTail darkTheme={darkTheme} />}
        />
        <Route
          path="/MyOrderForHeadTail"
          element={<MyOrderForHeadTail darkTheme={darkTheme} />}
        />
        <Route
          path="/andarbaharrecords"
          element={<AndarBaharRecords darkTheme={darkTheme} />}
        />
        <Route
          path="/saprerecords"
          element={<SapreRecords darkTheme={darkTheme} />}
        />
        <Route
          path="/dicerecords"
          element={<DiceRecords darkTheme={darkTheme} />}
        />
        <Route path="/verify" element={<Verify />} />
        <Route path="/payment" element={<Payment />} />
        <Route
          path="/HeadandTail"
          element={<HeadandTail darkTheme={darkTheme} />}
        />
        <Route path="/dice" element={<Dice darkTheme={darkTheme} />} />
        <Route
          path="/wheelocity"
          element={<Wheelocity darkTheme={darkTheme} />}
        />
        <Route
          path="/minesweeper"
          element={<MineSweeper darkTheme={darkTheme} />}
        />
        <Route path="/dashboardd" element={<Dashboards />} />
        <Route path="/users" element={<Users />} />
        {/* <Route path="/agent" element={<Agents />} /> */}
        <Route path="/RechargeManagement" element={<RechargeM />} />
        <Route path="/WithdrawalManagement" element={<Withdrawal />} />
        <Route path="/ParityManagement" element={<ParityManagement />} />
        <Route
          path="/AdminParityManagement"
          element={<AdminParityManagement />}
        />
        <Route path="/HeadTailManagement" element={<HeadTailManagement />} />
        <Route path="/RewardManagement" element={<RewardManagement />} />
        <Route path="/AbManagement" element={<AbManagement />} />
        <Route path="/Notification" element={<Notifications />} />
        <Route path="/Setting" element={<Setting />} />
        <Route path="/useractivity" element={<UserActivity />} />

        {/* <Route path="/Analytics" element={<Analytics />} /> */}
        <Route path="/GameManagement" element={<GameManagement />} />
        <Route path="/TradeHistory" element={<TradeHistory />} />
        <Route
          path="/WithdrawRecords"
          element={<WithdrawRecords darkTheme={darkTheme} />}
        />
        <Route path="/AddUpi" element={<AddUpi />} />
        <Route path="/AddPaytmWallet" element={<AddPaytmWallet />} />

        <Route
          path="/PrivacyPolicy"
          element={<PrivacyPolicy darkTheme={darkTheme} />}
        />
        <Route
          path="/TermsCondition"
          element={<TermsCondition darkTheme={darkTheme} />}
        />

        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/appdownload" element={<AppDownload />} />
      </Routes>
    </div>
  );
}

export default App;
