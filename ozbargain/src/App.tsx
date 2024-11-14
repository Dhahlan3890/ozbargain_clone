import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./home/home";
import {Login} from "./authetication/login";
import { Signup } from "./authetication/signup";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </Router>
  );
}
