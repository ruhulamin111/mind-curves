import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import flowers from '../../assets/products/flowers'
import FlowerItem from '../Flowers/FlowerItem'

const FlowersDemo = () => {
    const [flowersItem, setFlowersItem] = useState([])
    useEffect(() => {
        const filtered = flowers.filter(flower => flower.category === 'Flower'
        )
        setFlowersItem(filtered)
    }, [])

    return (
        <div className='w-11/12 mx-auto my-5 p-3 bg-white'>
            <div className='flex justify-between items-center '>
                <h1 className='text-2xl font-bold '>Beautiful Flowers</h1>
                <Link className='btn' to='/flowers'>View all</Link>
            </div>
            <div className="grid grid-cols-4 gap-5 my-5">
                {
                    flowersItem.slice(0, 4).map((flower, index) => <FlowerItem key={index} flower={flower} ></FlowerItem>
                    )
                }
            </div>
        </div>
    )
}

export default FlowersDemo
