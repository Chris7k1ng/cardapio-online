import { ShoppingCart, X, Plus, Minus, MessageCircle, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';
import { toast } from 'sonner';

const Cart = () => {
  const { items, totalItems, totalPrice, updateQuantity, removeItem, clearCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [observations, setObservations] = useState('');

  const formatWhatsAppMessage = () => {
  const now = new Date();
  const dateStr = now.toLocaleDateString('pt-BR');
  const timeStr = now.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit'
  });

  let message = '';
  message += 'Olá! Vim do cardápio online da Perpétua Lanche\n\n';

  message += `Data: ${dateStr}\n`;
  message += `Hora: ${timeStr}\n\n`;

  message += 'Tipo de serviço: Delivery\n\n';

  message += `Nome: ${customerName}\n`;

  if (customerPhone) {
    message += `Telefone: ${customerPhone}\n`;
  }

  message += `Endereço: ${customerAddress}\n\n`;

  message += 'Produtos:\n';

  items.forEach((item) => {
    message += `- ${item.quantity}x ${item.name} - R$ ${(item.price * item.quantity)
      .toFixed(2)
      .replace('.', ',')}\n`;
  });

  message += `\nSubtotal: R$ ${totalPrice.toFixed(2).replace('.', ',')}\n`;
  message += 'Taxa de entrega: Consultar com atendente\n';
  message += `Total: R$ ${totalPrice.toFixed(2).replace('.', ',')} + taxa\n\n`;

  message += 'Pagamento:\n';
  message += 'PIX / Dinheiro / Cartão\n\n';

  if (observations) {
    message += `Observações:\n${observations}\n\n`;
  }

  message += 'Por favor, confirme o recebimento do pedido.';

  return encodeURIComponent(message);
};
  const handleSendOrder = () => {
    if (items.length === 0) {
      toast.error('Adicione itens ao carrinho!', { duration: 1500 });
      return;
    }
    
    if (!customerName.trim()) {
      toast.error('Informe seu nome!', { duration: 1500 });
      return;
    }
    
    if (!customerAddress.trim()) {
      toast.error('Informe seu endereço de entrega!', { duration: 1500 });
      return;
    }
    
    // WhatsApp da Perpétua Lanche
    const phoneNumber = '558581598078';
    const message = formatWhatsAppMessage();
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
    toast.success('Redirecionando para o WhatsApp...', { duration: 1500 });
  };

  return (
    <>
      {/* Floating Cart Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-foreground text-background rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-200"
        aria-label="Abrir carrinho"
      >
        <ShoppingCart className="w-7 h-7" />
        {totalItems > 0 && (
          <span className="absolute -top-1 -right-1 w-6 h-6 bg-destructive text-destructive-foreground rounded-full flex items-center justify-center text-xs font-bold animate-bounce-subtle">
            {totalItems}
          </span>
        )}
      </button>

      {/* Cart Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <div className="relative w-full max-w-md bg-cart-bg border-l border-border h-full flex flex-col animate-fade-in overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border flex-shrink-0">
              <div className="flex items-center gap-3">
                <ShoppingCart className="w-6 h-6" />
                <h2 className="font-display text-2xl tracking-wide">SEU PEDIDO</h2>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-accent transition-colors"
                aria-label="Fechar carrinho"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-muted-foreground p-6">
                  <ShoppingCart className="w-16 h-16 mb-4 opacity-30" />
                  <p className="text-lg">Carrinho vazio</p>
                  <p className="text-sm">Adicione itens do cardápio</p>
                </div>
              ) : (
                <div className="p-6 space-y-4">
                  {/* Cart Items */}
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="bg-cart-item border border-border rounded-lg p-4"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="font-medium uppercase text-sm flex-1 pr-2">
                          {item.name}
                        </h4>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-muted-foreground hover:text-destructive transition-colors"
                          aria-label={`Remover ${item.name}`}
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 flex items-center justify-center rounded-full bg-secondary hover:bg-accent transition-colors"
                            aria-label="Diminuir quantidade"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center font-display text-lg">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 flex items-center justify-center rounded-full bg-secondary hover:bg-accent transition-colors"
                            aria-label="Aumentar quantidade"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <span className="font-display text-lg text-price">
                          R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}
                        </span>
                      </div>
                    </div>
                  ))}

                  {/* Customer Info */}
                  <div className="pt-4 border-t border-border space-y-3">
                    <h3 className="font-display text-lg tracking-wide">SEUS DADOS</h3>
                    <input
                      type="text"
                      placeholder="Seu nome *"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full px-4 py-3 bg-cart-item border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground/50 transition-colors"
                    />
                    <input
                      type="tel"
                      placeholder="Telefone (opcional)"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className="w-full px-4 py-3 bg-cart-item border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground/50 transition-colors"
                    />
                    <textarea
                      placeholder="Endereço completo de entrega *"
                      value={customerAddress}
                      onChange={(e) => setCustomerAddress(e.target.value)}
                      rows={2}
                      className="w-full px-4 py-3 bg-cart-item border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground/50 transition-colors resize-none"
                    />
                    <textarea
                      placeholder="Observações (sem cebola, bem passado, etc)"
                      value={observations}
                      onChange={(e) => setObservations(e.target.value)}
                      rows={2}
                      className="w-full px-4 py-3 bg-cart-item border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground/50 transition-colors resize-none"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-border p-6 space-y-4 flex-shrink-0">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-display text-2xl">
                    R$ {totalPrice.toFixed(2).replace('.', ',')}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">
                  * Taxa de entrega será informada pelo atendente
                </p>
                <button
                  onClick={handleSendOrder}
                  className="w-full py-4 bg-success hover:bg-success/90 text-success-foreground rounded-lg font-display text-xl tracking-wide flex items-center justify-center gap-3 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <MessageCircle className="w-6 h-6" />
                  ENVIAR PEDIDO
                </button>
                <button
                  onClick={() => {
                    clearCart();
                    setCustomerName('');
                    setCustomerPhone('');
                    setCustomerAddress('');
                    setObservations('');
                    toast.info('Carrinho limpo', { duration: 1500 });
                  }}
                  className="w-full py-3 border border-border hover:border-foreground/50 rounded-lg text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  Limpar carrinho
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
