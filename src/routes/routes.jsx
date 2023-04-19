import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "../components/login/Login";
import { Home } from "../components/Home/Home";
import { Signup } from "../components/Signup/Signup";

export function MyRoutes(){
  return(
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/login" element={<Login />}/>
        <Route exact path="/signup" element={<Signup/>}/>
      </Routes>
    </Router>
  )
}