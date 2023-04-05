import { useEffect, useRef, useState } from "react";
import Catagory from "./components/Catagory/catagory";
import Searchbar from "./components/SearchBar/searchbar";
import LabTabs from "./components/tab";
import { DotLoader } from "react-spinners";
import { debounce } from "@mui/material";

const Events = (data) => {
  const [loading, setloading] = useState(true);
  console.log(data, "data");
  const Dummy_speaking_art = [
    {
      name: "Orators On-Board",
      date: "01-01-2001",
      shadowColor: "rgb(42, 194, 208)",
      disc: `We're calling all writers,poets, artists and lovers of literature to come together and show your talent..in our OPEN MIC event..🎙🎤✨And if music is your thing🎶💃🏻Bring your instruments,Your Voice,Your Passion and...`,
      img: "./Orators On-Board.jpg",
      ruleBook: "https://drive.google.com/file/d/1BmB912oulvPgF88RJtpwJpZQ-hLsxDwL/view?usp=drivesdk",
      regSvnit: "https://forms.gle/zTRCBrbjfg6g954s7",
      regNSvnit: "https://forms.gle/VzngbKZTntN4Y6LaA",
    },
    {
      name: "SHU CHE",
      date: "01-01-2001",
      shadowColor: "rgb(42, 194, 208)",
      disc: `We're calling all writers,poets, artists and lovers of literature to come together and show your talent..in our OPEN MIC event..🎙🎤✨And if music is your thing🎶💃🏻Bring your instruments,Your Voice,Your Passion and...`,
      img: "./SHU CHE.jpg",
      ruleBook: "https://drive.google.com/file/d/1BmB912oulvPgF88RJtpwJpZQ-hLsxDwL/view?usp=drivesdk",
      regSvnit: "https://forms.gle/zTRCBrbjfg6g954s7",
      regNSvnit: "https://forms.gle/VzngbKZTntN4Y6LaA",
    },
    {
      name: "Story Telling",
      date: "01-01-2001",
      shadowColor: "rgb(42, 194, 208)",
      disc: `We're calling all writers,poets, artists and lovers of literature to come together and show your talent..in our OPEN MIC event..🎙🎤✨And if music is your thing🎶💃🏻Bring your instruments,Your Voice,Your Passion and...`,
      img: "./Story Telling.jpg",
      ruleBook: "https://drive.google.com/file/d/1BmB912oulvPgF88RJtpwJpZQ-hLsxDwL/view?usp=drivesdk",
      regSvnit: "https://forms.gle/zTRCBrbjfg6g954s7",
      regNSvnit: "https://forms.gle/VzngbKZTntN4Y6LaA",
    },
    {
      name: "Creative Writing",
      date: "01-01-2001",
      shadowColor: "rgb(42, 194, 208)",
      disc: `We're calling all writers,poets, artists and lovers of literature to come together and show your talent..in our OPEN MIC event..🎙🎤✨And if music is your thing🎶💃🏻Bring your instruments,Your Voice,Your Passion and...`,
      img: "./Creative Writing.jpg",
      ruleBook: "https://drive.google.com/file/d/1BmB912oulvPgF88RJtpwJpZQ-hLsxDwL/view?usp=drivesdk",
      regSvnit: "https://forms.gle/zTRCBrbjfg6g954s7",
      regNSvnit: "https://forms.gle/VzngbKZTntN4Y6LaA",
    },
    {
      name: "WORD WISELY",
      date: "01-01-2001",
      shadowColor: "rgb(42, 194, 208)",
      disc: `We're calling all writers,poets, artists and lovers of literature to come together and show your talent..in our OPEN MIC event..🎙🎤✨And if music is your thing🎶💃🏻Bring your instruments,Your Voice,Your Passion and...`,
      img: "./Word_wisely.jpg",
      ruleBook: "https://drive.google.com/file/d/1BmB912oulvPgF88RJtpwJpZQ-hLsxDwL/view?usp=drivesdk",
      regSvnit: "https://forms.gle/zTRCBrbjfg6g954s7",
      regNSvnit: "https://forms.gle/VzngbKZTntN4Y6LaA",
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
      name: "Rythm",
      date: "01-01-2001",
      shadowColor: "#db2777",
      disc: "Sparsh presents dancing events, a dazzling demonstration of artistic innovation with a dynamic ensemble of dancers whose skillful performances will captivate you.",
      img: "/rythm.png",
      ruleBook:
        "https://drive.google.com/file/d/1yTB3IGH0BivqexrEk5AvK_plqgKZ9Jhi/view",
      regSvnit: "https://forms.gle/frZAV81RP4m5vQTe8",
      regNSvnit: "https://forms.gle/kTchdQfc6dVihHLB6",
    },
    {
      name: "Just Duo",
      date: "01-01-2001",
      shadowColor: "#db2777",
      disc: "Sparsh presents dancing events, a dazzling demonstration of artistic innovation with a dynamic ensemble of dancers whose skillful performances will captivate you.",
      img: "/Just Duo.png",
      ruleBook:
        "https://drive.google.com/file/d/1yTB3IGH0BivqexrEk5AvK_plqgKZ9Jhi/view",
      regSvnit: "https://forms.gle/frZAV81RP4m5vQTe8",
      regNSvnit: "https://forms.gle/kTchdQfc6dVihHLB6",
    },
    {
      name: "Choreo Clash",
      date: "01-01-2001",
      shadowColor: "#db2777",
      disc: "Sparsh presents dancing events, a dazzling demonstration of artistic innovation with a dynamic ensemble of dancers whose skillful performances will captivate you.",
      img: "/Choreo Clash.png",
      ruleBook:
        "https://drive.google.com/file/d/1yTB3IGH0BivqexrEk5AvK_plqgKZ9Jhi/view",
      regSvnit: "https://forms.gle/frZAV81RP4m5vQTe8",
      regNSvnit: "https://forms.gle/kTchdQfc6dVihHLB6",
    },
    {
      name: "Break The Floor",
      date: "01-01-2001",
      shadowColor: "#db2777",
      disc: "Sparsh presents dancing events, a dazzling demonstration of artistic innovation with a dynamic ensemble of dancers whose skillful performances will captivate you.",
      img: "/Break The Floor.png",
      ruleBook:
        "https://drive.google.com/file/d/1yTB3IGH0BivqexrEk5AvK_plqgKZ9Jhi/view",
      regSvnit: "https://forms.gle/frZAV81RP4m5vQTe8",
      regNSvnit: "https://forms.gle/kTchdQfc6dVihHLB6",
    },
    {
      name: "Engineer's Groove",
      date: "01-01-2001",
      shadowColor: "#db2777",
      disc: "Sparsh presents dancing events, a dazzling demonstration of artistic innovation with a dynamic ensemble of dancers whose skillful performances will captivate you.",
      img: "/Engineer's Groove.png",
      ruleBook:
        "https://drive.google.com/file/d/1yTB3IGH0BivqexrEk5AvK_plqgKZ9Jhi/view",
      regSvnit: "https://forms.gle/frZAV81RP4m5vQTe8",
      regNSvnit: "https://forms.gle/kTchdQfc6dVihHLB6",
    },

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
        "https://drive.google.com/file/d/1Pljp4pp_DC07vwBYxerca4FPi4vj3tE7/view",
      regSvnit: "https://forms.gle/opxfUpQAYtu6GJ6z9 ",
      regNSvnit: "https://forms.gle/5ffa7JeU2b81ZWAt9",
    },
  ];

  // https://drive.google.com/file/d/1Pljp4pp_DC07vwBYxerca4FPi4vj3tE7/view?usp=sharing

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
      name: "Meri Aawaz",
      date: "01-01-2001",
      shadowColor: "rgb(42, 194, 208)",
      disc: `Brace yourself for a theatrical extravaganza like never before!🤩 The streets will come alive with Nukkad Natak🤯 and Mime while the Stage Play sets the scene for a breathtaking performance. 💃Get ready to be swept away by the drama! ⚡`,
      img: "Meri Aawaz.jpg",
      ruleBook:
        "https://drive.google.com/file/d/17W8rfJeSRh9iSs39bWGigqfn_3F6n1Pr/view?usp=drivesdk",
      regSvnit: "https://forms.gle/5eVamvLCnzYybLwz5",
      regNSvnit: "https://forms.gle/4WVs9qszJoKL7pu17",
    },
    {
      name: "Abhivyaki - The Expression",
      date: "01-01-2001",
      shadowColor: "rgb(42, 194, 208)",
      disc: `Brace yourself for a theatrical extravaganza like never before!🤩 The streets will come alive with Nukkad Natak🤯 and Mime while the Stage Play sets the scene for a breathtaking performance. 💃Get ready to be swept away by the drama! ⚡`,
      img: "./Abhivyaki.jpg",
      ruleBook:
        "https://drive.google.com/file/d/17W8rfJeSRh9iSs39bWGigqfn_3F6n1Pr/view?usp=drivesdk",
      regSvnit: "https://forms.gle/5eVamvLCnzYybLwz5",
      regNSvnit: "https://forms.gle/4WVs9qszJoKL7pu17",
    },
    {
      name: "Antardhwani - The Inner Voice",
      date: "01-01-2001",
      shadowColor: "rgb(42, 194, 208)",
      disc: `Brace yourself for a theatrical extravaganza like never before!🤩 The streets will come alive with Nukkad Natak🤯 and Mime while the Stage Play sets the scene for a breathtaking performance. 💃Get ready to be swept away by the drama! ⚡`,
      img: "./Antardhwani.jpg",
      ruleBook:
        "https://drive.google.com/file/d/17W8rfJeSRh9iSs39bWGigqfn_3F6n1Pr/view?usp=drivesdk",
      regSvnit: "https://forms.gle/5eVamvLCnzYybLwz5",
      regNSvnit: "https://forms.gle/4WVs9qszJoKL7pu17",
    },
  ];
  const Dummy_event_Art_of_color = [
    {
      name: "Face painting",
      date: "01-01-2001",
      shadowColor: "orange",
      disc: `Step into a world of imagination and inspiration with our art 🎨 category events!! From intricate rangoli designs to bold temporary tattoos, there's something for everyone in our art category lineup. Come explore the beauty of rangoli...`,
      img: "./Face painting.png",
      ruleBook:
        "https://drive.google.com/file/d/1-bthXixmp_iimNZh057-1JIQeANtc_d2/view?usp=drivesdk",
      regSvnit: "https://forms.gle/9oUyYzPUip84NkSP7",
      regNSvnit: "https://forms.gle/fYdGQkhDLk15JdzJ9",
    },
    {
      name: "Art Walk",
      date: "01-01-2001",
      shadowColor: "orange",
      disc: `Step into a world of imagination and inspiration with our art 🎨 category events!! From intricate rangoli designs to bold temporary tattoos, there's something for everyone in our art category lineup. Come explore the beauty of rangoli...`,
      img: "./Art Walk.png",
      ruleBook:
        "https://drive.google.com/file/d/1-bthXixmp_iimNZh057-1JIQeANtc_d2/view?usp=drivesdk",
      regSvnit: "https://forms.gle/9oUyYzPUip84NkSP7",
      regNSvnit: "https://forms.gle/fYdGQkhDLk15JdzJ9",
    },
    {
      name: "Paint Without Brush",
      date: "01-01-2001",
      shadowColor: "orange",
      disc: `Step into a world of imagination and inspiration with our art 🎨 category events!! From intricate rangoli designs to bold temporary tattoos, there's something for everyone in our art category lineup. Come explore the beauty of rangoli...`,
      img: "./Paint Without Brush.png",
      ruleBook:
        "https://drive.google.com/file/d/1-bthXixmp_iimNZh057-1JIQeANtc_d2/view?usp=drivesdk",
      regSvnit: "https://forms.gle/9oUyYzPUip84NkSP7",
      regNSvnit: "https://forms.gle/fYdGQkhDLk15JdzJ9",
    },
    {
      name: "Temporary Tattoo Tale",
      date: "01-01-2001",
      shadowColor: "orange",
      disc: `Step into a world of imagination and inspiration with our art 🎨 category events!! From intricate rangoli designs to bold temporary tattoos, there's something for everyone in our art category lineup. Come explore the beauty of rangoli...`,
      img: "./Temporary Tattoo Tale.png",
      ruleBook:
        "https://drive.google.com/file/d/1-bthXixmp_iimNZh057-1JIQeANtc_d2/view?usp=drivesdk",
      regSvnit: "https://forms.gle/9oUyYzPUip84NkSP7",
      regNSvnit: "https://forms.gle/fYdGQkhDLk15JdzJ9",
    },

    {
      name: "Rangoli Making",
      date: "01-01-2001",
      shadowColor: "orange",
      disc: `Step into a world of imagination and inspiration with our art 🎨 category events!! From intricate rangoli designs to bold temporary tattoos, there's something for everyone in our art category lineup. Come explore the beauty of rangoli...`,
      img: "./Rangoli.jpg",
      ruleBook:
        "https://drive.google.com/file/d/1-bthXixmp_iimNZh057-1JIQeANtc_d2/view?usp=drivesdk",
      regSvnit: "https://forms.gle/9oUyYzPUip84NkSP7",
      regNSvnit: "https://forms.gle/fYdGQkhDLk15JdzJ9",
    },
  ];

  const Dummy_event_design = [
    {
      name: "Comic Making",
      date: "01-01-2001",
      shadowColor: "gray",
      disc: `We are excited to invite you to Sparsh, our Annual Cultural fest at the Sardar Vallabhbhai National Institute of Technology. This is a celebration of diverse cultures and talents from across the country, and we want you to be a part of it.`,
      img: "./Comic Making.png",
      ruleBook:
        "https://drive.google.com/file/d/1-obOO-J_9HBPE-h60dCLZyBmGWRZHriU/view?usp=drivesdk",
      regSvnit: "https://forms.gle/KVcWW8Au7Dnm1NjA9",
      regNSvnit: "https://forms.gle/yjCBKV6wPJrhLwpk9",
    },
    {
      name: "Doodling",
      date: "01-01-2001",
      shadowColor: "gray",
      disc: `From preserving moments in time to producing comics that sparkle, Doodling our dreams, and producing visual stories that rhyme.
We take pictures of the world around us with cameras in our hands, freezing unforgettable moments.`,
      img: "./Doodling.png",
      ruleBook:
        "https://drive.google.com/file/d/1-obOO-J_9HBPE-h60dCLZyBmGWRZHriU/view?usp=drivesdk",
      regSvnit: "https://forms.gle/KVcWW8Au7Dnm1NjA9",
      regNSvnit: "https://forms.gle/yjCBKV6wPJrhLwpk9",
    },
    {
      name: "Photography Contest",
      date: "01-01-2001",
      shadowColor: "gray",
      disc: `From preserving moments in time to producing comics that sparkle, Doodling our dreams, and producing visual stories that rhyme.
We take pictures of the world around us with cameras in our hands, freezing unforgettable moments.`,
      img: "./Photography Contect.png",
      ruleBook:
        "https://drive.google.com/file/d/1-obOO-J_9HBPE-h60dCLZyBmGWRZHriU/view?usp=drivesdk",
      regSvnit: "https://forms.gle/KVcWW8Au7Dnm1NjA9",
      regNSvnit: "https://forms.gle/yjCBKV6wPJrhLwpk9",
    },
    {
      name: "Short Film",
      date: "01-01-2001",
      shadowColor: "gray",
      disc: `From preserving moments in time to producing comics that sparkle, Doodling our dreams, and producing visual stories that rhyme.
We take pictures of the world around us with cameras in our hands, freezing unforgettable moments.`,
      img: "./Short Film.png",
      ruleBook:
        "https://drive.google.com/file/d/1-obOO-J_9HBPE-h60dCLZyBmGWRZHriU/view?usp=drivesdk",
      regSvnit: "https://forms.gle/KVcWW8Au7Dnm1NjA9",
      regNSvnit: "https://forms.gle/yjCBKV6wPJrhLwpk9",
    },
    {
      name: "Sparsh After Movie",
      date: "01-01-2001",
      shadowColor: "gray",
      disc: `From preserving moments in time to producing comics that sparkle, Doodling our dreams, and producing visual stories that rhyme.
We take pictures of the world around us with cameras in our hands, freezing unforgettable moments.`,
      img: "./Sparsh After Movie.png",
      ruleBook:
        "https://drive.google.com/file/d/1-obOO-J_9HBPE-h60dCLZyBmGWRZHriU/view?usp=drivesdk",
      regSvnit: "https://forms.gle/KVcWW8Au7Dnm1NjA9",
      regNSvnit: "https://forms.gle/yjCBKV6wPJrhLwpk9",
    },
    {
      name: "Sparsh through My Lens",
      date: "01-01-2001",
      shadowColor: "gray",
      disc: `We are excited to invite you to Sparsh, our Annual Cultural fest at the Sardar Vallabhbhai National Institute of Technology. This is a celebration of diverse cultures and talents from across the country, and we want you to be a part of it.`,
      img: "./Sparsh through My Lens.png",
      ruleBook:
        "https://drive.google.com/file/d/1-obOO-J_9HBPE-h60dCLZyBmGWRZHriU/view?usp=drivesdk",
      regSvnit: "https://forms.gle/KVcWW8Au7Dnm1NjA9",
      regNSvnit: "https://forms.gle/yjCBKV6wPJrhLwpk9",
    },
  ];

  const Dummy_event_school = [
    {
      name: "Bag of Words",
      date: "01-01-2001",
      shadowColor: "gray",
      disc: `We are excited to invite you to Sparsh, our Annual Cultural fest at the Sardar Vallabhbhai National Institute of Technology. This is a celebration of diverse cultures and talents from across the country, and we want you to be a part of it.`,
      img: "./BoW.png",
      ruleBook: "",
      regSvnit: "https://forms.gle/awX34KWeZezHokA16",
      regNSvnit: "",
    },
    {
      name: "Extempore",
      date: "01-01-2001",
      shadowColor: "gray",
      disc: `We are excited to invite you to Sparsh, our Annual Cultural fest at the Sardar Vallabhbhai National Institute of Technology. This is a celebration of diverse cultures and talents from across the country, and we want you to be a part of it.`,
      img: "./extempore.png",
      ruleBook: "",
      regSvnit: "https://forms.gle/awX34KWeZezHokA16",
      regNSvnit: "",
    },
    {
      name: "GK Quiz",
      date: "01-01-2001",
      shadowColor: "gray",
      disc: `We are excited to invite you to Sparsh, our Annual Cultural fest at the Sardar Vallabhbhai National Institute of Technology. This is a celebration of diverse cultures and talents from across the country, and we want you to be a part of it.`,
      img: "./gk.png",
      ruleBook: "",
      regSvnit: "https://forms.gle/awX34KWeZezHokA16",
      regNSvnit: "",
    },
    {
      name: "Poster Making",
      date: "01-01-2001",
      shadowColor: "gray",
      disc: `We are excited to invite you to Sparsh, our Annual Cultural fest at the Sardar Vallabhbhai National Institute of Technology. This is a celebration of diverse cultures and talents from across the country, and we want you to be a part of it.`,
      img: "./pm.png",
      ruleBook: "",
      regSvnit: "https://forms.gle/awX34KWeZezHokA16",
      regNSvnit: "",
    },
    {
      name: "School Debate",
      date: "01-01-2001",
      shadowColor: "gray",
      disc: `We are excited to invite you to Sparsh, our Annual Cultural fest at the Sardar Vallabhbhai National Institute of Technology. This is a celebration of diverse cultures and talents from across the country, and we want you to be a part of it.`,
      img: "./sd.png",
      ruleBook: "",
      regSvnit: "https://forms.gle/awX34KWeZezHokA16",
      regNSvnit: "",
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

  const [eventsD0, setEventsD0] = useState(Dummy_event_school);
  const [eventsD1, setEventsD1] = useState(Dummy_speaking_art);
  const [eventsD2, setEventsD2] = useState(Dummy_event_music);
  const [eventsD3, setEventsD3] = useState(Dummy_event_Fashion_LifeStyle);
  const [eventsD4, setEventsD4] = useState(Dummy_event_Drama);
  const [eventsD5, setEventsD5] = useState(Dummy_event_Art_of_color);
  const [eventsD6, setEventsD6] = useState(Dummy_event_design);

  const ref = useRef(null);

  const handleClick = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  const onSearchHandler = (value) => {
    // console.log(value);

    setEventsD0(
      Dummy_event_school.filter((event) =>
        event.name.toLowerCase().includes(value.toLowerCase())
      )
    );

    setEventsD1(
      Dummy_speaking_art.filter((event) =>
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

    setEventsD5(
      Dummy_event_Drama.filter((event) =>
        event.name.toLowerCase().includes(value.toLowerCase())
      )
    );
    setEventsD6(
      Dummy_event_design.filter((event) =>
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
      <div id="d0" style={{ paddingTop: "150px" }}>
        <Catagory
          eventCatagory="School Events"
          events={eventsD0}
          styles={styles[0]}
          loading={loading}
          setloading={setloading}
          data={data}
        />
      </div>
      <div id="d6" style={{ paddingTop: "150px" }}>
        <Catagory
          eventCatagory="Design & Arts"
          events={eventsD6}
          styles={styles[0]}
          loading={loading}
          setloading={setloading}
          data={data}
        />
      </div>
      <div id="d5" style={{ paddingTop: "150px" }}>
        <Catagory
          eventCatagory="Art of Color"
          events={eventsD5}
          styles={styles[0]}
          loading={loading}
          setloading={setloading}
          data={data}
        />
      </div>
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
          eventCatagory="Singing/Dancing"
          events={eventsD2}
          styles={styles[0]}
          loading={loading}
          setloading={setloading}
          data={data}
        />
      </div>
      <div id="d1" style={{ paddingTop: "150px" }}>
        <Catagory
          eventCatagory="Speaking Art"
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
