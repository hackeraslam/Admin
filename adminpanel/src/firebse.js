// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCWVpUzKMm1ifjNP3LnH1NvLXXc8mLFl5s",
  authDomain: "admin-panel-cbfcf.firebaseapp.com",
  projectId: "admin-panel-cbfcf",
  storageBucket: "admin-panel-cbfcf.appspot.com",
  messagingSenderId: "652204290531",
  appId: "1:652204290531:web:a5831d4b13328b293230d6",
  measurementId: "G-WFMWLST0DG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
