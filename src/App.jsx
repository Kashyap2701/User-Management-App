import "./App.css";
import Home from "./components/Home/Home";
import Singup from "./components/Signup/Singup";
import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./components/Login/Login";
import Noroute from "./components/Noroute/Noroute";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<ProtectedRoute Component={Home} />} />
        <Route path="/signup" element={<Singup />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Noroute />} />
      </Routes>
    </div>
  );
}

export default App;
