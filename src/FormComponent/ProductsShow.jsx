import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from "../Firebase/Firebaseconfig";
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { MdAutoDelete } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';

const ProductsShow = () => {
    const [productShow, setProductShow] = useState([]);
    const [deleteProduct, setDeleteProduct] = useState(null);
    const [isloader, setIsLoader] = useState(false);
    const [isLoged, setIsLoged] = useState(false);

    const navigate = useNavigate();
    const auth = getAuth();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setIsLoged(!!user);
            console.log(user);
        });

        const fetchData = async () => {
            setIsLoader(true);
            try {
                const dataShow = await getDocs(collection(db, 'Products Data'));
                const products = dataShow.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setProductShow(products);
                setIsLoader(false);
            } catch (err) {
                setIsLoader(false);
                console.log(err);
            }
        };

        fetchData();
    }, [deleteProduct]);

    const handleDelete = async (id) => {
        try {
            await deleteDoc(doc(db, "Products Data", id));
            setDeleteProduct(id);
            console.log("Product deleted: ", id);
        } catch (err) {
            console.log("Error: ", err);
        }
    };

    const handleAddPost = () => {
        if (isLoged) {
            navigate('/ProductsForm');
        } else {
            alert("Please Login");
            navigate("/");
        }
    };

    return (
        <>
            <div className='bg-cyan-600 py-8 px-12 flex justify-between items-center'>
                <h2 className="text-4xl font-bold text-white">Product List</h2>
                <button
                    className='px-6 py-2 bg-gray-200 font-bold text-gray-700 rounded-lg hover:bg-gray-300 shadow-md'
                    onClick={handleAddPost}>
                    Add Post
                </button>
            </div>
            <div className="mx-6 my-8">
                {
                    isloader ? (
                        <div className='flex justify-center items-center w-full'>
                            <img className='w-4/4' src="https://i.pinimg.com/originals/c7/e1/b7/c7e1b7b5753737039e1bdbda578132b8.gif" alt="Loading..."/>
                        </div>
                    ) :
                    <div className="flex flex-wrap gap-6 items-center justify-center p-6">
                        {productShow.map(product => (
                            <div
                                key={product.id}
                                className="flex flex-col items-center border border-gray-300 rounded-lg shadow-lg bg-white max-w-[365px] w-full p-4">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                                <p className="text-gray-600 text-sm mb-2">{product.description}</p>
                                <p className="text-gray-500 text-sm mb-2">{product.number}</p>
                                <img src={product.link} className='w-70 h-48 rounded-lg mb-4' alt="Product" />
                                <div className='flex gap-4'>
                                    <button
                                        className='p-2 bg-red-500 text-white rounded-lg hover:bg-red-600'
                                        onClick={() => handleDelete(product.id)}>
                                        <MdAutoDelete size={24} />
                                    </button>
                                    <button
                                        className='p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600'
                                        onClick={() => navigate("/ProductsForm")}>
                                        <FaEdit size={24} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                }
            </div>
        </>
    );
};

export default ProductsShow;
