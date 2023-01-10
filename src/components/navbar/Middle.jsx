import {BsSearch, BsCart4} from 'react-icons/bs'
import { NavLink, Link } from 'react-router-dom'

const Middle = () => {
  return (
      <div className='bg-emerald-600'>
          <div className='container mx-auto flex flex-row justify-between items-center'>
              <div className=''>
                <h1 className="text-white font-lobster text-3xl py-2">HDBD</h1>
              </div>
              <div className='flex flex-row items-center '>
                  <input className='w-[350px] py-2 focus:outline-none rounded-l-md px-2' placeholder='Search...' type="text" />
                  <span className='px-4 py-3 rounded-r-md bg-orange-400'><BsSearch/></span>
              </div>
              <div className='flex flex-row space-x-4'>
                  <div className='flex flex-row space-x-2'>
                    <NavLink className='px-3 py-2 text-xl rounded-md transition duration-700 hover:bg-emerald-800 text-white' to='/' >Home</NavLink>
                    <NavLink className='px-3 py-2 text-xl rounded-md transition duration-700 hover:bg-emerald-800 text-white' to="service" >Service</NavLink>
                    <NavLink className='px-3 py-2 text-xl rounded-md transition duration-700 hover:bg-emerald-800 text-white' to="components" >Components</NavLink>
                  </div>
                  <div className='mt-1'>
                    <Link to='cart'>         
                        <div className='px-3 py-2 text-3xl text-white hover:text-orange-500 transition duration-700 relative'><BsCart4 />
                        <span className='bg-red-600 text-white absolute top-0 right-0 px-2 rounded-full text-sm'>2</span>
                      </div>
                    </Link>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Middle