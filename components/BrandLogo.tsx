'use client';

import React from 'react';

interface BrandLogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export default function BrandLogo({ variant = 'dark', size = 'md', showText = true }: BrandLogoProps) {
  const iconSize = size === 'sm' ? 'w-7 h-7' : size === 'lg' ? 'w-10 h-10' : 'w-8 h-8';
  const textSize = size === 'sm' ? 'text-sm' : size === 'lg' ? 'text-xl' : 'text-base sm:text-lg';
  const subtextSize = size === 'sm' ? 'text-[8px]' : size === 'lg' ? 'text-[11px]' : 'text-[9px] sm:text-[10px]';

  return (
    <div className="flex items-center gap-2.5 group select-none">
      {/* Precision Emblem: Stylized Choi Pen Follicle + Medical Cross Spark in Luxury Emerald & Gold */}
      <div className={`${iconSize} rounded-xl bg-gradient-to-br from-[#064E3B] via-[#047857] to-[#022C22] p-1.5 flex items-center justify-center shadow-md shadow-emerald-950/20 border border-emerald-500/30 group-hover:scale-105 transition-transform shrink-0`}>
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Outer Diamond Crest */}
          <path
            d="M16 2L28 16L16 30L4 16L16 2Z"
            stroke="url(#emeraldGoldGrad)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Choi Implanter Needle Precision Core */}
          <path
            d="M16 6V26"
            stroke="#10B981"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Hair Follicle Arc Left */}
          <path
            d="M10 13C10 17 13 21 16 23"
            stroke="#FBBF24"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {/* Hair Follicle Arc Right */}
          <path
            d="M22 13C22 17 19 21 16 23"
            stroke="#34D399"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {/* Precision Micro-Point Spark */}
          <circle cx="16" cy="8" r="1.5" fill="#FDE68A" />
          
          {/* Gradients */}
          <defs>
            <linearGradient id="emeraldGoldGrad" x1="4" y1="2" x2="28" y2="30" gradientUnits="userSpaceOnUse">
              <stop stopColor="#34D399" />
              <stop offset="0.5" stopColor="#F59E0B" />
              <stop offset="1" stopColor="#059669" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Typography */}
      {showText && (
        <div className="flex flex-col leading-none">
          <div className={`font-heading font-extrabold tracking-tight ${textSize} ${variant === 'light' ? 'text-white' : 'text-slate-900'}`}>
            ANTALYA <span className="text-emerald-600">DHI</span>
          </div>
          <div className={`font-sans font-bold tracking-widest uppercase mt-0.5 ${subtextSize} ${variant === 'light' ? 'text-emerald-300/80' : 'text-slate-500'}`}>
            CLINICAL RESTORATION
          </div>
        </div>
      )}
    </div>
  );
}
