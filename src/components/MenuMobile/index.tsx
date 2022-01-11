import { MenuItems } from '../MenuItems';
import styles from './menu.module.scss';

interface MenuMobileProps {
  visible: boolean;
  onClick: () => void;
}

export function MenuMobile({onClick, visible = false}: MenuMobileProps) {
  return (
    <div className={visible ? styles.visible : styles.invisible}>
      <MenuItems
        onClick={onClick}
        display='grid'
      />
    </div>
  )
}
