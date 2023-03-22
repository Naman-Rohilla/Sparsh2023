import { useEffect, useRef, useState } from "react";
import Catagory from "./components/Catagory/catagory";
import Searchbar from "./components/SearchBar/searchbar";
import LabTabs from "./components/tab";
import { DotLoader } from "react-spinners";
import { debounce } from "@mui/material";

const Events = (data) => {
  const [loading, setloading] = useState(true);
  console.log(data, "data");
  const Dummy_event_dance = [
    {
      name: "FOOTLOOSE SLOWDOWN",
      date: "01-01-2001",
      shadowColor: "#db2777",
      disc: "Sparsh presents dancing events, a dazzling demonstration of artistic innovation with a dynamic ensemble of dancers whose skillful performances will captivate you.",
      img: "/event_dance.png",
      ruleBook:
        "https://drive.google.com/file/d/1yTB3IGH0BivqexrEk5AvK_plqgKZ9Jhi/view",
      regSvnit: "https://forms.gle/frZAV81RP4m5vQTe8",
      regNSvnit: "https://forms.gle/kTchdQfc6dVihHLB6",
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
      disc: `With every verse,We unfold the story. Sparsh 2K23, presents "Soloist Wizards",the solo singing competition Where the lyrics guide us, the rhytym inspires us, Where we might uncover chroniclers among us`,
      img: "./Vocal_voyage.png",
      ruleBook:
        "https://drive.google.com/file/d/1yWas1ioNcJoOI_1VJT73s488XOfSCXm2/view?usp=drivesdk",
      regSvnit: " https://forms.gle/6eL1sNezv6q1BF8n9",
      regNSvnit: "https://forms.gle/k6JsFDVzr5x4PJvs6",
    },
    {
      name: "SOUND SMACKDOWN",
      date: "01-01-2001",
      shadowColor: "rgb(174 58 170)",
      disc: `⚡Get ready  for a musical mashup like no other!!! Unleash your inner  music 🎶 warrior at the ultimate showdown of  sound 🔊!! Its time to turn up the volume and let the music take over... `,
      img: "./Sound_smakeDown.png",
      ruleBook:
        "https://drive.google.com/file/d/132z_AqMu9xAT_uK5jSDj13jp6aXCSVGc/view?usp=drivesdk",
      regSvnit: " https://forms.gle/mFwKejpDZbD9qNBN7",
      regNSvnit: "https://forms.gle/BrTUeWvqKqskrPTJ7",
    },
    {
      name: "METALLIC MAYHEM",
      date: "01-01-2001",
      shadowColor: "rgb(185 214 228)",
      disc: `🤟✨Get ready to make some unforgettable memories!!✨ The beats are about to drop From classical rock 🤘 to modern pop , The Battle of Bands has it all. Don't miss the chance to be part of the surprise performance and be the part of the moment!!!...`,
      img: "./Metallic_Mayhem.png",
      ruleBook:
        "https://drive.google.com/file/d/13BghGvtseIMw71C59TogCq2ZNWAu47xW/view?usp=drivesdk",
      regSvnit: "https://forms.gle/opxfUpQAYtu6GJ6z9 ",
      regNSvnit: "https://forms.gle/5ffa7JeU2b81ZWAt9",
    },
  ];

  const Dummy_event_Fashion_LifeStyle = [
    {
      name: "The Fantacy Fiesta",
      date: "01-01-2001",
      shadowColor: "orange",
      disc: `Discover the Rich Tapestry of Culture Through cultural walk🕺and Transform yourself into a hero, a villain, or something in between with the power of cosplay!" And don't forget, we're also searching for the best Mr. and Mrs. Sparsh 👑`,
      img: "./fashion_fiesta.png",
      ruleBook:
        "https://drive.google.com/file/d/1zYkBtlE7qhBPNw2HhZh1OJoPj6PD2X3_/view",
      regSvnit: "https://forms.gle/zKenzaeaCcTxXGBh9",
      regNSvnit: "https://forms.gle/gcdK4nsZpsgK7oDk9",
    },
  ];

  const Dummy_event_Drama = [
    {
      name: "Abhinay Junction",
      date: "01-01-2001",
      shadowColor: "orange",
      disc: `Brace yourself for a theatrical extravaganza like never before!🤩 The streets will come alive with Nukkad Natak🤯 and Mime while the Stage Play sets the scene for a breathtaking performance. 💃Get ready to be swept away by the drama! ⚡`,
      img: "./abhinay_junction.jpg",
      ruleBook:
        "https://drive.google.com/file/d/17W8rfJeSRh9iSs39bWGigqfn_3F6n1Pr/view?usp=drivesdk",
      regSvnit: "https://forms.gle/5eVamvLCnzYybLwz5",
      regNSvnit: "https://forms.gle/5eVamvLCnzYybLwz5",
    },
  ];
  const Dummy_event_day5 = [
    {
      name: "The Fantacy Fiesta",
      date: "01-01-2001",
      shadowColor: "orange",
      disc: `Discover the Rich Tapestry of Culture Through cultural walk🕺and Transform yourself into a hero, a villain, or something in between with the power of cosplay!" And don't forget, we're also searching for the best Mr. and Mrs. Sparsh 👑 👑`,
      img: "./fashion_fiesta.png",
      ruleBook:
        "https://drive.google.com/file/d/1zYkBtlE7qhBPNw2HhZh1OJoPj6PD2X3_/view",
      regSvnit: "https://forms.gle/zKenzaeaCcTxXGBh9",
      regNSvnit: "https://forms.gle/gcdK4nsZpsgK7oDk9",
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
  const [eventsD3, setEventsD3] = useState(Dummy_event_Fashion_LifeStyle);
  const [eventsD4, setEventsD4] = useState(Dummy_event_Drama);
  const [eventsD5, setEventsD5] = useState(Dummy_event_day5);

  const ref = useRef(null);

  const handleClick = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  const onSearchHandler = (value) => {
    // console.log(value);

    setEventsD1(
      Dummy_event_dance.filter((event) =>
        event.name.toLowerCase().includes(value.toLowerCase())
      )
    );

    setEventsD2(
      Dummy_event_music.filter((event) =>
        event.name.toLowerCase().includes(value.toLowerCase())
      )
    );

    setEventsD3(
      Dummy_event_Fashion_LifeStyle.filter((event) =>
        event.name.toLowerCase().includes(value.toLowerCase())
      )
    );

    setEventsD4(
      Dummy_event_Drama.filter((event) =>
        event.name.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 3000);
  }, []);

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
          position: "fixed",
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
      <div id="d4" style={{ paddingTop: "150px" }}>
        <Catagory
          eventCatagory="Drama"
          events={eventsD4}
          styles={styles[0]}
          loading={loading}
          setloading={setloading}
          data={data}
        />
      </div>
      <div id="d3" style={{ paddingTop: "150px" }}>
        <Catagory
          eventCatagory="Fashion&Lifystyle"
          events={eventsD3}
          styles={styles[0]}
          loading={loading}
          setloading={setloading}
          data={data}
        />
      </div>
      <div id="d2" style={{ paddingTop: "150px" }}>
        <Catagory
          eventCatagory="Music"
          events={eventsD2}
          styles={styles[0]}
          loading={loading}
          setloading={setloading}
          data={data}
        />
      </div>
      <div id="d1" style={{ paddingTop: "150px" }}>
        <Catagory
          eventCatagory="Dance"
          events={eventsD1}
          styles={styles[0]}
          loading={loading}
          setloading={setloading}
          data={data}
        />
      </div>
    </div>
  );
};

export default Events;
