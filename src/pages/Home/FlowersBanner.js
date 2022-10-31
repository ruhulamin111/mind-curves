import React from 'react'
import banner from '../../assets/aniversary/banner.jpg'
import cake from '../../assets/aniversary/cake.jpg'

const FlowersBanner = () => {

    return (
        <section>
            {/* first part  */}
            <div className='my-5'>
                <div className='flex gap-5 w-11/12 mx-auto'>
                    <div className="card w-full image-full">
                        <figure><img src={banner} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="text-4xl font-bold mb-5 leading-normal ">Flora <br /> Surprises</h2>
                            <p className='text-xl'>Never seen before collection</p>
                            <div className="card-actions justify-end">
                                <button className="btn bg-third hover:bg-queen-pink hover:text-third">Order now</button>
                            </div>
                        </div>
                    </div>
                    <div className="card object-cover w-full  image-full">
                        <figure><img src={cake} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-4xl font-bold mb-5 leading-normal ">Baked <br /> Love</h2>
                            <p className='text-xl '>Cakes for every occasions</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-tiny bg-third hover:bg-queen-pink   hover:text-third">Order now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* second part  */}
            <div className='my-5'>
                <div className='flex gap-5 w-11/12 mx-auto'>
                    <div class="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
                        <div class="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md" style={{ backgroundImage: `url(${cake})` }}>
                        </div>
                        <div class="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800" >
                            <h3 class="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">Happy Anniversary</h3>
                            <div class="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                                <span class="font-bold text-gray-800 dark:text-gray-200">Celebrate the day with enjoy</span>

                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
                        <div class="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md" style={{ backgroundImage: `url(${cake})` }}></div>
                        <div class="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800" >
                            <h3 class="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">Nike Revolt</h3>

                            <div class="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                                <span class="font-bold text-gray-800 dark:text-gray-200">$129</span>
                                <button class="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">Add to cart</button>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
                        <div class="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md" style={{ backgroundImage: `url(${cake})` }}></div>
                        <div class="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800" >
                            <h3 class="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">Nike Revolt</h3>

                            <div class="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                                <span class="font-bold text-gray-800 dark:text-gray-200">$129</span>
                                <button class="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">Add to cart</button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </section >
    )
}

export default FlowersBanner
