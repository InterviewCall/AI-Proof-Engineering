import { ArrowRight, MessageCircleQuestion } from 'lucide-react';
import Link from 'next/link';
import { FC } from 'react';

import { faqSupportOptions } from '@/utils/faqItems';

const FaqSidebar: FC = () => {
    return (
        <aside
            className="
                flex
                h-fit
                flex-col
                rounded-2xl
                border
                border-(--faq-sidebar-border)
                bg-(--faq-sidebar-bg)
                p-5
            "
        >
            <div className='flex gap-x-5 items-center'>
                <span
                    className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-full
                        bg-(--faq-support-option-icon-bg)
                        text-(--faq-sidebar-icon)
                    "
                >
                    <MessageCircleQuestion
                        aria-hidden="true"
                        className="h-7 w-7"
                        strokeWidth={1.8}
                    />
                </span>

                <div className='flex flex-col gap-y-3'>
                    <h3
                        className="
                            mt-4
                            text-[19px]
                            font-bold
                            leading-tight
                            text-(--faq-sidebar-title)
                        "
                    >
                        Still have questions?
                    </h3>

                    <div className='h-0.5 w-14 bg-[#0034EF]'></div>
                </div>
            </div>


            <p
                className="
                    mt-6.5
                    text-[14px]
                    leading-[1.5]
                    text-(--faq-sidebar-text)
                "
            >
                Our team can help you understand the right track, program structure, admissions process, and latest fee plan before enrollment.
            </p>

            <div className="mt-5 flex flex-col divide-y divide-(--faq-sidebar-divider)">
                {faqSupportOptions.map((option) => {
                    const Icon = option.icon;

                    return (
                        <div
                            key={option.title}
                            className="flex items-start gap-3 py-3.5 first:pt-0 last:pb-0"
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
                                    bg-(--faq-support-option-icon-bg)
                                    text-(--faq-support-option-icon)
                                "
                            >
                                <Icon
                                    aria-hidden="true"
                                    className="h-7.5 w-7.5"
                                    strokeWidth={1.9}
                                />
                            </span>

                            <div>
                                <p
                                    className="
                                        text-[14px]
                                        font-semibold
                                        leading-tight
                                        text-(--faq-support-option-title)
                                    "
                                >
                                    {option.title}
                                </p>

                                <p
                                    className="
                                        mt-1
                                        text-[13px]
                                        leading-[1.45]
                                        text-(--faq-support-option-text)
                                    "
                                >
                                    {option.description}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>

            <Link
                href="#callback"
                className="
                    group
                    mt-5
                    inline-flex
                    min-h-12.5
                    w-full
                    items-center
                    justify-center
                    gap-3
                    rounded-lg
                    bg-(--faq-support-button-bg)
                    px-3
                    text-center
                    text-[15px]
                    font-medium
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
                <span>Book a Program Counselling Call</span>

                <ArrowRight
                    aria-hidden="true"
                    className="
                        h-5
                        w-5
                        transition-transform
                        duration-200
                        group-hover:translate-x-1
                    "
                    strokeWidth={1.9}
                />
            </Link>
        </aside>
    );
};

export default FaqSidebar;
