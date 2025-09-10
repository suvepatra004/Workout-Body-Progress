import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h2>Workout Buddy</h2>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;

/**
 * -------- Navigation bar ---------
 * 1. Main component logo.
 * 2. Also can add the next chanegs.
 */
