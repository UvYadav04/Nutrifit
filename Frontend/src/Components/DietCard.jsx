import React, { useEffect, useState } from 'react'

export default function DietCard({ mineral, image }) {
    const [data, setdata] = useState([])
    const [info, setinfo] = useState({})
    const [pic, setpic] = useState("")
    const [enable, makeenable] = useState(false)
    const [images, setimages] = useState([])
    const getresult = async () => {
        const data = await fetch("http://localhost:8080/diet/getdata", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ mineral })
        })

        const json = await data.json()
        // console.log(json)
        if (json.success) {
            setdata(json.data)
            setimages(json.images)
        }
    }

    useEffect(() => {
        getresult()
    }, [])
    return (
        <div className="dietbox  mb-3 position-relative bg bg-dark" >
            <div className="position-absolute center d-flex justify-content-center align-items-center">
                <img src={images[0]} width={200} height={200} style={{ borderRadius: 500 }} alt="" />
            </div>
            <div className="position-absolute bg bg-transparent name d-flex justify-content-center text-white align-items-center">
                <img src={image} className='w-100' alt="" />
            </div>
            <div className="position-absolute minname text-white bottom-0 ">
                <h1 className='top opacity-50 ms-3'>{mineral}</h1>
            </div>
            <div className={enable ? "center d-flex flex-row position-absolute justify-content-center align-items-center" : "d-none"}>
                <div className="info3 d-flex justify-content-around align-items-center">
                    <div className="image p-3">
                        <img src={pic} width={200} height={200} style={{ borderRadius: 500 }} alt="" />
                    </div>
                    <div className="info2  p-4 position-relative">
                        <button className='position-absolute top-0 end-0' onClick={() => makeenable(false)}>close</button>
                        <h2 className='heads'>{info.Name}</h2>
                        <h4 className='heads'>Consumption: <h6 className='d-inline'>{info.Consumption}</h6></h4>
                        <h5 className='heads'>Avoid : <h6 className='d-inline'>{info.Allergic}</h6></h5>
                        <h5 className='heads'>Overdose : {
                            info.Overdose ? <h6 className='d-inline'>{Object.values(info.Overdose)[0] === "" ? Object.values(info.Overdose)[0] : <h6 className='d-inline'>No side effects of doses</h6>}</h6>
                                : null
                        } </h5>
                    </div>
                </div>
            </div>
            <div className="slide container w-100  d-flex align-items-center flex-column justify-content-center gap-4">
                <div className="row justify-content-around  px-5 pb-0  w-100">
                    <div className="col-3 one  bg-danger p-0" onClick={() => {

                        setinfo(data[0])
                        setpic(images[0])
                        makeenable(true)
                    }}  >
                        <img src={images[0]} width={120} height={120} alt="" onClick={() => {

                            setinfo(data[0])
                            setpic(images[0])
                            makeenable(true)
                        }} />
                    </div>
                    <div className="col-3 one two  bg-danger p-0" onClick={() => {

                        setinfo(data[1])
                        setpic(images[1])
                        makeenable(true)
                    }} >
                        <img src={images[1]} width={120} height={120} alt="" onClick={() => {

                            setinfo(data[0])
                            setpic(images[0])
                            makeenable(true)
                        }} />
                    </div>
                    <div className="col-3 one  bg-danger p-0" onClick={() => {
                        setinfo(data[2])
                        setpic(images[2])
                        makeenable(true)
                    }}   >
                        <img src={images[2]} width={120} height={120} alt="" />
                    </div>

                </div>
                <div className="row justify-content-between  w-100">
                    <div className="col-3 one  bg-danger p-0" onClick={() => {

                        setinfo(data[3])
                        setpic(images[3])
                        makeenable(true)
                    }}    >
                        <img src={images[3]} width={120} height={120} alt="" />
                    </div>  <div className="col-3 one  bg-danger p-0" onClick={() => {

                        setinfo(data[4])
                        setpic(images[4])
                        makeenable(true)
                    }}    >
                        <img src={images[4]} width={120} height={120} alt="" />
                    </div>

                </div>
                <div className="row justify-content-between w-100">
                    <div className="col-3 one  bg-danger p-0" onClick={() => {
                        setinfo(data[5])
                        setpic(images[5])
                        makeenable(true)
                    }}  >
                        <img src={images[5]} width={120} height={120} alt="" />
                    </div>  <div className="col-3 one  bg-danger p-0" onClick={() => {
                        setinfo(data[6])
                        setpic(images[6])
                        makeenable(true)
                    }}  >
                        <img src={images[6]} width={120} height={120} alt="" />
                    </div>
                </div>
                <div className="row justify-content-around px-5  w-100">
                    <div className="col-3 one  bg-danger p-0" onClick={() => {

                        setinfo(data[7])
                        setpic(images[7])
                        makeenable(true)
                    }}  >
                        <img src={images[7]} width={120} height={120} alt="" />
                    </div>
                    <div className="col-3 one last  bg-danger p-0" onClick={() => {

                        setinfo(data[8])
                        setpic(images[8])
                        makeenable(true)
                    }}  >
                        <img src={images[8]} width={120} height={120} alt="" />
                    </div>
                    <div className="col-3 one  bg-danger p-0" onClick={() => {

                        setinfo(data[9])
                        setpic(images[9])
                        makeenable(true)
                    }}    >
                        <img src={images[9]} width={120} height={120} alt="" />
                    </div>
                </div>
            </div>
        </div >
    )
}
