import React from 'react'

const FlowerItem = (flower) => {
    console.log('flower', flower)
    const { id, name, price, reviews, image101 } = flower;

    return (
        <div>
            <div>
                <img src={image101} alt="" />
            </div>
            <div>
                <h1>{name}</h1>
            </div>
        </div>
    )
}

export default FlowerItem
