import React from 'react'
import '../Footer/Footer.css'
import gplus from '../../img/G.png'
import fb from '../../img/fb.png'
import lkIn from '../../img/ln.png'
import twt from '../../img/twt.png'

function Footer() {
    return (
        <>
            <div className="contact_footer">
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
        </>
    )
}

export default Footer