import React from 'react'
import '../Main/HomeStyle.css'
import gplus from '../../img/G.png'
import fb from '../../img/fb.png'
import lkIn from '../../img/ln.png'
import twt from '../../img/twt.png'
import metreImg from '../../img/metrefoot.jpg'
import footImg from '../../img/missionfoot.jpg'
import Header from '../Header/Header'


function Home() {
    return (
        <>
            <div className="main_container">
                {/* column of main page */}
                <div className="main_col">
                    <h1>DreamDrives</h1>
                    <h3>Modern Auto car delear group </h3>
                    <div className="col_list">
                        <ul>
                            <li>sales</li>
                            <li>test drives</li>
                            <li>online/offline support</li>
                            <li>6 month free services</li>
                            {/* <li>spport</li> */}
                        </ul>
                    </div>
                    <h3>Powered By:Luxe Regal</h3>
                </div>
                {/* row section main page */}
                <div className="main_row">
                    <div className="contact_row">
                        <div>
                            <p>dreamdrive@hotmail.com</p>
                            <p>+918086307460</p>
                        </div>
                        <div className='media'>
                            <a href="#"><img src={gplus} alt="img" /></a>
                            <a href="#"><img src={twt} alt="img" /></a>
                            <a href="#"><img src={lkIn} alt="img" /></a>
                            <a href="#"><img src={fb} alt="img" /></a>
                        </div>
                    </div>
                    <div className="theme_row">
                      <div className="themeTitle">
                          <h2>Accelerate Your Journey: Where Dreams Drive Home</h2>
                        <p>Unleash Your Drive, Discover Excellence at DreamDrives</p>
                      </div>
                    </div>
                    {/* header and navigation */}
                    <Header/>
                   
                    <div className="about_row">
                        <h2>Our Mission</h2>
                        <p>Our mission at DreamDrives is to exceed your expectations
                            by offering a wide selection of vehicles, personalized customer service,
                            and expert automotive advice.We aim to make your car buying journey enjoyable, transparent, and stress-free.</p>
                        <div className="aboutImg">
                            <div>
                                <img src={metreImg} alt="imgone" />
                            </div>
                            <div>
                                <img src={footImg} alt="imgtwo" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home