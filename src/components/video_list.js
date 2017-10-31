import React from 'react';
import VideoListItem from './video_list_item';
// in class based components props are acccesed by this.props
const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video} />);
  });
  return(
    <ul className="col-md4 list-group">
    {videoItems}
    </ul>
  );
};

export default VideoList;
