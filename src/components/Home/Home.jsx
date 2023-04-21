import { Link, Navigate } from "react-router-dom";
import { auth } from "../../firebase";
import styles from "./home.css";

function salir(){
  return auth.signOut()
  Navigate("/");
}

export function Home(props){
  return(<div>
    <div>
      <div>
        <h1 className="Hola">
          <Link to="/login">Login</Link>
        </h1>

        <br/>

        <h1>
          <Link to="/signup">Registrar</Link>
        </h1>

      </div>
    </div>
    <h2>{props.name?`Bienvenido -${props.name}`:"Inicie sesion"}</h2>
    <button onClick={salir}>Salir</button>
  </div>
  )
}