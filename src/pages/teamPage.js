import React from "react";
// import "./App.css";
import Container from "../Components/teamsPage/Container";
import Sidebar from "../Components/teamsPage/Sidebar";
// import NavBar from "../Components/teamsPage/navbar";

function TeamPage() {
  return (
    <div className="TeamPage">
      {/* <NavBar /> */}
      <Container/>
      <Sidebar/>

    </div>
  );
}

export default TeamPage;
