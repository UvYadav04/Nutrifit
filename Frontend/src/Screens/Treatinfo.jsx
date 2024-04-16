import React from 'react'
import Navbar from '../Components/Navbar'
import Diseasecard from '../Components/Diseasecard'
import { useLocation } from 'react-router-dom'

export default function Treatinfo() {
    let location = useLocation()
    let data = location.state
    return (
        <>
            <Navbar />
            <div className="w-75 mx-auto mt-5 info d-flex justify-content-row">
                <div className="w-auto image">
                    <Diseasecard name={data.Name} from="info" />
                </div>
                <div className="infor w-75 ps-2 bg bg-white d-flex flex-column justify-content-between">
                    <h3> {data.Name.toUpperCase()}</h3>
                    <h5 className='d-inline'>Symptoms : </h5> <ul className="d-inline p-0">
                        {data.Symptoms.map((item, i) => <li className='d-inline'><span className={i === 0 ? "d-none" : "comma"}>, </span>{item}</li>)}
                    </ul>
                    <h5 className='d-inline'>Homopathy : </h5> <ul className="d-inline p-0">
                        {data.Homopathy.map((item, i) => <li className='d-inline'><span className={i === 0 ? "d-none" : "comma"}>, </span>{item}</li>)}
                    </ul>
                    <h5 className='d-inline'>Allopathy : </h5> <ul className="d-inline p-0">
                        {data.Allopathy.map((item, i) => <li className='d-inline    '><span className={i === 0 ? "d-none" : "comma"}>, </span>{item}</li>)}
                    </ul>

                </div>
            </div>
        </>
    )
}
