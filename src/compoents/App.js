import React, { Component } from 'react'
import SearchBar from './SearchBar'
import axios from "axios"
import VideoList from './VideoList'
import VideoDetails from './VideoDetails'
export default class App extends Component {

  // Create The State 
  state={
    term:[],
    selectedVideo:""
  }

  componentDidMount(){
    this.onSearch("Moana Trailer")
  }

  // Fetch The Data from Youtube Api Using async await 
onSearch=async(term)=>{
const {data}=await axios.get("https://www.googleapis.com/youtube/v3/search",{
  params: {
    q: term,
    part: 'snippet',
    type: 'video',
    maxResults: 4,
    key: "AIzaSyCdOk88lK7LjWWiA8zDxg-ZCDgYdrKWl6g"
  }
})

//Change The State Using SEtState
this.setState({term:data.items,selectedVideo:data.items[0]})
  }

 // Select Video Function
  onVideoSelect=(video)=>{
this.setState({selectedVideo:video})
  }

  render() {
    return (
      <div className="container">
        <SearchBar  formSubmit={this.onSearch} />
        <div className="row">
          <div  className="col-9"><VideoDetails video={this.state.selectedVideo} /></div>
          <div  className="col-3"> <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.term}/></div>
        </div>
      </div>
    )
  }
}


