import reactLogoSmall from "../assets/reactjs-icon-small.png";
import reactLogo from "../assets/react.svg";

const Navbar = () => (
    <nav className="nav">
        <img src={reactLogo} alt="React Logo Small" className="logo"/>
        <h3>ReactFacts</h3>
        <h4>React Course - Project 1</h4>
    </nav>
);

export default Navbar;