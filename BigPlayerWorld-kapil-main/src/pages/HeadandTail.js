import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Fastparityform from "../components/Fastparityform";
import "./fastparty.css";
import "./andarbahar.css";
import "./HeadandTail.css";

import {
  GetGameId,
  GetOrders,
  SendGamePlay,
  GetBettingResult,
  GetWalletAmount,
  GetHeadTailGameID,
  GetHeadTailOrders,
  SetHeadAndTailPlay,
  GetHeadTailBettingResult,
} from "../api";
import { getCookie, deleteCookie } from "../cookie";
import HeadTailMyOrder from "../components/HeadTailMyOrder";
import { columnSelectionComplete } from "@syncfusion/ej2-react-grids";
import ToasterMessage from "../utils/ToasterMessage";
import ModalHeadTail from "../components/ModalHeadTail/ModalHeadTail";

function HeadandTail(props) {
  const [select, setselect] = useState("");
  const [color, setcolor] = useState("");
  const [gameId, setGameId] = useState("");
  const [ordertype, setordertype] = useState("everyone");
  const [timer, setTimer] = useState("");
  const [everyOrder, setEveryOrder] = useState([]);
  const [myOrder, setMyOrder] = useState([]);
  const [bettingResult, setBettingResult] = useState([]);
  const [walletAmount, setWalletAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [open, setOpen] = useState(false);
  const Ref = useRef(null);
  const timerRef = useRef(null);
  const history = useNavigate();
  const handleOpen = () => setOpen(true);
  // const setOpen = () => setOpen(false);
  var formDarkMode = props.darkTheme;

  const coin = document.querySelector("#coin");
  const button = document.querySelector("#flip");
  const status = document.querySelector("#status");
  const heads = document.querySelector("#headsCount");
  const tails = document.querySelector("#tailsCount");

  let headsCount = 0;
  let tailsCount = 0;
  useEffect(() => {
    fetchData();
    fetchBettingResult();
    clearTimer(getDeadTime(20));
    fetchWalletData();
  }, []);
  useEffect(() => {
    let timerId = setInterval(checkCount, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  const checkCount = () => {
    if (timerRef.current.innerHTML === "00:01") {
      setTimeout(() => {
        fetchData();
      }, 1000);
    }
  };
  const fetchData = async () => {
    try {
      fetchMyOrder();
      if (!token) history("/");
      const { data } = await GetHeadTailGameID(token);
      fetchBettingResult();
      if (data?.gameID?.head_tail_id) {
        setGameId(data?.gameID?.head_tail_id);
        resetTimer(60 - new Date().getSeconds());
      } else if (data.status === "Unauthorized") {
        deleteCookie("token");
        history("/");
      }
    } catch (e) {
      const errorMessage = e.message ? e.message : e;

      return false;
    } finally {
      setOpen(false);
    }
  };
  async function fetchMyOrder() {
    try {
      if (!token) history("/");
      const payload = {
        type: 1,
        offset: 10,
      };
      const { data } = await GetHeadTailOrders(token, payload);
      if (data?.result) {
        if (timer === "00:00") {
          handleOpen();
        }
        setMyOrder(data.result);
      }
    } catch (e) {
      return false;
    }
  }

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    return { total, minutes, seconds };
  };
  const getDeadTime = (sec) => {
    let deadline = new Date();
    deadline.setSeconds(deadline.getSeconds() + sec);
    return deadline;
  };
  const resetTimer = (sec) => {
    clearTimer(getDeadTime(sec));
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
  useEffect(() => {
    if (timer === "00:03" && bettingResult.length > 0) {
      flipCoin();
    } else if (timer === "00:00" && bettingResult.length > 0) {
      handleOpen();
    }
  }, [bettingResult.length, timer]);
  const clearTimer = (e) => {
    // setTimer("00:00");
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };

  function deferFn(callback, ms) {
    setTimeout(callback, ms);
  }

  function processResult(result) {
    if (result === "heads") {
      headsCount++;
      heads.innerText = headsCount;
    } else {
      tailsCount++;
      tails.innerText = tailsCount;
    }
    status.innerText = result.toUpperCase();
  }

  function flipCoin() {
    coin.setAttribute("class", "");
    // const random = Math.random();
    const result =
      bettingResult[0].ht_winning_value === "HEAD" ? "heads" : "tails";
    deferFn(function () {
      coin.setAttribute("class", "animate-" + result);
      deferFn(processResult.bind(null, result), 2900);
    }, 100);
  }

  const token = getCookie("token");

  async function fetchWalletData() {
    try {
      const { data } = await GetWalletAmount(token);

      if (data?.result?.user_recharge_amount) {
        // setWalletAmount(data.result.user_recharge_amount);
        setWalletAmount(data?.result?.total_amount)
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
  // useEffect(() => {
  //   // clearTimer(getDeadTime(20));
  //   // fetchData();
  //   // fetchOrders();
  //   // fetchBettingResult();
  //   fetchWalletData();
  // }, []);

  const sendGamePlayDetails = async (payload) => {
    try {
      if (gameId) {
        payload.game_id = gameId;

        const { data } = await SetHeadAndTailPlay(token, payload);

        if (data.responseCode === 200) {
          ToasterMessage(data.message, "success");
        }
      }
    } catch (e) {
      ToasterMessage(e.response.message, "error");
      return false;
    }
  };

  async function fetchBettingResult() {
    try {
      if (!token) history("/");
      const payload = {
        offset: 0,
        limit: 20,
      };
      const { data } = await GetHeadTailBettingResult(token, payload);

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
  return (
    <>
      <div
        className="sapre_container "
        style={{
          backgroundColor: props.darkTheme ? "#181818" : "white",
          color: props.darkTheme ? "white" : "black",
        }}
      >
        <div
          className="van-nav-bar__content background-top"
          style={{
            backgroundColor: props.darkTheme ? "black" : "#fede17",
            color: props.darkTheme ? "white" : "rgb(242, 18, 18)",
          }}
        >
          <div className="van-nav-bar__left">
            <Link
              to={"/dashboard"}
              className="van-icon van-icon-arrow-left van-nav-bar__arrow"
            >
              {/**/}
            </Link>
          </div>
          <div className="title van-ellipsis">Do Head & Tail</div>
          <div className="van-nav-bar__right">
            <div data-v-11837e31="" className="wh">
              <i data-v-11837e31="" className="van-icon van-icon-question-o">
                {/**/}
              </i>
            </div>
          </div>
        </div>
        <div
          className="main_spare_game"
          style={{
            backgroundColor: props.darkTheme ? "#181818" : "white",
            color: props.darkTheme ? "white" : "black",
          }}
        >
          <div data-v-3e76bb0a="" className="head-top">
            <span
              data-v-3e76bb0a=""
              style={{
                fontSize: "1rem",
                color: props.darkTheme ? "white" : "black",
              }}
            >
              Period
            </span>
            <span
              data-v-3e76bb0a=""
              style={{
                fontSize: "1rem",
                color: props.darkTheme ? "white" : "black",
              }}
            >
              Count Down
            </span>
          </div>
          <div data-v-3e76bb0a="" className="head-bot">
            <span
              data-v-3e76bb0a=""
              style={{ color: props.darkTheme ? "white" : "red" }}
            >
              {gameId}
              <br data-v-3e76bb0a="" />{" "}
            </span>
            <div data-v-3e76bb0a="" className="van-count-down">
              <div data-v-3e76bb0a="" className="head-time">
                {/**/}
                <span
                  data-v-3e76bb0a=""
                  className="head-time-s1 numdupdate"
                  ref={timerRef}
                  style={{ marginLeft: "-80px", backgroundColor: "none" }}
                >
                  {timer}
                </span>
              </div>
            </div>
          </div>

          <div class="container2">
            <div id="coin" class="">
              <div id="tails" class="tails">
                <img src="./assets/bitcoin.png" />
              </div>
              <div id="heads" class="heads">
                <img src="./assets/franc.png" />
              </div>
            </div>

            <p>
              <span id="status"></span>
              {open ? (
                <ModalHeadTail
                  show={open}
                  setOpen={setOpen}
                  title={bettingResult[0]?.ht_winning_value}
                  // title={ myOrder[0]?.status == 1
                  //   ? "Win"
                  //   : myOrder[0]?.status == 2
                  //   ? "Pending"
                  //   : "Lose"}
                />
              ) : (
                ""
              )}
            </p>
          </div>

          <div className="head_tail_div">
            <button
              className="heads_batting"
              onClick={() => {
                setselect(1);
                setcolor("red");
              }}
              style={{
                backgroundColor: props.darkTheme ? "black" : "#fede17",
                color: props.darkTheme ? "white" : "rgb(242, 18, 18)",
              }}
              disabled={timer <= "00:10"}
            >
              <p
                style={{
                  fontWeight: "bold",
                }}
              >
                Heads
              </p>
            </button>
            <button
              className="tails_batting"
              onClick={() => {
                setselect("0");
                setcolor("red");
              }}
              style={{
                backgroundColor: props.darkTheme ? "black" : "#fede17",
                color: props.darkTheme ? "white" : "rgb(242, 18, 18)",
              }}
              disabled={timer <= "00:10"}
            >
              <p
                style={{
                  fontWeight: "bold",
                }}
              >
                Tails
              </p>
            </button>
          </div>
          <div className="ratio">
            <p
              style={{
                fontWeight: "bold",
                color: props.darkTheme ? "white" : "black",
              }}
            >
              1 : 2
            </p>
            <p
              style={{
                fontWeight: "bold",
                color: props.darkTheme ? "white" : "black",
              }}
            >
              1 : 2
            </p>
          </div>
        </div>

        <div
          className="SapreRecord"
          style={{
            backgroundColor: props.darkTheme ? "black" : "#fede17",
            color: props.darkTheme ? "white" : "rgb(242, 18, 18)",
          }}
        >
          Record
        </div>
        <div data-v-11837e31="" className="SapreRecord-content">
          <div
            data-v-11837e31=""
            style={{ marginBottom: "10px" }}
            className="pokerRecord-content-top"
          >
            {" "}
            Head & tail Records{" "}
          </div>
          <div
            data-v-11837e31=""
            style={{ marginBottom: "10px" }}
            className="pokerRecord-content-top2"
          >
            <Link to="/parityrecordsForHeadTail">
              <button>more &gt;</button>
            </Link>
          </div>
          <div data-v-11837e31="" className="pokerRecord-content-record">
            {bettingResult.map((data) => {
              return (
                <div data-v-11837e31="" className="pokerRecord-result">
                  <div data-v-11837e31="" className="pokerRecord-result1">
                    {data.play_id.substring(8)}
                  </div>
                  {/**/}
                  <div data-v-11837e31="" className="pokerRecord-result3">
                    {data.ht_winning_value === "HEAD" ? "H" : "T"}
                  </div>
                  {/**/}
                </div>
              );
            })}
          </div>
        </div>
        <div
          className="MyOrder_sapre"
          style={{
            backgroundColor: props.darkTheme ? "black" : "#fede17",
            color: props.darkTheme ? "white" : "rgb(242, 18, 18)",
          }}
        >
          My Order
        </div>
        <div data-v-11837e31="" className="MyOrder-record">
          <div data-v-11837e31="" className="MyOrder-recordmore">
            <Link to="/MyOrderForHeadTail">
              <button>more &gt;</button>
            </Link>
          </div>
          <div
            style={{
              width: "100%",
              marginTop: "12px",
            }}
            data-v-11837e31=""
            className="MyOrder-records"
          >
            <div
              data-v-11837e31=""
              className="MyOrder-record-top"
              //   style={{ overflowY: "scroll", height: "55vh" }}
            >
              <div>
                <HeadTailMyOrder result={myOrder} />
              </div>
            </div>
          </div>
        </div>

        {select && (
          <Fastparityform
            selected={select}
            walletAmount={walletAmount}
            setselected={setselect}
            formDarkMode={formDarkMode}
            sendGamePlayDetails={sendGamePlayDetails}
            color={color}
            setMyOrder={setMyOrder}
            myOrder={myOrder}
            gameId={gameId}
            sapre={true}
            fetchMyOrder={fetchMyOrder}
            fetchWalletData={fetchWalletData}
          />
        )}
      </div>
    </>
  );
}

export default HeadandTail;
