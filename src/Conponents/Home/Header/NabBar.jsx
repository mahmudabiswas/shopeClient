import { useContext, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { AuthContext } from "../../../AuthProvider";
import { Link } from "react-router-dom";

const NabBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/addProduct", name: "Add Product" },
    { id: 3, path: "/myCart", name: "My Cart" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 4, path: "/about", name: "About" },
    { id: 4, path: "/login", name: "LogIn" },
    { id: 4, path: "/footer", name: "Footer" },
  ];

  const handleLogOut = () => {
    logOut()
      .then(() => console.log("use log out"))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <nav className="  ">
        <div className="md:hidden text-2xl " onClick={() => setOpen(!open)}>
          {open === true ? <AiOutlineClose className="" /> : <AiOutlineMenu />}
        </div>

        <div
          className={`md:flex absolute md:static text-2xl gap-10  bg-red-700 p-6 text-white ${
            open ? "top-16" : "-top-60"
          }`}
        >
          {routes.map((route) => (
            <p>
              <a
                href={route.path}
                key={route.id}
                className="hover:bg-blue-300 p-2 rounded-xl"
              >
                {route.name}
              </a>
            </p>
          ))}
        </div>
      </nav>
      <div className=" ml-4">
        {user?.email ? (
          <>
            <label tabIndex={0} className="  btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user?.photoURL} alt={user?.display} />
              </div>
            </label>
            <a onClick={handleLogOut} className="btn">
              Sign out
            </a>
          </>
        ) : (
          <Link to="/login">
            {" "}
            <button className="btn">Log In</button>{" "}
          </Link>
        )}
      </div>
    </div>
  );
};

export default NabBar;
