import { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';

import { useWindowWidth } from '../hooks/useWindowWidth'

import { Header } from '../components/Header'
import { MenuMobile } from '../components/MenuMobile';

import '../styles/global.scss'

function MyApp({ Component, pageProps }: AppProps) {
  const [menuVisible, setMenuVisible] = useState(false)

  const windowWidth = useWindowWidth()

  function handleMenuClick() {
    setMenuVisible(!menuVisible)
  }

  function handleChangePage() {
    setMenuVisible(false)
  }

  useEffect(() => {
      if (windowWidth > 720){
        setMenuVisible(false)
      }
  }, [windowWidth])

  return (
    <>
      <MenuMobile visible={menuVisible} onClick={handleChangePage} />
      <Header showCloseMenuIcon={menuVisible} windowWidth={windowWidth} onClick={handleMenuClick} />    
      <Component {...pageProps} />
    </>
    )
}

export default MyApp
