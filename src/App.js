import React, { Component } from 'react'
import './App.css';

import FoodList from './components/foodlist-component/foodlist.component';
import image1 from '../src/images/Illustration1.png'
import image2 from '../src/images/Illustration2.png'
import image3 from '../src/images/Illustration3.png'
import image4 from '../src/images/Illustration4.png'
import image5 from '../src/images/Illustration5.png'

import axios from 'axios'
import SearchFood from './components/search-component/search.component';


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
         foodlist: null,
         foodSearched: null,
    }
  } 
  foodSearch=name=> {
     this.setState({
       foodSearched: name,
       foodFromLocal: JSON.parse(localStorage.getItem('food'))
     })

  }

  async componentDidMount(){
    const response= await axios.get('http://starlord.hackerearth.com/recipe')
    this.setState({
        foodlist: response.data
    })
    window.localStorage.setItem('food',JSON.stringify(this.state.foodlist))
}
  render() {
   



    return (
      <div className="App">
      <img src={image1} className="image1"/>
      <img src={image2} className="image2"/>
      <img src={image3} className="image3"/>
      <img src={image4} className="image4"/>
      <img src={image5} className="image5"/>
       

     <h1 className="header">HackedRecipe</h1>
        <SearchFood foodSearch={this.foodSearch} />
        <FoodList foodlist={this.state.foodlist} foodSearched={this.state.foodSearched}/>   
  </div>


    )
  }
}



export default App;
