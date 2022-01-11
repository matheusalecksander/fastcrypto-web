import Head from 'next/head';
import { CryptoItem } from '../components/CryptoItem';
import { api } from '../services/api';

import styles from '../styles/pages/home.module.scss';

interface CryptoProps {
  id: string;
  name: string;
  price: number;
  rank: number;
  logo_url: string;
  cryptos: []
}

const apiKey = process.env.API_KEY

export async function getServerSideProps() {
  const response = await api.get(`/currencies/ticker?key=${apiKey}&sort=rank&per-page=20&page=1`)

  const cryptos: CryptoProps[] = response.data

  return {
    props: {
      cryptos
    }
  }
}

export default function Home({cryptos}: CryptoProps) {
  return (
    <>
      <Head>
        <title>FastCrypto - Home</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.contentSection}>
          <div className={styles.dataHeader}>
            <div className={styles.ranking}>
              <h3>Ranking</h3>
            </div>
            <div className={styles.ticker}>
              <h3>Ticker</h3>
            </div>
            <div className={styles.name}>
              <h3>Nome</h3>
            </div>
            <div className={styles.price}>
              <h3>Valor</h3>
            </div>
          </div>
          {
            cryptos.map((crypto: CryptoProps) => {
              return(
                <CryptoItem 
                  key={crypto.id}
                  id={crypto.id}
                  logo_url={crypto.logo_url}
                  name={crypto.name}
                  price={crypto.price}
                  rank={crypto.rank}
                />
              )
            })
          }
        </section>
      </main>
    </>
  )
}