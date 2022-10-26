import { Link } from "react-router-dom";
import NavStyle from "./nav.module.css";

const Nav = () => {
  return (
    <div className={NavStyle.navbar}>
      <Link to="/">Home </Link>
      <Link to="/newslist"> News List </Link>
      <Link to="/newsdetail"> News Detail </Link>
    </div>
  );
};

export default Nav;
