import React from "react";
import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <div className="navBar">
      <ul>
        <li>
          <Link
            activeClass="active"
            to="sectionId"
            spy={true}
            smooth={true}
            duration={500}
          >
            <button className="btn">section 1</button>
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="sectionId2"
            spy={true}
            smooth={true}
            duration={500}
          >
            <button className="btn">section 2</button>
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="sectionId3"
            spy={true}
            smooth={true}
            duration={500}
          >
            <button className="btn">section 3</button>
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
