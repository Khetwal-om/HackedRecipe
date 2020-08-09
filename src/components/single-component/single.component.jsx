import React from 'react'
import './Single.styles.css'

function Single({description,name,image,label,price}) {
    return (
        <div className="FoodDetail">
            <div className="image" style={{backgroundImage: `url(${image})`}}>
                
            </div>
            <div className="details"> 
              <h1 className="name">{name}</h1>

              <div className="price-label">
                  <h4 className="label">{label} -:- </h4>
                  <h6 className="price">{price} $</h6>
              </div>

              <p className="description">{description}</p>
            </div>
            
        </div>
    )
}

export default Single
