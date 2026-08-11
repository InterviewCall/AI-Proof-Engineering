import clsx from 'clsx';
import { Minus, Plus } from 'lucide-react';
import { FC } from 'react';

import { type FaqItem } from '@/types/faq';

type FaqAccordionItemProps = {
    item: FaqItem;
    isOpen: boolean;
    isLast: boolean;
    onToggle: () => void;
};

const FaqAccordionItem: FC<FaqAccordionItemProps> = ({
    item,
    isOpen,
    isLast,
    onToggle,
}) => {
    const Icon = item.icon;

    return (
        <div
            className={clsx(
                isOpen && 'my-2 overflow-hidden rounded-xl',
                !isLast && 'border-b border-(--faq-accordion-divider)',
                'border rounded-xl'
            )}
        >
            <button
                type="button"
                aria-expanded={isOpen}
                onClick={onToggle}
                className="
                    flex
                    min-h-16
                    w-full
                    cursor-pointer
                    items-center
                    gap-4
                    px-5
                    py-4
                    text-left
                "
            >
                <span
                    className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-(--faq-item-icon-bg)
                        text-(--faq-item-icon)
                    "
                >
                    <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.9} />
                </span>

                <span
                    className={`
                        flex-1
                        text-[15px]
                        font-semibold
                        leading-[1.35]
                        sm:text-[17px]
                        ${
                            isOpen
                                ? 'text-(--faq-accordion-active-title)'
                                : 'text-(--faq-accordion-title)'
                        }
                    `}
                >
                    {item.question}
                </span>

                <span
                    className={clsx('flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-(--faq-accordion-border) text-(--faq-accordion-icon)', isOpen && 'bg-[#0043FB] text-white')}
                >
                    {isOpen ? (
                        <Minus aria-hidden="true" className="h-5 w-5" strokeWidth={3} />
                    ) : (
                        <Plus aria-hidden="true" className="h-5 w-5" strokeWidth={3} />
                    )}
                </span>
            </button>

            <div
                className={`
                    grid
                    transition-[grid-template-rows]
                    duration-200
                    ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}
                `}
            >
                <div className="overflow-hidden">
                    <p
                        className="
                            pr-5
                            pb-5
                            pl-19
                            text-[14px]
                            leading-[1.55]
                            text-(--faq-accordion-text)
                            sm:text-[15px]
                        "
                    >
                        {item.answer}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FaqAccordionItem;
