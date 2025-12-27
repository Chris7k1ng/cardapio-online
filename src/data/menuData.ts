import pastelImg from '@/assets/pastel.jpg';
import pizzaImg from '@/assets/pizza.jpg';
import hamburguerImg from '@/assets/hamburguer.jpg';
import salgadoImg from '@/assets/salgado.jpg';
import porcaoImg from '@/assets/porcao.jpg';
import lasanhaImg from '@/assets/lasanha.jpg';
import pizzaDoceImg from '@/assets/pizza-doce.jpg';
import pastelDoceImg from '@/assets/pastel-doce.jpg';
import bebidasImg from '@/assets/bebidas.jpg';
import vitaminaImg from '@/assets/vitamina.jpg';

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: string;
  description?: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
  image: string;
  note?: string;
}

export const menuData: MenuCategory[] = [
  // ========== SALGADOS ==========
  {
    id: 'pizza',
    name: 'Pizzas',
    image: pizzaImg,
    note: 'Todas vão molho, tomate, azeitona e orégano.',
    items: [
      { id: 'pz1', name: 'Calabresa', price: 34, category: 'pizza', description: 'Muçarela, calabresa e cebola' },
      { id: 'pz2', name: 'Calabresa Especial', price: 35, category: 'pizza', description: 'Muçarela, catupiry, calabresa, milho e cebola' },
      { id: 'pz3', name: 'Bacon', price: 37, category: 'pizza', description: 'Muçarela e bacon' },
      { id: 'pz4', name: 'Frango com Catupiry', price: 34, category: 'pizza', description: 'Frango desfiado, milho, catupiry e muçarela' },
      { id: 'pz5', name: 'Frango com Cheddar', price: 35, category: 'pizza', description: 'Frango desfiado, milho, cheddar e muçarela' },
      { id: 'pz6', name: 'Frango Crocante', price: 36, category: 'pizza', description: 'Frango desfiado, milho, catupiry, muçarela e batata palha' },
      { id: 'pz7', name: 'Frango Cheddar e Bacon', price: 36, category: 'pizza', description: 'Frango desfiado, milho, cheddar, muçarela e bacon' },
      { id: 'pz8', name: 'Presunto', price: 34, category: 'pizza', description: 'Presunto e muçarela' },
      { id: 'pz9', name: 'Muçarela', price: 34, category: 'pizza', description: 'Muçarela e tomate' },
      { id: 'pz10', name: 'Dois Queijos', price: 34, category: 'pizza', description: 'Muçarela e catupiry' },
      { id: 'pz11', name: 'Três Queijos', price: 35, category: 'pizza', description: 'Muçarela, catupiry e cheddar' },
      { id: 'pz12', name: 'Queijo Crocante Especial', price: 36, category: 'pizza', description: 'Muçarela, catupiry e batata palha' },
      { id: 'pz13', name: 'Carne Moída', price: 35, category: 'pizza', description: 'Muçarela, carne moída e milho' },
      { id: 'pz14', name: 'Portuguesa', price: 37, category: 'pizza', description: 'Presunto, milho, ervilha, ovo cozido, cebola e muçarela' },
      { id: 'pz15', name: 'Baiana', price: 37, category: 'pizza', description: 'Calabresa, ovo cozido, cebola, molho de pimenta e muçarela' },
      { id: 'pz16', name: 'Moda da Casa Frango', price: 40, category: 'pizza', description: 'Frango desfiado, milho, catupiry, calabresa, presunto e muçarela' },
      { id: 'pz17', name: 'Moda da Casa Carne Moída', price: 40, category: 'pizza', description: 'Carne moída, milho, calabresa, presunto e muçarela' },
    ],
  },
  {
    id: 'hamburguer',
    name: 'Hambúrguer',
    image: hamburguerImg,
    items: [
      { id: 'h1', name: 'X-Salada', price: 12, category: 'hamburguer', description: 'Pão, hambúrguer, carne, queijo, salada e molho' },
      { id: 'h2', name: 'X-Bacon', price: 15, category: 'hamburguer', description: 'Pão, hambúrguer, carne, queijo, bacon, presunto, salada e molho' },
      { id: 'h3', name: 'X-Egg', price: 15, category: 'hamburguer', description: 'Pão, hambúrguer, carne, queijo, ovo, presunto, salada e molho' },
      { id: 'h4', name: 'X-Duplo', price: 22, category: 'hamburguer', description: 'Pão, hambúrguer, 2 carnes, 2 ovos, queijo, bacon, presunto, salada e molho' },
      { id: 'h5', name: 'X-Tudo', price: 23, category: 'hamburguer', description: 'Pão, hambúrguer, carne, ovo, queijo, presunto, bacon, calabresa, salsicha, salada e molho' },
    ],
  },
  {
    id: 'pastel',
    name: 'Pastel Salgado',
    image: pastelImg,
    items: [
      { id: 'p1', name: 'Carne', price: 5, category: 'pastel', description: 'Carne moída temperada' },
      { id: 'p2', name: 'Carne com Queijo', price: 6, category: 'pastel', description: 'Carne moída e queijo' },
      { id: 'p3', name: 'Frango com Catupiry', price: 4, category: 'pastel', description: 'Frango desfiado e catupiry' },
      { id: 'p4', name: 'Frango com Cheddar', price: 5, category: 'pastel', description: 'Frango desfiado e cheddar' },
      { id: 'p5', name: 'Frango com Queijo', price: 5, category: 'pastel', description: 'Frango desfiado e queijo' },
      { id: 'p6', name: 'Pizza', price: 6, category: 'pastel', description: 'Queijo, presunto e tomate' },
      { id: 'p7', name: 'Queijo', price: 4, category: 'pastel', description: 'Queijo muçarela' },
      { id: 'p8', name: 'Presunto e Queijo', price: 4, category: 'pastel', description: 'Presunto e queijo' },
      { id: 'p9', name: 'Calabresa', price: 5, category: 'pastel', description: 'Calabresa' },
      { id: 'p10', name: 'Calabresa com Queijo', price: 6, category: 'pastel', description: 'Calabresa e queijo' },
      { id: 'p11', name: 'Moda da Casa de Frango', price: 6, category: 'pastel', description: 'Frango, queijo, calabresa e presunto' },
      { id: 'p12', name: 'Moda da Casa de Carne', price: 7, category: 'pastel', description: 'Carne, queijo, calabresa e presunto' },
    ],
  },
  {
    id: 'salgado',
    name: 'Salgados Fritos',
    image: salgadoImg,
    items: [
      { id: 's1', name: 'Coxinha de Frango', price: 4, category: 'salgado', description: 'Frango desfiado' },
      { id: 's2', name: 'Enroladinho de Salsicha', price: 4, category: 'salgado', description: 'Salsicha enrolada' },
    ],
  },
  {
    id: 'porcoes',
    name: 'Porções',
    image: porcaoImg,
    items: [
      { id: 'pc1', name: 'Calabresa Acebolada P', price: 15, category: 'porcoes', description: 'Meia porção de calabresa acebolada' },
      { id: 'pc2', name: 'Calabresa Acebolada G', price: 29, category: 'porcoes', description: 'Porção inteira de calabresa acebolada' },
      { id: 'pc3', name: 'Batata Simples P', price: 10, category: 'porcoes', description: 'Meia porção de batata frita' },
      { id: 'pc4', name: 'Batata Simples G', price: 19, category: 'porcoes', description: 'Porção inteira de batata frita' },
      { id: 'pc5', name: 'Batata com Cheddar e Bacon P', price: 13, category: 'porcoes', description: 'Meia porção de batata com cheddar e bacon' },
      { id: 'pc6', name: 'Batata com Cheddar e Bacon G', price: 25, category: 'porcoes', description: 'Porção inteira de batata com cheddar e bacon' },
    ],
  },
  {
    id: 'lasanha',
    name: 'Lasanhas',
    image: lasanhaImg,
    items: [
      { id: 'l1', name: 'Carne Moída', price: 13, category: 'lasanha', description: 'Lasanha de carne moída com molho' },
      { id: 'l2', name: 'Frango Desfiado', price: 12, category: 'lasanha', description: 'Lasanha de frango desfiado com molho' },
    ],
  },
  // ========== DOCES ==========
  {
    id: 'pizza-doce',
    name: 'Pizza Doce',
    image: pizzaDoceImg,
    items: [
      { id: 'pzd1', name: 'Brigadeiro', price: 34, category: 'pizza-doce', description: 'Brigadeiro, muçarela e granulado' },
      { id: 'pzd2', name: 'Ouro Branco', price: 36, category: 'pizza-doce', description: 'Brigadeiro, muçarela, ouro branco e granulado' },
      { id: 'pzd3', name: 'Sonho de Valsa', price: 36, category: 'pizza-doce', description: 'Brigadeiro, muçarela e sonho de valsa' },
      { id: 'pzd4', name: 'Prestígio', price: 35, category: 'pizza-doce', description: 'Brigadeiro, coco ralado e muçarela' },
    ],
  },
  {
    id: 'pastel-doce',
    name: 'Pastel Doce',
    image: pastelDoceImg,
    items: [
      { id: 'pd1', name: 'Brigadeiro', price: 6, category: 'pastel-doce', description: 'Recheio de brigadeiro' },
      { id: 'pd2', name: 'Sonho de Valsa', price: 7, category: 'pastel-doce', description: 'Chocolate com bombom sonho de valsa' },
      { id: 'pd3', name: 'Nutella', price: 8, category: 'pastel-doce', description: 'Creme de avelã Nutella' },
      { id: 'pd4', name: 'Ouro Branco', price: 7, category: 'pastel-doce', description: 'Chocolate branco com bombom' },
    ],
  },
  // ========== BEBIDAS ==========
  {
    id: 'vitaminas',
    name: 'Vitaminas',
    image: vitaminaImg,
    note: 'Copo 400ml',
    items: [
      { id: 'v1', name: 'Graviola', price: 6, category: 'vitaminas', description: 'Vitamina de graviola' },
      { id: 'v2', name: 'Goiaba', price: 6, category: 'vitaminas', description: 'Vitamina de goiaba' },
      { id: 'v3', name: 'Maracujá', price: 7, category: 'vitaminas', description: 'Vitamina de maracujá' },
      { id: 'v4', name: 'Manga', price: 6, category: 'vitaminas', description: 'Vitamina de manga' },
      { id: 'v5', name: 'Acerola', price: 6, category: 'vitaminas', description: 'Vitamina de acerola' },
    ],
  },
  {
    id: 'bebidas',
    name: 'Bebidas',
    image: bebidasImg,
    items: [
      { id: 'b1', name: 'Coca-Cola Lata', price: 5, category: 'bebidas', description: 'Refrigerante lata 350ml' },
      { id: 'b2', name: 'Fanta Laranja Lata', price: 5, category: 'bebidas', description: 'Refrigerante lata 350ml' },
      { id: 'b3', name: 'Sprite Lata', price: 5, category: 'bebidas', description: 'Refrigerante lata 350ml' },
      { id: 'b4', name: 'Coca-Cola 1L', price: 8, category: 'bebidas', description: 'Refrigerante 1 litro' },
      { id: 'b5', name: 'Cajuína São Geraldo', price: 9, category: 'bebidas', description: 'Cajuína tradicional' },
      { id: 'b6', name: 'Cajuína 2L', price: 14, category: 'bebidas', description: 'Cajuína 2 litros' },
      { id: 'b7', name: 'Cola 2L', price: 7, category: 'bebidas', description: 'Refrigerante cola 2 litros' },
      { id: 'b8', name: 'Guaraná 2L', price: 7, category: 'bebidas', description: 'Guaraná 2 litros' },
      { id: 'b9', name: 'Uva 2L', price: 7, category: 'bebidas', description: 'Refrigerante uva 2 litros' },
      { id: 'b10', name: 'Laranja 2L', price: 7, category: 'bebidas', description: 'Refrigerante laranja 2 litros' },
      { id: 'b11', name: 'Coca-Cola 2L', price: 14, category: 'bebidas', description: 'Coca-Cola 2 litros' },
    ],
  },
];
