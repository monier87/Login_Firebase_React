import styles from "./Signup.modulo.css" 
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import {auth} from "../../firebase"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { async } from "@firebase/util"
import {InputControl} from "../inputControl/InputControl"

export function Signup(){
  const navigate=useNavigate();
  const [values, setvalues] = useState({name:"", email: "", pass:""});
  const [errorMsg, setErrorMsg]= useState([]);
  const [submitButtonDisabled, setsubmitButtonDisabled]= useState(false)

  const registro =()=>{
    if(!values.name || !values.email || !values.pass ){
      setErrorMsg("Llene todos los campos")
      return;
    }
    setErrorMsg("")
    setsubmitButtonDisabled(true)
    createUserWithEmailAndPassword(auth,values.email,values.pass).then( async (res)=>{setsubmitButtonDisabled(false);
      const user= res.user;
      await updateProfile(user, {
        displayName: values.name,
      });
      navigate("/");      
    })
    .catch((err)=>{
      setsubmitButtonDisabled(false);
      setErrorMsg(err.message);
    });
  };
  return(<div className={styles.container}>
    <div className={styles.innerBox}>
      <h1 className={styles.heading}>Registro</h1>
      <InputControl label="Name"
      placeholder="Ingrese un nombre"
      onChange={
        (event)=> setvalues((prev)=>({...prev, name:event.target.value}))
      }/>
      <InputControl label="Email"
      placeholder="Ingrese su cuenta de Correo"
      onChange={
        (event)=> setvalues((prev)=>({...prev, name:event.target.value}))
      }/>
      <InputControl label="Contraseña"
      placeholder="Ingrese una contraseña"
      onChange={
        (event)=> setvalues((prev)=>({...prev, name:event.target.value}))
      }/>

    </div>

  </div>)
}