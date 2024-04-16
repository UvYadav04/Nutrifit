import React from 'react'
import logo from '../photos2/logo2.png'
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar() {
    let navigate = useNavigate()
    return (
        <>
            <div class="navbar d-flex flex-row justify-content-between align-items-center py-2 bg bg-transparent">
                <div class="logo my-auto">
                    {/* <img src={logo} width={40} height={40} alt="Health Care Logo" /> */}
                    <h5 className='my-auto mx-2'>NUTRIFIT</h5>
                </div>
                <ul className='my-auto ms-5'>
                    <li className='d-inline mx-3' ><Link to='/home' className=' text-success fs-6'>home</Link></li>
                    <li className='d-inline mx-3' ><Link to='/treatment' className=' text-black fs-6'>treatment</Link></li>
                    <li className='d-inline mx-3' ><Link to='/home' className=' text-black fs-6'>consult</Link></li>
                    <li className='d-inline mx-3' ><Link to='/dietsection' className=' text-black fs-6'>diet</Link></li>
                    <li className='d-inline mx-3' ><Link to='/fitness' className=' text-black fs-6'>Fitness</Link></li>
                </ul>
                <div class="user-profile me-3 pt-1">
                    <h5 onClick={() => {
                        localStorage.removeItem("token")
                        localStorage.removeItem("username")
                        navigate('/auth')
                    }} className=' d-inline text-danger bg bg-transparent my-auto mx-3 fs-6'>log Out</h5>
                    {/* <img src={logo} width={30} height={30} alt="User Profile" /> */}
                </div>
            </div >


        </>
    )
}