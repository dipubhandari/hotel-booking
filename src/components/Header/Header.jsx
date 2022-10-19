import React from 'react'
import "./Header.css"
import { Search, PlaceTwoTone, Flight, ArrowBackIosOutlined, OfflineBoltRounded, AccessAlarmsRounded, CalendarTodayOutlined, Person, Place } from "@material-ui/icons"

const Header = () => {
    return (
        <>
            <div className="header">
                <div className="headercontainer">
                    <div className="headerList active">
                        <div className="header_List_Items"><PlaceTwoTone /></div>
                        <span>Stays</span>
                    </div>
                    <div className="headerList">
                        <div className="header_List_Items"><Flight /></div>
                        <span>Flights</span>
                    </div>  <div className="headerList">
                        <div className="header_List_Items"><AccessAlarmsRounded /></div>
                        <span>Car Rentals</span>
                    </div>  <div className="headerList">
                        <div className="header_List_Items"><ArrowBackIosOutlined /></div>
                        <span>Flights</span>
                    </div>
                    <div className="headerList">
                        <div className="header_List_Items"><OfflineBoltRounded /></div>
                        <span>Center</span>
                    </div>
                    {/* <div className="headerList">
                    <div className="header_List_Items">< /></div>
                    <span>Center</span>
                </div> */}

                </div>
                <div className="header_slogan">A lifetime of discounts ? Its's Genius</div>
                <p className="header_para">Get rewarded for your travels-unlock instant saving of 10% or more with free BhanadariBokking Account</p>
                <div className="headerBtn"><button className="headerBtn">Sign-in/Register</button></div>

            </div>
            <div className="searc_Header">
                <div className="header_Search_Item">
                    <Place />
                    <input type="text" placeholder='Where are you going' className='header_search_input' />
                </div>
                <div className="header_Search_Item">
                    <CalendarTodayOutlined />
                    <span className="headersearchdata">
                        Day to Day
                    </span>
                </div>
                <div className="header_Search_Item">
                    <Person />
                    <span className="headersearchdata">
                        Adult
                    </span>
                </div>
                <button className='searchbutton'>Search</button>
            </div>
        </>
    )
}

export default Header