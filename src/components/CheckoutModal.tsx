import React from 'react';
import { CartItem, BatteryProduct } from '../types/battery';
import { X, CheckCircle2, QrCode, CreditCard, Banknote, ShieldCheck, Truck, Lock, ShoppingBag, User, MapPin, Sparkles } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  products: BatteryProduct[];
  discountPercent: number;
  discountCode: string;
  onOrderSuccess: (orderInfo: any) => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  cart,
  products,
  discountPercent,
  discountCode,
  onOrderSuccess
}) => {
  const [fullName, setFullName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [city, setCity] = React.useState('TP. Hồ Chí Minh');
  const [notes, setNotes] = React.useState('');
  const [paymentMethod, setPaymentMethod] = React.useState<'cod' | 'vietqr' | 'card'>('cod');
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState('');

  // Calculate order progress percentage
  const hasName = fullName.trim().length > 1;
  const hasPhone = phone.trim().length >= 8;
  const hasAddress = address.trim().length > 3;

  const progressPercentage = React.useMemo(() => {
    let score = 25; // Step 1: Cart products selected
    if (hasName) score += 15;
    if (hasPhone) score += 15;
    if (hasAddress) score += 25;
    if (paymentMethod) score += 20;
    return Math.min(100, score);
  }, [hasName, hasPhone, hasAddress, paymentMethod]);

  const progressStatusText = React.useMemo(() => {
    if (progressPercentage >= 100) return 'Tuyệt vời! Đơn hàng đã sẵn sàng gửi đi';
    if (!hasName || !hasPhone) return 'Bước 2/4: Nhập họ tên & số điện thoại người nhận';
    if (!hasAddress) return 'Bước 3/4: Nhập địa chỉ cụ thể để giao pin tận nơi';
    return 'Bước 4/4: Chọn phương thức thanh toán & xác nhận';
  }, [progressPercentage, hasName, hasPhone, hasAddress]);

  if (!isOpen) return null;

  // Calculate totals
  const subtotal = cart.reduce((acc, item) => {
    const product = products.find(p => p.id === item.productId);
    if (!product) return acc;
    const pack = product.packOptions.find(p => p.id === item.packId);
    if (!pack) return acc;
    return acc + pack.price * item.quantity;
  }, 0);

  const discountAmount = Math.round((subtotal * discountPercent) / 100);
  const freeShippingThreshold = 200000;
  const isFreeShipping = subtotal >= freeShippingThreshold || discountCode === 'FREESHIP';
  const shippingFee = isFreeShipping ? 0 : 25000;
  const total = Math.max(0, subtotal - discountAmount + shippingFee);

  const orderCode = `HB-${Math.floor(100000 + Math.random() * 900000)}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim() || !address.trim()) {
      setErrorMsg('Vui lòng điền đầy đủ họ tên, số điện thoại và địa chỉ nhận hàng.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onOrderSuccess({
        orderCode,
        fullName,
        phone,
        address: `${address}, ${city}`,
        notes,
        paymentMethod,
        total,
        subtotal,
        discountAmount,
        shippingFee,
        items: cart.map(item => {
          const product = products.find(p => p.id === item.productId)!;
          const pack = product.packOptions.find(p => p.id === item.packId)!;
          return {
            productName: product.name,
            size: product.size,
            packName: pack.name,
            quantity: item.quantity,
            price: pack.price * item.quantity
          };
        }),
        createdAt: new Date().toISOString()
      });
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-6">
        
        {/* Header */}
        <div className="bg-slate-950 text-white p-6 relative flex items-center justify-between border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-sky-400 uppercase tracking-wider mb-1">
              <Lock className="w-3.5 h-3.5" />
              <span>Thanh Toán An Toàn Bảo Mật SSL</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white">
              Xác Nhận Đặt Mua Pin <span className="text-sky-400">H</span>battery
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Order Completion Progress Bar */}
        <div className="bg-slate-900 px-6 py-4 border-b border-slate-800">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2.5">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Tiến trình hoàn thành:
              </span>
              <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-black ${
                progressPercentage === 100 
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' 
                  : 'bg-sky-500/20 text-sky-400 border border-sky-500/30'
              }`}>
                {progressPercentage === 100 && <Sparkles className="w-3 h-3 text-emerald-400 animate-spin" />}
                {progressPercentage}%
              </span>
            </div>

            <p className="text-xs text-slate-300 font-medium truncate">
              {progressStatusText}
            </p>
          </div>

          {/* Graphical Progress Bar Track */}
          <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden p-0.5 border border-slate-700/50">
            <div 
              className={`h-full rounded-full transition-all duration-500 ease-out ${
                progressPercentage === 100
                  ? 'bg-gradient-to-r from-sky-400 via-teal-400 to-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.6)]'
                  : 'bg-gradient-to-r from-sky-500 to-blue-500 shadow-[0_0_8px_rgba(14,165,233,0.5)]'
              }`}
              style={{ width: `${progressPercentage}%` }}
            />
          </div>

          {/* 4 Interactive Steps */}
          <div className="grid grid-cols-4 gap-1.5 sm:gap-2 mt-3 pt-2 text-[10px] sm:text-xs">
            {/* Step 1 */}
            <div className="flex items-center gap-1 sm:gap-1.5 text-emerald-400">
              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
              <span className="font-semibold truncate">1. Giỏ hàng</span>
            </div>

            {/* Step 2 */}
            <div className={`flex items-center gap-1 sm:gap-1.5 transition-colors ${
              hasName && hasPhone ? 'text-emerald-400' : hasName || hasPhone ? 'text-sky-400' : 'text-slate-500'
            }`}>
              {hasName && hasPhone ? (
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
              ) : (
                <User className="w-3.5 h-3.5 shrink-0" />
              )}
              <span className="font-semibold truncate">2. Người nhận</span>
            </div>

            {/* Step 3 */}
            <div className={`flex items-center gap-1 sm:gap-1.5 transition-colors ${
              hasAddress ? 'text-emerald-400' : 'text-slate-500'
            }`}>
              {hasAddress ? (
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
              ) : (
                <MapPin className="w-3.5 h-3.5 shrink-0" />
              )}
              <span className="font-semibold truncate">3. Địa chỉ</span>
            </div>

            {/* Step 4 */}
            <div className={`flex items-center gap-1 sm:gap-1.5 transition-colors ${
              progressPercentage === 100 ? 'text-emerald-400' : 'text-slate-500'
            }`}>
              {progressPercentage === 100 ? (
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
              ) : (
                <CreditCard className="w-3.5 h-3.5 shrink-0" />
              )}
              <span className="font-semibold truncate">4. Xác nhận</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
          
          {errorMsg && (
            <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs font-bold rounded-xl">
              {errorMsg}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Left: Customer Info */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700 flex items-center gap-2">
                <Truck className="w-4 h-4 text-sky-500" />
                Thông Tin Giao Hàng
              </h3>

              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">
                  Họ và tên người nhận *
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Ví dụ: Nguyễn Văn An"
                  className="w-full text-sm p-3 rounded-xl border border-slate-200 focus:border-sky-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">
                  Số điện thoại nhận hàng *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Ví dụ: 0912 345 678"
                  className="w-full text-sm p-3 rounded-xl border border-slate-200 focus:border-sky-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">
                  Tỉnh / Thành phố *
                </label>
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full text-sm p-3 rounded-xl border border-slate-200 focus:border-sky-500 outline-none bg-white"
                >
                  <option value="TP. Hồ Chí Minh">TP. Hồ Chí Minh (Giao 2-4h)</option>
                  <option value="Hà Nội">Hà Nội (Giao 2-4h)</option>
                  <option value="Đà Nẵng">Đà Nẵng</option>
                  <option value="Hải Phòng">Hải Phòng</option>
                  <option value="Cần Thơ">Cần Thơ</option>
                  <option value="Bình Dương">Bình Dương</option>
                  <option value="Đồng Nai">Đồng Nai</option>
                  <option value="Tỉnh thành khác">Tỉnh thành khác (Toàn quốc 2-3 ngày)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">
                  Địa chỉ số nhà, ngõ, tên đường, phường/xã *
                </label>
                <input
                  type="text"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Số 45 đường Lê Duẩn, Phường Bến Nghé..."
                  className="w-full text-sm p-3 rounded-xl border border-slate-200 focus:border-sky-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">
                  Ghi chú cho shipper (Tùy chọn)
                </label>
                <input
                  type="text"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Giao giờ hành chính, gọi trước khi đến..."
                  className="w-full text-sm p-3 rounded-xl border border-slate-200 focus:border-sky-500 outline-none"
                />
              </div>
            </div>

            {/* Right: Payment Method & Order Review */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700 flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-sky-500" />
                Phương Thức Thanh Toán
              </h3>

              {/* Payment selector options */}
              <div className="space-y-2">
                {/* Option 1: COD */}
                <label
                  onClick={() => setPaymentMethod('cod')}
                  className={`p-3.5 rounded-2xl border flex items-center gap-3 cursor-pointer transition-all ${
                    paymentMethod === 'cod'
                      ? 'bg-sky-50 border-sky-500 ring-2 ring-sky-500/20'
                      : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === 'cod'}
                    onChange={() => setPaymentMethod('cod')}
                    className="text-sky-500"
                  />
                  <Banknote className="w-5 h-5 text-emerald-600" />
                  <div className="text-xs">
                    <span className="font-bold text-slate-900 block">Thanh toán khi nhận hàng (COD)</span>
                    <span className="text-slate-500">Được đồng kiểm tra vỉ pin trước khi thanh toán tiền mặt</span>
                  </div>
                </label>

                {/* Option 2: VietQR */}
                <label
                  onClick={() => setPaymentMethod('vietqr')}
                  className={`p-3.5 rounded-2xl border flex items-center gap-3 cursor-pointer transition-all ${
                    paymentMethod === 'vietqr'
                      ? 'bg-sky-50 border-sky-500 ring-2 ring-sky-500/20'
                      : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === 'vietqr'}
                    onChange={() => setPaymentMethod('vietqr')}
                    className="text-sky-500"
                  />
                  <QrCode className="w-5 h-5 text-sky-600" />
                  <div className="text-xs">
                    <span className="font-bold text-slate-900 block">Chuyển khoản VietQR tức thì</span>
                    <span className="text-slate-500">Quét mã QR qua mọi ứng dụng ngân hàng hoặc MoMo/ZaloPay</span>
                  </div>
                </label>

                {/* Option 3: Card */}
                <label
                  onClick={() => setPaymentMethod('card')}
                  className={`p-3.5 rounded-2xl border flex items-center gap-3 cursor-pointer transition-all ${
                    paymentMethod === 'card'
                      ? 'bg-sky-50 border-sky-500 ring-2 ring-sky-500/20'
                      : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === 'card'}
                    onChange={() => setPaymentMethod('card')}
                    className="text-sky-500"
                  />
                  <CreditCard className="w-5 h-5 text-indigo-600" />
                  <div className="text-xs">
                    <span className="font-bold text-slate-900 block">Thẻ ATM nội địa / Visa / Mastercard</span>
                    <span className="text-slate-500">Cổng thanh toán bảo mật liên kết ngân hàng 24/7</span>
                  </div>
                </label>
              </div>

              {/* VietQR Preview if selected */}
              {paymentMethod === 'vietqr' && (
                <div className="p-4 bg-slate-900 text-white rounded-2xl text-xs space-y-2 border border-slate-800">
                  <div className="flex items-center justify-between">
                    <span className="text-sky-400 font-bold">MÃ VIETQR TỰ ĐỘNG</span>
                    <span className="font-mono text-slate-400">MBBank • 098888HBAT</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white p-2.5 rounded-xl text-slate-900">
                    <div className="w-16 h-16 bg-slate-100 rounded-lg flex items-center justify-center border border-slate-300">
                      <QrCode className="w-12 h-12 text-slate-800" />
                    </div>
                    <div className="text-[11px] space-y-0.5">
                      <div>Chủ TK: <strong>CTY TNHH HBATTERY VIETNAM</strong></div>
                      <div>Số tiền: <strong className="text-sky-600 text-sm">{total.toLocaleString('vi-VN')}₫</strong></div>
                      <div>Cú pháp: <span className="font-mono font-bold bg-slate-100 px-1 py-0.5 rounded-xs">{orderCode}</span></div>
                    </div>
                  </div>
                </div>
              )}

              {/* Order Breakdown Box */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs space-y-2">
                <div className="font-bold text-slate-800 pb-1 border-b border-slate-200">
                  Đơn hàng của bạn ({cart.length} mặt hàng)
                </div>

                <div className="max-h-28 overflow-y-auto space-y-1.5 pr-1 divide-y divide-slate-100">
                  {cart.map(item => {
                    const product = products.find(p => p.id === item.productId);
                    const pack = product?.packOptions.find(p => p.id === item.packId);
                    if (!product || !pack) return null;
                    return (
                      <div key={`${item.productId}-${item.packId}`} className="pt-1 flex justify-between">
                        <span className="truncate pr-2">
                          <strong className="text-sky-600">H</strong>{product.name.replace(/^Hbattery\s*/, 'battery ')} ({pack.name}) x{item.quantity}
                        </span>
                        <span className="font-bold text-slate-900 shrink-0">
                          {(pack.price * item.quantity).toLocaleString('vi-VN')}₫
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="pt-2 border-t border-slate-200 space-y-1 text-slate-600">
                  <div className="flex justify-between">
                    <span>Tạm tính:</span>
                    <span>{subtotal.toLocaleString('vi-VN')}₫</span>
                  </div>
                  {discountAmount > 0 && (
                    <div className="flex justify-between text-emerald-600 font-semibold">
                      <span>Giảm giá ({discountPercent}%):</span>
                      <span>-{discountAmount.toLocaleString('vi-VN')}₫</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span>Phí vận chuyển:</span>
                    <span>{shippingFee === 0 ? 'MIỄN PHÍ' : `${shippingFee.toLocaleString('vi-VN')}₫`}</span>
                  </div>
                  <div className="flex justify-between text-sm font-black text-slate-950 pt-1 border-t border-slate-200">
                    <span>Tổng thanh toán:</span>
                    <span className="text-base text-sky-600">{total.toLocaleString('vi-VN')}₫</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Submit CTA */}
          <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Cam kết 100% pin Hbattery nguyên seal tem chống giả.</span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={onClose}
                className="w-1/2 sm:w-auto px-5 py-3 rounded-xl border border-slate-300 text-slate-700 text-xs font-bold hover:bg-slate-100 transition-colors"
              >
                Quay lại
              </button>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-1/2 sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-400 hover:to-sky-500 text-slate-950 font-black text-sm transition-all shadow-lg shadow-sky-500/20 disabled:opacity-50 cursor-pointer"
              >
                {isSubmitting ? 'Đang xử lý...' : `Xác Nhận Đặt Hàng (${total.toLocaleString('vi-VN')}₫)`}
              </button>
            </div>
          </div>

        </form>

      </div>
    </div>
  );
};
