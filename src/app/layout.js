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
        
        <Header>
                  {/*<!-- Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-LTR1CZ4WQY"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-LTR1CZ4WQY');
        </script>
        </Header>
        <main className="flex-grow p-4 bg-main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
