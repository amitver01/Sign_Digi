import { Link } from 'react-router-dom';
import React from "react";
import Header from './Header';
import key from "../assets/key.png";
import "../CSS/Home.css"
import Footer from './Footer';

function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-col lg:flex-row justify-center gap-10 font-bold font-sans bg-zinc-800 m-20">
        <Link to="/sign" className="hover:opacity-80">
          <div className="lg:w-1/2 md:w-3/4 sm:w-full bg-zinc-600 text-white shadow-lg font-mono rounded-lg border-black border-solid p-6 text-center">
            <h2 className="bg-zinc-600 p-14 text-lg md:text-2xl lg:text-3xl">SIGN HERE </h2>
            <h4 className='bg-zinc-600 text-sm md:text-base lg:text-lg'>use your TOUCHPAD, MOBILE SCREEN to draw your signature</h4>
          </div>
        </Link>
        <Link to="/text" className="hover:opacity-80">
          <div className="lg:w-1/2 md:w-3/4 sm:w-full bg-zinc-600 text-white shadow-xl font-mono rounded-lg border-black border-solid p-6 text-center">
            <div className=" w-32 h-32 mx-auto mb-3 rounded-lg flex justify-center items-center">
              <img src={key} alt="Key Image" className="w-full h-auto object-cover bg-zinc-600" />
            </div>
            <h2 className="bg-zinc-600  text-lg md:text-2xl lg:text-3xl">Type your name </h2>
          </div>
        </Link>
      </div>
      <Footer/>
    </>
  )
}

export default Home;