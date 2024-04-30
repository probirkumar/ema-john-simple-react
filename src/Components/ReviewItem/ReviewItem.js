import React from 'react';
import './RevireItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const ReviewItem = ({ product, handleRemoveItem }) => {
    const { id, name, price, quantity, shipping, img } = product;
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="revirew-details-container">
                <div className="review-details">
                    <p>{name}</p>
                    <p><small>Price: <span className='price'>${price}</span></small></p>
                    <p><small>Shipping: <span className='price'>${shipping}</span></small></p>
                    <p><small>Quantity: <span className='price'>{quantity}</span></small></p>
                </div>
                <div className="delete-container">
                    <button onClick={() => handleRemoveItem(id)} className='btn-delete'>
                        <FontAwesomeIcon className='detete-icon' icon={faTrashAlt} ></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;