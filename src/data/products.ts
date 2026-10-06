import { BatteryProduct, DeviceRecommendation } from '../types/battery';

export const PRODUCTS: BatteryProduct[] = [
  // --- 1. ALKALINE KIỀM CHÍNH ---
  {
    id: 'h-aa-alkaline',
    name: 'Hbattery Ultra Alkaline AA (LR6)',
    series: 'Ultra Alkaline Series',
    tagline: 'Năng lượng kiềm cao cấp - Bền gấp 12 lần',
    code: 'LR6 / MN1500 / AM3',
    size: 'AA',
    chemistry: 'alkaline',
    voltage: '1.5V',
    capacity: '2,950 mAh',
    shelfLifeYears: 10,
    operatingTemp: '-20°C đến 54°C',
    badge: 'Bán chạy số 1',
    description: 'Dòng pin kiềm cao cấp bán chạy nhất của Hbattery. Ứng dụng công nghệ lõi High-Density Zinc và màng ngăn ion mật độ cao, giúp cung cấp điện áp ổn định liên tục cho các thiết bị tiêu hao điện năng cao.',
    features: [
      'Công nghệ chống rò rỉ PowerLock kép 10 năm không chảy nước',
      'Thời hạn bảo quản lên tới 10 năm tại điều kiện tiêu chuẩn',
      'Không chứa Thủy ngân (0% Hg) và Cadmium (0% Cd) - thân thiện môi trường',
      'Đạt chuẩn kiểm định an toàn xuất khẩu IEC 60086'
    ],
    recommendedDevices: [
      'Khóa cửa thông minh vân tay (Kaadas, Yale, Bosch, Samsung)',
      'Chuột máy tính không dây & Bàn phím Bluetooth',
      'Micro hát karaoke gia đình & sân khấu',
      'Đồ chơi xe điều khiển từ xa có động cơ tốc độ cao',
      'Đèn pin dã ngoại công suất lớn'
    ],
    warningNote: 'Pin dùng 1 lần (Primary Battery). Tuyệt đối KHÔNG ĐƯỢC CẮM VÀO ĐỘNG CƠ SẠC vì có thể gây phồng rộp và cháy nổ.',
    packOptions: [
      { id: 'p-2', name: 'Vỉ 2 viên', count: 2, price: 32000, originalPrice: 38000 },
      { id: 'p-4', name: 'Vỉ 4 viên', count: 4, price: 59000, originalPrice: 72000, isPopular: true },
      { id: 'p-10', name: 'Hộp 10 viên (Tiết kiệm)', count: 10, price: 139000, originalPrice: 175000 },
      { id: 'p-40', name: 'Thùng 40 viên (Công trình / Đại lý)', count: 40, price: 499000, originalPrice: 650000 }
    ],
    rating: 4.9,
    reviewCount: 1420,
    inStock: true,
    colorScheme: {
      primary: 'from-sky-600 to-blue-800',
      accent: '#0284c7',
      border: 'border-sky-500/30'
    }
  },
  {
    id: 'h-aaa-alkaline',
    name: 'Hbattery Ultra Alkaline AAA (LR03)',
    series: 'Ultra Alkaline Series',
    tagline: 'Kích thước nhỏ gọn - Cường độ phóng điện mạnh mẽ',
    code: 'LR03 / MN2400 / Micro',
    size: 'AAA',
    chemistry: 'alkaline',
    voltage: '1.5V',
    capacity: '1,250 mAh',
    shelfLifeYears: 10,
    operatingTemp: '-20°C đến 54°C',
    badge: 'Khuyên dùng cho Remote',
    description: 'Pin đũa AAA Alkaline Hbattery là lựa chọn hoàn hảo cho tất cả thiết bị điều khiển từ xa, nhiệt kế hồng ngoại gia đình và thiết bị y tế cầm tay.',
    features: [
      'Khả năng xả xung vượt trội cho remote giọng nói thông minh',
      'Vỏ bọc thép mạ niken chống oxy hóa và rỉ sét cực tốt',
      'Bảo quản an toàn 10 năm trong tủ lưu trữ gia đình',
      'Không chứa hóa chất độc hại gây ô nhiễm kim loại nặng'
    ],
    recommendedDevices: [
      'Remote TV thông minh (Samsung, Sony, LG Magic Remote)',
      'Điều khiển máy lạnh / quạt điều hòa',
      'Nhiệt kế đo trán điện tử Omron, Microlife',
      'Bút trình chiếu slide thuyết trình laser',
      'Máy rửa mặt cầm tay cá nhân'
    ],
    warningNote: 'Pin dùng 1 lần (Primary Battery). Tuyệt đối KHÔNG SẠC LẠI.',
    packOptions: [
      { id: 'p-2', name: 'Vỉ 2 viên', count: 2, price: 30000, originalPrice: 35000 },
      { id: 'p-4', name: 'Vỉ 4 viên', count: 4, price: 55000, originalPrice: 68000, isPopular: true },
      { id: 'p-10', name: 'Hộp 10 viên (Tiết kiệm)', count: 10, price: 129000, originalPrice: 160000 },
      { id: 'p-40', name: 'Thùng 40 viên', count: 40, price: 479000, originalPrice: 620000 }
    ],
    rating: 4.9,
    reviewCount: 980,
    inStock: true,
    colorScheme: {
      primary: 'from-sky-500 to-indigo-800',
      accent: '#0284c7',
      border: 'border-sky-500/30'
    }
  },
  {
    id: 'h-aaaa-alkaline',
    name: 'Hbattery Micro Alkaline AAAA (LR61)',
    series: 'Precision Micro Alkaline',
    tagline: 'Pin 4A siêu mảnh - Bút cảm ứng Surface & Thiết bị đồ họa',
    code: 'AAAA / LR61 / E96 / MN2500',
    size: 'AAAA',
    chemistry: 'alkaline',
    voltage: '1.5V',
    capacity: '600 mAh',
    shelfLifeYears: 5,
    operatingTemp: '-10°C đến 50°C',
    badge: 'Chuyên Bút Surface Pen',
    description: 'Dòng pin hình trụ siêu mảnh AAAA (Quadruple-A) Hbattery chuyên biệt cho bút cảm ứng Microsoft Surface Pen, bút vẽ đồ họa kỹ thuật số Wacom và đèn soi y tế bác sĩ.',
    features: [
      'Đường kính siêu mảnh chỉ 8.3mm, dài 42.5mm',
      'Điện áp 1.5V cực kỳ ổn định cho cảm ứng lực 4,096 mức trên màn hình máy tính',
      'Bảo quản 5 năm không tự xả'
    ],
    recommendedDevices: [
      'Bút cảm ứng Microsoft Surface Pro Pen, Surface Slim Pen đời đầu',
      'Bút cảm ứng Dell Active Pen, HP Active Stylus, Lenovo Pen',
      'Đèn soi đồng tử mắt y tế của bác sĩ',
      'Tai nghe trợ thính cổ điển và máy đo đường huyết siêu nhỏ'
    ],
    warningNote: 'Pin dùng 1 lần. Tuyệt đối không cắm sạc điện.',
    packOptions: [
      { id: 'p-2', name: 'Vỉ 2 viên cao cấp', count: 2, price: 45000, originalPrice: 55000, isPopular: true },
      { id: 'p-4', name: 'Vỉ 4 viên (Tiết kiệm)', count: 4, price: 82000, originalPrice: 105000 }
    ],
    rating: 4.94,
    reviewCount: 420,
    inStock: true,
    colorScheme: {
      primary: 'from-sky-500 to-blue-700',
      accent: '#0ea5e9',
      border: 'border-sky-400/30'
    }
  },
  {
    id: 'h-c-alkaline',
    name: 'Hbattery Max Power C (LR14)',
    series: 'Ultra Alkaline Series',
    tagline: 'Pin trung loại C - Năng lượng cho thiết bị tải nặng',
    code: 'LR14 / Baby / Size C / AM2',
    size: 'C',
    chemistry: 'alkaline',
    voltage: '1.5V',
    capacity: '7,800 mAh',
    shelfLifeYears: 10,
    operatingTemp: '-20°C đến 54°C',
    badge: 'Dung lượng cực khủng',
    description: 'Pin trung loại C Hbattery cung cấp năng lượng khổng lồ cho các thiết bị như máy hút sữa trẻ em, đài radio cắm trại cổ điển, đèn pin tuần tra đêm và thiết bị đồ chơi lớn.',
    features: [
      'Dung lượng lên đến 7,800mAh - thời gian chạy bền bỉ kéo dài',
      'Vỏ thép cường lực chống ăn mòn và chống va đập rơi vỡ',
      'Không chứa chì, thủy ngân hay cadmium độc hại'
    ],
    recommendedDevices: [
      'Máy hút sữa mẹ Medela loại cắm pin',
      'Đài Radio cắm trại, loa nghe kinh Phật cầm tay',
      'Đèn pin tuần tra bảo vệ ban đêm',
      'Đồ chơi robot và tàu hỏa lớn'
    ],
    warningNote: 'Pin dùng 1 lần. Không được sạc lại.',
    packOptions: [
      { id: 'p-2', name: 'Vỉ 2 viên', count: 2, price: 62000, originalPrice: 75000, isPopular: true },
      { id: 'p-6', name: 'Lốc 6 viên', count: 6, price: 175000, originalPrice: 220000 }
    ],
    rating: 4.88,
    reviewCount: 290,
    inStock: true,
    colorScheme: {
      primary: 'from-sky-600 to-blue-900',
      accent: '#0284c7',
      border: 'border-sky-500/30'
    }
  },
  {
    id: 'h-d-alkaline',
    name: 'Hbattery Max Power D (LR20)',
    series: 'Ultra Alkaline Series',
    tagline: 'Pin đại loại D - Chuyên bếp gas âm & Bình nóng lạnh',
    code: 'LR20 / Mono / Size D / AM1',
    size: 'D',
    chemistry: 'alkaline',
    voltage: '1.5V',
    capacity: '17,500 mAh',
    shelfLifeYears: 10,
    operatingTemp: '-20°C đến 54°C',
    badge: 'Chuyên Bếp Gas Âm',
    description: 'Pin đại size D Hbattery mang đến dung lượng khủng khiếp 17,500mAh. Đây là giải pháp đánh lửa tin cậy cho toàn bộ hệ thống bếp gas âm cao cấp (Rinnai, Bosch, Hafele, Electrolux) và đèn cứu hộ hải đảo.',
    features: [
      'Dung lượng 17,500mAh - 1 viên dùng đánh lửa bếp gas tới 2-3 năm liên tục',
      'Tia lửa đánh mạnh dứt khoát không kẹt gas',
      'Đảm bảo 100% không chảy nước làm han gỉ hộc pin bếp nhà bạn'
    ],
    recommendedDevices: [
      'Bếp gas âm cao cấp (Rinnai, Bosch, Sunhouse, Electrolux, Teka)',
      'Bình nước nóng gas đánh lửa tự động',
      'Đèn tuần tra hàng hải, phao cứu sinh báo hiệu biển',
      'Đồng hồ quả lắc treo tường cổ'
    ],
    warningNote: 'Pin đại dùng 1 lần. Tuyệt đối không cắm sạc điện.',
    packOptions: [
      { id: 'p-2', name: 'Vỉ 2 viên', count: 2, price: 82000, originalPrice: 99000, isPopular: true },
      { id: 'p-6', name: 'Lốc 6 viên', count: 6, price: 235000, originalPrice: 290000 }
    ],
    rating: 4.97,
    reviewCount: 890,
    inStock: true,
    colorScheme: {
      primary: 'from-sky-600 to-blue-950',
      accent: '#0284c7',
      border: 'border-sky-500/40'
    }
  },
  {
    id: 'h-9v-alkaline',
    name: 'Hbattery Pro Alkaline 9V (6LR61)',
    series: 'Ultra Alkaline Series',
    tagline: 'Pin vuông 9V an toàn cao - Báo cháy & Micro sân khấu',
    code: '6LR61 / MN1604 / PP3 / 9V Block',
    size: '9V',
    chemistry: 'alkaline',
    voltage: '9.0V',
    capacity: '600 mAh',
    shelfLifeYears: 7,
    operatingTemp: '-20°C đến 50°C',
    badge: 'An toàn báo cháy',
    description: 'Pin vuông 9V Alkaline cao cấp từ Hbattery được tin dùng trong thiết bị báo khói khẩn cấp tòa nhà, micro không dây chuyên nghiệp và thiết bị đo vạn năng điện tử.',
    features: [
      'Cung cấp điện áp chuẩn 9V ổn định cho dải tần âm thanh micro trung thực',
      'Thiết kế 6 cell kiềm bên trong bọc vỏ kim loại kín tuyệt đối',
      'Tuổi thọ lên đến 3-5 năm liên tục trong đầu báo khói gia đình'
    ],
    recommendedDevices: [
      'Đầu báo cháy, cảm biến khói báo động tòa nhà và gia đình',
      'Micro sân khấu chuyên nghiệp Shure, Sennheiser loại dùng 9V',
      'Đồng hồ đo điện vạn năng (VOM Fluke, Sanwa, Hioki)',
      'Mạch đàn Guitar điện, phơ đàn Guitar (Effect Pedal)',
      'Đồ chơi máy bay không người lái điều khiển tầm xa'
    ],
    warningNote: 'Pin vuông 9V dùng 1 lần. Không sạc lại. Chú ý lắp đúng cực âm dương (+ / -).',
    packOptions: [
      { id: 'p-1', name: 'Vỉ 1 viên đơn', count: 1, price: 42000, originalPrice: 50000 },
      { id: 'p-2', name: 'Vỉ 2 viên', count: 2, price: 79000, originalPrice: 95000, isPopular: true },
      { id: 'p-10', name: 'Hộp 10 viên (Âm thanh / Tòa nhà)', count: 10, price: 360000, originalPrice: 450000 }
    ],
    rating: 4.92,
    reviewCount: 540,
    inStock: true,
    colorScheme: {
      primary: 'from-sky-700 to-slate-900',
      accent: '#0284c7',
      border: 'border-sky-500/40'
    }
  },
  {
    id: 'h-a23-alkaline',
    name: 'Hbattery High Voltage A23 (12V)',
    series: 'High Voltage Micro Alkaline',
    tagline: 'Điện áp cao 12V - Chuyên chuông cửa & Cửa cuốn',
    code: 'A23 / 23A / MN21 / MS21 / V23GA',
    size: 'A23',
    chemistry: 'alkaline',
    voltage: '12V',
    capacity: '55 mAh',
    shelfLifeYears: 5,
    operatingTemp: '-10°C đến 50°C',
    badge: 'Chuyên Cửa Cuốn & Chuông',
    description: 'Pin trụ nhỏ 12V Hbattery A23 chứa tổ hợp 8 cell vi mô tạo ra điện thế cao 12V, cho sóng RF phát xa đến 50 mét xuyên tường, kích hoạt cửa cuốn và chuông báo tức thì.',
    features: [
      'Điện áp cao 12V sóng phát cực khỏe xuyên tầng xuyên tường',
      'Chống rỉ sét cực điểm trong điều kiện thời tiết nhiệt đới ẩm Việt Nam',
      'Độ tin cậy được hàng triệu thợ nhôm kính & cửa cuốn tin dùng'
    ],
    recommendedDevices: [
      'Remote điều khiển cửa cuốn Austdoor, BossDoor, Eurodoor',
      'Chuông cửa không dây thông minh (Panasonic, Xiaomi, Cacazi)',
      'Remote bật tắt đèn chiếu sáng từ xa RF',
      'Bút thử điện và đèn còi cảnh báo chống trộm'
    ],
    warningNote: 'Pin 12V dùng 1 lần. Không sạc lại. Chú ý kích thước (ngắn hơn pin AAA).',
    packOptions: [
      { id: 'p-1', name: 'Vỉ 1 viên', count: 1, price: 18000, originalPrice: 22000 },
      { id: 'p-5', name: 'Vỉ 5 viên (Tiết kiệm)', count: 5, price: 72000, originalPrice: 90000, isPopular: true }
    ],
    rating: 4.91,
    reviewCount: 780,
    inStock: true,
    colorScheme: {
      primary: 'from-sky-600 to-indigo-800',
      accent: '#0284c7',
      border: 'border-sky-500/30'
    }
  },
  {
    id: 'h-a27-alkaline',
    name: 'Hbattery High Voltage A27 (12V)',
    series: 'High Voltage Micro Alkaline',
    tagline: 'Điện áp 12V siêu mảnh - Chuyên remote cổng tự động',
    code: 'A27 / 27A / MN27 / GP27A / L828',
    size: 'A27',
    chemistry: 'alkaline',
    voltage: '12V',
    capacity: '28 mAh',
    shelfLifeYears: 5,
    operatingTemp: '-10°C đến 50°C',
    badge: 'Mảnh 12V Remote Cổng',
    description: 'Phiên bản nhỏ gọn hơn của A23, đường kính chỉ 8mm, chuyên dùng cho remote cổng sắt tự động, điều khiển quạt trần cao cấp và remote ô tô đời cũ.',
    features: [
      'Đường kính nhỏ 8.0mm, chiều dài 28.2mm',
      'Điện áp 12V ổn định phóng xung xa',
      'Vỏ bọc thép khép kín chống bay hơi dung dịch điện phân'
    ],
    recommendedDevices: [
      'Remote cổng tự động mở cánh / lùa tự động (FAAC, BFT, DEA)',
      'Remote quạt trần cao cấp Panasonic, Hunter, KDK',
      'Hệ thống điều khiển chống trộm xe máy vi mô'
    ],
    warningNote: 'Pin 12V dùng 1 lần. Tuyệt đối không cắm sạc điện.',
    packOptions: [
      { id: 'p-1', name: 'Vỉ 1 viên', count: 1, price: 18000, originalPrice: 22000 },
      { id: 'p-5', name: 'Vỉ 5 viên', count: 5, price: 72000, originalPrice: 90000, isPopular: true }
    ],
    rating: 4.88,
    reviewCount: 340,
    inStock: true,
    colorScheme: {
      primary: 'from-sky-500 to-purple-800',
      accent: '#0284c7',
      border: 'border-sky-400/30'
    }
  },
  {
    id: 'h-n-alkaline',
    name: 'Hbattery Micro Alkaline Size N (LR1)',
    series: 'Specialty Micro Alkaline',
    tagline: 'Pin trụ lùn 1.5V - Báo động cửa & Đèn soi y tế',
    code: 'Size N / LR1 / E90 / MN9100 / AM5',
    size: 'N',
    chemistry: 'alkaline',
    voltage: '1.5V',
    capacity: '800 mAh',
    shelfLifeYears: 5,
    operatingTemp: '-10°C đến 50°C',
    badge: 'Hiếm & Chuyên dụng',
    description: 'Pin cỡ N (LR1) ngắn hơn một nửa so với pin AA, đường kính 12mm cao 30.2mm, chuyên dụng cho cảm biến chống trộm gắn cửa sổ, thiết bị y tế và micro cài áo không dây.',
    features: [
      'Kích thước chuẩn quốc tế LR1 / Size N',
      'Mật độ điện tích cao, giữ áp 1.5V ổn định',
      'Khả năng chống rò rỉ bảo vệ thiết bị an ninh'
    ],
    recommendedDevices: [
      'Cảm biến từ gắn cửa sổ báo trộm không dây',
      'Microphone cài áo không dây mini',
      'Bút đo thông mạch kỹ thuật số',
      'Đèn pin móc khóa cao cấp'
    ],
    warningNote: 'Pin dùng 1 lần. Không sạc lại.',
    packOptions: [
      { id: 'p-2', name: 'Vỉ 2 viên', count: 2, price: 38000, originalPrice: 48000, isPopular: true },
      { id: 'p-6', name: 'Hộp 6 viên', count: 6, price: 99000, originalPrice: 130000 }
    ],
    rating: 4.86,
    reviewCount: 190,
    inStock: true,
    colorScheme: {
      primary: 'from-sky-600 to-slate-800',
      accent: '#0284c7',
      border: 'border-sky-500/30'
    }
  },
  {
    id: 'h-4lr44-alkaline',
    name: 'Hbattery High Voltage 4LR44 (6V)',
    series: 'High Voltage Micro Alkaline',
    tagline: 'Pin trụ 6V - Chuyên máy ảnh film Canon AE-1 & Vòng cổ thú cưng',
    code: '4LR44 / 28A / A544 / PX28A / V4034PX',
    size: '4LR44',
    chemistry: 'alkaline',
    voltage: '6.0V',
    capacity: '165 mAh',
    shelfLifeYears: 5,
    operatingTemp: '-10°C đến 50°C',
    badge: 'Chuyên Máy Ảnh Film 6V',
    description: 'Pin trụ cao 6V chứa 4 cell kiềm ghép nối tiếp, cung cấp nguồn năng lượng chuẩn mực cho màn trập cơ học của máy ảnh film huyền thoại Canon AE-1, vòng cổ chống sủa huấn luyện chó và bút thử điện.',
    features: [
      'Điện áp 6V mạnh mẽ giúp màn trập máy ảnh film nhảy dứt khoát',
      'Vỏ kim loại chống biến dạng cơ học',
      'Không chứa hóa chất cấm theo chỉ thị RoHS'
    ],
    recommendedDevices: [
      'Máy ảnh film Canon AE-1, Canon AE-1 Program, Canon A-1',
      'Vòng cổ huấn luyện thú cưng, vòng chống sủa chó',
      'Bút thử điện chuyên dụng trong công nghiệp'
    ],
    warningNote: 'Pin dùng 1 lần. Không sạc lại.',
    packOptions: [
      { id: 'p-1', name: 'Vỉ 1 viên đơn', count: 1, price: 35000, originalPrice: 45000 },
      { id: 'p-5', name: 'Vỉ 5 viên (Tiết kiệm)', count: 5, price: 149000, originalPrice: 190000, isPopular: true }
    ],
    rating: 4.93,
    reviewCount: 310,
    inStock: true,
    colorScheme: {
      primary: 'from-sky-600 to-indigo-950',
      accent: '#0284c7',
      border: 'border-sky-500/40'
    }
  },

  // --- 2. LITHIUM PRIMARY DÙNG 1 LẦN (SƠ CẤP KHÔNG SẠC) ---
  {
    id: 'h-aa-lithium',
    name: 'Hbattery Extreme Lithium AA (FR6)',
    series: 'Extreme Lithium Primary',
    tagline: 'Pin dùng 1 lần bền nhất thế giới - Lưu trữ 20 năm',
    code: 'FR6 / Li-FeS2 / 1.5V Lithium',
    size: 'AA',
    chemistry: 'lithium-primary',
    voltage: '1.5V',
    capacity: '3,500 mAh',
    shelfLifeYears: 20,
    operatingTemp: '-40°C đến 60°C (Cực hạn)',
    badge: 'Đẳng cấp Quân sự',
    description: 'Dòng pin Lithium dùng 1 lần tối tân nhất của Hbattery. Nhẹ hơn 33% so với pin kiềm, hoạt động hoàn hảo ở nhiệt độ băng giá tuyết trắng -40°C đến nắng gắt sa mạc 60°C. Lý tưởng cho máy bay Flycam, thiết bị thám hiểm leo núi và đèn flash nhiếp ảnh gia.',
    features: [
      'Thời hạn sử dụng lên đến 20 năm không suy giảm điện tích',
      'Khối lượng siêu nhẹ chỉ 14.5g/viên (nhẹ hơn kiềm 33%)',
      'Điện áp ra cực kỳ ổn định 1.5V từ đầu đến khi cạn kiệt năng lượng',
      'Khả năng chống chảy rỉ 100% trong điều kiện thời tiết khắc nghiệt'
    ],
    recommendedDevices: [
      'Đèn Flash máy ảnh chuyên nghiệp (Canon, Sony, Godox)',
      'Thiết bị định vị GPS dã ngoại Garmin',
      'Camera an ninh chuông cửa không dây ngoài trời lạnh',
      'Máy bộ đàm cứu hộ, thiết bị y tế khẩn cấp',
      'Máy bay mô hình, thiết bị đo trắc địa'
    ],
    warningNote: 'Pin Lithium sơ cấp KHÔNG SẠC. Cấm sạc dưới mọi hình thức vì điện hóa Lithium kim loại không đảo chiều được.',
    packOptions: [
      { id: 'p-2', name: 'Vỉ 2 viên cao cấp', count: 2, price: 95000, originalPrice: 120000 },
      { id: 'p-4', name: 'Vỉ 4 viên (Phổ biến)', count: 4, price: 179000, originalPrice: 220000, isPopular: true },
      { id: 'p-10', name: 'Hộp 10 viên nhiếp ảnh', count: 10, price: 420000, originalPrice: 520000 }
    ],
    rating: 5.0,
    reviewCount: 456,
    inStock: true,
    colorScheme: {
      primary: 'from-cyan-500 to-sky-700',
      accent: '#06b6d4',
      border: 'border-cyan-500/40'
    }
  },
  {
    id: 'h-aaa-lithium',
    name: 'Hbattery Extreme Lithium AAA (FR03)',
    series: 'Extreme Lithium Primary',
    tagline: 'Pin đũa Lithium siêu nhẹ - Hoạt động băng tuyết -40°C',
    code: 'FR03 / Li-FeS2 / 1.5V Lithium Micro',
    size: 'AAA',
    chemistry: 'lithium-primary',
    voltage: '1.5V',
    capacity: '1,500 mAh',
    shelfLifeYears: 20,
    operatingTemp: '-40°C đến 60°C',
    badge: 'Siêu nhẹ & Thám hiểm',
    description: 'Phiên bản pin đũa AAA Lithium dùng 1 lần siêu nhẹ chỉ 7.6g, chống đóng băng dung dịch điện phân, giữ cho đèn pin đeo đầu thám hiểm leo núi và máy đo GPS luôn rực sáng trong đêm tuyết giá rét.',
    features: [
      'Thời hạn bảo quản 20 năm cất trữ trong balô cứu hộ',
      'Khối lượng chỉ 7.6g/viên giúp giảm tối đa trọng lượng hành lý',
      'Dòng xả ổn định không bị sụt áp khi trời lạnh'
    ],
    recommendedDevices: [
      'Đèn pin đeo trán thám hiểm Petzl, Black Diamond',
      'Đồng hồ đo áp suất leo núi, thiết bị định vị khẩn cấp',
      'Bộ phát tín hiệu cứu hộ SOS ngoài biển'
    ],
    warningNote: 'Pin Lithium dùng 1 lần. Tuyệt đối không cắm dock sạc.',
    packOptions: [
      { id: 'p-2', name: 'Vỉ 2 viên', count: 2, price: 90000, originalPrice: 110000 },
      { id: 'p-4', name: 'Vỉ 4 viên', count: 4, price: 169000, originalPrice: 210000, isPopular: true }
    ],
    rating: 4.96,
    reviewCount: 280,
    inStock: true,
    colorScheme: {
      primary: 'from-cyan-500 to-sky-800',
      accent: '#06b6d4',
      border: 'border-cyan-400/30'
    }
  },
  {
    id: 'h-cr123a-lithium',
    name: 'Hbattery Photo Lithium CR123A (3V)',
    series: 'Extreme Lithium Primary',
    tagline: 'Pin tác chiến độ bền cao - Cường độ xả xung mạnh',
    code: 'CR123A / CR17345 / EL123AP',
    size: 'CR123A',
    chemistry: 'lithium-primary',
    voltage: '3.0V',
    capacity: '1,600 mAh',
    shelfLifeYears: 10,
    operatingTemp: '-40°C đến 70°C',
    badge: 'Đèn pin tác chiến & An ninh',
    description: 'Dòng pin Lithium 3V sơ cấp không sạc chuyên dụng cho đèn pin tác chiến Surefire, máy ảnh phim chuyên nghiệp và camera an ninh không dây Arlo hoạt động ngoài trời mưa nắng.',
    features: [
      'Điện áp cao 3.0V xả xung siêu khủng cấp nguồn cho bóng LED công suất lớn',
      'Công nghệ Lithium-Manganese Dioxide (Li/MnO2) chịu nhiệt độ khắc nghiệt',
      'Không tự xả, lưu giữ 90% năng lượng sau 10 năm cất kho',
      'Tích hợp van xả áp suất an toàn chống quá nhiệt'
    ],
    recommendedDevices: [
      'Đèn pin tác chiến cao cấp (Surefire, Fenix, Nitecore, Olight)',
      'Camera an ninh thông minh không dây (Arlo Pro, Blink XT2)',
      'Máy ảnh phim 35mm cổ điển (Olympus mju II, Contax T2, Minolta)',
      'Hệ thống cảm biến chống trộm gia đình cao cấp'
    ],
    warningNote: 'PIN LITHIUM SƠ CẤP CHỈ DÙNG 1 LẦN. Không cắm vào dock sạc pin 16340/RCR123A.',
    packOptions: [
      { id: 'p-1', name: 'Vỉ 1 viên đơn', count: 1, price: 65000, originalPrice: 80000 },
      { id: 'p-2', name: 'Vỉ 2 viên (Chuẩn máy ảnh)', count: 2, price: 125000, originalPrice: 155000, isPopular: true },
      { id: 'p-4', name: 'Hộp 4 viên tác chiến', count: 4, price: 239000, originalPrice: 300000 }
    ],
    rating: 4.96,
    reviewCount: 712,
    inStock: true,
    colorScheme: {
      primary: 'from-sky-700 to-slate-900',
      accent: '#0284c7',
      border: 'border-sky-500/40'
    }
  },
  {
    id: 'h-cr2-lithium',
    name: 'Hbattery Photo Lithium CR2 (3V)',
    series: 'Extreme Lithium Primary',
    tagline: 'Chuyên máy ảnh chụp lấy liền Instax & Máy đo khoảng cách Golf',
    code: 'CR2 / CR15H270 / DLCR2',
    size: 'CR2',
    chemistry: 'lithium-primary',
    voltage: '3.0V',
    capacity: '900 mAh',
    shelfLifeYears: 10,
    operatingTemp: '-40°C đến 70°C',
    badge: 'Máy ảnh Fujifilm Instax',
    description: 'Pin Lithium 3V hình trụ ngắn chuyên biệt cho máy ảnh chụp lấy liền Fujifilm Instax Mini 25, 50s, 70 và máy đo cự ly ống nhòm golf laser.',
    features: [
      'Điện áp 3.0V sạc đèn flash máy ảnh cực nhanh chỉ trong vài giây',
      'Độ bền vượt trội, chụp được hơn 300 tấm phim ảnh',
      'Vỏ chống rò rỉ bảo vệ ống kính và bo mạch đắt tiền'
    ],
    recommendedDevices: [
      'Máy ảnh Fujifilm Instax Mini 25, Mini 50s, Mini 70',
      'Ống nhòm đo khoảng cách Laser chơi Golf (Bushnell, Nikon)',
      'Máy ảnh film ngắm chụp compact'
    ],
    warningNote: 'Pin dùng 1 lần. Không sạc lại.',
    packOptions: [
      { id: 'p-1', name: 'Vỉ 1 viên lẻ', count: 1, price: 65000, originalPrice: 80000 },
      { id: 'p-2', name: 'Vỉ 2 viên (Chụp Instax)', count: 2, price: 125000, originalPrice: 155000, isPopular: true }
    ],
    rating: 4.9,
    reviewCount: 380,
    inStock: true,
    colorScheme: {
      primary: 'from-sky-600 to-indigo-900',
      accent: '#0284c7',
      border: 'border-sky-500/30'
    }
  },
  {
    id: 'h-2cr5-lithium',
    name: 'Hbattery Photo Lithium 2CR5 (6V)',
    series: 'Extreme Lithium Primary',
    tagline: 'Khối pin đôi 6V - Chuyên máy ảnh film chuyên nghiệp Canon EOS',
    code: '2CR5 / DL245 / EL2CR5 / KL2CR5',
    size: '2CR5',
    chemistry: 'lithium-primary',
    voltage: '6.0V',
    capacity: '1,500 mAh',
    shelfLifeYears: 10,
    operatingTemp: '-20°C đến 60°C',
    badge: 'Máy Ảnh Film Chuyên Nghiệp',
    description: 'Pin khối đôi 6V kết hợp 2 cell lithium đặc biệt, cung cấp dòng điện 6V xả cực mạnh cho các dòng máy ảnh film SLR danh tiếng Canon EOS 1V, EOS 3, Nikon F50 và hệ thống lấy nét siêu tốc.',
    features: [
      'Điện thế 6.0V giúp mô-tơ cuốn phim tự động chạy êm và nhanh',
      'Vỏ đúc nguyên khối chống va đập và tiếp xúc hoàn hảo',
      'Bảo quản 10 năm không tụt áp'
    ],
    recommendedDevices: [
      'Máy ảnh film chuyên nghiệp Canon EOS 1N, EOS 3, EOS 5, EOS 50E',
      'Máy ảnh film Nikon F50, Pentax Z-1',
      'Thiết bị van nước cảm ứng hồng ngoại thông minh'
    ],
    warningNote: 'Pin Lithium sơ cấp dùng 1 lần. Tuyệt đối không cắm sạc điện.',
    packOptions: [
      { id: 'p-1', name: 'Vỉ 1 viên nguyên seal', count: 1, price: 120000, originalPrice: 150000, isPopular: true },
      { id: 'p-2', name: 'Hộp 2 viên (Thợ ảnh)', count: 2, price: 225000, originalPrice: 290000 }
    ],
    rating: 4.98,
    reviewCount: 230,
    inStock: true,
    colorScheme: {
      primary: 'from-sky-700 to-slate-950',
      accent: '#0284c7',
      border: 'border-sky-500/40'
    }
  },
  {
    id: 'h-crp2-lithium',
    name: 'Hbattery Photo Lithium CR-P2 (6V)',
    series: 'Extreme Lithium Primary',
    tagline: 'Khối pin 6V dẹt - Vòi rửa cảm ứng tự động & Máy ảnh Minolta',
    code: 'CR-P2 / BR-P2 / 223 / DL223A',
    size: 'CRP2',
    chemistry: 'lithium-primary',
    voltage: '6.0V',
    capacity: '1,400 mAh',
    shelfLifeYears: 10,
    operatingTemp: '-20°C đến 60°C',
    badge: 'Vòi Rửa Cảm Ứng & Máy Ảnh',
    description: 'Khối pin dẹt 6V Hbattery CR-P2 được trang bị phổ biến trong các hệ thống van xả tiểu tự động Toto, vòi cảm ứng Inax và máy ảnh film Minolta Dynax.',
    features: [
      'Kích thước chuẩn CR-P2 với chân cực mạ vàng tiếp xúc nhạy',
      'Độ tin cậy cực cao trong môi trường ẩm ướt nhà vệ sinh',
      'Thời gian hoạt động từ 2 đến 3 năm cho 50,000 lần xả nước'
    ],
    recommendedDevices: [
      'Hệ thống van xả bồn tiểu nam và vòi cảm ứng Toto, Inax, Caesar',
      'Máy ảnh film Minolta Dynax 7000i, Canon T90',
      'Thiết bị kiểm soát ra vào điện tử'
    ],
    warningNote: 'Pin dùng 1 lần. Không sạc lại.',
    packOptions: [
      { id: 'p-1', name: 'Vỉ 1 viên', count: 1, price: 120000, originalPrice: 150000, isPopular: true },
      { id: 'p-2', name: 'Hộp 2 viên', count: 2, price: 225000, originalPrice: 290000 }
    ],
    rating: 4.92,
    reviewCount: 180,
    inStock: true,
    colorScheme: {
      primary: 'from-sky-700 to-cyan-900',
      accent: '#0284c7',
      border: 'border-sky-500/30'
    }
  },

  // --- 3. PIN CÚC ÁO LITHIUM COIN CELL (3V) ---
  {
    id: 'h-cr2032-coin',
    name: 'Hbattery Coin Master CR2032 3V',
    series: 'Coin Master Lithium Cell',
    tagline: 'Vua pin cúc áo cho Smartkey & Cân điện tử',
    code: 'CR2032 / DL2032 / BR2032',
    size: 'CR2032',
    chemistry: 'lithium-coin',
    voltage: '3.0V',
    capacity: '240 mAh',
    shelfLifeYears: 10,
    operatingTemp: '-30°C đến 60°C',
    badge: 'Chìa khóa xe khuyên dùng',
    description: 'Pin cúc áo Lithium 3V Hbattery CR2032 độ tin cậy tuyệt đối. Được thiết kế chuyên biệt cho chìa khóa thông minh Smartkey ô tô/xe máy hiện đại, mạch chủ máy tính (CMOS BIOS), thẻ định vị và cân sức khỏe.',
    features: [
      'Công nghệ viền dập kín đa lớp ngăn chặn 100% rò rỉ axit',
      'Đóng gói vỉ chống trẻ em bóc nuốt (Child-Secure Blister)',
      'Tương thích tuyệt đối với mọi xe Honda SH, Mazda, Toyota, Hyundai, Kia',
      'Độ tự xả năng lượng cực thấp dưới 1% mỗi năm'
    ],
    recommendedDevices: [
      'Chìa khóa thông minh Smartkey (Honda SH, Lead, AirBlade, Vision)',
      'Smartkey xe hơi (Toyota, Hyundai, Kia, Mazda, Honda, Ford)',
      'Mainboard máy tính (Pin CMOS BIOS giữ giờ và cài đặt)',
      'Cân sức khỏe điện tử Xiaomi, Tanita, Omron',
      'Thẻ định vị hành lý Apple AirTag & SmartTag',
      'Máy đo đường huyết cá nhân OneTouch, Accu-Chek'
    ],
    warningNote: 'Pin dùng 1 lần (Primary Lithium Coin). Nguy hiểm: Để xa tầm tay trẻ nhỏ. Tuyệt đối không sạc lại.',
    packOptions: [
      { id: 'p-1', name: 'Vỉ 1 viên lẻ', count: 1, price: 20000, originalPrice: 25000 },
      { id: 'p-5', name: 'Vỉ 5 viên (Tiết kiệm)', count: 5, price: 79000, originalPrice: 100000, isPopular: true },
      { id: 'p-20', name: 'Hộp 20 viên (Gara / Cửa hàng chìa khóa)', count: 20, price: 280000, originalPrice: 380000 }
    ],
    rating: 4.95,
    reviewCount: 2150,
    inStock: true,
    colorScheme: {
      primary: 'from-sky-500 to-slate-800',
      accent: '#38bdf8',
      border: 'border-sky-400/30'
    }
  },
  {
    id: 'h-cr2025-coin',
    name: 'Hbattery Coin Master CR2025 3V',
    series: 'Coin Master Lithium Cell',
    tagline: 'Thiết kế siêu mỏng 2.5mm cho remote cao cấp',
    code: 'CR2025 / DL2025',
    size: 'CR2025',
    chemistry: 'lithium-coin',
    voltage: '3.0V',
    capacity: '170 mAh',
    shelfLifeYears: 10,
    operatingTemp: '-30°C đến 60°C',
    badge: 'Mỏng & Bền',
    description: 'Pin cúc áo mỏng hơn 0.7mm so với CR2032, chuyên dùng cho remote mỏng thẻ card, chìa khóa Mercedes-Benz, Audi, Nissan và bảng vẽ kỹ thuật số cho bé.',
    features: [
      'Độ dày chuẩn xác 2.5mm, đường kính 20mm',
      'Vật liệu vỏ thép không gỉ SUS304 cao cấp',
      'Điện thế 3.0V ổn định cao, độ nhạy truyền tín hiệu RF cực xa'
    ],
    recommendedDevices: [
      'Chìa khóa thông minh Mercedes-Benz, Audi, Nissan, Lexus',
      'Remote điều khiển mỏng quạt Dyson, quạt tháp Mitsubishi',
      'Bảng vẽ điện tử LCD tự xóa trẻ em',
      'Đèn LED trang trí nội thất & nến điện tử'
    ],
    warningNote: 'Pin dùng 1 lần. Không sạc lại. Tránh xa tầm tay trẻ em.',
    packOptions: [
      { id: 'p-1', name: 'Vỉ 1 viên', count: 1, price: 20000, originalPrice: 25000 },
      { id: 'p-5', name: 'Vỉ 5 viên', count: 5, price: 79000, originalPrice: 100000, isPopular: true },
      { id: 'p-20', name: 'Hộp 20 viên', count: 20, price: 280000, originalPrice: 380000 }
    ],
    rating: 4.9,
    reviewCount: 630,
    inStock: true,
    colorScheme: {
      primary: 'from-sky-600 to-slate-700',
      accent: '#0284c7',
      border: 'border-sky-500/30'
    }
  },
  {
    id: 'h-cr2016-coin',
    name: 'Hbattery Coin Master CR2016 3V',
    series: 'Coin Master Lithium Cell',
    tagline: 'Độ mỏng cực đỉnh 1.6mm - Chuyên đồng hồ Casio',
    code: 'CR2016 / DL2016',
    size: 'CR2016',
    chemistry: 'lithium-coin',
    voltage: '3.0V',
    capacity: '90 mAh',
    shelfLifeYears: 10,
    operatingTemp: '-30°C đến 60°C',
    badge: 'Đồng hồ Casio',
    description: 'Pin cúc áo 3V siêu mỏng 1.6mm, cấp nguồn cho đồng hồ thể thao điện tử Casio G-Shock, remote xe máy, đồ chơi siêu nhỏ.',
    features: [
      'Độ dày chỉ 1.6mm cực kỳ mỏng nhẹ',
      'Điện trở nội thấp, cung cấp dòng phát sáng đèn nền LCD đồng hồ tức thì',
      'Thời hạn sử dụng lên tới 10 năm'
    ],
    recommendedDevices: [
      'Đồng hồ đeo tay điện tử Casio G-Shock, Baby-G, F-91W',
      'Remote báo trộm xe máy, còi báo động',
      'Thước đo laser kỹ thuật số bỏ túi'
    ],
    warningNote: 'Pin dùng 1 lần. Không được sạc lại.',
    packOptions: [
      { id: 'p-1', name: 'Vỉ 1 viên', count: 1, price: 20000, originalPrice: 25000 },
      { id: 'p-5', name: 'Vỉ 5 viên', count: 5, price: 79000, originalPrice: 100000, isPopular: true }
    ],
    rating: 4.85,
    reviewCount: 410,
    inStock: true,
    colorScheme: {
      primary: 'from-sky-500 to-indigo-900',
      accent: '#0284c7',
      border: 'border-sky-400/30'
    }
  },
  {
    id: 'h-cr2450-coin',
    name: 'Hbattery Coin Master CR2450 3V',
    series: 'Coin Master Lithium Cell',
    tagline: 'Dung lượng khổng lồ 600mAh - Chuyên thiết bị Smart Home IoT',
    code: 'CR2450 / DL2450 / 5029LC',
    size: 'CR2450',
    chemistry: 'lithium-coin',
    voltage: '3.0V',
    capacity: '620 mAh',
    shelfLifeYears: 10,
    operatingTemp: '-30°C đến 60°C',
    badge: 'Chuyên Nhà Thông Minh',
    description: 'Pin cúc áo đường kính 24.5mm dày 5.0mm với dung lượng gấp 3 lần pin CR2032 thông thường. Hoạt động bền bỉ từ 2-3 năm trong các cảm biến nhà thông minh Zigbee/Matter kết nối 24/7.',
    features: [
      'Dung lượng cực đại 620mAh trong nhóm pin nút áo 3V',
      'Chống rò rỉ dung dịch điện phân ăn mòn vi mạch IoT',
      'Tương thích cảm biến Aqara, Tuya, Philips Hue, Sonoff'
    ],
    recommendedDevices: [
      'Cảm biến cửa và cảm biến chuyển động Aqara Hub / Zigbee',
      'Cảm biến nhiệt độ độ ẩm thông minh Philips Hue',
      'Thiết bị đo áp suất lốp ô tô van ngoài',
      'Khóa vân tay mini dùng pin nút áo'
    ],
    warningNote: 'Pin dùng 1 lần. Không sạc lại dưới bất kỳ tình huống nào.',
    packOptions: [
      { id: 'p-2', name: 'Vỉ 2 viên', count: 2, price: 58000, originalPrice: 70000 },
      { id: 'p-5', name: 'Vỉ 5 viên (Gói tiết kiệm IoT)', count: 5, price: 135000, originalPrice: 165000, isPopular: true }
    ],
    rating: 4.95,
    reviewCount: 520,
    inStock: true,
    colorScheme: {
      primary: 'from-sky-600 to-cyan-800',
      accent: '#0284c7',
      border: 'border-sky-500/30'
    }
  },
  {
    id: 'h-cr2430-coin',
    name: 'Hbattery Coin Master CR2430 3V',
    series: 'Coin Master Lithium Cell',
    tagline: 'Đường kính lớn 24.5mm dày 3.0mm - Đai đo nhịp tim & Cổng tự động',
    code: 'CR2430 / DL2430 / KL2430',
    size: 'CR2430',
    chemistry: 'lithium-coin',
    voltage: '3.0V',
    capacity: '300 mAh',
    shelfLifeYears: 10,
    operatingTemp: '-30°C đến 60°C',
    badge: 'Đai Nhịp Tim Thể Thao',
    description: 'Dòng pin cúc áo đường kính lớn 24.5mm nhưng độ dày chỉ 3.0mm, được thiết kế cho các loại dây đai cảm biến nhịp tim đeo ngực Garmin/Polar và remote điều khiển cửa tự động Sommer.',
    features: [
      'Dung lượng 300mAh, xả dòng đều cho cảm biến Bluetooth',
      'Tiếp xúc điện cực rộng chống move',
      'Bảo quản 10 năm'
    ],
    recommendedDevices: [
      'Dây đai đo nhịp tim ngực Garmin HRM-Pro, Polar H10',
      'Remote cửa cuốn & cổng tự động nhập khẩu châu Âu',
      'Thẻ chìa khóa xe Renault, Volvo'
    ],
    warningNote: 'Pin dùng 1 lần. Không sạc lại.',
    packOptions: [
      { id: 'p-1', name: 'Vỉ 1 viên', count: 1, price: 28000, originalPrice: 35000 },
      { id: 'p-5', name: 'Vỉ 5 viên', count: 5, price: 110000, originalPrice: 145000, isPopular: true }
    ],
    rating: 4.91,
    reviewCount: 260,
    inStock: true,
    colorScheme: {
      primary: 'from-sky-500 to-slate-900',
      accent: '#0284c7',
      border: 'border-sky-400/30'
    }
  },
  {
    id: 'h-cr1632-coin',
    name: 'Hbattery Coin Master CR1632 3V',
    series: 'Coin Master Lithium Cell',
    tagline: 'Chuyên chìa khóa Smartkey Toyota Camry, Lexus, Land Cruiser',
    code: 'CR1632 / DL1632 / ECR1632',
    size: 'CR1632',
    chemistry: 'lithium-coin',
    voltage: '3.0V',
    capacity: '140 mAh',
    shelfLifeYears: 10,
    operatingTemp: '-30°C đến 60°C',
    badge: 'Chuyên Xe Toyota / Lexus',
    description: 'Pin cúc áo đường kính 16mm dày 3.2mm được các kỹ sư Toyota và Lexus lựa chọn cho hầu hết các dòng xe cao cấp (Camry, Corolla Altis, Land Cruiser Prado, Lexus RX350, NX200t).',
    features: [
      'Tương thích hoàn hảo khay pin chìa khóa thông minh xe Toyota/Lexus',
      'Điện áp 3.0V xả mạnh giúp mở cửa thông minh cảm ứng tay nắm siêu nhạy',
      'Độ bền 2 đến 3 năm không lo hết pin giữa đường'
    ],
    recommendedDevices: [
      'Smartkey xe Toyota (Camry, Altis, Vios mới, Hilux, Fortuner, Cross)',
      'Smartkey xe sang Lexus (RX350, ES250, NX300, LX570, GX460)',
      'Cảm biến áp suất lốp ô tô Steelmate gắn ngoài',
      'Kính ngắm quang học gắn súng thể thao'
    ],
    warningNote: 'Pin dùng 1 lần. Tuyệt đối không sạc lại.',
    packOptions: [
      { id: 'p-1', name: 'Vỉ 1 viên', count: 1, price: 22000, originalPrice: 28000 },
      { id: 'p-5', name: 'Vỉ 5 viên (Tiết kiệm)', count: 5, price: 89000, originalPrice: 115000, isPopular: true }
    ],
    rating: 4.97,
    reviewCount: 920,
    inStock: true,
    colorScheme: {
      primary: 'from-sky-600 to-slate-900',
      accent: '#0284c7',
      border: 'border-sky-500/30'
    }
  },
  {
    id: 'h-cr1620-coin',
    name: 'Hbattery Coin Master CR1620 3V',
    series: 'Coin Master Lithium Cell',
    tagline: 'Chuyên chìa khóa xe Mazda 2, Mazda 3, Suzuki Swift',
    code: 'CR1620 / DL1620 / ECR1620',
    size: 'CR1620',
    chemistry: 'lithium-coin',
    voltage: '3.0V',
    capacity: '78 mAh',
    shelfLifeYears: 10,
    operatingTemp: '-30°C đến 60°C',
    badge: 'Chuyên Xe Mazda / Suzuki',
    description: 'Pin cúc áo 3V đường kính 16mm dày 2.0mm, được thiết kế chuẩn xác cho chìa khóa ô tô Mazda 2, Mazda 3 (đời trước 2020), Mazda 6, Suzuki Swift, Ertiga và đồng hồ Casio.',
    features: [
      'Độ dày 2.0mm lắp vừa khít không kênh nắp chìa khóa',
      'Màng chống rỉ sét đảm bảo không ố mạch khóa thông minh đắt tiền',
      'Thời hạn sử dụng lên đến 10 năm'
    ],
    recommendedDevices: [
      'Chìa khóa xe Mazda 2, Mazda 3, Mazda 6, Mazda CX-5 (bản 2-3 nút trước 2020)',
      'Chìa khóa thông minh Suzuki Swift, Ciaz, Ertiga, XL7',
      'Máy tính bỏ túi mini mỏng, máy đo nhịp tim đeo tay'
    ],
    warningNote: 'Pin dùng 1 lần. Không sạc lại.',
    packOptions: [
      { id: 'p-1', name: 'Vỉ 1 viên', count: 1, price: 22000, originalPrice: 28000 },
      { id: 'p-5', name: 'Vỉ 5 viên', count: 5, price: 89000, originalPrice: 115000, isPopular: true }
    ],
    rating: 4.91,
    reviewCount: 480,
    inStock: true,
    colorScheme: {
      primary: 'from-sky-500 to-slate-800',
      accent: '#0284c7',
      border: 'border-sky-400/30'
    }
  },
  {
    id: 'h-cr1616-coin',
    name: 'Hbattery Coin Master CR1616 3V',
    series: 'Coin Master Lithium Cell',
    tagline: 'Chuyên chìa khóa xe Honda City, Civic, CR-V & Băng Game Boy',
    code: 'CR1616 / DL1616 / ECR1616',
    size: 'CR1616',
    chemistry: 'lithium-coin',
    voltage: '3.0V',
    capacity: '55 mAh',
    shelfLifeYears: 10,
    operatingTemp: '-30°C đến 60°C',
    badge: 'Chìa khóa Honda & Băng Game',
    description: 'Pin cúc áo siêu mỏng 1.6mm đường kính 16mm, chuyên dụng cho chìa khóa ô tô Honda City, Civic, Accord, CR-V và pin nuôi nhớ Save Game của băng Nintendo Game Boy.',
    features: [
      'Độ dày chỉ 1.6mm cực kỳ chuẩn xác',
      'Vỏ inox SUS304 chống oxi hóa tuyệt đối',
      'Thời gian lưu điện đến 10 năm bảo toàn dữ liệu'
    ],
    recommendedDevices: [
      'Chìa khóa ô tô Honda City, Honda Civic, Honda CR-V, Honda Jazz',
      'Chìa khóa Mitsubishi Outlander, Mirage, Attrage',
      'Pin nuôi bộ nhớ băng trò chơi Nintendo Game Boy / GBA',
      'Thước kẹp kỹ thuật số mini'
    ],
    warningNote: 'Pin dùng 1 lần. Không sạc lại.',
    packOptions: [
      { id: 'p-1', name: 'Vỉ 1 viên', count: 1, price: 22000, originalPrice: 28000 },
      { id: 'p-5', name: 'Vỉ 5 viên', count: 5, price: 89000, originalPrice: 115000, isPopular: true }
    ],
    rating: 4.93,
    reviewCount: 510,
    inStock: true,
    colorScheme: {
      primary: 'from-sky-600 to-indigo-900',
      accent: '#0284c7',
      border: 'border-sky-400/30'
    }
  },
  {
    id: 'h-cr1220-coin',
    name: 'Hbattery Coin Master CR1220 3V',
    series: 'Coin Master Lithium Cell',
    tagline: 'Pin cúc áo vi mô 12mm - Nhiệt kế điện tử Omron & Đồng hồ mỏng',
    code: 'CR1220 / DL1220 / ECR1220',
    size: 'CR1220',
    chemistry: 'lithium-coin',
    voltage: '3.0V',
    capacity: '40 mAh',
    shelfLifeYears: 10,
    operatingTemp: '-30°C đến 60°C',
    badge: 'Nhiệt Kế Y Tế Omron',
    description: 'Pin cúc áo Lithium 3V đường kính siêu nhỏ 12.5mm dày 2.0mm, nguồn cấp chính cho nhiệt kế kẹp nách điện tử Omron MC-246, remote thẻ mỏng xe hơi và đèn LED nến sáp mini.',
    features: [
      'Kích thước vi mô 12.5mm x 2.0mm',
      'Đảm bảo đo nhiệt độ cơ thể chuẩn xác từng 0.1°C',
      'Thời hạn bảo quản 10 năm không hao điện'
    ],
    recommendedDevices: [
      'Nhiệt kế điện tử kẹp nách Omron MC-246, MC-343F',
      'Đồng hồ đeo tay thể thao siêu mỏng Casio',
      'Đèn LED giả nến sinh nhật trang trí',
      'Remote mỏng máy lạnh di động'
    ],
    warningNote: 'Pin dùng 1 lần. Cực kỳ nhỏ, cất xa tầm tay trẻ em để tránh hóc nuốt.',
    packOptions: [
      { id: 'p-1', name: 'Vỉ 1 viên', count: 1, price: 20000, originalPrice: 25000 },
      { id: 'p-5', name: 'Vỉ 5 viên (Tiết kiệm)', count: 5, price: 79000, originalPrice: 100000, isPopular: true }
    ],
    rating: 4.89,
    reviewCount: 390,
    inStock: true,
    colorScheme: {
      primary: 'from-sky-500 to-slate-800',
      accent: '#0284c7',
      border: 'border-sky-400/30'
    }
  },

  // --- 4. PIN CÚC ÁO KIỀM & BẠC (BUTTON CELL ALKALINE & SILVER OXIDE) ---
  {
    id: 'h-lr44-button',
    name: 'Hbattery Micro Alkaline LR44 (AG13)',
    series: 'Micro Button Alkaline',
    tagline: 'Pin cúc áo 1.5V quốc dân - Thước kẹp & Đồ chơi trẻ em',
    code: 'LR44 / AG13 / A76 / 357A / L1154',
    size: 'LR44',
    chemistry: 'alkaline',
    voltage: '1.5V',
    capacity: '150 mAh',
    shelfLifeYears: 5,
    operatingTemp: '-10°C đến 55°C',
    badge: 'Pin cúc áo 1.5V phổ thông',
    description: 'Pin cúc áo kiềm 1.5V Hbattery LR44 siêu thông dụng cho thước kẹp cơ khí điện tử, máy tính học sinh Casio FX-580, đèn laser giáo viên và hàng ngàn đồ chơi phát sáng.',
    features: [
      'Chuẩn kích thước 11.6mm x 5.4mm',
      'Không chứa thủy ngân 0% Mercury an toàn tuyệt đối cho đồ chơi trẻ nhỏ',
      'Đóng gói vỉ 10 viên tiện dụng dùng dần cả năm'
    ],
    recommendedDevices: [
      'Thước kẹp điện tử Mitutoyo kỹ thuật',
      'Máy tính bỏ túi học sinh Casio fx-570VN, fx-580VNX',
      'Đồ chơi âm thanh phát sáng của bé',
      'Bút laser chiếu bài thuyết trình',
      'Nhiệt kế kẹp nách điện tử Microlife'
    ],
    warningNote: 'Pin dùng 1 lần. Chú ý nguy hiểm nuốt phải ở trẻ nhỏ. Không sạc lại.',
    packOptions: [
      { id: 'p-2', name: 'Vỉ 2 viên', count: 2, price: 16000, originalPrice: 20000 },
      { id: 'p-10', name: 'Vỉ 10 viên (Gói tiết kiệm)', count: 10, price: 49000, originalPrice: 65000, isPopular: true }
    ],
    rating: 4.9,
    reviewCount: 1620,
    inStock: true,
    colorScheme: {
      primary: 'from-sky-500 to-blue-700',
      accent: '#0284c7',
      border: 'border-sky-400/30'
    }
  },
  {
    id: 'h-lr41-button',
    name: 'Hbattery Micro Alkaline LR41 (AG3)',
    series: 'Micro Button Alkaline',
    tagline: 'Pin cúc áo nhỏ 1.5V - Chuyên nhiệt kế kẹp nách & Bút soi y tế',
    code: 'LR41 / AG3 / 192 / L736 / GP192',
    size: 'LR41',
    chemistry: 'alkaline',
    voltage: '1.5V',
    capacity: '42 mAh',
    shelfLifeYears: 5,
    operatingTemp: '-10°C đến 55°C',
    badge: 'Chuyên Nhiệt Kế Microlife',
    description: 'Pin cúc áo 1.5V đường kính nhỏ 7.9mm cao 3.6mm, cấp nguồn chuẩn xác cho hầu hết các loại nhiệt kế kẹp nách điện tử Microlife, Citizen, Omron và bút soi tai mũi họng.',
    features: [
      'Đường kính nhỏ 7.9mm x 3.6mm chuẩn y tế',
      'Điện áp ra 1.5V ổn định không chập chờn màn hình LCD',
      'Vỏ thép mạ niken không gỉ sét'
    ],
    recommendedDevices: [
      'Nhiệt kế kẹp nách điện tử Microlife MT200, MT550, MT1622',
      'Nhiệt kế Citizen CTA303, CTA302',
      'Bút soi tai mũi họng y tế của bác sĩ',
      'Đồ chơi mini phát âm thanh'
    ],
    warningNote: 'Pin dùng 1 lần. Tuyệt đối không sạc lại.',
    packOptions: [
      { id: 'p-2', name: 'Vỉ 2 viên', count: 2, price: 16000, originalPrice: 20000 },
      { id: 'p-10', name: 'Vỉ 10 viên', count: 10, price: 49000, originalPrice: 65000, isPopular: true }
    ],
    rating: 4.91,
    reviewCount: 740,
    inStock: true,
    colorScheme: {
      primary: 'from-sky-500 to-cyan-700',
      accent: '#0284c7',
      border: 'border-sky-400/30'
    }
  },
  {
    id: 'h-lr1130-button',
    name: 'Hbattery Micro Alkaline LR1130 (AG10)',
    series: 'Micro Button Alkaline',
    tagline: 'Pin nút áo 1.5V - Máy tính bỏ túi học sinh & Đèn sách mini',
    code: 'LR1130 / AG10 / LR54 / 189 / V10GA',
    size: 'LR1130',
    chemistry: 'alkaline',
    voltage: '1.5V',
    capacity: '70 mAh',
    shelfLifeYears: 5,
    operatingTemp: '-10°C đến 55°C',
    badge: 'Máy Tính Học Sinh',
    description: 'Pin cúc áo 1.5V kích thước 11.6mm x 3.1mm, được sử dụng phổ biến trong máy tính bỏ túi học sinh, cân tiểu ly nhà bếp và đèn kẹp đọc sách ban đêm.',
    features: [
      'Độ dày 3.1mm chuẩn AG10/LR1130',
      'Điện áp 1.5V đều đặn không làm mờ nét chữ màn hình',
      'Thời hạn sử dụng 5 năm'
    ],
    recommendedDevices: [
      'Máy tính bỏ túi học sinh Casio, Vinacal, Deli',
      'Cân điện tử tiểu ly làm bánh, cân trang sức',
      'Đèn LED kẹp đọc sách ban đêm, nhiệt kế phòng tắm'
    ],
    warningNote: 'Pin dùng 1 lần. Không sạc lại.',
    packOptions: [
      { id: 'p-2', name: 'Vỉ 2 viên', count: 2, price: 16000, originalPrice: 20000 },
      { id: 'p-10', name: 'Vỉ 10 viên', count: 10, price: 49000, originalPrice: 65000, isPopular: true }
    ],
    rating: 4.88,
    reviewCount: 620,
    inStock: true,
    colorScheme: {
      primary: 'from-sky-600 to-blue-800',
      accent: '#0284c7',
      border: 'border-sky-400/30'
    }
  },
  {
    id: 'h-sr626sw-silver',
    name: 'Hbattery Watch Silver Oxide SR626SW (377)',
    series: 'Precision Watch Silver Oxide',
    tagline: 'Pin bạc oxit 1.55V chính xác tuyệt đối cho Đồng hồ đeo tay',
    code: 'SR626SW / 377 / AG4 / V377 / SR66',
    size: 'SR626SW',
    chemistry: 'silver-oxide',
    voltage: '1.55V',
    capacity: '28 mAh',
    shelfLifeYears: 5,
    operatingTemp: '-10°C đến 60°C',
    badge: 'Chuyên Đồng Hồ Đeo Tay',
    description: 'Pin Oxit Bạc (Silver Oxide) Hbattery SR626SW giữ đường cong xả áp phẳng phiu 1.55V đến tận giây cuối cùng, giúp máy đồng hồ Nhật (Seiko, Citizen, Casio) và Thụy Sĩ chạy chuẩn xác từng tích tắc không lệch giờ.',
    features: [
      'Điện áp phẳng 1.55V giữ độ chính xác tuyệt đối cho dao động cơ học thạch anh Quartz',
      'Công nghệ chống rò rỉ dung dịch điện phân bảo vệ máy đồng hồ đắt tiền',
      'Tuổi thọ lên đến 2-3 năm trong máy đồng hồ 3 kim'
    ],
    recommendedDevices: [
      'Đồng hồ đeo tay máy Quartz (Casio, Seiko, Citizen, Orient, Daniel Wellington)',
      'Đồng hồ thời trang Fossil, Tissot, Michael Kors',
      'Thiết bị đo y tế chính xác siêu nhỏ'
    ],
    warningNote: 'Pin Oxit Bạc dùng 1 lần. Tuyệt đối không sạc điện. Để xa tầm tay trẻ em.',
    packOptions: [
      { id: 'p-1', name: 'Vỉ 1 viên chuẩn thợ', count: 1, price: 25000, originalPrice: 32000 },
      { id: 'p-5', name: 'Vỉ 5 viên (Thợ sửa đồng hồ)', count: 5, price: 99000, originalPrice: 130000, isPopular: true }
    ],
    rating: 4.98,
    reviewCount: 880,
    inStock: true,
    colorScheme: {
      primary: 'from-sky-600 to-slate-900',
      accent: '#0284c7',
      border: 'border-sky-400/40'
    }
  },
  {
    id: 'h-sr621sw-silver',
    name: 'Hbattery Watch Silver Oxide SR621SW (364)',
    series: 'Precision Watch Silver Oxide',
    tagline: 'Pin bạc oxit 1.55V mỏng 2.1mm - Chuyên đồng hồ nữ thanh mảnh',
    code: 'SR621SW / 364 / AG1 / V364 / SR60',
    size: 'SR621SW',
    chemistry: 'silver-oxide',
    voltage: '1.55V',
    capacity: '20 mAh',
    shelfLifeYears: 5,
    operatingTemp: '-10°C đến 60°C',
    badge: 'Chuyên Đồng Hồ Nữ Mỏng',
    description: 'Pin Oxit Bạc siêu mỏng 2.15mm đường kính 6.8mm, được thiết kế chuyên biệt cho các cỗ máy đồng hồ đeo tay nữ siêu mỏng cao cấp của Daniel Wellington, Citizen Eco-Drive quartz, Seiko Ladies.',
    features: [
      'Độ dày siêu mỏng 2.15mm',
      'Công nghệ Oxit Bạc chống chảy nước tuyệt đối bảo vệ máy đồng hồ',
      'Đường cong xả phẳng 1.55V chuẩn từng nhịp kim giây'
    ],
    recommendedDevices: [
      'Đồng hồ đeo tay nữ Daniel Wellington (Petite 28mm, 32mm)',
      'Đồng hồ nữ Seiko, Citizen, Tissot, Anne Klein',
      'Mặt dây chuyền đồng hồ thời trang'
    ],
    warningNote: 'Pin dùng 1 lần. Không sạc lại.',
    packOptions: [
      { id: 'p-1', name: 'Vỉ 1 viên', count: 1, price: 25000, originalPrice: 32000 },
      { id: 'p-5', name: 'Vỉ 5 viên', count: 5, price: 99000, originalPrice: 130000, isPopular: true }
    ],
    rating: 4.95,
    reviewCount: 460,
    inStock: true,
    colorScheme: {
      primary: 'from-sky-500 to-slate-800',
      accent: '#0284c7',
      border: 'border-sky-400/30'
    }
  },
  {
    id: 'h-sr920sw-silver',
    name: 'Hbattery Watch Silver Oxide SR920SW (371)',
    series: 'Precision Watch Silver Oxide',
    tagline: 'Pin bạc oxit 1.55V dung lượng cao - Đồng hồ Chronograph bấm giờ',
    code: 'SR920SW / 371 / AG6 / V371 / SR69',
    size: 'SR920SW',
    chemistry: 'silver-oxide',
    voltage: '1.55V',
    capacity: '40 mAh',
    shelfLifeYears: 5,
    operatingTemp: '-10°C đến 60°C',
    badge: 'Đồng Hồ Chronograph 6 Kim',
    description: 'Pin Oxit Bạc đường kính lớn 9.5mm dày 2.05mm, dung lượng xả cao 40mAh, chuyên cung cấp năng lượng cho các đồng hồ thể thao nam 6 kim Chronograph bấm giờ thể thao nhiều động cơ.',
    features: [
      'Dung lượng lớn 40mAh chịu tải động cơ bấm giờ thể thao chạy liên tục',
      'Điện áp 1.55V ổn định cao',
      'Công nghệ viền dập kín chống rò rỉ 100%'
    ],
    recommendedDevices: [
      'Đồng hồ thể thao Casio Edifice Chronograph 6 kim',
      'Đồng hồ Tissot PRC 200, Seiko Chronograph, Citizen Tachymeter',
      'Đồng hồ phi công và quân đội máy Quartz'
    ],
    warningNote: 'Pin dùng 1 lần. Không sạc lại.',
    packOptions: [
      { id: 'p-1', name: 'Vỉ 1 viên', count: 1, price: 28000, originalPrice: 35000 },
      { id: 'p-5', name: 'Vỉ 5 viên', count: 5, price: 110000, originalPrice: 145000, isPopular: true }
    ],
    rating: 4.96,
    reviewCount: 520,
    inStock: true,
    colorScheme: {
      primary: 'from-sky-600 to-slate-900',
      accent: '#0284c7',
      border: 'border-sky-500/30'
    }
  },

  // --- 5. PIN THAN KẼM (CARBON-ZINC SIÊU TIẾT KIỆM) ---
  {
    id: 'h-heavy-aa-carbon',
    name: 'Hbattery Heavy Duty AA Carbon-Zinc',
    series: 'Super Heavy Duty Eco Series',
    tagline: 'Pin than kẽm tiết kiệm tối đa - Đồng hồ treo tường kim trôi',
    code: 'R6P / UM-3 / Carbon Zinc AA',
    size: 'AA',
    chemistry: 'carbon-zinc',
    voltage: '1.5V',
    capacity: '1,050 mAh',
    shelfLifeYears: 3,
    operatingTemp: '0°C đến 45°C',
    badge: 'Tiết kiệm tối ưu',
    description: 'Pin than kẽm Hbattery sinh ra riêng cho các thiết bị ăn dòng cực thấp như đồng hồ treo tường gia đình kim giật/kim trôi và điều khiển TV cơ bản. Tiết kiệm chi phí gấp 3 lần so với pin kiềm.',
    features: [
      'Dòng xả êm dịu, không gây sốc xung làm hỏng cuộn dây đồng hồ treo tường',
      'Giá thành cực kỳ kinh tế cho gia đình và cơ quan',
      '100% không chứa hóa chất cấm theo tiêu chuẩn RoHS'
    ],
    recommendedDevices: [
      'Đồng hồ treo tường kim trôi, đồng hồ để bàn',
      'Điều khiển TV thông thường, điều khiển quạt đứng',
      'Đồ chơi không động cơ của trẻ em'
    ],
    warningNote: 'Pin than kẽm dùng 1 lần. Không sạc lại. Khi pin yếu nên thay ngay để tránh chảy dịch.',
    packOptions: [
      { id: 'p-4', name: 'Lốc 4 viên', count: 4, price: 22000, originalPrice: 28000 },
      { id: 'p-20', name: 'Hộp 20 viên kinh tế', count: 20, price: 89000, originalPrice: 120000, isPopular: true },
      { id: 'p-60', name: 'Thùng 60 viên công sở', count: 60, price: 239000, originalPrice: 320000 }
    ],
    rating: 4.75,
    reviewCount: 1100,
    inStock: true,
    colorScheme: {
      primary: 'from-sky-600 to-slate-800',
      accent: '#0284c7',
      border: 'border-sky-500/20'
    }
  },
  {
    id: 'h-heavy-aaa-carbon',
    name: 'Hbattery Heavy Duty AAA Carbon-Zinc',
    series: 'Super Heavy Duty Eco Series',
    tagline: 'Pin đũa than kẽm kinh tế - Cho remote quạt & TV phụ',
    code: 'R03P / UM-4 / Carbon Zinc AAA',
    size: 'AAA',
    chemistry: 'carbon-zinc',
    voltage: '1.5V',
    capacity: '500 mAh',
    shelfLifeYears: 3,
    operatingTemp: '0°C đến 45°C',
    badge: 'Giá Siêu Rẻ',
    description: 'Giải pháp pin đũa than kẽm siêu kinh tế cho khách sạn, nhà nghỉ, văn phòng sử dụng số lượng lớn cho remote quạt, remote TV cơ bản.',
    features: [
      'Giá thành rẻ nhất, tối ưu chi phí vận hành',
      'Dòng điện ổn định cho mạch hồng ngoại đơn giản',
      'Thùng 60 viên tiện dụng cất trữ'
    ],
    recommendedDevices: [
      'Điều khiển quạt đứng, quạt trần cơ bản',
      'Remote TV phụ phòng ngủ, remote đầu thu K+',
      'Nến điện tử trang trí sự kiện'
    ],
    warningNote: 'Pin dùng 1 lần. Không sạc lại.',
    packOptions: [
      { id: 'p-4', name: 'Lốc 4 viên', count: 4, price: 20000, originalPrice: 26000 },
      { id: 'p-20', name: 'Hộp 20 viên', count: 20, price: 79000, originalPrice: 105000, isPopular: true },
      { id: 'p-60', name: 'Thùng 60 viên', count: 60, price: 219000, originalPrice: 290000 }
    ],
    rating: 4.72,
    reviewCount: 680,
    inStock: true,
    colorScheme: {
      primary: 'from-sky-600 to-slate-800',
      accent: '#0284c7',
      border: 'border-sky-500/20'
    }
  },

  // --- 7. ẮC QUY VRLA AGM / GEL KHÔ KÍN KHÍ (ACCUMULATOR LEAD-ACID) ---
  {
    id: 'h-accu-12v-7-2ah',
    name: 'Hbattery VRLA AGM 12V-7.2Ah Khô Kín Khí',
    series: 'VRLA Power Backup Series',
    tagline: 'Ắc quy khô miễn bảo dưỡng - Chuyên UPS lưu điện & Cửa cuốn',
    code: '12V 7.2Ah / 20HR / VRLA AGM',
    size: '12V-7.2Ah',
    chemistry: 'lead-acid-vrla',
    voltage: '12.0V',
    capacity: '7,200 mAh (7.2Ah)',
    shelfLifeYears: 5,
    operatingTemp: '-15°C đến 50°C',
    badge: 'Chuyên UPS & Cửa Cuốn',
    description: 'Bình ắc quy khô kín khí VRLA AGM Hbattery 12V-7.2Ah công nghệ tấm lưới hợp kim chì canxi cao cấp, không cần châm nước, chống rò rỉ dung dịch axit 100%. Được các kỹ sư tin dùng cho bộ lưu điện UPS (APC, Santak), lưu điện cửa cuốn và hệ thống báo trộm.',
    features: [
      'Công nghệ sợi thủy tinh AGM thấm hút dung dịch, đặt nghiêng mọi góc không lo chảy axit',
      'Van điều áp an toàn chống cháy nổ bên trong',
      'Tuổi thọ thiết kế 3-5 năm ở chế độ sạc duy trì Standby',
      'Dòng phóng điện tức thời cực cao kích hoạt motor cửa cuốn trơn tru'
    ],
    recommendedDevices: [
      'Bộ lưu điện UPS máy tính văn phòng (APC Back-UPS, Santak TG500, CyberPower)',
      'Hộp lưu điện cửa cuốn Austdoor, Hanotech',
      'Hệ thống tủ trung tâm báo cháy & báo động chống trộm',
      'Bình xịt điện phun thuốc nông nghiệp'
    ],
    warningNote: 'Ắc quy chì khô kín khí. Chú ý đấu đúng cực (+ Đỏ, - Đen). Tránh làm chập đoản mạch 2 cực gây tóe lửa.',
    packOptions: [
      { id: 'p-1', name: '1 Bình lẻ chính hãng', count: 1, price: 290000, originalPrice: 350000, isPopular: true },
      { id: 'p-2', name: 'Combo 2 bình (Cho UPS 24V)', count: 2, price: 560000, originalPrice: 700000 },
      { id: 'p-4', name: 'Thùng 4 bình công trình', count: 4, price: 1080000, originalPrice: 1400000 }
    ],
    rating: 4.96,
    reviewCount: 840,
    inStock: true,
    colorScheme: {
      primary: 'from-sky-700 via-slate-900 to-slate-950',
      accent: '#0284c7',
      border: 'border-sky-500/40'
    }
  },
  {
    id: 'h-accu-12v-12ah',
    name: 'Hbattery Deep Cycle VRLA 12V-12Ah',
    series: 'VRLA Deep Cycle Series',
    tagline: 'Ắc quy xả sâu - Chuyên Xe đạp điện & Loa kéo công suất lớn',
    code: '12V 12Ah / 6-DZM-12 / Deep Cycle',
    size: '12V-12Ah',
    chemistry: 'lead-acid-vrla',
    voltage: '12.0V',
    capacity: '12,000 mAh (12Ah)',
    shelfLifeYears: 5,
    operatingTemp: '-15°C đến 50°C',
    badge: 'Chuyên Xe Đạp Điện & Loa Kéo',
    description: 'Ắc quy khô xả sâu Hbattery 12V-12Ah với mật độ chì siêu dày chịu chu kỳ nạp xả liên tục. Phù hợp tuyệt đối cho xe đạp điện (bộ 4 bình 48V), xe máy điện trẻ em và loa kéo Bluetooth karaoke công suất khủng chơi nhạc cả ngày.',
    features: [
      'Khả năng chịu xả sâu chu kỳ cao (lên đến hơn 500 chu kỳ xả 80% DOD)',
      'Vỏ nhựa ABS chống va đập, chống rung lắc khi xe di chuyển trên đường gồ ghề',
      'Độ tự phóng điện cực thấp khi để không'
    ],
    recommendedDevices: [
      'Xe đạp điện Nijia, Asama, Giant, Honda (Bộ 4 bình 48V-12Ah)',
      'Loa kéo karaoke di động kéo ngoài trời công suất 300W - 800W',
      'Xe máy điện, ô tô điện đồ chơi trẻ em',
      'Hệ thống đèn dự phòng cắm trại di động'
    ],
    warningNote: 'Ắc quy xả sâu. Sau khi sử dụng cạn điện nên cắm sạc lại trong vòng 24 giờ để tránh chai bản cực chì.',
    packOptions: [
      { id: 'p-1', name: '1 Bình đơn cho loa kéo', count: 1, price: 420000, originalPrice: 490000 },
      { id: 'p-4', name: 'Bộ 4 bình (Chuẩn xe đạp điện 48V)', count: 4, price: 1590000, originalPrice: 1960000, isPopular: true }
    ],
    rating: 4.93,
    reviewCount: 650,
    inStock: true,
    colorScheme: {
      primary: 'from-sky-700 via-blue-950 to-slate-950',
      accent: '#0284c7',
      border: 'border-sky-500/50'
    }
  },
  {
    id: 'h-accu-12v-5ah',
    name: 'Hbattery Motorcycle VRLA 12V-5Ah',
    series: 'Motorcycle Battery Series',
    tagline: 'Ắc quy khô xe máy khởi động mạnh - Honda & Yamaha',
    code: '12V 5Ah / YTX5L-BS / 12N5-3B',
    size: '12V-5Ah',
    chemistry: 'lead-acid-vrla',
    voltage: '12.0V',
    capacity: '5,000 mAh (5Ah)',
    shelfLifeYears: 5,
    operatingTemp: '-15°C đến 55°C',
    badge: 'Chuyên Xe Máy Phổ Thông',
    description: 'Ắc quy khô xe máy Hbattery 12V-5Ah miễn bảo dưỡng, dòng khởi động CCA cao giúp xe máy đề nổ dứt khoát ngay cả trong buổi sáng mùa đông lạnh giá. Kích thước tiêu chuẩn lắp vừa khít hộc bình mọi dòng xe số và xe ga Honda, Yamaha.',
    features: [
      'Dòng đề nổ tức thời CCA cao vượt trội',
      'Thiết kế chống tràn axit tuyệt đối, an toàn cho gầm xe',
      'Chống rung xóc vượt qua tiêu chuẩn giao thông đường bộ Việt Nam'
    ],
    recommendedDevices: [
      'Xe ga Honda (AirBlade 110/125, Vision, Lead, Click, Vario)',
      'Xe số Honda (Wave Alpha, Wave RSX, Future Neo/125, Blade)',
      'Xe Yamaha (Sirius Fi, Jupiter, Exciter 135/150, Janus, Grande)',
      'Khóa cổng từ điện tử kiểm soát ra vào vân tay chung cư'
    ],
    warningNote: 'Ắc quy khởi động xe máy. Đảm bảo sạc nạp ổn định từ củ sạc mâm lửa của xe.',
    packOptions: [
      { id: 'p-1', name: '1 Bình chính hãng + ốc cực', count: 1, price: 295000, originalPrice: 360000, isPopular: true },
      { id: 'p-2', name: 'Combo 2 bình', count: 2, price: 570000, originalPrice: 720000 }
    ],
    rating: 4.95,
    reviewCount: 1120,
    inStock: true,
    colorScheme: {
      primary: 'from-sky-600 to-slate-950',
      accent: '#0284c7',
      border: 'border-sky-500/40'
    }
  },
  {
    id: 'h-accu-6v-4-5ah',
    name: 'Hbattery Emergency VRLA 6V-4.5Ah',
    series: 'VRLA Compact Series',
    tagline: 'Ắc quy 6V nhỏ gọn - Đèn chiếu sáng sự cố Exit & Cân điện tử',
    code: '6V 4.5Ah / 20HR / VRLA AGM',
    size: '6V-4.5Ah',
    chemistry: 'lead-acid-vrla',
    voltage: '6.0V',
    capacity: '4,500 mAh (4.5Ah)',
    shelfLifeYears: 5,
    operatingTemp: '-15°C đến 50°C',
    badge: 'Chuyên Đèn Khẩn Cấp & Cân',
    description: 'Ắc quy khô 6V-4.5Ah Hbattery được sử dụng rộng rãi trong đèn sự cố chiếu sáng khi mất điện, đèn lối thoát hiểm Exit PCCC, cân bàn điện tử và xe mô tô điện 3 bánh của bé.',
    features: [
      'Kích thước nhỏ gọn 70mm x 47mm x 101mm',
      'Hoạt động bền bỉ ở chế độ đệm sạc liên tục',
      'Tương thích hoàn toàn các loại đèn khẩn cấp Paragon, Kentom'
    ],
    recommendedDevices: [
      'Đèn chiếu sáng sự cố mất điện Kentom, Paragon, Rạng Đông',
      'Đèn chỉ dẫn lối thoát hiểm Exit',
      'Cân bàn điện tử thủy sản, cân tính tiền siêu thị',
      'Xe mô tô điện đồ chơi trẻ em'
    ],
    warningNote: 'Điện áp 6V. Không đấu nhầm vào hệ thống sạc 12V.',
    packOptions: [
      { id: 'p-1', name: '1 Bình đơn', count: 1, price: 145000, originalPrice: 180000, isPopular: true },
      { id: 'p-4', name: 'Lốc 4 bình (Tòa nhà / Đại lý)', count: 4, price: 540000, originalPrice: 720000 }
    ],
    rating: 4.89,
    reviewCount: 430,
    inStock: true,
    colorScheme: {
      primary: 'from-sky-600 to-slate-900',
      accent: '#0284c7',
      border: 'border-sky-500/30'
    }
  },
  {
    id: 'h-accu-12v-20ah',
    name: 'Hbattery PowerMax VRLA AGM 12V-20Ah',
    series: 'VRLA PowerMax Series',
    tagline: 'Ắc quy dung lượng lớn - Năng lượng mặt trời & Bộ kích Inverter',
    code: '12V 20Ah / 6-DZM-20 / Deep Cycle',
    size: '12V-20Ah',
    chemistry: 'lead-acid-vrla',
    voltage: '12.0V',
    capacity: '20,000 mAh (20Ah)',
    shelfLifeYears: 6,
    operatingTemp: '-15°C đến 50°C',
    badge: 'Năng Lượng Mặt Trời & Inverter',
    description: 'Ắc quy khô công suất lớn 12V-20Ah của Hbattery, giải pháp lưu trữ điện dự phòng tuyệt vời cho máy kích điện Inverter gia đình khi cúp điện, trạm sạc điện năng lượng mặt trời Solar và xe máy điện công suất lớn.',
    features: [
      'Dung lượng 20Ah lưu trữ năng lượng lớn',
      'Bản cực hợp kim chì dày đặc biệt chống sunfat hóa',
      'Tích hợp tay quai xách tiện dụng khi vận chuyển'
    ],
    recommendedDevices: [
      'Bộ kích điện Inverter 12V lên 220V thắp sáng quạt và tivi gia đình',
      'Hệ thống lưu trữ điện năng lượng mặt trời mini',
      'Xe máy điện Xmen, Vespa Dibao, Zoomer (bộ 5 bình 60V-20Ah)',
      'Trạm phát Wi-Fi dã ngoại và máy bơm mini'
    ],
    warningNote: 'Trọng lượng nặng ~6kg. Chú ý mang vác an toàn.',
    packOptions: [
      { id: 'p-1', name: '1 Bình có quai xách', count: 1, price: 680000, originalPrice: 820000, isPopular: true },
      { id: 'p-5', name: 'Bộ 5 bình xe máy điện (60V)', count: 5, price: 3250000, originalPrice: 4100000 }
    ],
    rating: 4.97,
    reviewCount: 390,
    inStock: true,
    colorScheme: {
      primary: 'from-sky-700 via-blue-900 to-slate-950',
      accent: '#0284c7',
      border: 'border-sky-500/50'
    }
  },

  // --- 8. MỞ RỘNG CÁC LOẠI PIN 9V & AAAA CHUYÊN BIỆT ---
  {
    id: 'h-9v-lithium',
    name: 'Hbattery Extreme Lithium 9V (U9VL)',
    series: 'Extreme Lithium Primary',
    tagline: 'Pin 9V dùng 1 lần lưu trữ 10-15 năm - Máy khử rung tim AED & Báo cháy',
    code: 'U9VL-J / 9V Lithium / Li-MnO2',
    size: '9V',
    chemistry: 'lithium-primary',
    voltage: '9.0V',
    capacity: '1,200 mAh (Gấp đôi kiềm)',
    shelfLifeYears: 15,
    operatingTemp: '-40°C đến 60°C',
    badge: 'Y Tế Khẩn Cấp AED & Lưu 15 Năm',
    description: 'Pin 9V Lithium sơ cấp tối tân nhất của Hbattery với dung lượng 1,200mAh (gấp đôi pin 9V Alkaline) và tuổi thọ cất kho tới 15 năm. Chuyên dụng cho máy sốc tim cứu hộ AED, máy đo khí độc hầm mỏ và đầu báo khói ngoài trời.',
    features: [
      'Dung lượng cực đại 1,200mAh trong khối pin vuông 9V',
      'Hạn bảo quản 15 năm không tự xả, luôn sẵn sàng trong tình huống cấp cứu',
      'Nhẹ hơn pin kiềm 25%, vỏ nhôm hermetic kín tuyệt đối',
      'Độ tin cậy đạt chuẩn trang bị y tế khẩn cấp'
    ],
    recommendedDevices: [
      'Máy sốc tim khử rung tim tự động ngoài lồng ngực AED (Philips HeartStart, Zoll)',
      'Hệ thống đầu báo khói khẩn cấp tòa nhà cao cấp 10 năm không cần thay pin',
      'Máy đo nồng độ oxy và khí độc hầm lò cứu hộ',
      'Hộp đen thiết bị theo dõi hành trình định vị vệ tinh'
    ],
    warningNote: 'Pin Lithium sơ cấp 9V dùng 1 lần. Tuyệt đối không cắm sạc điện.',
    packOptions: [
      { id: 'p-1', name: 'Vỉ 1 viên y tế', count: 1, price: 165000, originalPrice: 200000, isPopular: true },
      { id: 'p-2', name: 'Vỉ 2 viên', count: 2, price: 310000, originalPrice: 400000 },
      { id: 'p-10', name: 'Hộp 10 viên (Bệnh viện / Cao ốc)', count: 10, price: 1450000, originalPrice: 1900000 }
    ],
    rating: 5.0,
    reviewCount: 310,
    inStock: true,
    colorScheme: {
      primary: 'from-sky-700 via-cyan-800 to-slate-900',
      accent: '#06b6d4',
      border: 'border-cyan-400/40'
    }
  },
  {
    id: 'h-9v-heavy',
    name: 'Hbattery Super Heavy Duty 9V (6F22)',
    series: 'Super Heavy Duty Eco Series',
    tagline: 'Pin vuông 9V than kẽm tiết kiệm - Đồng hồ vạn năng & Đồ chơi',
    code: '6F22 / 006P / Carbon Zinc 9V',
    size: '9V',
    chemistry: 'carbon-zinc',
    voltage: '9.0V',
    capacity: '350 mAh',
    shelfLifeYears: 3,
    operatingTemp: '0°C đến 45°C',
    badge: 'Tiết Kiệm Cho Học Sinh',
    description: 'Pin vuông 9V than kẽm kinh tế của Hbattery, thích hợp tuyệt vời cho học sinh sinh viên thực hành mạch điện tử tử, đồng hồ đo điện kim vạn năng và đồ chơi mô hình.',
    features: [
      'Giá thành tiết kiệm nhất trong các dòng pin vuông 9V',
      'Dòng xả êm ái cho dụng cụ đo học đường',
      'Đóng gói vỉ đơn tiện lợi'
    ],
    recommendedDevices: [
      'Đồng hồ vạn năng kim học sinh thực hành điện tử (Sanwa YX360TRD)',
      'Bộ thí nghiệm STEM học đường, đồ chơi điều khiển từ xa',
      'Mạch đàn guitar mini'
    ],
    warningNote: 'Pin than kẽm dùng 1 lần. Không sạc lại.',
    packOptions: [
      { id: 'p-1', name: 'Vỉ 1 viên đơn', count: 1, price: 18000, originalPrice: 24000 },
      { id: 'p-5', name: 'Lốc 5 viên', count: 5, price: 79000, originalPrice: 110000, isPopular: true }
    ],
    rating: 4.7,
    reviewCount: 510,
    inStock: true,
    colorScheme: {
      primary: 'from-sky-600 to-slate-800',
      accent: '#0284c7',
      border: 'border-sky-500/20'
    }
  },
  {
    id: 'h-aaaa-lithium',
    name: 'Hbattery Extreme Lithium AAAA (1.5V)',
    series: 'Extreme Lithium Primary',
    tagline: 'Pin 4A Lithium siêu nhẹ - Chuyên bút vẽ đồ họa Wacom & Surface Pro',
    code: 'AAAA Lithium / FR61 / 1.5V Ultra Light',
    size: 'AAAA',
    chemistry: 'lithium-primary',
    voltage: '1.5V',
    capacity: '800 mAh',
    shelfLifeYears: 15,
    operatingTemp: '-20°C đến 60°C',
    badge: 'Họa Sĩ & Kỹ Sư Đồ Họa',
    description: 'Phiên bản Lithium dùng 1 lần siêu nhẹ cho bút cảm ứng AAAA, nhẹ hơn pin kiềm 30% giúp tay cầm bút vẽ không bị mỏi khi thiết kế đồ họa, render kiến trúc suốt nhiều giờ liền.',
    features: [
      'Khối lượng siêu nhẹ chỉ 4.8g cho trải nghiệm cầm bút tự nhiên như bút chì',
      'Điện áp phẳng 1.5V giữ cảm ứng nét vẽ liên tục không bị đứt đoạn nét',
      'Hạn bảo quản 15 năm'
    ],
    recommendedDevices: [
      'Bút cảm ứng Microsoft Surface Pro Stylus Pen',
      'Bút đồ họa Wacom Bamboo Ink Plus, Dell Premium Active Pen',
      'Thiết bị y tế phẫu thuật vi mô'
    ],
    warningNote: 'Pin Lithium sơ cấp 1.5V dùng 1 lần. Không sạc lại.',
    packOptions: [
      { id: 'p-2', name: 'Vỉ 2 viên đồ họa', count: 2, price: 75000, originalPrice: 95000, isPopular: true },
      { id: 'p-4', name: 'Vỉ 4 viên (Họa sĩ)', count: 4, price: 139000, originalPrice: 180000 }
    ],
    rating: 4.97,
    reviewCount: 290,
    inStock: true,
    colorScheme: {
      primary: 'from-sky-500 to-cyan-800',
      accent: '#06b6d4',
      border: 'border-sky-400/40'
    }
  },
  {
    id: 'h-accu-12v-30ah',
    name: 'Hbattery PowerMax VRLA AGM 12V-30Ah',
    series: 'VRLA PowerMax Series',
    tagline: 'Ắc quy công suất cực lớn - Hệ thống Solar & Inverter 220V',
    code: '12V 30Ah / 6-DZM-30 / Heavy Duty',
    size: '12V-30Ah',
    chemistry: 'lead-acid-vrla',
    voltage: '12.0V',
    capacity: '30,000 mAh (30Ah)',
    shelfLifeYears: 6,
    operatingTemp: '-15°C đến 50°C',
    badge: 'Dung Lượng Siêu Khủng 30Ah',
    description: 'Bình ắc quy khô VRLA AGM dung lượng cao nhất 30Ah của Hbattery, trang bị bản cực chì dày dặn chống rụng cao độ, lưu trữ năng lượng dồi dào cho hệ thống điện mặt trời gia đình, bộ biến tần Inverter và trạm phát sóng dã ngoại.',
    features: [
      'Dung lượng 30Ah lưu điện siêu lâu cho quạt, tivi, đèn cả đêm khi mất điện',
      'Công nghệ AGM kín khí 100% không mùi axit, an toàn để trong phòng',
      'Được kiểm định chất lượng xuất khẩu IEC 60896'
    ],
    recommendedDevices: [
      'Bộ kích điện Inverter 12V-220V công suất 500W-1500W',
      'Hệ thống lưu trữ điện năng lượng mặt trời Solar',
      'Xe điện du lịch 3-4 bánh, máy phát điện di động'
    ],
    warningNote: 'Trọng lượng nặng ~9.5kg. Cố định chắc chắn khi lắp đặt.',
    packOptions: [
      { id: 'p-1', name: '1 Bình nguyên đai nguyên kiện', count: 1, price: 980000, originalPrice: 1200000, isPopular: true },
      { id: 'p-2', name: 'Combo 2 bình ghép nối tiếp 24V', count: 2, price: 1890000, originalPrice: 2400000 }
    ],
    rating: 4.98,
    reviewCount: 280,
    inStock: true,
    colorScheme: {
      primary: 'from-sky-700 via-blue-950 to-slate-950',
      accent: '#0284c7',
      border: 'border-sky-500/50'
    }
  },
  {
    id: 'h-accu-12v-7ah',
    name: 'Hbattery Motorcycle VRLA 12V-7Ah',
    series: 'Motorcycle Battery Series',
    tagline: 'Ắc quy xe ga phân khối lớn - Honda SH350i, SH300i & Vespa GTS',
    code: '12V 7Ah / YTX7L-BS / TTZ7S',
    size: '12V-7Ah',
    chemistry: 'lead-acid-vrla',
    voltage: '12.0V',
    capacity: '7,000 mAh (7Ah)',
    shelfLifeYears: 5,
    operatingTemp: '-15°C đến 55°C',
    badge: 'Chuyên Xe Ga Lớn & PKL',
    description: 'Ắc quy khô cao cấp dung lượng 7Ah kích thước chuẩn YTX7L-BS, chuyên dụng cho các dòng xe ga phân khối lớn đòi hỏi dòng đề phóng mạnh mẽ như Honda SH300i, SH350i, Vespa GTS 300, Yamaha NVX và xe môtô phân khối lớn.',
    features: [
      'Dòng khởi động cực mạnh CCA 130A đề nổ máy 300cc-400cc dứt khoát',
      'Chống rung chấn và va đập cường độ cao',
      'Tuổi thọ lên đến 3-4 năm bền bỉ'
    ],
    recommendedDevices: [
      'Xe ga Honda SH300i, SH350i, Forza 300/350',
      'Xe Vespa GTS 150/300, Sprint 150, Primavera 150',
      'Xe môtô côn tay Yamaha MT-03, R3, Kawasaki Ninja 400',
      'Yamaha NVX 155, Honda PCX 150/160'
    ],
    warningNote: 'Ắc quy xe máy khô kín khí. Miễn bảo dưỡng trọn đời.',
    packOptions: [
      { id: 'p-1', name: '1 Bình chính hãng + phụ kiện ốc', count: 1, price: 395000, originalPrice: 480000, isPopular: true },
      { id: 'p-2', name: 'Combo 2 bình', count: 2, price: 760000, originalPrice: 960000 }
    ],
    rating: 4.96,
    reviewCount: 410,
    inStock: true,
    colorScheme: {
      primary: 'from-sky-600 to-slate-950',
      accent: '#0284c7',
      border: 'border-sky-500/40'
    }
  },
  {
    id: 'h-accu-6v-12ah',
    name: 'Hbattery Heavy VRLA 6V-12Ah',
    series: 'VRLA Power Backup Series',
    tagline: 'Ắc quy 6V dung lượng kép - Xe ô tô điện trẻ em & Đèn công nghiệp',
    code: '6V 12Ah / 3-FM-12 / VRLA AGM',
    size: '6V-12Ah',
    chemistry: 'lead-acid-vrla',
    voltage: '6.0V',
    capacity: '12,000 mAh (12Ah)',
    shelfLifeYears: 5,
    operatingTemp: '-15°C đến 50°C',
    badge: 'Xe Điện Bé & Đèn Công Nghiệp',
    description: 'Ắc quy 6V dung lượng cao 12Ah giúp xe ô tô điện trẻ em chạy liên tục 3-4 tiếng không lo hết điện, đồng thời là nguồn cấp tin cậy cho đèn chiếu sáng công trường và cứu hộ.',
    features: [
      'Dung lượng gấp gần 3 lần so với loại 6V-4.5Ah thông thường',
      'Vỏ nhựa ABS dày dặn chống nứt vỡ khi va chạm',
      'An toàn tuyệt đối cho trẻ nhỏ, không rò rỉ dung dịch'
    ],
    recommendedDevices: [
      'Xe ô tô điện trẻ em 2 chỗ ngồi tải nặng, xe địa hình Jeep điện trẻ em',
      'Đèn rọi cứu hộ sự cố công trình ban đêm',
      'Cân bàn điện tử công nghiệp tải trọng 500kg'
    ],
    warningNote: 'Điện áp 6V. Sạc bằng củ sạc 6V chuyên dụng.',
    packOptions: [
      { id: 'p-1', name: '1 Bình 6V-12Ah', count: 1, price: 235000, originalPrice: 290000, isPopular: true },
      { id: 'p-2', name: 'Combo 2 bình', count: 2, price: 450000, originalPrice: 580000 }
    ],
    rating: 4.91,
    reviewCount: 320,
    inStock: true,
    colorScheme: {
      primary: 'from-sky-600 to-slate-900',
      accent: '#0284c7',
      border: 'border-sky-500/30'
    }
  },
  {
    id: 'h-cr2477-coin',
    name: 'Hbattery Coin Master CR2477 3V',
    series: 'Coin Master Lithium Cell',
    tagline: 'Dung lượng cực đại 1,000mAh - Cảm biến địa chấn & Thẻ RFID',
    code: 'CR2477 / DL2477 / ECR2477',
    size: 'CR2477',
    chemistry: 'lithium-coin',
    voltage: '3.0V',
    capacity: '1,000 mAh (Kỷ lục nút áo)',
    shelfLifeYears: 10,
    operatingTemp: '-40°C đến 85°C',
    badge: 'Dung Lượng Nút Áo 1,000mAh',
    description: 'Pin cúc áo dày nhất trong gia đình Lithium Coin với độ dày 7.7mm và dung lượng kỷ lục 1,000mAh. Hoạt động liên tục 5-8 năm trong các thiết bị đo địa chấn, cảm biến môi trường công nghiệp và thẻ định vị RFID.',
    features: [
      'Dung lượng khủng khiếp 1,000mAh trong kích thước đồng xu Ø24.5 x 7.7mm',
      'Chịu nhiệt độ công nghiệp khắc nghiệt từ -40°C đến 85°C',
      'Tuổi thọ làm việc bền bỉ từ 5 đến 8 năm liên tục'
    ],
    recommendedDevices: [
      'Cảm biến theo dõi nhiệt ẩm trạm khí tượng công nghiệp',
      'Thẻ định vị hàng hải & thẻ RFID container',
      'Thiết bị đo áp suất đường ống dẫn dầu khí'
    ],
    warningNote: 'Pin dùng 1 lần. Chú ý độ dày 7.7mm (dày hơn CR2450).',
    packOptions: [
      { id: 'p-1', name: 'Vỉ 1 viên công nghiệp', count: 1, price: 45000, originalPrice: 58000 },
      { id: 'p-5', name: 'Vỉ 5 viên (Tiết kiệm)', count: 5, price: 195000, originalPrice: 260000, isPopular: true }
    ],
    rating: 4.97,
    reviewCount: 210,
    inStock: true,
    colorScheme: {
      primary: 'from-sky-600 to-slate-900',
      accent: '#0284c7',
      border: 'border-sky-500/40'
    }
  },
  {
    id: 'h-er14250-lithium',
    name: 'Hbattery Industrial Li-SOCl2 ER14250 (3.6V)',
    series: 'Industrial High Energy Lithium',
    tagline: 'Pin 1/2 AA Lithium 3.6V - Chuyên công tơ điện tử thông minh EVN',
    code: 'ER14250 / 1/2 AA / Li-SOCl2 / 3.6V',
    size: 'ER14250',
    chemistry: 'lithium-primary',
    voltage: '3.6V',
    capacity: '1,200 mAh',
    shelfLifeYears: 15,
    operatingTemp: '-55°C đến 85°C',
    badge: 'Công Tơ Điện Tử & Đo Nước',
    description: 'Pin Lithium Thionyl Chloride (Li-SOCl2) điện áp cao 3.6V dạng nửa viên AA (1/2 AA). Độ tự xả siêu thấp dưới 1%/năm, hoạt động liên tục 10 năm trong công tơ điện thông minh EVN, đồng hồ nước và mạch PLC công nghiệp.',
    features: [
      'Điện áp cao 3.6V ổn định suốt chu kỳ xả',
      'Tuổi thọ cất kho và vận hành lên đến 15 năm',
      'Dải nhiệt độ cực hạn từ -55°C đến 85°C'
    ],
    recommendedDevices: [
      'Công tơ điện tử đo xa thông minh EVN (Gelex, Vinasino, Elster)',
      'Đồng hồ đo lưu lượng nước điện tử',
      'Mạch nuôi nhớ PLC Siemens, Mitsubishi, Omron',
      'Cảm biến báo cháy không dây chuyên dụng'
    ],
    warningNote: 'PIN LITHIUM THIONYL CHLORIDE 3.6V DÙNG 1 LẦN. Nguy hiểm: Tuyệt đối không sạc lại, không chập mạch.',
    packOptions: [
      { id: 'p-1', name: '1 Viên công nghiệp', count: 1, price: 55000, originalPrice: 70000 },
      { id: 'p-4', name: 'Lốc 4 viên', count: 4, price: 198000, originalPrice: 260000, isPopular: true },
      { id: 'p-10', name: 'Hộp 10 viên kỹ thuật', count: 10, price: 460000, originalPrice: 600000 }
    ],
    rating: 4.99,
    reviewCount: 380,
    inStock: true,
    colorScheme: {
      primary: 'from-sky-700 via-cyan-800 to-slate-950',
      accent: '#06b6d4',
      border: 'border-cyan-400/40'
    }
  },
  {
    id: 'h-er14505-lithium',
    name: 'Hbattery Industrial Li-SOCl2 ER14505 (3.6V)',
    series: 'Industrial High Energy Lithium',
    tagline: 'Pin AA Lithium 3.6V công nghiệp - Thiết bị truyền tin LoRaWAN',
    code: 'ER14505 / AA 3.6V / Li-SOCl2',
    size: 'ER14505',
    chemistry: 'lithium-primary',
    voltage: '3.6V',
    capacity: '2,700 mAh',
    shelfLifeYears: 15,
    operatingTemp: '-55°C đến 85°C',
    badge: 'IoT Truyền Tin LoRaWAN 3.6V',
    description: 'Pin công nghiệp kích thước cỡ AA chuẩn nhưng mang điện thế cực cao 3.6V hóa học Li-SOCl2, phục vụ các thiết bị cảm biến không dây truyền sóng LoRaWAN, NB-IoT và hệ thống quan trắc đập thủy điện.',
    features: [
      'Điện áp danh định 3.6V, dung lượng 2,700mAh',
      'Độ tin cậy hàng đầu cho thiết bị lắp đặt nơi hiểm trở 10 năm không cần thay pin',
      'Vỏ thép không gỉ hàn kín laser'
    ],
    recommendedDevices: [
      'Thiết bị phát sóng tầm xa LoRaWAN, NB-IoT thông minh',
      'Hệ thống quan trắc địa kỹ thuật, đập thủy điện, cầu đường',
      'Hộp đen định vị công ten nơ hàng hải'
    ],
    warningNote: 'Điện thế 3.6V (Gấp hơn 2 lần pin AA 1.5V thông thường). Không lắp nhầm vào thiết bị dùng pin AA 1.5V.',
    packOptions: [
      { id: 'p-1', name: '1 Viên công nghiệp 3.6V', count: 1, price: 65000, originalPrice: 85000 },
      { id: 'p-4', name: 'Lốc 4 viên', count: 4, price: 239000, originalPrice: 320000, isPopular: true }
    ],
    rating: 4.98,
    reviewCount: 260,
    inStock: true,
    colorScheme: {
      primary: 'from-sky-700 via-cyan-900 to-slate-950',
      accent: '#06b6d4',
      border: 'border-cyan-400/40'
    }
  },
  {
    id: 'h-cr-v3-lithium',
    name: 'Hbattery Photo Lithium CR-V3 (3V)',
    series: 'Extreme Lithium Primary',
    tagline: 'Khối pin đôi thay thế 2 pin AA - Máy ảnh số compact Olympus, Kodak',
    code: 'CR-V3 / LB-01 / DLCRV3',
    size: 'CR-V3',
    chemistry: 'lithium-primary',
    voltage: '3.0V',
    capacity: '3,000 mAh',
    shelfLifeYears: 10,
    operatingTemp: '-20°C đến 60°C',
    badge: 'Máy Ảnh Số Compact 3V',
    description: 'Pin khối Lithium 3V có hình dạng tương đương 2 viên pin AA đặt cạnh nhau, chuyên cấp nguồn cho các dòng máy ảnh số compact kinh điển của Olympus Camedia, Kodak EasyShare, Pentax Optio chụp liên tục hàng ngàn kiểu ảnh.',
    features: [
      'Dung lượng lớn 3,000mAh chụp gấp 5 lần pin kiềm thông thường',
      'Nạp đèn flash cực nhanh không bị delay',
      'Bảo quản 10 năm nguyên seal'
    ],
    recommendedDevices: [
      'Máy ảnh kỹ thuật số Olympus Camedia C-Series, D-Series',
      'Máy ảnh Kodak EasyShare DX, CX, Z-Series',
      'Máy ảnh Pentax Optio 330/430'
    ],
    warningNote: 'Pin Lithium sơ cấp dùng 1 lần. Không sạc lại.',
    packOptions: [
      { id: 'p-1', name: 'Vỉ 1 viên nguyên seal', count: 1, price: 95000, originalPrice: 120000, isPopular: true },
      { id: 'p-2', name: 'Combo 2 viên (Thợ ảnh)', count: 2, price: 179000, originalPrice: 230000 }
    ],
    rating: 4.92,
    reviewCount: 170,
    inStock: true,
    colorScheme: {
      primary: 'from-sky-700 to-slate-950',
      accent: '#0284c7',
      border: 'border-sky-500/30'
    }
  },
  {
    id: 'h-sr1130sw-silver',
    name: 'Hbattery Watch Silver Oxide SR1130SW (389)',
    series: 'Precision Watch Silver Oxide',
    tagline: 'Pin bạc oxit 1.55V cỡ lớn - Đồng hồ lặn biển Seiko & Citizen Pro',
    code: 'SR1130SW / 389 / 390 / V389 / D389',
    size: 'SR1130SW',
    chemistry: 'silver-oxide',
    voltage: '1.55V',
    capacity: '80 mAh',
    shelfLifeYears: 5,
    operatingTemp: '-10°C đến 60°C',
    badge: 'Chuyên Đồng Hồ Lặn Biển',
    description: 'Pin Oxit Bạc 1.55V đường kính 11.6mm dày 3.1mm dung lượng cao 80mAh, chuyên dụng cho đồng hồ thợ lặn chuyên nghiệp Seiko Prospex, Citizen Promaster và đồng hồ đo độ sâu đáy biển.',
    features: [
      'Dung lượng cao 80mAh đáp ứng cảm biến đo áp suất nước sâu',
      'Đường cong xả siêu phẳng 1.55V',
      'Công nghệ chống rò rỉ bảo vệ máy đồng hồ đắt tiền'
    ],
    recommendedDevices: [
      'Đồng hồ lặn biển chuyên nghiệp Seiko Prospex, Citizen Promaster',
      'Đồng hồ đo áp suất máy bay, máy lặn biển',
      'Thiết bị đo y tế chính xác cao'
    ],
    warningNote: 'Pin Oxit Bạc dùng 1 lần. Không sạc lại.',
    packOptions: [
      { id: 'p-1', name: 'Vỉ 1 viên chuẩn thợ', count: 1, price: 32000, originalPrice: 40000 },
      { id: 'p-5', name: 'Vỉ 5 viên (Thợ sửa đồng hồ)', count: 5, price: 135000, originalPrice: 175000, isPopular: true }
    ],
    rating: 4.97,
    reviewCount: 340,
    inStock: true,
    colorScheme: {
      primary: 'from-sky-600 to-slate-900',
      accent: '#0284c7',
      border: 'border-sky-400/40'
    }
  },
  {
    id: 'h-sr726sw-silver',
    name: 'Hbattery Watch Silver Oxide SR726SW (397)',
    series: 'Precision Watch Silver Oxide',
    tagline: 'Pin bạc oxit 1.55V nhỏ mỏng - Đồng hồ thời trang Michael Kors & Guess',
    code: 'SR726SW / 397 / 396 / V397',
    size: 'SR726SW',
    chemistry: 'silver-oxide',
    voltage: '1.55V',
    capacity: '32 mAh',
    shelfLifeYears: 5,
    operatingTemp: '-10°C đến 60°C',
    badge: 'Đồng Hồ Thời Trang Mỹ',
    description: 'Pin Oxit Bạc đường kính 7.9mm dày 2.6mm cho các thương hiệu đồng hồ thời trang nổi tiếng của Mỹ và châu Âu như Michael Kors, Guess, Marc Jacobs, Fossil.',
    features: [
      'Độ dày 2.6mm vừa vặn khung máy mỏng',
      'Điện áp phẳng 1.55V không lệch giờ',
      'Vỏ mạ niken không ố rỉ'
    ],
    recommendedDevices: [
      'Đồng hồ thời trang Michael Kors, Guess, Marc Jacobs, DKNY',
      'Đồng hồ đeo tay nữ Tissot, Longines',
      'Nhiệt kế đo trán siêu nhỏ'
    ],
    warningNote: 'Pin dùng 1 lần. Không sạc lại.',
    packOptions: [
      { id: 'p-1', name: 'Vỉ 1 viên', count: 1, price: 28000, originalPrice: 35000 },
      { id: 'p-5', name: 'Vỉ 5 viên', count: 5, price: 110000, originalPrice: 145000, isPopular: true }
    ],
    rating: 4.93,
    reviewCount: 290,
    inStock: true,
    colorScheme: {
      primary: 'from-sky-500 to-slate-800',
      accent: '#0284c7',
      border: 'border-sky-400/30'
    }
  },
  {
    id: 'h-zinc-air-a312',
    name: 'Hbattery SoundPro Zinc-Air A312 (Màu Nâu)',
    series: 'SoundPro Zinc-Air Medical',
    tagline: 'Pin kẽm khí y tế - Âm thanh trong trẻo cho Máy Trợ Thính',
    code: 'PR41 / Brown / 312 / ZA312',
    size: 'A312',
    chemistry: 'zinc-air',
    voltage: '1.45V',
    capacity: '180 mAh',
    shelfLifeYears: 4,
    operatingTemp: '0°C đến 50°C',
    badge: 'Y Tế Máy Trợ Thính (Nâu)',
    description: 'Pin kẽm khí Hbattery SoundPro A312 kích hoạt bằng không khí quyển (bóc miếng tem dán 1 phút trước khi lắp). Cung cấp điện áp siêu ổn định 1.45V cho máy trợ thính không bị rè hay gián đoạn âm thanh.',
    features: [
      'Tem dán kéo dài dễ cầm nắm thao tác cho người lớn tuổi',
      'Kích hoạt bằng oxy không khí, dung lượng mật độ cao gấp đôi pin nút áo thông thường',
      'Đạt chuẩn kiểm định an toàn thiết bị y tế quốc tế'
    ],
    recommendedDevices: [
      'Máy trợ thính kỹ thuật số đeo sau tai (BTE) và trong ống tai (RIC)',
      'Thiết bị khuếch đại âm thanh y tế Phonak, Oticon, Signia, Widex'
    ],
    warningNote: 'Bóc tem dán và để ngoài không khí 1 phút trước khi đưa vào máy. Pin dùng 1 lần, tuyệt đối không sạc.',
    packOptions: [
      { id: 'p-6', name: 'Vỉ 6 viên (Mã màu Nâu)', count: 6, price: 69000, originalPrice: 85000, isPopular: true },
      { id: 'p-30', name: 'Hộp 30 viên (Gói 1 tháng người cao tuổi)', count: 30, price: 299000, originalPrice: 390000 }
    ],
    rating: 4.95,
    reviewCount: 320,
    inStock: true,
    colorScheme: {
      primary: 'from-amber-600 via-sky-600 to-slate-900',
      accent: '#d97706',
      border: 'border-amber-400/40'
    }
  },
  {
    id: 'h-zinc-air-a10',
    name: 'Hbattery SoundPro Zinc-Air A10 (Màu Vàng)',
    series: 'SoundPro Zinc-Air Medical',
    tagline: 'Pin trợ thính siêu nhỏ lọt ống tai (CIC) - Mã màu Vàng',
    code: 'PR70 / Yellow / 10 / ZA10',
    size: 'A10',
    chemistry: 'zinc-air',
    voltage: '1.45V',
    capacity: '100 mAh',
    shelfLifeYears: 4,
    operatingTemp: '0°C đến 50°C',
    badge: 'Trợ Thính Siêu Nhỏ (Vàng)',
    description: 'Pin kẽm khí kích thước siêu nhỏ chỉ 5.8mm x 3.6mm, được mã hóa màu Vàng theo quy chuẩn quốc tế, dành cho máy trợ thính siêu nhỏ nằm hoàn toàn lọt trong ống tai thẩm mỹ không lộ.',
    features: [
      'Mã màu Vàng (Yellow) chuẩn quốc tế quy ước',
      'Đường kính siêu nhỏ 5.8mm',
      'Chất lượng âm thanh trung thực không có tạp âm nền'
    ],
    recommendedDevices: [
      'Máy trợ thính hoàn toàn trong ống tai (CIC) siêu nhỏ thẩm mỹ',
      'Máy trợ thính vô hình trong tai (IIC) Signia Silk, Phonak Virto'
    ],
    warningNote: 'Bóc tem dán 1 phút trước khi lắp. Pin dùng 1 lần.',
    packOptions: [
      { id: 'p-6', name: 'Vỉ 6 viên (Mã màu Vàng)', count: 6, price: 69000, originalPrice: 85000, isPopular: true },
      { id: 'p-30', name: 'Hộp 30 viên', count: 30, price: 299000, originalPrice: 390000 }
    ],
    rating: 4.96,
    reviewCount: 210,
    inStock: true,
    colorScheme: {
      primary: 'from-yellow-600 via-sky-600 to-slate-900',
      accent: '#eab308',
      border: 'border-yellow-400/40'
    }
  },
  {
    id: 'h-zinc-air-a13',
    name: 'Hbattery SoundPro Zinc-Air A13 (Màu Cam)',
    series: 'SoundPro Zinc-Air Medical',
    tagline: 'Pin trợ thính công suất lớn đeo sau tai - Mã màu Cam',
    code: 'PR48 / Orange / 13 / ZA13',
    size: 'A13',
    chemistry: 'zinc-air',
    voltage: '1.45V',
    capacity: '310 mAh',
    shelfLifeYears: 4,
    operatingTemp: '0°C đến 50°C',
    badge: 'Trợ Thính Công Suất Lớn (Cam)',
    description: 'Pin kẽm khí mã màu Cam kích thước 7.9mm x 5.4mm dung lượng cao 310mAh, thời gian sử dụng lên đến 10-14 ngày cho các máy trợ thính công suất cao đeo sau vành tai (BTE).',
    features: [
      'Mã màu Cam (Orange) quốc tế',
      'Dung lượng 310mAh - sử dụng bền bỉ 10-14 ngày liên tục',
      'Giữ âm lượng to rõ không méo tiếng'
    ],
    recommendedDevices: [
      'Máy trợ thính đeo sau tai công suất cao (BTE)',
      'Máy trợ thính cho người khiếm thính mức độ nặng'
    ],
    warningNote: 'Bóc tem dán 1 phút trước khi lắp. Pin dùng 1 lần.',
    packOptions: [
      { id: 'p-6', name: 'Vỉ 6 viên (Mã màu Cam)', count: 6, price: 69000, originalPrice: 85000, isPopular: true },
      { id: 'p-30', name: 'Hộp 30 viên', count: 30, price: 299000, originalPrice: 390000 }
    ],
    rating: 4.94,
    reviewCount: 195,
    inStock: true,
    colorScheme: {
      primary: 'from-orange-600 via-sky-600 to-slate-900',
      accent: '#f97316',
      border: 'border-orange-400/40'
    }
  },
  {
    id: 'h-zinc-air-a675',
    name: 'Hbattery SoundPro Zinc-Air A675 (Màu Xanh Lam)',
    series: 'SoundPro Zinc-Air Medical',
    tagline: 'Pin cực đại cho Cấy Ốc Tai Điện Tử & Máy trợ thính Super Power',
    code: 'PR44 / Blue / 675 / ZA675 / Cochlear',
    size: 'A675',
    chemistry: 'zinc-air',
    voltage: '1.45V',
    capacity: '650 mAh',
    shelfLifeYears: 4,
    operatingTemp: '0°C đến 50°C',
    badge: 'Cấy Ốc Tai & Super Power (Lam)',
    description: 'Pin kẽm khí kích thước lớn nhất trong dòng y tế, dung lượng cực đại 650mAh, chuyên dùng cho bộ xử lý âm thanh cấy ốc tai điện tử Cochlear và máy trợ thính siêu công suất.',
    features: [
      'Mã màu Xanh Lam (Blue) quy ước quốc tế',
      'Dung lượng khổng lồ 650mAh đáp ứng xung dòng cao của bộ cấy ốc tai',
      'Chứng nhận an toàn thiết bị cấy ghép y tế cao cấp'
    ],
    recommendedDevices: [
      'Bộ xử lý âm thanh cấy ốc tai điện tử (Cochlear Nucleus, MED-EL, Advanced Bionics)',
      'Máy trợ thính siêu công suất Super Power (BTE SP)'
    ],
    warningNote: 'Bóc tem dán 1 phút trước khi lắp. Pin dùng 1 lần.',
    packOptions: [
      { id: 'p-6', name: 'Vỉ 6 viên (Mã màu Lam)', count: 6, price: 85000, originalPrice: 105000, isPopular: true },
      { id: 'p-30', name: 'Hộp 30 viên', count: 30, price: 380000, originalPrice: 480000 }
    ],
    rating: 4.97,
    reviewCount: 160,
    inStock: true,
    colorScheme: {
      primary: 'from-blue-600 via-sky-600 to-slate-900',
      accent: '#2563eb',
      border: 'border-blue-400/40'
    }
  }
];

