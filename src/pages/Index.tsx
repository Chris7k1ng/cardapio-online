import Header from '@/components/Header';
import MenuSection from '@/components/MenuSection';
import Cart from '@/components/Cart';
import Footer from '@/components/Footer';
import { CartProvider } from '@/context/CartContext';
import { menuData } from '@/data/menuData';
import { Sandwich, Clock, MapPin } from 'lucide-react';

const Index = () => {
  return (
    <CartProvider>
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        
        {/* Hero Section */}
        <section className="relative py-10 md:py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-transparent" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 p-3 rounded-full border border-border">
                <Sandwich className="w-12 h-12 md:w-16 md:h-16" strokeWidth={1} />
              </div>
              <h1 className="menu-title text-5xl md:text-6xl mb-3">CARDÁPIO</h1>
              <p className="text-muted-foreground max-w-md text-sm md:text-base mb-6">
                Escolha seus itens favoritos e faça seu pedido diretamente pelo WhatsApp
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 text-xs md:text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>18h às 23h</span>
                </div>
                <div className="w-1 h-1 rounded-full bg-muted-foreground" />
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Delivery e Retirada</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Menu Sections */}
        <main className="container mx-auto px-4 pb-24 flex-1">
          <div className="max-w-3xl mx-auto space-y-10">
            {menuData.map((category, index) => (
              <MenuSection key={category.id} category={category} index={index} />
            ))}
          </div>
        </main>

        <Footer />
        <Cart />
      </div>
    </CartProvider>
  );
};

export default Index;
