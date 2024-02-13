import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoIosMenu, IoMdRefresh } from "react-icons/io";
import { CiLight } from "react-icons/ci";
import { IoLanguageOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

export default function NavBar() {
    const [showMenu, setShowMenu] = useState(false)

    return (
        <div>
            <div className='bg-blue-400 flex justify-between text-white p-3'>
                <div className='flex items-center'>
                    <IoMdRefresh className='text-4xl cursor-pointer mx-1 px-1' />
                    <CiLight className='text-4xl cursor-pointer mx-1 px-1' />
                    <span className='mx-1 px-1 cursor-default'>فارسی</span>
                    <IoLanguageOutline className='text-4xl cursor-pointer mx-1 px-1' />
                </div>
                <div className='flex items-center font-semibold'>
                    <span>لیست ثابت ها</span>
                    <IoIosMenu onClick={() => setShowMenu(true)} className='text-2xl cursor-pointer' />
                </div>

            </div>
            <div style={showMenu === false ? { transform: "translateX(100%)" } : { transform: "translateX(0%)" }} className='h-screen bg-slate-500 w-96 absolute right-0 top-0 duration-300 p-5 z-10'>
                <IoMdClose onClick={() => setShowMenu(false)} className='text-3xl cursor-pointer' />
                <div className='flex flex-col justify-center items-center'>
                    <Link className='m-1 p-1 text-xl' to={"/"}>Home</Link>
                    <Link className='m-1 p-1 text-xl' to={"/"}>Gallery</Link>
                    <Link className='m-1 p-1 text-xl' to={"/"}>Users</Link>
                    <Link className='m-1 p-1 text-xl' to={"/"}>About</Link>
                </div>
            </div>
            <div onClick={() => setShowMenu(false)} style={showMenu === false? {display:"none"} : {display: "block"}} className='fixed top-0 bottom-0 right-0 left-0 bg-[#0008]'></div>
        </div>
    )
}
