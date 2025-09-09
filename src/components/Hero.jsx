import React from 'react'
//import logo from '../images/logo.png'
export const Hero = () => {
  return (
   <section className="min-h-full flex-items-center justify-center bg-slate-900 text-white">
    {/* <img
              className="h-8 w-auto rounded-3xl"
              src={logo} 
              style={{width:40, height:40}} 
              alt="Logo"
            /> */}
     <div className="text-center px-6">
       <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm Michael</h1>
       <p className="text-xl md:text-2xl mb-6">Full-stack developer skilled in React, Tailwind, and Python — passionate about building scalable, user-focused applications.</p>
       {/* Full-stack developer skilled in React, Tailwind, and Python — passionate about building scalable, user-focused applications. */}
       {/*Web & Software Developer  */}
       <a href="#projects" className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gradient-to-br from-blue-500 to-green-600">View My Work</a>
     </div>
    </section>
  )
}
export default Hero;