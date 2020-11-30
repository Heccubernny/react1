import React from 'react';
import './App.css';
import Header from './Header/Header';
import SideBar from './SideBar/SideBar';
import Feed from './Feed/Feed';
import Contact from './Contact/Contact';



import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';


function App() {
    return (
        // BEM naming covention
        <div className = "app" >


        <Header/>
        <div className="app__body">
        <SideBar/>
        <Feed />
        <Contact />     
        {/* <Widget/> */}
        </div>


        {
            // app body

            // sidebar
            // feed
            // widgets
        }

        </div>
    );
}

export default App;