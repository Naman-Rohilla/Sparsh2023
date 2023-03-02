import React, { useRef, useState } from 'react'

import Events from '../Components/events/events'

const EventsPage = () => {

  

  return (
    <div className="EventsPage" style={{background:'linear-gradient(105deg, rgb(0 0 0), rgb(0 0 0))'}}>
      <Events/>
      {/* <GComp styles={styles[0]}/> */}
    </div>
  )
}

export default EventsPage
