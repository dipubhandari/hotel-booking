import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import "./Home.css"
import Header from '../components/Header/Header'
import Featured from '../components/Featured'
import Specialroom from '../components/Specialroom'

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <div className="homeContainer">
                <Featured />
                < Specialroom />
            </div>
        </div>
    )
}

export default Home