"use client";

import { useState, useMemo } from 'react';

export default function SalesPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const productsPerPage = 6;

  // ====== ESTADOS DEL CARRITO ======
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('efectivo');
  const [installments, setInstallments] = useState(1);

  const categories = ['Todos', 'Comida', 'Limpieza', 'Medicina', 'Ropa', 'Cama'];

  const [allProducts] = useState([
    // COMIDA - 6 productos
    {
      id: 1,
      name: "Cat chow adulto pescado 15 KG",
      price: 2650.00,
      category: "Comida",
      image: "/images/Cat-pescado.jpg",
      alt: "Cat chow adulto pescado 15 KG"
    },
    {
      id: 2,
      name: "Cat Chow Adulto Carne 15 Kg",
      price: 2490,
      category: "Comida",
      image: "/images/cat-carne.jpg",
      alt: "Cat Chow Adulto Carne 15 Kg"
    },
    {
      id: 3,
      name: "Pro Plan Gato Adulto 7.5kg",
      price: 2870,
      category: "Comida",
      image: "/images/pro-plan-adulto.jpg",
      alt: "Pro Plan Gato Adulto 7.5kg"
    },
    {
      id: 4,
      name: "Royal Canin Adult 7.5 Kg",
      price: 3200,
      category: "Comida",
      image: "/images/royal-canin-adult.jpg",
      alt: "Royal Canin Adult 7.5 Kg"
    },
    {
      id: 5,
      name: "Pedigree Adulto 15 Kg",
      price: 1890,
      category: "Comida",
      image: "/images/pedigree-adulto.jpg",
      alt: "Pedigree Adulto 15 Kg"
    },
    {
      id: 6,
      name: "Hills Science Diet 3 Kg",
      price: 2100,
      category: "Comida",
      image: "/images/hills-science.jpg",
      alt: "Hills Science Diet 3 Kg"
    },
    
    // LIMPIEZA - 6 productos
    {
      id: 7,
      name: "Arena NutraPro Sanitaria Gatos 10 Kg",
      price: 850,
      category: "Limpieza",
      image: "/images/arena-sanitaria.jpg",
      alt: "Arena NutraPro Sanitaria Gatos 10 Kg"
    },
    {
      id: 8,
      name: "Toallitas Húmedas Mascotas 80 unid",
      price: 320,
      category: "Limpieza",
      image: "/images/toallitas-humedas.jpg",
      alt: "Toallitas Húmedas Mascotas 80 unid"
    },
    {
      id: 9,
      name: "Shampoo SanolDog Antipulgas 500ml",
      price: 480,
      category: "Limpieza",
      image: "/images/shampoo-antipulgas.jpg",
      alt: "Shampoo SanolDog Antipulgas 500ml"
    },
    {
      id: 10,
      name: "Desodorante Tips Ambiental Mascotas 400ml",
      price: 290,
      category: "Limpieza",
      image: "/images/desodorante-ambiental.jpg",
      alt: "Desodorante Tips Ambiental Mascotas 400ml"
    },
    {
      id: 11,
      name: "Limpiador Nature'sPet Pisos Pet Clean 1L",
      price: 380,
      category: "Limpieza",
      image: "/images/limpiador-pisos.jpg",
      alt: "Limpiador Nature'sPet Pisos Pet Clean 1L"
    },
    {
      id: 12,
      name: "Cepillo Dental para Mascotas",
      price: 150,
      category: "Limpieza",
      image: "/images/cepillo-dental.jpg",
      alt: "Cepillo Dental para Mascotas"
    },
    
    // MEDICINA - 6 productos
    {
      id: 13,
      name: "Vitaminas Multivitamínico 60 tabs",
      price: 750,
      category: "Medicina",
      image: "/images/vitaminas-multi.jpg",
      alt: "Vitaminas Multivitamínico 60 tabs"
    },
    {
      id: 14,
      name: "Antiparasitario Advocate Pipeta Gatos",
      price: 450,
      category: "Medicina",
      image: "/images/antiparasitario-pipeta.jpg",
      alt: "Antiparasitario Advocate Pipeta Gatos"
    },
    {
      id: 15,
      name: "Collar Dominal Antipulgas Perros 60cm",
      price: 380,
      category: "Medicina",
      image: "/images/collar-antipulgas.jpg",
      alt: "Collar Dominal Antipulgas Perros 60cm"
    },
    {
      id: 16,
      name: "Gotas Oculares Lubricell Veterinarias 15ml",
      price: 520,
      category: "Medicina",
      image: "/images/gotas-oculares.jpg",
      alt: "Gotas Oculares Lubricell Veterinarias 15ml"
    },
    {
      id: 17,
      name: "Suplemento JointCare Articulaciones 90caps",
      price: 890,
      category: "Medicina",
      image: "/images/suplemento-articulaciones.jpg",
      alt: "Suplemento JointCare Articulaciones 90caps"
    },
    {
      id: 18,
      name: "Spray Aranda Cicatrizante 120ml",
      price: 340,
      category: "Medicina",
      image: "/images/spray-cicatrizante.jpg",
      alt: "Spray Aranda Cicatrizante 120ml"
    },
    
    // ROPA - 6 productos
    {
      id: 19,
      name: "Suéter Perro Pequeño Azul",
      price: 280,
      category: "Ropa",
      image: "/images/sueter-perro-azul.jpg",
      alt: "Suéter Perro Pequeño Azul"
    },
    {
      id: 20,
      name: "Chaleco Reflectivo Perro Mediano",
      price: 420,
      category: "Ropa",
      image: "/images/chaleco-reflectivo.jpg",
      alt: "Chaleco Reflectivo Perro Mediano"
    },
    {
      id: 21,
      name: "Impermeable Perro Grande",
      price: 650,
      category: "Ropa",
      image: "/images/impermeable-perro.jpg",
      alt: "Impermeable Perro Grande"
    },
    {
      id: 22,
      name: "Disfraz Superhéroe Perro",
      price: 380,
      category: "Ropa",
      image: "/images/disfraz-superheroe.jpg",
      alt: "Disfraz Superhéroe Perro"
    },
    {
      id: 23,
      name: "Bufanda Invernal Mascotas",
      price: 180,
      category: "Ropa",
      image: "/images/bufanda-invernal.jpg",
      alt: "Bufanda Invernal Mascotas"
    },
    {
      id: 24,
      name: "Zapatos Protectores Patas 4 unid",
      price: 320,
      category: "Ropa",
      image: "/images/zapatos-protectores.jpg",
      alt: "Zapatos Protectores Patas 4 unid"
    },
    
    // CAMA - 6 productos
    {
      id: 25,
      name: "Cama Ortopédica Perro Grande",
      price: 1250,
      category: "Cama",
      image: "/images/cama-ortopedica.jpg",
      alt: "Cama Ortopédica Perro Grande"
    },
    {
      id: 26,
      name: "Cojín Redondo Gatos 50cm",
      price: 480,
      category: "Cama",
      image: "/images/cojin-redondo-gatos.jpg",
      alt: "Cojín Redondo Gatos 50cm"
    },
    {
      id: 27,
      name: "Manta Térmica Mascotas 80x60cm",
      price: 390,
      category: "Cama",
      image: "/images/manta-termica.jpg",
      alt: "Manta Térmica Mascotas 80x60cm"
    },
    {
      id: 28,
      name: "Casa Iglú Perro Mediano",
      price: 850,
      category: "Cama",
      image: "/images/casa-iglu.jpg",
      alt: "Casa Iglú Perro Mediano"
    },
    {
      id: 29,
      name: "Colchoneta Impermeable 70x50cm",
      price: 320,
      category: "Cama",
      image: "/images/colchoneta-impermeable.jpg",
      alt: "Colchoneta Impermeable 70x50cm"
    },
    {
      id: 30,
      name: "Cueva Gatos Suave con Capucha",
      price: 580,
      category: "Cama",
      image: "/images/cueva-gatos.jpg",
      alt: "Cueva Gatos Suave con Capucha"
    }
  ]);

  // ====== FUNCIONES DEL CARRITO ======
  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const clearCart = () => {
    setCart([]);
  };

  // ====== FUNCIONES DE PAGO ======
  const calculateInstallmentPrice = (total, installments) => {
    // Simulación de interés por cuotas
    const interestRates = {
      1: 0,
      3: 0.05,
      6: 0.10,
      12: 0.20
    };
    const interest = interestRates[installments] || 0;
    return (total * (1 + interest)) / installments;
  };

  const handleCheckout = () => {
    setShowCart(false);
    setShowCheckout(true);
  };

  const handleFinalizePurchase = () => {
    alert(`¡Compra finalizada!\nTotal: ${formatPrice(getTotalPrice())}\nMétodo de pago: ${paymentMethod}\nCuotas: ${installments}x`);
    clearCart();
    setShowCheckout(false);
  };

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

  const formatPrice = (price) => {
    return `$ ${price.toLocaleString()}`;
  };

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
          className={`px-4 py-2 mx-1 rounded-md font-medium transition-colors duration-200 ${
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
        <div className="flex justify-between items-center mb-6">
          {/* Título */}
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 flex-1 text-center">
            NUESTROS PRODUCTOS
          </h1>

          {/* Botón del carrito */}
          <button
            onClick={() => setShowCart(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-colors duration-200 flex-shrink-0 ml-4"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v4a2 2 0 01-2 2H9a2 2 0 01-2-2v-4m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
            </svg>
            {getTotalItems() > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {getTotalItems()}
              </span>
            )}
          </button>
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
          <div className="flex justify-center items-center mt-12 mb-8">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-md font-medium transition-colors duration-200 ${
                  currentPage === 1
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                Anterior
              </button>
              
              {renderPagination()}
              
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-md font-medium transition-colors duration-200 ${
                  currentPage === totalPages
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                Siguiente
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

      {/* Modal del Carrito */}
      {showCart && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-hidden">
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-2xl font-bold text-gray-800">Carrito de Compras</h2>
              <button
                onClick={() => setShowCart(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto max-h-96">
              {cart.length === 0 ? (
                <div className="text-center py-8">
                  <svg className="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17" />
                  </svg>
                  <p className="text-gray-500">Tu carrito está vacío</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center justify-between border-b pb-4">
                      <div className="flex items-center space-x-4">
                        <img 
                          src={item.image} 
                          alt={item.alt}
                          className="w-16 h-16 object-contain bg-gray-100 rounded"
                        />
                        <div>
                          <h3 className="font-medium text-gray-800">{item.name}</h3>
                          <p className="text-gray-600">{formatPrice(item.price)}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="bg-gray-200 hover:bg-gray-300 w-8 h-8 rounded-full flex items-center justify-center"
                        >
                          -
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="bg-gray-200 hover:bg-gray-300 w-8 h-8 rounded-full flex items-center justify-center"
                        >
                          +
                        </button>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-700 ml-4"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {cart.length > 0 && (
              <div className="border-t p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-bold">Total: {formatPrice(getTotalPrice())}</span>
                  <span className="text-sm text-gray-600">({getTotalItems()} productos)</span>
                </div>
                
                <div className="flex space-x-4">
                  <button
                    onClick={clearCart}
                    className="flex-1 bg-gray-500 hover:bg-gray-600 text-white py-3 rounded-md font-medium transition-colors"
                  >
                    Vaciar Carrito
                  </button>
                  <button
                    onClick={handleCheckout}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-medium transition-colors"
                  >
                    Proceder al Pago
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Modal de Checkout */}
      {showCheckout && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-lg w-full max-h-[90vh] overflow-hidden">
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-2xl font-bold text-gray-800">Finalizar Compra</h2>
              <button
                onClick={() => setShowCheckout(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto">
              {/* Resumen de compra */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Resumen de tu compra</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span>Productos ({getTotalItems()})</span>
                    <span>{formatPrice(getTotalPrice())}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg border-t pt-2">
                    <span>Total</span>
                    <span>{formatPrice(getTotalPrice())}</span>
                  </div>
                </div>
              </div>

              {/* Selección de forma de pago */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Selecciona tu forma de pago:</h3>
                <div className="space-y-3">
                  <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="payment"
                      value="club_pycca"
                      checked={paymentMethod === 'club_pycca'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="mr-3"
                    />
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-xs font-bold">CP</span>
                      </div>
                      <span>Club Pycca (10% descuento)</span>
                    </div>
                  </label>
                  
                  <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="payment"
                      value="tarjeta"
                      checked={paymentMethod === 'tarjeta'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="mr-3"
                    />
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-xs font-bold">💳</span>
                      </div>
                      <span>Tarjeta Bancaria</span>
                    </div>
                  </label>
                  
                  <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="payment"
                      value="efectivo"
                      checked={paymentMethod === 'efectivo'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="mr-3"
                    />
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-xs font-bold">$</span>
                      </div>
                      <span>Efectivo</span>
                    </div>
                  </label>
                </div>
              </div>

              {/* Selección de cuotas para tarjeta */}
              {paymentMethod === 'tarjeta' && (
                <div className="mb-6">
                  <h3 className="font-semibold mb-3">Difiere tu compra:</h3>
                  <select
                    value={installments}
                    onChange={(e) => setInstallments(parseInt(e.target.value))}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value={1}>1 cuota sin interés</option>
                    <option value={3}>3 cuotas (5% interés)</option>
                    <option value={6}>6 cuotas (10% interés)</option>
                    <option value={12}>12 cuotas (20% interés)</option>
                  </select>
                  
                  {installments > 1 && (
                    <div className="mt-3 p-3 bg-blue-50 rounded-lg">
                      <p className="text-sm text-blue-800">
                        <span className="font-semibold">{installments} cuotas de {formatPrice(calculateInstallmentPrice(getTotalPrice(), installments))}</span>
                      </p>
                      <p className="text-xs text-blue-600 mt-1">
                        Total con interés: {formatPrice(getTotalPrice() * (1 + (installments === 3 ? 0.05 : installments === 6 ? 0.10 : 0.20)))}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Mostrar descuento Club Pycca */}
              {paymentMethod === 'club_pycca' && (
                <div className="mb-6 p-4 bg-green-50 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">¡Descuento Club Pycca aplicado!</h4>
                  <div className="text-sm text-green-700">
                    <div className="flex justify-between">
                      <span>Subtotal:</span>
                      <span>{formatPrice(getTotalPrice())}</span>
                    </div>
                    <div className="flex justify-between text-green-600">
                      <span>Descuento (10%):</span>
                      <span>-{formatPrice(getTotalPrice() * 0.10)}</span>
                    </div>
                    <div className="flex justify-between font-bold text-lg border-t border-green-300 pt-2 mt-2">
                      <span>Total a pagar:</span>
                      <span>{formatPrice(getTotalPrice() * 0.90)}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Total final */}
              <div className="mb-6 p-4 bg-gray-100 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold">Total a pagar:</span>
                  <span className="text-2xl font-bold text-blue-600">
                    {paymentMethod === 'club_pycca' 
                      ? formatPrice(getTotalPrice() * 0.90)
                      : paymentMethod === 'tarjeta' && installments > 1
                        ? formatPrice(getTotalPrice() * (1 + (installments === 3 ? 0.05 : installments === 6 ? 0.10 : 0.20)))
                        : formatPrice(getTotalPrice())
                    }
                  </span>
                </div>
                {paymentMethod === 'tarjeta' && installments > 1 && (
                  <p className="text-sm text-gray-600 mt-1">
                    En {installments} cuotas de {formatPrice(calculateInstallmentPrice(getTotalPrice(), installments))}
                  </p>
                )}
              </div>
            </div>
            
            {/* Botones de acción */}
            <div className="border-t p-6">
              <div className="flex space-x-4">
                <button
                  onClick={() => setShowCheckout(false)}
                  className="flex-1 bg-gray-500 hover:bg-gray-600 text-white py-3 rounded-md font-medium transition-colors"
                >
                  Volver
                </button>
                <button
                  onClick={handleFinalizePurchase}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-md font-medium transition-colors"
                >
                  Finalizar Compra
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}