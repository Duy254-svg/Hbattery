import React from 'react';
import { ShieldCheck, Zap, Award, ArrowRight, CheckCircle2, ShoppingBag } from 'lucide-react';
import { BatterySize } from '../types/battery';

interface HeroBannerProps {
  onFilterSize: (size: BatterySize | 'all') => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  onFilterSize
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white pt-10 pb-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
      {/* Background ambient lighting effects with sky-blue energy rings */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-500/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Brand pitch & Action */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Brand badge note */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-sky-500/30 text-sky-300 text-xs font-semibold backdrop-blur-xs">
              <span className="w-2 h-2 rounded-full bg-sky-400"></span>
              <span className="text-slate-200">Thương hiệu pin Hbattery chính hãng</span>
              <span className="bg-sky-500/20 text-sky-300 text-[10px] px-2 py-0.5 rounded-full font-bold">
                Chính Hãng 100%
              </span>
            </div>

            {/* Main Headline with clear sky-blue H emphasis */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              Hệ Sinh Thái Pin & Năng Lượng Đột Phá{' '}
              <span className="inline-block relative">
                <span className="text-sky-400 font-black drop-shadow-[0_0_20px_rgba(56,189,248,0.7)]">
                  H
                </span>
                <span className="text-white font-black">battery</span>
              </span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed">
              Hệ sinh thái toàn diện: <strong className="text-white font-bold">Pin dùng 1 lần</strong>, <strong className="text-sky-400 font-bold">Pin sạc Ni-MH / Li-ion / Na-ion</strong>, <strong className="text-amber-400 font-bold">Pin năng lượng mặt trời Solar</strong> và <strong className="text-emerald-400 font-bold">Ắc quy lưu điện LiFePO4 / VRLA AGM</strong>. Cam kết điện thế ổn định, chống rò rỉ 100% - bảo vệ tuyệt đối thiết bị của bạn.
            </p>

            {/* Key trust bullets */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs text-slate-300">
              <div className="flex items-center gap-2 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Không chảy nước 10 năm</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Pin sạc 6,000 chu kỳ</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Pin Solar hiệu suất 24.8%</span>
              </div>
            </div>

            {/* Direct CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-3">
              <a
                href="#catalog-section"
                className="flex items-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-400 hover:to-sky-500 text-slate-950 font-black text-sm md:text-base transition-all shadow-[0_10px_25px_rgba(14,165,233,0.35)] transform hover:-translate-y-0.5 cursor-pointer"
              >
                <ShoppingBag className="w-5 h-5 text-slate-950" />
                <span>Khám Phá Toàn Bộ Sản Phẩm</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </a>
              <a
                href="#longevity-calculator-section"
                className="flex items-center gap-2 px-6 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-sky-400 border border-sky-400/40 font-black text-sm md:text-base transition-all cursor-pointer"
              >
                <Zap className="w-5 h-5 text-sky-400" />
                <span>Đo Tuổi Thọ Pin (Calculator)</span>
              </a>
            </div>

            {/* Quick size selection chips */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs">
              <span className="text-slate-400 font-semibold">Chọn nhanh:</span>
              {(['AA', 'AAA', '18650', '21700', 'CR2032', '9V', '12V-7.2Ah', 'LiFePO4-12V', 'Solar-60W', 'Solar-100W', 'Na-18650', 'Sub-C'] as BatterySize[]).map((sz) => (
                <button
                  key={sz}
                  onClick={() => onFilterSize(sz)}
                  className="px-2.5 py-1 rounded-md bg-slate-800 hover:bg-sky-500 hover:text-slate-950 text-slate-300 font-mono font-bold border border-slate-700 transition-colors cursor-pointer"
                >
                  {sz}
                </button>
              ))}
            </div>

          </div>

          {/* Right Column: Hero Visual Product Display */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md bg-gradient-to-b from-slate-900/90 to-slate-950/90 rounded-3xl p-6 border border-slate-800 shadow-2xl backdrop-blur-md">
              {/* Glowing header banner inside card */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-sky-400 animate-ping"></div>
                  <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">
                    Độc Quyền Nhãn Hiệu
                  </span>
                </div>
                <div className="text-xs font-mono text-slate-400">
                  PRIMARY & VRLA CELLS
                </div>
              </div>

              {/* Showcase preview of battery lineup */}
              <div className="py-6 grid grid-cols-3 gap-3 items-end justify-items-center">
                
                {/* 1. 9V Block */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-950 rounded-lg border border-slate-700 p-1 flex flex-col justify-between shadow-lg">
                    <div className="flex justify-around">
                      <div className="w-2.5 h-1.5 bg-amber-400 rounded-t-xs"></div>
                      <div className="w-2 h-1.5 bg-slate-400 rounded-full"></div>
                    </div>
                    <div className="text-center">
                      <span className="text-sky-400 font-black text-xs">H</span>
                      <div className="text-[7px] text-white font-mono font-bold">9V</div>
                    </div>
                    <div className="text-[7px] text-sky-400 text-center font-bold">BLOCK</div>
                  </div>
                  <span className="text-[10px] text-slate-400 mt-2 font-mono font-bold">Pin 9V</span>
                </div>

                {/* 2. AA Center Star Cell */}
                <div className="flex flex-col items-center scale-110 -translate-y-2">
                  <div className="relative w-14 h-36 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-950 rounded-lg border-2 border-sky-400/80 p-1.5 flex flex-col justify-between shadow-[0_0_25px_rgba(56,189,248,0.3)]">
                    <div className="w-5 h-2 bg-gradient-to-r from-amber-300 to-amber-500 rounded-t-xs mx-auto"></div>
                    <div className="text-center my-auto">
                      <div className="flex items-center justify-center">
                        <span className="text-sky-400 font-black text-lg drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]">H</span>
                        <span className="text-white font-extrabold text-[10px]">battery</span>
                      </div>
                      <div className="bg-sky-500/30 text-sky-300 text-[8px] font-mono font-bold px-1 py-0.5 rounded-xs mt-1">
                        ULTRA AA
                      </div>
                    </div>
                    <div className="text-[8px] text-amber-400 text-center font-bold">1.5V KIỀM</div>
                  </div>
                  <span className="text-[11px] text-sky-400 mt-2 font-bold">AA Phổ biến</span>
                </div>

                {/* 3. Ắc quy VRLA Block */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-18 bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-700 rounded-lg p-1 flex flex-col justify-between shadow-lg">
                    <div className="flex justify-between px-1">
                      <span className="text-[6px] text-red-500 font-bold">+</span>
                      <span className="text-[6px] text-slate-400 font-bold">-</span>
                    </div>
                    <div className="text-center">
                      <span className="text-sky-400 font-black text-xs">H</span>
                      <div className="text-[7px] text-white font-mono font-bold">12V-7.2Ah</div>
                    </div>
                    <div className="text-[6px] text-sky-400 text-center uppercase font-bold">ẮC QUY</div>
                  </div>
                  <span className="text-[10px] text-slate-400 mt-2 font-mono font-bold">Ắc Quy Khô</span>
                </div>

              </div>

              {/* Bottom Feature highlights banner */}
              <div className="pt-4 border-t border-slate-800 space-y-2 text-xs">
                <div className="flex items-center justify-between text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-sky-400" />
                    Chống chảy nước PowerLock
                  </span>
                  <span className="text-sky-400 font-bold">100% An toàn</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <Zap className="w-4 h-4 text-amber-400" />
                    Hạn lưu kho tối đa
                  </span>
                  <span className="text-amber-400 font-bold">Lên tới 20 năm</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-emerald-400" />
                    Sơ cấp & VRLA khô
                  </span>
                  <span className="text-emerald-400 font-bold">Độ tin cậy tối cao</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
