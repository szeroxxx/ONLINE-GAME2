import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import "./ModalHeadTail.css";

const ModalHeadTail = ({ show, setOpen, title, children }) => {
  setTimeout(() => {
    setOpen(false);
  }, 3000);

  const [ref, setref] = useState("");
  const reff = (e) => {
    setref(e.target.value);
    localStorage.setItem("ref", ref);
  };
  return (
    <>
      {show ? (
        <div className="modalContainerHeadTail" onClick={() => setOpen(false)}>
          <div className="modalHeadTail" onClick={(e) => e.stopPropagation()}>
            <h1 className="msg"> {title} Won</h1>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ModalHeadTail;
