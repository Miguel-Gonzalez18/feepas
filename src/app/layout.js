"use client"
// Estilos css globales
import './globals.css'
// Fuentes de google fonts
import { Lobster, Outfit } from 'next/font/google'
//componentes
import Header from '@/components/header'
import Footer from '@/components/footer'

import { usePathname } from 'next/navigation';
import Script from 'next/script'


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
  const ruta = pathname.substring(1)
  return (
    <html lang="es">
      <head>
        <title>{pathname === '/' ? 'FEEPAS - Inicio' : `FEEPAS - ${ruta}`}</title>
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
