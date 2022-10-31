import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import React from 'react'

const CategorySelection = () => {
    return (
        <div className='grid grid-cols-4 w-10/12 mx-auto gap-3 my-10 bg-[#fff] p-5 rounded-md'>
            <div className='flex items-center gap-2'>
                <span className='text-2xl font-bold text-third'>Gift <br />Finder</span>
                <input type="text" class="p-5 w-full  text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Search" />
            </div>
            <label htmlFor='occusions' className='flex items-center gap-2 justify-between rounded-md border p-2 cursor-pointer'>
                <span>
                    <h1 className='text-xl font-bold'>Occasion</h1>
                    <p>Anniversary,Birthday</p>
                </span>
                <sapan>
                    <ChevronRightIcon />
                    {/* <label  className="btn">open modal</label> */}

                </sapan>
            </label>
            <label htmlFor='gift-type' className='flex items-center gap-2 justify-between rounded-md border p-2 cursor-pointer'>
                <span>
                    <h1 className='text-xl font-bold'>Gift Type</h1>
                    <p>Flowers,All gifts</p>
                </span>
                <span>
                    <ChevronRightIcon />
                </span>
            </label>
            <button className='border rounded-md bg-third text-white'>
                Order now
            </button>
            {/* modal part for occasions  */}
            <input type="checkbox" id="occusions" className="modal-toggle" />
            <label htmlFor="occusions" className="modal cursor-pointer">
                <label className="modal-box relative" for="">
                    <option value="Anniversary">Anniversary</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Congratulations">Congratulations</option>
                    <option value="Wishes">Wishes</option>
                </label>
            </label>
            {/* modal part for type */}
            <input type="checkbox" id="gift-type" className="modal-toggle" />
            <label htmlFor="gift-type" className="modal cursor-pointer">
                <label className="modal-box relative" for="">
                    <option value="Flowers">Flowers</option>
                    <option value="Craft">Craft</option>
                    <option value="Cake">Cake</option>
                    <option value="All Gift">All Gift</option>
                </label>
            </label>
        </div>
    )
}

export default CategorySelection
