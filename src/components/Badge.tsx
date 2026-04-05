import React from 'react';
import { cn } from '../lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'blue' | 'pink' | 'red' | 'gray';
  children: React.ReactNode;
  className?: string;
}

export const Badge = ({ className, variant = 'gray', children, ...props }: BadgeProps) => {
  const variants = {
    blue: 'bg-[#ebf5ff] text-[#0068d6]',
    pink: 'bg-[#fdf2f8] text-[#de1d8d]',
    red: 'bg-[#fff1f0] text-[#ff5b4f]',
    gray: 'bg-gray-100 text-gray-600',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
        variants[variant],
        className
      )}
      {...props}
    />
  );
};
