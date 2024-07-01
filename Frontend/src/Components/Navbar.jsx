import React, { useState } from 'react'
import logo from '../photos2/logo2.png'
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar() {
    let navigate = useNavigate()
    const [ON, setON] = useState(false)

    return (
        <>
            <div class="navbar d-flex flex-row justify-content-between align-items-center py-2 px-0 bg bg-transparent">
                <div class="logo my-auto">
                    {/* <img src={logo} width={40} height={40} alt="Health Care Logo" /> */}
                    <h5 className='my-auto mx-2'>NUTRIFIT</h5>
                </div>
                <ul className='my-auto ms-5 d-md-inline d-none'>
                    <li className='d-inline mx-3' ><Link to='/home' className=' text-success fs-6'>home</Link></li>
                    <li className='d-inline mx-3' ><Link to='/treatment' className=' text-black fs-6'>treatment</Link></li>
                    <li className='d-inline mx-3' ><Link to='/home' className=' text-black fs-6'>consult</Link></li>
                    <li className='d-inline mx-3' ><Link to='/dietsection' className=' text-black fs-6'>diet</Link></li>
                    <li className='d-inline mx-3' ><Link to='/fitness' className=' text-black fs-6'>Fitness</Link></li>
                </ul>
                <div class="user-profile me-3 pt-1 d-md-inline d-none">
                    <h5 onClick={() => {
                        localStorage.removeItem("token")
                        localStorage.removeItem("username")
                        navigate('/auth')
                    }} className=' d-inline text-danger bg bg-transparent my-auto mx-3 fs-6'>log Out</h5>
                    {/* <img src={logo} width={30} height={30} alt="User Profile" /> */}
                </div>


                <div className="w-25 pe-3 text-end d-md-none d-inline p-0 fs-3 menubar position-relative m-0 ">
                    <button className='m-0 p-0 w-auto  text-white bg bg-transparent' onClick={() => setON(!ON)}>|||</button>
                    <div className={ON ? "bar position-absolute text-start opacity-100 show  w-100" : "bar position-absolute   text-start hidden "}>
                        <ul className=' ps-2'>
                            <li className=' list-style-none p-0 home '>
                                <a href='/home' className='fs-6 text-decoration-none  m-0' style={{ color: '#4E9CD5' }}>HOME</a>
                            </li>
                            <li className=' list-style-none p-0'>
                                <a href='/treatment' className='fs-6 text-decoration-none text-white  m-0' >Treatement</a>
                            </li>

                            <li className=' list-style-none p-0'>
                                <a href='/home' className='fs-6 text-decoration-none text-white  m-0' >Consult</a>
                            </li>
                            <li className=' list-style-none p-0'>
                                <a href='/dietsection' className='fs-6 text-decoration-none text-white  m-0' >Diet</a>
                            </li>
                            <li className=' list-style-none p-0'>
                                <a href='/' onClick={() => {
                                    localStorage.removeItem("token")
                                    localStorage.removeItem("username")
                                    navigate('/auth')
                                }} className='fs-6 rounded-1 text-decoration-none text-danger'>Logout</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div >

        </>
    )
}