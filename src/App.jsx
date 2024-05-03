import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Conponents/Home/Header/Header";
import Footer from "./Conponents/Home/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
