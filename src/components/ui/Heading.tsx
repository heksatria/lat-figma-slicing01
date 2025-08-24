import clsx from 'clsx';
import { ReactNode } from 'react';

type HeadingProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4'; // tipe heading
  className?: string;
  children: ReactNode;
};

export default function Heading({
  as: Tag = 'h1',
  className,
  children,
}: HeadingProps) {
  const baseStyle = 'font-heading font-semibold tracking-tight';
  const sizeStyle = {
    h1: 'text-4xl md:text-5xl',
    h2: 'text-3xl md:text-4xl',
    h3: 'text-2xl md:text-3xl',
    h4: 'text-xl md:text-2xl',
  };

  return (
    <Tag className={clsx(baseStyle, sizeStyle[Tag], className)}>{children}</Tag>
  );
}
