import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import flowers from '../../assets/products/flowers'
import CommonBanner from '../Home/CommonBanner'
import FlowerItem from './FlowerItem'

const Flowers = () => {
    const [flowersItem, setFlowersItem] = useState([])
    useEffect(() => {
        const filtered = flowers.filter(flower => flower.category === 'Flower'
        )
        setFlowersItem(filtered)
    }, [])


    return (
        <div >
            <CommonBanner />
            <div className='bg-queen-pink pt-6'>
                <div className="w-11/12 mx-auto flex gap-5 text-xl font-bold my-2">
                    <Link to='/'><h1>All Gifts</h1></Link>
                    <Link to='/'><h1>Cool Gift</h1></Link>
                    <Link to='/'><h1>Smoothy Gift</h1></Link>
                </div>
                <div className="w-11/12 mx-auto grid grid-cols-4 gap-5">
                    {
                        flowersItem.map((flower, index) => <FlowerItem key={index} flower={flower} />
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Flowers
