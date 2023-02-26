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

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
