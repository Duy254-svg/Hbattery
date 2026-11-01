export type ChemistryType = 
  | 'alkaline' 
  | 'lithium-primary' 
  | 'carbon-zinc' 
  | 'silver-oxide' 
  | 'zinc-air' 
  | 'lithium-coin'
  | 'lead-acid-vrla'
  | 'nimh'
  | 'nicd'
  | 'li-ion'
  | 'lifepo4'
  | 'na-ion'
  | 'solar';

export type BatterySize = 
  | 'AA' 
  | 'AAA' 
  | 'AAAA'
  | 'C' 
  | 'D' 
  | '9V' 
  | 'N'
  | 'CR2032' 
  | 'CR2025' 
  | 'CR2016' 
  | 'CR2450' 
  | 'CR2430'
  | 'CR1632'
  | 'CR1620'
  | 'CR1616'
  | 'CR1220'
  | 'CR123A' 
  | 'CR2' 
  | '2CR5'
  | 'CRP2'
  | '4LR44'
  | 'LR44' 
  | 'LR41'
  | 'LR1130'
  | 'SR626SW' 
  | 'SR621SW'
  | 'SR920SW'
  | 'A23' 
  | 'A27' 
  | 'A10' 
  | 'A312' 
  | 'A13'
  | 'A675'
  | '12V-7.2Ah'
  | '12V-12Ah'
  | '12V-5Ah'
  | '12V-7Ah'
  | '12V-14Ah'
  | '12V-20Ah'
  | '12V-30Ah'
  | '12V-35Ah'
  | '12V-50Ah'
  | '12V-100Ah'
  | '6V-4.5Ah'
  | '6V-10Ah'
  | '6V-12Ah'
  | '18650'
  | '21700'
  | '26650'
  | 'Sub-C'
  | 'LiFePO4-12V'
  | 'LiFePO4-24V'
  | 'LiFePO4-48V'
  | 'Na-18650'
  | 'Na-32140'
  | 'Solar-60W'
  | 'Solar-100W'
  | 'Solar-200W'
  | 'Solar-450W'
  | 'CR2477'
  | 'ER14250'
  | 'ER14505'
  | 'CR-V3'
  | 'SR1130SW'
  | 'SR726SW'
  | 'CR2012'
  | 'CR2354'
  | '3R12';

export interface PackOption {
  id: string;
  name: string; // e.g. "Vỉ 2 viên", "Vỉ 4 viên", "Hộp 10 viên", "Thùng 40 viên"
  count: number;
  price: number;
  originalPrice?: number;
  isPopular?: boolean;
}

export interface BatteryProduct {
  id: string;
  name: string;
  series: string; // "Ultra Alkaline", "Lithium Extreme", "Coin Master", etc.
  tagline: string;
  code: string; // e.g., "LR6", "CR2032", "6LR61"
  size: BatterySize;
  chemistry: ChemistryType;
  voltage: string; // "1.5V", "3.0V", "9.0V", "12V", "1.45V"
  capacity: string; // "3000 mAh", "1500 mAh", "225 mAh"
  shelfLifeYears: number; // 5, 10, 15, 20
  operatingTemp: string; // "-40°C đến 60°C"
  badge?: string; // "Bán chạy nhất", "Bền gấp 10 lần", "Chống rò rỉ 100%"
  description: string;
  features: string[];
  recommendedDevices: string[];
  warningNote: string;
  packOptions: PackOption[];
  rating: number;
  reviewCount: number;
  inStock: boolean;
  colorScheme: {
    primary: string; // e.g., "from-sky-500 to-blue-700"
    accent: string;
    border: string;
  };
  isRechargeable?: boolean;
  rechargeCycles?: number; // e.g. 1000, 2100, 6000
  isSolar?: boolean;
  solarWattage?: string;
  efficiency?: string;
  dischargeCurrent?: string;
}

export interface CartItem {
  productId: string;
  packId: string;
  quantity: number;
}

export interface DeviceRecommendation {
  category: string;
  deviceExample: string;
  recommendedBatteryId: string;
  batteryName: string;
  batterySize: BatterySize;
  reason: string;
}
