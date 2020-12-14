import React, { Component } from 'react'

export default class Video extends Component {
    
    render() {
        const {title,thumbnails}=this.props.video.snippet
        return (
<div className="mt-4">
<div onClick={()=>this.props.onVideoSelect(this.props.video)} className=" row align-items-baseline border-bottom pb-3">
<div  className="col-12 col-md-4 mb-2" ><img src={thumbnails.medium.url} style={{width:`250px`}}/></div>
<div  className="col-12 col-md-12 lead"><p className="">{title}</p></div>
 </div>
</div>
        )
    }
}
