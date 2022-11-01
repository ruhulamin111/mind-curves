import React from 'react'
import img from '../../assets/flowers/image101.jpg'

const CommonBanner = ({ image, title }) => {
    return (
        <div className='h-60 flex items-center p-10 object-cover ' style={{ backgroundImage: `url(${image ? image : img})` }}>
            <h1 className='text-3xl font-bold'>{title ? title : 'Happy Occusions'}</h1>
        </div>
    )
}

export default CommonBanner
