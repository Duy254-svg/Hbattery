import React from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showBadge?: boolean;
  darkText?: boolean;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  showBadge = false,
  darkText = false,
  className = ''
}) => {
  const sizeClasses = {
    sm: 'text-xl tracking-tight',
    md: 'text-2xl md:text-3xl tracking-tight',
    lg: 'text-3xl md:text-4xl tracking-tight',
    xl: 'text-4xl md:text-5xl tracking-tight'
  };

  const badgeSizeClasses = {
    sm: 'text-[9px] px-1.5 py-0.5',
    md: 'text-[10px] px-2 py-0.5',
    lg: 'text-xs px-2.5 py-1',
    xl: 'text-xs px-3 py-1'
  };

  return (
    <div className={`inline-flex items-center gap-2 select-none ${className}`}>
      {/* Battery icon badge with glowing blue H */}
      <div className="relative flex items-center justify-center">
        <div className="relative flex items-center bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-lg p-1.5 shadow-md border border-slate-700/60">
          <div className="flex items-center gap-0.5 px-1 font-black leading-none">
            {/* The signature sky blue H */}
            <span className="text-sky-400 font-extrabold text-lg drop-shadow-[0_0_8px_rgba(56,189,248,0.7)]">
              H
            </span>
          </div>
          {/* Battery positive nub */}
          <div className="w-1 h-2 bg-slate-400 rounded-r-xs ml-0.5"></div>
        </div>
      </div>

      <div className="flex flex-col">
        <div className={`font-black flex items-center ${sizeClasses[size]}`}>
          {/* EXPLICIT REQUIREMENT: Letter 'H' in sky-blue (xanh da trời) */}
          <span className="text-sky-400 font-black tracking-tighter drop-shadow-[0_2px_10px_rgba(14,165,233,0.35)]">
            H
          </span>
          <span className={`${darkText ? 'text-slate-900' : 'text-slate-900 dark:text-white'} tracking-tight font-extrabold`}>
            battery
          </span>
        </div>
        {showBadge && (
          <span className="text-[10px] uppercase font-bold tracking-widest text-sky-500 font-mono -mt-1">
            Primary Single-Use
          </span>
        )}
      </div>

      {showBadge && (
        <span className={`inline-flex items-center font-bold rounded-full bg-sky-500/10 text-sky-600 border border-sky-400/30 ${badgeSizeClasses[size]}`}>
          CHÍNH HÃNG
        </span>
      )}
    </div>
  );
};
