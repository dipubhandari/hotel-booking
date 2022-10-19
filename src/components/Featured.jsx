import React from 'react'
import "./Featured.css"
import image from "./feed-1.jpg"
import image1 from "./feed-2.jpg"
import image2 from "./feed-3.jpg"
import image3 from "./feed-4.jpg"
import image4 from "./feed-5.jpg"

const Featured = () => {
    return (
        <div className='featured'>
            <div className="featured_item  card1">
                <img src={image} alt="img-loading" className='featured-img' />
                <div className="featuredtitle">
                    <h1>Sumit</h1>
                    <h2>12 properties</h2>
                </div>
            </div>
            <div className="featured_item card2">
                <img src={image1} alt="img-loading" className='featured-img' />
                <div className="featuredtitle">
                    <h1>Sumit</h1>
                    <h2>12 properties</h2>
                </div>
            </div>
            <div className="featured_item card3">
                <img src={image2} alt="img-loading" className='featured-img' />
                <div className="featuredtitle">
                    <h1>Sumit</h1>
                    <h2>12 properties</h2>
                </div>
            </div>
            <div className="featured_item card4">
                <img src={image3} alt="img-loading" className='featured-img' />
                <div className="featuredtitle">
                    <h1>Sumit</h1>
                    <h2>12 properties</h2>
                </div>
            </div> <div className="featured_item card5">
                <img src={image4} alt="img-loading" className='featured-img' />
                <div className="featuredtitle">
                    <h1>Sumit</h1>
                    <h2>12 properties</h2>
                </div>
                
            </div>
            <div className="featured_item card5">
                <img src={image4} alt="img-loading" className='featured-img' />
                <div className="featuredtitle">
                    <h1>Sumit</h1>
                    <h2>12 properties</h2>
                </div>
                
            </div>
        </div>
    )
}

export default Featured