import React from 'react'
import './sidebar.css'
import { Home,PeopleAlt,LibraryBooks} from '@material-ui/icons'
import {AccessTime, Money ,DocumentScanner,Assignment, AssignmentInd,
    EmojiPeople, Assessment,AssignmentReturn, PowerSettingsNew} from '@mui/icons-material';

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
          <div className="sidebarMenu">
              <h3 className='sidebarTitle'>Dashboard</h3>
              <ul className="sidebarList">
                  <li className="sidebarListItems active">
                      <Home className='sidebarIcon'/>Home
                  </li>
                  <li className="sidebarListItems">
                      <LibraryBooks className='sidebarIcon'/>My Courses
                  </li>
                  <li className="sidebarListItems">
                      <PeopleAlt className='sidebarIcon'/>My Faculty
                  </li>
              </ul>
          </div>
          <div className="sidebarMenu">
              <h3 className='sidebarTitle'>Quick Menu</h3>
              <ul className="sidebarList">
                  <li className="sidebarListItems ">
                      <AccessTime className='sidebarIcon'/>Time Table
                  </li>
                  <li className="sidebarListItems">
                      <Money className='sidebarIcon'/>Fee Details
                  </li>
                  <li className="sidebarListItems">
                      <DocumentScanner className='sidebarIcon'/>Student Documnets
                  </li>
              </ul>
          </div>
          <div className="sidebarMenu">
              <h3 className='sidebarTitle'>Notifications</h3>
              <ul className="sidebarList">
                  <li className="sidebarListItems ">
                      <Assignment className='sidebarIcon'/>Assignments
                  </li>
                  <li className="sidebarListItems">
                      <AssignmentInd className='sidebarIcon'/>Admit Card
                  </li>
                  <li className="sidebarListItems">
                      <EmojiPeople className='sidebarIcon'/>Mentor
                  </li>
              </ul>
          </div>
          <div className="sidebarMenu">
              <h3 className='sidebarTitle'>Previews</h3>
              <ul className="sidebarList">
                  <li className="sidebarListItems ">
                      <Assessment className='sidebarIcon'/>Results
                  </li>
                  <li className="sidebarListItems">
                      <AssignmentReturn className='sidebarIcon'/>Enrollment Form
                  </li>
                  <li className="sidebarListItems">
                      <PowerSettingsNew className='sidebarIcon'/>Log Out
                  </li>
              </ul>
          </div>
      </div>
    </div>
  )
}

export default Sidebar
