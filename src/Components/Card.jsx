import React from 'react'

const Card = ({ title, image, description, category }) => {
    return (
        <>
        <div className='bg-blue-500'>
        <div className="p-5 bg-blue-200 m-2 text-center font-bold">
            <h1>{title}</h1>
            <p className='text-2xl uppercase '>{category}</p>
            <img src={image} alt="" />
            <p>{description}</p>
        </div>
        </div>
        </>
    )
}

export default Card