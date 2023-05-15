import React from 'react';


const Card = (props) => {
  return (
    <div className='card'>
          <img src={props.item.coverImg} className='card-photo' />
          <div className="card-stats">
              <span className="card-rating">{props.item.stats.rating}</span>
              <span className="gray">({props.item.stats.reviewCount})</span>
              <span className="gray">{props.item.location}</span>
          </div>
          <p className="cart-title">{props.item.title}</p>
          <p><span className="bold">From ${props.item.price}</span></p>
    </div>
  )
}

export default Card;
