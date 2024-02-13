import React, { useEffect, useState } from 'react'
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function Table() {
    const [users, setUsers] = useState("")
    const [numUsers, setNumUsers] = useState("")
    const [page, setPage] = useState(1)
    useEffect(() => {
        fetch(`https://www.melivecode.com/api/users?page=${page}&per_page=5`)
            .then((res) => res.json())
            .then((data) => {
                setUsers(data.data);
            })
        fetch(`https://www.melivecode.com/api/users`)
            .then((res) => res.json())
            .then((data) => {
                setNumUsers(data);
            })
    }, [page])

    const decreasePage = ()=>{
        if (page > 1) {
            setPage(page-1)
        }
    }
    const increasePage = ()=>{
        if (page < Math.ceil(numUsers.length / 5)) {
            setPage(page+1)
        }
    }

    return (
        <div>
            {
                users.length > 0 &&
                (
                    <>
                        <table id='table' className='border w-full border-black border-separate text-start'>
                            <thead>
                                <tr>
                                    <th>avatar</th>
                                    <th>email</th>
                                    <th>lname</th>
                                    <th>fname</th>
                                    <th>ID</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map((item) => (
                                        <tr key={item.id}>
                                            <td className='text-center my-3 flex justify-center'><img className='w-20' src={item.avatar} alt="" /></td>
                                            <td className='text-center my-3'>{item.username}</td>
                                            <td className='text-center my-3'>{item.lname}</td>
                                            <td className='text-center my-3'>{item.fname}</td>
                                            <td className='text-center my-3'>{item.id}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                        <div className='flex justify-center items-center'>
                            <MdOutlineKeyboardArrowLeft onClick={decreasePage} className='text-2xl cursor-pointer' />
                            {
                                new Array(Math.ceil(numUsers.length / 5)).fill().map((e, i) => (
                                    <div key={i}>
                                        <span onClick={()=> {
                                            setPage(i+1)
                                        }} className='p-2 m-2 rounded-full bg-slate-600 hover:bg-slate-400 duration-300 w-5 h-5 cursor-pointer flex justify-center items-center'>{i + 1}</span>
                                    </div>
                                ))
                            }
                            <MdOutlineKeyboardArrowRight onClick={increasePage} className='text-2xl cursor-pointer' />
                        </div>
                    </>
                )
            }
        </div>
    )
}
