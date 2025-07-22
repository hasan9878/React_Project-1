import { useState } from 'react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className='bg-[#002228]/80 backdrop-blur-lg sticky top-0 z-50 px-4 py-5 md:px-4 md:py-4 lg:px-20 lg:py-7'>
      <div className='flex items-center w-full flex-wrap'>
        {/* Logo */}
        <img src="/Logo.png" alt="logo" className='h-7 md:h-4' />
        {/* Menu */}
        <ul className='hidden md:flex flex-1 justify-center gap-6 md:gap-3 lg:gap-10 text-[#FFFFFF] text-base md:text-sm lg:text-base'>
          <li className='hover:text-[#0FF1F6] transition-colors duration-300'><a href='#about' className='cursor-pointer'>About Us</a></li>
          <li className='hover:text-[#0FF1F6] transition-colors duration-300'><a href='#pricing' className='cursor-pointer'>Pricing</a></li>
          <li className='hover:text-[#0FF1F6] transition-colors duration-300'><a href='#customers' className='cursor-pointer'>Customers</a></li>
          <li className='hover:text-[#0FF1F6] transition-colors duration-300'><a href='#solution' className='cursor-pointer'>Solution</a></li>
        </ul>
        {/* Buttons */}
        <div className='hidden md:flex gap-5 md:gap-2 lg:gap-5'>
          <button className='bg-[#0FF1F6] px-5 py-3 md:px-3 md:py-2 text-[#002228] font-semibold rounded-full text-base md:text-xs lg:text-base hover:bg-[#00d9dc] transition duration-600 hover:text-white'>Book and Demo</button>
          <button className='border border-solid border-[#FFFFFF] text-[#FFFFFF] px-7 py-3 md:px-4 md:py-2 rounded-full text-center font-semibold text-base md:text-xs lg:text-base hover:bg-white transition duration-600 hover:text-black'>Contact us</button>
        </div>
        {/* Hamburger Icon for Mobile */}
        <button
          className='md:hidden flex flex-col justify-center items-center w-10 h-10 ml-auto'
          onClick={() => setMenuOpen(true)}
          aria-label='Open menu'
        >
          <span className='block w-7 h-1 bg-white mb-1 rounded'></span>
          <span className='block w-7 h-1 bg-white mb-1 rounded'></span>
          <span className='block w-7 h-1 bg-white rounded'></span>
        </button>
      </div>
      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className='fixed inset-0 z-50 bg-black bg-opacity-40 flex justify-end'>
          <div className='w-3/4 max-w-xs h-full bg-[#002228] p-6 flex flex-col'>
            <button
              className='self-end mb-8 text-white text-3xl'
              onClick={() => setMenuOpen(false)}
              aria-label='Close menu'
            >
              &times;
            </button>
            <ul className='flex flex-col gap-4 text-[#FFFFFF] text-base'>
              <li><a href='#about' className='cursor-pointer'>About Us</a></li>
              <li><a href='#pricing' className='cursor-pointer'>Pricing</a></li>
              <li><a href='#customers' className='cursor-pointer'>Customers</a></li>
              <li><a href='#solution' className='cursor-pointer'>Solution</a></li>
            </ul>
            <div className='flex flex-col gap-2 mt-6'>
              <button className='bg-[#0FF1F6] px-3 py-2 text-xs text-[#002228] font-semibold rounded-full'>Book and Demo</button>
              <button className='border border-solid border-[#FFFFFF] text-[#FFFFFF] px-4 py-2 rounded-full text-center font-semibold text-xs'>Contact us</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
