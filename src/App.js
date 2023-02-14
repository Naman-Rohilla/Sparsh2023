import logo from "./logo.svg";
import "./App.css";
import Sponsors from "./pages/sponsors";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/navbar";
import Footer from "./Components/footer/footer";
import Home from "./pages/home";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sponsors" element={<Sponsors />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
