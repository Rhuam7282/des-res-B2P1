jsx
import { useState, Suspense, lazy } from 'react';
import { CartProvider } from './context/CartContext';
import Header from './components/Layout/Header';
import Filters from './components/Filters/Filters';
import ProductCard from './components/Product/ProductCard';
import Footer from './components/Layout/Footer';
import { cardapio } from './data/menuData';

// Componente carregado dinamicamente
const CartModal = lazy(() => import('./components/Cart/CartModal'));
const ExtraInfo = lazy(() => import('./components/ExtraInfo'));

function App() {
  const [currentFilter, setCurrentFilter] = useState('all');
  const [showExtraInfo, setShowExtraInfo] = useState(false);

  const filterItems = (category) => {
    const allItems = [
      ...cardapio.entradas,
      ...cardapio.pratos,
      ...cardapio.sobremesas
    ];

    switch(category) {
      case 'sobremesas':
        return allItems.filter(item => item.tags.toLowerCase().includes('doces'));
      case 'bebidas':
        return allItems.filter(item => item.tags.toLowerCase().includes('bebidas'));
      case 'outros':
        return allItems.filter(item => item.tags.toLowerCase().includes(''));
      default:
        return allItems;
    }
  };

  return (
    <CartProvider>
      <Header />
      
      <main className="min-h-screen bg-gradient-to-b from-[#f0e6d6] to-[#d8e4d1]">
        <Filters currentFilter={currentFilter} setFilter={setCurrentFilter} />
        
        <h2 className="text-center my-8 text-[#4a4a4a] text-2xl relative after:content-[''] after:block after:w-15 after:h-1 after:bg-[#93a885] after:mx-auto after:mt-2.5">
          Entradas
        </h2>
        <div className="flex flex-wrap justify-center gap-5 py-5">
          {filterItems(currentFilter)
            .filter(item => cardapio.entradas.includes(item))
            .map(item => (
              <ProductCard key={item.nome} item={item} />
          ))}
        </div>

        <h2 className="text-center my-8 text-[#4a4a4a] text-2xl relative after:content-[''] after:block after:w-15 after:h-1 after:bg-[#93a885] after:mx-auto after:mt-2.5">
          Pratos Principais
        </h2>
        <div className="flex flex-wrap justify-center gap-5 py-5">
          {filterItems(currentFilter)
            .filter(item => cardapio.pratos.includes(item))
            .map(item => (
              <ProductCard key={item.nome} item={item} />
          ))}
        </div>

        <h2 className="text-center my-8 text-[#4a4a4a] text-2xl relative after:content-[''] after:block after:w-15 after:h-1 after:bg-[#93a885] after:mx-auto after:mt-2.5">
          Sobremesas
        </h2>
        <div className="flex flex-wrap justify-center gap-5 py-5">
          {filterItems(currentFilter)
            .filter(item => cardapio.sobremesas.includes(item))
            .map(item => (
              <ProductCard key={item.nome} item={item} />
          ))}
        </div>
      <Suspense fallback={<div className="text-center py-4">Carregando informações adicionais...</div>}>
          {showExtraInfo && <ExtraInfo />}
        </Suspense>

        <button 
          onClick={() => setShowExtraInfo(!showExtraInfo)}
          className="bg-[#93a885] text-white px-4 py-2 mx-auto block my-4 rounded"
        >
          {showExtraInfo ? 'Ocultar Detalhes' : 'Mais Informações'}
        </button>
      </main>

      <Suspense fallback={<div className="fixed inset-0 bg-black/50 flex justify-center items-center">Carregando carrinho...</div>}>
        <CartModal />
      </Suspense>
      
      <Footer />
    </CartProvider>
  );
}

export default App;