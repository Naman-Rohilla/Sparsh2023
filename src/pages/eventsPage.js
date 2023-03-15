import React, { useRef, useState } from 'react'

import Events from '../Components/events/events'

const EventsPage = (data) => {

  

  return (
    <div className="EventsPage" style={{background:'linear-gradient(105deg, rgb(0 0 0), rgb(0 0 0))'}}>
      <Events data = {data} />
      {/* <GComp styles={styles[0]}/> */}
    </div>
  )
}

export default EventsPage
