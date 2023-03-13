import React from 'react'
import { toast } from 'react-toastify'

const ToasterMessage = (message,type) => {
    toast[type] (message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        })

}

export default ToasterMessage
