import styles from './detailscontent.module.scss'

interface DetailsContentProps {
  name: string;
  market_cap_change: number;
  market_cap_change_pct: number;
  price_change: number;
  price_change_pct: number;
  days: string;
  setProps: (e: HTMLSelectElement["value"]) => void;
}

export function DetailsContent({ name, days, market_cap_change, market_cap_change_pct, price_change_pct, price_change, setProps }: DetailsContentProps) {
  return (
    <div className={styles.container}>
      <h2>
        Variações de {name} nos últimos 7, 30 e 365 dias.
      </h2>
      <div className={styles.infoContainer}>
        <select name="select" value={days} onChange={(e) => setProps(e.target.value)}>
          <option value="7">7 dias:</option>
          <option value="30">30 dias:</option>
          <option value="365">365 dias:</option>
        </select>
        <p>Nos últimos {days} dias {name} teve as seguintes variações:</p>
        <p className={price_change_pct > 0 ? styles.positiveDay : styles.negativeDay}><span>Market-cap(US$): A capitalização de mercado de {name} variou</span> {new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD'
        }).format(market_cap_change)}</p>
        <p className={price_change_pct > 0 ? styles.positiveDay : styles.negativeDay}><span>Market-cap(%): A capitalização de mercado de {name} teve uma oscilação de:</span> {market_cap_change_pct * 100}%</p>
        <p className={price_change_pct > 0 ? styles.positiveDay : styles.negativeDay}><span>Preço(US$): O preço de {name} variou</span> {new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD'
        }).format(price_change)}</p>
        <p className={price_change_pct > 0 ? styles.positiveDay : styles.negativeDay}><span>Preço(%): O preço de {name} variou</span> {(price_change_pct * 100).toFixed(2)}%</p>
      </div >
    </div >
  )
}