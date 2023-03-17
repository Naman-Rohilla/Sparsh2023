import { useEffect, useRef, useState } from "react";
import Dance from "./components/dance/dance";
// import Day2 from "./components/day2.js/day2"
// import Day3 from "./components/day3.js/day3"
// import Day4 from "./components/day4.js/day4"
// import NavBar from "./components/Header/navbar"
import Music from "./components/music/music";
import Searchbar from "./components/SearchBar/searchbar";
import LabTabs from "./components/tab";
import { DotLoader } from "react-spinners";
import { debounce } from "@mui/material";
// import img_1 from "./img2.jpg";
// import img_2 from "./Vocal_voyage.jpg"

const Events = (data) => {
  const [loading, setloading] = useState(true);
  console.log(data, "data")
  const Dummy_event_dance = [
    {
      name: "FOOTLOOSE SLOWDOWN",
      date: "01-01-2001",
      shadowColor: "#db2777",
      disc:"Sparsh presents dancing events, a dazzling demonstration of artistic innovation with a dynamic ensemble of dancers whose skillful performances will captivate you.",
      img:"/event_dance.png",
      ruleBook:"https://drive.google.com/file/d/1yTB3IGH0BivqexrEk5AvK_plqgKZ9Jhi/view",
    },
    // {
    //   name: "Duet",
    //   date: "01-01-2001",
    //   shadowColor: "cyan",
    // },
    // {
    //   name: "Group",
    //   date: "01-01-2001",
    //   shadowColor: "red",
    // },
    // {
    //   name: "Departmental",
    //   date: "01-01-2001",
    //   shadowColor: "pink",
    // },
    // {
    //   name: "Street Dance",
    //   date: "01-01-2001",
    //   shadowColor: "green",
    // },
    // {
    //   name: "navratri",
    //   date: "01-01-2001",
    //   shadowColor: "teal",
    // },
    // {
    //   name: "navratri",
    //   date: "01-01-2001",
    //   shadowColor: "purple",
    // },
    // {
    //   name: "navratri",
    //   date: "01-01-2001",
    //   shadowColor: "yellow",
    // },
  ];

  const Dummy_event_music = [
    {
      name: "VOCAL VOYAGE",
      date: "01-01-2001",
      shadowColor: "rgb(101 222 165)",
      disc:`With every verse,We unfold the story. Sparsh 2K23, presents "Soloist Wizards",the solo singing competition Where the lyrics guide us, the rhytym inspires us, Where we might uncover chroniclers among us`,
      img:"./Vocal_voyage.png",
      ruleBook:"https://drive.google.com/file/d/1yTB3IGH0BivqexrEk5AvK_plqgKZ9Jhi/view",
    },
    
  ];

  const Dummy_event_day3 = [
    {
      name: "navratri",
      date: "01-01-2001",
      shadowColor: "orange",
    },
    {
      name: "navratri",
      date: "01-01-2001",
      shadowColor: "orange",
    },
    {
      name: "navratri",
      date: "01-01-2001",
      shadowColor: "orange",
    },
    {
      name: "navratri",
      date: "01-01-2001",
      shadowColor: "orange",
    },
    {
      name: "navratri",
      date: "01-01-2001",
      shadowColor: "orange",
    },
    {
      name: "navratri",
      date: "01-01-2001",
      shadowColor: "orange",
    },
    {
      name: "navratri",
      date: "01-01-2001",
      shadowColor: "orange",
    },
    {
      name: "navratri",
      date: "01-01-2001",
      shadowColor: "orange",
    },
  ];

  const Dummy_event_day4 = [
    {
      name: "navratri",
      date: "01-01-2001",
      shadowColor: "rgb(236,222,110)",
    },
    {
      name: "navratri",
      date: "01-01-2001",
      shadowColor: "orange",
    },
    {
      name: "navratri",
      date: "01-01-2001",
      shadowColor: "orange",
    },
    {
      name: "navratri",
      date: "01-01-2001",
      shadowColor: "orange",
    },
    {
      name: "navratri",
      date: "01-01-2001",
      shadowColor: "orange",
    },
  ];

  const styles = [
    {
      height: "293px",
      width: "283px",
      margin: "20px 20px",
      margin2: "20px 20px",
      tag: 1,
    },
  ];

  const [eventsD1, setEventsD1] = useState(Dummy_event_dance);
  const [eventsD2, setEventsD2] = useState(Dummy_event_music);
  const [eventsD3, setEventsD3] = useState(Dummy_event_day3);
  const [eventsD4, setEventsD4] = useState(Dummy_event_day4);

  const ref = useRef(null);

  const handleClick = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  const onSearchHandler = (value) => {
    // console.log(value);

    setEventsD1(
      Dummy_event_dance.filter((event) => event.name.toLowerCase().includes(value.toLowerCase()))
    );

    setEventsD2(
      Dummy_event_music.filter((event) => event.name.toLowerCase().includes(value.toLowerCase()))
    );

    setEventsD3(Dummy_event_day3.filter((event) => event.name.toLowerCase().includes(value.toLowerCase())));

    setEventsD4(Dummy_event_day4.filter((event) => event.name.toLowerCase().includes(value.toLowerCase())));
  };

   

  return (
    <div>
      {loading && (
        <div
          style={{
            backgroundColor: "black",
            height: "100%",
            position: "fixed",
            width: "100%",
            zIndex: 200,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <DotLoader color="white" />
        </div>
      )}
      <div
        style={{
          display: "flex",
          zIndex: 10,
          position: "absolute",
          marginTop: "75px",
          background: "transparent",
          width: "100%",
          alignItems: "centre",
          flexWrap: "wrap",
          position:'fixed',
        }}
      >
        <div>
          <LabTabs onScroll={handleClick} />
        </div>
        <div
          style={{
            height: "62px",
            width: "400px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Searchbar onSearchHandler={onSearchHandler} />
        </div>
      </div>
      {/* <button onClick={handleClick} style={{'height': '20px', 'width':'20px'}}/> */}
      <div id="d1" style={{ paddingTop: "150px" }}  >
        <Dance events={eventsD1} styles={styles[0]} loading={loading} setloading={setloading} data={data} type="dance" />
       
      </div>
      <div id="d2" style={{ paddingTop: "150px" }} >
      <Music events={eventsD2} styles={styles[0]} loading={loading} setloading={setloading} data={data} type="music" />
      </div>

      {/* <div id="d2">
        
        <Music events={eventsD2} styles={styles[0]} />
      </div> */}

      {/* <div id='d3'>
    <Day3   events={eventsD3} styles={styles[0]}/>
    </div>

    <div id='d4'>
    <Day4  events={eventsD4} styles={styles[0]}/>
    </div> */}
    </div>
  );
};

export default Events;
