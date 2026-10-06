/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { PRODUCTS, CHEMISTRY_INFOS } from './data/products';
import { BatteryProduct, BatterySize, CartItem, PackOption } from './types/battery';
import { Header } from './components/Header';
import { HeroBanner } from './components/HeroBanner';
import { ProductCard } from './components/ProductCard';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { OrderSuccessModal } from './components/OrderSuccessModal';
import { SpecComparisonModal } from './components/SpecComparisonModal';
import { BatteryGuideSection } from './components/BatteryGuideSection';
import { CustomerReviews } from './components/CustomerReviews';
import { Footer } from './components/Footer';
import { SizeSelector } from './components/SizeSelector';
import { Filter, SlidersHorizontal, Sparkles, Check, AlertCircle, ShoppingCart } from 'lucide-react';

export default function App() {
  // Products
  const [products] = React.useState<BatteryProduct[]>(PRODUCTS);

  // Filters & Search
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedChemistry, setSelectedChemistry] = React.useState('all');
  const [selectedSize, setSelectedSize] = React.useState<BatterySize | 'all'>('all');
  const [selectedDeviceTag, setSelectedDeviceTag] = React.useState('all');
  const [sortBy, setSortBy] = React.useState<'popular' | 'price-asc' | 'price-desc' | 'rating'>('popular');

  // Modals & Drawers
  const [isCartOpen, setIsCartOpen] = React.useState(false);
  const [isSpecComparisonOpen, setIsSpecComparisonOpen] = React.useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = React.useState(false);
  const [detailProduct, setDetailProduct] = React.useState<BatteryProduct | null>(null);
  const [confirmedOrder, setConfirmedOrder] = React.useState<any>(null);

  // Toast notification
  const [toastMessage, setToastMessage] = React.useState<string | null>(null);

  // Cart State with localStorage persistence
  const [cart, setCart] = React.useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('hbattery_cart');
      return saved ? JSON.parse(saved) : [
        { productId: 'h-aa-alkaline', packId: 'p-4', quantity: 2 },
        { productId: 'h-cr2032-coin', packId: 'p-5', quantity: 1 }
      ];
    } catch {
      return [];
    }
  });

  // Coupon state
  const [discountCode, setDiscountCode] = React.useState('');
  const [discountPercent, setDiscountPercent] = React.useState(0);

  // Sync cart to localStorage
  React.useEffect(() => {
    try {
      localStorage.setItem('hbattery_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  // Cart operations
  const handleAddToCart = (product: BatteryProduct, pack: PackOption, quantity: number = 1) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.productId === product.id && item.packId === pack.id
      );
      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: next[existingIndex].quantity + quantity
        };
        return next;
      } else {
        return [...prev, { productId: product.id, packId: pack.id, quantity }];
      }
    });
    showToast(`✓ Đã thêm ${pack.name} ${product.name} vào giỏ hàng`);
  };

  const handleBuyNow = (product: BatteryProduct, pack: PackOption, quantity: number = 1) => {
    handleAddToCart(product, pack, quantity);
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleUpdateQuantity = (productId: string, packId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId, packId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.productId === productId && item.packId === packId
          ? { ...item, quantity }
          : item
      )
    );
  };

  const handleRemoveItem = (productId: string, packId: string) => {
    setCart((prev) =>
      prev.filter((item) => !(item.productId === productId && item.packId === packId))
    );
  };

  const handleApplyDiscount = (code: string) => {
    if (code === 'HBATTERY10') {
      setDiscountCode('HBATTERY10');
      setDiscountPercent(10);
    } else if (code === 'FREESHIP') {
      setDiscountCode('FREESHIP');
      setDiscountPercent(0);
    }
  };

  const handleOrderSuccess = (order: any) => {
    setConfirmedOrder(order);
    setCart([]);
    setIsCheckoutOpen(false);
  };

  // Device Tags
  const deviceTags = [
    { id: 'all', label: 'Tất cả thiết bị' },
    { id: 'accu', label: 'Ắc Quy Khô & Lưu Điện UPS' },
    { id: 'smartkey', label: 'Smartkey Ô tô / Xe Máy' },
    { id: 'smartlock', label: 'Khóa Vân Tay' },
    { id: 'stylus', label: 'Bút Surface Stylus AAAA' },
    { id: 'ninev', label: 'Pin Vuông 9V (Alkaline/Lithium/Carbon)' },
    { id: 'remote', label: 'Remote Tivi/Lạnh' },
    { id: 'camera', label: 'Đèn Flash / Máy Ảnh' },
    { id: 'film', label: 'Máy Ảnh Film (2CR5/4LR44)' },
    { id: 'stove', label: 'Bếp Gas Âm (Pin D)' },
    { id: 'medical', label: 'Nhiệt Kế & Y Tế / AED' },
    { id: 'hearing', label: 'Máy Trợ Thính (Zinc-Air)' },
    { id: 'iot', label: 'Cảm Biến Smart Home' },
    { id: 'watch', label: 'Đồng Hồ Đeo Tay & Treo Tường' },
    { id: 'door', label: 'Cửa Cuốn & Chuông 12V' }
  ];

  // Filtered Products
  const filteredProducts = React.useMemo(() => {
    return products.filter((p) => {
      // Search
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matches =
          p.name.toLowerCase().includes(q) ||
          p.code.toLowerCase().includes(q) ||
          p.size.toLowerCase().includes(q) ||
          p.tagline.toLowerCase().includes(q) ||
          p.recommendedDevices.some((d) => d.toLowerCase().includes(q));
        if (!matches) return false;
      }

      // Chemistry
      if (selectedChemistry !== 'all' && p.chemistry !== selectedChemistry) {
        return false;
      }

      // Size
      if (selectedSize !== 'all' && p.size !== selectedSize) {
        return false;
      }

      // Device Tag
      if (selectedDeviceTag !== 'all') {
        const tagMap: Record<string, string[]> = {
          accu: ['ắc quy', 'ups', 'lưu điện', 'xe đạp điện', 'xe máy', 'agm', 'vrla', 'cửa cuốn', 'lead-acid', 'inverter', 'solar'],
          smartkey: ['smartkey', 'chìa khóa', 'xe hơi', 'honda', 'toyota', 'lexus', 'mazda', 'ô tô', 'cr2032', 'cr1632', 'cr1620', 'cr1616', 'cr2025'],
          smartlock: ['khóa cửa', 'vân tay', 'kaadas', 'yale', 'bosch'],
          stylus: ['bút cảm ứng', 'surface', 'stylus', 'wacom', 'aaaa', 'lr61'],
          ninev: ['9v', 'u9vl', '6lr61', '6f22', 'khử rung tim', 'aed', 'báo khói'],
          remote: ['remote', 'điều khiển', 'tivi', 'máy lạnh', 'quạt'],
          camera: ['máy ảnh', 'flash', 'cr123a', 'cr2', 'instax', 'gps'],
          film: ['máy ảnh film', 'canon ae-1', '2cr5', 'cr-p2', '4lr44', 'minolta'],
          stove: ['bếp gas', 'bình nóng lạnh', 'đại d'],
          medical: ['y tế', 'nhiệt kế', 'microlife', 'omron', 'lr41', 'cr1220', 'đường huyết', 'aed', 'khử rung tim'],
          hearing: ['trợ thính', 'zinc-air', 'a312', 'a10', 'a13', 'a675', 'ốc tai'],
          iot: ['aqara', 'zigbee', 'cảm biến', 'cr2450', 'cr2430', 'smart home'],
          watch: ['đồng hồ', 'quartz', 'treo tường', 'kim trôi', 'sr626sw', 'sr621sw', 'sr920sw', 'chronograph'],
          door: ['cửa cuốn', 'chuông', 'a23', 'a27']
        };
        const keywords = tagMap[selectedDeviceTag] || [];
        const fullText = (p.name + ' ' + p.recommendedDevices.join(' ') + ' ' + p.description).toLowerCase();
        const matchTag = keywords.some(k => fullText.includes(k));
        if (!matchTag) return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') {
        return a.packOptions[0].price - b.packOptions[0].price;
      }
      if (sortBy === 'price-desc') {
        return b.packOptions[0].price - a.packOptions[0].price;
      }
      if (sortBy === 'rating') {
        return b.rating - a.rating;
      }
      return b.reviewCount - a.reviewCount; // popular
    });
  }, [products, searchQuery, selectedChemistry, selectedSize, selectedDeviceTag, sortBy]);

  const totalCartUnits = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white text-xs font-bold px-4 py-3 rounded-2xl shadow-2xl flex items-center gap-2 border border-slate-700 animate-in fade-in slide-in-from-bottom duration-200">
          <span className="w-2 h-2 rounded-full bg-sky-400"></span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Header */}
      <Header
        cartCount={totalCartUnits}
        onOpenCart={() => setIsCartOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedChemistry={selectedChemistry}
        onSelectChemistry={setSelectedChemistry}
      />

      {/* Hero Banner with prominent sky-blue H emphasis */}
      <HeroBanner
        onFilterSize={(sz) => {
          setSelectedSize(sz);
          const elem = document.getElementById('catalog-section');
          elem?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Catalog & Filter Section */}
      <main id="catalog-section" className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        
        {/* Filter Bar Controls */}
        <div className="bg-white rounded-3xl p-5 border border-slate-200/90 shadow-xs mb-8 space-y-4">
          
          {/* Top row: Section title & Quick actions */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
                <span>Kho Pin Dùng 1 Lần & Ắc Quy</span>
                <span className="inline-flex items-center">
                  <span className="text-sky-500 font-black">H</span>
                  <span className="font-extrabold">battery</span>
                </span>
                <span className="text-xs bg-slate-100 text-slate-600 px-2.5 py-0.5 rounded-full font-bold ml-1">
                  {filteredProducts.length} sản phẩm
                </span>
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Được kiểm định chất lượng nghiêm ngặt • Bảo hành chống rò rỉ đền 100%
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsSpecComparisonOpen(true)}
                className="px-3.5 py-2.5 rounded-xl border border-slate-200 hover:border-sky-300 text-slate-700 hover:text-sky-600 text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-2xs"
              >
                <SlidersHorizontal className="w-4 h-4 text-sky-500" />
                <span>Bảng so sánh công nghệ pin & ắc quy</span>
              </button>
            </div>
          </div>

          {/* Device Tags Filter & Sort Control */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
            <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none pb-1 flex-1">
              <span className="text-xs text-slate-400 font-semibold shrink-0 mr-1 flex items-center gap-1">
                <Filter className="w-3 h-3 text-sky-500" />
                Lọc theo ứng dụng:
              </span>
              {deviceTags.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setSelectedDeviceTag(t.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                    selectedDeviceTag === t.id
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
              <span className="text-slate-500 font-medium text-xs">Sắp xếp:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-slate-100 border border-slate-200 text-slate-800 font-bold rounded-xl px-3 py-1.5 text-xs outline-none focus:border-sky-500"
              >
                <option value="popular">Phổ biến nhất</option>
                <option value="rating">Đánh giá cao nhất</option>
                <option value="price-asc">Giá từ thấp đến cao</option>
                <option value="price-desc">Giá từ cao đến thấp</option>
              </select>
            </div>
          </div>

          {/* Form Factor / Size Category System (Quy Củ & Khoa Học) */}
          <SizeSelector
            selectedSize={selectedSize}
            onSelectSize={setSelectedSize}
            products={products}
          />
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-200 p-8">
            <AlertCircle className="w-12 h-12 text-sky-500 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-900">
              Không tìm thấy dòng pin phù hợp với bộ lọc hiện tại
            </h3>
            <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto">
              Vui lòng thử chọn lại kích thước, xóa bộ lọc từ khóa hoặc nhấn nút tra cứu thiết bị để được tư vấn chính xác.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedChemistry('all');
                setSelectedSize('all');
                setSelectedDeviceTag('all');
              }}
              className="mt-4 px-5 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-sky-600 transition-colors"
            >
              Đặt lại tất cả bộ lọc
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={(prod, pack) => handleAddToCart(prod, pack, 1)}
                onViewDetails={(prod) => setDetailProduct(prod)}
              />
            ))}
          </div>
        )}

      </main>

      {/* Safety & Educational Guide */}
      <BatteryGuideSection />

      {/* Verified Customer Reviews */}
      <CustomerReviews />

      {/* Footer */}
      <Footer
        onFilterSize={(sz) => {
          setSelectedSize(sz);
          const elem = document.getElementById('catalog-section');
          elem?.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenSpecModal={() => setIsSpecComparisonOpen(true)}
      />

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={detailProduct}
        onClose={() => setDetailProduct(null)}
        onAddToCart={(prod, pack, qty) => handleAddToCart(prod, pack, qty)}
        onBuyNow={(prod, pack, qty) => handleBuyNow(prod, pack, qty)}
      />

      {/* Spec Comparison Modal */}
      <SpecComparisonModal
        isOpen={isSpecComparisonOpen}
        onClose={() => setIsSpecComparisonOpen(false)}
      />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        products={products}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onProceedCheckout={() => setIsCheckoutOpen(true)}
        discountCode={discountCode}
        onApplyDiscount={handleApplyDiscount}
        discountPercent={discountPercent}
      />

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cart={cart}
        products={products}
        discountPercent={discountPercent}
        discountCode={discountCode}
        onOrderSuccess={handleOrderSuccess}
      />

      {/* Order Success Modal */}
      <OrderSuccessModal
        order={confirmedOrder}
        onClose={() => setConfirmedOrder(null)}
      />

    </div>
  );
}
