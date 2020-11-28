import React,{Component} from "react";
import "./videoDetail.css"

class VideoDetail extends Component{
    render(){
        if(!this.props.video){
            return <div>Loading...</div>
        }
        const videoId = this.props.video.id.videoId
        const url =  `https://www.youtube.com/embed/${videoId}`
        const  video = this.props.video
        return(
                <div className="video-detail col-md-8">
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe className="embed-responsive-item" src={url}></iframe>
                    </div>
                    <div className="details">
                        <div>{video.snippet.title}</div>
                        
                    </div>
                </div>
        )
    }
}

export default VideoDetail