import Link from 'next/link'
import { BsBoxArrowUpRight } from 'react-icons/bs'

interface CryptoItemProps {
  id: string;
  name: string;
  price: number;
  price_change: number;
  price_change_pct: number;
  rank: number;
  logo_url: string;
}

import styles from './item.module.scss';

export function CryptoItem({
  id,
  logo_url,
  name,
  price,
  price_change,
  price_change_pct,
  rank
}: CryptoItemProps) {

  return (
    <tr>
      <td>
        <div className={styles.itemContainer}>
          <span>
            {rank}
          </span>
        </div>
      </td>

      <td>
        <Link href={`/details/${id}`} passHref >
          <div className={styles.itemNameContainer}>
            <div className={styles.imageContainer}>
              {/*eslint-disable-next-line @next/next/no-img-element*/}
              <img src={logo_url} alt={`${name} logo`} />
            </div>
            {name}
            <BsBoxArrowUpRight />
          </div>
        </Link>
      </td>

      <td>
        <div className={styles.itemContainer}>
          <span>
            {
              new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD'
              }).format(price)
            }&nbsp;
            <p className={price_change_pct > 0 ? styles.positiveVariation : styles.negativeVariation}>({(price_change_pct * 100).toFixed(2)} %)</p>
          </span>
        </div>
      </td>

      <td>
        <div className={styles.itemContainer}>
          <span className={price_change_pct > 0 ? styles.positiveVariation : styles.negativeVariation}>
            {
              new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD'
              }).format(price_change)
            }
          </span>
        </div>
      </td>
    </tr >
  )
}