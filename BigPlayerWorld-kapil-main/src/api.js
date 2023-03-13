import axios from "axios";
export const axiosInstance = axios.create({
  baseURL: "https://win99x.com/public/api",
});

export const LoginAPI = (data) => axiosInstance.post("/auth/login", data);

export const SendOTP = (data) => axiosInstance.post("/auth/sendOtp", data);

export const GetUserDetail = (token) =>
  axiosInstance.get("/auth/getUserDetail", {
    headers: { Authorization: "Bearer " + token },
  });

export const ForgetPassword = (payload) =>
  axiosInstance.post("/auth/forgetPassword", payload);

export const ResetPassword = (payload) =>
  axiosInstance.post("/auth/resetPassword", payload);

export const UserRegistration = (data) =>
  axiosInstance.post("/auth/register", data);

export const GetGameId = (token) =>
  axiosInstance.get("/auth/getGameID", {
    headers: { Authorization: "Bearer " + token },
  });
  
  export const getThreeMinuteGameID = (token) =>
  axiosInstance.get("/auth/getThreeMinuteGameID", {
    headers: { Authorization: "Bearer " + token },
  });
export const GetOrders = (token, payload) =>
  axiosInstance.post("/auth/getOrders", payload, {
    headers: { Authorization: "Bearer " + token },
  });
  
  export const GetThreeMinuteOrders = (token, payload) =>
  axiosInstance.post("/auth/getThreeMinuteOrders", payload, {
    headers: { Authorization: "Bearer " + token },
  });
export const SendGamePlay = (token, payload) =>
  axiosInstance.post("/auth/gamePlay", payload, {
    headers: { Authorization: "Bearer " + token },
  });

export const GetBettingResult = (token, payload) =>
  axiosInstance.post("/auth/getBettingResult", payload, {
    headers: { Authorization: "Bearer " + token },
  });

export const GetWalletAmount = (token) =>
  axiosInstance.get("/auth/getWalletAmount", {
    headers: { Authorization: "Bearer " + token },
  });

export const SendRechargeAmount = (token, payload) =>
  axiosInstance.post("/auth/recharge", payload, {
    headers: { Authorization: "Bearer " + token },
  });

export const UserReferHistory = (token, payload) =>
  axiosInstance.post("/auth/getUserReferHistory", payload, {
    headers: { Authorization: "Bearer " + token },
  });

export const UserProfileUpdate = (token, payload) =>
  axiosInstance.post("/auth/userProfileUpdate", payload, {
    headers: { Authorization: "Bearer " + token },
  });


