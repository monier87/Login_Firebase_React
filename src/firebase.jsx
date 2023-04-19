import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyApNl72kyu5D5PiUcn4Y4oJoS4DhtMaTi4",
  authDomain: "fir-login-d90e3.firebaseapp.com",
  projectId: "fir-login-d90e3",
  storageBucket: "fir-login-d90e3.appspot.com",
  messagingSenderId: "294423876018",
  appId: "1:294423876018:web:c3725d220ae37d363994ab"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth();
export {app,auth};