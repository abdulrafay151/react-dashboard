import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react';
import { db } from "../Firebase/Firebaseconfig";
import { useNavigate } from 'react-router-dom';

const CommentForm = () => {
    const [commentData, setCommentData] = useState({ name: '', comment: '' });
    const navigate = useNavigate();

    const handleComment = async (event) => {
        event.preventDefault();
        console.log(commentData);
        if (!commentData.name || !commentData.comment) {
            alert("Please fill in all fields before submitting.");
            return;
        }

        try {
            const docRef = await addDoc(collection(db, "Comments Data"), {
                name: commentData.name,
                comment: commentData.comment,
            });
            console.log("Document ID: ", docRef.id);
            navigate("/CommentShow");
        } catch (err) {
            console.log("Error adding document: ", err);
        }
    };

    return (
        <div className="max-w-md mx-auto bg-gray-200 border border-2 border-gray-400 rounded-xl shadow-2xl overflow-hidden md:max-w-2xl mt-28 p-8 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Comments Form</h2>
            <div className="space-y-4">
                <div>
                    <label className="block text-black font-semibold mb-2">Name</label>
                    <input
                        type="text"
                        placeholder="Your Name"
                        value={commentData.name}
                        onChange={(e) => setCommentData({ ...commentData, name: e.target.value })}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-300"
                    />
                </div>

                <div>
                    <label className="block text-black font-semibold mb-2">Comment</label>
                    <textarea
                        placeholder="Your Comment"
                        value={commentData.comment}
                        onChange={(e) => setCommentData({ ...commentData, comment: e.target.value })}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-300"
                        rows="4"
                    />
                </div>

                <button
                    className="py-2 w-full bg-cyan-500 text-white rounded-lg font-semibold hover:bg-cyan-600"
                    onClick={handleComment}
                >
                    Post Comment
                </button>
            </div>
        </div>
    );
}

export default CommentForm;
