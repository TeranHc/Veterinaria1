"use client";

import { useState, useMemo } from 'react';
import { useCart } from '../../components/CartContext';
import { allProducts, categories } from './products';

export default function SalesPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [showCart, setShowCart] = useState(false); // NUEVO
  const [showCheckout, setShowCheckout] = useState(false); // <--- ESTA LÍNEA FALTA

  const productsPerPage = 6;

  // Usar el contexto del carrito en lugar del estado local
  const { addToCart, formatPrice, getTotalItems } = useCart(); // ACTUALIZADO

  // ... resto del código igual

  // Filtrar productos basado en el término de búsqueda y categoría
  const filteredProducts = useMemo(() => {
    let filtered = allProducts;

    if (selectedCategory !== 'Todos') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    if (searchTerm.trim()) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  }, [allProducts, searchTerm, selectedCategory]);

  // Calcular productos para la página actual
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const clearSearch = () => {
    setSearchTerm('');
    setSelectedCategory('Todos');
    setCurrentPage(1);
  };

  const renderPagination = () => {
    const pages = [];
    
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`px-2 py-2 sm:px-4 mx-0.5 text-xs sm:text-sm rounded-md font-medium transition-colors duration-200 min-w-[32px] sm:min-w-[40px] ${
            currentPage === i
              ? 'bg-blue-600 text-white'
              : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
          }`}
        >
          {i}
        </button>
      );
    }
    
    return pages;
  };

  return (
    <div className="min-h-screen bg-gray-100 py-4 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header con carrito */}
        <div className="flex justify-between items-center mb-4">
          {/* Título */}
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 flex-1 text-center">
            NUESTROS PRODUCTOS
          </h1>

        {/* Botón del carrito flotante */}

        </div>

        
        {/* Barra de búsqueda */}
        <div className="max-w-md mx-auto mb-6">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Buscar productos..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
            />
            {searchTerm && (
              <button
                onClick={clearSearch}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                <svg className="h-5 w-5 text-gray-400 hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Selector de categorías */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 hover:border-gray-400'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Mostrar resultados de búsqueda */}
        <div className="text-center mb-6">
          <p className="text-gray-600">
            {selectedCategory !== 'Todos' && !searchTerm && (
              `Mostrando productos de ${selectedCategory} (${filteredProducts.length} productos)`
            )}
            {selectedCategory !== 'Todos' && searchTerm && (
              `Se encontraron ${filteredProducts.length} producto${filteredProducts.length !== 1 ? 's' : ''} de ${selectedCategory} para "${searchTerm}"`
            )}
            {selectedCategory === 'Todos' && searchTerm && (
              `Se encontraron ${filteredProducts.length} producto${filteredProducts.length !== 1 ? 's' : ''} para "${searchTerm}"`
            )}
            {selectedCategory === 'Todos' && !searchTerm && (
              `Mostrando todos los productos (${filteredProducts.length} productos)`
            )}
          </p>
        </div>
        
        {/* Grid de productos */}
        {currentProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {currentProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-[350px] bg-gray-200 flex items-center justify-center p-4">
                  <img 
                    src={product.image}
                    alt={product.alt}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                
                <div className="p-3">
                  <div className="mb-1">
                    <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${
                      product.category === 'Comida' ? 'bg-green-100 text-green-800' :
                      product.category === 'Limpieza' ? 'bg-blue-100 text-blue-800' :
                      product.category === 'Medicina' ? 'bg-red-100 text-red-800' :
                      product.category === 'Ropa' ? 'bg-purple-100 text-purple-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {product.category}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-medium text-gray-800 mb-3 min-h-[3rem] flex items-center">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-900">
                      {formatPrice(product.price)}
                    </span>
                    
                    <button 
                      onClick={() => addToCart(product)}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-200 font-medium"
                    >
                      Agregar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <svg className="mx-auto h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.467-.188-6.354-.9a3.2 3.2 0 01-.646-.23L4 14c-1.1-.9-2-2.2-2-3.5s.9-2.6 2-3.5l1-.57c.205-.08.42-.155.646-.23C7.533 6.188 9.66 6 12 6s4.467.188 6.354.9c.226.075.441.15.646.23L20 7.5c1.1.9 2 2.2 2 3.5s-.9 2.6-2 3.5l-1 .57c-.205.08-.42.155-.646.23-1.887.712-4.014.9-6.354.9z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No se encontraron productos</h3>
            <p className="text-gray-500 mb-4">Intenta con otros términos de búsqueda o cambia la categoría</p>
            <button
              onClick={clearSearch}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-200 font-medium"
            >
              Ver todos los productos
            </button>
          </div>
        )}
        
        {/* Paginación */}
        {totalPages > 0 && (
          <div className="flex justify-center items-center mt-12 mb-8 px-2">
            <div className="flex items-center space-x-1 sm:space-x-2 overflow-x-auto">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-2 py-2 sm:px-4 text-xs sm:text-sm rounded-md font-medium transition-colors duration-200 whitespace-nowrap ${
                  currentPage === 1
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                <span className="hidden sm:inline">Anterior</span>
                <span className="sm:hidden">Anterior</span>
              </button>
              
              <div className="flex items-center space-x-1">
                {renderPagination()}
              </div>
              
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-2 py-2 sm:px-4 text-xs sm:text-sm rounded-md font-medium transition-colors duration-200 whitespace-nowrap ${
                  currentPage === totalPages
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                <span className="hidden sm:inline">Siguiente</span>
                <span className="sm:hidden">Siguiente</span>
              </button>
            </div>
          </div>
        )}
        
        {/* Información de página actual */}
        {currentProducts.length > 0 && (
          <div className="text-center text-gray-600 mb-8">
            Página {currentPage} de {totalPages} - Mostrando {currentProducts.length} de {filteredProducts.length} productos
            {(searchTerm || selectedCategory !== 'Todos') && ` (filtrados de ${allProducts.length} total)`}
          </div>
        )}
        {/* Sección de contacto */}
        <div className="mt-16 bg-gray-200 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            ¿Necesitas más información?
          </h2>
          <p className="text-gray-700 mb-6">
            Contáctanos para consultas sobre productos, disponibilidad y envíos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-medium transition-colors">
              WhatsApp
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors">
              Llamar
            </button>
            <button className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-md font-medium transition-colors">
              Email
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}