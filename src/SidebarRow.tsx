import { Avatar } from "@material-ui/core";
import React from "react";
import "./SidebarRow.css";

interface SidebarRowProps {
  src?: string;
  Icon?: React.ComponentType;
  title: string;
}

const SidebarRow = ({ src, Icon, title }: SidebarRowProps) => {
  return (
    <div className="sidebarRow">
      {src && <Avatar src={src} />}
      {Icon && <Icon />}
      <h4>{title}</h4>
    </div>
  );
};

export default SidebarRow;
