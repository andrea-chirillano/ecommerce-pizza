import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <Link to="/" classname="home">Home</Link>
            <ul>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/sign-up">Sign up</Link></li>
            </ul>
        </nav>
    )
};

export default Navbar;