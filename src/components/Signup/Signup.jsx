import styles from "./Signup.modulo.css" 
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import {auth} from "../../firebase"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"


export function Signup(){
  const navigate=useNavigate();
  const [values, setvalues] = useState({name:"", email: "", pass:""});
  
  return(<h1>Registro</h1>)
}