
import './App.css'

import Header from './Components/Header/Header'


function App() {
  

  return (
    <>
      {/* Nav bar */}
      <Header></Header>
      
      {/* Banner part */}

      <div className=' mt-14'
      
      >




<div
        className="hero lg:h-[50vh] bg-cover bg-no-repeat bg-center rounded-2xl
        overflow-hidden my-8 "
          style={{
           
          backgroundImage:
            'url(https://i.ibb.co/hMmXyZ6/Rectangle-1.jpg)',
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-lg lg:text-3xl font-bold">
              Discover an exceptional cooking class tailored for you!
            </h1>
            <p className="mb-5 text-sm lg:text-base">
              Learn and Master Basic Programming, Data Structures, Algorithm,
              OOP, Database and solve 500+ coding problems to become an
              exceptionally well world-class Programmer.
            </p>
            <div className="flex gap-8 justify-center">
              <button className="btn bg-emerald-400 border-none text-sm lg:text-base font-bold rounded-full">
                Explore Now
              </button>
              <button className="btn btn-outline text-sm lg:text-base text-white font-bold border-white rounded-full">
                Our Feedback
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default App
// https://github.com/programming-hero-web-course1/b9a7-chefs-table-Rakibhow203