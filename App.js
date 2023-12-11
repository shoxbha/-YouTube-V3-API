
import React, { useState } from 'react';
import YouTubePlayer from './YouTubePlayer';

const App = () => {
  const [videoId, setVideoId] = useState(''); // State to store the video ID

  const handleInputChange = (event) => {
    setVideoId(event.target.value);
  };

  const handleButtonClick = () => {
  
    if (videoId.trim() !== '') {
    
      setVideoId(videoId.trim());
    }
  };

  return (
    <div>
      <h1>YouTube Video Player</h1>
      <div>
        <input
          type="text"
          placeholder="Enter YouTube Video ID"
          value={videoId}
          onChange={handleInputChange}
        />
        <button onClick={handleButtonClick}>Play Video</button>
      </div>
      <YouTubePlayer videoId={videoId} />
    </div>
  );
};

export default App;
