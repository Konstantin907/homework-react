import React from 'react';
import './Listing.css'

const Listings = ({ src, title, price, num , country, rating }) => {
    return (
      <>
        <div className='card'>
          <img src={src} alt='' />
          <div className='card_info'>
            <div className='row' ><img src='https://iconsplace.com/wp-content/uploads/_icons/ff0000/256/png/rating-star-icon-14-256.png' alt='' /> <span className='num'> {rating} ({num})</span>&nbsp; • &nbsp;<span className='country'>{country}</span></div>
            <h2>{title}</h2>
            <h3>{price} <span className='night'>/ night</span></h3>
          </div>
        </div>
      </>
    );
  };
export default Listings;




