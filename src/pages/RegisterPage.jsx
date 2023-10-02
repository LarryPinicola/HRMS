import React from 'react'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
  return (
    <div className="flex justify-between h-screen items-center w-full">
        <div className=" w-full h-full">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/016/716/631/small_2x/flat-isometric-3d-illustration-concept-of-creating-personal-data-for-registration-free-vector.jpg" alt="" className="w-full h-full" />
        </div>
        <div className="w-full">
            <form action="" className="flex-col gap-2 flex rounded-lg p-5 shadow-lg w-[70%] mx-auto ">
                {/* email */}
                <div className="flex flex-col gap-2">
                <label htmlFor="" className='text-lg font-semibold tracking-wide'>Email</label>
                <input type="email" className="outline-none rounded-lg border p-2" placeholder='Enter your email' />
                </div>

                {/* userName */}
                <div className="flex flex-col gap-2">
                <label htmlFor="" className='text-lg font-semibold tracking-wide'>Username</label>
                <input type="text" className="outline-none rounded-lg border p-2" placeholder='Enter your Name' />
                </div>

                {/* password */}
                <div className="flex flex-col gap-2">
                <label htmlFor="" className='text-lg font-semibold tracking-wide'>Password</label>
                <input type="password" placeholder='Enter your Password' className='outline-none rounded-lg border p-2' />
                </div>

                {/* confirmPassword */}
                <div className="flex flex-col gap-2">
                <label htmlFor="" className='text-lg font-semibold tracking-wide'>Confirm Password</label>
                <input type="password" placeholder='Enter your Password' className='outline-none rounded-lg border p-2' />
                </div>

                {/* account suggestion */}
                <div className="flex justify-around mt-5 text-sm text-gray-400">
                    <h3 className="">Already have an account?</h3>
                    <Link to={'/login'}>
                        <h3 className="text-blue-400 underline cursor-pointer">LogIn Here</h3>
                    </Link>
                </div>

                {/* btn */}
                <div className="mt-5 shadow-lg mx-auto">
                    <button className='text-lg font-semibold cursor-pointer bg-blue-600 rounded tracking-wide text-white px-5 py-1'>Register</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default RegisterPage