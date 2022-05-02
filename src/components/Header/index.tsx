import { MenuItems } from '../MenuItems';
import { FaStream, FaTimes } from 'react-icons/fa';
import Link from 'next/link'

import styles from './header.module.scss';

interface HeaderProps {
  onClick: () => void;
  windowWidth: number;
  showCloseMenuIcon: boolean;
}

export function Header({showCloseMenuIcon = false, onClick, windowWidth}: HeaderProps) {
  return (
    <header className={styles.appHeader}>
      <div className={styles.logoContainer}>
        <Link passHref href="/">
          <h1>
            FastCrypto
          </h1>
        </Link>
      </div>
      <nav>
        {
          windowWidth > 720 ?
            <MenuItems
              display='flex'
            />
            :
            <button className={styles.menuButton} onClick={onClick}>
              {
                showCloseMenuIcon ?
                <FaTimes />
                : 
                <FaStream />
              }
            </button>
        }
      </nav>
    </header>
  )
}