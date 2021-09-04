import React from 'react';
import VideoCard from './VideoCard.js';
import './RecommendedVideos.css';

function RecommendedVideos(props) {
    return (
        <div className="recommendedVideos">
            <h2>Recommended</h2>
            <div className="recommendedVideos__videos">
            <VideoCard 
            title="become a web developer"
            views="2.3M Views"
            timestamp="3 days ago"
            channelImage="https://images.app.goo.gl/HTQ6AmBiJnAGnRLWA"
            channel="shivi"
            image="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/cartman.svg"
             />
             <VideoCard 
            title="become a web developer"
            views="2.3M Views"
            timestamp="3 days ago"
            channelImage="https://images.app.goo.gl/HTQ6AmBiJnAGnRLWA"
            channel="shivi"
            image="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/cartman.svg"
             />
             <VideoCard 
            title="become a web developer"
            views="2.3M Views"
            timestamp="3 days ago"
            channelImage="https://images.app.goo.gl/HTQ6AmBiJnAGnRLWA"
            channel="shivi"
            image="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/cartman.svg"
             />
             <VideoCard 
            title="become a web developer"
            views="2.3M Views"
            timestamp="3 days ago"
            channelImage="https://images.app.goo.gl/HTQ6AmBiJnAGnRLWA"
            channel="shivi"
            image="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/cartman.svg"
             />
             <VideoCard 
            title="become a web developer"
            views="2.3M Views"
            timestamp="3 days ago"
            channelImage="https://images.app.goo.gl/HTQ6AmBiJnAGnRLWA"
            channel="shivi"
            image="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/cartman.svg"
             />
            </div>
            
        </div>
    );
}

export default RecommendedVideos;