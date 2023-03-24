import GComp from "../card/gComp";
import EventName from "../eventName";
import "./catagory.css";

const Catagory = (props) => {
  // console.log(props.data, "props")

  return (
    <div className="catagory">
      <EventName name={props.eventCatagory} />

      <div className="catagory_events">
        <br />
        {props.events[0].regSvnit.length > 0 ? (
          props.events.map((event) => {
            console.log(event.name);
            return (
              <div key={event.name}>
                <GComp
                  event={event}
                  data={props.data}
                  loading={props.loading}
                  setloading={props.setloading}
                  styles={props.styles}
                />
              </div>
            );
          })
        ) : (
          <div
            style={{
              color: "#404040",
              fontSize: "40px",
            }}
          >
            Releasing Soon
          </div>
        )}
      </div>
    </div>
  );
};

export default Catagory;
