import styles from '../styles/Home.module.css'
import {useState } from 'react'
import Image from 'next/image'


export default function contacto(){
    return(
        <div>
            <header>
                <div className={styles.header}>
                <h1 className={styles.port}>Contacto</h1>
                <nav className={styles.divnav1}>
                   <a href="/" className={styles.inicio}>Inicio </a>
                </nav>
                </div>
            </header>
        <main>
            <div className={styles.divform}>
                <form className={styles.form}>
                    <input type="text"
                        className={styles.input} placeholder="Nombre" name='nombre'/><br/>

                    <input type="email" 
                        className={styles.input} placeholder="Email" name='email'/><br/>

                    <input type="text" 
                        className={styles.mensaje}placeholder="Mensaje" name='mensaje'/><br/>
                    
                    <input type="button" className={styles.button} value="Enviar"/> 
                    
                </form>
            </div>
        </main>
        <footer className={styles.footer1}>
            <div className={styles.divfooter}>
            <a href='https://walink.co/2fb834' target="blanc">
            <Image src='/ws.png' width={60} height={60} className={styles.imgws}/>
            </a>
            <h4 className={styles.h4footer}>Sitio desarrollado por <bolt>Marilyn Perez Boyko</bolt></h4>
            <h4 className={styles.h4}>Sigueme en Facebook!</h4>
            <div className={styles.redes}>
            <a href='https://www.facebook.com/gaming/GlumyInmortal' target="blanc">
            <Image src='/face.png' width={70} height={70}/>
            </a>
            </div>
            </div>
        </footer>
        </div>
  
    )
}