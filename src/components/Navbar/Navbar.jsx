import Styles from "./NavbarStyles.module.css";
import icon from "../../assets/sun.svg";
// import "./Navbar.css";
const Navbar = () => {
  return (
    <div id="nav" className={Styles.container}>
      <div className="nav-left">
        <img src={icon} alt="" className="logo" />
      </div>
      <div className="right">
        <div className="nav-menu">
          <ul className={Styles.nav}>
            <li>Home</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
