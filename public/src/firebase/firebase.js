import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCG2MxSpM7pNqcGpOlbrv3EDgt-ki-iKrw",
  authDomain: "expensify-8a66d.firebaseapp.com",
  databaseURL: "https://expensify-8a66d.firebaseio.com",
  projectId: "expensify-8a66d",
  storageBucket: "expensify-8a66d.appspot.com",
  messagingSenderId: "206017413049",
  appId: "1:206017413049:web:6fb3a1700e05bbf33fc068",
  measurementId: "G-YNKS0HZ6VY"
};

firebase.initializeApp(firebaseConfig);
firebase
  .database()
  .ref()
  .set({
    name: "Stephen Bilham"
  });
