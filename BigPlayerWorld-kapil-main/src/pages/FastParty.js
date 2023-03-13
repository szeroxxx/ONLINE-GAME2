import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import EveryonesOrder from "../components/EveryonesOrder";
import Fastparityform from "../components/Fastparityform";
import MyOrder from "../components/MyOrder";

import "./fastparty.css";
import {
  GetGameId,
  GetOrders,
  SendGamePlay,
  GetBettingResult,
  GetWalletAmount,
} from "../api";
import { getCookie, deleteCookie } from "../cookie";
import "react-toastify/dist/ReactToastify.css";
import ToasterMessage from "../utils/ToasterMessage";
import Pusher from "pusher-js";
function FastParty(props) {
  const history = useNavigate();
  const [select, setselect] = useState("");
  const [color, setcolor] = useState("");
  const [gameId, setGameId] = useState("");
  const [ordertype, setordertype] = useState("everyone");
  const [timer, setTimer] = useState("00:00");
  const [everyOrder, setEveryOrder] = useState([]);
  const [myOrder, setMyOrder] = useState([]);
  const [bettingResult, setBettingResult] = useState([]);
  const [walletAmount, setWalletAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const Ref = useRef(null);
  const timerRef = useRef(null);

  var myOrderMode = props.darkTheme;
  var formDarkMode = props.darkTheme;

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    return { total, minutes, seconds };
  };

  const token = getCookie("token");

  const sendGamePlayDetails = async (payload) => {
    try {
      if (gameId) {
        payload.game_id = gameId;
        const { data } = await SendGamePlay(token, payload);
        if (data.responseCode === 200) {
          ToasterMessage(data.message, "success");
        }
      }
    } catch (e) {
      ToasterMessage(e.response.data.message, "error");
      return false;
    }
  };

  const startTimer = (e) => {
    let { total, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      setTimer(
        (minutes > 9 ? minutes : "0" + minutes) +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds)
      );
    }
  };

  const checkCount = () => {
    // if(Number(timerRef.current.innerHTML.substring(3)) < 20) {
    //   if(!isBlock) {
    //     setIsBlock(true);
    //   }
    // } else {
    //   if(isBlock) {
    //     setIsBlock(false);
    //   }
    // }
    if (timerRef.current.innerHTML === "00:01") {
      setTimeout(() => {
        fetchData();
      }, 1000);
    }
  };

  useEffect(() => {
    let timerId = setInterval(checkCount, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, []);

  const clearTimer = (e) => {
    setTimer("00:00");
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };

  const getDeadTime = (sec) => {
    let deadline = new Date();
    deadline.setSeconds(deadline.getSeconds() + sec);
    return deadline;
  };

  const resetTimer = (sec) => {
    clearTimer(getDeadTime(sec));
  };

  async function fetchWalletData() {
    try {
      const { data } = await GetWalletAmount(token);
      if (data?.result?.total_amount) {
        setWalletAmount(data?.result?.total_amount);
        let ta = 0;
        if (+data.result.user_recharge_amount)
          ta = ta + +data.result.user_recharge_amount;
        if (+data.result.user_bonus_amount)
          ta = ta + +data.result.user_bonus_amount;
        setTotalAmount(ta);
      }
    } catch (e) {
      return false;
    }
  }
  useEffect(() => {
    getMyOrderFromWebsocket();
  }, []);

  function getMyOrderFromWebsocket() {
    const pusher = new Pusher("080aed6da9f85a9a9f9e", {
      cluster: "ap2",
    });

    const channel = pusher.subscribe("parity-order");

    channel.bind("get-parity-orders", (data) => {
      setMyOrder((prev) => [data?.game, ...prev]);
    });
  }

  async function fetchData() {
    try {
      fetchMyOrder();
      if (!token) history("/");
      const { data } = await GetGameId(token);
      const orderpayload = {
        type: 2,
        offset: 0,
        limit: 10,
      };
      const { data: result } = await GetOrders(token, orderpayload);
      if (result?.result) {
        setEveryOrder(result.result);
      }
      fetchBettingResult();
      if (data?.gameID?.game_id) {
        setGameId(data.gameID.game_id);
        resetTimer(60 - new Date().getSeconds());
      } else if (data.status === "Unauthorized") {
        deleteCookie("token");
        history("/");
      }
    } catch (e) {
      const errorMessage = e.message ? e.message : e;
      return false;
    }
  }

  async function fetchBettingResult() {
    try {
      if (!token) history("/");
      const payload = {
        offset: 0,
        limit: 20,
      };
      const { data } = await GetBettingResult(token, payload);
      if (data?.result) {
        setBettingResult(data.result);
      } else if (data.status === "Unauthorized") {
        deleteCookie("token");
        history("/");
      }
    } catch (e) {
      const errorMessage = e.message ? e.message : e;
      return false;
    }
  }

  async function fetchMyOrder() {
    try {
      if (!token) history("/");
      const payload = {
        type: 1,
        offset: 0,
        limit: 10,
      };
      const { data } = await GetOrders(token, payload);
      if (data?.result) {
        setMyOrder(data.result);
      }
    } catch (e) {
      return false;
    }
  }

  async function fetchOrders() {
    try {
      if (!token) history("/");
      const payload = {
        type: 1,
        offset: 0,
        limit: 10,
      };
      const { data } = await GetOrders(token, payload);
      const orderpayload = {
        type: 2,
        offset: 0,
        limit: 10,
      };
      const { data: result } = await GetOrders(token, orderpayload);
      if (data?.result) {
        setMyOrder(data.result);
      }
      if (result?.result) {
        setEveryOrder(result.result);
      }
    } catch (e) {
      const errorMessage = e.message ? e.message : e;
      return false;
    }
  }

  useEffect(() => {
    clearTimer(getDeadTime(20));
    fetchData();
    fetchOrders();
    fetchBettingResult();
    fetchWalletData();
  }, []);

  return (
    <div
      className="container posfixed"
      style={{
        backgroundColor: props.darkTheme ? "#181818" : "white",
        color: props.darkTheme ? "white" : "black",
      }}
    >
      <div
        className="card_header"
        style={{
          backgroundColor: props.darkTheme ? "black" : "#644fd1",
          color: props.darkTheme ? "white" : "white",
        }}
      >
        <Link to={"/dashboard"}>
          <img
            src="https://www.fastwin.app/includes/icons/back_wt.png"
            alt=""
          />
        </Link>
        <p style={{ fontWeight: "bolder", fontSize: "18px", padding: "6px" }}>
          Live Parity
        </p>
        <p style={{ fontSize: 15 }}>₹ {walletAmount}</p>
      </div>
      <div className="game_main">
        <div className="game_main_header">
          <div className="game_main_header_left">
            <p className="lightcolor">Period</p>
            <p className="period">{gameId}</p>
          </div>
          <div className="game_main_header_right">
            <p className="lightcolor">Count Down</p>
            <div>
              <div className="timer_backgroung"></div>
              <p
                style={{
                  backgroundColor: props.darkTheme ? "black" : "#ededed",
                  fontWeight: "bold",
                }}
                className="timer"
                ref={timerRef}
              >
                {timer}
              </p>
            </div>
          </div>
        </div>
        <div className="game_main2">
          <div className="game_main_option">
            <button
              className="game_main_option_upper green"
              onClick={() => {
                setselect("green");
                setcolor("green");
              }}
              disabled={timer <= "00:10"}
            >
              <img
                src="https://www.fastwin.app/includes/icons/rocket.png"
                alt=""
              />
              <p style={{ fontWeight: "bold" }}> Join Green</p>
            </button>
            <p style={{ fontWeight: "bold" }} className="lightcolor">
              1 : 2{" "}
              <span style={{ marginLeft: 15, fontWeight: "bold" }}>A</span>{" "}
            </p>
          </div>
          <div className="game_main_option">
            <button
              className="game_main_option_upper violet"
              onClick={() => {
                setselect("violet");
                setcolor("violet");
              }}
              disabled={timer <= "00:10"}
            >
              <img
                src="https://www.fastwin.app/includes/icons/rocket.png"
                alt=""
              />
              <p style={{ fontWeight: "bold" }}> Join Violet</p>
            </button>
            <p style={{ fontWeight: "bold" }} className="lightcolor">
              1 : 4 : 5{" "}
              <span style={{ marginLeft: 15, fontWeight: "bold" }}>B</span>{" "}
            </p>
          </div>
          <div className="game_main_option">
            <button
              className="game_main_option_upper red"
              onClick={() => {
                setselect("red");
                setcolor("red");
              }}
              disabled={timer <= "00:10"}
            >
              <img
                src="https://www.fastwin.app/includes/icons/rocket.png"
                alt=""
              />
              <p style={{ fontWeight: "bold" }}> Join Red</p>
            </button>
            <p style={{ fontWeight: "bold" }} className="lightcolor">
              1 : 2{" "}
              <span style={{ marginLeft: 15, fontWeight: "bold" }}>C</span>{" "}
            </p>
          </div>
        </div>
        <div
          className="game_main3"
          style={{
            borderBottom: props.darkTheme
              ? "16px solid black"
              : "16px solid #d2d2d2",
          }}
        >
          <div className="game_main3_options">
            {/* {selects.map((i) => ( */}
            <button
              className="game_main3_option1 option1_color"
              style={{
                backgroundColor: props.darkTheme ? "black" : "#ebf7ff",
                border: props.darkTheme ? "none" : "1px solid #cdd4ff",
                color: props.darkTheme ? "white" : "#343a40",
              }}
              key={1}
              onClick={() => {
                setselect(1);
                setcolor("violet");
              }}
              disabled={timer <= "00:10"}
            >
              1
            </button>
            <button
              className="game_main3_option1 option2_color"
              style={{
                backgroundColor: props.darkTheme ? "black" : "#ebf7ff",
                border: props.darkTheme ? "none" : "1px solid #cdd4ff",
                color: props.darkTheme ? "white" : "#343a40",
              }}
              key={2}
              onClick={() => {
                setselect(2);
                setcolor("red");
              }}
              disabled={timer <= "00:10"}
            >
              2
            </button>
            <button
              className="game_main3_option1 option3_color"
              style={{
                backgroundColor: props.darkTheme ? "black" : "#ebf7ff",
                border: props.darkTheme ? "none" : "1px solid #cdd4ff",
                color: props.darkTheme ? "white" : "#343a40",
              }}
              key={3}
              onClick={() => {
                setselect(3);
                setcolor("green");
              }}
              disabled={timer <= "00:10"}
            >
              3
            </button>
            <button
              className="game_main3_option1 option4_color"
              style={{
                backgroundColor: props.darkTheme ? "black" : "#ebf7ff",
                border: props.darkTheme ? "none" : "1px solid #cdd4ff",
                color: props.darkTheme ? "white" : "#343a40",
              }}
              key={4}
              onClick={() => {
                setselect(4);
                setcolor("violet");
              }}
              disabled={timer <= "00:10"}
            >
              4
            </button>
            <button
              className="game_main3_option1 option5_color"
              style={{
                backgroundColor: props.darkTheme ? "black" : "#ebf7ff",
                border: props.darkTheme ? "none" : "1px solid #cdd4ff",
                color: props.darkTheme ? "white" : "#343a40",
              }}
              key={5}
              onClick={() => {
                setselect(5);
                setcolor("red");
              }}
              disabled={timer <= "00:10"}
            >
              5
            </button>
            <button
              className="game_main3_option1 option6_color"
              style={{
                backgroundColor: props.darkTheme ? "black" : "#ebf7ff",
                border: props.darkTheme ? "none" : "1px solid #cdd4ff",
                color: props.darkTheme ? "white" : "#343a40",
              }}
              key={6}
              onClick={() => {
                setselect(6);
                setcolor("green");
              }}
              disabled={timer <= "00:10"}
            >
              6
            </button>
            <button
              className="game_main3_option1 option7_color"
              style={{
                backgroundColor: props.darkTheme ? "black" : "#ebf7ff",
                border: props.darkTheme ? "none" : "1px solid #cdd4ff",
                color: props.darkTheme ? "white" : "#343a40",
              }}
              key={7}
              onClick={() => {
                setselect(7);
                setcolor("violet");
              }}
              disabled={timer <= "00:10"}
            >
              7
            </button>
            <button
              className="game_main3_option1 option8_color"
              style={{
                backgroundColor: props.darkTheme ? "black" : "#ebf7ff",
                border: props.darkTheme ? "none" : "1px solid #cdd4ff",
                color: props.darkTheme ? "white" : "#343a40",
              }}
              key={8}
              onClick={() => {
                setselect(8);
                setcolor("red");
              }}
              disabled={timer <= "00:10"}
            >
              8
            </button>
            <button
              className="game_main3_option1 option9_color"
              style={{
                backgroundColor: props.darkTheme ? "black" : "#ebf7ff",
                border: props.darkTheme ? "none" : "1px solid #cdd4ff",
                color: props.darkTheme ? "white" : "#343a40",
              }}
              key={9}
              onClick={() => {
                setselect(9);
                setcolor("green");
              }}
              disabled={timer <= "00:10"}
            >
              9
            </button>
            <button
              className="game_main3_option1 option10_color"
              style={{
                backgroundColor: props.darkTheme ? "black" : "#ebf7ff",
                border: props.darkTheme ? "none" : "1px solid #cdd4ff",
                color: props.darkTheme ? "white" : "#343a40",
              }}
              key={10}
              onClick={() => {
                setselect(10);
                setcolor("violet");
              }}
              disabled={timer <= "00:10"}
            >
              10
            </button>
            {/* ))} */}
          </div>
          <p style={{ fontWeight: "bold", fontSize: "18px", margin: "7px" }}>
            1:9
          </p>
        </div>
        <div
          className="game_main_record"
          style={{
            borderBottom: props.darkTheme
              ? "16px solid black"
              : "16px solid #d2d2d2",
          }}
        >
          <div className="parity_records_button">
            <p className="game_main_record_p tfw7 lightblack7">
              Parity Records
            </p>
            <Link to="/parityrecords">
              <button
                className="more_button"
                style={{
                  backgroundColor: props.darkTheme ? "black" : "#f1f1f1",
                }}
              >
                more
              </button>
            </Link>
          </div>

          <div className="game_main_record_main">
            {bettingResult.map((data, i) => (
              <div
                key={"betting_" + i}
                className="game_main_record_main_option"
              >
                <div
                  className={
                    "game_main_record_circle " +
                    (data?.winning_value == 8 ||
                    data?.winning_value == 5 ||
                    data?.winning_value == 2
                      ? "red"
                      : data?.winning_value % 3 && data?.winning_value != 0
                      ? "violet"
                      : "green")
                  }
                >
                  {data.winning_value}
                </div>
                <p>{data.game_id.substring(8)}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="game_main4">
          <div className="game_main4_header">
            <p
              style={{
                backgroundColor: props.darkTheme ? "black" : "white",
                color: props.darkTheme ? "white" : "black",
                borderRight: "2px solid lightgray",
                fontWeight: "bold",
              }}
              className={`fs20 lightcolor ${
                ordertype == "everyone" && "game_users_selected"
              }`}
              onClick={() => setordertype("everyone")}
            >
              Everyone's Order
            </p>
            <p
              className={`fs20 lightcolor ${
                ordertype == "my" && "game_users_selected"
              }`}
              style={{
                backgroundColor: props.darkTheme ? "black" : "white",
                color: props.darkTheme ? "white" : "black",

                fontWeight: "bold",
              }}
              onClick={() => setordertype("my")}
            >
              My Order
            </p>
          </div>
          {ordertype == "everyone" ? (
            <EveryonesOrder result={everyOrder} />
          ) : (
            <MyOrder result={myOrder} myOrderMode={myOrderMode} />
          )}
        </div>
      </div>
      {select && Number(timerRef.current.innerHTML.substring(3)) > 1 && (
        <Fastparityform
          selected={select}
          walletAmount={walletAmount}
          setselected={setselect}
          sendGamePlayDetails={sendGamePlayDetails}
          color={color}
          setMyOrder={setMyOrder}
          myOrder={myOrder}
          gameId={gameId}
          formDarkMode={formDarkMode}
          fetchWalletData={fetchWalletData}
        />
      )}
    </div>
  );
}

export default FastParty;
