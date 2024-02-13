import React from 'react'
import { Link } from 'react-router-dom'

export default function Dashboard() {
  return (
    <div>
      <div className='flex flex-col items-center border-l border-black h-screen'>
        <Link className='m-1 p-1 text-xl' to={"/"}>Home</Link>
        <Link className='m-1 p-1 text-xl' to={"/"}>Gallery</Link>
        <Link className='m-1 p-1 text-xl' to={"/"}>Users</Link>
        <Link className='m-1 p-1 text-xl' to={"/"}>About</Link>
      </div>
    </div>
  )
}
