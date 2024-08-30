import React from 'react'
import logo from '../assets/logo.svg';

export default function Ref() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-fundo-bg">
      <div
        className="relative rounded-lg w-[1150px] h-[525px] mt-10 mb-10  bg-gradient-to-r from-azulEscuro/60 via-verdinho/100 to-azulzao/60"
      >
        <div className="absolute inset-0 bg-black bg-opacity-80 rounded-lg "></div>

        <header>
          <div className="absolute flex items-center p-4">
            <img src={logo} alt="Logo" className="h-20" />
            <nav>
              <ul className="flex space-x-4 text-white font-zen-dots ml-14 text-xl">
                <li><a href="/" className="hover:underline ml-14">HOME</a></li>
                <li><a href="/Guia" className="hover:underline ml-14">GUIA</a></li>
                <li><a href="/Materiais" className="hover:underline ml-14">MATERIAIS</a></li>
                <li><a href="/Participantes" className="hover:underline ml-14">PARTICIPANTES</a></li>
                <li><a href="/Ref" className="hover:underline ml-14">REF</a></li>
              </ul>
            </nav>
            <h1 className='absolute text-white mt-52 text-4xl font-aoboshi ml-20'>G U I A</h1>
          </div>
        </header>
     </div>
    </div>
  )
}
