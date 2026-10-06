import React from 'react';
import { AlertOctagon, HelpCircle, ShieldAlert, Sparkles, Flame, CheckCircle, RefreshCw, MapPin } from 'lucide-react';

export const BatteryGuideSection: React.FC = () => {
  return (
    <section className="py-16 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-xs font-bold mb-3 border border-sky-200">
            <Sparkles className="w-3.5 h-3.5 text-sky-500" />
            <span>Kiến Thức Năng Lượng Chuyên Sâu</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Cẩm Nang An Toàn Cho Pin Dùng 1 Lần <span className="text-sky-500">H</span>battery
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Hiểu đúng bản chất pin sơ cấp (Primary Battery) giúp bạn kéo dài tuổi thọ thiết bị và đảm bảo an toàn tuyệt đối cho cả gia đình.
          </p>
        </div>

        {/* 4 Crucial Guidelines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Do Not Recharge Warning */}
          <div className="bg-red-50/70 border-2 border-red-200 rounded-3xl p-6 relative flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-red-500 text-white flex items-center justify-center mb-4 shadow-md shadow-red-500/20">
                <AlertOctagon className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-red-950 text-base mb-2">
                Tuyệt Đối KHÔNG CẮM SẠC
              </h3>
              <p className="text-xs text-red-900 leading-relaxed">
                Pin dùng 1 lần (Primary Battery) có cấu trúc hóa học một chiều. Nếu cắm vào bộ sạc điện, khí hydro sẽ sinh ra nhanh chóng dẫn đến phồng rộp, rò rỉ dung dịch điện phân hoặc phát nổ.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-red-200/80 text-[11px] font-bold text-red-800">
              ⚠ Chỉ dùng 1 lần rồi thải bỏ đúng nơi quy định
            </div>
          </div>

          {/* Card 2: Never Mix Old & New */}
          <div className="bg-amber-50/70 border border-amber-200 rounded-3xl p-6 relative flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center mb-4 shadow-md shadow-amber-500/20">
                <RefreshCw className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-amber-950 text-base mb-2">
                Không Trộn Pin Cũ & Pin Mới
              </h3>
              <p className="text-xs text-amber-900 leading-relaxed">
                Khi thay pin khóa vân tay hoặc đồ chơi dùng nhiều viên, luôn thay mới 100% tất cả các viên cùng lúc. Viên pin cũ có nội trở cao sẽ bị viên pin mới "ép dòng", gây chảy dịch làm hỏng mạch.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-amber-200/80 text-[11px] font-bold text-amber-800">
              ✓ Luôn thay đồng bộ trọn bộ pin
            </div>
          </div>

          {/* Card 3: Storage */}
          <div className="bg-sky-50/70 border border-sky-200 rounded-3xl p-6 relative flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-sky-500 text-white flex items-center justify-center mb-4 shadow-md shadow-sky-500/20">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-sky-950 text-base mb-2">
                Bảo Quản Tránh Đoản Mạch
              </h3>
              <p className="text-xs text-sky-900 leading-relaxed">
                Không để pin chưa dùng lẫn lộn trong túi xách chứa chìa khóa, kẹp bấm hay đồng xu. Các vật kim loại chạm vào cực âm dương sẽ gây chập đoản mạch và nóng ran pin.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-sky-200/80 text-[11px] font-bold text-sky-800">
              ✓ Giữ nguyên vỉ bảo vệ cho tới khi sử dụng
            </div>
          </div>

          {/* Card 4: Signature Sky Blue H */}
          <div className="bg-slate-900 text-white rounded-3xl p-6 relative flex flex-col justify-between border border-slate-800">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-sky-500 text-slate-950 flex items-center justify-center mb-4 shadow-md font-black text-xl">
                H
              </div>
              <h3 className="font-extrabold text-white text-base mb-2">
                Nhận Diện Chữ <span className="text-sky-400">H</span> Xanh Da Trời
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Mỗi viên pin Hbattery chính hãng luôn có ký tự <strong className="text-sky-400">"H" màu xanh da trời</strong> sáng nét, màng niêm phong dập nổi công nghệ PowerLock và mã QR truy xuất xuất xưởng.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] font-bold text-sky-400">
              ✓ Cam kết đền 100% nếu phát hiện hàng giả
            </div>
          </div>

        </div>

        {/* Eco Green Recycle Banner */}
        <div className="mt-12 bg-gradient-to-r from-emerald-950 via-slate-900 to-emerald-950 text-white rounded-3xl p-8 border border-emerald-800/60 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/60 text-emerald-300 text-xs font-bold">
              <span>Hành Động Vì Môi Trường Xanh 2026</span>
            </div>
            <h3 className="text-2xl font-black text-white">
              Chiến Dịch "Gom Pin Cũ - Đổi Năng Lượng Mới" Cùng <span className="text-sky-400">H</span>battery
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
              Một viên pin vứt bừa bãi có thể làm ô nhiễm 500 lít nước ngầm. Hbattery thiết lập hơn 300 điểm thu gom pin đã qua sử dụng trên khắp cả nước để xử lý nhiệt phân tiêu chuẩn quốc tế.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <div className="text-center sm:text-right text-xs">
              <span className="text-emerald-400 font-bold block">Nhận ngay voucher -15%</span>
              <span className="text-slate-400 text-[11px]">Khi gom từ 10 viên pin cũ bất kỳ</span>
            </div>
            <a
              href="#catalog-section"
              className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs transition-all shadow-lg shadow-emerald-500/20"
            >
              Xem Điểm Thu Gom & Đổi Mã
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
