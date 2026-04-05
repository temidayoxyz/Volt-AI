import React from 'react';
import { cn } from '../lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ className, hoverable = true, children, ...props }) => {
  return (
    <div
      className={cn(
        'bg-white rounded-lg shadow-vercel',
        hoverable && 'shadow-vercel-hover',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
