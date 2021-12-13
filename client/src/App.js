import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './pages/signUp';
import Home from './pages/home';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signUp" element={<SignUp/>} />
        </Routes>
      </Router>
      {/* Add Footer here */}
    </div>
  );
}


export default App;
