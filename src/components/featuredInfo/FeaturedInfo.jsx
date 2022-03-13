import React from 'react'
import './featuredinfo.css'
import {ThumbUpAlt,ThumbDownAlt,Groups} from '@mui/icons-material';

function FeaturedInfo() {
  return (
    <div className='featured'>
      <div className="featuredItem">
          <span className='featuredTitle'>Attendance</span>
          <div className="featuredAttenContainer">
              <span className="featuredAtten"><ThumbUpAlt className='featuredIcon good'/>Above 85%</span>
          </div>
          <span className='featuredSub'>
            Compared To Last Month
          </span>
      </div>
      <div className="featuredItem fee">
          <span className='featuredTitle'>Fees Notification</span>
          <div className="featuredAttenContainer">
              <span className="featuredAtten">No Fees Due</span>
          </div>
      </div>
      <div className="featuredItem">
          <span className='featuredTitle'><Groups className='featuredIcon'/>Live Classes</span>
          <div className="featuredAttenContainer">
              <div className="featuredAtten"><b>Email-id:</b>xyz12@gmail.com</div>
              <div className="featuredAtten"><b>Password:</b>xyz12</div>
          </div>
          <span className='featuredSub'>
           <a href="https://meet.google.com/" className='meetlink' target='_blank'>Join Live Classes Click Here</a>
          </span>
      </div>
    </div>
  )
}

export default FeaturedInfo
