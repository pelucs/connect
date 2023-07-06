import ButtonDown from "./ButtonDown";
import TextGradient from "./TextGradient";

export default () => {
  return(
    <div className="w-full min-h-screen py-16 px-5 md:px-16 flex flex-col items-center gap-20">
      <div className="w-full">
        <div className="flex flex-col justify-center">
          <strong className="text-xl md:text-5xl leading-tight flex items-center gap-2">
            Convidados

            <TextGradient title="especiais."/>
          </strong>

          <p className="mt-10 w-full max-w-lg text-zinc-300">
            Iremos receber a ilustre presença do <span className="text-gradient text-lg font-bold">Pr. Fulano de Tal </span> 
            que ira ministrar a palavra durante os dois dias de evento. Também iremos receber com muita alegria
            a presença do cantor <span className="text-gradient text-lg font-bold">Sicrano de tal </span> que será responsável pelo
            momento de adoração durante os dois dias.  
          </p>
        </div>

        <div className="mt-20 grid grid-cols-2 place-items-center">
          <div>
            <div className="w-[350px] h-[550px] rounded-tl-3xl  border border-purple-primary"/>

            <div className="gradient py-3 px-4 text-xl rounded-br-3xl">
              Pr. Fulano de Tal
            </div>
          </div>

          <div>
            <div className="w-[350px] h-[550px] rounded-tl-3xl  border border-purple-primary"/>

            <div className="gradient py-3 px-4 text-xl rounded-br-3xl">
              Sicrano de Tal
            </div>
          </div>
        </div>
      </div>

      <ButtonDown/>
    </div>
  );
}