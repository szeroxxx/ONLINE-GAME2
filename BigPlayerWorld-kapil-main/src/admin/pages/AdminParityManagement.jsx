import React, { useState, useEffect, useRef } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import { Link, useNavigate } from "react-router-dom";
import { Navbar, Sidebar } from "../components";
import {
  UpdateParityResult,
  GetGameId,
  ParityManagement as ParityManagementApi,
  UpdateThreeMinParityResult,
} from "../../api";
import { getCookie, deleteCookie } from "../../cookie";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import "./AdminParityManagement.css";
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

const AdminParityManagement = () => {
  const { setCurrentColor, setCurrentMode, activeMenu } = useStateContext();

  const history = useNavigate();
  const [gameId, setGameId] = useState("");
  const [list, setList] = useState([]);
  const [noSelected, setNoSelected] = useState(10);
  const [timer, setTimer] = useState("00:00");

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

  const token = getCookie("token");

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

  async function callData() {
    try {
      if (!token) history("/");
      const { data } = await ParityManagementApi(token, {});
      if (data?.game_id) {
        setGameId(data.game_id);
        setList(data.result);
      } else if (data.status === "Unauthorized") {
        deleteCookie("token");
        deleteCookie("isAdmin");
        deleteCookie("ref");
        history("/");
      }
    } catch (e) {
      console.log("error:", e);
      return false;
    }
  }

  const sendResult = async (e) => {
    try {
      e.preventDefault();
      console.log({
        game_id: gameId,
        value: +noSelected,
      });
      const { data } = await UpdateThreeMinParityResult(token, {
        game_id: gameId,
        value: noSelected,
      });
      ToasterMessage("No. selected Successfully", "success");

 
    } catch (e) {
      console.log(e);
    } finally {
       handleClose();
    }
  };

  async function fetchData() {
    try {
      if (!token) history("/");
      const { data } = await ParityManagementApi(token, {});
      console.log("res", data);
      if (data?.game_id) {
        setGameId(data.game_id);
        setList(data.result);
        console.log(new Date().getSeconds(),"new Date().getSeconds()")
        resetTimer(180 - new Date().getSeconds());
      } else if (data.status === "Unauthorized") {
        deleteCookie("token");
        deleteCookie("isAdmin");
        deleteCookie("ref");
        history("/");
      }
    } catch (e) {
      console.log(" error:", e);
      return false;
    }
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
      callData();
    }
  });

  const showModal = async (e) => {
    e.preventDefault();
    setNoSelected(e.target.id);
    handleOpen();
  };

  useEffect(() => {
    callData();
    clearTimer(getDeadTime(180 - new Date().getSeconds()));
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
        <div className="parity_management_main">
          <div className="game_main_header" style={{ marginBottom: "20px" }}>
            <div className="game_main_header_right parity_management_countdown">
              <p className="parityM_countdown">Countdown</p>
              <p
                className="parityM_timer"
                ref={timerRef}
                style={{ marginLeft: "10px" }}
              >
                {timer}
              </p>
            </div>
            <div
              className="game_main_header_left parity_management_period"
              //   style={{ marginLeft: 50, marginRight: 400 }}
            >
              <p className="parityM_countdown">Period</p>
              <p className="parityM_timer">{gameId}</p>
            </div>
          </div>
          <table className="parity_management_table">
              <tr>
                <th>Number</th>
                <th>User</th>
                <th>Amount</th>
                <th>Result</th>
              </tr>
          
            { 
              list.length > 0 &&
              list[0] != undefined &&
              list.map((data, i) => (
                <tr key={i}>
                  <td style={{ textAlign: "center" }}>{data.value}</td>
                  <td style={{ textAlign: "center" }}>{data.user}</td>
                  <td style={{ textAlign: "center" }}>{data.amount}</td>
                  <td>
                    <input
                      name="noSelect"
                      id={data.value}
                      type="radio"
                      onChange={showModal}
                    />
                  </td>
                </tr>
              ))}
          </table>
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              style={{ textAlign: "center" }}
            >
              Are you Sure?
            </Typography>
            <Typography
              id="modal-modal-description"
              sx={{ mt: 2 }}
              style={{ textAlign: "center" }}
            >
              <div>
                <Button onClick={sendResult}>Confirm</Button>
                <Button style={{ color: "red" }} onClick={handleClose}>
                  Cancel
                </Button>
              </div>
            </Typography>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default AdminParityManagement;
