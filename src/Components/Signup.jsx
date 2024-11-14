import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { dataSet, signUpUser } from '../Firebase/Firebasefunction'

const signUp = () => {
    const [model, setModel] = useState({})
    const Navigate = useNavigate()

    const handleSignup = () => {
        console.log(model)
        signUpUser(model).then(async (res) => {
            console.log(res);
            Navigate("/SignupUserShow")
            // alert('Signup successful! Welcome!');
            try {
                await dataSet(`Users`, model, res.user.uid)
            } catch (err) {
                console.log(err);
            }
        }).catch((err) => {
            alert("Fill out the Signup form, then Signup it.");
            console.log(err);
        })
    }

    const obj = {
        username: model.userName,
        email: model.email,
        password: model.password
    }

    return (
        <>
            <div className="flex items-center justify-center min-h-screen">
                <div className="w-full max-w-md p-8 space-y-6 mt-[-90px] bg-white rounded-lg shadow-2xl shadow-[black]">
                    <h2 className="text-2xl font-bold text-center text-gray-800">Sign Up</h2>
                    <div className='space-y-4'>
                        <div>
                            <label className="block mb-1 text-sm font-medium text-gray-700">User Name</label>
                            <input
                                type="text"
                                value={model.userName}
                                onChange={(e) => {
                                    setModel({ ...model, userName: e.target.value })
                                }}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your username"
                            />
                        </div>
                        <div>
                            <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                value={model.email}
                                onChange={(e) => {
                                    setModel({ ...model, email: e.target.value })
                                }}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div>
                            <label className="block mb-1 text-sm font-medium text-gray-700">Password</label>
                            <input
                                type="password"
                                value={model.password}
                                onChange={(e) => {
                                    setModel({ ...model, password: e.target.value })
                                }}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your password"
                            />
                        </div>
                    </div>
                    <button
                        onClick={handleSignup}
                        className="w-full py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                        Sign Up
                    </button>
                </div>
            </div>
        </>
    )
}

export default signUp
