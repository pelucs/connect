'use client'

import Form from "./Form";
import TextGradient from "./TextGradient";

import { ApolloProvider } from '@apollo/client'
import { client } from "@/lib/apolllo";

export default () => {
  return(
    <div id="form" className="w-full min-h-screen py-16 px-5 md:px-16 flex items-center flex-col">
      <div className="flex flex-col items-center justify-center">
        <strong className="text-3xl md:text-5xl leading-tight flex flex-col md:flex-row items-center md:gap-3">
          Deseja se tornar

          <TextGradient title="voluntário?"/>
        </strong>

        <p className="mt-3 md:mt-5 w-full max-w-lg text-zinc-300 text-center">
          Preencha todos os campos corretamente e esteja consciente das informações que você cadastrou.
          Exigimos uma taxa de inscrição no valor de <span className="text-gradient text-lg font-bold">R$60,00 </span> 
          que será designada para compra das camisas de voluntários da conferência.
        </p>
      </div>

      <ApolloProvider client={client}>
        <Form/>
      </ApolloProvider>
    </div>
  );
}