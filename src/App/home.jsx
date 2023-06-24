import React from "react";
import SearchBar from './searchbar'

import Suggest from './suggest'
import logo from '../Images/logo.png'

import './style.css'

function Home() {
    
    return (
       
        <main className="container">
            <div className="weather">
                <div className="header">
                    {/* <h1 className="app-name">Weather App</h1> */}
                    <img className="header__logo" src={logo} alt="" />
                </div>
                <SearchBar key={'search'}/>
                
                <Suggest key={'suggest'}/>
                
            </div>
        </main>
    )
}

export default Home