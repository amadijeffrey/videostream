import React,{Component} from "react";
import VideoListItem from "./videoListItem"; 
import "./videoList.css"


class VideoList extends Component{
    render(){
        const videolist = this.props.videos.map((video)=>{
            return <VideoListItem 
                        onVideoSelect={this.props.onVideoSelect}
                        key={video.etag} 
                        video={video}/>
        })
        return(
            <ul className="list-group col-md-4">{videolist}</ul>
        )
    }
}
export default VideoList