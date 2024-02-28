import Hamburger from 'hamburger-react'
import { useState } from 'react'
import { FaCircleUser } from 'react-icons/fa6'
import SideBar from './SideBar'

function Header() {

    const [nav,setNav] = useState(false)

    const hamburgerOnClick = () => {
        setNav(!nav)
    }

  return (
    <div>
    <div className="bg-gray-400 w-screen h-16">
      <div className="flex justify-between items-center pt-2">
        <div className='pl-10' onClick={hamburgerOnClick}>
            <Hamburger/>
        </div>
        <div className='text-3xl'>
            CMS
        </div>
        <div className='pr-10' >
        <FaCircleUser className='text-4xl' />
        </div>
      </div>
    </div>
    {nav && <SideBar/>}
    </div>
  )
}

export default Header
