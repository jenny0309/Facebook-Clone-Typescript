import { Avatar } from "@material-ui/core";
import React from "react";
import "./Story.css";

interface StoryProps {
  image: string;
  profileSrc: string;
  title: string;
}

const Story = ({ image, profileSrc, title }: StoryProps) => {
  return (
    <div className="story" style={{ backgroundImage: `url(${image})` }}>
      <Avatar className="story__avatar" src={profileSrc} />
      <h4>{title}</h4>
    </div>
  );
};

export default Story;
