import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Cambio aquí
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
        <Routes>
          <Route path="ecommerce-pizza/" element={<Home />} />
          <Route path="ecommerce-pizza/products/:id" element={<Products />} />
          <Route path="ecommerce-pizza/login" element={<Login />} />
          <Route path="ecommerce-pizza/sign-up" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
