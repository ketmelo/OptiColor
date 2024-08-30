import React from 'react'
import logo from '../assets/logo.svg';
import ketlyn from '../assets/ketlyn-icon.svg'
import mariana from '../assets/mariana-icon.svg'
import nelson from '../assets/nelson-icon.svg'
import rafaella from '../assets/rafaella-icon.svg'
import linkedin from '../assets/linkedin-logo.svg'
import instagram from '../assets/instagram-logo.svg'

export default function Participantes() {
  return (
    
    <div className="min-h-screen flex flex-col justify-center items-center bg-fundo-bg">
    <div
      className="relative rounded-lg w-[1150px] h-[800px] mt-10 mb-10  bg-verdinho"
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

        </div>
      </header>



      <div className='flex items-center justify-center '>

      <div className='relative ml-7 mt-60'>
       <div className="w-44 h-96 bg-fundo-bg rounded-lg flex flex-col items-center p-4 relative bg-opacity-75">
       <img src={mariana} alt="foto mariana" className="absolute -top-12" />
      <div className="flex flex-col items-center justify-center h-full pt-16">
        <h1 className='text-white text-center text-2xl mb-2 mt-16'>Mariana Ribeiro</h1>
        <h2 className='text-white text-center text-lg'>17 anos</h2>

        <div className='flex items-center justify-center mt-10'>
          <a href=""><img src={linkedin} alt="" className='h-8 mr-12'/></a>
          <a href=""><img src={instagram} alt="" className='h-8' /></a>
        </div>
        </div>
      </div>
      </div>


      <div className='relative ml-20 mt-60'>
       <div className="w-44 h-96 bg-fundo-bg rounded-lg flex flex-col items-center p-4 relative bg-opacity-75">
       <img src={ketlyn} alt="foto ketlyn " className="absolute -top-12" />
      <div className="flex flex-col items-center justify-center h-full pt-16">
        <h1 className='text-white text-center text-2xl mb-2 mt-16'>Ketlyn de Melo</h1>
        <h2 className='text-white text-center text-lg'>17 anos</h2>

        <div className='flex items-center justify-center mt-10'>
          <a href=""><img src={linkedin} alt="" className='h-8 mr-12'/></a>
          <a href=""><img src={instagram} alt="" className='h-8' /></a>
        </div>
        </div>
      </div>
      </div>


      <div className='relative ml-20 mt-60'>
       <div className="w-44 h-96 bg-fundo-bg rounded-lg flex flex-col items-center p-4 relative bg-opacity-75">
       <img src={nelson} alt="foto nelson" className="absolute -top-12" />
      <div className="flex flex-col items-center justify-center h-full pt-16">
        <h1 className='text-white text-center text-2xl mb-2 mt-16'>João Louzeiros</h1>
        <h2 className='text-white text-center text-lg'>17 anos</h2>

        <div className='flex items-center justify-center mt-10'>
          <a href=""><img src={linkedin} alt="" className='h-8 mr-12'/></a>
          <a href=""><img src={instagram} alt="" className='h-8' /></a>
        </div>
        </div>
      </div>
      </div>


      <div className='relative ml-20 mt-60'>
       <div className="w-44 h-96 bg-fundo-bg rounded-lg flex flex-col items-center p-4 relative bg-opacity-75">
       <img src={rafaella} alt="foto rafaella" className="absolute -top-12" />
      <div className="flex flex-col items-center justify-center h-full pt-16">
        <h1 className='text-white text-center text-2xl mb-2 mt-16'>Rafaella Silveira</h1>
        <h2 className='text-white text-center text-lg'>17 anos</h2>

        <div className='flex items-center justify-center mt-10'>
          <a href=""><img src={linkedin} alt="" className='h-8 mr-12'/></a>
          <a href=""><img src={instagram} alt="" className='h-8' /></a>
        </div>
        </div>
      </div>
      </div>


      </div>
</div>
</div>

  )
}
