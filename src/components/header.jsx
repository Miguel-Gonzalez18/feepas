"use client"
import { useState, useEffect } from 'react'
// importar la fuente
import { lobster } from '@/app/layout'
import { outfit } from '@/app/layout'
// Estilos
import styles from './header.module.css'
// Componentes de NextJs
import { usePathname } from 'next/navigation';
import Image from 'next/image'
import Link from 'next/link'
//Recursos
import logo from '../../public/img/logo.png'
import logo2 from '../../public/img/logo2.png'
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

export default function Header() {
    const pathname = usePathname();
    const [scrollActivo, setScrollActivo] = useState(false)
    const [menuActivo, setMenuActivo] = useState(false)

    useEffect(()=> {
        window.addEventListener('scroll', ()=>{
            var header = document.querySelector('header')
            header.classList.toggle('sticky', window.scrollY > 0)
            if(window.scrollY > 0){
                setScrollActivo(true)
            }
            else{
                setScrollActivo(false)
            }
        })
    },[])

    useEffect(()=> {
        setMenuActivo(false)
    },[pathname])

    return (
        <header className={pathname === '/' ? `${styles.header_inicio}` : `${styles.header}`}>
            <div className={`container ${styles.contenidoHeader}`}>
                <div className={styles.logo}>
                    {pathname === '/' ? (
                        <Image className='logoImg' src={scrollActivo === true ? logo2 : logo} alt='logo del sitio' width={70} />
                    ) : (
                        <Image className='logoImg' src={logo2} alt='logo del sitio' width={70} />
                    )}
                    <h1 className={`texto-logo ${lobster.className}`}>Pasión por las almas (FEEPAS)</h1>
                </div>
                <nav className='navegacion'>
                    <ul className={`${styles.nav} ${outfit.className} ${menuActivo === true ? 'menuActivo' : ''}`}>
                        <li>
                            <Link href="/">Inicio</Link>
                        </li>
                        <li>
                            <Link href="/nosotros">Sobre nosotros</Link>
                        </li>
                        <li>
                            <Link href="/eventos">Actividades</Link>
                        </li>
                        <li>
                            <Link href="/#contacto">Contacto</Link>
                        </li>
                    </ul>
                </nav>
                {
                    menuActivo === false ?
                        (
                            <FiMenu size={25} color={pathname === '/' ? scrollActivo === true ? '#001D7E' : '#ffffff' : '#001D7E'} className={styles.iconMenu} onClick={()=> setMenuActivo(true)}/>
                        )
                    :
                        (
                            <IoMdClose size={25} color={pathname === '/' ? scrollActivo === true ? '#001D7E' : '#ffffff' : '#001D7E'} className={styles.iconMenu} onClick={()=> setMenuActivo(false)} />
                        )
                }
            </div>
        </header>
    )
}

