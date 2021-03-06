import React from 'react'
import Tilt from 'react-tilt'
import './Logo.css'
import hal from './HAL9000.svg'


const Logo = () => {
    return (
        <div className='logo'>
            <Tilt className="Tilt" options={{ max: -40 }} style={{ height: 80, width: 80 }} >
                <div className="Tilt-inner pa3"><img className="shadow-2" style={{borderRadius: 100}} src={hal} alt='logo'></img></div>
            </Tilt>
        </div>
    );
}

export default Logo