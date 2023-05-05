import React from 'react'
//estilos
import styles from './nosotros.module.css'
//componentes de Nextjs
import Link from 'next/link'
import Image from 'next/image'
//Recursos
import imgLogo from '../../../public/img/logo2.png'

export default function Nosotros() {
    return (
        <main>
            <div className={styles.presentation}>
                <div className={styles.title}>
                    <h1>Sobre Nosotros</h1>
                    <span></span>
                </div>
                <div className={styles.credit}>
                    <Link target='blank' href='https://unsplash.com/es/@kellysikkema?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText' className={styles.creditA}>
                        Foto de <span>Kelly Sikkema</span> en <span>Unsplash</span>
                    </Link>
                </div>
            </div>

            <div className={styles.about}>
                <h3>Erasmo Brioso Ramirez</h3>
                <p>Pastor de la Iglesia Evangelistica un mensaje de Dios para el mundo y CEO de la Fundación evangelismo extremo.</p>
                <div className={styles.contentAbout}>
                    <div className={styles.imgPerfil}>

                    </div>
                    <p>
                    Erasmo Brioso Ramírez nació en Constanza de República Dominicana el 12 de mayo de 1976, siendo de edad de 7 años emigró juntos a sus padres y hermanos a santo domingo capital de República Dominicana hace la confesión de fe en el año 1992 a la edad de 15 año. En el año 1997 fundó la confraternidad de jóvenes de arroyo hondo, “Juventud pregoneros de justicia”, en el año 2001 es ungido cómo evangelista, luego como ministro licenciado y en el 2022 como ministro ordenado por el pastor Iderfonso Ortiz, presidente fundador del concilio Damasco pentecostal. Junto a la pastora angela Brioso funda la fundación evangelismo extremo pasión por las almas (feepas) con el eslogan “Hasta allá llegaremos”.
                    </p>
                </div>
            </div>

            <div className={styles.history}>
                <h3>Conoce nuestra historia</h3>
                <div className={styles.contentHistory}>
                    <p>
                    La Fundación evangelismo extremo pasión por almas (FEEPAS) es una institución sin fines de lucros con personalidad jurídica propia al Amparo de la ley 122-05 de fecha tres (03) del mes de mayo del año 2005, que regula y fomenta las asociaciones sin fines de lucros de la República Dominicana; específicamente una fundación cristiana de beneficio público o de servicio a tercero y a sus miembros, cuya actividades se encuentran orientadas a ofrecer servicio básico en beneficio de toda la sociedad o de segmentos del conjunto de este, conforme a los artículos 10 #1, y artículo 11 de la citada ley, es regida además por la constitución y las leyes de la República Dominicana por sus estatutos y normas que establezcan sus órganos de dirección y gobierno.
                    </p>
                    <Image src={imgLogo} alt='Image logo' width={200} />
                </div>
            </div>

            <div className={styles.history2}>
                <p>
                La Fundación Evangelismo Extremo Pasión Por Las Almas (FEEPAS), nace el 11 de octubre del año 2013, cuando el Ministerio Evangelistico Un Mensaje de Dios Para El Mundo, integrado por nueve misioneros, se dirigieron a la Cordillera Central a un campito llamado EL Limoncito el cual pertenece a Constanza. La travesía fue tan difícil, ya que los caminos de difícil acceso estaban acompañados de una torrencial lluvia y ríos crecidos, casi en todas las cuestas tuvimos que bajarnos bajo fuerte lluvias y un frío fulminante, teníamos que empujar una camioneta sencilla, que fue el vehículo que nos transportó, no nos salía otra palabra para describir aquella obra misionera que no fuera “EVANGELISMO EXTREMO”, y que había que tener “PASIÓN POR LAS ALMAS”, eso lo pudimos comprobar el día 12 de octubre del año 2013, segundo día de la Misión, cuando nos dispusimos a evangelizar todos los hogares del Limoncito, ya que cuando empezamos a evangelizar a las 2:00 de la tarde empezó a caer tremendo torrencial de lluvia, así que tuvimos que evangelizar con frío y agua que manaba del cielo y que bajaban de las montañas donde se encuentran las pequeñas casas, por eso fue Creado la fundación “EVANGELISMO EXTREMO PASIÓN POR LAS ALMAS”
                </p>
            </div>
        </main>
    )
}
