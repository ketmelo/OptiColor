import React from 'react';
import logo from '../assets/logo.svg';
import fundo from '../assets/Home.svg';
import lampada from '../assets/lampada.svg';
import cerebro from '../assets/cerebro.svg';
import maos from '../assets/maos.svg';

function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-fundo-bg">
      <div
        className="relative rounded-lg w-[1150px] h-[525px] mt-10"
        style={{ backgroundImage: `url(${fundo})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-80 rounded-lg"></div>

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
          <h1 className='absolute text-white mt-60 ml-[620px] w-[450px] text-right text-4xl font-aoboshi'>
            OPTI-COLOR: O FUTURO PERTENCE ÀQUELES QUE ABRAÇAM A MUDANÇA.
          </h1>
        </header>
      </div>

      <div className="w-[1150px] h-72 bg-bg-container mt-20 rounded-lg flex items-center">
        <div className="flex items-center">
          <img src={lampada} alt="Lâmpada" className="w-80" />
            <h1 className='text-white text-right text-2xl p-6 mr-10'>O Opti-Color é um projeto inovador que ajuda pessoas com dificuldades visuais como daltonismo a identifcar cores certas. Ele um sensor de cor que, transmite
            essas informações a um controle portátil. O controle fornece orientações em tempo real por meio de áudio.</h1>
        </div>
      </div>

      <div className="w-[1150px] h-72 bg-bg-container mt-20 rounded-lg flex items-center">
        <div className="flex items-center">
        <h1 className='text-white text-left text-2xl p-6 ml-10'>O Opti-Color se destaca pela integração de um sensor para fornecer informações sobre a cor apontada, algo único entre dispositivos de auxílio. Sua adaptabilidade a diferentes ambientes, tanto residenciais quanto comerciais, facilitando para os usuários.</h1>
          <img src={cerebro} alt="Lâmpada" className="w-80 h-56" />
            
        </div>
      </div>

      <div className="w-[1150px] h-72 bg-bg-container mt-20 rounded-lg flex items-center mb-20 ">
        <div className="flex items-center">
          <img src={maos} alt="maos" className="w-80" />
            <h1 className='text-white text-right text-2xl p-6 mr-10'>O Opti-Color visa ajudar pessoas com deficiência visual a se vizualizarem cores corretamente, promovendo sua inclusão e independência. O projeto busca melhorar a qualidade de vida dessas pessoas, permitindo que explorem o mundo ao seu redor com maior liberdade e segurança.</h1>
        </div>
      </div>

      
      
    </div>
  );
}

export default Home;
