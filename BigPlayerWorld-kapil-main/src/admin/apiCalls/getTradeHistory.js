// import { GetTradeHistory } from "../../api";
// import { getCookie } from "../../cookie";

// // API - Gets Trade History
// // params @phoneNumber @date
// const getTradeHistory = async(phoneNumber,date) => {
//   const token = getCookie("token");
//   const payload  = {
//     id:6,
//     date: date,
//     offset:0,
//     limit:10,     
//   }
//   try {
//     const response = await GetTradeHistory(token, payload);
//     console.log(response)

//   }catch(err){
//     console.log("getTradeHistory error-", err);
//   }
// }

// export default getTradeHistory