import React from 'react';
import '../styles/videos.css';

const VideoList = ({ videos }) => {

  return (
    <div>
      <div className=' after:content group relative mb-2 block w-full after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight'>
        {videos.map((video, index) => (
            <video key={index} width="720" height="480" controls className='hover-controls p-15 rounded-3xl brightness-90 transform rounded-lg brightness-100 transition will-change-auto'>
              <source src={`/media/${video.filename}`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
        ))}
      </div>
    </div>
  );
};

export default VideoList;
