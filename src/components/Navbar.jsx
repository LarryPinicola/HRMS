import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        {/* navbar */}
        <nav className="px-10 py-2 flex justify-between shadow-lg items-center">
            {/* hrmsLogo */}
            <div className="">
                <img src="https://is2-ssl.mzstatic.com/image/thumb/Purple122/v4/b8/24/68/b82468f3-af68-38b2-bbd6-e2bb85eaaaf7/AppIcon-1x_U007emarketing-0-5-0-85-220.png/512x512bb.jpg" alt="" className="w-16 h-16 cursor-pointer" />
            </div>
            {/* additionalSites */}
            <div className="flex justify-around gap-5 ">
                <Link>
                    <h3 className="text-lg font-semibold hover:scale-125 duration-100">About</h3>
                </Link>
                <Link>
                    <h3 className="text-lg font-semibold hover:scale-125 duration-100">Content</h3>
                </Link>
                <Link>
                <h3 className="text-lg font-semibold hover:scale-125 duration-100">Services</h3>
                </Link>
            </div>
        </nav>
    </div>
  )
}

export default Navbar