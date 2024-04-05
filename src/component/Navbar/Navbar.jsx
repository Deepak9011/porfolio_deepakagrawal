import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {

  return (
    <div className="n-wrapper" id="Navbar">
      <div className="n-left">
        <Link spy={true} to="Navbar" smooth={true} activeClass="activeClass">
          <div className="n-name">Deepak</div>
        </Link>
        <Toggle />
      </div>
      <div className="n-right">
        <Link spy={true} to="Contact" smooth={true}>
          {/* <button className="button n-button">Contact</button> */}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
