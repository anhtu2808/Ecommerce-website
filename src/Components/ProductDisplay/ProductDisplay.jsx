import React from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'

const ProductDisplay = (props) => {
    const { product } = props;
    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <img className='productdisplay-main-img' src={product.image} alt="" />
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-stars">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">${product.old_price}</div>
                    <div className="productdisplay-right-price-new">${product.new_price}</div>
                </div>
                <div className="productdisplay-right-description">
                  A lightweight, usally knitted, pullover shir, close-fitting and with around neckline
                  and short sleeves, worn as an undershirt or outern garment 
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-sizes">
                        <div className="">S</div>
                        <div className="">M</div>
                        <div className="">L</div>
                        <div className="">XL</div>
                        <div className="">XXL</div>
                    </div>
                </div>
                <button>ADD TO CART</button>
                <p className='pruductdisplay-right-category'><span>Category:</span>Women, T-Shirt, Crop Top </p>
                <p className='pruductdisplay-right-category'><span>Category:</span>Modern, Latest </p>
        
            </div>
        </div>
    )
}

export default ProductDisplay