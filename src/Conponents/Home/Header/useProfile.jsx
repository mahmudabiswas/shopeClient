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
        {user?.email ? (
          <>
            <label tabIndex={0} className="  btn-circle avatar">
              <div className="w-510 rounded-full">
                <img src={user?.photoURL} alt={user?.display} />
              </div>
            </label>
            <a onClick={handleLogOut} className="btn">
              Sign out
            </a>
          </>
        ) : (
          <Link to="/login" className="mr-2">
            {" "}
            <button className="btn">Log In</button>{" "}
          </Link>
        )}
      </div>
    </div>
  );
};

export default UseProfile;
