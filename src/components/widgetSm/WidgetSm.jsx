import React from 'react'
import './widgetsm.css'
import {Bookmark,AccountBox} from '@mui/icons-material';

function WidgetSm() {
  return (
    <div className='widgetsm'>
      <span className="widgetSmTitle">My Classes</span>
      <ul className="widgetSmList">
          <li className="widgetSmListItem">
              <div className="timing">
                  <span className="timingText">10:15-11:00</span>
              </div>
              <div className="description">
              <div><Bookmark className='bookmarkIcon'/>SEM8-401 POWER SYSTEM</div>
              <div><AccountBox className='accountIcon'/> Mr. Name Title</div>
              <a className='joinLink' href='https://meet.google.com/' target='_blank'>Join</a>
              </div>
              
          </li>
          <li className="widgetSmListItem">
              <div className="timing">
                  <span className="timingText">10:15-11:00</span>
              </div>
              <div className="description">
              <div><Bookmark className='bookmarkIcon'/>SEM8-401 POWER SYSTEM</div>
              <div><AccountBox  className='accountIcon'/> Mr. Name Title</div>
              <a className='joinLink'  href='https://meet.google.com/' target='_blank'>Join</a>
              </div>
              
          </li>
          <li className="widgetSmListItem">
              <div className="timing">
                  <span className="timingText">10:15-11:00</span>
              </div>
              <div className="description">
              <div><Bookmark className='bookmarkIcon'/>SEM8-401 POWER SYSTEM</div>
              <div><AccountBox className='accountIcon'/> Mr. Name Title</div>
              <a className='joinLink' href='https://meet.google.com/' target='_blank'>Join</a>
              </div>
              
          </li>
      </ul>
    </div>
  )
}

export default WidgetSm
