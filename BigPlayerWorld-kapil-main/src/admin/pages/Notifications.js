import React, { useState } from "react";
import { Button } from "../components";
import { useStateContext } from "../contexts/ContextProvider";
import { useEffect } from "react";
import { Navbar, Sidebar } from "../components";
import "./Notifications.css";
import { SetNotification } from "../../api";
import { getCookie } from "../../cookie";
import { GiConsoleController } from "react-icons/gi";
import ToasterMessage from "../../utils/ToasterMessage";
const Notification = () => {
  const {
    setCurrentColor,
    setCurrentMode,
    currentMode,
    activeMenu,
    currentColor,
    themeSettings,
    setThemeSettings,
  } = useStateContext();
  const [file, setFile] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [url, setURL] = useState("");
  const token = getCookie("token");
  useEffect(() => {
    const currentThemeColor = localStorage.getItem("colorMode");
    const currentThemeMode = localStorage.getItem("themeMode");
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  const HandleOnSend = () => {
    let formData = new FormData();
    let data = [
      { name: "image", value: file },
      { name: "title", value: title },
      { name: "message", value: message },
      { name: "url", value: url },
    ];
    data.forEach((dt) => {
      formData.append(dt.name, dt.value);
    });
    try {
      if(file===""||title ===""||message===""){
        ToasterMessage("Title ,Image and Message can't be null", "error")
        return
      }

     const resp= SetNotification(token, formData)
        .then(({ data }) => {
          setFile("");
          setMessage("");
          setTitle("");
          setURL("");
        })
        .catch((e) => {
          console.log("errror-", e);
        });


    } catch (error) {
      
    }
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
        <div className="notification_main">
          <div className="img_date_div">
            <input
              filename={file}
              onChange={(e) => {
                setFile(e.target.files[0]);
              }}
              type="file"
              accept="image/*"
            />
          </div>
          <div className="title_div">
            <p>Title</p>
            <input
              className="title_input"
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="url_div">
            <p>URL</p>
            <input
              className="title_input"
              type="text"
              placeholder="URL"
              value={url}
              onChange={(e) => setURL(e.target.value)}
            />
          </div>
          <div className="message_div">
            <p>Message</p>
            <textarea
              name="message"
              rows="4"
              cols="50"
              className="message_input"
              placeholder="Messagae"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div className="button_div ">
            <button
              className="notification_button "
              onClick={() => HandleOnSend()}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notification;
