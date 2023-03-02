import Card from "../Card"
import GComp from "../card/gComp"
import DayNo from "../eventName"
import './day4.css'

const Day4=(props)=>{
    return(
        <div className="day4">
            <DayNo day_no='4' />

            <div className="day4_events">
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

export default Day4