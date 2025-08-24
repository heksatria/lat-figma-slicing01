'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import {
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  Sheet,
} from '@/components/ui/sheet';

import { navigationData } from '@/app/constants/navigation-data';

const Header = () => {
  const { scrollY } = useScroll();
  const background = useTransform(
    scrollY,
    [0, 100],
    ['rgba(0,0,0,0)', 'rgba(0,0,0,0.5)']
  );
  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ['blur(0px)', 'blur(10px)']
  );

  return (
    <>
      <motion.header
        style={{ background, backdropFilter: backdropBlur }}
        className='fixed top-0 z-50 w-full'
      >
        <div className='custom-container flex-between h-16 md:h-21'>
          {/* logo */}
          <div className='flex-center gap-2'>
            <Image
              src={'/icons/logo-symbol.png'}
              alt='Logo'
              width={29.59}
              height={32.46}
            />
            <p className='text-[length:var(--font-display-sm)] leading-[var(--font-display-sm-line-height)] font-semibold tracking-[var(--font-display-sm-letter-spacing)] md:text-[length:var(--font-display-sm)] md:leading-[var(--font-display-lg-line-height)] md:font-semibold md:tracking-[var(--font-display-sm-letter-spacing)]'>
              Your Logo
            </p>
          </div>
          {/* navigasi */}
          <nav className='hidden md:block'>
            <ul className='flex-center gap-3 text-[length:var(--font-display-xs)] leading-[var(--font-display-xs-line-height)] font-semibold md:text-[length:var(--font-display-xs)] md:leading-[var(--font-display-xs-line-height)]'>
              {navigationData.map((item) => (
                <li key={item.label}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          {/* button */}
          <div className='hidden md:block'>
            <Button>
              <Link href='#contact'>Let&apos;s Talk</Link>
            </Button>
            {/* Hamburger menu untuk mobile */}
            <Sheet>
              <SheetTrigger className='ml-4 md:hidden'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='size-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                  />
                </svg>
                <span className='sr-only'>Menu</span>
              </SheetTrigger>
              <SheetContent side='right' className='pr-8'>
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                  <SheetDescription>
                    Select an option from the menu below.
                  </SheetDescription>
                </SheetHeader>
                <div className='flex flex-col gap-6 py-4'>
                  {navigationData.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className='text-[length:var(--font-display-lg)] leading-[var(--font-display-lg-line-height)] font-semibold'
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
                <SheetFooter>
                  <Button className='w-full'>
                    <Link href='#contact'>Let&apos;s Talk</Link>
                  </Button>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </motion.header>
    </>
  );
};

export default Header;
