import { useContext, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { AuthContext } from "../../../AuthProvider";
import { Link } from "react-router-dom";

const UseProfile = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => console.log("use log out"))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className="flex justify-between items-center ">
        <>
          <label tabIndex={0} className="  btn-circle avatar">
            <div className="w-510 rounded-full">
              {user && <img src={user?.photoURL} alt={user?.display} />}
            </div>
          </label>
          {user?.email ? (
            <p onClick={handleLogOut} className="btn">
              Sign out
            </p>
          ) : (
            <Link to="/login" className="mr-2">
              {" "}
              <button className="btn">Log In</button>{" "}
            </Link>
          )}
        </>
      </div>
    </div>
  );
};

export default UseProfile;
