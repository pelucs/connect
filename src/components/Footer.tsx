import { Instagram } from "lucide-react";
import Image from "next/image"

import logoAdvec from '../assets/logo-advec.svg';
import logoConnect from '../assets/logotipo-connect.svg';

export default () => {
  return(
    <div className="centralized flex-col space-y-10 py-10 px-5 md:px-10">
      <div className="grid grid-cols-2 gap-10">
        <div className="flex justify-end">
          <Image src={logoAdvec} alt="" className="w-auto h-[45px]"/>
        </div>

        <div className="flex justify-start">
          <Image src={logoConnect} alt="" className="w-auto h-[45px]"/>
        </div>
      </div>

      <a 
        target="_blank" 
        className="button"
        href="https://www.instagram.com/connect.campinagrande/" 
      >
        <Instagram className="w-6 h-6 rounded-full"/>

        Instagram
      </a>

      <p className="mt-10 text-center">
        Rua Aluísio Cunha Lima, 185 Catolé <br/> 
        Campina Grande - PB
      </p>

      <h1 className="text-zinc-400 text-sm">
        &copy;2023 - Todos os direitos reservados
      </h1>
    </div>
  );
}