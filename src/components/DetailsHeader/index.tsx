import styles from './detailsheader.module.scss'

interface DetailsHeaderProps {
  imageUrl: string;
  name: string;
  price: number;
  priceChange: number;
  priceChangePct: number;
  dateTime: Date;
  marketCap: number;
  marketDominance: number;
  historicalMax: number;
}

export function DetailsHeader({ imageUrl, dateTime, name, price, priceChange, priceChangePct, marketCap, marketDominance, historicalMax }: DetailsHeaderProps) {
  return (
    <div className={styles.container}>
      <div className={styles.imageNameContainer}>
        <div className={styles.imageContainer}>
          {/*eslint-disable-next-line @next/next/no-img-element*/}
          <img src={imageUrl} alt={name} />
        </div>
        <h1>
          {name}
        </h1>
      </div>
      <div className={styles.priceContainer}>
        <h4 className={priceChangePct > 0 ? styles.positiveDay : styles.negativeDay}><span>Preço:</span> US
          {
            new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD'
            }).format(price)
          }
        </h4>
        <p className={priceChangePct > 0 ? styles.positiveDay : styles.negativeDay}>
          <span>Variação(US$):</span> {
            new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD'
            }).format(priceChange)
          }
        </p>
        <p className={priceChangePct > 0 ? styles.positiveDay : styles.negativeDay}>
          <span>Variação(%):</span>  {(priceChangePct * 100).toFixed(3)}%
        </p>
        <p>Market-cap: <span>US
          {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
          }).format(marketCap)
          }</span>
        </p>
        <p>Dominância de mercado(%): <span>{(marketDominance * 100)}%</span>
        </p>
        <p>Máxima histórica: <span>{new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD'
        }).format(historicalMax)
        }</span>
        </p>
      </div>
    </div>
  )
}