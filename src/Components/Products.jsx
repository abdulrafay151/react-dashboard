import React, { useEffect, useState } from 'react'
import apiInstance from '../Config/Apisconfig'
import Card from './Card'
import ComponenetsHeading from './ComponenetsHeading'

const Products = () => {
    const [products, setProducs] = useState([])

    const fetchData = () => {
        apiInstance.get("products")
            .then((res) => {
                console.log(res);
                setProducs([...res.data.products])
            }).catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            {/* <ComponenetsHeading /> */}

            <div className='flex flex-row items-center gap-y-12 flex-wrap justify-between mx-12 mt-8'>
                {products.map((x, i) => {
                    return (
                        <div className='flex' key={i}>
                            <Card
                                // key={i}
                                title={x.title}
                                image={x.thumbnail}
                                category={x.category}
                            />
                        </div>
                    )
                })}
            </div>
        </>

    )
}

export default Products