import React from 'react';

const Header = () => {
  return (
<div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
   <h1 className='text-xl'>Quik<span className=' text-yellow-600'>C</span>hicken</h1> 
      </div>
   
    </div>
  </div>
  <div className="navbar-center">
        <a className="btn btn-ghost text-xl">Home</a>
        <a className="btn btn-ghost text-xl">Recipes</a>
        <a className="btn btn-ghost text-xl">About</a>
        <a className="btn btn-ghost text-xl">Search</a>
        
         
      </div>
      
  <div className="navbar-end">
    
        <div className='input input-bordered w-24 md:w-auto'>
       
          <div className='flex gap-3 mt-3'><svg xmlns="http://www.w3.org/2000/svg" className="w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            
          <input type="text" placeholder="Search"
      
          />
          </div>

        </div>
    <button className="btn btn-ghost btn-circle mx-2">
      <div className="indicator">
        <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" className='rounded-lg' /> 
      </div>
    </button>
  </div>
</div>

    

  );
};



export default Header;
