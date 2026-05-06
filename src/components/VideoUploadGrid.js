import React from 'react';
import { ExternalLink, Play } from 'lucide-react';
import './VideoUploadGrid.css';

const VideoUploadGrid = () => {
  // YouTube video links for each portal
  const portalVideos = {
    'School Admin': 'https://youtu.be/YMAtFeWLQlI?si=-6-OEsTBJpmTLcCD', // Replace with actual YouTube URL
    'Guide Portal': 'https://youtu.be/YMAtFeWLQlI?si=-6-OEsTBJpmTLcCD', // Replace with actual YouTube URL
    'Student Portal': 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // Replace with actual YouTube URL
    'Parent Portal': 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'  // Replace with actual YouTube URL
  };

  const handlePortalClick = (portalName) => {
    // Open YouTube video in new tab
    window.open(portalVideos[portalName], '_blank');
  };

  return (
    <div className="video-upload-grid">
      <div className="grid-header">
        <h2>Portal Videos</h2>
      </div>
      <div className="grid-container">
        {Object.keys(portalVideos).map((portalName, index) => (
          <button
            key={index}
            className="portal-button"
            onClick={() => handlePortalClick(portalName)}
          >
            <div className="button-content">
              <div className="button-icon">
                <Play size={32} />
              </div>
              <div className="button-text">
                <h3>{portalName}</h3>
                <p>Click to watch </p>
              </div>
              <div className="button-arrow">
                <ExternalLink size={24} />
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default VideoUploadGrid;
