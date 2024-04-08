import React from 'react';
import './Product.css'

const Product = (props) => {
    // const {handleAddToCart} = props.product;
    const { name, img, price, ratings, seller } = props.product;
    
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Ratings: {ratings} starts</small></p>
            </div>
            <button onClick={() =>props.handleAddToCart(props.product)} className='btn-cart'>
                <p>Add To Cart</p>
            </button>
        </div>
    );
};

export default Product;