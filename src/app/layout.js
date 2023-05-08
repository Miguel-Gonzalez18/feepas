// Estilos css globales
import './globals.css'
// Fuentes de google fonts
import { Lobster, Outfit } from 'next/font/google'
import Head from 'next/head'
//componentes
import Header from '@/components/header'
import Footer from '@/components/footer'


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
  return (
    <html lang="es">
      <Head>
        <title>Document title</title>
        <meta name="description" content="Fundación evangelismo externo: Pasión por las almas"></meta>
      </Head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
