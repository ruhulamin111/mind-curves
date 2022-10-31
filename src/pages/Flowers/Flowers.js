import React, { useEffect, useState } from 'react'
import flowers from '../../assets/products/flowers'
import FlowerItem from './FlowerItem'

const Flowers = () => {
    const [flowersItem, setFlowersItem] = useState([])

    useEffect(() => {
        const data = flowers.filter(flower => flower.category === 'Flower'
        )
        setFlowersItem(data)
    }, [])


    return (
        <div >
            <h1>hello</h1>
            <div className="grid grid-cols-4 gap-5">
                {
                    flowersItem.map((flower, index) => {
                        <FlowerItem key={index} flower={flower} ></FlowerItem>
                    })
                }
            </div>

        </div>
    )
}

export default Flowers
