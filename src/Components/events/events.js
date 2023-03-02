import { useRef, useState } from "react";
import Dance from "./components/dance/dance";
// import Day2 from "./components/day2.js/day2"
// import Day3 from "./components/day3.js/day3"
// import Day4 from "./components/day4.js/day4"
// import NavBar from "./components/Header/navbar"
import Music from "./components/music/music";
import Searchbar from "./components/SearchBar/searchbar";
import LabTabs from "./components/tab";

const Events = () => {
  const Dummy_event_dance = [
    {
      name: "navratri",
      date: "01-01-2001",
      shadowColor: "orange",
    },
    {
      name: "navratri",
      date: "01-01-2001",
      shadowColor: "cyan",
    },
    {
      name: "navratri",
      date: "01-01-2001",
      shadowColor: "red",
    },
    {
      name: "navratri",
      date: "01-01-2001",
      shadowColor: "pink",
    },
    {
      name: "navratri",
      date: "01-01-2001",
      shadowColor: "green",
    },
    {
      name: "navratri",
      date: "01-01-2001",
      shadowColor: "teal",
    },
    {
      name: "navratri",
      date: "01-01-2001",
      shadowColor: "purple",
    },
    {
      name: "navratri",
      date: "01-01-2001",
      shadowColor: "yellow",
    },
  ];

  const Dummy_event_music = [
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
      height: "263px",
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
      Dummy_event_dance.filter((event) => event.name.includes(value))
    );

    setEventsD2(
      Dummy_event_music.filter((event) => event.name.includes(value))
    );

    setEventsD3(Dummy_event_day3.filter((event) => event.name.includes(value)));

    setEventsD4(Dummy_event_day4.filter((event) => event.name.includes(value)));
  };

  return (
    <div>
      <div
        style={{
          position: "fixed",
          height: "100vh",
          width: "100%",
          background: "black",
          zIndex: 90,
          display: "flex",
          justifyContent: "center",
          fontSize: "xx-large",
          alignItems: "center",
          opacity: 0.95,
          color: "white"
        }}
      >
        RELEASING SOON
      </div>
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
        }}
      >
        <div>
          <LabTabs onScroll={handleClick} />
        </div>
        <div
          style={{
            height: "54px",
            width: "400px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Searchbar onSearchHandler={onSearchHandler} />
        </div>
      </div>
      {/* <button onClick={handleClick} style={{'height': '20px', 'width':'20px'}}/> */}
      <div id="d1" style={{ paddingTop: "124px" }}>
        <Dance events={eventsD1} styles={styles[0]} />
      </div>

      <div id="d2">
        <Music events={eventsD2} styles={styles[0]} />
      </div>

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
