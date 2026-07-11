'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';
import { useState } from 'react';

import { navigationItems } from '@/utils/navbarItems';

import { ChevronDownIcon } from './ChevronDownIcon';
import { CloseIcon } from './CloseIcon';
import { MenuIcon } from './MenuIcon';

const Navbar: FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] =
        useState<boolean>(false);

    const [openMobileDropdown, setOpenMobileDropdown] =
        useState<string | null>(null);

    const closeMobileMenu = (): void => {
        setIsMobileMenuOpen(false);
        setOpenMobileDropdown(null);
    };

    const toggleMobileDropdown = (label: string): void => {
        setOpenMobileDropdown((currentDropdown) =>
            currentDropdown === label ? null : label,
        );
    };

    return (
        <header className="sticky top-0 z-50 border-b border-(--navbar-two-divider) bg-(--navbar-two-bg) text-(--navbar-two-text) shadow-[0_1px_0_rgba(4,13,87,0.14)]">
            <div className="mx-auto flex h-18 w-full max-w-[1920px] items-center gap-x-1 px-3 sm:h-18 sm:px-8 lg:h-17 lg:px-4 xl:px-7">
                {/* Logo */}
                <Link
                    href="/"
                    aria-label="InterviewCall homepage"
                    className="flex shrink-0 items-center gap-2 sm:gap-3 lg:min-w-42 xl:min-w-60 2xl:min-w-75"
                    onClick={closeMobileMenu}
                >
                    <Image
                        src="/images/optimized-svg/company-logo.svg"
                        alt=""
                        width={62}
                        height={84}
                        priority
                        className="h-10 w-auto shrink-0 sm:h-14 lg:h-11 xl:h-12"
                    />

                    <span className="whitespace-nowrap text-xl font-bold leading-none tracking-[-0.045em] text-black sm:text-3xl lg:text-xl xl:text-2xl 2xl:text-3xl">
                        InterviewCall
                    </span>
                </Link>

                {/* Desktop navigation */}
                <nav
                    aria-label="Main navigation"
                    className="hidden flex-1 items-center justify-center lg:flex lg:gap-4 xl:gap-8 2xl:gap-12"
                >
                    {navigationItems.map((item) => {
                        if (item.children) {
                            return (
                                <div
                                    key={item.label}
                                    className="group relative"
                                >
                                    <button
                                        type="button"
                                        className="flex h-12 cursor-pointer items-center gap-1 whitespace-nowrap text-sm font-semibold transition-colors hover:text-(--color-brand-700) xl:gap-1.5 xl:text-base"
                                    >
                                        {item.label}

                                        <ChevronDownIcon className="h-5 w-5 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180" />
                                    </button>

                                    {/* Desktop dropdown */}
                                    <div className="pointer-events-none invisible absolute left-1/2 top-[calc(100%+8px)] w-61.25 -translate-x-1/2 translate-y-2 rounded-xl border border-(--navbar-two-divider) bg-white p-2 opacity-0 shadow-[0_18px_50px_rgba(4,13,87,0.14)] transition-all duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                                        {item.children.map((child) => (
                                            <Link
                                                key={child.label}
                                                href={child.href}
                                                className="block rounded-lg px-4 py-3 text-sm font-medium text-(--navbar-two-text) transition-colors hover:bg-(--color-brand-50) hover:text-(--color-brand-700)"
                                            >
                                                {child.label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            );
                        }

                        return (
                            <Link
                                key={item.label}
                                href={item.href ?? '#'}
                                className="flex h-12 items-center whitespace-nowrap text-sm font-semibold transition-colors hover:text-(--color-brand-700) xl:text-base"
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>

                {/* Mobile & Tablet CTA */}
                <a
                    href="*"
                    download
                    className="ml-auto mr-2 inline-flex min-h-10 items-center justify-center rounded-md border border-(--navbar-two-text) bg-white px-3 text-center text-sm font-bold text-(--navbar-two-text) transition-colors hover:bg-(--color-brand-50) sm:mr-4 sm:min-h-13 sm:px-10 sm:text-xl lg:hidden"
                >
                    Download Brochure
                </a>

                {/* Desktop CTA buttons */}
                <div className="hidden shrink-0 items-center justify-end gap-2 pl-4 lg:flex lg:min-w-85 xl:min-w-125 xl:gap-4 xl:pl-8 2xl:min-w-140 2xl:gap-6">
                    <Link
                        href="#login"
                        className="inline-flex min-h-11 items-center justify-center rounded-md border border-(--navbar-two-text) bg-white px-4 text-center text-sm font-bold text-(--navbar-two-text) transition-colors hover:bg-(--color-brand-50) xl:min-h-12 xl:px-6 xl:text-base"
                    >
                        Login
                    </Link>

                    <a
                        href="*"
                        download
                        className="inline-flex min-h-11 items-center justify-center rounded-md bg-(--navbar-button-bg) px-4 text-center text-sm font-semibold text-(--navbar-button-text) transition-colors hover:bg-(--navbar-button-hover-bg) xl:min-h-12 xl:px-8 xl:text-base"
                    >
                        Download Brochure
                    </a>

                    <Link
                        href="#assessment"
                        className="inline-flex min-h-11 items-center justify-center rounded-md border border-(--navbar-two-text) bg-white px-4 text-center text-sm font-bold text-(--color-brand-700) transition-colors hover:bg-(--color-brand-50) xl:min-h-12 xl:px-6 xl:text-base"
                    >
                        Request Callback
                    </Link>
                </div>

                {/* Mobile menu button */}
                <button
                    type="button"
                    aria-label={
                        isMobileMenuOpen
                            ? 'Close navigation menu'
                            : 'Open navigation menu'
                    }
                    aria-expanded={isMobileMenuOpen}
                    aria-controls="mobile-navigation"
                    onClick={() =>
                        setIsMobileMenuOpen((currentState) => !currentState)
                    }
                    className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-white text-black transition-colors hover:bg-(--color-brand-50) sm:h-14 sm:w-14 lg:hidden"
                >
                    {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
                </button>
            </div>

            {/* Mobile navigation */}
            <div
                id="mobile-navigation"
                className={`overflow-hidden border-t border-(--navbar-two-divider) bg-white transition-[max-height,opacity] duration-300 lg:hidden ${
                    isMobileMenuOpen
                        ? 'max-h-[calc(100vh-90px)] opacity-100'
                        : 'max-h-0 border-t-transparent opacity-0'
                }`}
            >
                <nav
                    aria-label="Mobile navigation"
                    className="max-h-[calc(100vh-90px)] overflow-y-auto px-5 py-5 sm:px-7"
                >
                    <div className="space-y-1">
                        {navigationItems.map((item) => {
                            if (item.children) {
                                const isDropdownOpen =
                                    openMobileDropdown === item.label;

                                return (
                                    <div
                                        key={item.label}
                                        className="border-b border-(--navbar-two-divider)"
                                    >
                                        <button
                                            type="button"
                                            aria-expanded={isDropdownOpen}
                                            onClick={() =>
                                                toggleMobileDropdown(item.label)
                                            }
                                            className="flex w-full items-center justify-between py-4 text-left text-[16px] font-semibold"
                                        >
                                            {item.label}

                                            <ChevronDownIcon
                                                className={`h-5 w-5 transition-transform duration-200 ${
                                                    isDropdownOpen
                                                        ? 'rotate-180'
                                                        : ''
                                                }`}
                                            />
                                        </button>

                                        <div
                                            className={`grid transition-[grid-template-rows] duration-200 ${
                                                isDropdownOpen
                                                    ? 'grid-rows-[1fr]'
                                                    : 'grid-rows-[0fr]'
                                            }`}
                                        >
                                            <div className="overflow-hidden">
                                                <div className="space-y-1 pb-4 pl-3">
                                                    {item.children.map(
                                                        (child) => (
                                                            <Link
                                                                key={
                                                                    child.label
                                                                }
                                                                href={
                                                                    child.href
                                                                }
                                                                onClick={
                                                                    closeMobileMenu
                                                                }
                                                                className="block rounded-lg px-3 py-3 text-sm font-medium text-(--navbar-two-muted-text) hover:bg-(--color-brand-50) hover:text-(--color-brand-700)"
                                                            >
                                                                {child.label}
                                                            </Link>
                                                        ),
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }

                            return (
                                <Link
                                    key={item.label}
                                    href={item.href ?? '#'}
                                    onClick={closeMobileMenu}
                                    className="block border-b border-(--navbar-two-divider) py-4 text-base font-semibold transition-colors hover:text-(--color-brand-700)"
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Mobile CTA buttons */}
                    <div className="mt-6 flex flex-col gap-3">
                        <Link
                            href="#login"
                            onClick={closeMobileMenu}
                            className="inline-flex min-h-13 items-center justify-center rounded-xl border border-(--navbar-two-text) bg-white px-5 text-center text-base font-semibold text-(--navbar-two-text) transition-colors hover:bg-(--color-brand-50)"
                        >
                            Login
                        </Link>

                        <Link
                            href="#assessment"
                            onClick={closeMobileMenu}
                            className="inline-flex min-h-13 items-center justify-center rounded-xl bg-(--navbar-button-bg) px-5 text-center text-base font-semibold text-white transition-colors hover:bg-(--navbar-button-hover-bg)"
                        >
                            Request Callback
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
