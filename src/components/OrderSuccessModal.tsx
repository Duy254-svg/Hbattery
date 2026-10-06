import React from 'react';
import { CheckCircle2, PackageCheck, Truck, ShieldCheck, Recycle, PhoneCall, Copy, Check } from 'lucide-react';

interface OrderSuccessModalProps {
  order: any;
  onClose: () => void;
}

export const OrderSuccessModal: React.FC<OrderSuccessModalProps> = ({
  order,
  onClose
}) => {
  const [copied, setCopied] = React.useState(false);

  if (!order) return null;

  const handleCopy = () => {
    navigator.clipboard?.writeText(order.orderCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-6">
        
        {/* Celebration Header */}
        <div className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white p-8 text-center relative overflow-hidden">
          <div className="w-16 h-16 bg-sky-500/20 text-sky-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-sky-400/30">
            <CheckCircle2 className="w-10 h-10 text-sky-400" />
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-sky-300 text-xs font-semibold mb-2">
            <span>Đặt hàng thành công tại</span>
            <span className="text-sky-400 font-extrabold">H</span>
            <span>battery</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-white">
            Cảm Ơn Quý Khách Đã Lựa Chọn <span className="text-sky-400">H</span>battery!
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-md mx-auto">
            Đơn hàng đã được tiếp nhận và đóng gói theo tiêu chuẩn bảo vệ pin chuyên dụng.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 bg-slate-800/80 px-4 py-2 rounded-xl border border-slate-700 text-sm">
            <span className="text-slate-400 text-xs">Mã đơn hàng:</span>
            <span className="font-mono font-black text-sky-400 text-base">{order.orderCode}</span>
            <button
              onClick={handleCopy}
              className="ml-2 text-slate-400 hover:text-white transition-colors p-1"
              title="Sao chép mã"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Order Details Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Logistics summary */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs bg-slate-50 p-4 rounded-2xl border border-slate-200">
            <div className="space-y-1">
              <span className="text-slate-400 block font-medium">Người nhận hàng:</span>
              <strong className="text-slate-900 text-sm">{order.fullName}</strong>
              <div className="text-slate-600">{order.phone}</div>
              <div className="text-slate-600 line-clamp-2">{order.address}</div>
            </div>

            <div className="space-y-1 border-t sm:border-t-0 sm:border-l border-slate-200 pt-3 sm:pt-0 sm:pl-4">
              <span className="text-slate-400 block font-medium">Dự kiến giao hàng:</span>
              <div className="flex items-center gap-1.5 text-sky-700 font-bold text-sm">
                <Truck className="w-4 h-4 text-sky-500" />
                <span>Trong 2-4 giờ (Nội thành) / 1-2 ngày (Toàn quốc)</span>
              </div>
              <div className="text-slate-500">Hình thức: {order.paymentMethod === 'cod' ? 'Thanh toán COD khi nhận hàng' : order.paymentMethod === 'vietqr' ? 'Chuyển khoản VietQR' : 'Thẻ ngân hàng'}</div>
              <div className="text-slate-900 font-black text-sm pt-1">
                Tổng thanh toán: <span className="text-sky-600">{order.total.toLocaleString('vi-VN')}₫</span>
              </div>
            </div>
          </div>

          {/* Items purchased */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
              <PackageCheck className="w-4 h-4 text-sky-500" />
              Sản phẩm trong kiện hàng
            </h4>
            <div className="bg-slate-50 rounded-xl p-3 border border-slate-200 divide-y divide-slate-100 text-xs">
              {order.items?.map((item: any, idx: number) => (
                <div key={idx} className="py-2 first:pt-0 last:pb-0 flex items-center justify-between">
                  <div>
                    <span className="font-bold text-slate-800">{item.productName}</span>
                    <span className="text-slate-500 block text-[11px]">{item.packName} • Số lượng: {item.quantity}</span>
                  </div>
                  <span className="font-bold text-slate-900">
                    {item.price.toLocaleString('vi-VN')}₫
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Safety & Green Disposal Guide */}
          <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-4 text-xs text-emerald-900 space-y-2">
            <div className="flex items-center gap-2 font-bold text-emerald-800">
              <Recycle className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Chương Trình Thu Hồi Pin Cũ Của Hbattery Vì Môi Trường</span>
            </div>
            <p className="text-[11px] leading-relaxed text-emerald-800">
              Pin dùng 1 lần sau khi cạn kiệt, xin quý khách gom vào lọ thủy tinh hoặc hộp giấy khô ráo. Bạn có thể mang đến bất kỳ điểm nhận pin Hbattery trên toàn quốc hoặc gửi lại cho shipper trong lần đặt hàng tiếp theo để nhận voucher giảm giá 15%!
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
            <a
              href="tel:19008866"
              className="flex items-center gap-1.5 text-xs text-slate-600 hover:text-sky-600 font-semibold"
            >
              <PhoneCall className="w-4 h-4 text-sky-500" />
              Cần hỗ trợ? Hotline: 1900 8866
            </a>

            <button
              onClick={onClose}
              className="w-full sm:w-auto px-8 py-3 rounded-xl bg-slate-950 hover:bg-sky-600 text-white font-bold text-sm transition-all shadow-md cursor-pointer"
            >
              Tiếp Tục Mua Sắm
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
