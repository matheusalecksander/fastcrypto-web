import Head from 'next/head';
import { Button } from '../components/Button';

import styles from '../styles/pages/about.module.scss';

export default function About() {
  return (
    <>
      <Head>
        <title>FastCrypto - About</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.contentSection}>
          <h1>
            Consulte as cotações das principais cryptomoedas!
          </h1>
          <p>
            Rápido, fácil, na palma da sua mão!
          </p>
          <Button />
          <div className={styles.infoContainer}>
            <h2>O projeto</h2>
            <p>
              Olá! Me chamo Matheus Alecksander, estou iniciando no mundo do desenvolvimento
              front-end e criei este site para fins de estudo. <br />
              Todos os dados são fornecidos pela Nomics, através de sua api gratuita.
              <a href="https://nomics.com" target="_blank" rel="noreferrer">&nbsp;Confira aqui.</a> <br />
            </p>
            <h3>
              Tecnologias utilizadas no projeto:
            </h3>
            <ul>
              <li>React</li>
              <li>Next</li>
              <li>TypeScript</li>
              <li>Axios</li>
              <li>SASS</li>
              <li>React Icons</li>
            </ul>
          </div>
        </section>
        <section className={styles.contentSection}>
          <div className={styles.imagesContainer}>
            <img src="/images/cryptologos.svg" alt="bitcoin, ethereum and tether logo" />
          </div>
        </section>
      </main>
    </>
  )
}