import Card from "../Card";
import GComp from "../card/gComp";
import EventName from "../eventName";
import "./music.css";

const Music = (props) => {
  return (
    <div className="music">
      {/* <div
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          background: "black",
          zIndex: 90,
          display: "flex",
          justifyContent: "center",
          fontSize: "xx-large",
          alignItems: "center",
          opacity: 0.95,
          color: "white",
        }}
      >
        RELEASING SOON
      </div> */}
      <EventName name="Music" />

      <div className="music_events">
        <br />
        {props.events.map((event) => {
          console.log(event.name);
          return (
            <div key={event.name}>
              <GComp event={event} data={props.data} loading={props.loading} setloading={props.setloading}  styles={props.styles} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Music;
