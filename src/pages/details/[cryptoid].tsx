import { GetStaticProps, GetStaticPropsContext, GetStaticPaths } from 'next'
import Link from 'next/link';
import { SetStateAction, useState } from 'react';
import { DetailsContent } from '../../components/DetailsContent';
import { DetailsHeader } from '../../components/DetailsHeader';

import { api } from '../../services/api'

import styles from '../../styles/pages/cryptodetails.module.scss'

interface CryptoDetailsProps {
  id: string;
  name: string;
  price: number;
  rank: number;
  logo_url: string;
  price_timestamp: Date;
  market_cap: number;
  market_cap_dominance: number;
  high: number;
  "1d": {
    market_cap_change: string;
    market_cap_change_pct: string;
    price_change: number;
    price_change_pct: number;
  }
  "7d": {
    market_cap_change: number;
    market_cap_change_pct: number;
    price_change: number;
    price_change_pct: number;
  }
  "30d": {
    market_cap_change: number;
    market_cap_change_pct: number;
    price_change: number;
    price_change_pct: number;
  }
  "365d": {
    market_cap_change: number;
    market_cap_change_pct: number;
    price_change: number;
    price_change_pct: number;
  }
}

interface Crypto {
  crypto: CryptoDetailsProps[]
}

interface CryptoPathProps {
  id: string
}

const apiKey = process.env.API_KEY

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const { params } = context;
  const response = await api.get(`/currencies/ticker?key=${apiKey}&ids=${params?.cryptoid}`)
  const crypto = response.data;

  return {
    props: {
      crypto
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await api.get(`/currencies/ticker?key=${apiKey}&sort=rank`)

  const paths = response.data.map((crypto: CryptoPathProps) => {
    return {
      params: {
        cryptoid: `${crypto.id}`,
      },
    }
  })

  return { paths, fallback: false }
}

export default function CryptoDetails({ crypto }: Crypto) {
  const [date, setDate] = useState<"7" | "30" | "365">("7")

  return (
    <main className={styles.container}>
      {
        crypto.map((item: CryptoDetailsProps) => {
          return (
            <>
              <DetailsHeader
                dateTime={item.price_timestamp}
                imageUrl={item.logo_url}
                name={item.name}
                price={item.price}
                priceChange={item["1d"].price_change}
                priceChangePct={item["1d"].price_change_pct}
                historicalMax={item.high}
                marketCap={item.market_cap}
                marketDominance={item.market_cap_dominance}
                key={item.id}
              />
              <DetailsContent
                setProps={(e: SetStateAction<"7" | "30" | "365">) => setDate(e)}
                name={item.name}
                market_cap_change={item[`${date}d`].market_cap_change}
                market_cap_change_pct={item[`${date}d`].market_cap_change_pct}
                price_change={item[`${date}d`].price_change}
                price_change_pct={item[`${date}d`].price_change_pct}
                days={date}
                key={item.name}

              />
            </>
          )
        })
      }
      <Link href='/'>
        Voltar para Home!
      </Link>
    </main>
  )
} 