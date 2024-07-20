import React, { useState } from "react";

import "./readmoreStyle.css";

export const ReadMore = ({ children }) => {
 
  let show;
  const MAX_LENGTH = 100;
  const [isRead, setIsRead] = useState(true);
  const toggleRead = () => {
    setIsRead(!isRead);
  };
  if(children.length >= MAX_LENGTH){
    show = true;
  }
  return (
    <>{show ? 
    <p className="text">
      {isRead ? children.slice(0, 100) : children}
      <span onClick={toggleRead} className="read-or-hide">
        {isRead ? "...read more" : "..show less"}
      </span>
    </p>
      : children}
    </>
  );
};
