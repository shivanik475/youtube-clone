import React from 'react';
import ChannelRow from './ChannelRow'
import VideoRow from './VideoRow'
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import "./SearchPage.css"

function SearchPage(props) {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon/>
                <h2>Filter</h2>
            </div>
            <hr />

            <ChannelRow 
            images="https://commons.wikimedia.org/wiki/File:NewTux.svg"
            channel="shivi"
            Verified
            subs="545k"
            noOfVideos={382}
            description="you can find awesome video here"
            />

            <hr/>

            <VideoRow 
             views="1.4M"
             subs="659k"
             description="ghghjgj jgjhjkhjk gdgdgf"
             timestamp="59 seconds ago"
             channel="shivi"
             title ="let's build an app"
             image="https://media.istockphoto.com/photos/blue-peacock-picture-id847144522"
             />

             <VideoRow 
             views="1.4M"
             subs="659k"
             description="ghghjgj jgjhjkhjk gdgdgf"
             timestamp="59 seconds ago"
             channel="shivi"
             title ="let's build an app"
             image="https://media.istockphoto.com/photos/blue-peacock-picture-id847144522"
             />

             <VideoRow 
             views="1.4M"
             subs="659k"
             description="ghghjgj jgjhjkhjk gdgdgf"
             timestamp="59 seconds ago"
             channel="shivi"
             title ="let's build an app"
             image="https://media.istockphoto.com/photos/blue-peacock-picture-id847144522"
             />

             <VideoRow 
             views="1.4M"
             subs="659k"
             description="ghghjgj jgjhjkhjk gdgdgf"
             timestamp="59 seconds ago"
             channel="shivi"
             title ="let's build an app"
             image="https://media.istockphoto.com/photos/blue-peacock-picture-id847144522"
             />

             <VideoRow 
             views="1.4M"
             subs="659k"
             description="ghghjgj jgjhjkhjk gdgdgf"
             timestamp="59 seconds ago"
             channel="shivi"
             title ="let's build an app"
             image="https://media.istockphoto.com/photos/blue-peacock-picture-id847144522"
             />
            
        </div>
    );
}

export default SearchPage;