import { useState } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import "./modal.css";

const Modal = ({ show, close, title, children }) => {
  const [ref, setref] = useState("")
    const reff =(e) =>{
        setref(e.target.value)
        localStorage.setItem("ref", ref);
        console.log(ref)
    }
  return (
    <>
     {
     show ?
     
      <div
        className="modalContainer"
        onClick={() => close()}
      >
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <header className="modal_header">
            <h2 className="modal_header-title"> {title} </h2>
          </header>
          <main className="modal_content"> <input className="couponinput" onChange={reff}></input> </main>
          <footer className="modal_footer">
            <button className="modal-btn" onClick={() => close()}>
              Cancel
            </button>

            <div ><button className="modal-btn" onClick={() => close()}>Submit</button></div>
          </footer>
        </div>
      </div>
      : null
     }
    </>
  );
};

export default Modal;