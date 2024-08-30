import React from 'react'
import logo from '../assets/logo.svg';
import moduloBT from '../assets/moduloBT.svg';
import arduino from '../assets/arduino.svg';
import sensor from '../assets/sensorCor.svg';
import placa from '../assets/placaProtoboard.svg';

export default function Materiais() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-fundo-bg">
      <div
        className="relative rounded-lg w-[1150px] h-[1000px] mt-10 mb-10  bg-verdinho"
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
            <h1 className='absolute text-white mt-52 text-4xl font-aoboshi ml-[440px] '>M A T E R I A I S</h1>
          </div>
        </header>
 


        <div className='flex items-center justify-center mt-5'>

        <div className='relative ml-7 mt-60'>
         <div className="w-44 h-72 bg-fundo-bg rounded-lg flex flex-col items-center p-4 relative">
         <img src={sensor} alt="Sensor de cor" className="absolute -top-12 mr-4" />
        <div className="flex flex-col items-center justify-center h-full pt-16">
          <h1 className='text-white text-center text-2xl mb-2 mt-5'>ARDUINO</h1>
          <h2 className='text-white text-center text-lg'>SENSOR</h2>
          </div>
        </div>
        </div>


        <div className='relative ml-20 mt-60'>
         <div className="w-44 h-72 bg-fundo-bg rounded-lg flex flex-col items-center p-4 relative">
         <img src={moduloBT} alt="modulo bt" className="absolute -top-12 " />
        <div className="flex flex-col items-center justify-center h-full pt-16">
          <h1 className='text-white text-center text-2xl mb-2 mt-5'>ARDUINO</h1>
          <h2 className='text-white text-center text-lg'>SENSOR</h2>
          </div>
        </div>
        </div>


        <div className='relative ml-20 mt-60'>
         <div className="w-44 h-72 bg-fundo-bg rounded-lg flex flex-col items-center p-4 relative">
         <img src={arduino} alt="arduino" className="absolute -top-12 " />
        <div className="flex flex-col items-center justify-center h-full pt-16">
          <h1 className='text-white text-center text-2xl mb-2 mt-5'>ARDUINO</h1>
          <h2 className='text-white text-center text-lg'>SENSOR</h2>
          </div>
        </div>
        </div>


        <div className='relative ml-20 mt-60'>
         <div className="w-44 h-72 bg-fundo-bg rounded-lg flex flex-col items-center p-4 relative">
         <img src={placa} alt="placa" className="absolute -top-12 w-40" />
        <div className="flex flex-col items-center justify-center h-full pt-16">
          <h1 className='text-white text-center text-2xl mb-2 mt-5'>ARDUINO</h1>
          <h2 className='text-white text-center text-lg'>SENSOR</h2>
          </div>
        </div>
        </div>


        </div>

        <div className='flex items-center justify-center mt-24'>

            <div className='relative ml-7 '>
            <div className="w-44 h-72 bg-fundo-bg rounded-lg flex flex-col items-center p-4 relative">
            <img src={sensor} alt="Sensor" className="absolute -top-12 mr-4" />
            <div className="flex flex-col items-center justify-center h-full pt-16">
              <h1 className='text-white text-center text-2xl mb-2 mt-5'>ARDUINO</h1>
              <h2 className='text-white text-center text-lg'>SENSOR</h2>
              </div>
            </div>
            </div>


            <div className='relative ml-20 '>
            <div className="w-44 h-72 bg-fundo-bg rounded-lg flex flex-col items-center p-4 relative">
            <img src={moduloBT} alt="Sensor" className="absolute -top-12 " />
            <div className="flex flex-col items-center justify-center h-full pt-16">
              <h1 className='text-white text-center text-2xl mb-2 mt-5'>ARDUINO</h1>
              <h2 className='text-white text-center text-lg'>SENSOR</h2>
              </div>
            </div>
            </div>


            <div className='relative ml-20 '>
            <div className="w-44 h-72 bg-fundo-bg rounded-lg flex flex-col items-center p-4 relative">
            <img src={arduino} alt="Sensor" className="absolute -top-12 " />
            <div className="flex flex-col items-center justify-center h-full pt-16">
              <h1 className='text-white text-center text-2xl mb-2 mt-5'>ARDUINO</h1>
              <h2 className='text-white text-center text-lg'>SENSOR</h2>
              </div>
            </div>
            </div>


            <div className='relative ml-20'>
            <div className="w-44 h-72 bg-fundo-bg rounded-lg flex flex-col items-center p-4 relative">
            <img src={placa} alt="Sensor" className="absolute -top-12 w-40" />
            <div className="flex flex-col items-center justify-center h-full pt-16">
              <h1 className='text-white text-center text-2xl mb-2 mt-5'>ARDUINO</h1>
              <h2 className='text-white text-center text-lg'>SENSOR</h2>
              </div>
            </div>
            </div>


            </div>
     </div>
    </div>
  )
}
