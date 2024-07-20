import React from "react";
import { Link } from "react-router-dom";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import PersonIcon from "@mui/icons-material/Person";
import PollIcon from "@mui/icons-material/Poll";
import BookIcon from "@mui/icons-material/Book";
import DonutSmallIcon from "@mui/icons-material/DonutSmall";
import MobiledataOffIcon from "@mui/icons-material/MobiledataOff";
import ListAltIcon from "@mui/icons-material/ListAlt";

import "./dashboardStyle.css";

export const Dashboard = () => {
  return (
    <>
      <div className="dashboard-body">
        <div className="container-class">
          <div className="conatiner-item-1 item">
            <Link to="/todo" className="link-item">
              <ListAltIcon className="icon-item" />
              <h1 className="icon-text">Todo</h1>
            </Link>
          </div>
          <div className="conatiner-item-2 item">
            <LinkedInIcon className="icon-item" />
            <h1 className="icon-text">LinkedIn</h1>
          </div>
          <div className="conatiner-item-3 item">
            <TwitterIcon className="icon-item" />
            <h1 className="icon-text">Twitter</h1>
          </div>
          <div className="conatiner-item-4 item">
            <LocalPostOfficeIcon className="icon-item" />
            <h1 className="icon-text">NewsLetter</h1>
          </div>
          <div className="conatiner-item-5 item">
            <AutoStoriesIcon className="icon-item" />
            <h1 className="icon-text">Pages</h1>
          </div>
          <div className="conatiner-item-6 item">
            <PersonIcon className="icon-item" />
            <h1 className="icon-text">Customers</h1>
          </div>
          <div className="conatiner-item-7 item">
            <PollIcon className="icon-item" />
            <h1 className="icon-text">Polls</h1>
          </div>
          <div className="conatiner-item-8 item">
            <BookIcon className="icon-item" />
            <h1 className="icon-text">Blogs</h1>
          </div>
          <div className="conatiner-item-9 item">
            <DonutSmallIcon className="icon-item" />
            <h1 className="icon-text">Web Analytics</h1>
          </div>
          <div className="conatiner-item-10 item">
            <MobiledataOffIcon className="icon-item" />
            <h1 className="icon-text">system</h1>
          </div>
        </div>
      </div>
    </>
  );
};
