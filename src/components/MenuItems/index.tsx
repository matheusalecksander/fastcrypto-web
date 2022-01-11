import Link from "next/link";
import { useRouter } from "next/router";

import {FaQuestionCircle, FaHome, FaWhatsapp} from 'react-icons/fa'

import styles from './menuitems.module.scss';

interface MenuItemsProps {
  display: 'flex' | 'grid';
  onClick?: () => void;
}

export function MenuItems({display = 'flex', onClick}: MenuItemsProps) {
  const router = useRouter();

  return (
    <ul className={display === 'flex' ? styles.containerFlex : styles.containerGrid}>
      <li className={router.asPath === "/" ? styles.active : ""} onClick={onClick}>
        <FaHome /> <Link href="/">Home</Link>
      </li>
      <li className={router.asPath === "/about" ? styles.active : ""} onClick={onClick}>
        < FaQuestionCircle/> <Link href="/about">About</Link>
      </li>
      <li className={router.asPath == "/contact" ? styles.active : ""} onClick={onClick}>
        <FaWhatsapp /> <Link href="/contact">Contact</Link>
      </li>
    </ul>
  )
}