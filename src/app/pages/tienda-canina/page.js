// src/app/pages/tienda-canina/page.js
"use client";

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useCart } from '../carrito/CartContext';
import { allProducts } from './products';

// Componente interno que usa useSearchParams
function TiendaCaninaContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { addToCart, formatPrice } = useCart();
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [filteredProducts, setFilteredProducts] = useState(allProducts);

  // Categorías disponibles
  const categories = ['Todos', 'Comida', 'Limpieza', 'Medicina', 'Ropa', 'Cama'];

  // Efecto para manejar el parámetro de categoría de la URL
  useEffect(() => {
    const categoryFromUrl = searchParams.get('category');
    if (categoryFromUrl && categories.includes(categoryFromUrl)) {
      setSelectedCategory(categoryFromUrl);
    }
  }, [searchParams]);

  // Efecto para filtrar productos
  useEffect(() => {
    let filtered = allProducts;

    // Filtrar por categoría
    if (selectedCategory !== 'Todos') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filtrar por búsqueda
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, searchTerm]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    // Opcional: actualizar la URL sin el parámetro de categoría
    if (category === 'Todos') {
      router.push('/pages/tienda-canina', { scroll: false });
    } else {
      router.push(`/pages/tienda-canina?category=${encodeURIComponent(category)}`, { scroll: false });
    }
  };

  const handleProductClick = (productId) => {
    router.push(`/pages/tienda-canina/productos/${productId}`);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900 text-center mb-6">
            NUESTROS PRODUCTOS
          </h1>
          
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
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Filtros de categorías */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-4 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Contador de productos */}
          <p className="text-center text-gray-600 mb-4">
            Mostrando todos los productos ({filteredProducts.length} productos)
          </p>
        </div>
      </div>

      {/* Productos */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <svg className="mx-auto h-16 w-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.562M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No se encontraron productos</h3>
            <p className="text-gray-500">
              {searchTerm 
                ? `No hay productos que coincidan con "${searchTerm}"`
                : `No hay productos en la categoría "${selectedCategory}"`
              }
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => handleProductClick(product.id)}
              >
                <div className="aspect-square bg-gray-100 flex items-center justify-center p-4">
                  <img
                    src={product.image}
                    alt={product.alt}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="p-4">
                  <div className="mb-2">
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
                  <h3 className="font-semibold text-gray-800 mb-2 text-sm line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-xs mb-3 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-blue-600">
                      {formatPrice(product.price)}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(product);
                      }}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md text-sm font-medium transition-colors"
                    >
                      Agregar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// Componente principal que envuelve con Suspense
export default function TiendaCanina() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando tienda...</p>
        </div>
      </div>
    }>
      <TiendaCaninaContent />
    </Suspense>
  );
}