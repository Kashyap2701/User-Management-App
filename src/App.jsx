import "./App.css";
import Home from "./components/Home/Home";
import Singup from "./components/Signup/Singup";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route
          default
          path="/home"
          element={<ProtectedRoute Component={Home} />}
        />
        <Route path="/signup" element={<ProtectedRoute Component={Singup} />} />
      </Routes>
    </div>
  );
}

export default App;
