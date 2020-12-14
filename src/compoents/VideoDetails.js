import React, { Component } from 'react'

export default class VideoDetails extends Component {
    render() {
        return (
            <div>
                {this.props.video.snippet?<div className="mt-4 pl-0 w-100">
                <div className="embed-responsive embed-responsive-16by9 mb-3 ">
                <iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${this.props.video.id.videoId}`} allowFullScreen></iframe>
                </div>
                    <div className="border border-muted p-3 ">
                   <h5 className="mb-3">{ this.props.video.snippet.title} </h5>
                   <p>{ this.props.video.snippet.description} </p>
                </div>
                </div>:null}
            </div>
        )
    }
}
