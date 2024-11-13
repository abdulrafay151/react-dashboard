import React from 'react'
import { Link } from 'react-router-dom'


const Dashboard = () => {
    return (
        <div className='h-screen p-8 bg-blue-500 text-white font-bold'>
            <h2 className="text-4xl mb-4">Dashboard</h2>
            <ul className='text-xl font-bold'>
                <Link to="/ProductsShow" className="mb-2">Home</Link>
                <br />
                {/* <Link to="/Users" className="mb-2">Users</Link> */}
                {/* <br /> */}
                {/* <Link to="/Products" className="mb-2">Products</Link> */}
                {/* <br /> */}
                {/* <Link to="/UserForm" className="mb-2">User Form</Link> */}
                {/* <br /> */}
                {/* <Link to="/Comment" className="mb-2">Comments</Link> */}
                {/* <br/> */}
                <Link to="/" className="mb-2">Sign Up</Link>
                <br/>
                {/* <Link to="/Login" className="mb-2">Login</Link> */}
                {/* <br/> */}
                <Link to="/SignupUsershow" className="mb-2">Signup User</Link>
                <br/>
                <Link to="/ProductsForm" className="mb-2">Product Form</Link>
                <br/>
                {/* <Link to="/ProductsShow" className="mb-2">Products Show</Link> */}
            </ul>
        </div>
    )
}

export default Dashboard