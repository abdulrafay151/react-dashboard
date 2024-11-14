import React, { useState } from 'react';
import { db } from "../Firebase/Firebaseconfig";
import { addDoc, collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const ProductsForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        number: '',
        link: ''
    });
    const navigate = useNavigate();

    const handlePost = async (event) => {
        event.preventDefault();
        console.log(formData);
        try {
            const docRef = await addDoc(collection(db, "Products Data"), formData);
            navigate("/ProductsShow");
            console.log("Document ID: ", docRef.id);
        } catch (err) {
            alert("Fill out the form first, then post it.");
            console.log(err);
        }
    };

    return (
        <div className="max-w-lg mx-auto bg-gray-100 border border-gray-300 rounded-xl shadow-black-lg p-8 mt-12 space-y-6">
            <h2 className="text-3xl font-bold text-gray-700 text-center mb-6">Products Form</h2>
            <form className="space-y-5" onSubmit={handlePost}>
                <div>
                    <label className="block text-gray-600 font-medium mb-2">Product Name</label>
                    <input
                        type="text"
                        name="productName"
                        placeholder="Product Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-600 font-medium mb-2">Product Description</label>
                    <textarea
                        name="productdescription"
                        placeholder="Product Description"
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                        rows="3"
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-600 font-medium mb-2">Phone Number</label>
                    <input
                        type="tel"
                        name="number"
                        placeholder="Number"
                        value={formData.number}
                        onChange={(e) => setFormData({ ...formData, number: e.target.value })}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-600 font-medium mb-2">Image Link</label>
                    <input
                        type="url"
                        name="link"
                        placeholder="Image Link"
                        value={formData.link}
                        onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full py-2 bg-cyan-500 text-white rounded-lg font-semibold hover:bg-cyan-600 transition duration-200"
                >
                    Post Data
                </button>
            </form>
        </div>
    );
};

export default ProductsForm;
