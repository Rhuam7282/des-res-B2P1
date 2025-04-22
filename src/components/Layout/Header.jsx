import styles from './Header.module.css';
import logo from '../../assets/images/logo.jpg';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Lapa do Coco</h1>
      <img 
        src={logo} 
        alt="Nossa logo, um coco que se parece com um macaco sentado" 
        className={styles.logo}
      />
    </header>
  );
};

export default Header;