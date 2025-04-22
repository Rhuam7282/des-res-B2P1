import { useState } from 'react';
import { CartProvider } from './context/CartContext';
import Header from './components/Layout/Header';
import Filters from './components/Filters/Filters';
import ProductCard from './components/Product/ProductCard';
import CartModal from './components/Cart/CartModal';
import Footer from './components/Layout/Footer';
import { cardapio } from './data/menuData';
import './App.css';

function App() {
  const [currentFilter, setCurrentFilter] = useState('all');

  const filterItems = (category) => {
    return [...cardapio.entradas, ...cardapio.pratos, ...cardapio.sobremesas]
      .filter(item => category === 'all' || item.categoria === category);
  };

  return (
    <CartProvider>
      <Header />
      
      <main>
        <Filters currentFilter={currentFilter} setFilter={setCurrentFilter} />
        
        <h2 id="entradas">Entradas</h2>
        <div className="card-container">
          {filterItems(currentFilter)
            .filter(item => cardapio.entradas.includes(item))
            .map(item => (
              <ProductCard key={item.nome} item={item} />
          ))}
        </div>

        {/* Repetir lógica para outras seções */}
      </main>

      <CartModal />
      <Footer />
    </CartProvider>
  );
}

export default App;