'use client'

import './globals.css'
import { Inter, Bai_Jamjuree as BaiJamburee } from 'next/font/google'

import { ApolloProvider } from '@apollo/client' 
import { client } from '@/lib/apolllo';

const inter = Inter({ subsets: ['latin'], variable: "--font-inter" });
const baiJamjuree = BaiJamburee({ subsets: ['latin'], weight: "600", variable: "--font-bai-jamjuree" });

export const metadata = {
  title: 'Connect Conference',
  description: 'Conferência de Jovens 2023 da ADVEC Campina Grande',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={`${inter.variable} ${baiJamjuree.variable} font-sans text-zinc-100 bg-zinc-800`}>
        <ApolloProvider client={client}>
          {children}
        </ApolloProvider>
      </body>
    </html>
  )
}
