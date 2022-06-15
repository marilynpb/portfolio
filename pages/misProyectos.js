import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function misProyectos(){
    return(
        <div className={styles.divhabi}>
        <header>
        <h1>Mis Proyectos</h1>
            <nav className={styles.divnav1}>
                   <a href="/" className={styles.inicio}>Inicio </a>
                </nav>
        </header>
        <main>
        <Image src='/const.png' width={200} height={200}/>
        <p>Esta sección se encuentra <br/> en construcción</p>
        </main>
        </div>
    )
}