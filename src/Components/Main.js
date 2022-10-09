import React from 'react'
import skullBackground from '../Assets/humanBodies.MP4';

const Main = () => {
    return (
        <div className='main'>
            <div className='overlay'></div>
            <video src={skullBackground} autoPlay loop muted />
            <div className='content'>
                <h1>The World's Most Disturbing Tour</h1>
            </div>
        </div>
    )
}

export default Main
