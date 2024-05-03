import React from "react";
import HomeLeft from "./HomeLeft";
import HomeRight from "./HomeRight";
import About from "../../pages/About/About";
import Contact from "../../pages/Contact/Contact";
import Footer from "../Footer/Footer";

// import Details from "../../pages/Details/Details";

const Home = () => {
  return (
    <div>
      <div>
        <HomeLeft />
      </div>
      <div>
        <HomeRight />
      </div>
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
