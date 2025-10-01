import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA-81t-0wEUT4MbgcW3CpFbezEDowN3kqs",
  authDomain: "todos-7d2f8.firebaseapp.com",
  projectId: "todos-7d2f8",
  storageBucket: "todos-7d2f8.firebasestorage.app",
  messagingSenderId: "186276589654",
  appId: "1:186276589654:web:c8089f10c821332b398bf7",
  databaseURL: "https://todos-7d2f8-default-rtdb.europe-west1.firebasedatabase.app/",
};


const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp