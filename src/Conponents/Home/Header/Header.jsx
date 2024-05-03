import { Link } from "react-router-dom";
import NabBar from "./NabBar";

const Header = () => {
  return (
    <div>
      <div>
        <Link to="/">
          <h1 className="text-5xl font-extrabold">astor</h1>
        </Link>
      </div>
      <div>
        <NabBar />
      </div>
      <div></div>
    </div>
  );
};

export default Header;
