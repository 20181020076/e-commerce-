import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuMnAFSi8qaI8L69pBHwgNZhFEn_yRlRk",
  authDomain: "primal-1570c.firebaseapp.com",
  projectId: "primal-1570c",
  storageBucket: "primal-1570c.appspot.com",
  messagingSenderId: "711739643365",
  appId: "1:711739643365:web:f37dce5cc38fce7d690b0c"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
<script src="https://kit.fontawesome.com/98770648e2.js" crossorigin="anonymous"></script>
