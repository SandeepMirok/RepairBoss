import firebase from "firebase";

// Initialize Firebase
const config = {
  apiKey: "AIzaSyA4N_ocDcnYILbUWfbOVmWDr2cEVKIA7LI",
  authDomain: "autorepair-1534355534650.firebaseapp.com",
  databaseURL: "https://autorepair-1534355534650.firebaseio.com",
  projectId: "autorepair-1534355534650",
  storageBucket: "",
  messagingSenderId: "259946679697"
};

const fire = firebase.initializeApp(config);
export default fire;
