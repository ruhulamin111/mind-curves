import React from 'react'

const FlowerItem = ({ flower }) => {
    console.log('flower', flower)
    const { id, star, name, price, reviews, image101 } = flower;
    console.log('flower', flower);

    return (
        <div className='hover:border m-3 p-2 '>
            <div>
                <img src={image101} alt="" />
            </div>
            <div>
                <h1>{name}</h1>
                <h1>{price}</h1>
                <h1><span>{star}</span> <span>{reviews}</span></h1>
            </div>
        </div>
    )
}

export default FlowerItem
