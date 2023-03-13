importScripts('https://www.gstatic.com/firebasejs/9.15.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.15.0/firebase-messaging-compat.js');

const firebaseConfig = {
    apiKey: "AIzaSyDeYYUnBJ7UxpsWWwfXrGsLJOyePssqPw0",
    authDomain: "win99x-e6206.firebaseapp.com",
    projectId: "win99x-e6206",
    storageBucket: "win99x-e6206.appspot.com",
    messagingSenderId: "294009754200",
    appId: "1:294009754200:web:dcba4e306a44d862d8f02d",
    measurementId: "G-RHW8DGG5JJ"
  };

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});
