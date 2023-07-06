import Image from 'next/image';
import TextGradient from "./TextGradient";

import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import ButtonDown from './ButtonDown';

export default () => {
  return(
    <div className="py-16 px-5 md:px-16 w-full min-h-screen flex flex-col items-center gap-20">
      <div className="w-full grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <strong className="text-3xl md:text-5xl leading-tight">
            Serão grandes dias de <br/>

            <TextGradient title="louvor e adoração."/>
          </strong>

          <p className="mt-5 md:mt-10 w-full max-w-lg text-zinc-300">
            O Connect Conference é realizado pela ADVEC (Assembléia de Deus Vitória em Cristo - Campina Grande) 
            e é voltado para jovens que desejam provar do amor de Cristo. Você que é jovem está convidado e será
            um prazer recebe-lo em nossa casa. Serão dois dias de pura adoração e aprendizagem.   
          </p>
        </div>

        <div className="mt-10 md:mt-0 grid grid-cols-2 gap-5">
          <Image 
            src={img1} 
            alt=""
            className="w-[350px] rounded-tl-3xl rounded-br-3xl bg-gray-800 shadow-md shadow-black-100"
          />
          <Image 
            src={img2} 
            alt=""
            className="w-[350px] rounded-tl-3xl rounded-br-3xl bg-gray-800 relative top-40 shadow-md shadow-black-100"
          />
          <Image 
            src={img3} 
            alt=""
            className="w-[350px] rounded-tl-3xl rounded-br-3xl bg-gray-800 shadow-md shadow-black-100"
          />
        </div>
      </div>

      <ButtonDown/>
    </div>
  );
}