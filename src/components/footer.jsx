import React from 'react'
//Estios
import styles from './footer.module.css'
//Componentes de NextJs
import Link from 'next/link'
//Iconos
import { BsInstagram } from "react-icons/bs";
import { RiFacebookCircleLine } from "react-icons/ri";
import { TbBrandYoutube } from "react-icons/tb";

export default function Footer() {
    // Obtener fecha actual
    const fecha = new Date()
    const year = fecha.getFullYear()

    return (
        <footer>
            <div className={styles.footer}>

                <div className={styles.footerHeader}>
                    <h3>Contacta con nosotros</h3>
                    
                    <div className={styles.iconosRedes}>
                        <Link href='#'>
                            <BsInstagram size={24} className={styles.btnIcon}/>
                        </Link>
                        <Link href='#'>
                            <RiFacebookCircleLine size={27} className={styles.btnIcon}/>
                        </Link>
                        <Link href='#'>
                            <TbBrandYoutube size={27} className={styles.btnIcon}/>
                        </Link>
                    </div>
                </div>
                <div className={styles.bodyFooter}>
                    <div>
                        <form className={styles.form}>
                            <div className={styles.group1}>
                                <input type='text' name='nombre' placeholder='Nombre completo' />
                                <input type="email" name="email" placeholder='Correo electrónico' />
                            </div>
                            <div className={styles.group2}>
                                <input type="number" name="telefono" placeholder='Número de teléfono' />
                                <textarea name="mensaje" cols="30" rows="10" placeholder='Cuentanos...'></textarea>
                            </div>
                            <input type="submit" value="Enviar" className={styles.btnEnviar} />
                        </form>
                    </div>
                    <div className={styles.map}>
                        <p>Visitanos!</p>
                        <iframe className={styles.mapa} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30266.15837760424!2d-70.03726673083163!3d18.51670622922192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaf8ae2ed2c5515%3A0x7afa79298d4454ef!2sAlcarrizos%2C%20Santo%20Domingo!5e0!3m2!1ses-419!2sdo!4v1682856643513!5m2!1ses-419!2sdo" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>

            <div className={styles.copy}>
                <small>Copyright &copy;. Todos los derechos reservados {year}</small>
                <small>Creado por Miguel Angel Dev</small>
            </div>
        </footer>
    )
}
