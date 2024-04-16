import React from 'react'
import Navbar from '../Components/Navbar'
import fruits from '../photos2/fruits1.jpg'
import doctor from '../photos2/doctor3.png'
import fruits2 from '../Photos/fruits.jpg'
import Footer from '../Components/Footer'
import gym from '../Photos/gym2.jpg'
import adv from '../Photos/adv.jpg'
import int from '../Photos/int2.jpg'
import beg from '../Photos/beg2.jpg'
import { Link, useNavigate } from 'react-router-dom'

export default function Homepage() {

    let navigate = useNavigate()
    return (
        <>
            <Navbar />

            <div class="image-text w-100 d-flex justify-content-start align-items-center mt-0 mb-4 text-white">
                <div class="text2">
                    <h1 className='m-0 mb-2 p-0'><span className="text-success">Health</span> is Wealth</h1>
                    <p>Health care is not just about curing the body, it's about healing the soul.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sint non perspiciatis quos consequuntur autem reprehenderit ullam maxime vitae dignissimos. Quibusdam repellat ut nesciunt! Optio quidem nemo blanditiis nulla ipsum?</p>
                    <button className='rounded-2 w-25' onClick={() => navigate('/dietsection')}>Get Started</button>
                </div>
                {/* <img src={fruits2} alt="Doctors" class="full-image" /> */}
            </div>


            <div className="doctors text-black d-flex justify-content-start ">
                <div className="text w-50 ps-5 text-start h-75 my-auto  ">
                    <h1 className='m-0 mb-2 p-0'><span className="text-danger">Appoint</span> best doctors throughout the world</h1>
                    <p className='w-100 m-0 ms-1 p-0'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates amet deserunt non velit iure explicabo hic expedita perferendis? Eaque maiores similique alias expedita adipisci eius, sed iusto reiciendis explicabo. Modi.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus et reprehenderit sit voluptate, corrupti iure aut sequi nostrum esse, maxime impedit quaerat eum provident? Unde minus veritatis delectus maxime repellat!</p>
                </div>

                <div className="image text-end w-50">
                    <img src={doctor} className='w-100 mx-auto h-100' alt="" />
                </div>
            </div>
            <div className="fit text-white mb-0 position-relative d-flex flex-column justify-content-start">
                <img src={gym} className='position-absolute h-100 w-100 boy' alt="" />
                <h1 className='w-75 ms-5 text-start mt-5'>Listen to your body...</h1>
                <h6 className='w-75 ms-5 mb-5'>Give a shape to your body with our workout plan</h6>
                <div className="mb-4 w-100 d-flex flex-row justify-content-around align-items-center text-white">

                    <img src={beg} height={250} className="rounded-3" onClick={() => navigate('/fitness')} width={270} alt="" />
                    <img src={int} height={250} className="rounded-3" onClick={() => navigate('/fitness')} width={270} alt="" />
                    <img src={adv} height={250} className="rounded-3" onClick={() => navigate('/fitness')} width={270} alt="" />
                </div>
            </div>

            <div className="fruits bg bg-dark text-white d-flex justify-content-start mt-0">
                <div className="image w-50">
                    <img src={fruits} className='w-100 h-100' alt="" />
                </div>
                <div className="text w-50 ps-5 text-start h-50 my-auto  ">
                    <h1 className='m-0 mb-2 p-0' onClick={() => navigate('/dietsection')}><span className="text-success">Elevate</span> your plate</h1>
                    <p className='w-75 m-0 ms-1 p-0'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates amet deserunt non velit iure explicabo hic expedita perferendis? Eaque maiores similique alias expedita adipisci eius, sed iusto reiciendis explicabo. Modi.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus et reprehenderit sit voluptate, corrupti iure aut sequi nostrum esse, maxime impedit quaerat eum provident? Unde minus veritatis delectus maxime repellat!</p>
                </div>
            </div>
            <Footer />
        </>
    )
}
