import Card from "../Card"
import GComp from "../card/gComp"
import EventName from "../eventName"
import './dance.css'

const Dance=(props)=>{
    return(
        <div className="dance">
            <EventName name="dance" />

            <div className="dance_events">
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

export default Dance