'use client';

import {
    ArrowRight,
    CalendarCheck,
    ChevronDown,
    Copy,
    Headphones,
    Rocket,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FC, useState } from 'react';

import { footerColumns, socialLinks } from '@/utils/footerItems';

const brandTags = ['Skills', 'Practice', 'Feedback', 'Proof'];

const Footer: FC = () => {
    const [openColumn, setOpenColumn] = useState<string | null>(null);

    const toggleColumn = (title: string): void => {
        setOpenColumn((current) => (current === title ? null : title));
    };

    return (
        <footer className="bg-(--footer-bg)">
            <div
                className="
                    mx-auto
                    w-full
                    max-w-395
                    px-4
                    py-12
                    sm:px-6
                    lg:px-8
                    xl:px-12
                "
            >
                {/* Desktop */}
                <div className="hidden lg:block">
                {/* CTA banner */}
                <div
                    className="
                        flex
                        flex-col
                        items-center
                        gap-6
                        rounded-2xl
                        border
                        border-(--footer-cta-border)
                        bg-(--footer-cta-bg)
                        p-6
                        text-center
                        sm:p-8
                        lg:flex-row
                        lg:items-center
                        lg:justify-between
                        lg:gap-8
                        lg:text-left
                        lg:py-12
                    "
                >
                    <div
                        className="
                            flex
                            flex-col
                            items-center
                            gap-4
                            sm:flex-row
                            sm:items-center
                            sm:text-left
                            lg:items-center
                        "
                    >
                        <span
                            className="
                                flex
                                h-14
                                w-14
                                shrink-0
                                items-center
                                justify-center
                                rounded-full
                                bg-(--footer-cta-icon-bg)
                                text-(--footer-cta-icon-color)
                            "
                        >
                            <Rocket
                                aria-hidden="true"
                                className="h-7 w-7"
                                strokeWidth={1.7}
                            />
                        </span>

                        <div>
                            <h2
                                className="
                                    text-[19px]
                                    font-bold
                                    leading-[1.25]
                                    text-(--footer-cta-title)
                                    sm:text-[21px]
                                "
                            >
                                Next Steps
                            </h2>

                            <p
                                className="
                                    mt-1.5
                                    text-[14px]
                                    leading-[1.5]
                                    text-(--footer-cta-text)
                                    sm:text-[15px]
                                "
                            >
                                Book a call, or download the curriculum and
                                look through it on your own first.
                            </p>
                        </div>
                    </div>

                    <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto lg:shrink-0">
                        <Link
                            href="#callback"
                            className="
                                group
                                inline-flex
                                min-h-12.5
                                items-center
                                justify-center
                                gap-2.5
                                rounded-lg
                                bg-(--footer-cta-primary-button-bg)
                                px-6
                                text-center
                                text-[14px]
                                font-semibold
                                whitespace-nowrap
                                text-(--footer-cta-primary-button-text)
                                transition-all
                                duration-200
                                hover:-translate-y-0.5
                                hover:bg-(--footer-cta-primary-button-hover-bg)
                                focus-visible:outline-none
                                focus-visible:ring-4
                                focus-visible:ring-(--focus-ring-color)
                            "
                        >
                            <CalendarCheck
                                aria-hidden="true"
                                className="h-4.5 w-4.5"
                                strokeWidth={1.9}
                            />
                            <span>Book a Program Counselling Call</span>
                        </Link>

                        <Link
                            href="#curriculum"
                            className="
                                inline-flex
                                min-h-12.5
                                items-center
                                justify-center
                                gap-2.5
                                rounded-lg
                                border
                                border-(--footer-cta-secondary-button-border)
                                bg-(--footer-cta-secondary-button-bg)
                                px-6
                                text-center
                                text-[14px]
                                font-semibold
                                whitespace-nowrap
                                text-(--footer-cta-secondary-button-text)
                                transition-colors
                                hover:bg-(--footer-cta-secondary-button-hover-bg)
                                focus-visible:outline-none
                                focus-visible:ring-4
                                focus-visible:ring-(--focus-ring-color)
                            "
                        >
                            <Copy
                                aria-hidden="true"
                                className="h-4.5 w-4.5"
                                strokeWidth={1.9}
                            />
                            <span>Download Curriculum</span>
                        </Link>
                    </div>
                </div>

                {/* Brand + columns + help card */}
                <div
                    className="
                        mt-10
                        grid
                        grid-cols-1
                        gap-10
                        sm:grid-cols-2
                        lg:grid-cols-[minmax(0,1.3fr)_repeat(4,minmax(0,0.85fr))_minmax(230px,260px)]
                        lg:gap-8
                    "
                >
                    {/* Brand column */}
                    <div className="sm:col-span-2 lg:col-span-1">
                        <Link href="/" className="flex items-center gap-3">
                            <Image
                                src="/images/optimized-svg/company-new-logo.svg"
                                alt=""
                                width={44}
                                height={60}
                                className="h-10 w-auto"
                            />

                            <span
                                className="
                                    text-xl
                                    font-bold
                                    tracking-[-0.045em]
                                    text-(--footer-logo-text)
                                "
                            >
                                InterviewCall
                            </span>
                        </Link>

                        <p
                            className="
                                mt-4
                                max-w-80
                                text-[14px]
                                leading-[1.6]
                                text-(--footer-description-text)
                            "
                        >
                            InterviewCall runs the AI-Proof Engineer Program
                            for software engineers who want stronger
                            fundamentals, real practice working with AI,
                            system design work, and a project they can walk
                            someone through in an interview.
                        </p>

                        <span className="mt-4 block h-1 w-8 rounded-full bg-(--footer-brand-underline)" />

                        <div className="mt-3 flex flex-wrap items-center gap-2">
                            {brandTags.map((tag, index) => (
                                <span
                                    key={tag}
                                    className="flex items-center gap-2"
                                >
                                    <span className="text-[13px] font-medium text-(--footer-tagline-text)">
                                        {tag}
                                    </span>

                                    {index < brandTags.length - 1 && (
                                        <span
                                            aria-hidden="true"
                                            className="h-1 w-1 rounded-full bg-(--footer-tagline-dot)"
                                        />
                                    )}
                                </span>
                            ))}
                        </div>

                        <p
                            className="
                                mt-5
                                text-[13px]
                                font-semibold
                                tracking-[-1%]
                                text-(--footer-heading-text)
                            "
                        >
                            Follow us
                        </p>

                        <div className="mt-3 flex items-center gap-3">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;

                                return (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.label}
                                        className="
                                            flex
                                            h-10
                                            w-10
                                            items-center
                                            justify-center
                                            rounded-full
                                            border
                                            border-(--footer-social-border)
                                            bg-(--footer-social-bg)
                                            text-(--footer-social-icon)
                                            transition-colors
                                            hover:bg-(--footer-social-hover-bg)
                                            hover:text-(--footer-social-hover-icon)
                                        "
                                    >
                                        <Icon className="h-4.5 w-4.5" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Link columns */}
                    {footerColumns.map((column) => (
                        <div key={column.title}>
                            <h3
                                className="
                                    text-[15px]
                                    font-semibold
                                    text-(--footer-heading-text)
                                "
                            >
                                {column.title}
                            </h3>

                            <span className="mt-2 block h-0.5 w-6 rounded-full bg-(--footer-heading-underline)" />

                            <ul className="mt-4 space-y-3">
                                {column.links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="
                                                text-[14px]
                                                text-(--footer-link-text)
                                                transition-colors
                                                hover:text-(--footer-link-hover-text)
                                            "
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Need help card */}
                    <div
                        className="
                            h-fit
                            rounded-2xl
                            border
                            border-(--footer-help-card-border)
                            bg-(--footer-help-card-bg)
                            p-5
                            sm:col-span-2
                            lg:col-span-1
                        "
                    >
                        <span
                            className="
                                flex
                                h-11
                                w-11
                                items-center
                                justify-center
                                rounded-full
                                bg-(--footer-help-icon-bg)
                                text-(--footer-help-icon-color)
                            "
                        >
                            <Headphones
                                aria-hidden="true"
                                className="h-5 w-5"
                                strokeWidth={1.8}
                            />
                        </span>

                        <h3
                            className="
                                mt-3
                                text-[16px]
                                font-bold
                                leading-tight
                                text-(--footer-help-title-text)
                            "
                        >
                            Need help choosing a track?
                        </h3>

                        <span className="mt-1.5 block h-0.5 w-6 rounded-full bg-(--footer-help-underline)" />

                        <p
                            className="
                                mt-3
                                text-[13.5px]
                                leading-[1.5]
                                text-(--footer-help-text)
                            "
                        >
                            Speak with our team about program structure,
                            admissions, and the latest fee plan.
                        </p>

                        <Link
                            href="#callback"
                            className="
                                group
                                mt-4
                                inline-flex
                                items-center
                                gap-2
                                text-[14px]
                                font-semibold
                                text-(--footer-help-link-text)
                                transition-colors
                                hover:text-(--footer-help-link-hover-text)
                            "
                        >
                            <span>Book a Counselling Call</span>
                            <ArrowRight
                                aria-hidden="true"
                                className="
                                    h-4
                                    w-4
                                    transition-transform
                                    duration-200
                                    group-hover:translate-x-1
                                "
                                strokeWidth={2}
                            />
                        </Link>
                    </div>
                </div>
                </div>

                {/* Mobile / tablet */}
                <div className="lg:hidden">
                    {/* CTA banner */}
                    <div
                        className="
                            flex
                            flex-col
                            gap-5
                            rounded-2xl
                            border
                            border-(--footer-cta-border)
                            bg-(--footer-cta-bg)
                            p-5
                            sm:p-6
                        "
                    >
                        <div className="flex items-start gap-4">
                            <span
                                className="
                                    flex
                                    h-12
                                    w-12
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-(--footer-cta-icon-bg)
                                    text-(--footer-cta-icon-color)
                                "
                            >
                                <Rocket
                                    aria-hidden="true"
                                    className="h-6 w-6"
                                    strokeWidth={1.7}
                                />
                            </span>

                            <div>
                                <h2
                                    className="
                                        text-[17px]
                                        font-bold
                                        leading-[1.3]
                                        text-(--footer-cta-title)
                                        sm:text-[19px]
                                    "
                                >
                                    Next Steps
                                </h2>

                                <p
                                    className="
                                        mt-1.5
                                        text-[14px]
                                        leading-[1.5]
                                        text-(--footer-cta-text)
                                    "
                                >
                                    Explore the curriculum, identify your
                                    track, and speak with our team before
                                    enrolling.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3 sm:flex-row">
                            <Link
                                href="#callback"
                                className="
                                    group
                                    inline-flex
                                    min-h-12.5
                                    w-full
                                    items-center
                                    justify-center
                                    gap-2.5
                                    rounded-lg
                                    bg-(--footer-cta-primary-button-bg)
                                    px-6
                                    text-center
                                    text-[14px]
                                    font-semibold
                                    text-(--footer-cta-primary-button-text)
                                    transition-all
                                    duration-200
                                    hover:bg-(--footer-cta-primary-button-hover-bg)
                                    focus-visible:outline-none
                                    focus-visible:ring-4
                                    focus-visible:ring-(--focus-ring-color)
                                "
                            >
                                <CalendarCheck
                                    aria-hidden="true"
                                    className="h-4.5 w-4.5"
                                    strokeWidth={1.9}
                                />
                                <span>Book a Program Counselling Call</span>
                                <ArrowRight
                                    aria-hidden="true"
                                    className="h-4 w-4"
                                    strokeWidth={2}
                                />
                            </Link>

                            <Link
                                href="#curriculum"
                                className="
                                    inline-flex
                                    min-h-12.5
                                    w-full
                                    items-center
                                    justify-center
                                    gap-2.5
                                    rounded-lg
                                    border
                                    border-(--footer-cta-secondary-button-border)
                                    bg-(--footer-cta-secondary-button-bg)
                                    px-6
                                    text-center
                                    text-[14px]
                                    font-semibold
                                    text-(--footer-cta-secondary-button-text)
                                    transition-colors
                                    hover:bg-(--footer-cta-secondary-button-hover-bg)
                                    focus-visible:outline-none
                                    focus-visible:ring-4
                                    focus-visible:ring-(--focus-ring-color)
                                "
                            >
                                <Copy
                                    aria-hidden="true"
                                    className="h-4.5 w-4.5"
                                    strokeWidth={1.9}
                                />
                                <span>Download Curriculum</span>
                                <ArrowRight
                                    aria-hidden="true"
                                    className="h-4 w-4"
                                    strokeWidth={2}
                                />
                            </Link>
                        </div>
                    </div>

                    {/* Brand */}
                    <div className="mt-8">
                        <Link href="/" className="flex items-center gap-3">
                            {/* <Image
                                src="/images/optimized-svg/company-new-logo.svg"
                                alt=""
                                width={44}
                                height={60}
                                className="h-9 w-auto"
                            /> */}

                            <span
                                className="
                                    text-lg
                                    font-bold
                                    tracking-[-0.045em]
                                    text-(--footer-logo-text)
                                "
                            >
                                InterviewCall
                            </span>
                        </Link>

                        <p
                            className="
                                mt-4
                                text-[14px]
                                leading-[1.6]
                                text-(--footer-description-text)
                            "
                        >
                            InterviewCall runs the AI-Proof Engineer Program
                            for software engineers who want stronger
                            fundamentals, real practice working with AI,
                            system design work, and a project they can walk
                            someone through in an interview.
                        </p>

                        <div className="mt-3 flex flex-wrap items-center gap-2">
                            {brandTags.map((tag, index) => (
                                <span
                                    key={tag}
                                    className="flex items-center gap-2"
                                >
                                    <span className="text-[13px] font-medium text-(--footer-tagline-text)">
                                        {tag}
                                    </span>

                                    {index < brandTags.length - 1 && (
                                        <span
                                            aria-hidden="true"
                                            className="h-1 w-1 rounded-full bg-(--footer-tagline-dot)"
                                        />
                                    )}
                                </span>
                            ))}
                        </div>

                        <p
                            className="
                                mt-5
                                text-[13px]
                                font-semibold
                                tracking-[-1%]
                                text-(--footer-heading-text)
                            "
                        >
                            Follow us
                        </p>

                        <div className="mt-3 flex items-center gap-3">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;

                                return (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.label}
                                        className="
                                            flex
                                            h-10
                                            w-10
                                            items-center
                                            justify-center
                                            rounded-full
                                            border
                                            border-(--footer-social-border)
                                            bg-(--footer-social-bg)
                                            text-(--footer-social-icon)
                                            transition-colors
                                            hover:bg-(--footer-social-hover-bg)
                                            hover:text-(--footer-social-hover-icon)
                                        "
                                    >
                                        <Icon className="h-4.5 w-4.5" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Link column accordions */}
                    <div className="mt-8 sm:grid sm:grid-cols-2 sm:gap-x-8">
                        {footerColumns.map((column) => {
                            const isOpen = openColumn === column.title;

                            return (
                                <div
                                    key={column.title}
                                    className="border-b border-(--footer-border) sm:border-b-0"
                                >
                                    <button
                                        type="button"
                                        aria-expanded={isOpen}
                                        onClick={() => toggleColumn(column.title)}
                                        className="
                                            flex
                                            min-h-14
                                            w-full
                                            cursor-pointer
                                            items-center
                                            justify-between
                                            gap-3
                                            py-2
                                            text-left
                                            sm:min-h-0
                                            sm:cursor-default
                                            sm:py-0
                                        "
                                    >
                                        <span
                                            className="
                                                text-[15px]
                                                font-semibold
                                                text-(--footer-heading-text)
                                            "
                                        >
                                            {column.title}
                                        </span>

                                        <ChevronDown
                                            aria-hidden="true"
                                            className={`
                                                h-5
                                                w-5
                                                shrink-0
                                                text-(--footer-heading-underline)
                                                transition-transform
                                                duration-200
                                                sm:hidden
                                                ${isOpen ? 'rotate-180' : ''}
                                            `}
                                            strokeWidth={2}
                                        />
                                    </button>

                                    <span className="hidden sm:mt-2 sm:block sm:h-0.5 sm:w-6 sm:rounded-full sm:bg-(--footer-heading-underline)" />

                                    <div
                                        className={`
                                            grid
                                            transition-[grid-template-rows]
                                            duration-200
                                            sm:grid-rows-[1fr]
                                            ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}
                                        `}
                                    >
                                        <ul className="mt-1 space-y-3 overflow-hidden pb-4 sm:mt-4 sm:pb-0">
                                            {column.links.map((link) => (
                                                <li key={link.label}>
                                                    <Link
                                                        href={link.href}
                                                        className="
                                                            text-[14px]
                                                            text-(--footer-link-text)
                                                            transition-colors
                                                            hover:text-(--footer-link-hover-text)
                                                        "
                                                    >
                                                        {link.label}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Need help card */}
                    <div
                        className="
                            mt-6
                            rounded-2xl
                            border
                            border-(--footer-help-card-border)
                            bg-(--footer-help-card-bg)
                            p-5
                        "
                    >
                        <span
                            className="
                                flex
                                h-11
                                w-11
                                items-center
                                justify-center
                                rounded-full
                                bg-(--footer-help-icon-bg)
                                text-(--footer-help-icon-color)
                            "
                        >
                            <Headphones
                                aria-hidden="true"
                                className="h-5 w-5"
                                strokeWidth={1.8}
                            />
                        </span>

                        <h3
                            className="
                                mt-3
                                text-[16px]
                                font-bold
                                leading-tight
                                text-(--footer-help-title-text)
                            "
                        >
                            Need help choosing a track?
                        </h3>

                        <p
                            className="
                                mt-2
                                text-[13.5px]
                                leading-[1.5]
                                text-(--footer-help-text)
                            "
                        >
                            Speak with our team about program structure,
                            admissions, and the latest fee plan.
                        </p>

                        <Link
                            href="#callback"
                            className="
                                group
                                mt-4
                                inline-flex
                                items-center
                                gap-2
                                text-[14px]
                                font-semibold
                                text-(--footer-help-link-text)
                                transition-colors
                                hover:text-(--footer-help-link-hover-text)
                            "
                        >
                            <span>Book a Counselling Call</span>
                            <ArrowRight
                                aria-hidden="true"
                                className="
                                    h-4
                                    w-4
                                    transition-transform
                                    duration-200
                                    group-hover:translate-x-1
                                "
                                strokeWidth={2}
                            />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-(--footer-border) bg-(--footer-bg-bottom)">
                <div
                    className="
                        mx-auto
                        flex
                        w-full
                        max-w-345
                        flex-col
                        items-center
                        gap-4
                        px-4
                        py-6
                        text-center
                        sm:flex-row
                        sm:justify-between
                        sm:px-6
                        sm:text-left
                        lg:px-8
                        xl:px-12
                    "
                >
                    <p className="text-[13px] text-(--footer-copyright-text)">
                        © 2026 InterviewCall. All rights reserved.
                    </p>

                    <div className="flex items-center gap-6">
                        <Link
                            href="#terms"
                            className="
                                text-[13px]
                                text-(--footer-legal-link-text)
                                transition-colors
                                hover:text-(--footer-legal-link-hover-text)
                            "
                        >
                            Terms of Use
                        </Link>

                        <Link
                            href="#privacy"
                            className="
                                text-[13px]
                                text-(--footer-legal-link-text)
                                transition-colors
                                hover:text-(--footer-legal-link-hover-text)
                            "
                        >
                            Privacy Policy
                        </Link>

                        <Link
                            href="#cookies"
                            className="
                                text-[13px]
                                text-(--footer-legal-link-text)
                                transition-colors
                                hover:text-(--footer-legal-link-hover-text)
                            "
                        >
                            Cookie Policy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
