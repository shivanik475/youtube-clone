import React from 'react';
import SidebarRow from './SidebarRow';
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import "./Sidebar.css";

function Sidebar() {
    return(
        <div className="sidebar">
        <SidebarRow selected Icon ={HomeIcon} title="Home"/>
        <SidebarRow Icon= {WhatshotIcon} title="Trending"/>
        <SidebarRow Icon= {SubscriptionIcon} title="Subscription"/>
        <hr />
        <SidebarRow Icon= {VideoLibraryIcon} title="Library"/>
        <SidebarRow Icon= {HistoryIcon} title="History"/>
        <SidebarRow Icon= {OndemandVideoIcon} title="Your Videos"/>
        <SidebarRow Icon= {WatchLaterIcon} title="Watch Later"/>
        <hr />
        </div>

    )
}

export default Sidebar