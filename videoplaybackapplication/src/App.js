import React, { useEffect } from 'react';

const YouTubePlayer = () => {
  const apiKey = 'https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UC_x5XG1OV2P6uZZ5FSM9Ttw&maxResults=25&key=AIzaSyA4yRfNWowaySjUsYFrOB3uYrvWJBupbpo HTTP/1.1';
  const videoId = '0pWsCiBvLOk';

  useEffect(() => {
    
    const script = document.createElement('script');
    script.src = 'https://www.youtube.com/iframe_api';
    document.head.appendChild(script);

 
    window.onYouTubeIframeAPIReady = initializeYouTubePlayer;

    return () => {
   
      document.head.removeChild(script);
      delete window.onYouTubeIframeAPIReady;
    };
  }, []);

  const initializeYouTubePlayer = () => {
 
    const player = new window.YT.Player('player', {
      height: '360',
      width: '640',
      videoId: videoId,
      playerVars: {
        origin: window.location.origin,
        modestbranding: 1,
        playsinline: 1,
      },
      events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange,
      },
    });
  };

  const onPlayerReady = (event) => {
 
    event.target.playVideo();
  };

  const onPlayerStateChange = (event) => {

    if (event.data === window.YT.PlayerState.ENDED) {
      console.log('Video has ended.');
    }
  };

  return <div id="player"></div>;
};

export default YouTubePlayer;
