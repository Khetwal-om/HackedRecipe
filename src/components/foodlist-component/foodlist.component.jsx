import React, { Component } from 'react'
import './foodlist.styles.css'

import FoodDetail from '../fooddetail-component/fooddetail.component'

class FoodList extends Component {
     
    
    render() {
        
        const filteredFood=JSON.parse(localStorage.getItem('food'));  
        const answer=filteredFood.filter(name=> name.name.includes(this.props.foodSearched)).map(({id,...otherFoodies})=> <FoodDetail key={id} {...otherFoodies}/>)
        if(this.props.foodSearched){
            return <div className="FoodList"> {answer} </div>
        }
        return (
            <div className="FoodList">
               {
                this.props.foodlist && this.props.foodlist.map(({id,...otherFoodies}) => <FoodDetail key={id} {...otherFoodies}/>)
               }  
            </div>
        )
    }
}

export default FoodList
