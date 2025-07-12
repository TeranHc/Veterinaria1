// src/app/pages/tienda-canina/productos/[id]/page.js
"use client";

import { useState, useEffect, use } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '../../../carrito/CartContext';
import { allProducts } from '../../products';

export default function ProductDetailPage({ params }) {
  const router = useRouter();
  const { addToCart, formatPrice } = useCart();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [activeTab, setActiveTab] = useState('descripcion');

  // Unwrap params using React.use()
  const resolvedParams = use(params);

  useEffect(() => {
    // Obtener el producto por ID desde la URL
    const productId = resolvedParams?.id;
    
    if (productId) {
      const foundProduct = allProducts.find(p => p.id === parseInt(productId));
      
      if (foundProduct) {
        setProduct(foundProduct);
        // Buscar productos relacionados de la misma categoría
        const related = allProducts
          .filter(p => p.category === foundProduct.category && p.id !== foundProduct.id)
          .slice(0, 4);
        setRelatedProducts(related);
      }
    }
    
    setIsLoading(false);
  }, [resolvedParams]);

  const handleAddToCart = () => {
    if (product) {
      for (let i = 0; i < quantity; i++) {
        addToCart(product);
      }
      // Mostrar mensaje de éxito
      alert(`${quantity} ${product.name} agregado${quantity > 1 ? 's' : ''} al carrito`);
    }
  };

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  const handleGoBack = () => {
    router.push('/pages/tienda-canina');
  };

  const handleCategoryClick = (category) => {
    // Redirigir a la tienda con el filtro de categoría
    router.push(`/pages/tienda-canina?category=${encodeURIComponent(category)}`);
  };

  const handleProductClick = (productId) => {
    router.push(`/pages/tienda-canina/productos/${productId}`);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando producto...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Producto no encontrado</h1>
          <p className="text-gray-600 mb-6">El producto que buscas no existe o ha sido eliminado.</p>
          <button
            onClick={handleGoBack}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
          >
            Volver a la tienda
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header con navegación */}
      <div className="bg-gray-200 shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={handleGoBack}
              className="flex items-center text-gray-600 hover:text-gray-800 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Volver a la tienda
            </button>
            
            {/* Breadcrumb navegable */}
            <div className="text-sm text-gray-500">
              <button 
                onClick={handleGoBack}
                className="hover:text-gray-700 cursor-pointer transition-colors"
              >
                Tienda
              </button>
              <span className="mx-2">/</span>
              <button
                onClick={() => handleCategoryClick(product.category)}
                className="hover:text-gray-700 cursor-pointer transition-colors"
              >
                {product.category}
              </button>
              <span className="mx-2">/</span>
              <span className="text-gray-800">{product.name}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Información principal del producto */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Sección de imagen */}
            <div className="p-6">
              <div className="aspect-square bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.alt}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>

            {/* Información del producto */}
            <div className="p-6">
              {/* Categoría */}
              <div className="mb-4">
                <button
                  onClick={() => handleCategoryClick(product.category)}
                  className={`inline-block px-3 py-1 text-sm font-medium rounded-full transition-colors hover:opacity-80 ${
                    product.category === 'Comida' ? 'bg-green-100 text-green-800 hover:bg-green-200' :
                    product.category === 'Limpieza' ? 'bg-blue-100 text-blue-800 hover:bg-blue-200' :
                    product.category === 'Medicina' ? 'bg-red-100 text-red-800 hover:bg-red-200' :
                    product.category === 'Ropa' ? 'bg-purple-100 text-purple-800 hover:bg-purple-200' :
                    'bg-yellow-100 text-yellow-800 hover:bg-yellow-200'
                  }`}
                >
                  {product.category}
                </button>
              </div>

              {/* Nombre del producto */}
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>

              {/* Precio */}
              <div className="mb-6">
                <span className="text-4xl font-bold text-blue-600">
                  {formatPrice(product.price)}
                </span>
              </div>

              {/* Descripción corta */}
              <div className="mb-6">
                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Selector de cantidad */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Cantidad</h3>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    disabled={quantity <= 1}
                    className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed text-xl font-bold"
                  >
                    -
                  </button>
                  <span className="text-2xl font-semibold w-16 text-center">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    disabled={quantity >= 10}
                    className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed text-xl font-bold"
                  >
                    +
                  </button>
                </div>
                <p className="text-sm text-gray-500 mt-2">Máximo 10 unidades por compra</p>
              </div>

              {/* Botón de agregar al carrito */}
                <button
                onClick={() => {
                    for (let i = 0; i < quantity; i++) {
                    addToCart(product);
                    }
                }}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center space-x-2 mb-4"
                >
                
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 2.5M7 13l2.5 2.5M17 21a2 2 0 100-4 2 2 0 000 4zM9 21a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
                <span>Agregar {quantity > 1 ? `${quantity} unidades` : ''} al carrito</span>
              </button>



              {/* Información adicional */}
              <div className="border-t pt-4">
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Garantía de calidad
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 4v10a2 2 0 002 2h4a2 2 0 002-2V11" />
                    </svg>
                    Envío seguro
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs de información detallada */}
        <div className="bg-white rounded-lg shadow-lg mb-8">
        <div className="border-b">
            <nav className="flex px-4 sm:px-6 overflow-x-auto">
            <button
                onClick={() => setActiveTab('descripcion')}
                className={`py-4 px-2 sm:px-4 border-b-2 font-medium text-xs sm:text-sm whitespace-nowrap flex-shrink-0 ${
                activeTab === 'descripcion'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
            >
                Descripción
            </button>
            <button
                onClick={() => setActiveTab('especificaciones')}
                className={`py-4 px-2 sm:px-4 border-b-2 font-medium text-xs sm:text-sm whitespace-nowrap flex-shrink-0 ml-4 sm:ml-8 ${
                activeTab === 'especificaciones'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
            >
                <span className="hidden sm:inline">Especificaciones</span>
                <span className="sm:hidden">Especificaciones</span>
            </button>
            <button
                onClick={() => setActiveTab('caracteristicas')}
                className={`py-4 px-2 sm:px-4 border-b-2 font-medium text-xs sm:text-sm whitespace-nowrap flex-shrink-0 ml-4 sm:ml-8 ${
                activeTab === 'caracteristicas'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
            >
                <span className="hidden sm:inline">Características</span>
                <span className="sm:hidden">Características</span>
            </button>
            </nav>
        </div>

        <div className="p-4 sm:p-6">
            {activeTab === 'descripcion' && (
            <div>
                <h3 className="text-lg font-semibold mb-4">Descripción del producto</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{product.description}</p>
                <p className="text-gray-600 leading-relaxed">
                Este producto ha sido cuidadosamente seleccionado para ofrecer la mejor calidad y 
                satisfacer las necesidades de tu mascota. Confía en nuestra experiencia y brinda 
                lo mejor para tu compañero peludo.
                </p>
            </div>
            )}

            {activeTab === 'especificaciones' && (
            <div>
                <h3 className="text-lg font-semibold mb-4">Especificaciones técnicas</h3>
                {product.specifications && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex flex-col sm:flex-row sm:justify-between border-b pb-2">
                        <span className="font-medium text-gray-700 capitalize mb-1 sm:mb-0">{key}:</span>
                        <span className="text-gray-600 sm:text-right">{value}</span>
                    </div>
                    ))}
                </div>
                )}
            </div>
            )}

            {activeTab === 'caracteristicas' && (
            <div>
                <h3 className="text-lg font-semibold mb-4">Características principales</h3>
                {product.features && (
                <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">{feature}</span>
                    </li>
                    ))}
                </ul>
                )}
            </div>
            )}
        </div>
        </div>

        {/* Productos relacionados */}
        {relatedProducts.length > 0 && (
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Productos relacionados</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <div
                  key={relatedProduct.id}
                  className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => handleProductClick(relatedProduct.id)}
                >
                  <div className="aspect-square bg-white flex items-center justify-center p-4">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.alt}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-gray-800 mb-2 text-sm line-clamp-2">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-lg font-bold text-blue-600">
                      {formatPrice(relatedProduct.price)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}