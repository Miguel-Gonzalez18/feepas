import React, {useState, useEffect} from 'react'
//Estilos
import styles from './noFound.module.css'
//componentes de NextJs
import Image from 'next/image'
import Link from 'next/link'
//recursos
import imgNofound from '../public/img/imgNoFound.png'
//layout
import RootLayout from '@/app/layout'

export default function Nofound() {
    const [paginaLista, setPaginaLista] = useState(false)
    useEffect(()=>{
        setPaginaLista(true)
    }, [])

    return paginaLista ? (
        <RootLayout>
            <div className={styles.contenido404}>
                <Image src={imgNofound} alt='Imagen 404' width={300} />
                <h3>¡Ups! Lo siento, parece que te has perdido. ¿Por qué no vuelves a la página de inicio?</h3>
                <Link href='/' className={styles.btnBack}>
                    Volver a el inicio
                </Link>
            </div>
        </RootLayout>
    ) : null
}
