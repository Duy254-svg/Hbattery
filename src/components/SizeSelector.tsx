import React from 'react';
import { BatterySize, BatteryProduct } from '../types/battery';
import { CircleDot, Layers, Box, Watch, Ear, Zap, Check, RotateCcw, BatteryCharging, Sun } from 'lucide-react';

export interface SizeGroup {
  id: string;
  name: string;
  shortName: string;
  icon: React.ReactNode;
  description: string;
  sizes: {
    size: BatterySize;
    label: string;
    sublabel: string;
    voltage: string;
    commonUse: string;
  }[];
}

export const SIZE_GROUPS: SizeGroup[] = [
  {
    id: 'cylindrical',
    name: '1. Pin Trụ Tròn Tiêu Chuẩn (Cylindrical)',
    shortName: 'Pin Trụ Tròn (AA / AAA / AAAA / C / D)',
    icon: <CircleDot className="w-5 h-5 text-sky-400" />,
    description: 'Pin hình trụ thông dụng cho thiết bị gia đình, khóa vân tay, bút vẽ Surface và remote',
    sizes: [
      { size: 'AA', label: 'AA (LR6 / FR6)', sublabel: 'Pin tiểu 14.5 × 50.5 mm', voltage: '1.5V', commonUse: 'Khóa vân tay, Chuột, Micro karaoke' },
      { size: 'AAA', label: 'AAA (LR03)', sublabel: 'Pin đũa 10.5 × 44.5 mm', voltage: '1.5V', commonUse: 'Remote TV giọng nói, Điều hòa' },
      { size: 'AAAA', label: 'AAAA (LR61)', sublabel: 'Pin 4A siêu mảnh 8.3 × 42.5 mm', voltage: '1.5V', commonUse: 'Bút Surface Pen, Bút vẽ Wacom' },
      { size: 'C', label: 'Size C (LR14)', sublabel: 'Pin trung 26.2 × 50 mm', voltage: '1.5V', commonUse: 'Đèn pin tuần tra, Đài radio' },
      { size: 'D', label: 'Size D (LR20)', sublabel: 'Pin đại 34.2 × 61.5 mm', voltage: '1.5V', commonUse: 'Bếp gas âm cao cấp, Bình nước nóng' },
      { size: 'N', label: 'Size N (LR1)', sublabel: 'Pin lùn 12 × 30.2 mm', voltage: '1.5V', commonUse: 'Cảm biến báo trộm, Micro cài áo' }
    ]
  },
  {
    id: 'coin',
    name: '2. Pin Cúc Áo Lithium 3V (Smartkey & IoT)',
    shortName: 'Pin Cúc Áo Smartkey 3V',
    icon: <Layers className="w-5 h-5 text-sky-400" />,
    description: 'Pin đồng xu Lithium 3V cho chìa khóa ô tô, xe máy, máy tính và cảm biến nhà thông minh',
    sizes: [
      { size: 'CR2032', label: 'CR2032', sublabel: 'Đường kính Ø20 × 3.2 mm', voltage: '3.0V', commonUse: 'Smartkey Honda SH, Toyota, PC CMOS' },
      { size: 'CR1632', label: 'CR1632', sublabel: 'Đường kính Ø16 × 3.2 mm', voltage: '3.0V', commonUse: 'Smartkey Camry, Lexus, Hilux' },
      { size: 'CR2025', label: 'CR2025', sublabel: 'Đường kính Ø20 × 2.5 mm', voltage: '3.0V', commonUse: 'Chìa khóa Mercedes, Audi, Remote mỏng' },
      { size: 'CR1620', label: 'CR1620', sublabel: 'Đường kính Ø16 × 2.0 mm', voltage: '3.0V', commonUse: 'Chìa khóa Mazda 2/3, Suzuki Swift' },
      { size: 'CR1616', label: 'CR1616', sublabel: 'Đường kính Ø16 × 1.6 mm', voltage: '3.0V', commonUse: 'Chìa khóa Honda City, Civic, CR-V' },
      { size: 'CR2016', label: 'CR2016', sublabel: 'Đường kính Ø20 × 1.6 mm', voltage: '3.0V', commonUse: 'Đồng hồ Casio G-Shock, Thẻ xe' },
      { size: 'CR2450', label: 'CR2450', sublabel: 'Đường kính Ø24.5 × 5.0 mm', voltage: '3.0V', commonUse: 'Cảm biến Aqara Zigbee, Smart Home' },
      { size: 'CR2477', label: 'CR2477 (Khủng)', sublabel: 'Đường kính Ø24.5 × 7.7 mm (1000mAh)', voltage: '3.0V', commonUse: 'Cảm biến địa chấn, Thẻ RFID' },
      { size: 'CR2430', label: 'CR2430', sublabel: 'Đường kính Ø24.5 × 3.0 mm', voltage: '3.0V', commonUse: 'Đai nhịp tim Garmin, Cổng tự động' },
      { size: 'CR1220', label: 'CR1220', sublabel: 'Đường kính Ø12.5 × 2.0 mm', voltage: '3.0V', commonUse: 'Nhiệt kế Omron, Nến điện tử' }
    ]
  },
  {
    id: 'accumulator',
    name: '3. Bình Ắc Quy Khô Kín Khí (VRLA AGM & Gel)',
    shortName: 'Ắc Quy Khô VRLA (12V & 6V)',
    icon: <Zap className="w-5 h-5 text-emerald-400" />,
    description: 'Ắc quy lưu điện miễn bảo dưỡng cho bộ lưu điện UPS, xe đạp điện, xe máy và hệ thống năng lượng mặt trời',
    sizes: [
      { size: '12V-7.2Ah', label: '12V 7.2Ah', sublabel: 'Kích thước 151 × 65 × 94 mm (2.1 kg)', voltage: '12.0V', commonUse: 'Bộ lưu điện UPS APC/Santak, Cửa cuốn' },
      { size: '12V-12Ah', label: '12V 12Ah (Xả sâu)', sublabel: 'Kích thước 151 × 98 × 95 mm (3.8 kg)', voltage: '12.0V', commonUse: 'Xe đạp điện 48V, Loa kéo karaoke' },
      { size: '12V-5Ah', label: '12V 5Ah (Xe máy)', sublabel: 'Kích thước 113 × 70 × 105 mm (1.8 kg)', voltage: '12.0V', commonUse: 'Xe máy Honda Wave/Vision/Lead & Yamaha' },
      { size: '12V-7Ah', label: '12V 7Ah (Xe ga lớn)', sublabel: 'Kích thước 113 × 70 × 130 mm (2.2 kg)', voltage: '12.0V', commonUse: 'Xe Honda SH350i, Vespa GTS 300' },
      { size: '12V-20Ah', label: '12V 20Ah (Solar)', sublabel: 'Kích thước 181 × 77 × 167 mm (6.0 kg)', voltage: '12.0V', commonUse: 'Điện mặt trời, Bộ kích Inverter 220V' },
      { size: '12V-30Ah', label: '12V 30Ah (Cực đại)', sublabel: 'Kích thước 180 × 130 × 170 mm (9.5 kg)', voltage: '12.0V', commonUse: 'Inverter công suất lớn, Trạm phát điện' },
      { size: '6V-4.5Ah', label: '6V 4.5Ah', sublabel: 'Kích thước 70 × 47 × 101 mm (0.7 kg)', voltage: '6.0V', commonUse: 'Đèn thoát hiểm Exit PCCC, Cân điện tử' },
      { size: '6V-12Ah', label: '6V 12Ah', sublabel: 'Kích thước 151 × 50 × 94 mm (1.7 kg)', voltage: '6.0V', commonUse: 'Xe ô tô điện trẻ em 2 chỗ, Đèn cứu hộ' }
    ]
  },
  {
    id: 'blocks',
    name: '4. Pin Vuông, Khối 6V/9V & Lithium Công Nghiệp',
    shortName: 'Pin Vuông 9V & Khối 6V/3.6V',
    icon: <Box className="w-5 h-5 text-sky-400" />,
    description: 'Pin điện áp cao cho báo khói, máy sốc tim AED, cửa cuốn, máy ảnh film và công tơ thông minh',
    sizes: [
      { size: '9V', label: 'Pin Vuông 9V', sublabel: '6LR61 / U9VL 1200mAh / 6F22', voltage: '9.0V', commonUse: 'Báo khói, Máy sốc tim AED, Micro' },
      { size: 'A23', label: 'A23 (23A)', sublabel: 'Pin trụ 12V • 10 × 28.5 mm', voltage: '12V', commonUse: 'Remote cửa cuốn Austdoor, Chuông' },
      { size: 'A27', label: 'A27 (27A)', sublabel: 'Pin trụ 12V mảnh • 8 × 28.2 mm', voltage: '12V', commonUse: 'Remote cổng tự động FAAC/BFT' },
      { size: 'CR123A', label: 'CR123A', sublabel: 'Trụ 3V Lithium • 17 × 34.5 mm', voltage: '3.0V', commonUse: 'Đèn pin Surefire, Camera Arlo' },
      { size: 'CR2', label: 'CR2', sublabel: 'Trụ 3V Lithium • 15.6 × 27 mm', voltage: '3.0V', commonUse: 'Máy ảnh Instax, Máy đo Golf' },
      { size: '2CR5', label: '2CR5', sublabel: 'Khối đôi 6V Lithium', voltage: '6.0V', commonUse: 'Máy ảnh film Canon EOS, Pentax' },
      { size: 'CRP2', label: 'CR-P2', sublabel: 'Khối dẹt 6V Lithium', voltage: '6.0V', commonUse: 'Vòi cảm ứng Toto/Inax tự động' },
      { size: '4LR44', label: '4LR44 (28A)', sublabel: 'Trụ cao 6V Alkaline', voltage: '6.0V', commonUse: 'Máy ảnh film Canon AE-1' },
      { size: 'CR-V3', label: 'CR-V3', sublabel: 'Khối đôi 3V Lithium (3000mAh)', voltage: '3.0V', commonUse: 'Máy ảnh số Olympus, Kodak' },
      { size: 'ER14250', label: 'ER14250 (1/2 AA)', sublabel: '3.6V Li-SOCl2 công nghiệp', voltage: '3.6V', commonUse: 'Công tơ điện tử EVN, Đồng hồ nước' },
      { size: 'ER14505', label: 'ER14505 (AA 3.6V)', sublabel: '3.6V Li-SOCl2 truyền tin', voltage: '3.6V', commonUse: 'Thiết bị LoRaWAN, Quan trắc đập' }
    ]
  },
  {
    id: 'button-watch',
    name: '5. Pin Đồng Hồ Đeo Tay Oxit Bạc & Pin Nút Nhỏ',
    shortName: 'Pin Đồng Hồ Oxit Bạc (SR)',
    icon: <Watch className="w-5 h-5 text-sky-400" />,
    description: 'Pin Oxit Bạc điện áp phẳng chuẩn xác từng giây cho đồng hồ Thụy Sĩ, Nhật Bản và y tế',
    sizes: [
      { size: 'SR626SW', label: 'SR626SW (377)', sublabel: 'Oxit bạc Ø6.8 × 2.6 mm', voltage: '1.55V', commonUse: 'Đồng hồ máy Quartz 3 kim Seiko, Casio' },
      { size: 'SR621SW', label: 'SR621SW (364)', sublabel: 'Oxit bạc mỏng Ø6.8 × 2.1 mm', voltage: '1.55V', commonUse: 'Đồng hồ nữ Daniel Wellington, DW' },
      { size: 'SR920SW', label: 'SR920SW (371)', sublabel: 'Oxit bạc lớn Ø9.5 × 2.05 mm', voltage: '1.55V', commonUse: 'Đồng hồ Chronograph thể thao 6 kim' },
      { size: 'SR1130SW', label: 'SR1130SW (389)', sublabel: 'Oxit bạc Ø11.6 × 3.1 mm', voltage: '1.55V', commonUse: 'Đồng hồ lặn biển Seiko Prospex' },
      { size: 'SR726SW', label: 'SR726SW (397)', sublabel: 'Oxit bạc Ø7.9 × 2.6 mm', voltage: '1.55V', commonUse: 'Đồng hồ Michael Kors, Guess' },
      { size: 'LR44', label: 'LR44 (AG13)', sublabel: 'Pin kiềm Ø11.6 × 5.4 mm', voltage: '1.5V', commonUse: 'Thước kẹp điện tử, Máy tính Casio' },
      { size: 'LR41', label: 'LR41 (AG3)', sublabel: 'Pin kiềm Ø7.9 × 3.6 mm', voltage: '1.5V', commonUse: 'Nhiệt kế kẹp nách Microlife, Citizen' },
      { size: 'LR1130', label: 'LR1130 (AG10)', sublabel: 'Pin kiềm Ø11.6 × 3.1 mm', voltage: '1.5V', commonUse: 'Máy tính học sinh, Cân tiểu ly' }
    ]
  },
  {
    id: 'zinc-air',
    name: '6. Pin Kẽm Khí Máy Trợ Thính (4 Mã Màu Quốc Tế)',
    shortName: 'Pin Máy Trợ Thính (Zinc-Air)',
    icon: <Ear className="w-5 h-5 text-amber-400" />,
    description: 'Pin kích hoạt bằng oxy khí quyển, âm thanh trong trẻo không nhiễu cho người khiếm thính',
    sizes: [
      { size: 'A10', label: 'A10 (Màu Vàng)', sublabel: 'PR70 • Siêu nhỏ trong ống tai', voltage: '1.45V', commonUse: 'Máy trợ thính lọt tai CIC / IIC' },
      { size: 'A312', label: 'A312 (Màu Nâu)', sublabel: 'PR41 • Kích thước phổ biến nhất', voltage: '1.45V', commonUse: 'Máy trợ thính kỹ thuật số thông dụng' },
      { size: 'A13', label: 'A13 (Màu Cam)', sublabel: 'PR48 • Dung lượng cao 310mAh', voltage: '1.45V', commonUse: 'Máy trợ thính công suất lớn BTE' },
      { size: 'A675', label: 'A675 (Màu Xanh Lam)', sublabel: 'PR44 • Cực đại 650mAh', voltage: '1.45V', commonUse: 'Cấy ốc tai điện tử Cochlear' }
    ]
  },
  {
    id: 'rechargeable-cells',
    name: '7. Pin Sạc Trụ Tròn Li-ion, Na-ion, NiMH & NiCd',
    shortName: 'Pin Sạc Trụ (18650 / 21700 / Na-ion / Sub-C)',
    icon: <BatteryCharging className="w-5 h-5 text-sky-400" />,
    description: 'Pin sạc lại cao cấp: Li-ion mật độ cao, Natri-ion chống cháy nổ chịu lạnh -40°C, NiCd xả tức thời 15C',
    sizes: [
      { size: '18650', label: 'Li-ion 18650', sublabel: 'Ø18 × 65 mm (3500mAh / 30A Drain)', voltage: '3.7V', commonUse: 'Đèn pin tuần tra, Gimbal, Pin máy khoan' },
      { size: '21700', label: 'Li-ion 21700', sublabel: 'Ø21 × 70 mm (5000mAh Tesla Grade)', voltage: '3.7V', commonUse: 'Đèn pin công suất cực đại, Xe điện' },
      { size: '26650', label: 'Li-ion 26650', sublabel: 'Ø26 × 65 mm (5500mAh)', voltage: '3.7V', commonUse: 'Đèn lặn biển chuyên nghiệp, Loa kéo' },
      { size: 'Sub-C', label: 'NiCd Sub-C', sublabel: 'Ø23 × 43 mm (2200mAh xả 15C)', voltage: '1.2V', commonUse: 'Máy khoan pin Makita, Bosch, Xe RC' },
      { size: 'Na-18650', label: 'Sodium-ion 18650', sublabel: 'Pin Natri-ion Ø18 × 65 mm (-40°C)', voltage: '3.1V', commonUse: 'Quan trắc kho lạnh, Vùng băng giá tuyết' },
      { size: 'Na-32140', label: 'Sodium-ion 32140', sublabel: 'Tế bào Natri Ø32 × 140 mm (10Ah)', voltage: '3.1V', commonUse: 'Trạm lưu trữ điện Sodium thế hệ mới' }
    ]
  },
  {
    id: 'rechargeable-storage',
    name: '8. Ắc Quy Chì Xả Sâu & Pin Lưu Trữ LiFePO4',
    shortName: 'Lưu Trữ LiFePO4 & Chì Axit Xả Sâu',
    icon: <Zap className="w-5 h-5 text-amber-400" />,
    description: 'Ắc quy chì axít xả sâu viễn thông và Pin lưu trữ Lithium sắt photphat LiFePO4 6000 chu kỳ nạp',
    sizes: [
      { size: 'LiFePO4-12V', label: 'LiFePO4 12V 100Ah', sublabel: '12.8V 1280Wh • Smart BMS Bluetooth', voltage: '12.8V', commonUse: 'Thuyền cano, RV dã ngoại, Điện gia đình' },
      { size: 'LiFePO4-24V', label: 'LiFePO4 24V 100Ah', sublabel: '25.6V 2560Wh • Trạm lưu trữ Solar', voltage: '25.6V', commonUse: 'Hệ thống điện mặt trời độc lập Off-grid' },
      { size: 'LiFePO4-48V', label: 'LiFePO4 48V 100Ah', sublabel: '51.2V 5120Wh (5.12kWh) Powerwall', voltage: '51.2V', commonUse: 'Hệ thống lưu trữ điện mặt trời hòa lưới hybrid' },
      { size: '12V-35Ah', label: '12V 35Ah AGM', sublabel: 'Ắc quy AGM xả sâu chuyên dụng', voltage: '12.0V', commonUse: 'Xe lăn điện y tế, Xe golf mini' },
      { size: '12V-50Ah', label: '12V 50Ah Gel Deep Cycle', sublabel: 'Ắc quy Gel xả sâu chịu nhiệt cao', voltage: '12.0V', commonUse: 'Trạm phát BTS viễn thông, Thắp sáng tàu cá' },
      { size: '12V-100Ah', label: '12V 100Ah Solar Gel', sublabel: 'Ắc quy công nghiệp nặng 31 kg', voltage: '12.0V', commonUse: 'Lưu điện Inverter 220V công suất lớn' },
      { size: '12V-14Ah', label: '12V 14Ah AGM', sublabel: 'Ắc quy khởi động máy cắt cỏ/máy nổ', voltage: '12.0V', commonUse: 'Máy phát điện gia đình, Xe điện 60V' },
      { size: '6V-10Ah', label: '6V 10Ah AGM', sublabel: 'Ắc quy đèn cứu hộ chiếu sáng', voltage: '6.0V', commonUse: 'Hệ thống chiếu sáng sự cố đường hầm' }
    ]
  },
  {
    id: 'solar',
    name: '9. Pin Năng Lượng Mặt Trời Solar (Hbattery SolarPro)',
    shortName: 'Pin Mặt Trời Solar (60W - 450W)',
    icon: <Sun className="w-5 h-5 text-amber-400" />,
    description: 'Tấm quang điện Monocrystalline hiệu suất 24.5%, bề mặt ETFE chống trầy xước, sạc trực tiếp hoặc nạp bình lưu trữ',
    sizes: [
      { size: 'Solar-60W', label: 'SolarPro Gấp Gọn 60W', sublabel: '4 nếp gấp • Cổng Type-C PD 45W + USB', voltage: '18V', commonUse: 'Cắm trại dã ngoại, Sạc điện thoại, Laptop' },
      { size: 'Solar-100W', label: 'SolarPro Khung Nhôm 100W', sublabel: 'Tấm đơn tinh thể Monocrystalline IP68', voltage: '18.5V', commonUse: 'Nạp bình ắc quy 12V xe dã ngoại RV, Đèn LED' },
      { size: 'Solar-200W', label: 'SolarPro Vali Di Động 200W', sublabel: 'Kèm bộ điều khiển sạc thông minh MPPT', voltage: '19.8V', commonUse: 'Nạp trạm pin dự phòng LiFePO4, Chuyến đi xa' },
      { size: 'Solar-450W', label: 'SolarPro Công Nghiệp 450W', sublabel: 'Half-Cell 2 mặt kính Bifacial 144 cells', voltage: '41.5V', commonUse: 'Mái nhà gia đình, Dự án điện mặt trời trang trại' }
    ]
  }
];