export const DEVICE_FINDER_DATA: DeviceRecommendation[] = [
  // Smartkey Ô tô & Xe máy
  {
    category: 'Chìa khóa xe Smartkey',
    deviceExample: 'Smartkey xe Honda (SH, SH Mode, Lead, AirBlade, Vision)',
    recommendedBatteryId: 'h-cr2032-coin',
    batteryName: 'Hbattery Coin Master CR2032 3V',
    batterySize: 'CR2032',
    reason: 'Chuẩn 3.0V xả mạnh giúp sóng nhận diện xe nhạy từ khoảng cách xa, tuổi thọ 2-3 năm.'
  },
  {
    category: 'Chìa khóa xe Smartkey',
    deviceExample: 'Smartkey ô tô Toyota Camry, Lexus (RX, ES, NX), Hilux, Altis',
    recommendedBatteryId: 'h-cr1632-coin',
    batteryName: 'Hbattery Coin Master CR1632 3V',
    batterySize: 'CR1632',
    reason: 'Chuẩn chân khay chìa khóa Toyota/Lexus, viền dập kín không sợ hỏng mạch khóa vài chục triệu.'
  },
  {
    category: 'Chìa khóa xe Smartkey',
    deviceExample: 'Smartkey xe Mazda 2, Mazda 3, Suzuki Swift, Ertiga',
    recommendedBatteryId: 'h-cr1620-coin',
    batteryName: 'Hbattery Coin Master CR1620 3V',
    batterySize: 'CR1620',
    reason: 'Độ mỏng 2.0mm vừa khít chìa khóa Mazda và Suzuki, phát tín hiệu mở cốp cực nhạy.'
  },
  {
    category: 'Chìa khóa xe Smartkey',
    deviceExample: 'Chìa khóa ô tô Honda City, Civic, CR-V, Accord (bản 3-4 nút)',
    recommendedBatteryId: 'h-cr1616-coin',
    batteryName: 'Hbattery Coin Master CR1616 3V',
    batterySize: 'CR1616',
    reason: 'Độ mỏng 1.6mm chuẩn xác cho chìa khóa ô tô Honda đời mới.'
  },
  {
    category: 'Chìa khóa xe Smartkey',
    deviceExample: 'Smartkey ô tô Hyundai, Kia, Ford, Mazda CX-5, Mitsubishi',
    recommendedBatteryId: 'h-cr2032-coin',
    batteryName: 'Hbattery Coin Master CR2032 3V',
    batterySize: 'CR2032',
    reason: 'Độ ổn định cao, đảm bảo mở cửa xe và đề nổ Start/Stop nhạy bén tức thì.'
  },
  {
    category: 'Chìa khóa xe Smartkey',
    deviceExample: 'Chìa khóa Mercedes-Benz, Audi, Nissan (bản mỏng dạng thẻ)',
    recommendedBatteryId: 'h-cr2025-coin',
    batteryName: 'Hbattery Coin Master CR2025 3V',
    batterySize: 'CR2025',
    reason: 'Độ mỏng 2.5mm vừa khít khay chìa khóa mỏng của xe Đức sang trọng.'
  },

  // Khóa cửa thông minh
  {
    category: 'Khóa cửa vân tay thông minh',
    deviceExample: 'Khóa cửa Kaadas, Yale, Bosch, Samsung, Hafele (Khay 4 hoặc 8 viên AA)',
    recommendedBatteryId: 'h-aa-alkaline',
    batteryName: 'Hbattery Ultra Alkaline AA (LR6)',
    batterySize: 'AA',
    reason: 'Bắt buộc dùng pin Alkaline chống chảy nước; màng PowerLock kép bảo vệ bo mạch khóa cửa giá trị cao.'
  },

  // Máy tính bảng & Bút cảm ứng
  {
    category: 'Bút cảm ứng Stylus & Đồ họa',
    deviceExample: 'Bút cảm ứng Microsoft Surface Pen, Surface Pro 7/8/9, Dell Active Pen',
    recommendedBatteryId: 'h-aaaa-alkaline',
    batteryName: 'Hbattery Micro Alkaline AAAA (LR61)',
    batterySize: 'AAAA',
    reason: 'Pin AAAA siêu mảnh 8.3mm giữ độ nhạy cảm ứng áp lực 4,096 mức khi vẽ và viết chữ nét thanh nét đậm.'
  },

  // Đồng hồ đeo tay & Treo tường
  {
    category: 'Đồng hồ đeo tay & Treo tường',
    deviceExample: 'Đồng hồ treo tường kim trôi (Seiko, Rhythm, Kashi)',
    recommendedBatteryId: 'h-heavy-aa-carbon',
    batteryName: 'Hbattery Super Heavy Duty AA Carbon-Zinc',
    batterySize: 'AA',
    reason: 'Dòng điện xả êm ái thích hợp tuyệt đối cho cuộn dây động cơ đồng hồ kim trôi không bị quá dòng.'
  },
  {
    category: 'Đồng hồ đeo tay & Treo tường',
    deviceExample: 'Đồng hồ đeo tay máy Quartz thông thường (Casio, Seiko, Citizen, DW)',
    recommendedBatteryId: 'h-sr626sw-silver',
    batteryName: 'Hbattery Watch Silver Oxide SR626SW (377)',
    batterySize: 'SR626SW',
    reason: 'Điện áp 1.55V oxit bạc giữ độ chính xác tuyệt đối từng giây, không lo trễ giờ.'
  },
  {
    category: 'Đồng hồ đeo tay & Treo tường',
    deviceExample: 'Đồng hồ đeo tay nữ siêu mỏng Daniel Wellington Petite, Citizen Ladies',
    recommendedBatteryId: 'h-sr621sw-silver',
    batteryName: 'Hbattery Watch Silver Oxide SR621SW (364)',
    batterySize: 'SR621SW',
    reason: 'Độ mỏng 2.1mm vừa vặn đáy đồng hồ nữ mỏng, oxit bạc 1.55V chạy bền 2 năm.'
  },
  {
    category: 'Đồng hồ đeo tay & Treo tường',
    deviceExample: 'Đồng hồ nam thể thao Chronograph 6 kim Casio Edifice, Tissot',
    recommendedBatteryId: 'h-sr920sw-silver',
    batteryName: 'Hbattery Watch Silver Oxide SR920SW (371)',
    batterySize: 'SR920SW',
    reason: 'Dung lượng cao 40mAh cấp nguồn đủ cho nhiều động cơ bấm giờ chạy đồng thời.'
  },

  // Thiết bị giải trí & Smart Home
  {
    category: 'Thiết bị giải trí & Smart Home',
    deviceExample: 'Remote TV thông minh (Samsung Smart, Sony Voice, LG Magic Remote)',
    recommendedBatteryId: 'h-aaa-alkaline',
    batteryName: 'Hbattery Ultra Alkaline AAA (LR03)',
    batterySize: 'AAA',
    reason: 'Đáp ứng tốt micro nhận diện giọng nói và chuột bay bluetooth tiêu tốn pin nhiều hơn remote cũ.'
  },
  {
    category: 'Thiết bị giải trí & Smart Home',
    deviceExample: 'Cảm biến nhà thông minh Aqara Zigbee / Philips Hue',
    recommendedBatteryId: 'h-cr2450-coin',
    batteryName: 'Hbattery Coin Master CR2450 3V',
    batterySize: 'CR2450',
    reason: 'Dung lượng khổng lồ 620mAh duy trì kết nối mạng Zigbee không ngắt quãng trong 2 năm.'
  },

  // Thiết bị nhà bếp & Đèn pin
  {
    category: 'Thiết bị nhà bếp & Đèn pin',
    deviceExample: 'Bếp gas âm cao cấp (Rinnai, Bosch, Teka, Sunhouse)',
    recommendedBatteryId: 'h-d-alkaline',
    batteryName: 'Hbattery Max Power D (LR20)',
    batterySize: 'D',
    reason: 'Dung lượng 17,500mAh đánh lửa nhạy bén từ 2 đến 3 năm mà không sợ chảy axit vào hộc bếp.'
  },

  // Nhiếp ảnh & Máy ảnh film
  {
    category: 'Nhiếp ảnh & Thám hiểm',
    deviceExample: 'Đèn Flash máy ảnh chuyên nghiệp (Godox, Canon Speedlite, Sony)',
    recommendedBatteryId: 'h-aa-lithium',
    batteryName: 'Hbattery Extreme Lithium AA (FR6)',
    batterySize: 'AA',
    reason: 'Hồi đèn siêu nhanh trong 1.5s, nhẹ hơn 33%, chụp liên tục hàng ngàn shot ảnh không tụt áp.'
  },
  {
    category: 'Nhiếp ảnh & Thám hiểm',
    deviceExample: 'Máy ảnh chụp lấy liền Fujifilm Instax Mini 25, 50s, 70',
    recommendedBatteryId: 'h-cr2-lithium',
    batteryName: 'Hbattery Photo Lithium CR2 (3V)',
    batterySize: 'CR2',
    reason: 'Chuẩn 3.0V lithium nạp flash tức thì chỉ 3 giây, chụp hơn 300 tấm phim.'
  },
  {
    category: 'Nhiếp ảnh & Thám hiểm',
    deviceExample: 'Máy ảnh film SLR chuyên nghiệp Canon EOS 1V, EOS 3, EOS 5, Pentax Z-1',
    recommendedBatteryId: 'h-2cr5-lithium',
    batteryName: 'Hbattery Photo Lithium 2CR5 (6V)',
    batterySize: '2CR5',
    reason: 'Khối pin đôi 6V phóng dòng cực đại giúp mô-tơ cuốn phim bắn liên thanh 6 khung hình/giây.'
  },
  {
    category: 'Nhiếp ảnh & Thám hiểm',
    deviceExample: 'Máy ảnh film Canon AE-1, Canon AE-1 Program huyền thoại',
    recommendedBatteryId: 'h-4lr44-alkaline',
    batteryName: 'Hbattery High Voltage 4LR44 (6V)',
    batterySize: '4LR44',
    reason: 'Chuẩn 6.0V kích hoạt cuộn nam châm điện nhả màn trập kinh điển Canon AE-1.'
  },
  {
    category: 'Nhiếp ảnh & Thám hiểm',
    deviceExample: 'Đèn pin tác chiến Surefire, Fenix, Nitecore, Camera an ninh Arlo',
    recommendedBatteryId: 'h-cr123a-lithium',
    batteryName: 'Hbattery Photo Lithium CR123A (3V)',
    batterySize: 'CR123A',
    reason: 'Điện áp 3V xả xung cực đại, chịu nhiệt -40°C đến 70°C ngoài trời.'
  },

  // Y tế & Sức khỏe
  {
    category: 'Y tế & Đo đạc',
    deviceExample: 'Nhiệt kế điện tử kẹp nách Microlife MT200, Citizen',
    recommendedBatteryId: 'h-lr41-button',
    batteryName: 'Hbattery Micro Alkaline LR41 (AG3)',
    batterySize: 'LR41',
    reason: 'Chuẩn LR41 1.5V mạ niken tiếp xúc nhạy, đo thân nhiệt chuẩn xác 0.1°C.'
  },
  {
    category: 'Y tế & Đo đạc',
    deviceExample: 'Nhiệt kế điện tử Omron MC-246, MC-343F',
    recommendedBatteryId: 'h-cr1220-coin',
    batteryName: 'Hbattery Coin Master CR1220 3V',
    batterySize: 'CR1220',
    reason: 'Kích thước nhỏ 12mm 3.0V chính xác tuyệt đối theo tiêu chuẩn y khoa Omron.'
  },
  {
    category: 'Y tế & Đo đạc',
    deviceExample: 'Thước kẹp cơ khí điện tử Mitutoyo, máy tính Casio FX-580',
    recommendedBatteryId: 'h-lr44-button',
    batteryName: 'Hbattery Micro Alkaline LR44 (AG13)',
    batterySize: 'LR44',
    reason: 'Không rò rỉ dung dịch, cấp điện liên tục 1.5V không mờ màn hình hiển thị số.'
  },
  {
    category: 'Y tế & Đo đạc',
    deviceExample: 'Máy trợ thính người cao tuổi loại thông dụng (Mã màu Nâu)',
    recommendedBatteryId: 'h-zinc-air-a312',
    batteryName: 'Hbattery SoundPro Zinc-Air A312 (Màu Nâu)',
    batterySize: 'A312',
    reason: 'Kẽm khí 1.45V cung cấp âm thanh trung thực không rè nhiễu, tem dán kéo dài dễ thao tác.'
  },
  {
    category: 'Y tế & Đo đạc',
    deviceExample: 'Máy trợ thính siêu nhỏ lọt sâu trong tai CIC (Mã màu Vàng)',
    recommendedBatteryId: 'h-zinc-air-a10',
    batteryName: 'Hbattery SoundPro Zinc-Air A10 (Màu Vàng)',
    batterySize: 'A10',
    reason: 'Kích thước siêu nhỏ 5.8mm mã màu Vàng chuẩn quốc tế cho dòng máy trợ thính thẩm mỹ.'
  },
  {
    category: 'Y tế & Đo đạc',
    deviceExample: 'Bộ xử lý âm thanh Cấy Ốc Tai Điện Tử (Cochlear, MED-EL)',
    recommendedBatteryId: 'h-zinc-air-a675',
    batteryName: 'Hbattery SoundPro Zinc-Air A675 (Màu Xanh Lam)',
    batterySize: 'A675',
    reason: 'Dung lượng 650mAh cực đại chịu tải giải mã âm thanh số phức tạp của ốc tai điện tử.'
  },

  // Cửa cuốn & Chuông
  {
    category: 'Cửa cuốn & Chuông cửa',
    deviceExample: 'Remote điều khiển cửa cuốn Austdoor, BossDoor, Eurodoor',
    recommendedBatteryId: 'h-a23-alkaline',
    batteryName: 'Hbattery High Voltage A23 (12V)',
    batterySize: 'A23',
    reason: 'Điện áp 12V sóng RF phát xa 50m xuyên cổng, nhận lệnh đóng mở ngay lần bấm đầu tiên.'
  },
  {
    category: 'Cửa cuốn & Chuông cửa',
    deviceExample: 'Remote cổng tự động sắt mở cánh FAAC, BFT, DEA',
    recommendedBatteryId: 'h-a27-alkaline',
    batteryName: 'Hbattery High Voltage A27 (12V)',
    batterySize: 'A27',
    reason: 'Độ mảnh 8mm điện áp 12V truyền tín hiệu mở cổng xa xuyên tường rào.'
  },

  // Ắc quy & Bộ lưu điện
  {
    category: 'Ắc quy & Lưu điện dự phòng',
    deviceExample: 'Bộ lưu điện UPS máy tính APC, Santak, hộp lưu điện Cửa cuốn',
    recommendedBatteryId: 'h-accu-12v-7-2ah',
    batteryName: 'Hbattery VRLA AGM 12V-7.2Ah Khô Kín Khí',
    batterySize: '12V-7.2Ah',
    reason: 'Ắc quy khô AGM miễn bảo dưỡng, dòng phóng tức thời mạnh mẽ giữ điện cho máy tính và motor cửa cuốn khi cúp điện.'
  },
  {
    category: 'Ắc quy & Lưu điện dự phòng',
    deviceExample: 'Xe đạp điện Asama, Nijia, Giant, Loa kéo karaoke di động',
    recommendedBatteryId: 'h-accu-12v-12ah',
    batteryName: 'Hbattery Deep Cycle VRLA 12V-12Ah',
    batterySize: '12V-12Ah',
    reason: 'Bản cực chì dày xả sâu chịu hơn 500 chu kỳ nạp xả liên tục, chạy êm cả ngày.'
  },
  {
    category: 'Ắc quy & Lưu điện dự phòng',
    deviceExample: 'Xe máy Honda (Wave, Vision, Lead, AirBlade) & Yamaha (Exciter, Sirius)',
    recommendedBatteryId: 'h-accu-12v-5ah',
    batteryName: 'Hbattery Motorcycle VRLA 12V-5Ah',
    batterySize: '12V-5Ah',
    reason: 'Dòng đề nổ CCA cực mạnh, khởi động nhạy bén buổi sáng lạnh, chống rung lắc hoàn hảo.'
  },
  {
    category: 'Ắc quy & Lưu điện dự phòng',
    deviceExample: 'Đèn chiếu sáng sự cố khẩn cấp Exit PCCC Paragon, Kentom & Cân điện tử',
    recommendedBatteryId: 'h-accu-6v-4-5ah',
    batteryName: 'Hbattery Emergency VRLA 6V-4.5Ah',
    batterySize: '6V-4.5Ah',
    reason: 'Chế độ sạc đệm Standby bền bỉ 3-5 năm, luôn sáng đèn ngay tức khắc khi tòa nhà mất điện.'
  },
  {
    category: 'Ắc quy & Lưu điện dự phòng',
    deviceExample: 'Bộ kích điện Inverter 12V-220V & Hệ thống năng lượng mặt trời Solar',
    recommendedBatteryId: 'h-accu-12v-20ah',
    batteryName: 'Hbattery PowerMax VRLA AGM 12V-20Ah',
    batterySize: '12V-20Ah',
    reason: 'Dung lượng lớn 20Ah lưu trữ dồi dào, có quai xách tiện lợi cho dã ngoại và gia đình cúp điện.'
  },

  // Máy cấp cứu y tế AED & Báo cháy 15 năm
  {
    category: 'Y tế & Đo đạc',
    deviceExample: 'Máy khử rung tim tự động ngoài lồng ngực AED (Philips, Zoll) & Cảm biến khói 15 năm',
    recommendedBatteryId: 'h-9v-lithium',
    batteryName: 'Hbattery Extreme Lithium 9V (U9VL)',
    batterySize: '9V',
    reason: 'Dung lượng cực đại 1,200mAh và lưu trữ 15 năm không tự xả, độ tin cậy tuyệt đối trong tình huống cứu người.'
  }
];

