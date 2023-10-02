import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


const LoginPage = () => {

    const nav = useNavigate();

    const submitHandler = () => {
        nav('/dashboard');
    }

  return (
    <div className="flex justify-between h-screen items-center w-full">
        <div className=" w-full h-full">
            <img src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg" alt="" className="" />
        </div>
        <div className="w-full">
            <form action="" onSubmit={submitHandler()} className="flex-col gap-2 flex rounded-lg p-5 shadow-lg w-[70%] mx-auto ">
                {/* email */}
                <div className="flex flex-col gap-2">
                <label htmlFor="" className='text-lg font-semibold tracking-wide'>Email</label>
                <input type="email" className="outline-none rounded-lg border p-2" placeholder='Enter your email' />
                </div>

                {/* password */}
                <div className="flex flex-col gap-2">
                <label htmlFor="" className='text-lg font-semibold tracking-wide'>Password</label>
                <input type="password" placeholder='Enter your Password' className='outline-none rounded-lg border p-2' />
                </div>

                {/* registerSuggestion */}
                <div className="flex justify-around mt-5 text-sm text-gray-400">
                    <h3 className="">Don't have an account?</h3>
                    <Link to={'/'} >
                    <h3 className="text-blue-400 underline cursor-pointer">Register Here</h3>
                    </Link>
                </div>

                {/* btn */}
                <div className="mt-5 shadow-lg mx-auto">
                    <button type='submit' className='text-lg font-semibold cursor-pointer bg-blue-600 rounded tracking-wide text-white px-5 py-1'>LogIn</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default LoginPage