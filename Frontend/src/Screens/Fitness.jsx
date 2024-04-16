import React from 'react'
import Navbar from '../Components/Navbar'
import Excard from '../Components/Excard'
import b1 from '../Photos/beginner/b1.jpg'
import b2 from '../Photos/beginner/b2.jpg'
import b3 from '../Photos/beginner/b3.jpg'
import b4 from '../Photos/beginner/b4.jpg'
import m1 from '../Photos/mediate/m1.jpg'
import m2 from '../Photos/mediate/m2.jpg'
import m3 from '../Photos/mediate/m3.jpg'
import m4 from '../Photos/mediate/m4.jpg'
import m5 from '../Photos/mediate/m5.jpg'
import a1 from '../Photos/advance/a1.jpg'
import a2 from '../Photos/advance/a2.jpg'
import a3 from '../Photos/advance/a3.jpg'
import a4 from '../Photos/advance/a4.jpg'
import a5 from '../Photos/advance/a5.jpg'
import a6 from '../Photos/advance/a6.jpg'
import { useNavigate } from "react-router-dom"

export default function Fitness() {
    let navigate = useNavigate()

    const handleclick = (day, level) => {
        navigate('/workout', { state: [day, level] })
    }

    return (
        <div className='fitness'>
            <Navbar /> <hr className="m-0" />
            <p className='d-block text-danger m-0 p-0'>* Have rest on the skipped days and do normal stretching.</p>
            <div className="beg px-0 mt-0   ">
                <h2 className='d-block w-100 bg bg-white m-0'>Beginner</h2>
                {/* <hr className='my-1' /> */}
                <div className="beginner d-flex w-75 flex-row flex-wrap justify-content-around mx-auto">
                    <Excard day={"Monday"} image={b1} onClick={() => handleclick("day01", "Beginner_Level")} />
                    <Excard day={"Tuesday"} image={b2} onClick={() => handleclick("day02", "Beginner_Level")} />
                    <Excard day={"Thursday"} image={b3} onClick={() => handleclick("day04", "Beginner_Level")} />
                    <Excard day={"Friday"} image={b4} onClick={() => handleclick("day05", "Beginner_Level")} />
                </div>
            </div>
            <div className="mid mt-3">
                <h2 className='d-block w-100 bg bg-white m-0'>Intermediate</h2>
                {/* <hr className='my-1' /> */}
                <div className="intermediate d-flex w-75 flex-row flex-wrap justify-content-around mx-auto">

                    <Excard day={1} image={m1} onClick={() => handleclick("day01", "Intermediate_Level")} />
                    <Excard day={2} image={m2} onClick={() => handleclick("day02", "Intermediate_Level")} />
                    <Excard day={3} image={m3} onClick={() => handleclick("day03", "Intermediate_Level")} />
                    <Excard day={4} image={m4} onClick={() => handleclick("day04", "Intermediate_Level")} />
                    <Excard day={5} image={m5} onClick={() => handleclick("day05", "Intermediate_Level")} />

                </div>
            </div>
            <div className="adv mt-3">
                <h2 className='d-block w-100 bg bg-white m-0'>Advance</h2>
                {/* <hr className='my-1' /> */}
                <div className="advance d-flex w-75 flex-row flex-wrap justify-content-around mx-auto">
                    <Excard day={1} image={a1} />
                    <Excard day={2} image={a2} />
                    <Excard day={3} image={a3} />
                    <Excard day={4} image={a4} />
                    <Excard day={5} image={a5} />
                    <Excard day={6} image={a6} />
                </div>
            </div>
        </div>
    )
}
