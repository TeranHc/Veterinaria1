import { CartProvider } from './components/CartContext';
import './globals.css';
import Header from './components/header';
import Footer from './components/footer';
import Script from 'next/script';

export const metadata = {
  title: 'SaludPet',
  description: 'Veterinaria especializada en el cuidado de mascotas',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        {/* Google Analytics Script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-LTR1CZ4WQY"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LTR1CZ4WQY');
          `}
        </Script>
      </head>
      <body className="flex flex-col min-h-screen">
        <CartProvider>
          <Header />
          <main className="flex-grow p-4 bg-main">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}