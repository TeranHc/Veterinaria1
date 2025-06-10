import './globals.css';
import Header from './components/header';
import Footer from './components/footer';


export const metadata = {
  title: 'SaludPet',
  description: 'Página de prueba con layout',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="flex flex-col min-h-screen">
        
        <Header />
        <main className="flex-grow p-4 bg-main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
