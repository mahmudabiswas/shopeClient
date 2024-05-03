import { Link, useRouteError } from "react-router-dom";

// import error from "../../../public/Brand/404.jpg";
const Error = () => {
  const error = useRouteError();
  return (
    <div className="w-full h-full mx-10 my-10 ">
      <img src="../../../public/Brand/404.jpg" alt="" />
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to="/">
        <button className="btn btn-danger text-center flex justify-center m-auto">
          Go to Home
        </button>
      </Link>
    </div>
  );
};

export default Error;
