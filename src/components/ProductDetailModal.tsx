import React from 'react';
import { BatteryProduct, PackOption } from '../types/battery';
import { BatteryVisual } from './BatteryVisual';
import { X, ShieldCheck, Zap, AlertTriangle, CheckCircle, ShoppingCart, Star, Calendar, Thermometer, Layers, Truck, Plus, Minus, ArrowRight } from 'lucide-react';

interface ProductDetailModalProps {
  product: BatteryProduct | null;
  onClose: () => void;
  onAddToCart: (product: BatteryProduct, pack: PackOption, quantity: number) => void;
  onBuyNow: (product: BatteryProduct, pack: PackOption, quantity: number) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onBuyNow
}) => {
  if (!product) return null;

  const [selectedPackId, setSelectedPackId] = React.useState<string>(
    product.packOptions.find(p => p.isPopular)?.id || product.packOptions[0].id
  );
  const [quantity, setQuantity] = React.useState<number>(1);
  const [addedToast, setAddedToast] = React.useState(false);

  const currentPack = product.packOptions.find(p => p.id === selectedPackId) || product.packOptions[0];
  const totalPrice = currentPack.price * quantity;
  const unitPrice = Math.round(currentPack.price / currentPack.count);

  const handleAdd = () => {
    onAddToCart(product, currentPack, quantity);
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 2000);
  };

  const handleBuy = () => {
    onBuyNow(product, currentPack, quantity);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-5">
      {/* Backdrop click */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Main Modal Window - Redesigned in sleek deep black theme */}
      <div className="relative w-full max-w-5xl bg-slate-950 text-white rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.8)] border border-slate-800 overflow-hidden my-6 z-10">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-30 p-3 rounded-full bg-slate-900/90 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-700/80 transition-all cursor-pointer shadow-lg"
          title="Đóng (ESC)"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 max-h-[88vh] overflow-y-auto">
          
          {/* Left Column: Big Battery Showcase */}
          <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 via-slate-950 to-black p-6 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-800/80 relative">
            <div>
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="bg-sky-500/20 text-sky-300 border border-sky-400/40 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
                  {product.series}
                </span>
                <span className="bg-slate-800 text-slate-300 font-mono text-xs px-2.5 py-1 rounded-full border border-slate-700">
                  Mã IEC: {product.code}
                </span>
                {product.isRechargeable ? (
                  <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/50 text-xs font-black px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>SẠC LẠI ĐƯỢC ({product.rechargeCycles ? `${product.rechargeCycles.toLocaleString()} lần` : '500+ lần'})</span>
                  </span>
                ) : (
                  <span className="bg-slate-800/80 text-slate-400 text-xs font-bold px-2.5 py-1 rounded-full border border-slate-700">
                    Pin dùng 1 lần
                  </span>
                )}
              </div>

              {/* Product Title with sky blue H */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight tracking-tight">
                <span className="text-sky-400 font-black drop-shadow-[0_0_12px_rgba(56,189,248,0.7)]">
                  H
                </span>
                <span>{product.name.replace(/^Hbattery\s*/, 'battery ')}</span>
              </h2>

              <p className="text-slate-300 text-sm sm:text-base mt-2.5 leading-relaxed">
                {product.tagline}
              </p>

              {/* Big, Prestigious Battery Visual Centerpiece */}
              <div className="my-8 sm:my-12 flex justify-center items-center py-4">
                <div className="transform scale-125 sm:scale-135 transition-transform">
                  <BatteryVisual
                    size={product.size}
                    chemistry={product.chemistry}
                    voltage={product.voltage}
                    name={product.name}
                    isPack={true}
                    packCount={currentPack.count}
                  />
                </div>
              </div>
            </div>

            {/* Safety Warning Badge in Dark Red Accent */}
            <div className="bg-red-950/40 border border-red-800/50 rounded-2xl p-4 text-xs">
              <div className="flex items-center gap-2 font-black text-red-400 text-sm mb-1">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <span>CẢNH BÁO AN TOÀN NGUYÊN BẢN</span>
              </div>
              <p className="text-slate-300 text-xs leading-relaxed">
                {product.warningNote}
              </p>
            </div>
          </div>

          {/* Right Column: Full Specifications & Purchasing in Sleek Dark Theme */}
          <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between bg-slate-950 space-y-6">
            
            {/* Rating & Stock Status */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2 text-sm font-bold text-white">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <span className="text-base font-black text-white">{product.rating}</span>
                <span className="text-slate-400 font-normal text-xs">
                  ({product.reviewCount} đánh giá từ thợ kỹ thuật & khách hàng)
                </span>
              </div>

              <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-bold bg-emerald-950/60 border border-emerald-800/60 px-3 py-1 rounded-full">
                <CheckCircle className="w-4 h-4" />
                <span>Kho sẵn sàng giao</span>
              </div>
            </div>

            {/* Description */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Tổng Quan & Đặc Tính Kỹ Thuật
              </h4>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* High-visibility Specifications Grid */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4 text-sky-400" />
                Thông Số Tiêu Chuẩn Quốc Tế
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="bg-slate-900/90 p-3.5 rounded-2xl border border-slate-800">
                  <span className="text-slate-400 text-xs block mb-1">Điện thế chuẩn</span>
                  <strong className="text-sky-400 font-black text-lg">{product.voltage}</strong>
                </div>
                <div className="bg-slate-900/90 p-3.5 rounded-2xl border border-slate-800">
                  <span className="text-slate-400 text-xs block mb-1">Dung lượng xả</span>
                  <strong className="text-white font-black text-lg">{product.capacity}</strong>
                </div>
                <div className="bg-slate-900/90 p-3.5 rounded-2xl border border-slate-800">
                  <span className="text-slate-400 text-xs block mb-1">Hạn lưu kho</span>
                  <strong className="text-amber-400 font-black text-lg">{product.shelfLifeYears} Năm</strong>
                </div>
                <div className="bg-slate-900/90 p-3.5 rounded-2xl border border-slate-800">
                  <span className="text-slate-400 text-xs block mb-1">Dải nhiệt độ</span>
                  <strong className="text-white font-bold text-xs">{product.operatingTemp}</strong>
                </div>
                <div className="bg-slate-900/90 p-3.5 rounded-2xl border border-slate-800">
                  <span className="text-slate-400 text-xs block mb-1">Công nghệ pin</span>
                  <strong className="text-white font-bold text-xs capitalize">{product.chemistry}</strong>
                </div>
                <div className="bg-slate-900/90 p-3.5 rounded-2xl border border-slate-800">
                  <span className="text-slate-400 text-xs block mb-1">Loại nguồn điện</span>
                  <strong className="text-emerald-400 font-bold text-xs">
                    {product.isRechargeable ? `Sạc lại (${product.rechargeCycles ? `${product.rechargeCycles.toLocaleString()} lần` : '500+ lần'})` : 'Dùng 1 lần (Chống rò rỉ)'}
                  </strong>
                </div>
              </div>
            </div>

            {/* Pack Size Selector - Big, Prominent, Clear */}
            <div>
              <div className="flex items-center justify-between mb-2.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Chọn Quy Cách Đóng Gói (Pack Size):
                </h4>
                <span className="text-xs text-sky-400 font-bold">
                  ~{unitPrice.toLocaleString('vi-VN')}₫ / viên
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                {product.packOptions.map((pack) => {
                  const isSelected = pack.id === selectedPackId;
                  return (
                    <button
                      key={pack.id}
                      onClick={() => setSelectedPackId(pack.id)}
                      className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-sky-950/80 border-sky-400 ring-2 ring-sky-500/40 text-white shadow-lg'
                          : 'bg-slate-900/70 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-900'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-extrabold text-sm">{pack.name}</span>
                        {pack.isPopular && (
                          <span className="bg-sky-500 text-slate-950 text-[10px] font-black px-2 py-0.5 rounded-full">
                            Bán chạy
                          </span>
                        )}
                      </div>
                      <div className="mt-2 flex items-baseline gap-2">
                        <span className="text-base sm:text-lg font-black text-white">
                          {pack.price.toLocaleString('vi-VN')}₫
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quantity Stepper & Price Calculation */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-5 bg-slate-900/90 rounded-2xl border border-slate-800 gap-4">
              <div>
                <span className="text-xs text-slate-400 block mb-1.5 font-bold">Số lượng gói cần mua:</span>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                    className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 flex items-center justify-center font-black text-lg text-white transition-colors cursor-pointer"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="font-black text-xl text-white w-8 text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(q => q + 1)}
                    className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 flex items-center justify-center font-black text-lg text-white transition-colors cursor-pointer"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="text-left sm:text-right">
                <span className="text-xs text-slate-400 block font-bold">Thành tiền:</span>
                <div className="text-2xl sm:text-3xl font-black text-sky-400 tracking-tight">
                  {totalPrice.toLocaleString('vi-VN')}₫
                </div>
                <span className="text-xs text-emerald-400 font-semibold mt-0.5 block">
                  {totalPrice >= 200000 ? '✓ Miễn phí vận chuyển toàn quốc' : 'Freeship cho đơn từ 200.000₫'}
                </span>
              </div>
            </div>

            {/* Purchasing Buttons */}
            <div className="grid grid-cols-2 gap-3.5 pt-2">
              <button
                onClick={handleAdd}
                className="flex items-center justify-center gap-2.5 py-4 px-5 rounded-2xl border-2 border-slate-700 hover:border-sky-400 bg-slate-900 hover:bg-slate-800 text-white font-black text-sm sm:text-base transition-all cursor-pointer shadow-md"
              >
                <ShoppingCart className="w-5 h-5 text-sky-400" />
                <span>{addedToast ? '✓ Đã vào giỏ hàng!' : 'Thêm vào giỏ'}</span>
              </button>

              <button
                onClick={handleBuy}
                className="flex items-center justify-center gap-2.5 py-4 px-5 rounded-2xl bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-400 hover:to-sky-500 text-slate-950 font-black text-sm sm:text-base transition-all shadow-xl shadow-sky-500/25 cursor-pointer transform hover:-translate-y-0.5"
              >
                <Zap className="w-5 h-5 text-slate-950 fill-slate-950" />
                <span>Mua ngay</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </button>
            </div>

            {/* Trust Seals */}
            <div className="flex items-center justify-between text-xs text-slate-400 pt-3 border-t border-slate-800">
              <span className="flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-sky-400" />
                Giao hỏa tốc 2 giờ tại TP.HCM & Hà Nội
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Bảo hành chống rò rỉ đền 100%
              </span>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
