import React from 'react';
import { BatterySize, ChemistryType } from '../types/battery';

interface BatteryVisualProps {
  size: BatterySize;
  chemistry: ChemistryType;
  voltage: string;
  name: string;
  className?: string;
  isPack?: boolean;
  packCount?: number;
}

export const BatteryVisual: React.FC<BatteryVisualProps> = ({
  size,
  chemistry,
  voltage,
  className = '',
  isPack = false,
  packCount = 1
}) => {
  // Accumulator / Ắc quy VRLA lead-acid blocks
  const isAccumulator =
    chemistry === 'lead-acid-vrla' ||
    ['12V-7.2Ah', '12V-12Ah', '12V-5Ah', '12V-7Ah', '12V-20Ah', '12V-30Ah', '6V-4.5Ah', '6V-12Ah'].includes(size);

  if (isAccumulator) {
    return (
      <div className={`relative flex items-center justify-center p-2 select-none ${className}`}>
        {/* Ambient energy backdrop glow */}
        <div className="absolute inset-0 bg-sky-500/15 rounded-3xl blur-2xl"></div>

        {/* 3D Model: Heavy-Duty Industrial Accumulator VRLA Block (Màu đen công nghiệp) */}
        <div className="relative flex flex-col items-center">
          
          {/* Top terminal posts (Cọc bình đồng thau + / - chuẩn công nghiệp) */}
          <div className="flex justify-between w-48 px-6 mb-1 z-10">
            {/* Cực Dương (+) Màu Đỏ */}
            <div className="flex flex-col items-center group">
              <span className="text-[11px] font-black text-red-500 drop-shadow-[0_0_6px_rgba(239,68,68,0.7)] leading-none mb-0.5">
                + POS
              </span>
              <div className="w-6 h-4 bg-gradient-to-t from-red-700 via-red-600 to-red-500 rounded-t-sm border border-red-400 shadow-md flex items-center justify-center">
                <div className="w-2.5 h-1.5 bg-amber-300 rounded-xs border border-amber-500"></div>
              </div>
            </div>

            {/* Quai xách / Gờ rãnh giữa nắp bình */}
            <div className="flex flex-col items-center my-auto">
              <div className="w-16 h-1.5 bg-neutral-900 rounded-full border border-neutral-700 shadow-inner"></div>
              <div className="flex gap-1 mt-0.5">
                <span className="w-1 h-1 rounded-full bg-neutral-700"></span>
                <span className="w-1 h-1 rounded-full bg-neutral-700"></span>
                <span className="w-1 h-1 rounded-full bg-neutral-700"></span>
              </div>
            </div>

            {/* Cực Âm (-) Màu Đen */}
            <div className="flex flex-col items-center">
              <span className="text-[11px] font-black text-slate-300 leading-none mb-0.5">
                - NEG
              </span>
              <div className="w-6 h-4 bg-gradient-to-t from-neutral-950 via-neutral-900 to-neutral-800 rounded-t-sm border border-neutral-600 shadow-md flex items-center justify-center">
                <div className="w-2.5 h-1.5 bg-slate-300 rounded-xs border border-slate-500"></div>
              </div>
            </div>
          </div>

          {/* Khối thân ắc quy: To, dầy, góc cạnh, vân sần chịu va đập màu đen huyền bí */}
          <div className="w-52 h-52 bg-gradient-to-b from-neutral-900 via-neutral-950 to-black rounded-2xl shadow-[0_25px_50px_rgba(0,0,0,0.6),inset_0_1px_2px_rgba(255,255,255,0.15)] border-2 border-neutral-800 p-3.5 flex flex-col justify-between relative overflow-hidden">
            
            {/* Gân chịu lực dọc hai bên sườn bình */}
            <div className="absolute left-1.5 top-6 bottom-6 w-1 bg-neutral-800/80 rounded-full"></div>
            <div className="absolute right-1.5 top-6 bottom-6 w-1 bg-neutral-800/80 rounded-full"></div>

            {/* Thanh viền xanh da trời Hbattery đặc trưng */}
            <div className="w-full h-1.5 bg-gradient-to-r from-sky-500 via-sky-300 to-sky-500 rounded-full shadow-[0_0_10px_rgba(56,189,248,0.7)]"></div>

            {/* Khu vực Thương Hiệu & Mã Bình */}
            <div className="flex flex-col items-center my-auto z-10">
              <div className="flex items-center gap-1">
                <span className="text-sky-400 font-black text-3xl drop-shadow-[0_0_14px_rgba(56,189,248,0.9)] tracking-tight">
                  H
                </span>
                <span className="text-white font-black text-xl tracking-tight">battery</span>
              </div>

              <span className="text-[9px] font-black text-sky-400 uppercase tracking-widest mt-0.5 font-mono">
                VRLA AGM GEL • DEEP CYCLE
              </span>

              {/* Hộp dung lượng to nổi bật */}
              <div className="mt-2 font-mono font-black text-white text-lg tracking-wider bg-black/90 px-3.5 py-1 rounded-lg border border-sky-400/60 shadow-[0_0_12px_rgba(56,189,248,0.25)]">
                {size}
              </div>

              <span className="text-[11px] text-sky-300 font-mono font-bold mt-1">
                {voltage} • Sealed Lead Acid
              </span>
            </div>

            {/* Bảng thông số nạp điện & cảnh báo an toàn phía đáy bình */}
            <div className="w-full bg-neutral-950/90 border border-neutral-800 rounded-lg p-1.5 flex justify-between items-center text-[8px] text-neutral-400 font-mono z-10">
              <div>
                <span className="text-neutral-500 block">STANDBY: 13.5-13.8V</span>
                <span className="text-neutral-500 block">CYCLE: 14.4-15.0V</span>
              </div>
              <div className="text-right">
                <span className="text-emerald-400 font-bold block">100% KHÔ KÍN KHÍ</span>
                <span className="text-sky-400 font-semibold block">MIỄN BẢO DƯỠNG</span>
              </div>
            </div>

            {/* Ánh kim loại phản chiếu chéo */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent pointer-events-none"></div>
          </div>
        </div>

        {isPack && packCount > 1 && (
          <div className="absolute top-2 right-2 bg-sky-500 text-slate-950 text-xs font-black px-2.5 py-1 rounded-full shadow-lg border border-sky-300">
            x{packCount} bình
          </div>
        )}
      </div>
    );
  }

  // Coin cell shapes (CR2032, CR1632, CR2025, CR2450, CR2430, etc.)
  const isCoin = [
    'CR2032', 'CR2025', 'CR2016', 'CR2450', 'CR2430', 'CR1632', 'CR1620', 'CR1616', 'CR1220',
    'CR2012', 'CR2354', 'CR2477', 'LR44', 'LR41', 'LR1130', 'SR626SW', 'SR621SW', 'SR920SW',
    'SR1130SW', 'SR726SW', 'A10', 'A13', 'A312', 'A675'
  ].includes(size);

  const is9V = size === '9V';
  const isPhotoBlock = size === '2CR5' || size === 'CRP2' || size === 'CR-V3' || size === '3R12' || size === '4LR44';

  if (isPhotoBlock) {
    return (
      <div className={`relative flex items-center justify-center p-3 select-none ${className}`}>
        <div className="absolute inset-0 bg-sky-500/15 rounded-3xl blur-2xl"></div>
        <div className="relative flex flex-col items-center">
          
          {/* Cực tiếp xúc khối pin */}
          <div className="flex gap-4 mb-0.5">
            <div className="w-3.5 h-2 bg-gradient-to-b from-amber-300 to-amber-500 rounded-xs border border-amber-600 shadow-xs"></div>
            <div className="w-3.5 h-2 bg-gradient-to-b from-amber-300 to-amber-500 rounded-xs border border-amber-600 shadow-xs"></div>
          </div>

          {/* Thân khối pin vuông đôi công nghiệp màu đen bóng */}
          <div className="w-36 h-48 bg-gradient-to-b from-neutral-900 via-neutral-950 to-black rounded-2xl shadow-[0_20px_45px_rgba(0,0,0,0.6),inset_0_1px_2px_rgba(255,255,255,0.2)] border-2 border-neutral-800 p-3 flex flex-col justify-between overflow-hidden relative">
            <div className="w-full flex justify-between items-center border-b border-neutral-800 pb-1.5">
              <span className="text-[11px] font-black text-amber-400 font-mono">{voltage}</span>
              <span className="text-[9px] text-sky-400 uppercase font-mono font-bold">Lithium Primary</span>
            </div>

            <div className="flex flex-col items-center my-auto">
              <div className="flex items-center gap-1">
                <span className="text-sky-400 font-black text-3xl drop-shadow-[0_0_12px_rgba(56,189,248,0.9)]">H</span>
                <span className="text-white font-extrabold text-lg tracking-tight">battery</span>
              </div>
              <div className="mt-2 font-mono font-black text-sky-400 text-base tracking-wider bg-black/90 px-3 py-1 rounded-md border border-sky-500/50 shadow-sm">
                {size}
              </div>
              <span className="text-[9px] text-neutral-400 font-mono mt-1">High Drain Performance</span>
            </div>

            <div className="w-full bg-sky-500/20 border border-sky-400/40 rounded-md py-1 text-center">
              <span className="text-[9px] font-black text-sky-300 tracking-wider uppercase">PowerLock 10 Năm</span>
            </div>
          </div>
        </div>

        {isPack && packCount > 1 && (
          <div className="absolute top-2 right-2 bg-sky-500 text-slate-950 text-xs font-black px-2 py-0.5 rounded-full shadow-md">
            x{packCount} khối
          </div>
        )}
      </div>
    );
  }

  if (isCoin) {
    const isZincAir = ['A10', 'A13', 'A312', 'A675'].includes(size);
    const tabColor = size === 'A10' ? 'bg-amber-400' : size === 'A13' ? 'bg-orange-500' : size === 'A312' ? 'bg-amber-700' : 'bg-blue-600';

    return (
      <div className={`relative flex items-center justify-center p-3 select-none ${className}`}>
        {/* Glow backdrop */}
        <div className="absolute inset-0 bg-sky-500/15 rounded-full blur-2xl"></div>
        
        {/* Model 3D: Đồng Xu To, Đẹp, Viền Kim Loại Titan và Lõi Đen Sang Trọng (Vẫn để màu đen) */}
        <div className="relative w-44 h-44 rounded-full bg-gradient-to-tr from-neutral-800 via-neutral-700 to-neutral-900 p-2 shadow-[0_20px_45px_rgba(0,0,0,0.55),inset_0_2px_4px_rgba(255,255,255,0.4)] border-2 border-neutral-700 flex items-center justify-center">
          
          {/* Lòng đĩa mạ Carbon Đen sang trọng (Black Anodized Core) */}
          <div className="w-full h-full rounded-full bg-gradient-to-b from-neutral-950 via-neutral-900 to-black p-3 flex flex-col items-center justify-center shadow-inner relative overflow-hidden border border-neutral-800">
            
            {/* Ánh gương phản xạ kim loại quét góc 45 độ */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.08] to-transparent rotate-45 pointer-events-none"></div>

            {/* Cực dương khắc laser (+) */}
            <span className="text-sky-400 font-black text-base tracking-widest absolute top-2 drop-shadow-sm">+</span>

            {/* Logo Hbattery với chữ H màu xanh da trời sắc nét */}
            <div className="relative z-10 flex items-center gap-0.5 mt-2">
              <span className="text-sky-400 font-black text-2xl drop-shadow-[0_0_10px_rgba(56,189,248,0.9)]">H</span>
              <span className="text-white font-extrabold text-base tracking-tight">battery</span>
            </div>

            {/* Tên mã pin to rõ ràng */}
            <div className="relative z-10 mt-1 font-mono font-black text-white text-base tracking-wide bg-neutral-950 px-3 py-0.5 rounded-md border border-sky-400/50 shadow-sm">
              {size}
            </div>

            {/* Điện áp & Công nghệ */}
            <div className="relative z-10 text-[10px] font-bold text-sky-400 mt-1 uppercase tracking-tight font-mono">
              {voltage} • {chemistry === 'zinc-air' ? 'Zinc-Air' : chemistry === 'silver-oxide' ? 'Silver Oxide' : 'Lithium 3V'}
            </div>

            <div className="relative z-10 text-[8px] text-neutral-400 uppercase tracking-widest mt-0.5">
              MADE FOR PRECISION
            </div>

            {/* Tab bóc kích hoạt máy trợ thính (Zinc-Air Tab) */}
            {isZincAir && (
              <div className={`absolute -bottom-1.5 w-10 h-5 ${tabColor} rounded-b-md shadow-lg flex items-center justify-center border border-white/40`}>
                <span className="text-[8px] font-black text-white tracking-widest uppercase">PULL</span>
              </div>
            )}
          </div>
        </div>

        {isPack && packCount > 1 && (
          <div className="absolute top-2 right-2 bg-sky-500 text-slate-950 text-xs font-black px-2.5 py-1 rounded-full shadow-lg border border-sky-300">
            x{packCount} viên
          </div>
        )}
      </div>
    );
  }

  if (is9V) {
    return (
      <div className={`relative flex items-center justify-center p-3 select-none ${className}`}>
        <div className="absolute inset-0 bg-sky-500/15 rounded-3xl blur-2xl"></div>
        
        {/* Model 3D: Pin Khối Vuông 9V To Rõ, Cọc Kẹp Chân Thực (Màu Đen Nguyên Bản) */}
        <div className="relative flex flex-col items-center">
          {/* Cặp đầu cực 9V: 1 đầu đực tròn và 1 đầu cái lục giác bằng đồng thau / niken */}
          <div className="flex items-center gap-5 mb-1 z-10">
            {/* Cực dương lồi (Male stud) */}
            <div className="w-5 h-4 bg-gradient-to-b from-amber-200 via-amber-400 to-amber-600 rounded-sm border border-amber-700 shadow-md flex items-center justify-center">
              <span className="text-[7px] font-black text-amber-950">+</span>
            </div>
            {/* Cực âm lõm lục giác (Female socket) */}
            <div className="w-6 h-4 bg-gradient-to-b from-slate-200 via-slate-400 to-slate-600 rounded-full border border-slate-700 shadow-md flex items-center justify-center">
              <div className="w-2.5 h-2 bg-slate-800 rounded-xs border border-slate-600"></div>
            </div>
          </div>

          {/* Thân pin 9V màu đen carbon sang trọng */}
          <div className="w-36 h-52 bg-gradient-to-b from-neutral-900 via-neutral-950 to-black rounded-2xl shadow-[0_22px_45px_rgba(0,0,0,0.6),inset_0_1px_2px_rgba(255,255,255,0.2)] border-2 border-neutral-800 p-3 flex flex-col justify-between overflow-hidden relative">
            
            {/* Viền cổ pin màu xanh da trời Hbattery */}
            <div className="w-full h-2 bg-gradient-to-r from-sky-500 via-sky-300 to-sky-500 rounded-sm shadow-[0_0_8px_rgba(56,189,248,0.7)]"></div>
            
            {/* Khu vực Thương hiệu */}
            <div className="flex flex-col items-center my-auto z-10">
              <div className="flex items-center gap-1">
                <span className="text-sky-400 font-black text-3xl drop-shadow-[0_0_12px_rgba(56,189,248,0.9)]">
                  H
                </span>
                <span className="text-white font-black text-xl tracking-tight">battery</span>
              </div>

              <span className="text-[9px] uppercase tracking-widest text-sky-400 font-black mt-0.5">
                {chemistry === 'lithium-primary' ? 'EXTREME LITHIUM 9V' : chemistry === 'carbon-zinc' ? 'HEAVY DUTY 9V' : 'ULTRA ALKALINE 9V'}
              </span>

              {/* Nhãn 9V to ấn tượng */}
              <div className="mt-2 text-2xl font-black text-white tracking-widest font-mono bg-black/80 px-3 py-0.5 rounded-lg border border-sky-400/50 shadow-sm">
                9V BLOCK
              </div>

              <span className="text-[10px] text-sky-300 font-mono mt-1 font-bold">
                6LR61 • U9VL • 9.0V
              </span>
            </div>

            {/* Huy hiệu chống rò rỉ 10 năm đáy pin */}
            <div className="w-full bg-neutral-950 border border-neutral-800 rounded-md py-1 text-center z-10">
              <span className="text-[8px] font-black text-sky-400 tracking-wider uppercase">
                100% POWERLOCK CHỐNG CHẢY NƯỚC
              </span>
            </div>

            {/* Ánh sáng phản chiếu mặt thân pin */}
            <div className="absolute left-2 top-0 bottom-0 w-3 bg-gradient-to-r from-transparent via-white/[0.07] to-transparent pointer-events-none"></div>
          </div>
        </div>

        {isPack && packCount > 1 && (
          <div className="absolute top-2 right-2 bg-sky-500 text-slate-950 text-xs font-black px-2.5 py-1 rounded-full shadow-lg border border-sky-300">
            x{packCount} viên
          </div>
        )}
      </div>
    );
  }

  // Cylindrical batteries (AA, AAA, AAAA, N, C, D, CR123A, CR2, ER14250, ER14505)
  // THIẾT KẾ LẠI: TO BỀ THẾ, SẮC NÉT, MÀU ĐEN HUYỀN BÍ, CHỮ H MÀU XANH DA TRỜI RỰC RỠ
  const isCylinderSmall = ['AAA', 'AAAA', 'N', 'A23', 'A27'].includes(size);
  const isCylinderFat = ['C', 'D'].includes(size);
  const isLithium = chemistry === 'lithium-primary';

  // Điều chỉnh kích thước lớn hơn đáng kể để không bao giờ bị "bé thế"
  const widthClass =
    size === 'D'
      ? 'w-32'
      : size === 'C'
      ? 'w-26'
      : size === 'AAAA'
      ? 'w-14 sm:w-16'
      : size === 'AAA' || size === 'A23' || size === 'A27' || size === 'N'
      ? 'w-16 sm:w-18'
      : size === 'CR123A' || size === 'CR2' || size === 'ER14250'
      ? 'w-22'
      : 'w-22 sm:w-26'; // AA, ER14505

  const heightClass =
    size === 'D'
      ? 'h-56'
      : size === 'C'
      ? 'h-52'
      : size === 'AAAA'
      ? 'h-48'
      : size === 'CR123A' || size === 'CR2' || size === 'ER14250'
      ? 'h-38'
      : size === 'AAA'
      ? 'h-48'
      : 'h-54'; // AA

  return (
    <div className={`relative flex items-center justify-center p-3 select-none ${className}`}>
      {/* Vầng hào quang năng lượng xanh da trời Hbattery */}
      <div className="absolute inset-0 bg-sky-500/15 rounded-full blur-2xl"></div>

      <div className="relative flex flex-col items-center">
        {/* Cực dương (+) Nút tròn nhô cao mạ Niken sáng bóng có khe xả áp an toàn */}
        <div className="w-8 h-3.5 bg-gradient-to-r from-slate-300 via-white to-slate-400 rounded-t-sm border border-slate-300 shadow-md flex items-center justify-center">
          <div className="w-2.5 h-1 bg-slate-500 rounded-full opacity-60"></div>
        </div>

        {/* Vành vai pin màu vàng kim hoặc xanh ngọc */}
        <div
          className={`w-full ${widthClass} h-3 bg-gradient-to-r ${
            isLithium
              ? 'from-sky-400 via-cyan-300 to-sky-500'
              : 'from-amber-400 via-amber-200 to-amber-500'
          } rounded-t-xl shadow-xs border-x border-neutral-700`}
        ></div>

        {/* Thân pin chính hình trụ tròn 3D: Đen tuyền sang trọng (Vẫn để màu đen) */}
        <div
          className={`${widthClass} ${heightClass} bg-gradient-to-b from-neutral-900 via-neutral-950 to-black rounded-b-sm shadow-[0_22px_45px_rgba(0,0,0,0.65),inset_0_1px_2px_rgba(255,255,255,0.2)] border-x-2 border-neutral-800 flex flex-col justify-between p-2.5 relative overflow-hidden`}
        >
          {/* Vệt sáng bóng phản xạ hình trụ dọc theo thân pin */}
          <div className="absolute left-2.5 top-0 bottom-0 w-3.5 bg-gradient-to-r from-transparent via-white/[0.12] to-transparent pointer-events-none"></div>

          {/* Dấu (+) và điện thế cực trên */}
          <div className="flex justify-between items-center text-neutral-400 text-xs px-1 font-mono font-bold z-10">
            <span className="text-sky-400 text-sm font-black">+</span>
            <span className="text-[10px] text-sky-400 bg-black/60 px-1.5 py-0.5 rounded border border-sky-400/30">
              {voltage}
            </span>
          </div>

          {/* Trung tâm nhận diện thương hiệu: Chữ H màu xanh da trời rực rỡ */}
          <div className="flex flex-col items-center justify-center my-auto z-10">
            <div className="flex items-center gap-0.5">
              <span className="text-sky-400 font-black text-3xl sm:text-4xl drop-shadow-[0_0_14px_rgba(56,189,248,0.9)]">
                H
              </span>
              <span className="text-white font-black text-lg sm:text-xl tracking-tight">battery</span>
            </div>

            {/* Kích cỡ pin to bản, sắc nét */}
            <div className="mt-1.5 font-mono font-black text-white text-lg tracking-widest bg-black/90 px-3 py-0.5 rounded-md border border-sky-400/60 shadow-sm">
              {size}
            </div>

            {/* Dòng công nghệ */}
            <span className="text-[9px] uppercase tracking-wider text-sky-300 font-bold mt-1 text-center leading-tight">
              {chemistry === 'lithium-primary'
                ? 'Lithium 10X Power'
                : chemistry === 'carbon-zinc'
                ? 'Heavy Duty Zinc'
                : 'Ultra Alkaline Power'}
            </span>
          </div>

          {/* Đáy thân pin: Vạch chỉ báo năng lượng & nhãn chống chảy nước */}
          <div className="flex flex-col items-center z-10">
            <div className="w-full h-1.5 bg-gradient-to-r from-sky-400 via-sky-200 to-sky-500 rounded-full mb-1 shadow-[0_0_6px_rgba(56,189,248,0.7)]"></div>
            <div className="flex justify-between w-full text-[9px] text-neutral-400 font-mono px-1">
              <span className="font-bold text-neutral-300">-</span>
              <span className="text-[8px] text-sky-400 font-semibold">0% Hg • LEAKPROOF</span>
            </div>
          </div>
        </div>

        {/* Cực âm (-) Đĩa kim loại phẳng dập viền đáy pin */}
        <div
          className={`w-full ${widthClass} h-2 bg-gradient-to-r from-slate-400 via-slate-100 to-slate-400 rounded-b-md border-t border-slate-500 shadow-md`}
        ></div>
      </div>

      {isPack && packCount > 1 && (
        <div className="absolute top-2 right-2 bg-sky-500 text-slate-950 text-xs font-black px-2.5 py-1 rounded-full shadow-lg border border-sky-300">
          x{packCount} viên
        </div>
      )}
    </div>
  );
};
