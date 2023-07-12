import logoConnect from '../assets/logo-connect.svg';
import Image from 'next/image';
import TextGradient from './TextGradient';
import ButtonDown from './ButtonDown';

import { Users } from 'lucide-react';

export default () => {
  return(
    <div className="w-full min-h-screen py-16 px-5 md:px-16 flex items-center flex-col justify-between bg-[url(../assets/bg.png)] bg-cover bg-center">
      <Image 
        src={logoConnect} 
        alt="Logo do Connect"
        className="w-24"
      />

      <div className="centralized flex-col space-y-5">
        <div className="px-6 py-4 bg-black/30 backdrop-blur-xl rounded-md font-alt text-sm uppercase border 
        leading-none border-purple-primary">
          // 16 e 17 de Setembro
        </div>

        <strong className="flex items-center flex-col md:flex-row gap-2 text-6xl md:text-8xl font-bold">
          Connect 

          <TextGradient title="Conference"/>
        </strong>

        <p className="text-zinc-300 w-full max-w-lg text-center">
          Nós vamos construir um legado de fé, esperança e amor para as futuras gerações e não mediremos
          esforços para cumprir esse propósito.
        </p>

        <a href="#form" className="button">
          <Users className="w-6 h-6"/>

          Seja voluntário
        </a>
      </div>

      <ButtonDown/>
    </div>
  ) 
}
