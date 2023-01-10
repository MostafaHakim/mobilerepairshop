import { Component } from "react";
import { Link } from 'react-router-dom'
import SidebarPopUpMenu from "./Sidebar/SidebarPopUpMenu";


class Sidebar extends Component{

    



    render(){
        return(
            <div className='w-full bg-white flex flex-col'>
        <h2 className='bg-emerald-500  border-b-2 border-b-emerald-700 text-2xl pr-4 py-2 pl-10 text-white font-semibold rounded-t-md'>Catagoris</h2>
        <div className='flex flex-col'>
            <Link className='group relative  py-2 text-lg text-gray-900 border-b-[1px] border-b-gray-200 hover:text-white hover:bg-emerald-900 px-4 pl-10 transition-all duration-500' to='/'>Apple
                <SidebarPopUpMenu />
            </Link>
            <Link className='group relative  py-2 text-lg text-gray-900 border-b-[1px] border-b-gray-200 hover:text-white hover:bg-emerald-900 px-4 pl-10 transition-all duration-500' to='/'>Samsung
                <SidebarPopUpMenu />
            </Link>
            <Link className='group relative  py-2 text-lg text-gray-900 border-b-[1px] border-b-gray-200 hover:text-white hover:bg-emerald-900 px-4 pl-10 transition-all duration-500' to='/'>Nokia
                <SidebarPopUpMenu />
            </Link>
            <Link className='group relative  py-2 text-lg text-gray-900 border-b-[1px] border-b-gray-200 hover:text-white hover:bg-emerald-900 px-4 pl-10 transition-all duration-500' to='/'>Vivo
                <SidebarPopUpMenu />
            </Link>
            <Link className='group relative  py-2 text-lg text-gray-900 border-b-[1px] border-b-gray-200 hover:text-white hover:bg-emerald-900 px-4 pl-10 transition-all duration-500' to='/'>Xiaomi
                <SidebarPopUpMenu />
            </Link>
            <Link className='group relative  py-2 text-lg text-gray-900 border-b-[1px] border-b-gray-200 hover:text-white hover:bg-emerald-900 px-4 pl-10 transition-all duration-500' to='/'>HTC
                <SidebarPopUpMenu />
            </Link>
            <Link className='group relative  py-2 text-lg text-gray-900 border-b-[1px] border-b-gray-200 hover:text-white hover:bg-emerald-900 px-4 pl-10 transition-all duration-500' to='/'>Haowai
                <SidebarPopUpMenu />
            </Link>
            <Link className='group relative  py-2 text-lg text-gray-900 border-b-[1px] border-b-gray-200 hover:text-white hover:bg-emerald-900 px-4 pl-10 transition-all duration-500' to='/'>Tecno
                <SidebarPopUpMenu />
            </Link>
            <Link className='group relative  py-2 text-lg text-gray-900 border-b-[1px] border-b-gray-200 hover:text-white hover:bg-emerald-900 px-4 pl-10 transition-all duration-500' to='/'>Marcel
                <SidebarPopUpMenu />
            </Link>
        </div>
    </div>
        )
    }
}


export default Sidebar