import React from 'react';
import { Star, CheckCircle, Quote, ThumbsUp } from 'lucide-react';

export const CustomerReviews: React.FC = () => {
  const reviews = [
    {
      name: 'Võ Minh Tuấn',
      role: 'Chủ tiệm Khóa & Smartkey ô tô, Q.5 TP.HCM',
      avatar: 'VT',
      rating: 5,
      product: 'Hbattery CR2032 3V Coin Master',
      comment: 'Cửa hàng mình làm chìa khóa xe Honda SH, Toyota, Mazda đã thay hơn 2,000 viên CR2032 của Hbattery. Khách toàn khen bấm từ khoảng cách 15m vẫn nhạy cực kỳ, pin xài gần 3 năm vẫn chưa báo yếu. Đặc biệt không hề bị ố hay rỉ viền.',
      date: '3 ngày trước'
    },
    {
      name: 'Nguyễn Thị Thu Hà',
      role: 'Trưởng ban quản trị chung cư, Hà Nội',
      avatar: 'TH',
      rating: 5,
      product: 'Hbattery Ultra Alkaline AA (LR6)',
      comment: 'Khóa cửa vân tay chung cư Kaadas nhà tôi từng bị chảy nước do dùng pin con ó rẻ tiền, suýt phải thay cả cụm khóa 7 triệu. Sau khi đổi sang thùng Hbattery Ultra Alkaline AA, kiểm tra hộc pin sau 14 tháng vẫn sáng bóng, sạch bong.',
      date: '1 tuần trước'
    },
    {
      name: 'Trần Hoàng Long',
      role: 'Nhiếp ảnh gia tự do & Du lịch dã ngoại',
      avatar: 'HL',
      rating: 5,
      product: 'Hbattery Extreme Lithium AA (FR6)',
      comment: 'Dòng pin Lithium dùng 1 lần này thực sự vô đối! Hồi đèn flash chụp đám cưới chỉ 1.2s, lại nhẹ như lông vũ. Tôi đem đi leo Fansipan thời tiết -2 độ C vẫn bắn liên thanh cả ngàn tấm không hề tụt điện áp.',
      date: '2 tuần trước'
    },
    {
      name: 'Bác Lê Văn Thành',
      role: 'Cán bộ hưu trí 72 tuổi, Hải Phòng',
      avatar: 'VT',
      rating: 5,
      product: 'Hbattery SoundPro Zinc-Air A312',
      comment: 'Tôi đeo máy trợ thính Signia 6 năm nay. Pin A312 của Hbattery có miếng dán màu nâu dễ bóc, lắp vào máy nghe tiếng trong vắt, không bị ù tai hay chập chờn khi ra trời gió. Con trai tôi hay đặt cả hộp 30 viên về dùng dần.',
      date: '1 tháng trước'
    }
  ];

  return (
    <section className="py-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-sky-600 font-extrabold text-xs uppercase tracking-wider">
              Khách Hàng Đánh Giá
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1">
              Hơn 45,000+ Khách Hàng Tin Dùng <span className="text-sky-500 font-black">H</span>battery
            </h2>
          </div>

          <div className="flex items-center gap-4 bg-white p-3.5 rounded-2xl border border-slate-200 shadow-xs">
            <div className="text-center pr-4 border-r border-slate-200">
              <span className="text-2xl font-black text-slate-900">4.95</span>
              <span className="text-[10px] text-slate-400 block font-bold">/ 5.0 SAO</span>
            </div>
            <div className="text-xs">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <span className="text-slate-500 text-[11px] font-medium mt-0.5 block">
                Từ 12,800+ lượt bình chọn kiểm định
              </span>
            </div>
          </div>
        </div>

        {/* Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                {/* Rating stars & Quote */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-amber-400">
                    {[...Array(r.rating)].map((_, starIdx) => (
                      <Star key={starIdx} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-sky-200" />
                </div>

                {/* Comment text */}
                <p className="text-xs text-slate-700 leading-relaxed font-normal">
                  "{r.comment}"
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-slate-900 text-sky-400 font-black text-xs flex items-center justify-center shrink-0 border border-slate-700">
                    {r.avatar}
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xs font-bold text-slate-900 truncate flex items-center gap-1">
                      <span>{r.name}</span>
                      <CheckCircle className="w-3 h-3 text-sky-500 shrink-0" />
                    </h4>
                    <p className="text-[10px] text-slate-400 truncate">{r.role}</p>
                  </div>
                </div>

                <div className="mt-2 text-[10px] bg-slate-50 text-sky-700 font-semibold px-2 py-1 rounded-lg border border-slate-100 truncate">
                  Đã mua: {r.product}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
