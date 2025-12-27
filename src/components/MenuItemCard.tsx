import { Plus } from 'lucide-react';
import { MenuItem } from '@/data/menuData';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';

interface MenuItemCardProps {
  item: MenuItem;
  index?: number;
}

const MenuItemCard = ({ item, index = 0 }: MenuItemCardProps) => {
  const { addItem } = useCart();

  const handleAddItem = () => {
    addItem(item);
    toast.success(`${item.name} adicionado!`, {
      duration: 1500,
      className: 'bg-card text-foreground border-border',
    });
  };

  return (
    <div 
      className="group flex items-center justify-between p-4 bg-menu-card hover:bg-menu-card-hover border border-border rounded-lg transition-all duration-300 hover:border-foreground/30 hover:shadow-lg hover:shadow-foreground/5 animate-fade-in opacity-0"
      style={{ 
        animationDelay: `${index * 50}ms`,
        animationFillMode: 'forwards'
      }}
    >
      <div className="flex-1 min-w-0 pr-4">
        <h4 className="text-foreground font-medium tracking-wide uppercase text-sm md:text-base group-hover:text-primary transition-colors duration-300">
          {item.name}
        </h4>
        {item.description && (
          <p className="text-muted-foreground text-xs md:text-sm mt-1 line-clamp-2">
            {item.description}
          </p>
        )}
      </div>
      <div className="flex items-center gap-3 flex-shrink-0">
        <span className="text-price font-display text-lg md:text-xl tracking-wide whitespace-nowrap transition-transform duration-300 group-hover:scale-110">
          R$ {item.price.toFixed(2).replace('.', ',')}
        </span>
        <button
          onClick={handleAddItem}
          className="w-9 h-9 flex items-center justify-center rounded-full bg-foreground text-background hover:bg-primary transition-all duration-300 hover:scale-110 hover:rotate-90 active:scale-95"
          aria-label={`Adicionar ${item.name} ao carrinho`}
        >
          <Plus className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default MenuItemCard;
