import { useCart } from '../../context/CartContext';
import styles from './ProductCard.module.css';

const ProductCard = ({ item }) => {
  const { addToCart } = useCart();

  return (
    <section className={styles.card} data-category={item.categoria}>
      <img 
        src={item.imagem} 
        alt={item.nome} 
        className={styles.productImage}
        loading="lazy" 
      />
      <h3>{item.nome}</h3>
      <p className={styles.category}>{item.categoria}</p>
      <p className={styles.descricao}>{item.descricao}</p>
      <p className={styles.price}>{item.preco}</p>

      <button 
        onClick={() => addToCart(item)}
        className={styles.addButton}
        aria-label={`Adicionar ${item.nome} ao carrinho`}
      >
        Adicionar ao Carrinho
      </button>
    </section>
  );
};

export default ProductCard;