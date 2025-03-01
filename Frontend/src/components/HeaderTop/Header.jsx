import React from 'react';
import { useState } from 'react';

const Header = React.memo(() => {
  const [open, setOpen] = useState(true);
  
  const toggleHeaderbar = () => {
    setOpen(!open);
  }
  return (
    <header>
       <div>
      
      {open && (
          <div className='flex justify-center bg-primary text-text-primary font-font-primary font-extralight text-[13px]  p-3 '>
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
    </header>
  );
});

export default Header;
