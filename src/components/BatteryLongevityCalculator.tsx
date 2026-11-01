import React from 'react';
import { BatteryProduct, PackOption } from '../types/battery';
import { BatteryVisual } from './BatteryVisual';
import { 
  Calculator, 
  Clock, 
  Zap, 
  Calendar, 
  ShieldCheck, 
  ShoppingCart, 
  ChevronRight, 
  RotateCcw,
  Sparkles,
  Info,
  Sliders,
  CheckCircle2,
  Flame,
  Gauge
} from 'lucide-react';

export interface DeviceTypeConfig {
  id: string;
  name: string;
  category: string;
  iconName: string;
  recommendedBatteryCodes: string[]; // matching product ids or size
  baseCurrentMa: number; // Active draw in mA
  standbyCurrentMa: number; // Standby draw in mA
  defaultDailyHours: number;
  maxDailyHours: number;
  unitLabel: string; // e.g. "Giờ sử dụng/ngày", "Lần mở/ngày"
  unitMultiplier?: number;
  description: string;
  tip: string;
}

export const DEVICE_TYPES: DeviceTypeConfig[] = [
  {
    id: 'flashlight',
    name: 'Đèn pin tuần tra & Dã ngoại (Flashlight)',
    category: 'Chiếu sáng & Dã ngoại',
    iconName: 'flashlight',
    recommendedBatteryCodes: ['h-18650-li-ion-3500', 'h-aa-lithium', 'h-aa-alkaline', 'h-d-alkaline'],
    baseCurrentMa: 650,
    standbyCurrentMa: 0.01,
    defaultDailyHours: 1.5,
    maxDailyHours: 12,
    unitLabel: 'Giờ thắp sáng / ngày',
    description: 'Chế độ chiếu sáng công suất trung bình cao (~300 - 800 Lumens)',
    tip: 'Pin Li-ion 18650 và Lithium sơ cấp duy trì độ sáng không giảm trong suốt 90% chu kỳ sử dụng.'
  },
  {
    id: 'camera',
    name: 'Máy ảnh kỹ thuật số & Action Cam (Camera)',
    category: 'Nhiếp ảnh & Y tế',
    iconName: 'camera',
    recommendedBatteryCodes: ['h-aa-lithium', 'h-cr123a-lithium', 'h-cr2-lithium', 'h-2cr5-lithium'],
    baseCurrentMa: 520,
    standbyCurrentMa: 0.05,
    defaultDailyHours: 1.0,
    maxDailyHours: 8,
    unitLabel: 'Giờ quay chụp / ngày (~150 kiểu)',
    description: 'Bao gồm cảm biến hình ảnh, màn hình LCD và đánh flash',
    tip: 'Pin Hbattery Extreme Lithium chịu nhiệt từ -40°C đến 60°C, không tụt áp khi leo núi tuyết hoặc thời tiết nắng nóng.'
  },
  {
    id: 'smartlock',
    name: 'Khóa cửa vân tay thông minh (Smart Door Lock)',
    category: 'Gia đình & Smart Home',
    iconName: 'lock',
    recommendedBatteryCodes: ['h-aa-alkaline', 'h-aa-rechargeable-nimh', 'h-aa-lithium-1-5v-usbc'],
    baseCurrentMa: 180, // when unlocking motor runs
    standbyCurrentMa: 0.035, // 24/7 RF & biometric sensor standby
    defaultDailyHours: 20, // 20 activations per day
    maxDailyHours: 80,
    unitLabel: 'Lần mở cửa vân tay / ngày',
    unitMultiplier: 0.0011, // ~4 seconds active per unlock
    description: 'Motor chốt cửa điện tử và cảm biến sinh trắc học vân tay bán dẫn',
    tip: 'Tuyệt đối KHÔNG dùng pin than kẽm giá rẻ vì nguy cơ chảy nước axít làm cháy bo mạch khóa hàng chục triệu đồng.'
  },
  {
    id: 'smartkey',
    name: 'Chìa khóa ô tô Smartkey (Toyota, Lexus, Honda, BMW)',
    category: 'Xe cộ & Cảm biến',
    iconName: 'key',
    recommendedBatteryCodes: ['h-cr2032-coin', 'h-cr1632-coin', 'h-cr2025-coin', 'h-cr2450-coin'],
    baseCurrentMa: 15,
    standbyCurrentMa: 0.003,
    defaultDailyHours: 15, // 15 key presses / day
    maxDailyHours: 60,
    unitLabel: 'Lần bấm nút / ngày (kèm RFID gần xe)',
    unitMultiplier: 0.0008,
    description: 'Chip phát sóng vô tuyến mã hóa 433/315 MHz và cảm biến nhận diện tiệm cận',
    tip: 'Pin Hbattery Lithium Coin 3V có viền thép SUS304 niêm phong không gỉ sét, bảo quản lên tới 10 năm.'
  },
  {
    id: 'smoke-detector',
    name: 'Cảm biến báo khói & PCCC (Smoke Detector)',
    category: 'An toàn & PCCC',
    iconName: 'flame',
    recommendedBatteryCodes: ['h-9v-lithium', 'h-9v-alkaline'],
    baseCurrentMa: 35,
    standbyCurrentMa: 0.012,
    defaultDailyHours: 24,
    maxDailyHours: 24,
    unitLabel: 'Giờ trực liên tục 24/7',
    description: 'Mạch quang điện hồng ngoại phát hiện hạt khói và còi báo động 85dB',
    tip: 'Pin Hbattery 9V Lithium 1,200mAh đảm bảo báo khói liên tục lên tới 10 năm không cần thay pin.'
  },
  {
    id: 'wireless-mouse',
    name: 'Chuột không dây & Bàn phím Bluetooth (Mouse & Keyboard)',
    category: 'Văn phòng & Công nghệ',
    iconName: 'mouse',
    recommendedBatteryCodes: ['h-aa-alkaline', 'h-aaa-alkaline', 'h-aa-rechargeable-nimh'],
    baseCurrentMa: 4.5,
    standbyCurrentMa: 0.04,
    defaultDailyHours: 8,
    maxDailyHours: 18,
    unitLabel: 'Giờ làm việc văn phòng / ngày',
    description: 'Cảm biến quang học 1600 DPI và kết nối không dây 2.4GHz / BLE',
    tip: 'Công nghệ Hbattery Alkaline tối ưu dòng xả siêu nhỏ, kéo dài thời gian dùng lên đến hơn 1 năm.'
  },
  {
    id: 'hearing-aid',
    name: 'Máy trợ thính kỹ thuật số (Hearing Aid)',
    category: 'Y tế & Đo đạc',
    iconName: 'ear',
    recommendedBatteryCodes: ['h-a312-zincair', 'h-a10-zincair', 'h-a13-zincair', 'h-a675-zincair'],
    baseCurrentMa: 1.8,
    standbyCurrentMa: 0.1,
    defaultDailyHours: 12,
    maxDailyHours: 18,
    unitLabel: 'Giờ đeo sử dụng / ngày',
    description: 'Bộ xử lý khuếch đại âm thanh vòm kỹ thuật số chuẩn y tế',
    tip: 'Sau khi bóc tem niêm phong, hãy chờ 60 giây để oxy không khí kích hoạt đầy đủ điện thế trước khi lắp máy.'
  },
  {
    id: 'powertool',
    name: 'Máy khoan pin & Dụng cụ cầm tay (Power Tool)',
    category: 'Công nghiệp & Xây dựng',
    iconName: 'wrench',
    recommendedBatteryCodes: ['h-18650-highdrain-30a', 'h-nicd-subc-2200', 'h-21700-li-ion-5000'],
    baseCurrentMa: 8500, // 8.5A active drain
    standbyCurrentMa: 0.01,
    defaultDailyHours: 0.5,
    maxDailyHours: 4,
    unitLabel: 'Giờ khoan / cắt tải nặng mỗi ngày',
    description: 'Động cơ không chổi than Brushless xả tức thời lên đến 20A - 30A',
    tip: 'Dòng pin Hbattery Li-ion High Drain và NiCd Sub-C chịu sốc nhiệt tuyệt hảo và cho phép sạc nhanh trong 30 phút.'
  },
  {
    id: 'solar-camping',
    name: 'Đèn & Trạm sạc dã ngoại Solar (Solar Camping)',
    category: 'Năng lượng Mặt trời',
    iconName: 'sun',
    recommendedBatteryCodes: ['h-solar-60w-portable', 'h-lifepo4-12v-100ah', 'h-accu-12v-20ah'],
    baseCurrentMa: 1200,
    standbyCurrentMa: 0.05,
    defaultDailyHours: 4,
    maxDailyHours: 12,
    unitLabel: 'Giờ thắp sáng & sạc thiết bị / ngày',
    description: 'Đèn chiếu sáng dã ngoại 12V kết hợp trạm sạc điện thoại và quạt mini',
    tip: 'Kết hợp cùng tấm pin mặt trời Hbattery SolarPro 60W để tạo chu trình nạp - xả năng lượng vĩnh cửu ngoài tự nhiên.'
  }
];

