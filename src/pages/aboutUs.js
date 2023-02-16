import Slider from "../Components/about/slider";
import TopSponsors from "../Components/topSponsors";

export default function AboutUs() {
  return (
    <>
      <div
        style={{
          height: "100vh",
          width: "100%",
          backgroundColor: "black",
          zIndex: 0,
          position: "absolute",
          opacity: 0.2,
        }}
      >
        <video
          width="90%"
          height="50%"
          style={{
            // backgroundColor: "purple",
            minWidth: "100%",
            minHeight: "100%",
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          autoplay="autoplay"
          muted
          loop
        >
          <source src="/Videos/demo.mp4" type="video/mp4"></source>
        </video>
        {/* <img
          fetchpriority="high"
          src="https://cdn.searchenginejournal.com/wp-content/uploads/2019/07/the-essential-guide-to-using-images-legally-online-760x400.png"
          width="1440"
          height="720"
          alt="The Essential Guide to Using Images Legally Online"
          srcset="https://cdn.searchenginejournal.com/wp-content/uploads/2019/07/the-essential-guide-to-using-images-legally-online-1520x800.png 1.5x"
        /> */}
      </div>
      <Slider />
      {/* <TopSponsors /> */}
    </>
  );
}
