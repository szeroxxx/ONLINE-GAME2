import React, { useState } from "react";
import { Navbar, Sidebar } from "../components";
import { useStateContext } from "../contexts/ContextProvider";
import { useEffect } from "react";
import "./Setting.css";
import { GetSetting, SetGameSetting, SetPaytmPayment } from "../../api";
import { Token } from "@mui/icons-material";
import { deleteCookie, getCookie } from "../../cookie";
import { columnSelectionComplete } from "@syncfusion/ej2/grids";
import { useNavigate } from "react-router-dom";
import ToasterMessage from "../../utils/ToasterMessage";
const Setting = () => {
  const {
    setCurrentColor,
    setCurrentMode,
    currentMode,
    activeMenu,
    currentColor,
    themeSettings,
    setThemeSettings,
  } = useStateContext();
  const history = useNavigate();
  const token = getCookie("token");
  const [gameSettingInput, setGameSettingParameter] = useState({
    min_recharge: 0,
    refer_bonus: 0,
  });
  const [paymentId, setPaymentId] = useState("");
  const [paymentType, setPaymentType] = useState("");
  useEffect(() => {
    const currentThemeColor = localStorage.getItem("colorMode");
    const currentThemeMode = localStorage.getItem("themeMode");
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);
  useEffect(() => {
    getSetting();
  }, []);
  const getSetting = () => {
    try {
      GetSetting(token)
        .then(({ data }) => {
          if (data.status === "Unauthorized") {
            deleteCookie("token");
            deleteCookie("ref");
            history("/login");
            return;
          } else {
            setGameSettingParameter((prev) => ({
              ...prev,
              min_recharge: data?.gameSettings[0]?.min_recharge,
              refer_bonus: data?.gameSettings[0]?.refer_bonus,
            }));
            setPaymentType(data?.keySettings[0]?.type);
            setPaymentId(data?.keySettings[0]?.id);
          }
        })
        .catch((e) => {});
    } catch (error) {}
  };
  const setPaytmPayment = () => {
    try {
      let payload = {
        id: paymentId,
        type: paymentType,
        token: token,
      };
      SetPaytmPayment(token, payload);

      ToasterMessage("Saved successfully", "success");
    } catch (error) {
      ToasterMessage("error", "error");
    }
  };

  const getGameSetting = () => {
    try {
      let payload = {
        min_recharge: gameSettingInput.min_recharge,
        refer_bonus: gameSettingInput.refer_bonus,
      };
      SetGameSetting(token, payload);
      ToasterMessage("Saved successfully", "success");
    } catch (e) {
      ToasterMessage("error", "success");
      return false;
    }
  };

  const handleInputFieldsGameSetting = (id, inputValue) => {
    setGameSettingParameter((prev) => ({
      ...prev,
      [id]: inputValue,
    }));
  };

  return (
    <>
      <div className="flex relative dark:bg-main-dark-bg">
        {activeMenu ? (
          <div
            className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ml-0"
            style={{ width: "15rem" }}
          >
            <Sidebar />
          </div>
        ) : (
          <div className="w-0 dark:bg-secondary-dark-bg ml-0">
            <Sidebar />
          </div>
        )}
        <div
          className={
            activeMenu
              ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  margin-left-big"
              : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 margin-left-small"
          }
        >
          <div className="fixed static bg-main-bg dark:bg-main-dark-bg navbar w-full user_management_navbar">
            <Navbar />
          </div>
        </div>
      </div>
      <div className="admin_background p-7 w-full">
        <div className="setting_main">
          <div className="setting_div">
            <p className="settingP">Game Setting</p>
            <div className="game_setting_inputs">
              <input
                id="min_recharge"
                type="text"
                className="game_setting_input"
                placeholder="Mini Recharge"
                value={gameSettingInput.min_recharge}
                onChange={(e) => {
                  handleInputFieldsGameSetting(e.target.id, e.target.value);
                }}
              />
              <input
                id="refer_bonus"
                type="text"
                className="game_setting_input "
                placeholder="Refer Bonus"
                value={gameSettingInput.refer_bonus}
                onChange={(e) => {
                  handleInputFieldsGameSetting(e.target.id, e.target.value);
                }}
              />
              <button
                className="save_button "
                onClick={() => {
                  getGameSetting();
                }}
              >
                SAVE
              </button>
            </div>
          </div>
          <div className="setting_div">
            <p className="settingP">Paytm Payment API</p>
            <div className="payment_api_inputs">
              <input
                id="payment_id"
                type="text"
                className="payment_api_input "
                placeholder="Merchant ID"
                value={paymentId}
                onChange={(e) => {
                  setPaymentId(e.target.value);
                }}
              />
              <input
                id="payment_type"
                type="text"
                onChange={(e) => {
                  setPaymentType(e.target.value);
                }}
              />
              <button className="save_button" onClick={() => setPaytmPayment()}>
                SAVE
              </button>
            </div>
          </div>
          <div className="setting_div">
            <p className="settingP">MAGIX API</p>
            <div className="payment_api_inputs">
              <input
                type="text"
                className="payment_api_input"
                placeholder="Account ID"
              />
              <input
                type="text"
                className="payment_api_input"
                placeholder="Token"
              />
              <button className="save_button">SAVE</button>
              {/* <ToastContainer /> */}
            </div>
          </div>
          <div className="setting_div">
            <p className="settingP">Firebase Notification</p>
            <div className="payment_api_inputs">
              <input
                type="text"
                className="payment_api_input"
                placeholder="Sender ID"
              />
              <input
                type="text"
                className="payment_api_input"
                placeholder="Token"
              />
              <button className="save_button">SAVE</button>
              {/* <ToastContainer /> */}
            </div>
          </div>
          <div className="setting_div">
            <p className="settingP">Maintenance Mode</p>
            <div className="maintenance_mode_inputs">
              <div>
                <input className="checkbox_input" type="checkbox" />
                <label className="setting_label">Recharge</label>
              </div>
              <div>
                <input className="checkbox_input" type="checkbox" />
                <label className="setting_label">Withdrawal</label>
              </div>
              <div>
                <input className="checkbox_input" type="checkbox" />
                <label className="setting_label">Live Parity</label>
              </div>
              <div>
                <input className="checkbox_input" type="checkbox" />
                <label className="setting_label">Andar Bahar</label>
              </div>
              <div>
                <input className="checkbox_input" type="checkbox" />
                <label className="setting_label">Web</label>
              </div>
              <button className="save_button">SAVE</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Setting;
