'use client'

import { 
  AlertTriangle, 
  Copy, 
  MoveRight, 
  Phone, 
  Shirt, 
  Split, 
  User } 
from "lucide-react";

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schemaForm = z.object({
  name: z.string().nonempty("*Informe o seu nome"),
  contact: z.string().nonempty("*Inform seu contato"),
  departament: z.string().nonempty("*Informe o departamento"),
  sizeShirt: z.string().nonempty("*Informe o tamanho da sua camisa")
});

type SchemaFormData = z.infer<typeof schemaForm>;

export default () => {

  const { register, handleSubmit, formState: { errors } } = useForm<SchemaFormData>({
    resolver: zodResolver(schemaForm)
  });

  //ENVIANDO FORMULÁRIO
  const sendForm = (data: SchemaFormData) => {
    console.log(data)
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

                <option value="Mídia">Mídia</option>
                <option value="Welcome">Welcome</option>
                <option value="Comunicação">Comunicação</option>
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
      </div>

      <div className="mt-5 px-3 md:px-5 py-2 md:py-4 flex items-start gap-3 md:gap-5 bg-zinc-800 border 
      rounded border-zinc-700">
        <div className="w-12 md:w-12 h-10 md:h-12 centralized rounded gradient text-white">
          <AlertTriangle className="w-6 h-6"/>
        </div>

        <p className="text-zinc-400 w-full max-w-lg text-sm md:text-base">
          É importante que você envie o comprovante de pagamento para o contato 
          <a href="#" className="text-gradient font-bold text-lg underline"> (83) 90000-0000</a>.
        </p>
      </div>

      <div className="mt-5 flex flex-col gap-2">
        <span className="uppercase text-xs font-bold text-zinc-400">
          Pix copia e cola
        </span>

        <div className="px-5 py-4 bg-zinc-800 border rounded border-zinc-700 flex items-center gap-3">
          <p className="whitespace-nowrap text-ellipsis overflow-hidden">
            aksjdlaskldjalksldkklajskldjklajslkdjaksdasdaksdjalksdasdadassdasdasdasdassdasdasdasdasdas
          </p>

          <span>
            <Copy className="w-6 h-6 text-zinc-400 hover:text-white transition-colors"/>
          </span>
        </div>
      </div>

      <button type="submit" className="w-full mt-5 button">
        Enviar formulário

        <MoveRight className="w-6 h-6"/>
      </button>
    </form>
  );
}
