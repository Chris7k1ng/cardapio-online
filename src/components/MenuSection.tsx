import { MenuCategory } from '@/data/menuData';
import MenuItemCard from './MenuItemCard';

interface MenuSectionProps {
  category: MenuCategory;
  index: number;
}

const MenuSection = ({ category, index }: MenuSectionProps) => {
  return (
    <section
      className="animate-fade-in opacity-0"
      style={{ 
        animationDelay: `${index * 150}ms`,
        animationFillMode: 'forwards'
      }}
    >
      {/* Category Header with Image */}
      <div className="relative mb-6 overflow-hidden rounded-xl group">
        <div className="aspect-[3/1] md:aspect-[4/1] relative">
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
          <div className="absolute inset-0 flex items-center px-6 md:px-8">
            <div className="transform transition-transform duration-500 group-hover:translate-x-2">
              <h3 className="category-title text-3xl md:text-4xl uppercase tracking-wider">
                {category.name}
              </h3>
              {category.note && (
                <p className="text-muted-foreground text-xs md:text-sm mt-1 max-w-md">
                  {category.note}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="grid gap-3">
        {category.items.map((item, itemIndex) => (
          <MenuItemCard key={item.id} item={item} index={itemIndex} />
        ))}
      </div>
    </section>
  );
};

export default MenuSection;
