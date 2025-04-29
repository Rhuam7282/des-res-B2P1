import { useCart } from '../../context/CartContext';
import styles from './CartModal.module.css';

const CartModal = () => {
  const { cart, isModalOpen, toggleModal, removeFromCart, totalItems } = useCart();

  return (
    <div 
      className={`${styles.modal} ${isModalOpen ? styles.show : ''}`} 
      aria-hidden={!isModalOpen}
    >
      <div className={styles.modalContent}>
        <button 
          onClick={toggleModal}
          className={styles.closeButton}
          aria-label="Fechar carrinho"
        >
          &times;
        </button>
        
        <h2>Seu Carrinho</h2>
        
        <div className={styles.cartItems}>
          {cart.length === 0 ? (
            <p className={styles.emptyMessage}>Seu carrinho está vazio</p>
          ) : (
            cart.map((item, index) => (
              <div key={index} className={styles.cartItem}>
                <div>
                  <span>{item.nome} {item.quantity} | </span>
                  <span className={styles.itemPrice}>
                    {item.preco.replace('banana', '').replace('s', '')} x {item.quantity}
                  </span>
                </div>
                <button 
                  onClick={() => removeFromCart(index)}
                  className={styles.removeButton}
                  aria-label={`Remover ${item.nome} do carrinho`}
                >
                  Remover
                </button>
              </div>
            ))
          )}
        </div>
        
        {cart.length > 0 && (
          <div className={styles.total}>
            <strong>Total: {totalItems} itens</strong>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;