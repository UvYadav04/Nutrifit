import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Diseasecard from '../Components/Diseasecard'
import Footer from '../Components/Footer'
import { useNavigate } from 'react-router-dom'

export default function Treatment() {
    let navigate = useNavigate()
    const [value, setvalue] = useState("")
    const [results, setresults] = useState([])
    const [loading, setloading] = useState(false)
    const handleinput = async (event) => {
        setvalue(event.target.value)
        if (event.target.value !== "") {
            let d = event.target.value
            setloading(true)
            const response = await fetch("http://localhost:8080/treatment/search", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'authorisation': `bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({ d })
            })
            const json = await response.json()
            setloading(false)
            setresults(json.data)
        }
        else
            setresults([])
    }
    return (
        <>
            <Navbar />
            <h3 className={loading ? 'position-absolute w-100 text-center h-100' : "d-none"}>Loading...</h3>
            <div className={!loading ? "treat container mx-auto text-center mt-3" : "treat container mx-auto text-center mt-5 opacity-25"}>
                <div className="row justify-content-center position-relative">
                    <input type="text"
                        className='rounded-5 w-75 mx-auto ps-2 mb-0 d-inline'
                        placeholder='type your disease or symptoms'
                        onChange={(event) => handleinput(event)}
                        value={value}
                    />
                    <div className={results.length > 0 ? "results position-absolute w-75 p-0 z-index-5 rounded-1 bg bg-white" : "d-none"}>
                        <ul className='w-100 d-flex justify-content-around flex-wrap p-0'>
                            {results.length > 0 ?
                                results.map((item, i) => [
                                    <li className='my-2 rounded-2 p-1 fs-5' key={i} onClick={() => navigate('/treatment/info', { state: item })}> {item.Name}</li>
                                ]) : null
                            }
                        </ul>
                    </div>
                </div>
                <div className="row bg bg-transparent common mt-3">
                    <Diseasecard from="treat" name="backpain" />
                    <Diseasecard from="treat" name="insomnia" />
                    <Diseasecard from="treat" name="nausea" />
                    <Diseasecard from="treat" name="diarrhoea" />
                    <Diseasecard from="treat" name="cough" />
                    <Diseasecard from="treat" name="migrain" />
                    <Diseasecard from="treat" name="sneeze" />
                    <Diseasecard from="treat" name="stomachache" />
                    <Diseasecard from="treat" name="fatigue" />
                    <Diseasecard from="treat" name="dehydration" />
                    <Diseasecard from="treat" name="weakness" />
                    <Diseasecard from="treat" name="fever" />
                </div>
            </div>
            <Footer />
        </>
    )
}
