import styles from './Filters.module.css';

const Filters = ({ currentFilter, setFilter }) => {
  const filters = [
    { id: 'all', label: 'Todos' },
    { id: 'sobremesas', label: 'Doces' },
    { id: 'bebidas', label: 'Bebidas' },
    { id: 'outros', label: 'Outros' }
  ];

  return (
    <div className={styles.filtersContainer}>
      {filters.map(filter => (
        <button
          key={filter.id}
          onClick={() => setFilter(filter.id)}
          className={`${styles.filterButton} ${
            currentFilter === filter.id ? styles.active : ''
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};

export default Filters;