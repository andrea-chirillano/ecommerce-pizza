
import './App.css';
import { Browser as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/Navbar.jsx';
import Home from './components/home/Home.jsx';
import Products from './components/products/Products.jsx';
import Login from './components/login/Login.jsx';
import SignUp from './components/sign-up/SignUp.jsx';

function App() {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <Home />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;