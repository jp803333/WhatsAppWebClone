import React, { Component } from "react";
import "./ProfileHeader.css";
import image from "./IMG_20190715_141502.jpg";
import SlowMotionVideoIcon from "@material-ui/icons/SlowMotionVideo";
import MessageIcon from "@material-ui/icons/Message";
import MoreVertIcon from "@material-ui/icons/MoreVert";
export default class ProfileHeader extends Component {
  render() {
    return (
      <div className="ProfileHeaderMainContainer">
        <div className="img-deo">
          <img className="image" src={image} alt="" />
        </div>
        <SlowMotionVideoIcon
          fontSize="medium"
          color="disabled"
          style={{ margin: 17 }}
        />
        <MessageIcon
          fontSize="medium"
          color="disabled"
          style={{ margin: 17 }}
        />
        <MoreVertIcon
          fontSize="medium"
          color="disabled"
          style={{ margin: 17 }}
        />
      </div>
    );
  }
}