export const CHEMISTRY_INFOS = {
  'alkaline': {
    title: 'Pin Kiềm Alkaline (1.5V / 6V / 9V / 12V)',
    summary: 'Công nghệ phổ biến và bền bỉ nhất cho thiết bị gia đình, khóa vân tay, đồ chơi, remote và cửa cuốn.',
    lifespan: 'Bảo quản 7 - 10 năm',
    leakProof: 'Màng PowerLock bảo vệ kép 100%'
  },
  'lithium-primary': {
    title: 'Pin Lithium Dùng 1 Lần (1.5V / 3V / 6V / 9V Sơ cấp)',
    summary: 'Đẳng cấp tối tân nhất: Nhẹ hơn 33%, chịu nhiệt băng tuyết -40°C đến 60°C, hồi đèn flash cực nhanh, máy ảnh chuyên nghiệp và máy sốc tim AED.',
    lifespan: 'Bảo quản tới 20 năm',
    leakProof: 'Cấu trúc kín hermetic không thể rò rỉ'
  },
  'lithium-coin': {
    title: 'Pin Cúc Áo Lithium Coin Cell (3V)',
    summary: 'Chuyên dụng cho chìa khóa xe Smartkey Toyota, Lexus, Mazda, Honda, Mercedes, PC CMOS, Cân điện tử và cảm biến IoT.',
    lifespan: 'Bảo quản 10 năm',
    leakProof: 'Viền dập inox SUS304 chống rỉ sét'
  },
  'silver-oxide': {
    title: 'Pin Oxit Bạc Silver Oxide (1.55V)',
    summary: 'Điện áp siêu phẳng cho máy đồng hồ đeo tay thạch anh đắt tiền Thụy Sĩ & Nhật Bản (Casio, Seiko, Citizen, DW, Tissot).',
    lifespan: 'Bảo quản 5 năm',
    leakProof: 'An toàn tuyệt đối cho vi cơ khí'
  },
  'carbon-zinc': {
    title: 'Pin Than Kẽm Carbon-Zinc (1.5V / 9V)',
    summary: 'Dòng xả êm ái, kinh tế vượt trội cho đồng hồ treo tường kim trôi, đồng hồ vạn năng học sinh và remote đơn giản.',
    lifespan: 'Bảo quản 3 năm',
    leakProof: 'Lõi than bọc kẽm tinh khiết'
  },
  'zinc-air': {
    title: 'Pin Kẽm Khí Zinc-Air (1.45V)',
    summary: 'Kích hoạt bằng oxy không khí, đầy đủ 4 mã màu quốc tế (Nâu A312, Vàng A10, Cam A13, Lam A675) cho máy trợ thính và cấy ốc tai.',
    lifespan: 'Bảo quản 4 năm',
    leakProof: 'Tem niêm phong bảo toàn dung lượng'
  },
  'lead-acid-vrla': {
    title: 'Ắc Quy Khô Kín Khí VRLA AGM & Gel (6V / 12V)',
    summary: 'Ắc quy lưu điện miễn bảo dưỡng chuyên dụng cho bộ lưu điện UPS, cửa cuốn, xe đạp điện, xe máy và đèn sự cố PCCC.',
    lifespan: 'Tuổi thọ thiết kế 3 - 6 năm',
    leakProof: 'Công nghệ sợi thủy tinh AGM chống rò rỉ axit 100%'
  }
};
