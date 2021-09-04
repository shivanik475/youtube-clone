import React from 'react';
import "./channelRow.css";
import {Avatar} from "@material-ui/core"
import  VerifiedIcon  from '@material-ui/icons/CheckCircleOutlineOutlined';

function ChannelRow({
    image,
    channel,
    subs,
    noOfVideos,
    description,
    Verified,
}) {
    return (
        <div className="channelRow">
        <Avatar className="channel__logo" alt={channel} src={image} />
        <div className="channelRow__text">
            <h4>{channel} {Verified && <VerifiedIcon/>}</h4>
            <p>{subs} subscribers . {noOfVideos} videos {description}</p>
        </div>
        </div>
        );
    
}
export default ChannelRow;