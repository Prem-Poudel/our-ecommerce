import React, { useState } from 'react'

const Header = () => {
  const [open, setOpen] = useState(true);
  
  const toggleHeaderbar = () => {
    setOpen(!open);
  }
  return (
    <div>
      
      {open && (
          <div className='flex justify-center bg-primary text-text-primary font-font-primary leading-6 text-sm font-extralight  p-3 '>
          <div className='flex gap-6'>
          <div className="text">
          Something  new  is  coming  Stay tuned with us  !
          </div>
          <div className="button">
          <button onClick={toggleHeaderbar}>
        <img src="https://cdn-icons-png.flaticon.com/128/1828/1828666.png" alt="cross" className='w-3'  />
      </button>
          </div>
          </div>
        </div>
        )
      }
    </div>
  )
}

export default Header