interface BatteryLongevityCalculatorProps {
  products: BatteryProduct[];
  onAddToCart: (product: BatteryProduct, pack: PackOption) => void;
  onViewDetails: (product: BatteryProduct) => void;
}

export const BatteryLongevityCalculator: React.FC<BatteryLongevityCalculatorProps> = ({
  products,
  onAddToCart,
  onViewDetails
}) => {
  const [selectedDeviceId, setSelectedDeviceId] = React.useState<string>('flashlight');
  const [dailyUsage, setDailyUsage] = React.useState<number>(1.5);
  const [selectedProductId, setSelectedProductId] = React.useState<string>('');
  const [isHighPerformanceMode, setIsHighPerformanceMode] = React.useState<boolean>(false);
  const [ambientTemp, setAmbientTemp] = React.useState<'normal' | 'cold' | 'hot'>('normal');

  const currentDevice = DEVICE_TYPES.find(d => d.id === selectedDeviceId) || DEVICE_TYPES[0];

  // Helper to extract numeric mAh or Ah from capacity string
  const parseCapacityToMah = (capacityStr: string, voltageStr: string): number => {
    const clean = capacityStr.replace(/,/g, '').toLowerCase();
    const num = parseFloat(clean);
    if (isNaN(num)) return 2500;

    if (clean.includes('ah') && !clean.includes('mah')) {
      return num * 1000;
    }
    if (clean.includes('mwh')) {
      const v = parseFloat(voltageStr) || 1.5;
      return (num / v);
    }
    return num;
  };

  // Find candidate products for the selected device
  const deviceCandidateProducts = React.useMemo(() => {
    // 1. Direct matches by recommendedBatteryCodes
    const directMatches = products.filter(p => currentDevice.recommendedBatteryCodes.includes(p.id));
    // 2. Also find other matching products based on category or size
    const otherMatches = products.filter(p => {
      if (directMatches.some(dm => dm.id === p.id)) return false;
      const deviceText = currentDevice.name.toLowerCase();
      return p.recommendedDevices.some(rd => rd.toLowerCase().includes(currentDevice.id) || currentDevice.name.toLowerCase().includes(p.size.toLowerCase()));
    }).slice(0, 4);

    return [...directMatches, ...otherMatches];
  }, [products, currentDevice]);

  // Set default product when device changes
  React.useEffect(() => {
    if (deviceCandidateProducts.length > 0) {
      // Check if current selected is still in candidate list
      if (!deviceCandidateProducts.some(p => p.id === selectedProductId)) {
        setSelectedProductId(deviceCandidateProducts[0].id);
      }
    } else if (products.length > 0) {
      setSelectedProductId(products[0].id);
    }
    setDailyUsage(currentDevice.defaultDailyHours);
  }, [selectedDeviceId, deviceCandidateProducts]);

  const selectedProduct = products.find(p => p.id === selectedProductId) || deviceCandidateProducts[0] || products[0];

  // Calculation logic
  const calculationResult = React.useMemo(() => {
    if (!selectedProduct) return null;

    const baseCapacity = parseCapacityToMah(selectedProduct.capacity, selectedProduct.voltage);

    // Temperature degradation factor
    let tempFactor = 1.0;
    if (ambientTemp === 'cold') {
      // Lithium handles cold much better than Alkaline / Carbon
      if (selectedProduct.chemistry === 'lithium-primary' || selectedProduct.chemistry === 'na-ion') {
        tempFactor = 0.95;
      } else if (selectedProduct.chemistry === 'li-ion') {
        tempFactor = 0.85;
      } else if (selectedProduct.chemistry === 'alkaline') {
        tempFactor = 0.65;
      } else {
        tempFactor = 0.50; // Carbon-zinc drops severely in cold
      }
    } else if (ambientTemp === 'hot') {
      tempFactor = 0.92;
    }

    // High performance draw boost
    const perfMultiplier = isHighPerformanceMode ? 1.35 : 1.0;

    let dailyMah = 0;
    if (currentDevice.unitMultiplier) {
      // For activations/day (e.g. locks, smartkeys)
      const activeHoursPerDay = dailyUsage * currentDevice.unitMultiplier;
      const standbyHoursPerDay = 24 - activeHoursPerDay;
      dailyMah = (activeHoursPerDay * currentDevice.baseCurrentMa * perfMultiplier) + (standbyHoursPerDay * currentDevice.standbyCurrentMa);
    } else {
      // For hours/day
      const activeHours = Math.min(dailyUsage, 24);
      const standbyHours = Math.max(0, 24 - activeHours);
      dailyMah = (activeHours * currentDevice.baseCurrentMa * perfMultiplier) + (standbyHours * currentDevice.standbyCurrentMa);
    }

    if (dailyMah <= 0) dailyMah = 0.1;

    const effectiveCapacity = baseCapacity * tempFactor;
    const daysExpected = Math.max(1, Math.round(effectiveCapacity / dailyMah));
    const monthsExpected = (daysExpected / 30.4).toFixed(1);
    const yearsExpected = (daysExpected / 365).toFixed(1);

    // For rechargeable batteries, also calculate cycle life
    const isRechargeable = selectedProduct.isRechargeable || ['nimh', 'nicd', 'li-ion', 'lifepo4', 'na-ion', 'lead-acid-vrla'].includes(selectedProduct.chemistry);
    const cycles = selectedProduct.rechargeCycles || (selectedProduct.chemistry === 'lifepo4' ? 6000 : selectedProduct.chemistry === 'li-ion' ? 1200 : selectedProduct.chemistry === 'nimh' ? 2100 : selectedProduct.chemistry === 'nicd' ? 1000 : 500);

    const totalRechargeLifespanYears = Math.min(15, Math.round((cycles * daysExpected) / 365 * 10) / 10);

    return {
      baseCapacity,
      effectiveCapacity: Math.round(effectiveCapacity),
      dailyMah: Math.round(dailyMah * 10) / 10,
      daysExpected,
      monthsExpected,
      yearsExpected,
      isRechargeable,
      cycles,
      totalRechargeLifespanYears,
      tempFactor
    };
  }, [selectedProduct, currentDevice, dailyUsage, isHighPerformanceMode, ambientTemp]);

  return (
    <section className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl border border-slate-800 my-10 relative overflow-hidden">
      {/* Background radial gradient glow */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Header Bar */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/15 border border-sky-400/30 text-sky-400 text-xs font-black uppercase tracking-wider mb-2">
            <Calculator className="w-3.5 h-3.5" />
            <span>Hbattery Smart Lab • Đo Lường Tuổi Thọ Pin Chuẩn Xác</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight flex flex-wrap items-center gap-2 text-white">
            <span>Công Cụ Tính Tuổi Thọ Pin</span>
            <span className="text-sky-400 font-mono font-black">(Battery Longevity Calculator)</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
            Mô phỏng chính xác thời lượng hoạt động (theo ngày, tháng hoặc chu kỳ sạc) dựa trên dòng tiêu thụ thực tế của từng thiết bị và mật độ năng lượng của các dòng pin Hbattery.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start md:self-auto">
          <div className="px-3.5 py-2 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-300 font-mono flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>Thuật toán chuẩn IEC 60086</span>
          </div>
        </div>
      </div>

      {/* Main Interactive Grid */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
        
        {/* Left Column: Device & Usage Controls (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Step 1: Device Selection */}
          <div>
            <label className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400 flex items-center gap-1.5 mb-2.5">
              <span className="w-5 h-5 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center text-xs">1</span>
              <span>Chọn loại thiết bị của bạn:</span>
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {DEVICE_TYPES.map((device) => {
                const isSelected = device.id === selectedDeviceId;
                return (
                  <button
                    key={device.id}
                    onClick={() => setSelectedDeviceId(device.id)}
                    className={`p-3 rounded-2xl border text-left transition-all cursor-pointer relative flex flex-col justify-between ${
                      isSelected
                        ? 'bg-sky-500/15 border-sky-400 text-white shadow-[0_0_15px_rgba(56,189,248,0.2)] ring-1 ring-sky-400'
                        : 'bg-slate-950/70 border-slate-800 hover:border-slate-700 text-slate-300 hover:bg-slate-800/50'
                    }`}
                  >
                    <div>
                      <div className="text-[10px] uppercase font-mono text-slate-400 mb-0.5 truncate">
                        {device.category}
                      </div>
                      <div className="text-xs font-bold leading-snug line-clamp-2">
                        {device.name}
                      </div>
                    </div>
                    {isSelected && (
                      <div className="mt-2 flex items-center gap-1 text-[10px] text-sky-400 font-bold font-mono">
                        <CheckCircle2 className="w-3 h-3 text-sky-400" />
                        <span>Đã chọn</span>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
            <p className="text-[11px] text-slate-400 mt-2 italic bg-slate-950/60 p-2 rounded-xl border border-slate-800/80">
              💡 {currentDevice.description}. {currentDevice.tip}
            </p>
          </div>

          {/* Step 2: Battery Selection from Hbattery Catalog */}
          <div>
            <label className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400 flex items-center gap-1.5 mb-2.5">
              <span className="w-5 h-5 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center text-xs">2</span>
              <span>Chọn dòng pin Hbattery muốn đo kiểm:</span>
            </label>
            
            <div className="space-y-2">
              <select
                value={selectedProductId}
                onChange={(e) => setSelectedProductId(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 text-white text-xs sm:text-sm font-bold rounded-2xl px-4 py-3 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-500/20"
              >
                <optgroup label="Dòng pin được khuyên dùng tối ưu cho thiết bị này">
                  {deviceCandidateProducts.map(p => (
                    <option key={p.id} value={p.id}>
                      ★ {p.name} ({p.size} • {p.voltage} • {p.capacity})
                    </option>
                  ))}
                </optgroup>
                <optgroup label="Tất cả các dòng pin & ắc quy khác">
                  {products
                    .filter(p => !deviceCandidateProducts.some(cp => cp.id === p.id))
                    .map(p => (
                      <option key={p.id} value={p.id}>
                        {p.name} ({p.size} • {p.voltage} • {p.capacity})
                      </option>
                    ))}
                </optgroup>
              </select>

              {/* Quick suggestion pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none pt-1">
                <span className="text-[11px] text-slate-400 font-mono shrink-0">Gợi ý nhanh:</span>
                {deviceCandidateProducts.slice(0, 3).map(p => (
                  <button
                    key={p.id}
                    onClick={() => setSelectedProductId(p.id)}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-bold font-mono transition-all shrink-0 cursor-pointer ${
                      selectedProductId === p.id
                        ? 'bg-sky-500 text-slate-950 font-black shadow-sm'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    {p.size} ({p.chemistry.toUpperCase()})
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Step 3: Daily Usage & Environmental Adjustments */}
          <div className="bg-slate-950/80 rounded-2xl p-4 sm:p-5 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400 flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center text-xs">3</span>
                <span>Tần suất sử dụng ước tính:</span>
              </label>
              <div className="text-right">
                <span className="text-xl sm:text-2xl font-black text-sky-400 font-mono">
                  {dailyUsage}
                </span>
                <span className="text-xs text-slate-300 ml-1.5 font-bold">
                  {currentDevice.unitLabel}
                </span>
              </div>
            </div>

            {/* Slider */}
            <input
              type="range"
              min={currentDevice.unitMultiplier ? 1 : 0.2}
              max={currentDevice.maxDailyHours}
              step={currentDevice.unitMultiplier ? 1 : 0.2}
              value={dailyUsage}
              onChange={(e) => setDailyUsage(parseFloat(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-400"
            />

            <div className="flex justify-between text-[10px] text-slate-400 font-mono">
              <span>Thấp (ít dùng)</span>
              <span>Trung bình</span>
              <span>Cường độ cao</span>
            </div>

            {/* Advanced environmental toggles */}
            <div className="pt-3 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Temperature Selector */}
              <div>
                <span className="text-[11px] text-slate-400 font-mono block mb-1.5">
                  Nhiệt độ môi trường hoạt động:
                </span>
                <div className="flex gap-1.5">
                  <button
                    onClick={() => setAmbientTemp('cold')}
                    className={`flex-1 py-1.5 rounded-xl text-[11px] font-bold transition-all cursor-pointer ${
                      ambientTemp === 'cold'
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/50'
                        : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-slate-200'
                    }`}
                  >
                    Băng giá (-20°C)
                  </button>
                  <button
                    onClick={() => setAmbientTemp('normal')}
                    className={`flex-1 py-1.5 rounded-xl text-[11px] font-bold transition-all cursor-pointer ${
                      ambientTemp === 'normal'
                        ? 'bg-sky-500/20 text-sky-300 border border-sky-400/50'
                        : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-slate-200'
                    }`}
                  >
                    Tiêu chuẩn (25°C)
                  </button>
                  <button
                    onClick={() => setAmbientTemp('hot')}
                    className={`flex-1 py-1.5 rounded-xl text-[11px] font-bold transition-all cursor-pointer ${
                      ambientTemp === 'hot'
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-400/50'
                        : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-slate-200'
                    }`}
                  >
                    Nắng gắt (45°C)
                  </button>
                </div>
              </div>

              {/* High Drain Mode */}
              <div>
                <span className="text-[11px] text-slate-400 font-mono block mb-1.5">
                  Chế độ tải thiết bị:
                </span>
                <button
                  onClick={() => setIsHighPerformanceMode(!isHighPerformanceMode)}
                  className={`w-full py-1.5 px-3 rounded-xl text-[11px] font-bold transition-all flex items-center justify-between cursor-pointer border ${
                    isHighPerformanceMode
                      ? 'bg-amber-500/20 border-amber-400/50 text-amber-300'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <span>Chế độ Turbo / Công suất cực đại (+35% tải)</span>
                  <span className={`w-3.5 h-3.5 rounded-full ${isHighPerformanceMode ? 'bg-amber-400' : 'bg-slate-700'}`}></span>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Longevity Calculation Results & Product Card (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          
          {/* Main Calculation Card */}
          <div className="bg-gradient-to-b from-slate-950 via-slate-900 to-black rounded-3xl p-6 border-2 border-sky-500/40 shadow-[0_15px_35px_rgba(0,0,0,0.7)] relative overflow-hidden flex flex-col justify-between">
            {/* Ambient blue highlight */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-sky-500/20 rounded-full blur-3xl pointer-events-none"></div>

            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400">
                  KẾT QUẢ ĐO KIỂM THỜI LƯỢNG
                </span>
                <span className="text-[10px] bg-sky-500/20 text-sky-300 border border-sky-500/30 px-2 py-0.5 rounded-full font-bold">
                  Dự báo độ chính xác 98%
                </span>
              </div>

              {/* Big Days Display */}
              <div className="my-6 text-center">
                <span className="text-[11px] uppercase tracking-widest text-slate-400 font-mono block">
                  Thời gian hoạt động dự kiến
                </span>
                <div className="flex items-baseline justify-center gap-2 mt-1">
                  <span className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-white to-sky-300 tracking-tight drop-shadow-[0_0_20px_rgba(56,189,248,0.5)] font-mono">
                    {calculationResult?.daysExpected}
                  </span>
                  <span className="text-2xl sm:text-3xl font-black text-sky-400">
                    NGÀY
                  </span>
                </div>
                
                {/* Secondary breakdown (months/years) */}
                <div className="mt-2 text-sm text-slate-300 font-semibold flex items-center justify-center gap-2">
                  <span>Tương đương khoảng</span>
                  <strong className="text-white font-black bg-slate-800/80 px-2 py-0.5 rounded-md border border-slate-700">
                    {calculationResult?.monthsExpected} tháng
                  </strong>
                  <span>({calculationResult?.yearsExpected} năm)</span>
                </div>

                {/* If rechargeable: highlight cycle life */}
                {calculationResult?.isRechargeable && (
                  <div className="mt-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-2.5 text-center">
                    <span className="text-[11px] font-bold text-emerald-400 flex items-center justify-center gap-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      Pin Sạc Lại: Độ bền {calculationResult.cycles.toLocaleString()} chu kỳ nạp xả!
                    </span>
                    <span className="text-[10px] text-slate-300 block mt-0.5">
                      Tổng vòng đời sử dụng lên đến <strong>~{calculationResult.totalRechargeLifespanYears} năm</strong> (Tiết kiệm hàng triệu đồng).
                    </span>
                  </div>
                )}
              </div>

              {/* Detailed metrics breakdown */}
              <div className="bg-slate-950/80 rounded-2xl p-4 border border-slate-800/80 space-y-2 text-xs font-mono">
                <div className="flex justify-between text-slate-400">
                  <span>Dung lượng danh định pin:</span>
                  <span className="text-white font-bold">{selectedProduct.capacity}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Dung lượng hữu dụng thực tế:</span>
                  <span className="text-sky-300 font-bold">{calculationResult?.effectiveCapacity.toLocaleString()} mAh</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Mức tiêu thụ điện / ngày:</span>
                  <span className="text-amber-400 font-bold">~{calculationResult?.dailyMah} mAh/ngày</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Cam kết chống rò rỉ:</span>
                  <span className="text-emerald-400 font-bold">100% PowerLock Hoàn Tiền</span>
                </div>
              </div>
            </div>

            {/* Selected Product Spotlight Mini Card & Direct Add To Cart */}
            <div className="mt-6 pt-4 border-t border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-16 h-20 shrink-0 bg-slate-900 rounded-xl border border-slate-800 flex items-center justify-center overflow-hidden">
                  <BatteryVisual
                    size={selectedProduct.size}
                    chemistry={selectedProduct.chemistry}
                    voltage={selectedProduct.voltage}
                    name={selectedProduct.name}
                    className="scale-40 origin-center"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <span className="text-[10px] text-sky-400 font-mono font-bold uppercase block truncate">
                    {selectedProduct.series}
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-white truncate">
                    {selectedProduct.name}
                  </h4>
                  <div className="flex items-baseline gap-2 mt-0.5">
                    <span className="text-sm font-black text-sky-400">
                      {selectedProduct.packOptions[0]?.price.toLocaleString()}đ
                    </span>
                    <span className="text-[10px] text-slate-400">
                      /{selectedProduct.packOptions[0]?.name}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-2 mt-4">
                <button
                  onClick={() => onViewDetails(selectedProduct)}
                  className="px-3 py-2.5 rounded-xl border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white text-xs font-bold transition-all text-center cursor-pointer"
                >
                  Xem chi tiết pin
                </button>
                <button
                  onClick={() => {
                    const pack = selectedProduct.packOptions.find(p => p.isPopular) || selectedProduct.packOptions[0];
                    onAddToCart(selectedProduct, pack);
                  }}
                  className="px-3 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-black text-xs transition-all flex items-center justify-center gap-1.5 shadow-lg shadow-sky-500/25 cursor-pointer"
                >
                  <ShoppingCart className="w-3.5 h-3.5" />
                  <span>Mua dòng pin này</span>
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
