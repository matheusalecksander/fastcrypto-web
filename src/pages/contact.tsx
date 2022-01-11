import Head from 'next/head';

import styles from '../styles/pages/contact.module.scss'

export default function Contact() {
  return (
    <>
      <Head>
        <title>FastCrypto - Contact</title>
      </Head>
      <main className={styles.container}>
        <section className={styles.contentContainer}>
          <h2>Deseja entrar em contato?</h2>
          <p>Segue meus contatos</p>
          <ul>
            <li>Linkedin: <a href="https://linkedin.com/in/matheus-alecksander" target="_blank">Matheus Alecksander</a></li>
            <li>Github: <a href="https://github.com/matheusalecksander" target="_blank">https://github.com/matheusalecksander</a></li>
            <li>Email: <a href="mailto:matheusalecksander@gmail.com">matheusalecksander@gmail.com</a></li>
          </ul>
        </section>
      </main>
    </>
  )
}