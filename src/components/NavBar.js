import React from 'react'
import int2 from '../img/int2-black.png'

const NavBar = () => {
  const options = [
    "Our Story",
    "Alumni",
    "Current Int2",
    "Life",
    "Parners",
    "Coming Back",
  ]

  return (
    <nav className='flex flex-row w-full justify-around '>
      <div className='py-1'>
        <img src={int2} alt="Int Square" className='w-36' />
      </div>
      <div className='py-5'>
        <ul className='flex flex-row justify-between'>
          {options.map(opcion => {
            return (
              <li className='p-3 box-border'>
                {opcion}
              </li>
            )
          })}
          <li>
            <button className='py-2 px-8 mx-2 my-1 box-border border-blue-500 text-blue-500 border-solid border-2 rounded-sm'>
              INFO
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar;
