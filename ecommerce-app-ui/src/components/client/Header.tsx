import React from "react";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {

    const linkClass = ({ isActive }: { isActive: boolean }) =>
        isActive
            ? "text-blue-600 font-bold border-b-2 border-blue-600 pb-1"
            : "hover:text-blue-500";

  return (
    <header className='sticky top-0 z-50 bg-white shadow-md'>
      <div className='container mx-auto flex items-center justify-between p-4'>
        <h1 className='text-xl font-bold text-blue-600'>MyShop</h1>

        <nav className='space-x-6'>
          <NavLink to='/' className={linkClass}>
            Home
          </NavLink>
          <NavLink to='/about' className={linkClass}>
            About
          </NavLink>
          <NavLink to='/shop' className={linkClass}>
            Shop
          </NavLink>
          <NavLink to='/cart' className={linkClass}>
            Cart
          </NavLink>
          
          <NavLink
            to='/login'
            className='hover:text-white hover:bg-black rounded-xl border-2 p-2'
          >
            Login
          </NavLink>
          <NavLink
            to='/register'
            className='hover:text-white hover:bg-black rounded-xl border-2 p-2'
          >
            Register
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
