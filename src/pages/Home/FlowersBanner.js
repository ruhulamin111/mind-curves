import React from 'react'
import banner from '../../assets/aniversary/banner.jpg'
import cake from '../../assets/aniversary/cake.jpg'

const FlowersBanner = () => {

    return (
        <div className='flex gap-5 w-11/12 mx-auto'>
            <div className="card  object-cover w-full  image-full">
                <figure><img src={banner} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-5xl font-bold mb-5 leading-normal ">Flora <br /> Surprises</h2>
                    <p className='text-xl'>Never seen before collection</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-tiny bg-third hover:bg-queen-pink hover:text-third">Order now</button>
                    </div>
                </div>
            </div>
            <div className="card object-cover w-full  image-full">
                <figure><img src={cake} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-5xl font-bold mb-5 leading-normal ">Baked <br /> Love</h2>
                    <p className='text-xl '>Cakes for every occasions</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-tiny bg-third hover:bg-queen-pink   hover:text-third">Order now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FlowersBanner
