import { useState } from 'react';
import "./phoneNo.css";
import Modal from './Modal';
import { Link } from 'react-router-dom';
import {axiosInstance} from '../api';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import TextField from '@mui/material/TextField';
import ModalOTP from './ModalOTP';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


function Verify() {
    const [value, setValue] = useState("");
    const [code, setcode] = useState("");
    const clearValue = () => setValue("");
    const [modal, setModal] = useState(false)
    const Toggle = () => setModal(!modal);

 return (
    <div className="container reg scroll-hide">
        <Link to="/phoneno" className="back-icon-container">
            <KeyboardArrowLeftIcon/>
        </Link>
        <p className="light-text">verification</p>
        <h1 className="second-line-text">We sent you an SMS code</h1>
        <div className="phoneNoContainer">
            <TextField
            required
            id="outlined"
            label="Enter the OTP"
            value={code}
            onChange={(e) => setcode(e.target.value)}
            />
        </div>
        <button onClick={() => Toggle()} className="next-button" >
            <ArrowForwardIosIcon style={{color: 'white'}} fontSize="large" />
        </button>
        <p style={{marginTop: '1.5vh', marginLeft: '46%'}} >Next</p>
        <ModalOTP show={modal} title="Allow the application to verify?" close={Toggle} code={code}>
            {code} is the code
        </ModalOTP>
        <p className="codenot">Code not received?</p>
    </div>
    
 )
}

export default Verify;