export const GetUserList = (token, params) =>
  axiosInstance.get("/admin/getUserList", {
    headers: { Authorization: "Bearer " + token },
    params,
  });

  export const GetUserRechargeList = (token, params) =>
  axiosInstance.get("/admin/getUserRechargeList", {
    headers: { Authorization: "Bearer " + token },
    params,
  });

  export const GetWithdrawlList = (token, params) =>
  axiosInstance.get("/admin/getWithdrawlList", {
    headers: { Authorization: "Bearer " + token },
    params,
  });

  export const UpdateWithdrawlRequest = (token, payload) =>
  axiosInstance.post("/admin/updateWithdrawlRequest", payload, {
    headers: { Authorization: "Bearer " + token }
  });

  export const GetUserRechargeHistory = (token, payload) =>
  axiosInstance.post("/auth/getUserRechargeHistory", payload, {
    headers: { Authorization: "Bearer " + token }
  });

  export const ParityManagement = (token, payload) =>
  axiosInstance.post("/admin/parityManagement", payload, {
    headers: { Authorization: "Bearer " + token }
  });

  export const UpdateParityResult = (token, payload) =>
  axiosInstance.post("/admin/updateParityResult", payload, {
    headers: { Authorization: "Bearer " + token }
  });

  export const AddUpiAddress = (token, payload) =>
  axiosInstance.post("/auth/addUpiAddress", payload, {
    headers: { Authorization: "Bearer " + token }
  });

  export const CreatePaytmWallet = (token, payload) =>
  axiosInstance.post("/auth/createPaytmWallet", payload, {
    headers: { Authorization: "Bearer " + token }
  });

  export const SentWithdrawlRequest = (token, payload) =>
  axiosInstance.post("/auth/sentWithdrawlRequest", payload, {
    headers: { Authorization: "Bearer " + token }
  });

  export const GetWithdrawlPaymentMethod = (token) =>
  axiosInstance.get("/auth/getWithdrawlPaymentMethod", {
    headers: { Authorization: "Bearer " + token }
  });

  export const GetTradeHistory = (token, payload) =>
  axiosInstance.post("/admin/getTradeHistory", payload, {
    headers: { Authorization: "Bearer " + token }
  });

  export const SetGameSetting=(token,payload)=>{
    axiosInstance.post("/admin/gameSetting",payload,{
      headers: { Authorization: "Bearer " + token }
    })
  }
  export const SetPaytmPayment=(token,payload)=>{
    axiosInstance.post("/admin/apiKeySetting",payload,{
      headers: { Authorization: "Bearer " + token }
    })
  }
  export const SetNotification=(token,payload)=>{
    debugger
    axiosInstance.post("/admin/sendNotification",payload,{
      headers: { Authorization: "Bearer " + token }
    })
  }

  export const GetPhoneList = (token,value) =>
  axiosInstance.get(`/admin/getPhoneList?search=${value}`, {
    headers: { Authorization: "Bearer " + token }
  });
  export const GetSetting = (token) =>
  axiosInstance.get("/admin/getSettings", {
    headers: { Authorization: "Bearer " + token }
  });
  export const GetUserWithdrawlHistory=(token,payload)=>{
  return  axiosInstance.post("/auth/getUserWithdrawlHistory",payload,{
      headers: { Authorization: "Bearer " + token }
    }).then((res)=>{
     return res
    })
  }

  export const GetSpinPlayValue = (token) =>
  axiosInstance.post("/auth/spinPlay","", {
    headers: { Authorization: "Bearer " + token }
  });


  export const GetHeadTailGameID = (token) =>
  axiosInstance.get("auth/getHeadTailGameID", {
    headers: { Authorization: "Bearer " + token },
  });

 
  
  export const SetHeadAndTailPlay=(token,payload)=>{
    return  axiosInstance.post("/auth/headAndTailPlay",payload,{
        headers: { Authorization: "Bearer " + token }
      }).then((res)=>{
       return res
      })
    }

  export const GetHeadTailOrders = (token,payload) =>
  axiosInstance.post("/auth/getHeadTailOrders",payload, {
    headers: { Authorization: "Bearer " + token }
  });
  
  export const GetHeadTailBettingResult=(token,payload)=>{
    return  axiosInstance.post("/auth/getHeadTailBettingResult",payload,{
        headers: { Authorization: "Bearer " + token }
      }).then((res)=>{
       return res
      })
    }
    export const GetDashBoard = (token) =>
    axiosInstance.get("/admin/dashboard", {
      headers: { Authorization: "Bearer " + token }
    });

    export const SentRewardAmount=(token,payload)=>{
      axiosInstance.post("/admin/sentRewardAmount",payload,{
        headers: { Authorization: "Bearer " + token }
      })
    }
   

    export const GetHeadTailHistory=(token,payload)=>{
      return  axiosInstance.post("/admin/getHeadTailHistory",payload,{
          headers: { Authorization: "Bearer " + token }
        }).then((res)=>{
         return res
        })
      }
     
  export const UpdateHeadTailResult=(token,payload)=>{
    return  axiosInstance.post("/admin/updateHeadTailResult",payload,{
        headers: { Authorization: "Bearer " + token }
      }).then((res)=>{
       return res
      })
    }
    export const UpdateThreeMinParityResult = (token, payload) =>
  axiosInstance.post("/admin/updateThreeMinutParityResult", payload, {
    headers: { Authorization: "Bearer " + token }
  });

  export const GetUserActivity = (token, params) =>
  axiosInstance.get(`/admin/getUserActivity?user_id=${params}`, {
    headers: { Authorization: "Bearer " + token },
  });
  export const DeleteUser=(token,payload)=>{
    return  axiosInstance.post("/auth/deleteUser",payload,{
        headers: { Authorization: "Bearer " + token }
      }).then((res)=>{
       return res
      })
    }