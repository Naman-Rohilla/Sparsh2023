import './eventName.css'

const EventName=(props)=>{
    return(
        <div className="day_no">
            <div className="neon_line"></div>
            {props.name} 
        </div>
    )
}

export default EventName