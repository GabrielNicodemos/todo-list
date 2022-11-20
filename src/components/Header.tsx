import styles from './Header.module.css';

import logo from '../assets/logo.svg';


const Header = () => {
  return (
    <header className={styles.header}>
        <img src={logo} alt="Logo do ignite" />
    </header>
  )
}

export default Header