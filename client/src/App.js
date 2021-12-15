import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./pages/signUp";
import Login from "./pages/login"
import Home from "./pages/home";
import Navbar from "./components/Navbar/Navbar";

function App() {
    return (
        <div>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signUp" element={<SignUp />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="*" element={<p>Error Page</p>} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
