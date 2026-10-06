import React from 'react';
import { BrandLogo } from './BrandLogo';
import { ShoppingCart, Search, ShieldCheck, PhoneCall, Sparkles } from 'lucide-react';
import { BatteryProduct } from '../types/battery';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedChemistry: string;
  onSelectChemistry: (chem: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  onOpenCart,
  searchQuery,
  onSearchChange,
  selectedChemistry,
  onSelectChemistry
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      {/* Top micro announcement bar */}
      <div className="bg-slate-950 text-slate-300 text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-sky-400 animate-pulse"></span>
            <span className="font-medium text-slate-200">
              Chính hãng <span className="text-sky-400 font-bold">H</span>battery: Pin sơ cấp & ắc quy khô cao cấp, cam kết chống rò rỉ 10 năm
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-[11px] text-slate-400">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
              Bảo hành đền 100% nếu làm hỏng thiết bị
            </span>
            <span className="text-slate-600">|</span>
            <span className="flex items-center gap-1">
              <PhoneCall className="w-3.5 h-3.5 text-sky-400" />
              Hotline tư vấn: <strong className="text-white">1900 8866</strong>
            </span>
          </div>
        </div>
      </div>

      {/* Main navigation row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4">
        {/* Brand Logo with prominent sky blue H */}
        <div className="flex items-center gap-3">
          <BrandLogo size="md" showBadge={true} />
        </div>

        {/* Clean Direct Search Bar without suggestion popups */}
        <div className="flex-1 max-w-xl relative hidden md:block">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Tìm kiếm chính xác mã pin (AA, AAA, AAAA, 9V, CR2032, 12V-7.2Ah...)"
              className="w-full bg-slate-100 hover:bg-slate-50 focus:bg-white text-sm text-slate-900 pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none transition-all placeholder:text-slate-400"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          </div>
        </div>

        {/* Cart Action Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenCart}
            className="relative flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-white text-xs sm:text-sm font-black transition-all shadow-md group cursor-pointer"
          >
            <ShoppingCart className="w-4 h-4 text-sky-400 group-hover:scale-110 transition-transform" />
            <span>Giỏ hàng</span>
            {cartCount > 0 && (
              <span className="ml-1 bg-sky-500 text-slate-950 font-black text-xs px-2 py-0.5 rounded-full shadow-xs">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile search bar */}
      <div className="px-4 pb-3 md:hidden">
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Tìm pin AA, CR2032, 9V, Ắc quy..."
            className="w-full bg-slate-100 text-xs text-slate-900 pl-9 pr-3 py-2 rounded-lg border border-slate-200 focus:border-sky-500 outline-none"
          />
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
        </div>
      </div>

      {/* Quick category filter tags */}
      <div className="bg-slate-50 border-t border-slate-200/60 overflow-x-auto scrollbar-none py-2 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs">
          <span className="text-slate-500 font-semibold whitespace-nowrap hidden sm:inline flex items-center gap-1 mr-1">
            <Sparkles className="w-3 h-3 text-sky-500" />
            Công nghệ:
          </span>
          <button
            onClick={() => onSelectChemistry('all')}
            className={`px-3 py-1 rounded-full font-bold transition-all whitespace-nowrap ${
              selectedChemistry === 'all'
                ? 'bg-sky-500 text-white shadow-xs'
                : 'bg-white text-slate-600 hover:bg-slate-200/70 border border-slate-200'
            }`}
          >
            Tất cả pin & ắc quy Hbattery
          </button>
          <button
            onClick={() => onSelectChemistry('alkaline')}
            className={`px-3 py-1 rounded-full font-semibold transition-all whitespace-nowrap ${
              selectedChemistry === 'alkaline'
                ? 'bg-sky-500 text-white shadow-xs'
                : 'bg-white text-slate-600 hover:bg-slate-200/70 border border-slate-200'
            }`}
          >
            Pin Kiềm Alkaline (AA/AAA/AAAA/C/D/9V/12V)
          </button>
          <button
            onClick={() => onSelectChemistry('lithium-coin')}
            className={`px-3 py-1 rounded-full font-semibold transition-all whitespace-nowrap ${
              selectedChemistry === 'lithium-coin'
                ? 'bg-sky-500 text-white shadow-xs'
                : 'bg-white text-slate-600 hover:bg-slate-200/70 border border-slate-200'
            }`}
          >
            Pin cúc áo Lithium 3V (CR2032/CR1632/CR2450...)
          </button>
          <button
            onClick={() => onSelectChemistry('lead-acid-vrla')}
            className={`px-3 py-1 rounded-full font-bold transition-all whitespace-nowrap ${
              selectedChemistry === 'lead-acid-vrla'
                ? 'bg-sky-500 text-white shadow-xs'
                : 'bg-white text-slate-600 hover:bg-slate-200/70 border border-slate-200'
            }`}
          >
            Ắc quy khô VRLA AGM & Gel (12V/6V)
          </button>
          <button
            onClick={() => onSelectChemistry('lithium-primary')}
            className={`px-3 py-1 rounded-full font-semibold transition-all whitespace-nowrap ${
              selectedChemistry === 'lithium-primary'
                ? 'bg-sky-500 text-white shadow-xs'
                : 'bg-white text-slate-600 hover:bg-slate-200/70 border border-slate-200'
            }`}
          >
            Lithium sơ cấp (CR123A/CR2/9V Li/2CR5)
          </button>
          <button
            onClick={() => onSelectChemistry('silver-oxide')}
            className={`px-3 py-1 rounded-full font-semibold transition-all whitespace-nowrap ${
              selectedChemistry === 'silver-oxide'
                ? 'bg-sky-500 text-white shadow-xs'
                : 'bg-white text-slate-600 hover:bg-slate-200/70 border border-slate-200'
            }`}
          >
            Oxit Bạc Đồng Hồ (SR626SW/SR621SW/SR920SW)
          </button>
          <button
            onClick={() => onSelectChemistry('carbon-zinc')}
            className={`px-3 py-1 rounded-full font-semibold transition-all whitespace-nowrap ${
              selectedChemistry === 'carbon-zinc'
                ? 'bg-sky-500 text-white shadow-xs'
                : 'bg-white text-slate-600 hover:bg-slate-200/70 border border-slate-200'
            }`}
          >
            Than Kẽm Tiết Kiệm (AA/AAA/9V)
          </button>
          <button
            onClick={() => onSelectChemistry('zinc-air')}
            className={`px-3 py-1 rounded-full font-semibold transition-all whitespace-nowrap ${
              selectedChemistry === 'zinc-air'
                ? 'bg-sky-500 text-white shadow-xs'
                : 'bg-white text-slate-600 hover:bg-slate-200/70 border border-slate-200'
            }`}
          >
            Kẽm Khí Máy Trợ Thính (A312/A10/A13/A675)
          </button>
        </div>
      </div>
    </header>
  );
};
