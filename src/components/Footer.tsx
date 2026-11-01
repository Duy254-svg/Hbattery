import React from 'react';
import { BrandLogo } from './BrandLogo';
import { ShieldCheck, PhoneCall, Mail, MapPin, Award, CheckCircle2, Heart } from 'lucide-react';
import { BatterySize } from '../types/battery';

interface FooterProps {
  onFilterSize: (size: BatterySize | 'all') => void;
  onOpenSpecModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onFilterSize,
  onOpenSpecModal
}) => {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo size="lg" showBadge={true} darkText={false} />

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              <strong className="text-slate-200">Hbattery</strong> là hệ sinh thái năng lượng và pin toàn diện: Pin dùng 1 lần chống rò rỉ, Pin sạc chu kỳ cao (Ni-MH, Li-ion, Na-ion), Tấm pin mặt trời SolarPro và Giải pháp lưu điện (LiFePO4, VRLA AGM). Cam kết an toàn tuyệt đối và hiệu suất bền bỉ.
            </p>

            <div className="flex flex-wrap gap-2 pt-1 text-[11px] text-slate-300">
              <span className="flex items-center gap-1 bg-slate-900 border border-slate-800 px-2.5 py-1 rounded-lg">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                ISO 9001:2015
              </span>
              <span className="flex items-center gap-1 bg-slate-900 border border-slate-800 px-2.5 py-1 rounded-lg">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                Chuẩn IEC 60086
              </span>
              <span className="flex items-center gap-1 bg-slate-900 border border-slate-800 px-2.5 py-1 rounded-lg">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                RoHS 0% Mercury
              </span>
            </div>

            <div className="pt-2 text-xs text-slate-400">
              <span className="text-sky-400 font-bold">LƯU Ý THƯƠNG HIỆU:</span> Chữ <strong className="text-sky-400 font-extrabold text-sm">H</strong> luôn màu xanh da trời đặc trưng đại diện cho dòng điện an toàn, mát lạnh và bền bỉ.
            </div>
          </div>

          {/* Quick Sizes Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Kích Thước Pin Phổ Biến
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onFilterSize('AA')}
                  className="hover:text-sky-400 transition-colors text-left"
                >
                  Pin AA Kiềm & Lithium (LR6/FR6)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onFilterSize('AAA')}
                  className="hover:text-sky-400 transition-colors text-left"
                >
                  Pin đũa AAA Remote (LR03)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onFilterSize('CR2032')}
                  className="hover:text-sky-400 transition-colors text-left"
                >
                  Pin cúc áo CR2032 Smartkey 3V
                </button>
              </li>
              <li>
                <button
                  onClick={() => onFilterSize('CR123A')}
                  className="hover:text-sky-400 transition-colors text-left"
                >
                  Pin CR123A & CR2 Đèn pin máy ảnh
                </button>
              </li>
              <li>
                <button
                  onClick={() => onFilterSize('9V')}
                  className="hover:text-sky-400 transition-colors text-left"
                >
                  Pin vuông 9V Báo cháy & Micro
                </button>
              </li>
              <li>
                <button
                  onClick={() => onFilterSize('D')}
                  className="hover:text-sky-400 transition-colors text-left"
                >
                  Pin đại D Bếp gas âm cao cấp
                </button>
              </li>
            </ul>
          </div>

          {/* Customer Support & Tools */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Tiện Ích Khách Hàng
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={onOpenSpecModal}
                  className="text-sky-400 font-bold hover:underline text-left cursor-pointer"
                >
                  Bảng so sánh thông số kỹ thuật pin & ắc quy
                </button>
              </li>
              <li>
                <span className="block hover:text-white transition-colors">
                  Chính sách bảo hành chống chảy nước 10 năm
                </span>
              </li>
              <li>
                <span className="block hover:text-white transition-colors">
                  Hướng dẫn phân loại & đổi pin cũ
                </span>
              </li>
              <li>
                <span className="block hover:text-white transition-colors">
                  Chính sách giao hàng hỏa tốc 2 giờ
                </span>
              </li>
            </ul>
          </div>

          {/* Contact & Hotline */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Trung Tâm Hỗ Trợ Hbattery
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2">
                <PhoneCall className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 block text-[11px]">Hotline CSKH / Đặt hàng:</span>
                  <a href="tel:19008866" className="text-white font-black text-sm hover:text-sky-400">
                    1900 8866 (Miễn phí)
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 block text-[11px]">Email doanh nghiệp:</span>
                  <span className="text-white font-medium">support@hbattery.vn</span>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 block text-[11px]">Trụ sở chính:</span>
                  <span className="text-slate-300">Tòa nhà Hbattery Tower, Đường Võ Văn Kiệt, Q.1, TP.HCM</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 <strong className="text-slate-300 font-bold"><span className="text-sky-400 font-bold">H</span>battery Vietnam Co., Ltd</strong>. Bảo lưu mọi quyền.
          </div>
          <div className="flex items-center gap-1 text-[11px]">
            <span>Năng lượng xanh cho cuộc sống số</span>
            <span className="text-sky-400 font-bold ml-1">• Chữ H Xanh Da Trời Độc Quyền</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
