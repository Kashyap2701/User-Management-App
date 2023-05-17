import "./App.css";
import Home from "./components/Home/Home";
import Singup from "./components/Signup/Singup";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Singup />} />
      </Routes>
    </div>
  );
}

export default App;
