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
        <div className={styles.itemContainer}>
          <p>{id}</p>
        </div>
      </td>
      
      <td>
        <div className={styles.nameContainer}>
          <div className={styles.imageContainer}>
            <img src={logo_url} alt={`${name} logo`} />
          </div>
          <span>
            {name} 
          </span>
        </div>
      </td>
      <td>
        <div className={styles.itemContainer}>
          {
            new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD'
            }).format(price)
          }
        </div>
      </td>
      <td>
        <div className={styles.itemContainer}>
          {
            new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD'
            }).format(price_change)
          }
        </div>
      </td>
      <td>
        <div className={styles.itemContainer}>
          {(price_change_pct*100).toFixed(2)} %
        </div>
      </td>
    </tr>
  )
}