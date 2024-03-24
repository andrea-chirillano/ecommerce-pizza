import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <Link to="/" classname="home"><b>Home</b></Link>
            <ul>
                <li><Link to="/login"><b>Login</b></Link></li>
                <li><Link to="/sign-up"><b>Sign up</b></Link></li>
            </ul>
        </nav>
    )
};

export default Navbar;