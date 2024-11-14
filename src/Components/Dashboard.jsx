import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='h-screen p-8 bg-blue-500 text-white font-bold flex flex-col'>
            <h2 className="text-4xl mb-6">Dashboard</h2>
            <ul className='space-y-4 text-lg font-semibold'>
                <li>
                    <Link to="/ProductsShow" className="hover:text-blue-300 transition duration-200">Home</Link>
                </li>
                <li>
                    <Link to="/SignupUserShow" className="hover:text-blue-300 transition duration-200">SignUp Data</Link>
                </li>
                {/* <li>
                    <Link to="/SignupUsershow" className="hover:text-blue-300 transition duration-200">Signup User</Link>
                </li> */}
                {/* <li>
                    <Link to="/ProductsForm" className="hover:text-blue-300 transition duration-200">Product Form</Link>
                </li> */}
                {/* <li>
                    <Link to="/CommentForm" className="hover:text-blue-300 transition duration-200">Comment Form</Link>
                </li> */}
                <li>
                    <Link to="/CommentShow" className="hover:text-blue-300 transition duration-200">Comments</Link>
                </li>
            </ul>
        </div>
    );
};

export default Dashboard;
