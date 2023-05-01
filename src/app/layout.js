// Estilos css globales
import './globals.css'
// Fuentes de google fonts
import { Lobster, Outfit } from 'next/font/google'
//componentes
import Header from '@/components/header'
import Footer from '@/components/footer'

export const metadata = {
  title: 'FEEPAS',
  description: 'Fundación evangelismo externo: Pasión por las almas',
}

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
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
