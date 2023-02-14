import React from 'react'
import VideoBG from '../videos/chocolates.mp4'

const Main =() => {
    return (
        <div className='main'>
            <video src={VideoBG} autoPlay loop />
        </div>
    )
           
}

export default Main