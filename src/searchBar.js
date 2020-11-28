import React,{Component} from "react";
import "./searchBar.css"

class SearchBar extends Component {
    constructor(props){
        super(props)
        this.state = {term:""}
    }
    render(){
        return(
           <div > <input className="search-bar" type="text"
            id="input"/>
           <button onClick={()=>this.termForSearch(document.getElementById("input").value)}>search</button>
           </div>
        )
    }
  termForSearch(term){
      this.setState({term})
      this.props.onButtonClick(term)
  }
}



export default SearchBar