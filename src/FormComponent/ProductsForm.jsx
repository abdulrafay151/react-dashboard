import React, { useState } from 'react'
import { db } from "../Firebase/Firebaseconfig"
import { dataSet } from '../Firebase/Firebasefunction'
import { addDoc, collection } from 'firebase/firestore'
import { Navigate, useNavigate } from 'react-router-dom'

const ProductsForm = () => {
    const [formData, setFormData] = useState({})
    const navigate = useNavigate()

    const handlePost = async (event) => {
        event.preventDefault()
        console.log(formData)
        try {
            const docRef = await addDoc(collection(db, "Products Data"), {
                name: formData.name,
                description: formData.description,
                number: formData.number,
                link: formData.link
            });
            navigate("/ProductsShow")
            console.log("Document ID: ", docRef.id);
        }
        catch (err) {
            alert("Fill out the form first, then post it.");
            console.log(err);
            
        }
    }


    return (
        <>
            <div className="max-w-md mx-auto bg-white bg-gray-200 border border-2 border-black rounded-xl shadow-2xl overflow-hidden md:max-w-2xl mt-28 p-8 space-y-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Products Form</h2>

                <div className="space-y-4">
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Product Name:</label>
                        <input
                            type="text"
                            name="productName"
                            placeholder="Product Name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-300"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Product Description:</label>
                        <input
                            type="text"
                            name="productdescription"
                            placeholder="Product Description"
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-300"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Phone Number:</label>
                        <input
                            type="text"
                            name="number"
                            placeholder="Number"
                            value={formData.number}
                            onChange={(e) => setFormData({ ...formData, number: e.target.value })}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-300"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Image Link:</label>
                        <input
                            type="text"
                            name="link"
                            placeholder="Image Link"
                            value={formData.link}
                            onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-300"
                        />
                    </div>

                    <button
                        className="py-2 w-full bg-cyan-500 text-white rounded-lg font-semibold hover:bg-cyan-600"
                        onClick={handlePost}
                    >
                        Post Data
                    </button>
                </div>
            </div>

        </>

    )
}

export default ProductsForm




