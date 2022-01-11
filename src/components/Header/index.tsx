import { useRouter } from "next/router";
import { MenuItems } from "../MenuItems";
import { FaStream, FaTimes } from 'react-icons/fa'

import styles from './header.module.scss'

interface HeaderProps {
  onClick: () => void;
  windowWidth: number;
  showCloseMenuIcon: boolean;
}

export function Header({showCloseMenuIcon = false, onClick, windowWidth}: HeaderProps) {
  const router = useRouter();
  return (
    <header className={styles.appHeader}>
      <div className={styles.logoContainer}>
        <h1>
          FastCrypto
        </h1>
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