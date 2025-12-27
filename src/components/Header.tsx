import { Sandwich } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Sandwich className="w-10 h-10 text-foreground" strokeWidth={1.5} />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-2xl md:text-3xl tracking-wider leading-none">
              PERPÉTUA
            </span>
            <span className="font-display text-lg md:text-xl tracking-widest text-muted-foreground leading-none">
              LANCHE
            </span>
          </div>
        </div>
        <div className="text-right">
          <p className="text-xs text-muted-foreground">Peça pelo WhatsApp</p>
          <p className="font-display text-lg tracking-wide">DELIVERY</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
