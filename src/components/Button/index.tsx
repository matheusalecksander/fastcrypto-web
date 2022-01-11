import Link from 'next/link';
import styles from './button.module.scss';

export function Button() {
  return (
    <button className={styles.button}>
      <Link href="/">Me Leve até lá!!</Link>
    </button>
  )
}