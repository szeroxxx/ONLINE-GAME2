import React, { useState, useEffect, useRef } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import { Link, useNavigate } from "react-router-dom";
import { Navbar, Sidebar } from "../components";
import {
  UpdateParityResult,
  GetGameId,
  ParityManagement as ParityManagementApi,
  UpdateHeadTailResult,
  GetHeadTailHistory,
} from "../../api";
import { getCookie, deleteCookie } from "../../cookie";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import "./HeadTailManagement.css";
import ToasterMessage from "../../utils/ToasterMessage";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const HeadTailManagement = () => {
  const { setCurrentColor, setCurrentMode, activeMenu } = useStateContext();

  const history = useNavigate();
  const [gameId, setGameId] = useState("");
  const [list, setList] = useState([]);
  const [noSelected, setNoSelected] = useState(10);
  const [timer, setTimer] = useState("00:00");
  const [radio,setRadio]=useState(2)
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const Ref = useRef(null);
  const timerRef = useRef(null);

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    return { total, minutes, seconds };
  };

  useEffect(()=>{
    fetchData()
  },[])

  async function fetchData() {  
    const resp = await GetHeadTailHistory(token, {});
    setGameId(resp?.data?.game_id);
    setList(resp?.data?.result);
    resetTimer(60 - new Date().getSeconds());
  }


  const token = getCookie("token");
  const updateHeadTailResult=async()=>{
    try {
      if (!token) history("/");    
      let payload={
        period_id:gameId,
        value:radio
      }
      const { data } = await UpdateHeadTailResult(token, payload);
      ToasterMessage(data.messages, "success");
    } catch (e) {
      ToasterMessage("error", "error");
      return false;
    }
  }
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

 

  useEffect(()=>{
    fetchData()
  },[])

  async function fetchData() {  
    const resp = await GetHeadTailHistory(token, {});
    setGameId(resp?.data?.game_id);
    setList(resp?.data?.result);
    resetTimer(60 - new Date().getSeconds());
  }

  const checkCount = () => {
    if (timerRef.current.innerHTML === "00:01") {
      setTimeout(() => {
        console.log("calling fetchData");
        fetchData();
      }, 1000);
    }
  };

  useEffect(() => {
    let timerId = setInterval(checkCount, 1000);
    console.log("timerId-", timerId);
    return () => {
      clearInterval(timerId);
    };
  }, []);

  useEffect(() => {
    if (Number(timerRef?.current?.innerHTML?.substring(3)) == 12) {
      console.log("callData");
      // callData();
    }
  });

  const showModal = async (e) => {
    e.preventDefault();
    setNoSelected(e.target.id);
    handleOpen();
  };

  useEffect(() => {
    // callData();
    clearTimer(getDeadTime(60 - new Date().getSeconds()));
  }, []);

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
        <div className="Head_Tail_management_main">
          <div className="head_tail_header" style={{ marginBottom: "20px" }}>
            <div>
              <p className="parityM_countdown">Timer</p>
              <p
                className="parityM_timer"
                ref={timerRef}
                style={{ marginTop: "7px" }}
              >
                {timer}
              </p>
            </div>
            <div>
              <p className="parityM_countdown">Period</p>
              <p className="parityM_timer" style={{ marginTop: "7px" }}>
                {gameId}
              </p>
            </div>
          </div>
          <div className="admin_head_tail_main">
            <div>
              <p className="head_tail_p">Head</p>
              <p className="amount_P">Amount : {list[0]?.amount}</p>
              <input type="radio" className="head_tail_checkbox" name="radio" onChange={()=>setRadio(1)}/>
            </div>
            <div>
              <p className="head_tail_p">Tail</p>
              <p className="amount_P">Amount :{list[1]?.amount}</p>
              <input type="radio" className="head_tail_checkbox"name="radio" onChange={()=>setRadio(0)} />
            </div>
          </div>
          <div style={{ display: "grid" }}>
            <button className="headtailbutton" onClick={()=>updateHeadTailResult()}>Submit</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeadTailManagement;
