import { Link } from "react-router-dom";
import NabBar from "./NabBar";
import UseProfile from "./useProfile";

const Header = () => {
  return (
    <div className="lg:flex lg:justify-between lg:items-center bg-red-600">
      <div>
        <Link to="/">
          <h1 className="text-5xl  font-extrabold">BRAND</h1>
        </Link>
      </div>
      <div>
        <NabBar />
      </div>
      <div className="flex justify-end ">
        <UseProfile />
      </div>
    </div>
  );
};

export default Header;
