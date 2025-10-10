import "./navbar2.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  const user = true;

  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="" />
          <span>NorimEstate</span>
        </a>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Agents</a>
      </div>

      {/* ✅ wrap the right side in .right as required by your SCSS */}
      <div className="right">
        {user ? (
          <div className="user">
            <Link to="/profile">
              <img
                src="/profile-img.jpeg"
                alt="/profile-img.jpeg"
              />
            </Link>
            
            <span>John Doe</span>
            <Link to="/profile" className="profile">
              <div className="notification">3</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <a href="/">Sign in</a>
            <a href="/" className="register">
              Sign up
            </a>
          </>
        )}

        {/* ✅ now these are inside .right, so SCSS applies! */}
        <div className="menuIcon">
          <img src="/menu.png" alt="" onClick={() => setOpen((open) => !open)} />
        </div>

        <div className={open ? "menu active" : "menu"}>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Agents</a>
          <a href="/">Sign in</a>
          <a href="/" className="register">
            Sign up
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
