import React, { useEffect, useRef, useState,useContext } from 'react';
import './otp.css';
import { Link, useNavigate } from "react-router-dom";
import { axiosInstance } from "../api";
import DashFooter from "../components/DashFooter";
import Navbar from "../components/Navbar";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
const OTP=()=>{
    const history = useNavigate();
    const pin1Ref=useRef(null);
    const pin2Ref=useRef(null);
    const pin3Ref=useRef(null);
    const pin4Ref=useRef(null);
    const pin5Ref=useRef(null);
    const pin6Ref=useRef(null);

    const [pin1,setpin1]=useState("");
    const [pin2,setpin2]=useState("");
    const [pin3,setpin3]=useState("");
    const [pin4,setpin4]=useState("");
    const [pin5,setpin5]=useState("");
    const [pin6,setpin6]=useState("");

    const moveToPassword=()=>{
        try {
            if(pin1==''||pin2==''||pin3==''||pin4==''||pin5==''||pin6==''){
                alert("Please enter otp");
                return;
            }
            let localCode=localStorage.getItem('localCodeNumber');
            var code=pin1+pin2+pin3+pin4+pin5+pin6;
            if(localCode!=code){
                alert("Please enter correct code");
                return;
            }
            history('/password');
        } catch (error) {
            console.log(error);
        }
    }
    return(
        <div className="container reg scroll-hide">
            <Link to="/" className="back-icon-container">
                <KeyboardArrowLeftIcon
                style={{ fontSize: "2rem", fontWeight: "500" }} 
                />
            </Link>
            <img src="https://cdn3d.iconscout.com/3d/premium/thumb/smartphone-holding-hand-gesture-4866762-4056937.png" alt="otp screen" className='opt-main-screen'></img>
            <p className="main-title-otp">OTP Verification</p>
            <div  style={{
                width:'100%',
                display:"flex",
                alignItems: 'center',
                justifyContent: 'center',
                marginTop:10
            }}>
                <h1 className="sub-text-otp">
                    Enter the OTP sent to 
                </h1>
                <h1 className="sub-text-otp-number">
                    +91 - phoneValue
                </h1>
            </div>
            <div className="main-input-container">
                <div style={{
                    width:'90%',
                    display:"flex",
                    justifyContent:"space-between",
                    marginBottom:5,
                    marginTop:20,
                    alignSelf:"center"
                }}>
                    <div 
                        className="custom-input-otp">
                        <input
                            ref={pin1Ref}
                            className="custom-inputbox-otp"
                            maxLength={1}
                            value={pin1}
                            onChange={(pin1)=>{
                                setpin1(pin1.target.value)
                                if(pin1!=""){
                                    pin2Ref.current.focus()
                                }
                            }}
                        />
                    </div>
                    <div 
                        className="custom-input-otp">
                        <input
                            ref={pin2Ref}
                            className="custom-inputbox-otp"
                            maxLength={1}
                            value={pin2}
                            onChange={(pin2)=>{
                                setpin2(pin2.target.value)
                                if(pin2!=""){
                                    pin3Ref.current.focus()
                                }
                            }}
                        />
                    </div>
                    <div 
                        className="custom-input-otp">
                        <input
                            ref={pin3Ref}
                            className="custom-inputbox-otp"
                            maxLength={1}
                            value={pin3}
                            onChange={(pin3)=>{
                                setpin3(pin3.target.value)
                                if(pin3!=""){
                                    pin4Ref.current.focus()
                                }
                            }}
                        />
                    </div>
                    <div 
                        className="custom-input-otp">
                        <input
                            ref={pin4Ref}
                            className="custom-inputbox-otp"
                            maxLength={1}
                            value={pin4}
                            onChange={(pin4)=>{
                                setpin4(pin4.target.value)
                                if(pin4!=""){
                                    pin5Ref.current.focus()
                                }
                            }}
                        />
                    </div>
                    <div 
                        className="custom-input-otp">
                        <input
                            ref={pin5Ref}
                            className="custom-inputbox-otp"
                            maxLength={1}
                            value={pin5}
                            onChange={(pin5)=>{
                                setpin5(pin5.target.value)
                                if(pin5!=""){
                                    pin6Ref.current.focus()
                                }
                            }}
                        />
                    </div>
                    <div 
                        className="custom-input-otp">
                        <input
                            ref={pin6Ref}
                            className="custom-inputbox-otp"
                            maxLength={1}
                            value={pin6}
                            onChange={(pin6)=>{
                                setpin6(pin6.target.value)
                                
                            }}
                        />
                    </div>
                </div>
                <div  style={{
                    width:'100%',
                    display:"flex",
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop:25,
                    marginBottom:25,
                }}>
                    <h1 className="footer-text-otp">
                        Don't receive the OTP?
                    </h1>
                    <h1 className="footer-text-otp-2">
                        RESEND OTP
                    </h1>
                </div>
                <Button
                    variant="contained"
                    className="custom-button-1"
                    style={{backgroundColor:"rgb(121, 173, 250)"}}
                    onClick={moveToPassword}
                >
                    Verify & Proceed
                </Button>
            </div>
        </div>
    )
}
export default OTP;