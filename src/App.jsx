import Login from "./login/Login";
import Register from "./RegistrationForm/Register";
import { Routes,Route } from "react-router-dom";

export default function App(){
  return(<div className="App">
    
    <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path='/Registration Page' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
  </div>)
}