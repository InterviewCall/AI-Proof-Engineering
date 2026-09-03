'use client';

import { CalendarCheck, Download, MessageCircleQuestion } from 'lucide-react';
import Link from 'next/link';
import { FC, useState } from 'react';

import { faqItems, mobileFaqItems } from '@/utils/faqItems';

import FaqAccordionItem from './FaqAccordionItem';
import FaqSidebar from './FaqSidebar';
import FaqTrustBar from './FaqTrustBar';
import MobileFaqAccordionItem from './MobileFaqAccordionItem';

const FaqSection: FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const [mobileOpenIndex, setMobileOpenIndex] = useState<number | null>(0);

    const toggleIndex = (index: number): void => {
        setOpenIndex((current) => (current === index ? null : index));
    };

    const toggleMobileIndex = (index: number): void => {
        setMobileOpenIndex((current) => (current === index ? null : index));
    };

    return (
        <section
            id="faq"
            className="
                mx-auto
                w-full
                box-border
                max-w-[1540px]
                px-[50px]
                pt-[50px]
                pb-[50px]
                scroll-mt-25
            "
        >
            <div className="mx-auto w-full max-w-none">
                {/* Desktop */}
                <div className="hidden lg:block">
                    <header className="mx-auto max-w-220 text-center">
                        <div
                            className="
                                mx-auto
                                inline-flex
                                min-h-9.5
                                items-center
                                justify-center
                                gap-2
                                rounded-full
                                bg-(--faq-section-eyebrow-bg)
                                px-5
                                text-[13px]
                                border
                                border-[#B1C8FD]
                                font-semibold
                                uppercase
                                tracking-[-1%]
                                text-(--faq-section-eyebrow-text)
                                sm:text-[15px]
                            "
                        >
                            <MessageCircleQuestion
                                aria-hidden="true"
                                className="h-4.5 w-4.5"
                                strokeWidth={1.9}
                            />
                            <span>FAQ</span>
                        </div>

                        <h2
                            className="
                                mt-[50px]
                                text-[clamp(2.5rem,7.5vw,3.75rem)]
                                font-bold
                                leading-[1.06]
                                tracking-[-2%]
                                text-(--faq-section-title-text)
                            "
                        >
                            Frequently Asked Questions
                        </h2>

                        <p
                            className="
                                mx-auto
                                mt-4
                                max-w-190
                                text-[16px]
                                font-medium
                                leading-[1.5]
                                text-(--faq-section-subtitle-text)
                                sm:text-[19px]
                            "
                        >
                            Clear answers about the program structure, tracks,
                            learning experience, admissions, and support at
                            InterviewCall.
                        </p>
                    </header>

                    <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-start lg:gap-8">
                        <div
                            className="
                                rounded-2xl
                                border
                                border-(--faq-accordion-border)
                                bg-(--faq-accordion-bg)
                                px-2
                                sm:p-5
                            "
                        >
                            {faqItems.map((item, index) => (
                                <FaqAccordionItem
                                    key={item.question}
                                    item={item}
                                    isOpen={openIndex === index}
                                    isLast={index === faqItems.length - 1}
                                    onToggle={() => toggleIndex(index)}
                                />
                            ))}
                        </div>

                        <FaqSidebar />
                    </div>

                    <FaqTrustBar />
                </div>

                {/* Mobile / tablet */}
                <div className="lg:hidden">
                    <header className="text-center">
                        <div
                            className="
                                mx-auto
                                inline-flex
                                min-h-9.5
                                items-center
                                justify-center
                                gap-2
                                rounded-full
                                bg-(--faq-section-eyebrow-bg)
                                px-5
                                text-[13px]
                                font-semibold
                                uppercase
                                tracking-[-1%]
                                text-(--faq-section-eyebrow-text)
                                sm:text-[15px]
                            "
                        >
                            <MessageCircleQuestion
                                aria-hidden="true"
                                className="h-4.5 w-4.5"
                                strokeWidth={1.9}
                            />
                            <span>FAQ</span>
                        </div>

                        <h2
                            className="
                                mt-[50px]
                                text-[clamp(2.25rem,7.5vw,3rem)]
                                font-bold
                                leading-[1.1]
                                tracking-[-2%]
                                text-(--faq-section-title-text)
                            "
                        >
                            Questions Before You Apply?
                        </h2>

                        <p
                            className="
                                mx-auto
                                mt-4
                                max-w-100
                                text-[15px]
                                font-medium
                                leading-[1.5]
                                text-(--faq-section-subtitle-text)
                                sm:text-[17px]
                            "
                        >
                            Clear answers about tracks, learning structure,
                            admissions, and support.
                        </p>
                    </header>

                    <div className="mt-8 space-y-3">
                        {mobileFaqItems.map((item, index) => (
                            <MobileFaqAccordionItem
                                key={item.question}
                                item={item}
                                isOpen={mobileOpenIndex === index}
                                onToggle={() => toggleMobileIndex(index)}
                            />
                        ))}
                    </div>

                    <div
                        className="
                            mt-5
                            rounded-2xl
                            border
                            border-(--faq-support-card-border)
                            bg-(--faq-support-card-bg)
                            p-5
                        "
                    >
                        <span
                            className="
                                flex
                                h-12
                                w-12
                                items-center
                                justify-center
                                rounded-full
                                bg-(--faq-support-card-icon-bg)
                                text-(--faq-support-card-icon)
                            "
                        >
                            <MessageCircleQuestion
                                aria-hidden="true"
                                className="h-6 w-6"
                                strokeWidth={1.8}
                            />
                        </span>

                        <h3
                            className="
                                mt-3
                                text-[19px]
                                font-bold
                                leading-tight
                                text-(--faq-support-card-title)
                            "
                        >
                            Still have questions?
                        </h3>

                        <span className="mt-1.5 block h-1 w-8 rounded-full bg-(--faq-sidebar-highlight)" />

                        <p
                            className="
                                mt-3
                                text-[14px]
                                leading-[1.5]
                                text-(--faq-support-card-text)
                            "
                        >
                            Get help choosing the right track and
                            understanding the program before enrollment.
                        </p>

                        <div className="mt-5 flex flex-col gap-3">
                            <Link
                                href="#callback"
                                className="
                                    group
                                    inline-flex
                                    min-h-12.5
                                    w-full
                                    items-center
                                    justify-center
                                    gap-3
                                    rounded-lg
                                    bg-(--faq-support-button-bg)
                                    px-6
                                    text-center
                                    text-[15px]
                                    font-semibold
                                    text-(--faq-support-button-text)
                                    transition-all
                                    duration-200
                                    hover:-translate-y-0.5
                                    hover:bg-(--faq-support-button-hover-bg)
                                    focus-visible:outline-none
                                    focus-visible:ring-4
                                    focus-visible:ring-(--focus-ring-color)
                                "
                            >
                                <CalendarCheck
                                    aria-hidden="true"
                                    className="h-5 w-5"
                                    strokeWidth={1.9}
                                />
                                <span>Book a Program Counselling Call</span>
                            </Link>

                            <Link
                                href="#curriculum"
                                className="
                                    inline-flex
                                    min-h-12.5
                                    w-full
                                    items-center
                                    justify-center
                                    gap-3
                                    rounded-lg
                                    border
                                    border-(--color-brand-300)
                                    bg-white
                                    px-6
                                    text-center
                                    text-[15px]
                                    font-semibold
                                    text-(--color-brand-700)
                                    transition-colors
                                    hover:bg-(--color-brand-50)
                                    focus-visible:outline-none
                                    focus-visible:ring-4
                                    focus-visible:ring-(--focus-ring-color)
                                "
                            >
                                <Download
                                    aria-hidden="true"
                                    className="h-5 w-5"
                                    strokeWidth={1.9}
                                />
                                <span>Download Curriculum</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FaqSection;
