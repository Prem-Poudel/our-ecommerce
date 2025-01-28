import React, { useState } from 'react'

const Header = () => {
  const [open, setOpen] = useState(true);
  
  const toggleHeaderbar = () => {
    setOpen(!open);
  }
  return (
    <div>
      
      {open && (
          <div className='flex justify-center bg-primary text-text-primary font-primary leading-0.6 text-sm font-thin  p-3 '>
          <div className='flex gap-2'>
          <div className="text">
          Something new is coming  Stay tuned with us  !
          </div>
          <div className="button">
          <button onClick={toggleHeaderbar}>
        cross
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