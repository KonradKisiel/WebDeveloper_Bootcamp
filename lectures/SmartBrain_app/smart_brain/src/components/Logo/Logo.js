import React from 'react'
import Tilt from 'react-tilt'
import './Logo.css'
import brain from './brain.png'

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max: 55 }} style={{ height: 200, width: 200 }} >
                <div className="Tilt-inner pa3"><img style={{paddingTop: '30px'}} src={brain} alt='logo'></img></div>
            </Tilt>
        </div>
    );
}

export default Logo