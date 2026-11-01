import React from 'react';
import { BatteryProduct, PackOption } from '../types/battery';
import { BatteryVisual } from './BatteryVisual';
import { ShoppingCart, Check, Info, Star } from 'lucide-react';

interface ProductCardProps {
  product: BatteryProduct;
  onAddToCart: (product: BatteryProduct, pack: PackOption) => void;
  onViewDetails: (product: BatteryProduct) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onViewDetails
}) => {
  // Local state for selected pack option
  const [selectedPackId, setSelectedPackId] = React.useState<string>(
    product.packOptions.find(p => p.isPopular)?.id || product.packOptions[0].id
  );
  const [isAdded, setIsAdded] = React.useState(false);

  const currentPack = product.packOptions.find(p => p.id === selectedPackId) || product.packOptions[0];
  const unitPrice = Math.round(currentPack.price / currentPack.count);

  const handleAdd = () => {
    onAddToCart(product, currentPack);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  return (
    <div className="group bg-white rounded-3xl border border-slate-200/90 hover:border-sky-400 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden relative">
      
      {/* Top badges - To rõ, đẹp */}
      <div className="absolute top-3.5 left-3.5 right-3.5 z-10 flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-1.5 flex-wrap">
          {product.badge ? (
            <span className="bg-sky-500 text-slate-950 text-xs font-black px-3 py-1 rounded-full shadow-md">
              {product.badge}
            </span>
          ) : (
            <span className="bg-slate-900/90 backdrop-blur-xs text-sky-400 text-xs font-mono font-bold px-2.5 py-1 rounded-full border border-slate-700">
              {product.code}
            </span>
          )}
          {product.isRechargeable && (
            <span className="bg-emerald-600 text-white text-[10px] font-black px-2 py-0.5 rounded-full shadow-sm flex items-center gap-1">
              <span>⚡ Sạc được</span>
            </span>
          )}
        </div>

        <div className="flex items-center gap-1.5 bg-white/95 px-2.5 py-1 rounded-full shadow-sm text-xs font-black text-slate-800 border border-slate-200">
          <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
          <span>{product.rating}</span>
          <span className="text-[11px] text-slate-400 font-normal">({product.reviewCount})</span>
        </div>
      </div>

      {/* Visual illustration of the battery with signature blue H */}
      <div 
        onClick={() => onViewDetails(product)}
        className="pt-12 pb-6 bg-gradient-to-b from-slate-50 to-white flex items-center justify-center cursor-pointer relative overflow-hidden group-hover:bg-sky-50/20 transition-colors"
      >
        <div className="transform group-hover:scale-105 transition-transform duration-300">
          <BatteryVisual
            size={product.size}
            chemistry={product.chemistry}
            voltage={product.voltage}
            name={product.name}
            isPack={true}
            packCount={currentPack.count}
          />
        </div>

        {/* Quick view hover icon */}
        <div className="absolute bottom-3 right-3 bg-white/95 p-2 rounded-xl border border-slate-200 text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
          <Info className="w-4 h-4 text-sky-500" />
        </div>
      </div>

      {/* Product Content Details */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Series & Size specs */}
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span className="font-mono text-xs sm:text-sm font-black text-white bg-slate-950 px-2.5 py-1 rounded-lg">
              {product.size}
            </span>
            <span className="text-xs font-extrabold text-sky-700 bg-sky-50 px-2.5 py-1 rounded-lg border border-sky-200">
              {product.voltage}
            </span>
            <span className="text-xs text-slate-500 font-medium">
              Lưu trữ {product.shelfLifeYears} năm
            </span>
          </div>

          {/* Product Title: Highlight sky-blue H */}
          <h3 
            onClick={() => onViewDetails(product)}
            className="font-black text-slate-900 text-lg group-hover:text-sky-600 transition-colors cursor-pointer leading-snug line-clamp-1"
          >
            <span className="text-sky-500 font-black">H</span>
            <span>{product.name.replace(/^Hbattery\s*/, 'battery ')}</span>
          </h3>

          <p className="text-xs sm:text-sm text-slate-500 mt-1 line-clamp-2 leading-relaxed">
            {product.tagline}
          </p>

          {/* Technical Specs Summary (Clean, no suggestion fluff) */}
          <div className="mt-3 grid grid-cols-2 gap-2 text-xs text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-200/80">
            <div>
              <span className="text-slate-400 block text-[10px]">
                {product.isSolar ? 'Công suất Solar:' : 'Dung lượng:'}
              </span>
              <strong className="text-slate-800 font-bold">{product.capacity}</strong>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px]">
                {product.isRechargeable ? 'Khả năng nạp sạc:' : 'Chống rò rỉ:'}
              </span>
              <strong className="text-emerald-600 font-bold flex items-center gap-1">
                {product.isRechargeable ? (
                  <>
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span>Tái sạc {product.rechargeCycles ? `${product.rechargeCycles.toLocaleString()} lần` : '500+ lần'}</span>
                  </>
                ) : (
                  '100% An toàn'
                )}
              </strong>
            </div>
          </div>
        </div>

        {/* Pack Option Selector */}
        <div className="mt-4 pt-3.5 border-t border-slate-100">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 flex justify-between items-center">
            <span>Quy cách:</span>
            <span className="text-sky-600 font-bold lowercase">
              ~{unitPrice.toLocaleString('vi-VN')}₫/viên
            </span>
          </div>

          {/* Pack pills */}
          <div className="grid grid-cols-2 gap-2">
            {product.packOptions.map((pack) => {
              const isSelected = pack.id === selectedPackId;
              return (
                <button
                  key={pack.id}
                  onClick={() => setSelectedPackId(pack.id)}
                  className={`p-2 rounded-xl text-xs font-bold text-left transition-all border cursor-pointer ${
                    isSelected
                      ? 'bg-sky-500 text-white border-sky-500 shadow-sm'
                      : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="truncate text-xs font-bold">
                    <span>{pack.name}</span>
                  </div>
                  <div className={`text-xs font-black mt-0.5 ${isSelected ? 'text-white' : 'text-slate-950'}`}>
                    {pack.price.toLocaleString('vi-VN')}₫
                  </div>
                </button>
              );
            })}
          </div>

          {/* Price display & Add to cart button */}
          <div className="mt-4 pt-3.5 flex items-center justify-between gap-3">
            <div>
              <span className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight">
                {currentPack.price.toLocaleString('vi-VN')}₫
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => onViewDetails(product)}
                className="p-3 rounded-xl border border-slate-200 text-slate-600 hover:text-sky-600 hover:border-sky-300 transition-colors cursor-pointer"
                title="Xem thông số kỹ thuật"
              >
                <Info className="w-4 h-4" />
              </button>

              <button
                onClick={handleAdd}
                className={`flex items-center gap-2 px-4 py-3 rounded-xl font-black text-xs sm:text-sm transition-all shadow-sm cursor-pointer ${
                  isAdded
                    ? 'bg-emerald-600 text-white'
                    : 'bg-slate-950 hover:bg-slate-800 text-white'
                }`}
              >
                {isAdded ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-200" />
                    <span>Đã thêm</span>
                  </>
                ) : (
                  <>
                    <ShoppingCart className="w-4 h-4 text-sky-400" />
                    <span>Thêm giỏ</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Safety note footer */}
          <div className="mt-2.5 text-[11px] text-amber-800 bg-amber-50/80 rounded-lg px-2 py-1 text-center font-bold">
            ⚠ Pin sơ cấp & ắc quy Hbattery chính hãng
          </div>
        </div>

      </div>

    </div>
  );
};
