import Card from "../Card"
import GComp from "../card/gComp"
import EventName from "../eventName"
import './music.css'

const Music=(props)=>{
    return(
        <div className="music">
            <EventName name="music" />

            <div className="music_events">
            <br/>
            {
                props.events.map(event=>{
                    console.log(event.name);
                    return(

                    <div key={event.name}>
                    <GComp event={event}   styles={props.styles} />
                    </div>
                    )
                })
            }
            </div>

            
        </div>
    )
}

export default Music