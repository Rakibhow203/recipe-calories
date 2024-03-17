import { useEffect, useState } from 'react';
import './App.css'
import Recipe from './Components/Recipe/Recipe';

import Header from './Components/Header/Header'


function App() {
  
const [recipes, setRecipes] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch('../public/Fack.json')
      .then(res => res.json())
      .then(data => {
        setRecipes(data);
      });
  }, []);
  const handleBtn = p => {
    const isExist = cart.find(item => item.id == p.id);
    if (!isExist) {
      setCart([...cart, p]);
    } else {
      alert('ache');
    }
  };
  console.log(cart);
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
      
      {/* banner section end */}

      
 <section>
        <div className="pb-14">
          <h2 className="text-xl font-bold">Our Recipes</h2>
          <p className="text-base font-normal">
            Try one of our signature selections and see what everyone's talking
            about!
          </p>
        </div>
        <div className="flex lg:flex-row flex-col justify-around gap-4 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
            {recipes.map(rc => (
              <Recipe key={rc.id} handleBtn={handleBtn} recipe={rc}></Recipe>
            ))}
          </div>
          {/* want to cook */}
          <div className="border border-gray-300 rounded-xl p-4">
            <div>
              <h2 className="text-lg font-medium py-2">Want to cook: 0</h2>
              <hr />
              <div className=" grid grid-cols-4">
                <p>Name</p>
                <p>Time</p>
                <p>Calories</p>
              </div>
              <div className="cart-info">
                {cart.map(item => (
                  <div className="grid grid-cols-4">
                    <p>{item.recipe_name}</p>

                    <p>{item.Preparing_time}</p>
                    <p>{item.Calories}</p>
                    <button class="btn bg-green-400 rounded-full">
                      Secondary
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-lg font-medium py-2">Want to cook: 0</h2>
              <hr />
              <div className=" grid grid-cols-3">
                <p>Name</p>
                <p>Time</p>
                <p>Calories</p>
              </div>

              <div className="flex justify-between py-4">
                <p>Total Time = 0 minutes</p>
                <p>Total Calories = 0 calories</p>
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  )
}

export default App
// https://github.com/programming-hero-web-course1/b9a7-chefs-table-Rakibhow203