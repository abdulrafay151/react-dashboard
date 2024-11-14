import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import { db } from '../Firebase/Firebaseconfig';
import { useNavigate } from 'react-router-dom';
import { MdAutoDelete } from "react-icons/md";
import { FaEdit } from 'react-icons/fa';

const CommentShow = () => {
    const [commentShow, setCommentShow] = useState([]);
    const [commentDelete, setCommentDelete] = useState(null);
    const [isLoader, setIsLoader] = useState(false);

    const navigate = useNavigate();

    const fetchData = async () => {
        setIsLoader(true);
        try {
            const commentSnapshot = await getDocs(collection(db, 'Comments Data'));
            const comments = commentSnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setCommentShow(comments);
            setIsLoader(false);
        } catch (err) {
            setIsLoader(false);
            console.log(err);
        }
    };

    useEffect(() => {
        fetchData();
    }, [commentDelete]);

    const handleAddComment = () => {
        navigate("/CommentForm");
    };

    const handleDelete = async (id) => {
        try {
            await deleteDoc(doc(db, "Comments Data", id));
            setCommentDelete(id);
            console.log("Comment Deleted: ", id);
        } catch (err) {
            console.log("Error: ", err);
        }
    };

    return (
        <>
            <div className='bg-cyan-600 py-6 px-12 flex justify-between items-center'>
                <h2 className="text-4xl font-bold text-white">Comments</h2>
                <button
                    className='px-6 py-2 bg-gray-200 font-bold rounded-lg hover:bg-gray-300 shadow-md'
                    onClick={handleAddComment}>
                    Add Comment
                </button>
            </div>

            <div className="mx-12 my-8">
                {isLoader ? (
                    <div className='flex justify-center items-center w-full'>
                        <img className='w-100' src="https://i.pinimg.com/originals/c7/e1/b7/c7e1b7b5753737039e1bdbda578132b8.gif" alt="Loading..." />
                    </div>
                ) : (
                    <div className="flex flex-col gap-6 mt-8 items-center">
                        {commentShow.map(comment => (
                            <div
                                key={comment.id}
                                className="w-full md:w-2/3 lg:w-4/5 p-6 bg-white border border-gray-300 rounded-lg shadow-lg relative">
                                
                                <h3 className="text-xl font-semibold text-gray-800">{comment.name}</h3>
                                <p className="text-gray-600 text-lg mt-2">{comment.comment}</p>

                                <div className='absolute top-4 right-4 flex gap-3'>
                                    <button
                                        className='p-2 bg-red-500 text-white rounded-lg hover:bg-red-600'
                                        onClick={() => handleDelete(comment.id)}>
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
                )}
            </div>
        </>
    );
};

export default CommentShow;
