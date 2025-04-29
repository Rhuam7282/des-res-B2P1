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
    const allItems = [
      ...cardapio.entradas,
      ...cardapio.pratos,
      ...cardapio.sobremesas
    ];

    switch(category) {
      case 'sobremesas':
        return allItems.filter(item => item.categoria === 'sobremesas');
      case 'bebidas':
        return allItems.filter(item => item.descricao.toLowerCase().includes('água'));
      case 'outros':
        return allItems.filter(item => 
          !['sobremesas', 'entradas'].includes(item.categoria) &&
          !item.descricao.toLowerCase().includes('água')
        );
      default:
        return allItems;
    }
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

        <h2 id="pratos">Pratos Principais</h2>
        <div className="card-container">
          {filterItems(currentFilter)
            .filter(item => cardapio.pratos.includes(item))
            .map(item => (
              <ProductCard key={item.nome} item={item} />
          ))}
        </div>

        <h2 id="sobremesas">Sobremesas</h2>
        <div className="card-container">
          {filterItems(currentFilter)
            .filter(item => cardapio.sobremesas.includes(item))
            .map(item => (
              <ProductCard key={item.nome} item={item} />
          ))}
        </div>
      </main>

      <CartModal />
      <Footer />
    </CartProvider>
  );
}

export default App;