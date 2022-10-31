import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import React from 'react'

const CategorySelection = () => {
    return (
        <div className='grid grid-cols-4 w-9/12 mx-auto gap-5 my-10'>
            <div className='flex items-center gap-2'>
                <span className='text-xl font-bold'>Gift <br />Finder</span>
                <input type="text" class="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Search" />
            </div>
            <div className='flex items-center gap-2 justify-between rounded-md border p-2'>
                <span>
                    <h1>Hello</h1>
                    <p>Hi</p>
                </span>
                <span>
                    <ChevronRightIcon />
                </span>
            </div>
            <div className='flex items-center gap-2 justify-between rounded-md border p-2'>
                <span>
                    <h1>Hello</h1>
                    <p>Hi</p>
                </span>
                <span>
                    <ChevronRightIcon />
                </span>
            </div>
            <div className='flex items-center gap-2 justify-between rounded-md border p-2'>
                <span>
                    <h1>Hello</h1>
                    <p>Hi</p>
                </span>
                <span>
                    <ChevronRightIcon />
                </span>
            </div>

        </div>
    )
}

export default CategorySelection
