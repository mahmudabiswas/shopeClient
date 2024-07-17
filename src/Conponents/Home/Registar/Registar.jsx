import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider";
import Google from "../Login/Google";

const Registar = () => {
  const { register, updateUserProfile } = useContext(AuthContext);
  const submitRegisterForm = (e) => {
    e.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;
    const user = { name, photoUrl, email, password };
    console.log(user);

    register(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateUserProfile(photoUrl, name)
          .then((res) => {
            console.log(res.user);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .then((err) => console.error(err));
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={submitRegisterForm} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">photoUrl</span>
              </label>
              <input
                type="photoUrl"
                name="photoUrl"
                placeholder="photoUrl"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <p>
                {" "}
                All Ready Have'an account please?
                <br />
                <Link className="text-blue-600 font-bold" to="/login">
                  LogIn
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

export default Registar;
