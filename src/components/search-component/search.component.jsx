import React, { Component } from 'react'
import './search.styles.css'

class SearchFood extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name: ''
        }
    }
    handleChange=(event)=> { 
        this.setState({
            name: event.target.value
        })
    }
    
    handleSubmit=(event)=> {
        event.preventDefault()
        this.props.foodSearch(this.state.name)
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="search" onChange={this.handleChange} className="search" placeholder="search" value={this.state.value}/>
                </form>
            </div>
        )
    }
}

export default SearchFood
