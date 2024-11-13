import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from "../Firebase/Firebaseconfig"
import { useNavigate } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const ProductsShow = () => {
    const [productShow, setProductShow] = useState([])
    const [deleteProduct, setDeleteProduct] = useState(null)
    const [isloader, setIsLoader] = useState(false) 
    const [isLoged, setIsLoged] = useState(false)

    const navigate = useNavigate()
    const auth = getAuth()

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setIsLoged(!!user)
            console.log(user);
            
        })

        const fetchData = async () => {
            setIsLoader(true)
            try {
                const dataShow = await getDocs(collection(db, 'Products Data'))
                const products = dataShow.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }))
                setProductShow(products)
                setIsLoader(false)
            } catch (err) {
                setIsLoader(false)
                console.log(err)
            }
        }

        fetchData()
    }, [deleteProduct])

    const handleDelete = async (id) => {
        try {
            await deleteDoc(doc(db, "Products Data", id))
            setDeleteProduct(id)
            console.log("Product deleted: ", id)
        } catch (err) {
            console.log("Error: ", err)
        }
    }

    const handleAddPost = () => {
        if (isLoged) {
            navigate('/ProductsForm')
        } else {
            navigate("../Components/Signup")
            alert("Please Login")
        }
    }
    return (
        <>
            <div className='bg-cyan-600 py-8 ps-12 flex justify-between pe-12'>
                <h2 className="text-4xl font-bold text-white">Product List</h2>
                <button
                    className='px-6 bg-gray-200 font-bold rounded hover:bg-gray-300 shadow-md'
                    onClick={handleAddPost}>
                    Add Post
                </button>
            </div>
            <div className="mx-12 my-4">
                {
                    isloader ? (
                        <div className='flex justify-center items-center w-full'>
                            <img className='w-' src="https://i.pinimg.com/originals/c7/e1/b7/c7e1b7b5753737039e1bdbda578132b8.gif" alt="Loading..."/>
                        </div>
                    ) :
                <div className="flex flex-wrap gap-10 items-center justify-center p-4">
                    {productShow.map(product => (
                        <div
                            key={product.id}
                            className="flex flex-col gap-1 justify-center items-center">
                            <div className="flex flex-col text-center justify-center items-center pt-6 h-[450px] border border-black border-2 rounded-lg sm:w-1/2 md:w-2/4 lg:w-[340px]">
                                <h3 className="text-xl font-semibold">{product.name}</h3>
                                <p className="text-gray text-lg">{product.description}</p>
                                <p className="text-gray text-lg">{product.number}</p>
                                <img src={product.link} className='w-[300px] h-[260px] mt-2' alt="Product" />
                                <div className='flex gap-4 my-5'>
                                    <button
                                        className='py-2 px-4 bg-gray-600 text-white rounded-lg font-semibold hover:bg-gray-500'
                                        onClick={() => handleDelete(product.id)}
                                    >
                                        Delete
                                    </button>
                                    <button
                                        className='py-2 px-6 bg-gray-600 text-white rounded-lg font-semibold hover:bg-gray-500'
                                        onClick={() => navigate("/ProductsForm")}>
                                        Edit
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>}
            </div>
        </>
    );
}

export default ProductsShow
