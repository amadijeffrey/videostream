import React,{Component} from "react";
import "./videoListItem.css"

class VideoListItem extends Component{
    render(){
        const imageUrl = this.props.video.snippet.thumbnails.default.url;
        const video = this.props.video
        const onVideoSelect = this.props.onVideoSelect
        return(
            <li onClick ={() => onVideoSelect(video)}className="list-group-item ">
                <div className="video-list-item">
                    <div className="media-left">
                        <img className="media-object" alt = {video.snippet.title} src={imageUrl}/>
                    </div>
                    <div className="media-body">
                      <div className="media-heading">{video.snippet.title}</div>
                    </div>
                </div>
            </li>
        )
    }
}

export default VideoListItem