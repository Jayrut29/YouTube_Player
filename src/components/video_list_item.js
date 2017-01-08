import React from 'react';


const VideoListItem = ({video, onVideoselect}) => {

const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li onClick={() => onVideoselect(video)} className="list-group-item">
  <div className="video-list media">
    <div className="media-left">
      <img className="media-object" src={imageUrl} />
    </div>
      <div className="media-body">
      <div className="media-heading">{video.snippet.title}</div>
      </div>
  </div>
</li>
);

};

export default VideoListItem;
