
import React, { useEffect, useRef } from 'react';
import axios from 'axios';

const YouTubePlayer = ({ videoId }) => {
  const playerRef = useRef(null);

  useEffect(() => {
    
    const script = document.createElement('script');
    script.src = 'https://www.youtube.com/iframe_api';
    document.head.appendChild(script);

    script.onload = () => {
      window.onYouTubeIframeAPIReady = createPlayer;
    };

  
    const createPlayer = () => {
      playerRef.current = new window.YT.Player('player', {
        height: '360',
        width: '640',
        videoId: videoId,
        events: {
          'onReady': onPlayerReady,
        },
      });
    };

    const onPlayerReady = (event) => {
      
    };

    return () => {
      
      document.head.removeChild(script);
    };
  }, [videoId]);

  return (
    <div id="player">
      {/* The YouTube player will be embedded here */}
    </div>
  );
};

export default YouTubePlayer;
