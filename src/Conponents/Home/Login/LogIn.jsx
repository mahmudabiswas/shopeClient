import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider";
import Swal from "sweetalert2";
import Google from "./Google";

const LogIn = () => {
  const { logIn, UpdateUser } = useContext(AuthContext);

  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const handleLogInsubmit = (e) => {
    e.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photoURL.value;
    console.log(email, password, photoURL);
    setError("");
    if (password.length < 6) {
      Swal.fire({
        title: "Error!",
        text: "must be 6 character digit in input field",
        icon: "error",
        confirmButtonText: "Cool",
      });

      // setError("must be 6 character digit in input field");

      return;
    }

    logIn(email, password)
      .then((result) => {
        console.log(result.user);

        // update profile
        UpdateUser(photoURL);

        //
        // e.target.reset();
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogInsubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="email"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                name="password"
              />

              <p>
                {" "}
                Please Register?
                <br />
                <Link className="text-blue-600 font-bold" to="/registar">
                  Register
                </Link>{" "}
              </p>
              <Google />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
