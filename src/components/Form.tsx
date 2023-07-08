'use client'

import { 
  AlertTriangle, 
  Copy, 
  Loader, 
  MoveRight, 
  Phone, 
  Shirt, 
  Split, 
  User } 
from "lucide-react";

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCreateFormMutation } from "@/graphql/generated";

const schemaForm = z.object({
  name: z.string().nonempty("*Informe o seu nome"),
  contact: z.string().nonempty("*Inform seu contato"),
  departament: z.string().nonempty("*Informe o departamento"),
  sizeShirt: z.string().nonempty("*Informe o tamanho da sua camisa"),
  description: z.string()
});

type SchemaFormData = z.infer<typeof schemaForm>;

export default () => {

  const [createForm, { loading }] = useCreateFormMutation();

  const { register, handleSubmit, formState: { errors } } = useForm<SchemaFormData>({
    resolver: zodResolver(schemaForm)
  });

  //ENVIANDO FORMULÁRIO
  const sendForm = async (data: SchemaFormData) => {
    await createForm({
      variables: {
        name: data.name,
        contact: data.contact,
        departament: data.departament,
        sizeShirt: data.sizeShirt,
        description: data.description
      }
    })
    .then(() => {
      alert("Formulário enviado com sucesso!")
      window.location.reload();
    })
    .catch(() => alert("Opss! Algo deu errado."))
  }

  const copyTransfer = () => {
    let textCopy = document.querySelector("#copy");

    if(textCopy){
      let formatText = textCopy.innerHTML.replace("(Lucas Adriel)", "");

      navigator.clipboard.writeText(formatText);

      alert("Copiado para área de transferência")
    }
  }

  return(
    <form onSubmit={handleSubmit(sendForm)} className="mt-16 w-full max-w-2xl px-6 py-5 rounded-md bg-zinc-900 backdrop-blur-md">
      <div>
        <strong className="text-2xl leading-relaxed">
          Formulário de inscrição
        </strong>

        <p className="text-zinc-400">
          Todos os campos são obrigatórios
        </p>
      </div>

      <div className="mt-5 flex flex-col gap-5 md:gap-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="uppercase text-xs text-zinc-400 font-bold">Nome</label>

            <div className="flex items-center relative">
              <User className="w-6 h-6 absolute left-3 text-zinc-500"/>

              <input
                placeholder="Informe seu nome completo"
                className="input"
                {...register("name")}
              />
            </div>

            {errors.name && (
              <span className="text-xs font-bold uppercase text-purple-primary">
                {errors.name.message}
              </span>
            )}
          </div>
          
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="uppercase text-xs text-zinc-400 font-bold">Contato (Whatsapp)</label>

            <div className="flex items-center relative">
              <Phone className="w-6 h-6 absolute left-3 text-zinc-500"/>

              <input
                placeholder="Informe seu contato"
                className="input"
                {...register("contact")}
              />
            </div>

            {errors.contact && (
              <span className="text-xs font-bold uppercase text-purple-primary">
                {errors.contact.message}
              </span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="uppercase text-xs text-zinc-400 font-bold">Escolha o departamento</label>

            <div className="flex items-center relative">
              <Split className="w-6 h-6 absolute left-3 text-zinc-500"/>

              <select 
                defaultValue="default" 
                className="input"
                {...register("departament")}
              >
                <option disabled value="default">Escolha o departamento</option>

                <option 
                  value="Welcome"
                  label="Welcome (Responsável pela organização do culto e recepção)"
                />

                <option 
                  value="Creative"
                  label="Creative (responsável pela captura visual, criação dos layout e controle das redes sociais)"
                />
                
                <option 
                  value="Produção"
                  label="Produção (responsável pela criação e montagem do projeto visual)"
                />

                <option 
                  value="Theater"
                  label="Theater (Criação e execução de peças teatrais)"
                />

                <option 
                  value="Dance"
                  label="Dance (Responsável pela criação da dança, seja ela coreografada ou espontânea)"
                />
              </select>
            </div>

            {errors.departament && (
              <span className="text-xs font-bold uppercase text-purple-primary">
                {errors.departament.message}
              </span>
            )}
          </div>
          
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="uppercase text-xs text-zinc-400 font-bold">Tamanho da camisa</label>

            <div className="flex items-center relative">
              <Shirt className="w-6 h-6 absolute left-3 text-zinc-500"/>

              <input
                placeholder="Informe o tamanho da sua camisa"
                {...register("sizeShirt")}
                className="input"
              />
            </div>

            {errors.sizeShirt && (
              <span className="text-xs font-bold uppercase text-purple-primary">
                {errors.sizeShirt.message}
              </span>
            )}
          </div>

        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="" className="uppercase text-xs text-zinc-400 font-bold">Alguma observação? (OPCIONAL)</label>
        
          <textarea
            {...register("description")}
            placeholder="Escreva uma mensagem"
            className="w-full h-20 rounded px-4 py-3 outline-none text-sm bg-zinc-800 border 
            border-zinc-700 hover:border-purple-primary focus:border-purple-primary 
            transition-all resize-none"
          />
        </div>
      </div>

      <div className="mt-5 px-3 md:px-5 py-2 md:py-4 flex items-start gap-3 md:gap-5 bg-zinc-800 border 
      rounded border-zinc-700">
        <div className="w-12 md:w-12 h-10 md:h-12 centralized rounded gradient text-white">
          <AlertTriangle className="w-6 h-6"/>
        </div>

        <p className="text-zinc-400 w-full max-w-lg text-sm md:text-base">
          É importante que você envie o comprovante de pagamento para o contato 
          <span className="text-gradient font-bold text-lg underline"> (83) 98729-6826</span>.
        </p>
      </div>

      <div className="mt-5 flex flex-col gap-2">
        <span className="uppercase text-xs font-bold text-zinc-400">
          Pix para pagamento
        </span>

        <div className="px-5 py-4 bg-zinc-800 border rounded border-zinc-700 flex items-center justify-between gap-3">
          <p id="copy" className="whitespace-nowrap text-ellipsis overflow-hidden">
            lucasaadriel@gmail.com (Lucas Adriel)
          </p>

          <span onClick={copyTransfer} className="cursor-pointer">
            <Copy className="w-6 h-6 text-zinc-400 hover:text-white transition-colors"/>
          </span>
        </div>
      </div>

      <button disabled={loading} type="submit" className="w-full mt-5 button">
        {loading ? (
          <span>
            <Loader className="w-6 h-6 animate-spin"/>
          </span>
        ) : (
          <>
            Enviar formulário

            <MoveRight className="w-6 h-6"/>
          </>
        )}
      </button>
    </form>
  );
}
