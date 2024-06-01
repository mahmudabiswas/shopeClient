import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const NabBar = () => {
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

  return (
    <div>
      <nav className="  ">
        <div className="md:hidden text-2xl " onClick={() => setOpen(!open)}>
          {open === true ? <AiOutlineClose className="" /> : <AiOutlineMenu />}
        </div>

        <div
          className={`md:flex absolute md:static text-2xl gap-10  bg-red-600 p-6 text-white ${
            open ? "top-28" : "-top-72"
          }`}
        >
          {routes.map((route) => (
            <p>
              <a
                href={route.path}
                key={route.id}
                className="hover:text-black hover:font-extrabold"
              >
                {route.name}
              </a>
            </p>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default NabBar;
