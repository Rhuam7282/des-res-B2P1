import { useCart } from '../../context/CartContext';
import styles from './Footer.module.css';

const Footer = () => {
  const { totalItems, toggleModal } = useCart();

  return (
    <footer className={styles.footer}>
      <button 
        onClick={toggleModal}
        className={styles.cartButton}
        aria-label="Ver carrinho"
      >
        <span className={styles.cartCounter}>{totalItems}</span> itens no carrinho
      </button>
      <p className={styles.copyright}>©LapaDoCoco 2025</p>
    </footer>
  );
};

export default Footer;