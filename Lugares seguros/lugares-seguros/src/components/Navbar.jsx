// eslint-disable-next-line no-unused-vars
import { useState } from 'react';
import logo from '../assets/logo.webp'
import menu from '../assets/menu.svg'
import { navLinks } from '../static-text';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className='w-full flex py-7 justify-between items-center navbar'>

    <img src={logo} alt="logo" className="w-[201px] h-[36px]"/>

    <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
        <li 
        key={nav.id}
        className={`font-poppins font-normal cursor-pointer text-[1.5vw]
        ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white mr-7`}>
            <a href={`${nav.id}`}> {nav.title} </a>
        </li> 
        ))}
    </ul>

    <div className="sm:hidden flex justify-end items-center">
        <img src={showMenu ? close : menu} alt="menu"
        className='w-[24px] h-[24px] object-contain cursor-pointer'
        onClick={() => setShowMenu((prev)=>!prev)}
        />

        <div className={`${showMenu ? 'flex' : 'hidden'}p-6 bg-dark-gradient absolute top-20
        right-0 mx-4 my-2 min-W-[140px] rounded-xl sidebar`}>
        
        </div>

    </div>

    </nav>
  )
}

export default Navbar