interface CryptoItemProps {
  id: string;
  name: string;
  price: number;
  rank: number;
  logo_url: string;
}

import styles from './item.module.scss';

export function CryptoItem({
  id,
  logo_url,
  name, 
  price,
  rank
}: CryptoItemProps) {
  return (
    <div className={styles.itemContainer}>
      <div className={styles.rankContainer}>
        <p className={styles.rankText}>
          {rank}
        </p>
      </div>
      <div className={styles.cryptoTicker}>
        <span>{id}</span>
      </div>
      
      <div className={styles.nameContainer}>
        <div className={styles.imageContainer}>
          <img className={styles.image} src={logo_url} alt={`${name} logo`} />
        </div>
        <span>
          {name} 
        </span>
      </div>
      <div className={styles.priceContainer}>
        {
        new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD'
        }).format(price)
        }
      </div>
    </div>
  )
}