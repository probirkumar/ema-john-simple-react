import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    // console.log(cart)

    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);

    useEffect( ()=>{
        const storedCart = getShoppingCart();
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id ===id)
            console.log(addedProduct)
        }
    }, ([]));

    const handleAddToCart = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id)
        // console.log('clicked the button', product, newCart)
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product 
                        key= {product.id}
                        product = {product}
                        handleAddToCart = {handleAddToCart}
                        ></Product>)
                }
            </div>
            <div className="order-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;