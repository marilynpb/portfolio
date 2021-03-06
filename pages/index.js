import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'react'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title> Portafolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Bangers&family=Lato:wght@400;700&family=Lobster&family=Poppins:wght@500&family=Signika+Negative:wght@700&display=swap');
        </style>
      </Head>

      <header>
      <h2 className={styles.port}>Portfolio</h2>
          <div className={styles.divnav}>
            <nav className={styles.nav}>
              <ul >
                <li className={styles.li}>
                  <a href="habilidades" className={styles.a}>Habilidades </a>
                </li> 
                <li className={styles.li}>
                  <a href="misProyectos">Mis proyectos </a>
                </li>
                <li className={styles.li}>
                  <a href="contacto">Contacto </a>
                </li>
              </ul>
            </nav>
            </div>
      </header>

      
      <main>
      <div>
          <h2 className={styles.name}>Gloria Marilyn <br/> Perez Boyko</h2>
        <div className={styles.header1}>
        <p><br/></p>
      </div>
       
      <div className={styles.fotoinsta}>
        <div className={styles.insta}>
        <a href="https://www.instagram.com/glumym">www.instagram.com/glumym</a>
        </div>
        <div className={styles.foto}>
        <Image src='/photo2.jpg' width={300} height={500}/>
          <div className={styles.divsobre}>
          <h3 className={styles.sobremi}></h3>
          </div>
        </div>
      </div>
    </div>

    <section className={styles.section}>
      <h1 className={styles.sectionh1}>Sobre mi:</h1>
      <ul className={styles.sectionul}>
        <li><span className={styles.sectionspan}>Fecha de Nacimiento:</span> 04/05/1993</li>
        <li><span className={styles.sectionspan}>Edad:</span> 29 a??os</li>
        <li><span className={styles.sectionspan}>DNI:</span> 34343424</li>
        <li><span className={styles.sectionspan}>Domicilio:</span> Villa Carlos Paz, Cordoba</li>
        <li><span className={styles.sectionspan}>Estado civil:</span> Casada</li>
      <h3 className={styles.sectionh3}>Formaci??n</h3>
        <li className={styles.sectiondisc}>Curso Reparacion de PC</li>
        <li className={styles.sectiondisc}>Tecnico Sup. de Analisis de Sitemas</li>
        <li className={styles.sectiondisc}>Bootcamp Educacion IT FullStack</li>
      </ul>
    </section>

  

      </main>

      <footer className={styles.footer}>
      <h4 className={styles.contac}>Contacto:</h4>
        <h3 className={styles.email}> <br/>
        <a href='mailto:g.marilyn182@hotmail.com?subject=Consulta'> 
        g.marilyn182@hotmail.com
        </a>
        </h3>
      </footer>
    </div>
  )
}
