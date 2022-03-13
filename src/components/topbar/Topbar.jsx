import React from "react";
import "./topbar.css";
import { Notifications, Settings, ColorLens } from "@mui/icons-material";

function Topbar(props) {
  console.log(props)
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">StudentPortal</span>
          <span className="nametext">Welcome! {props.name}</span>
        </div>
        <div className="topRight">
          <div className="topbarIconsContainer">
            <Notifications />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconsContainer">
            <Settings />
            <span className="topIconBadge">1</span>
          </div>
          <div className="topbarIconsContainer">
            <ColorLens />
          </div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR04ZndPl3TMJ4GMG8UeiY8XGh8ifpnPGHTbw&usqp=CAU"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}

export default Topbar;
