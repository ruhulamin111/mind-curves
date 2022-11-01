import React from 'react'
import { Link } from 'react-router-dom';

const FlowerItem = ({ flower }) => {
    console.log('flower', flower)
    const { star, name, price, reviews, image11 } = flower;
    console.log('flower', flower);

    return (
        <div className='hover:border p-2 '>
            <Link to='/'>
                <div>
                    <img src={image11} alt="" />
                </div>
                <div className='py-3'>
                    <h1 className='text-md mt-3 font-semibold'>{name.slice(0, 26)}</h1>
                    <h1 className='text-sm font-semibold mt-3'>$ {price}</h1>
                    <h1 className='text-sm font-semibold mt-3'>Earliest Delivery: Today</h1>
                    <h1 className='mt-3'><span className='px-2 rounded-md bg-first text-white mr-3'>{star} star</span> <span className='font-semibold'>{reviews} Reviews</span></h1>
                </div>
            </Link>
        </div>
    )
}

export default FlowerItem
