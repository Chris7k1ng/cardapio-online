import { Sandwich, Instagram, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Sandwich className="w-8 h-8" strokeWidth={1.5} />
            <div className="flex flex-col">
              <span className="font-display text-xl tracking-wider leading-none">
                PERPÉTUA
              </span>
              <span className="font-display text-sm tracking-widest text-muted-foreground leading-none">
                LANCHE
              </span>
            </div>
          </div>
          
          <div className="flex items-center gap-6 text-muted-foreground">
            <a
              href="#"
              className="hover:text-foreground transition-colors flex items-center gap-2"
            >
              <Instagram className="w-5 h-5" />
              <span className="text-sm">@perpetua.lanches</span>
            </a>
            <a
              href="tel:+5500000000000"
              className="hover:text-foreground transition-colors flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              <span className="text-sm">(85) 981598078</span>
            </a>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            © 2025 Perpétua Lanche. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
