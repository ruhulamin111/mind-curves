import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import React from 'react'

const CategorySelection = () => {
    return (
        <div className='grid grid-cols-4 w-10/12 mx-auto gap-3 my-10 bg-[#fff] p-5 rounded-md'>
            <div className='flex items-center gap-2'>
                <span className='text-2xl font-bold text-third'>Gift <br />Finder</span>
                <input type="text" class="p-5 w-full  text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Search" />
            </div>
            <div className='flex items-center gap-2 justify-between rounded-md border p-2'>
                <span>
                    <h1 className='text-xl font-bold'>Occasion</h1>
                    <p>Anniversary,Birthday</p>
                </span>
                <span>
                    <ChevronRightIcon />
                </span>
            </div>
            <div className='flex items-center gap-2 justify-between rounded-md border p-2'>
                <span>
                    <h1 className='text-xl font-bold'>Gift Type</h1>
                    <p>Flowers,All gifts</p>
                </span>
                <span>
                    <ChevronRightIcon />
                </span>
            </div>
            <button className='border rounded-md bg-third text-white'>
                Order now
            </button>

        </div>
    )
}

export default CategorySelection
