import React from 'react';
import './RevireItem.css';

const ReviewItem = ({product}) => {
    const {name, price, quantity, img} = product;
    return (
        <div className='review-item'>
             <div>
                <img src={img} alt="" />
             </div>
             <div className="revirew-details-container">
                <div className="review-details">
                    <p>{name}</p>
                    <p><small>{price}</small></p>
                    <p><small>{quantity}</small></p>
                </div>
                <div className="delete-icon">
                    <button>Delete</button>
                </div>
             </div>
        </div>
    );
};

export default ReviewItem;