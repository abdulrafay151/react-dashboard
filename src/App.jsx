import './App.css'
import Header from './Components/Header'
import Feed from './Components/Feed'
import Dashboard from './Components/Dashboard'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Users from './Components/Users'
import Products from './Components/Products'
import UsersForm from './Components/UsersForm'
import Comment from './Components/Comment'
import Signup from './Components/Signup'
import Login from './Components/Login'
// import Product from './FormComponent/Product'
import ProductsForm from './FormComponent/ProductsForm'
import SignupUsershow from './Components/SignupUsershow'
import ProductsShow from './FormComponent/ProductsShow'

function App() {
  return (

    <BrowserRouter >
    <div className='flex justify-between border border-white border-2'>
      <div className='w-[90%]'>
      <Header />
      </div>
      <div className='w-[10%] px-6 bg-blue-500 font-bold rounded shadow-md flex justify-center items-center'>
      <button className='bg-gray-200 rounded hover:bg-gray-300 px-5 py-3' onClick={LogoutButton}>Logout</button>
      </div>
    </div>
      
      <div className='grid grid-cols-[1fr_4fr]'>
        <div className='bg-cyan-200'>
          <Dashboard />
        </div>
        <div className=''>
          <Routes>
            <Route path="/ProductsShow" element={<ProductsShow />} />
            <Route path="/Users" element={<Users />} />
            <Route path="/Products" element={<Products />} />
            <Route path="/UserForm" element={<UsersForm />} />
            <Route path="/Comment" element={<Comment />} />
            <Route path="/" element={<Signup />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/ProductsForm" element={<ProductsForm />} />
            <Route path="/signupUsershow" element={<SignupUsershow />} />
            {/* <Route path="/ProductsShow" element={<ProductsShow />} /> */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>

  )
}

export default App
