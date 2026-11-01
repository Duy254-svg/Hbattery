import React from 'react';
import { X, Layers, Check, ShieldCheck, Zap } from 'lucide-react';

interface SpecComparisonModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SpecComparisonModal: React.FC<SpecComparisonModalProps> = ({
  isOpen,
  onClose
}) => {
  if (!isOpen) return null;

  const comparisonData = [
    {
      type: 'Kiềm (Alkaline)',
      badge: 'Phổ Biến Nhất',
      voltage: '1.5V (hoặc 9V, 12V)',
      capacity: 'Cao (2,900 mAh AA)',
      shelfLife: '10 Năm',
      temperature: '-20°C đến 54°C',
      weight: 'Trung bình (23g/viên AA)',
      bestFor: 'Khóa cửa vân tay, Chuột/Bàn phím, Đồ chơi cao cấp, Remote',
      antiLeak: 'Công nghệ PowerLock kép bảo vệ 10 năm',
      economy: 'Chi phí cực kỳ hợp lý'
    },
    {
      type: 'Lithium Dùng 1 Lần (Primary)',
      badge: 'Cao Cấp Nhất',
      voltage: '1.5V (AA/AAA) hoặc 3V (CR123A)',
      capacity: 'Rất Cao (3,500 mAh AA)',
      shelfLife: '20 Năm (Kỷ lục)',
      temperature: '-40°C đến 60°C (Băng giá & Nắng nóng)',
      weight: 'Siêu nhẹ (14.5g - nhẹ hơn 33%)',
      bestFor: 'Đèn flash máy ảnh, Thiết bị leo núi GPS ngoài trời, Camera Arlo',
      antiLeak: 'Hàn kín tuyệt đối 100% không rò rỉ',
      economy: 'Hiệu năng tối thượng cho chuyên nghiệp'
    },
    {
      type: 'Cúc Áo Lithium (Coin Cell)',
      badge: 'Chìa Khóa Smartkey',
      voltage: '3.0V',
      capacity: '90 - 620 mAh tùy mã',
      shelfLife: '10 Năm',
      temperature: '-30°C đến 60°C',
      weight: 'Cực mỏng nhẹ dạng đồng xu',
      bestFor: 'Smartkey xe ô tô / xe máy, Cân điện tử, Mainboard CMOS, Cảm biến Zigbee',
      antiLeak: 'Vỏ thép không gỉ SUS304 dập kín',
      economy: 'Chuẩn kích thước quốc tế'
    },
    {
      type: 'Oxit Bạc (Silver Oxide)',
      badge: 'Đồng Hồ Đeo Tay',
      voltage: '1.55V (Điện áp phẳng tuyệt đối)',
      capacity: 'Chuẩn xác cho vi cơ học',
      shelfLife: '5 Năm',
      temperature: '-10°C đến 60°C',
      weight: 'Siêu nhỏ gọn',
      bestFor: 'Đồng hồ đeo tay Thụy Sĩ & Nhật Bản, Dụng cụ đo vi mô',
      antiLeak: 'Không ăn mòn bánh răng đồng hồ đắt tiền',
      economy: 'Chuyên dụng kim đồng hồ không lệch giây'
    },
    {
      type: 'Than Kẽm (Carbon-Zinc)',
      badge: 'Siêu Tiết Kiệm',
      voltage: '1.5V',
      capacity: 'Thấp - Trung bình (1,050 mAh)',
      shelfLife: '3 Năm',
      temperature: '0°C đến 45°C',
      weight: 'Nhẹ',
      bestFor: 'Đồng hồ treo tường kim trôi, Điều khiển TV cơ bản',
      antiLeak: 'Dòng xả êm ái, nên thay khi yếu',
      economy: 'Giá rẻ nhất thị trường'
    },
    {
      type: 'Kẽm Khí (Zinc-Air)',
      badge: 'Y Tế Máy Trợ Thính',
      voltage: '1.45V',
      capacity: 'Mật độ năng lượng cực cao',
      shelfLife: '4 Năm (khi chưa bóc tem)',
      temperature: '0°C đến 50°C',
      weight: 'Siêu nhỏ gọn với lỗ thông khí',
      bestFor: 'Máy trợ thính và thiết bị khuếch đại âm thanh y tế',
      antiLeak: 'Kích hoạt bằng oxy khí quyển',
      economy: 'Âm thanh trong trẻo không nhiễu'
    },
    {
      type: 'Ắc Quy Sạc VRLA AGM & Gel (Chì Acid)',
      badge: 'Sạc Lại 500 - 1,200 Lần',
      voltage: '6.0V hoặc 12.0V',
      capacity: 'Cực Đại (4.5Ah đến 100Ah)',
      shelfLife: 'Tuổi thọ thiết kế 3 - 10 năm (Sạc lại định kỳ)',
      temperature: '-25°C đến 60°C',
      weight: 'Nặng (1.2kg - 30kg)',
      bestFor: 'Bộ lưu điện UPS, Cửa cuốn, Xe đạp điện, Xe máy Honda/Yamaha, Đèn Exit PCCC, Inverter',
      antiLeak: 'Sợi thủy tinh AGM thấm hút axit 100% không lo rò rỉ kể cả đặt nằm ngang',
      economy: 'Đầu tư bền bỉ cho hệ thống lưu trữ điện nạp xả lâu dài'
    },
    {
      type: 'Pin Sạc Ni-MH (LSD)',
      badge: 'Sạc Lại 2,100 Lần',
      voltage: '1.2V (hoặc 9V)',
      capacity: 'Cao (1,100 - 10,000 mAh)',
      shelfLife: 'Giữ 85% pin sau 1 năm',
      temperature: '-20°C đến 50°C',
      weight: 'Trung bình (28g/AA)',
      bestFor: 'Đèn flash máy ảnh, Micro karaoke, Tay cầm game Xbox, Đồ chơi điều khiển',
      antiLeak: 'Vỏ phủ Niken chống rỉ sét, nạp xả không hiệu ứng nhớ',
      economy: 'Tiết kiệm hàng triệu đồng so với pin dùng 1 lần'
    },
    {
      type: 'Pin & Ắc Quy Sạc Li-ion & USB-C',
      badge: 'Sạc Lại 1,000 - 1,500 Lần',
      voltage: '3.7V (hoặc 1.5V USB-C, 9V)',
      capacity: 'Rất Cao (3,000 - 5,500 mAh)',
      shelfLife: '1,000 - 1,500 Chu kỳ nạp xả',
      temperature: '-20°C đến 65°C',
      weight: 'Nhẹ (45g - 70g)',
      bestFor: 'Đèn pin tuần tra, Gimbal, Máy khoan pin, Cắm sạc Type-C trực tiếp',
      antiLeak: 'Mạch bảo vệ Seiko IC ngắt dòng tức thời',
      economy: 'Công nghệ tiên tiến cho thiết bị hiện đại'
    },
    {
      type: 'Pin & Ắc Quy Natri-ion (Na-Ion Sạc Lại)',
      badge: 'Sạc Lại 3,500 Lần (-40°C)',
      voltage: '3.1V',
      capacity: '1,500 - 10,000 mAh',
      shelfLife: '3,500+ Chu kỳ sạc nạp (12 năm)',
      temperature: '-40°C đến 80°C (Băng tuyết)',
      weight: 'Trung bình',
      bestFor: 'Kho lạnh, Trạm quan trắc núi cao, Đèn dã ngoại băng tuyết, Trạm ESS',
      antiLeak: 'Không dùng kim loại hiếm, chống cháy nổ tuyệt đối khi đâm thủng',
      economy: 'Sạc siêu nhanh 15 phút đạt 80%'
    },
    {
      type: 'Pin Lưu Trữ LiFePO4',
      badge: '6,000 Chu Kỳ Bluetooth',
      voltage: '12.8V / 25.6V / 51.2V',
      capacity: '100Ah (1.28kWh - 5.12kWh)',
      shelfLife: '15 Năm (6,000 chu kỳ)',
      temperature: '-20°C đến 65°C',
      weight: 'Nhẹ hơn 65% so với ắc quy chì',
      bestFor: 'Xe RV dã ngoại, Thuyền cano, Điện mặt trời gia đình, Powerwall treo tường',
      antiLeak: 'Hóa học Lithium Sắt Photphat không thể bắt lửa, Smart BMS thông minh',
      economy: 'Tuổi thọ 15 năm - đầu tư 1 lần dùng trọn đời'
    },
    {
      type: 'Pin Năng Lượng Mặt Trời Solar',
      badge: 'Quang Điện 24.8%',
      voltage: '18V - 41.5V',
      capacity: '60W - 450W Peak Power',
      shelfLife: 'Bảo hành 25 - 30 Năm',
      temperature: '-40°C đến 85°C',
      weight: '1.9kg (gấp gọn) đến 25kg (kính kép)',
      bestFor: 'Cắm trại dã ngoại sạc Laptop Type-C, Tàu cá, Nóc xe camper, Mái nhà gia đình',
      antiLeak: 'Phủ màng ETFE chống nước mặn và kính cường lực kép IP68',
      economy: 'Năng lượng xanh miễn phí từ ánh sáng mặt trời'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-5">
      <div className="relative w-full max-w-6xl bg-slate-950 text-white rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.8)] border border-slate-800 overflow-hidden my-6">
        
        {/* Header */}
        <div className="bg-slate-950 p-6 sm:p-8 relative flex items-center justify-between border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-black text-sky-400 uppercase tracking-wider mb-1.5">
              <Layers className="w-4 h-4" />
              <span>Bảng Đối Chiếu Thông Số Tiêu Chuẩn Kỹ Thuật</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              So Sánh Các Dòng Pin & Ắc Quy <span className="text-sky-400">H</span>battery
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-2xl">
              Định vị chính xác công nghệ pin và ắc quy theo từng ứng dụng thực tế, đảm bảo an toàn tuyệt đối 100% không lo cháy nổ hay rò rỉ.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-3 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors cursor-pointer shadow-md"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Comparison Table */}
        <div className="p-6 sm:p-8 overflow-x-auto max-h-[70vh]">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="border-b border-slate-800 text-slate-300 bg-slate-900/90">
                <th className="p-3.5 font-black uppercase tracking-wider rounded-l-xl">Công nghệ</th>
                <th className="p-3.5 font-black uppercase tracking-wider">Điện áp & Dung lượng</th>
                <th className="p-3.5 font-black uppercase tracking-wider">Tuổi thọ / Lưu kho</th>
                <th className="p-3.5 font-black uppercase tracking-wider">Nhiệt độ hoạt động</th>
                <th className="p-3.5 font-black uppercase tracking-wider">Ứng dụng phù hợp</th>
                <th className="p-3.5 font-black uppercase tracking-wider rounded-r-xl">Chống rò rỉ</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80">
              {comparisonData.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-900/60 transition-colors">
                  <td className="p-3.5 font-bold text-white align-top">
                    <div className="font-extrabold text-sm">{row.type}</div>
                    <span className="inline-block mt-1 bg-sky-500/20 text-sky-400 border border-sky-400/30 text-[10px] font-black px-2 py-0.5 rounded-full">
                      {row.badge}
                    </span>
                  </td>
                  <td className="p-3.5 align-top">
                    <strong className="text-sky-400 block font-black text-sm sm:text-base">{row.voltage}</strong>
                    <span className="text-slate-400 text-xs">{row.capacity}</span>
                  </td>
                  <td className="p-3.5 align-top font-bold text-amber-400">
                    {row.shelfLife}
                  </td>
                  <td className="p-3.5 align-top text-slate-300 font-mono text-xs">
                    {row.temperature}
                  </td>
                  <td className="p-3.5 align-top text-slate-300 max-w-xs leading-relaxed font-medium">
                    {row.bestFor}
                  </td>
                  <td className="p-3.5 align-top text-emerald-400 font-semibold max-w-xs">
                    ✓ {row.antiLeak}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer info */}
        <div className="bg-slate-900/90 px-6 sm:px-8 py-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-sky-400" />
            <span>Mọi sản phẩm Hbattery đều đạt chứng nhận kiểm định IEC 60086 và RoHS 0% Mercury.</span>
          </div>

          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-black text-xs sm:text-sm transition-all cursor-pointer shadow-md"
          >
            Đã hiểu, quay lại cửa hàng
          </button>
        </div>

      </div>
    </div>
  );
};
