import { select } from "@syncfusion/ej2-base";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ToasterMessage from "../utils/ToasterMessage";
import "./fastparityform.css";
function Fastparityform({
  selected,
  setselected,
  color,
  sendGamePlayDetails,
  walletAmount,
  myOrder,
  setMyOrder,
  gameId,
  formDarkMode,
  sapre,
  fetchMyOrder,
  fetchWalletData
}) {
  const [number, setnumber] = useState("");
  const [amountSelected, setAmountSelected] = useState(10);
  const [contract_money, setcontract_money] = useState(0);
  const [successMsg, setSuccessMsg] = useState(false);
  useEffect(() => {
    if (!sapre) {
      if (selected === "green") {
        setnumber(11);
      } else if (selected === "red") {
        setnumber(13);
      } else if (selected === "violet") {
        setnumber(12);
      } else {
        setnumber(selected);
      }
    }
  }, []);
  const decrement = () => {
    if (contract_money - amountSelected > 0) {
      setcontract_money((pre) => pre - amountSelected);
    } else {
      setcontract_money(0);
    }
  };

  useEffect(() => {
    if (successMsg) {
      setTimeout(() => {
        setSuccessMsg(false);
        setcontract_money(0);
      }, 2000);
    }
  }, [successMsg]);

  const increment = () => {
    if (contract_money + amountSelected <= walletAmount) {
      setcontract_money((pre) => pre + amountSelected);
    } else {
      setcontract_money(walletAmount);
      alert(
        "maximun amount bet cannot be more than wallet amount, \n please recharge"
      );
    }
  };
  const handleApiCall = async () => {
    if (contract_money < 10) {
      ToasterMessage("Contract Amount Can't Be Less Than 10", "error");
    } else {
      setMyOrder([...myOrder]);
      setSuccessMsg(true);
      if (sapre) {
        let payload = {
          play_id: gameId,
          amount: contract_money,
          play_type: selected,
        };

        await sendGamePlayDetails(payload);  
        await fetchWalletData();
        await fetchMyOrder()
      } else {
        let payload = {
          value: number,
          amount: contract_money,
          type: "",
          group_value: "",
        };
        if (typeof selected === "string") {
          payload.type = number;
          payload.group_value =
            selected === "green"
              ? "3,6,9"
              : selected === "violet"
              ? "1,4,7,10"
              : "2,5,8";
        }
        await sendGamePlayDetails(payload);
        await fetchWalletData();
        await fetchMyOrder()
      }
    }
  };

  return (
    <div className="container fast_parity_container">
      <div
        className="empty_parity"
        style={{ height: "100vh" }}
        onClick={() => setselected("")}
      ></div>
      <div
        className="parity_form"
        style={{ backgroundColor: formDarkMode ? "#181818" : "white" }}
      >
        <p className={`parity_form_header ${color}color`}>Select {selected}</p>
        <div className="parityinputform">
          <p>{"₹" + walletAmount}</p>{" "}
          <button className={`${color}`}>
            <Link to={"/recharge"}>Recharge</Link>
          </button>
        </div>
        {!successMsg ? (
          <div>
            <div className="parity_contractmoney">
              <p className="contract_money_text">Contract Money</p>
              <div
                className="parity_contract_boxes"
                style={{
                  color: formDarkMode ? "white" : "black",
                }}
              >
                <div
                  className="parity_contract_box"
                  onClick={() => {
                    setAmountSelected(10);
                    setcontract_money(10);
                  }}
                >
                  10
                </div>
                <div
                  className="parity_contract_box"
                  onClick={() => {
                    setAmountSelected(100);
                    setcontract_money(100);
                  }}
                >
                  100
                </div>
                <div
                  className="parity_contract_box"
                  onClick={() => {
                    setAmountSelected(1000);
                    setcontract_money(1000);
                  }}
                >
                  1000
                </div>
                <div
                  className="parity_contract_box"
                  onClick={() => {
                    setAmountSelected(10000);
                    setcontract_money(10000);
                  }}
                >
                  10000
                </div>
              </div>
            </div>
            <div className="parity_numbers_main">
              <p className="contract_money_text">Contract Money</p>
              <div className="parity_Number">
                <div className="parity_number_left">
                  <div
                    className="parity_contract_box_minus"
                    onClick={() => decrement()}
                    style={{
                      color: formDarkMode ? "white" : "black",
                    }}
                  >
                    <p>-</p>
                  </div>
                </div>
                <div className="parity_number_middle">{contract_money}</div>
                <div className="parity_number_right">
                  <div
                    className="parity_contract_box_plus"
                    onClick={() => increment()}
                    style={{
                      color: formDarkMode ? "white" : "black",
                    }}
                  >
                    <p>+</p>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ marginLeft: 16 }} className="contract_money_text">
              Total contract money is{" "}
              <span style={{ fontSize: "20px", color: "#ffa500" }}>
                {contract_money}
              </span>
            </div>
            <>
              <button
                className={` parity_form_button ${color}`}
                onClick={() => {
                  handleApiCall();
                  myOrder.unshift({
                    id: gameId,
                    game_id: gameId,
                    value: number,
                    amount: contract_money,
                    status: 3,
                    winning_amount: 0,
                  });
                }}
              >
                Confirm
              </button>
            </>
          </div>
        ) : (
          <div>
            <button
              className={` parity_form_button green`}
              style={{ marginBottom: 150 }}
              onClick={() => {
                setSuccessMsg(false);
              }}
            >
              Bet Placed Successfully
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Fastparityform;

// position: fixed;
// background: #fff;
// color: #666;
// font-family: sans-serif;
// border-radius: 5px;
// margin: auto;
// bottom: 0;
// left: 0;
// right: 0;
// z-index: 1000;
