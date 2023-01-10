import {AiFillInstagram, AiOutlineTwitter, AiOutlineGooglePlus} from 'react-icons/ai'
import {FaFacebookF, FaVimeoV} from 'react-icons/fa'
import {FiPhoneCall} from 'react-icons/fi'
import {HiOutlineEnvelope} from 'react-icons/hi2'
import { Link } from 'react-router-dom'

const Top = () => {
  return (
   <div className="bg-emerald-700 py-1">
        <div className='container mx-auto flex flex-row items-center justify-between'>
            <div className='flex flex-row space-x-4'>
                <div className='text-white flex flex-row space-x-4 items-center justify-center'>
                    <span><FiPhoneCall /></span>
                    <span>+8801722440899</span>
                </div>
                <div className='text-white flex flex-row space-x-4 items-center justify-center'>
                    <span><HiOutlineEnvelope /></span>
                    <span>suport@hdbd.com</span>
                </div>
            </div>
            <div className='flex flex-row text-white space-x-2'>
                <Link className='hover:bg-emerald-900 p-2 rounded-full transition duration-700' to='/'><FaFacebookF /></Link>
                <Link className='hover:bg-emerald-900 p-2 rounded-full transition duration-700' to='/'><AiFillInstagram /></Link>
                <Link className='hover:bg-emerald-900 p-2 rounded-full transition duration-700' to='/'><AiOutlineTwitter /></Link>
                <Link className='hover:bg-emerald-900 p-2 rounded-full transition duration-700' to='/'><FaVimeoV /></Link>
                <Link className='hover:bg-emerald-900 p-2 rounded-full transition duration-700' to='/'><AiOutlineGooglePlus /></Link>
            </div>
        </div>
   </div>
  )
}

export default Top