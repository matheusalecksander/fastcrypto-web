import Head from 'next/head';
import { CryptoItem } from '../components/CryptoItem';
import { api } from '../services/api';

import styles from '../styles/pages/home.module.scss';

interface CryptoProps {
  id: string;
  name: string;
  price: number;
  price_change: number;
  price_change_pct: number;
  rank: number;
  logo_url: string;
}

interface HomeProps {
  cryptos: CryptoProps[]
}

const apiKey = process.env.API_KEY

export async function getServerSideProps() {
  
  const response = await api.get(`/currencies/ticker?key=${apiKey}&sort=rank&per-page=20&page=1`)
  let cryptos = [];
  
  for (let i = 0; i < response.data.length; i++) {
    const { name, id, price, rank, logo_url } = response.data[i]
    const { price_change, price_change_pct } = response.data[i]["1d"]

    const crypto: CryptoProps = { name, id, price, rank, price_change, price_change_pct, logo_url }

    cryptos.push(crypto)
  }

  return {
    props: {
      cryptos
    }
  }
}

export default function Home({cryptos}: HomeProps) {  
  return (
    <>
      <Head>
        <title>FastCrypto - Home</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.contentSection}>
          <table>
            <thead>
              <tr>
                <th>
                  Ranking
                </th>
                <th>
                  Ticker
                </th>
                <th>
                  Nome
                </th>
                <th>
                  Valor
                </th>
                <th>
                  Variação(US$)
                </th>
                <th>
                  Variação(%)
                </th>
              </tr>
            </thead>
            <tbody>
              
                {
                  cryptos.map((crypto: CryptoProps) => {
                    return (
                      <CryptoItem 
                        id={crypto.id}
                        logo_url={crypto.logo_url}
                        name={crypto.name}
                        price={crypto.price}
                        price_change={crypto.price_change}
                        price_change_pct={crypto.price_change_pct}
                        rank={crypto.rank}
                      />
                    )
                  })
                }
          </tbody>
          </table>
        </section>
      </main>
    </>
  )
}