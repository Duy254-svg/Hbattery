import React from 'react';
import { CartItem, BatteryProduct } from '../types/battery';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Truck, Tag, ShieldCheck } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  products: BatteryProduct[];
  onUpdateQuantity: (productId: string, packId: string, quantity: number) => void;
  onRemoveItem: (productId: string, packId: string) => void;
  onProceedCheckout: () => void;
  discountCode: string;
  onApplyDiscount: (code: string) => void;
  discountPercent: number;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  products,
  onUpdateQuantity,
  onRemoveItem,
  onProceedCheckout,
  discountCode,
  onApplyDiscount,
  discountPercent
}) => {
  const [couponInput, setCouponInput] = React.useState('');
  const [couponMsg, setCouponMsg] = React.useState('');

  if (!isOpen) return null;

  // Calculate totals
  const subtotal = cart.reduce((acc, item) => {
    const product = products.find(p => p.id === item.productId);
    if (!product) return acc;
    const pack = product.packOptions.find(p => p.id === item.packId);
    if (!pack) return acc;
    return acc + pack.price * item.quantity;
  }, 0);

  const discountAmount = Math.round((subtotal * discountPercent) / 100);
  const freeShippingThreshold = 200000;
  const isFreeShipping = subtotal >= freeShippingThreshold || discountCode === 'FREESHIP';
  const shippingFee = subtotal === 0 ? 0 : (isFreeShipping ? 0 : 25000);
  const total = Math.max(0, subtotal - discountAmount + shippingFee);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = couponInput.trim().toUpperCase();
    if (clean === 'HBATTERY10') {
      onApplyDiscount(clean);
      setCouponMsg('✓ Áp dụng mã giảm giá 10% thành công!');
    } else if (clean === 'FREESHIP') {
      onApplyDiscount(clean);
      setCouponMsg('✓ Miễn phí vận chuyển toàn quốc!');
    } else {
      setCouponMsg('✕ Mã không hợp lệ. Thử mã HBATTERY10 hoặc FREESHIP');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-950/60 backdrop-blur-xs flex justify-end">
      {/* Background click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-md bg-white shadow-2xl flex flex-col h-full z-10 animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div className="p-5 border-b border-slate-200 flex items-center justify-between bg-slate-950 text-white">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="w-5 h-5 text-sky-400" />
            <h3 className="font-bold text-lg text-white">
              Giỏ Hàng Pin <span className="text-sky-400 font-black">H</span>battery
            </h3>
            <span className="bg-sky-500/20 text-sky-300 text-xs font-bold px-2 py-0.5 rounded-full border border-sky-400/30">
              {cart.reduce((sum, item) => sum + item.quantity, 0)} gói
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress bar */}
        <div className="bg-sky-50 p-3.5 border-b border-sky-100 text-xs">
          <div className="flex items-center justify-between mb-1.5 font-bold text-slate-700">
            <span className="flex items-center gap-1.5 text-sky-800">
              <Truck className="w-4 h-4 text-sky-500" />
              {isFreeShipping ? '🎉 Bạn đã được MIỄN PHÍ VẬN CHUYỂN!' : `Mua thêm ${(freeShippingThreshold - subtotal).toLocaleString('vi-VN')}₫ để FREESHIP`}
            </span>
            <span className="text-sky-600 font-extrabold">
              {Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100))}%
            </span>
          </div>
          <div className="w-full bg-sky-200/80 rounded-full h-2 overflow-hidden">
            <div
              className="bg-gradient-to-r from-sky-500 to-sky-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${Math.min(100, (subtotal / freeShippingThreshold) * 100)}%` }}
            ></div>
          </div>
        </div>

        {/* Cart Item List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3.5">
          {cart.length === 0 ? (
            <div className="text-center py-16 space-y-4">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto text-slate-400">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <p className="text-slate-600 font-bold">Giỏ hàng của bạn đang trống</p>
              <p className="text-xs text-slate-400 max-w-xs mx-auto">
                Khám phá các dòng pin dùng 1 lần chính hãng Hbattery cho khóa vân tay, remote, smartkey ô tô...
              </p>
              <button
                onClick={onClose}
                className="mt-2 px-5 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-sky-600 transition-colors"
              >
                Tiếp tục mua hàng
              </button>
            </div>
          ) : (
            cart.map((item) => {
              const product = products.find(p => p.id === item.productId);
              if (!product) return null;
              const pack = product.packOptions.find(p => p.id === item.packId);
              if (!pack) return null;

              return (
                <div
                  key={`${item.productId}-${item.packId}`}
                  className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200/90 flex gap-3 relative group"
                >
                  {/* Miniature size icon */}
                  <div className="w-12 h-14 bg-slate-900 rounded-xl flex flex-col items-center justify-center text-white shrink-0 shadow-xs border border-slate-700">
                    <span className="text-sky-400 font-black text-xs">H</span>
                    <span className="font-mono font-black text-[11px] text-white">{product.size}</span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-1">
                      <h4 className="font-bold text-slate-900 text-xs sm:text-sm truncate">
                        <span className="text-sky-500 font-extrabold">H</span>
                        <span>{product.name.replace(/^Hbattery\s*/, 'battery ')}</span>
                      </h4>
                      <button
                        onClick={() => onRemoveItem(item.productId, item.packId)}
                        className="text-slate-400 hover:text-red-500 transition-colors p-0.5"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="text-[11px] text-slate-500 mt-0.5 font-medium">
                      Quy cách: <span className="font-bold text-slate-700">{pack.name}</span>
                    </div>

                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-200/60">
                      <div className="flex items-center gap-2 bg-white rounded-lg border border-slate-200 px-1 py-0.5">
                        <button
                          onClick={() => onUpdateQuantity(item.productId, item.packId, item.quantity - 1)}
                          className="w-5 h-5 flex items-center justify-center text-slate-600 hover:text-sky-600"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold w-4 text-center text-slate-900">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.productId, item.packId, item.quantity + 1)}
                          className="w-5 h-5 flex items-center justify-center text-slate-600 hover:text-sky-600"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <div className="text-right">
                        <div className="text-sm font-black text-slate-950">
                          {(pack.price * item.quantity).toLocaleString('vi-VN')}₫
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Voucher section */}
        {cart.length > 0 && (
          <div className="p-4 bg-slate-50 border-t border-slate-200">
            <form onSubmit={handleApplyCoupon} className="flex gap-2">
              <div className="relative flex-1">
                <input
                  type="text"
                  value={couponInput}
                  onChange={(e) => setCouponInput(e.target.value)}
                  placeholder="Mã giảm giá (HBATTERY10)"
                  className="w-full bg-white text-xs pl-8 pr-3 py-2 rounded-xl border border-slate-300 outline-none focus:border-sky-500 uppercase font-bold"
                />
                <Tag className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
              </div>
              <button
                type="submit"
                className="px-3 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
              >
                Áp dụng
              </button>
            </form>
            {couponMsg && (
              <p className="text-[11px] text-sky-700 font-semibold mt-1.5">{couponMsg}</p>
            )}
          </div>
        )}

        {/* Footer Checkout Summary */}
        {cart.length > 0 && (
          <div className="p-5 border-t border-slate-200 bg-white space-y-3">
            <div className="space-y-1.5 text-xs text-slate-600">
              <div className="flex justify-between">
                <span>Tạm tính:</span>
                <span className="font-bold text-slate-900">{subtotal.toLocaleString('vi-VN')}₫</span>
              </div>
              {discountAmount > 0 && (
                <div className="flex justify-between text-emerald-600 font-semibold">
                  <span>Giảm giá ({discountPercent}%):</span>
                  <span>-{discountAmount.toLocaleString('vi-VN')}₫</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Phí giao hàng:</span>
                <span className="font-bold text-slate-900">
                  {shippingFee === 0 ? (
                    <span className="text-emerald-600 font-extrabold uppercase">Miễn phí</span>
                  ) : (
                    `${shippingFee.toLocaleString('vi-VN')}₫`
                  )}
                </span>
              </div>
              <div className="flex justify-between text-sm font-black text-slate-950 pt-2 border-t border-slate-100">
                <span>Tổng cộng:</span>
                <span className="text-lg text-sky-600">{total.toLocaleString('vi-VN')}₫</span>
              </div>
            </div>

            <button
              onClick={() => {
                onClose();
                onProceedCheckout();
              }}
              className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-400 hover:to-sky-500 text-slate-950 font-black text-sm flex items-center justify-center gap-2 shadow-lg shadow-sky-500/25 transition-all cursor-pointer"
            >
              <span>Tiến hành đặt hàng ({total.toLocaleString('vi-VN')}₫)</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </button>

            <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-500" />
              <span>Chính hãng Hbattery • Chống rò rỉ đền 100%</span>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
