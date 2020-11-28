import React,{Component} from 'react';
import './App.css';
import YTSearch from "youtube-api-search";
import SearchBar from "./searchBar";
import VideoDetail from "./videoDetail";
import VideoList from "./videoList";


const API_KEY = "AIzaSyCsfXL8kVkP9a2-wyH2BhxQ9PZyR94gM6w"


class App extends Component {
  constructor(props){
    super(props);

    this.state = {videos:[],
                selectedVideo:null
                }
    this.videoSearch("nicki minaj")

  }
    
 videoSearch(term){
    YTSearch({key:API_KEY, term:term}, (videos)=>{
      this.setState({videos:videos,
                      selectedVideo:videos[0]
                  })
  })
  }
  render(){
    return (
      <div>
        <div><SearchBar onButtonClick={term => this.videoSearch(term)}/></div>
        <div><VideoDetail video={this.state.selectedVideo}/></div>
        <div><VideoList 
        onVideoSelect={selectedVideo => this.setState({selectedVideo :selectedVideo})}
        videos={this.state.videos}/></div>
      </div>
      )
  }
 
}

export default App;
