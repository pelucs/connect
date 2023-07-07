import './globals.css'
import { Inter, Bai_Jamjuree as BaiJamburee } from 'next/font/google'

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
        {children}
      </body>
    </html>
  )
}
