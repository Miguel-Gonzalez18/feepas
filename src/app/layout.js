"use client"
// Estilos css globales
import './globals.css'
// Fuentes de google fonts
import { Lobster, Outfit } from 'next/font/google'
//componentes
import Header from '@/components/header'
import Footer from '@/components/footer'

import { usePathname } from 'next/navigation';


export const lobster = Lobster({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap'
})

export const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap'
})

export default function RootLayout({ children }) {
  const pathname = usePathname()
  console.log(pathname)
  return (
    <html lang="es">
      <head>
        <title>FEEPAS</title>
        <meta name="description" content="Fundación evangelismo externo: Pasión por las almas"/>
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
