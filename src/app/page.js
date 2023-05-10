import styles from './page.module.css'

import { BiDonateHeart } from "react-icons/bi";

//Componentes de Nextjs
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <div className={styles.backHome}>
        <div className={`container ${styles.textoPresentacion}`}>
          <h1>Fundación <br/> evangelismo extremo: Pasión por las <br/> almas</h1>
          <p>~Hasta allá llegaremos</p>
        </div>
      </div>

      <section className='container'>
        <div className={styles.perfil}>

          <div>
            <div className={styles.contenedorFotos}>
              <div className={styles.foto}></div>
            </div>
          </div>

          <div className={styles.perfilDescription}>
            <h2>Erasmo Brioso Ramirez</h2>
            <p className={styles.subTitle}>Pastor de la Iglesia Evangelistica un mensaje de Dios para el mundo y CEO de la Fundación evangelismo extremo.</p>
            <p>
            Erasmo Brioso Ramírez nació en Constanza de República Dominicana el 12 de mayo de 1976, siendo de edad de 7 años emigró juntos a sus padres y hermanos a santo domingo capital de República Dominicana hace la confesión de fe en el año 1992 a la edad de 15 año. En el año 1997 fundó la confraternidad de jóvenes de arroyo hondo, “Juventud pregoneros de justicia”, en el año 2001 es ungido cómo evangelista, luego como ministro licenciado y en el 2022 como ministro ordenado por el pastor Iderfonso Ortiz, presidente fundador del concilio Damasco pentecostal. Junto a la pastora angela Brioso funda la fundación evangelismo extremo pasión por las almas (feepas) con el eslogan “Hasta allá llegaremos”.
            </p>
            <Link href='/nosotros' className={styles.btnConoceMas}>
              Conoce más
            </Link>
          </div>
          
        </div>
      </section>

      <section>
        <div className={styles.fundacionNombre}>
          <h3>Fundación evangelismo extremo: Pasión por las almas</h3>
          <span></span>
        </div>
        <div className={styles.sobreFundacion}>
          <p>
          La Fundación Evangelismo Extremo Pasión Por Las Almas (FEEPAS), nace el 11 de octubre del año 2013, cuando el Ministerio Evangelistico Un Mensaje de Dios Para El Mundo, integrado por nueve misioneros, se dirigieron a la Cordillera Central a un campito llamado EL Limoncito el cual pertenece a Constanza.
          </p>
          <Link href='/nosotros' className={styles.btnFundacion}>
            Conoce más
          </Link>
        </div>
      </section>

      <section className={styles.seccionCausas}>
        <div className={styles.fondoOscuro}>
          <div className={styles.info}>
            <p>¡Estamos comprometidos en servir a nuestra comunidad y a aquellos que más necesitan de nuestra ayuda!</p>
            <Link href='/evento' className={styles.btnCausas}>
              Conoce más causas
            </Link>
          </div>
        </div>
        <div className={styles.grid}>
          <div className={styles.img1}></div>
          <div className={styles.img2}></div>
          <div className={styles.img3}></div>
          <div className={styles.img4}></div>
          <div className={styles.img5}></div>
          <div className={styles.img6}></div>
          <div className={styles.img7}></div>
          <div className={styles.img8}></div>
        </div>
      </section>

      <section className={styles.donaciones}>
        <div className={styles.contenidoDonacion}>
          <h3>¡Tus aportes nos ayudan!</h3>
          <p>Su contribución nos permite seguir ayudando a las personas y comunidades que más lo necesitan. Con su donación, podemos llevar a cabo proyectos de construcción, programas de alimentación y nutrición, asistencia médica y de salud, y muchas otras iniciativas que mejoran la calidad de vida de las personas.</p>
          <Link href='/evento' className={styles.btnDonaciones}>
              donar <BiDonateHeart size={25} className={styles.btnIcon} />
            </Link>
        </div>
      </section>
    </main>
  )
}
