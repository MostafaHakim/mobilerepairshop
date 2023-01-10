import React from 'react'
import Sidebar from '../components/Sidebar'
import Slider from '../components/slider/Slider'


const Home = () => {
  return (
    <div className='p-4'>
        <div className='grid grid-cols-6 gap-2'>
            <div className='col-span-1 p-4 rounded-md shadow-xl'>
                <Sidebar />
            </div>
            <div className='col-span-5'>
                <Slider />
            </div>
        </div>
        <div></div>
        <div></div>
    </div>
  )
}

export default Home