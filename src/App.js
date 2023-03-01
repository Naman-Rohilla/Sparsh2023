import logo from "./logo.svg";
import "./App.css";
// import Sponsors from "./pages/aboutUs";
import { Router, Route, Routes } from "react-router-dom";
import NavBar from "./Components/navbar/navbar";
import Footer from "./Components/footer/footer";
import Home from "./pages/home";
import AboutUs from "./pages/aboutUs";
import Sponsors from "./Components/sponsors/sponsors";
import SignIn from "./pages/signIn";
// import Register from "./Components/register/register";
// import Reg1 from "./Components/reg1/reg1";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/sign-in" element={<SignIn />} />
        {/* <Route path="/register" element={<Register />} />
        <Route path="/reg1" element={<Reg1 />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