interface SizeSelectorProps {
  selectedSize: BatterySize | 'all';
  onSelectSize: (size: BatterySize | 'all') => void;
  products: BatteryProduct[];
}

export const SizeSelector: React.FC<SizeSelectorProps> = ({
  selectedSize,
  onSelectSize,
  products
}) => {
  const [activeGroup, setActiveGroup] = React.useState<string>('all');

  // Compute product counts per size
  const sizeCountMap = React.useMemo(() => {
    const map = new Map<string, number>();
    products.forEach((p) => {
      map.set(p.size, (map.get(p.size) || 0) + 1);
    });
    return map;
  }, [products]);

  // Find which group contains the currently selected size
  React.useEffect(() => {
    if (selectedSize !== 'all') {
      const foundGroup = SIZE_GROUPS.find((g) =>
        g.sizes.some((s) => s.size === selectedSize)
      );
      if (foundGroup) {
        setActiveGroup(foundGroup.id);
      }
    }
  }, [selectedSize]);

  const displayedGroups = activeGroup === 'all'
    ? SIZE_GROUPS
    : SIZE_GROUPS.filter((g) => g.id === activeGroup);

  return (
    <div className="bg-slate-900/90 text-white rounded-3xl p-5 sm:p-7 border border-slate-800 shadow-xl space-y-6">
      
      {/* Header of Size Section - To rõ, bề thế */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-3">
            <h3 className="text-base sm:text-lg lg:text-xl font-black text-white flex items-center gap-2 tracking-tight">
              <Box className="w-5 h-5 text-sky-400" />
              <span>Phân Loại Kích Cỡ & Chuẩn Quy Cách</span>
              <span className="text-sky-400 font-extrabold text-sm ml-1">• Hbattery</span>
            </h3>
            <span className="bg-sky-500/20 text-sky-300 border border-sky-400/30 text-xs font-bold px-2.5 py-0.5 rounded-full">
              6 Nhóm Tiêu Chuẩn
            </span>
          </div>
          <p className="text-slate-400 text-xs sm:text-sm mt-1">
            Chọn kích cỡ chính xác để lọc tức thì danh mục pin và ắc quy phù hợp với thiết bị của bạn.
          </p>
        </div>

        {selectedSize !== 'all' && (
          <button
            onClick={() => onSelectSize('all')}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 text-xs sm:text-sm font-bold transition-all shadow-md self-start sm:self-auto cursor-pointer"
          >
            <RotateCcw className="w-4 h-4 text-sky-400" />
            <span>Xem tất cả ({products.length} mã)</span>
          </button>
        )}
      </div>

      {/* Level 1: Category Family Tabs - To rõ, dễ bấm */}
      <div className="flex items-center gap-2.5 overflow-x-auto scrollbar-none pb-1.5">
        <button
          onClick={() => {
            setActiveGroup('all');
            onSelectSize('all');
          }}
          className={`px-4 py-3 rounded-2xl text-xs sm:text-sm font-black transition-all whitespace-nowrap flex items-center gap-2 cursor-pointer ${
            activeGroup === 'all' && selectedSize === 'all'
              ? 'bg-sky-500 text-slate-950 shadow-lg shadow-sky-500/25 ring-2 ring-sky-400'
              : 'bg-slate-800/80 hover:bg-slate-800 text-slate-300 border border-slate-700'
          }`}
        >
          <span>Tất cả 6 nhóm</span>
          <span className={`text-xs px-2 py-0.5 rounded-md font-mono font-black ${
            activeGroup === 'all' && selectedSize === 'all' ? 'bg-slate-950 text-sky-400' : 'bg-slate-900 text-slate-400'
          }`}>
            {products.length}
          </span>
        </button>

        {SIZE_GROUPS.map((group) => {
          const isGroupActive = activeGroup === group.id;
          const groupCount = group.sizes.reduce(
            (sum, s) => sum + (sizeCountMap.get(s.size) || 0),
            0
          );

          return (
            <button
              key={group.id}
              onClick={() => setActiveGroup(group.id)}
              className={`px-4 py-3 rounded-2xl text-xs sm:text-sm font-extrabold transition-all whitespace-nowrap flex items-center gap-2 cursor-pointer ${
                isGroupActive
                  ? 'bg-sky-500 text-slate-950 shadow-lg shadow-sky-500/25 ring-2 ring-sky-400'
                  : 'bg-slate-800/80 hover:bg-slate-800 text-slate-300 border border-slate-700 hover:border-sky-400'
              }`}
            >
              <div className="shrink-0">{group.icon}</div>
              <span>{group.shortName}</span>
              <span className={`text-xs px-2 py-0.5 rounded-md font-mono font-bold ${
                isGroupActive ? 'bg-slate-950 text-sky-400' : 'bg-slate-900 text-slate-400'
              }`}>
                {groupCount}
              </span>
            </button>
          );
        })}
      </div>

      {/* Level 2: To Rõ & Khoáng Đạt - 3 to 4 columns grid with generous sizing */}
      <div className="space-y-6 pt-1">
        {displayedGroups.map((group) => (
          <div
            key={group.id}
            className="bg-slate-950/80 rounded-2xl p-4 sm:p-5 border border-slate-800/90 shadow-md space-y-4"
          >
            {/* Group Title Bar */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-slate-900 rounded-xl border border-slate-800 text-sky-400">
                  {group.icon}
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-black text-white tracking-tight">
                    {group.name}
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {group.description}
                  </p>
                </div>
              </div>

              {activeGroup !== 'all' && (
                <button
                  onClick={() => onSelectSize('all')}
                  className="text-xs text-sky-400 hover:text-sky-300 font-bold hover:underline cursor-pointer"
                >
                  Bỏ lọc kích cỡ
                </button>
              )}
            </div>

            {/* Spacious, Large Grid Cards (Không hề bé!) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5">
              {group.sizes.map((item) => {
                const isSelected = selectedSize === item.size;
                const count = sizeCountMap.get(item.size) || 0;

                return (
                  <button
                    key={item.size}
                    onClick={() => {
                      if (isSelected) {
                        onSelectSize('all');
                      } else {
                        onSelectSize(item.size);
                      }
                    }}
                    className={`p-4 rounded-2xl border text-left transition-all relative flex flex-col justify-between group cursor-pointer ${
                      isSelected
                        ? 'bg-sky-500 text-slate-950 border-sky-400 shadow-xl ring-2 ring-sky-400/60'
                        : 'bg-slate-900/90 hover:bg-slate-850 border-slate-800 hover:border-sky-500/60 text-white'
                    }`}
                  >
                    <div>
                      {/* Top Bar: Large Model Name & Voltage Badge */}
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className={`font-mono font-black text-base sm:text-lg tracking-wide ${isSelected ? 'text-slate-950' : 'text-white'}`}>
                          {item.size}
                        </span>
                        <span className={`text-xs font-black px-2.5 py-1 rounded-lg font-mono ${
                          isSelected ? 'bg-slate-950 text-sky-400' : 'bg-slate-800 text-sky-400 border border-slate-700'
                        }`}>
                          {item.voltage}
                        </span>
                      </div>

                      {/* Dimensions / Sublabel */}
                      <p className={`text-xs font-semibold ${isSelected ? 'text-slate-900' : 'text-slate-400'}`}>
                        {item.sublabel}
                      </p>
                    </div>

                    {/* Common Usage & Item count */}
                    <div className={`mt-3 pt-2.5 border-t flex items-center justify-between text-xs ${
                      isSelected ? 'border-slate-950/20 text-slate-950 font-bold' : 'border-slate-800 text-slate-300'
                    }`}>
                      <span className="truncate pr-1">
                        {item.commonUse}
                      </span>
                      {count > 0 && (
                        <span className={`font-mono font-black shrink-0 ${
                          isSelected ? 'bg-slate-950/20 px-2 py-0.5 rounded-md' : 'text-sky-400'
                        }`}>
                          {count} SP
                        </span>
                      )}
                    </div>

                    {isSelected && (
                      <div className="absolute top-2.5 right-2.5 w-5 h-5 rounded-full bg-slate-950 text-sky-400 flex items-center justify-center shadow-md">
                        <Check className="w-3.5 h-3.5 stroke-3" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
