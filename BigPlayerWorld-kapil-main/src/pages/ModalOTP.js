import ReactDOM from "react-dom";
import { Link, useNavigate } from "react-router-dom";
import "./modal.css";

const ModalOTP = ({ show, close, title, children, code }) => {
  const history = useNavigate()
  
  const verify =() =>{
    const otp = localStorage.getItem("OTP")
    if(code === otp){
      history("/password")
    }
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
          <main className="modal_content"> {children} </main>
          <footer className="modal_footer">
            <button className="modal-btn" onClick={() => close()}>
              Cancel
            </button>

            <div ><button className="modal-btn" onClick={verify}>Submit</button></div>
          </footer>
        </div>
      </div>
      : null
     }
    </>
  );
};

export default ModalOTP;