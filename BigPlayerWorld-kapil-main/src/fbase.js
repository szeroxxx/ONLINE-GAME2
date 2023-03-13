import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import ToasterMessage from "./utils/ToasterMessage";

var config = {
  apiKey: "AIzaSyDeYYUnBJ7UxpsWWwfXrGsLJOyePssqPw0",
  authDomain: "win99x-e6206.firebaseapp.com",
  projectId: "win99x-e6206",
  storageBucket: "win99x-e6206.appspot.com",
  messagingSenderId: "294009754200",
  appId: "1:294009754200:web:dcba4e306a44d862d8f02d",
  measurementId: "G-RHW8DGG5JJ",
};

const firebaseApp = initializeApp(config);
const messaging = getMessaging(firebaseApp);

export const fetchToken = (setTokenFound) => {
  return getToken(messaging, {
    vapidKey:
      "BCx_diXANY_nNv5LdC44l5x1U87QqRuan3uQ385obw_ttY7H8RnOyGmSr7dvfd2plvb_w8NyxVBMsJHYx1e8004",
  })
    .then((currentToken) => {
      if (currentToken) {
        console.log("current token for client: ", currentToken);
        setTokenFound(currentToken);
      } else {
        ToasterMessage("Please Enable Your Notification", "error")
        setTokenFound(false);
      }
    })
    .catch((err) => {
      ToasterMessage("Please Enable Your Notification", "error");
    });
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });
