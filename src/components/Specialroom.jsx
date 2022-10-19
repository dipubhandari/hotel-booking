import { Star } from '@material-ui/icons'
import SR from './Specialdata'
import React from 'react'
import './SR.css'
import "./special_rooms.css"
import { ArrowBack, ArrowForward } from '@material-ui/icons'
import { useState } from 'react'

const Specialroom = () => {
    const [arrowTrack, setArrowTrack] = useState([1, 2])
    console.log(SR)
    return (
        <div className='sr'>
            <h1 className='a'>Special Rooms</h1>
            <div className="special_rooms">

                <ArrowBack className='arrow' />
                {SR.map((e) => {

                    return <div className="item">
                        <img src={e.img} alt="" />
                        <p className='desc'>{e.description}</p>
                        <h6 className='price'>Starting NPR {e.price} </h6>
                        <span className="item_footer">Rating:<Star className='star' /></span>
                    </div>
                })}
                <ArrowForward className='arrow' />
            </div>
        </div>
    )
}

export default Specialroom