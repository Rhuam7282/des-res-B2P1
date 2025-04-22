import styles from './Filters.module.css';

const Filters = ({ currentFilter, setFilter }) => {
  const filters = [
    { id: 'all', label: 'Todos' },
    { id: 'doce', label: 'Doces' },
    { id: 'bebida', label: 'Bebidas' },
    { id: 'neutro', label: 'Neutros' }
  ];

  return (
    <div className={styles.filtersContainer}>
      {filters.map(filter => (
        <button
          key={filter.id}
          onClick={() => setFilter(filter.id)}
          className={`${styles.filterButton} ${currentFilter === filter.id ? styles.active : ''}`}
          data-filter={filter.id}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};

export default Filters;