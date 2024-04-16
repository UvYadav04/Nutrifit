import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import { useLocation } from "react-router-dom"
export default function Workout() {
    let location = useLocation()
    const [data, setdata] = useState([])

    const getdata = async (state) => {
        console.log(state)
        let day = state[0], level = state[1]
        const response = await fetch("http://localhost:8080/workout/getdata", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ day, level })

        })
        const json = await response.json()
        if (json.success) {
            console.log(json)
            setdata(json.data)
        }
    }

    const findimage = (id) => {
        let state = location.state
        // let image = require(`../workout_data/Nutrifit/Intermediate_Level/day01/images/Chest.jpg`)
        let image = require(`../workout_data/Nutrifit/${state[1]}/${state[0]}/images/${id}`)
        return image
    }
    const findgif = (id) => {
        let state = location.state
        console.log(state)
        // let image = require(`../workout_data/Nutrifit/Intermediate_Level/day01/gifs/Dumbbell-Row.gif`)
        let image = require(`../workout_data/Nutrifit/${state[1]}/${state[0]}/gifs/${id}.gif`)
        return image
    }

    useEffect(() => {
        let state = location.state
        console.log(state)
        getdata(state)
    }, [])
    return (
        <div className="workout bg bg-white w-100">
            <Navbar />
            <div className="container-fluid mt-4 p-0 w-100 ">
                <div className="row w-100 p-0">
                    <div className=" gymrow row w-100 p-0 border-bottom">
                        <div className="col-2 text-center fs-3 text-primary f3 py-2">Exercise</div>
                        <div className="col-2 text-center fs-3 text-primary f3 py-2">Sets</div>
                        <div className="col-2 text-center fs-3 text-primary f3 py-2">Reps</div>
                        <div className="col-3 text-center fs-3 text-primary f3 py-2 ">Target Muscle</div>
                        <div className="col-3 text-center fs-3 text-primary f3 py-2 ">Technique</div>
                    </div>
                </div>
                {
                    data.length > 0 ? data.map(item => {
                        return <div className=" gymrow row w-100 p-0 border-bottom">
                            <div className="col-2 text-center  pt-3 fs-5 text-black f3">{item.Name}</div>
                            <div className="col-2 text-center  pt-3 fs-5 text-black f3">{item.Sets} Sets</div>
                            <div className="col-2 text-center  pt-3 fs-5 text-black f3">{item.Reps} Reps</div>
                            <div className="col-3 text-center  p-2 t4">{item.Target_Muscle[0]} <img src={findimage(item.image)} className='bg bg-transparent' height={100} width={100} alt="" /></div>
                            <div className="col-3 text-center  p-2"><img src={findgif(item.gif)} height={100} width={100} alt="" /></div>
                        </div>
                    }) : null
                }
            </div>
        </div>
    )
}
