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
                p-6
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
                    bg-(--faq-sidebar-icon-bg)
                    text-(--faq-sidebar-icon)
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
                    mt-4
                    text-[19px]
                    font-bold
                    leading-tight
                    text-(--faq-sidebar-title)
                "
            >
                Still have questions?
            </h3>

            <p
                className="
                    mt-1.5
                    text-[14px]
                    leading-[1.5]
                    text-(--faq-sidebar-text)
                "
            >
                Talk to our team before you enroll.
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
                                    h-9
                                    w-9
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
                                    className="h-4.5 w-4.5"
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
