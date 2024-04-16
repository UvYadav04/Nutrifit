import React from 'react'
import p from '../Photos/b21.jpg'

export default function Excard({ day, image, onClick }) {
    // console.log(onclick)
    return (
        <div className='me-5 my-2 position-relative text-center p-0 rounded-3 bg bg-black' onClick={onClick} >
            <img src={image} className='opacity-50 w-100 rounded-3' height={160} width={160} alt="" />
            <h1 className="position-absolute opacity-50 m-0 text-white start-0 bottom-0 fs-3">{day}</h1>
        </div>
    )
}
