import React, { useEffect, useState } from 'react'
import logo from '../Photos/loader.jpg'
export default function Diseasecard({ name, from }) {
    const [pic, setpic] = useState("")
    const [loading, setloading] = useState(false)
    const getresult = async () => {
        setloading(true)
        const response = await fetch("http://localhost:8080/treatment/getimages", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'authorisation': `bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({ name: name })
        })

        const json = await response.json()
        if (json.success) {
            setloading(false)
            // console.log(json.data.results[0].links.self)
            let result = json.results.hits
            console.log(result)
            if (result.length > 0) {
                let size = result.length
                let random = Math.floor(Math.random() * size)
                setpic(result[0].largeImageURL)
            }

        }
        else {
            setloading(false)
        }
    }
    useEffect(() => {
        getresult()
        // console.log(pic)
    }, [])
    return (
        <div className={!loading ? "card col-3 text-start bg bg-transparent border-none" : "card col-3 text-start bg bg-transparent border-none opacity-50"}>
            <img src={pic} width={250} height={250} className={!loading ? 'mx-auto rounded-2' : "d-none"} alt="will be fixed soon" />
            <img src={logo} width={250} height={250} className={loading ? 'mx-auto rounded-2' : "d-none"} alt="" />
            <h4 className={from !== "info" ? 'dname ms-1' : "d-none"}>{name}</h4>
        </div>
    )
}
