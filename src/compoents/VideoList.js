import React, { Component } from 'react'
import Video from './Video'

export default class VideoList extends Component {

    renderedVideos=()=>{
        return this.props.videos.map(video=>{
            return <div key={video.id.videoId}>
                <Video onVideoSelect={this.props.onVideoSelect} video={video} />
            </div>
        })
    }
    render() {
        return (
            <div>
                {this.renderedVideos()}
            </div>
        )
    }
}
