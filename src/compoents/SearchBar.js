import React, { Component } from 'react'

export default class SearchBar extends Component {
    // Create The State
    state={term:""}

    // Change State When We Typing In The Input (Term == Input Value)
    inputChange=(e)=>{
this.setState({term:e.target.value})
    }

// We Fetch The Data When We Submit The Form
formOnSubmit=(e)=>{
e.preventDefault()
this.props.formSubmit(this.state.term)
    }

    render() {
        return (
            <div className="mt-3 border border-muted w-100 px-5 py-2">
                <form onSubmit={this.formOnSubmit} className="form-group w-100 ">
                    <label htmlFor="video" className="font-weight-bold">Search Videos</label>
                    <input value={this.state.term} onChange={this.inputChange} className="form-control" id="video" placeholder="Search for a videos"/>
                </form>
            </div>
        )
    }
}
