const Filters = ({ currentFilter, setFilter }) => {
  const filters = [
    { id: 'all', label: 'Todos' },
    { id: 'sobremesas', label: 'Doces' },
    { id: 'bebidas', label: 'Bebidas' },
    { id: 'outros', label: 'Outros' }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-2.5 my-5">
      {filters.map(filter => (
        <button
          key={filter.id}
          onClick={() => setFilter(filter.id)}
          className={`px-2.5 py-1 rounded transition-all ${
            currentFilter === filter.id 
              ? 'bg-[#93a885] text-white' 
              : 'bg-gray-200 hover:bg-gray-300'
          } text-sm md:text-base`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};

export default Filters;