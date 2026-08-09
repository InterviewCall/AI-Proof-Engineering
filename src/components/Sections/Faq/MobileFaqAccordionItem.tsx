import { Minus, Plus } from 'lucide-react';
import { FC } from 'react';

import { type FaqItem } from '@/types/faq';

type MobileFaqAccordionItemProps = {
    item: FaqItem;
    isOpen: boolean;
    onToggle: () => void;
};

const MobileFaqAccordionItem: FC<MobileFaqAccordionItemProps> = ({
    item,
    isOpen,
    onToggle,
}) => {
    const Icon = item.icon;

    return (
        <div
            className={`
                overflow-hidden
                rounded-2xl
                border
                transition-colors
                ${
                    isOpen
                        ? 'border-(--faq-accordion-active-border) bg-(--faq-accordion-active-bg)'
                        : 'border-(--faq-accordion-border) bg-(--faq-accordion-bg)'
                }
            `}
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
                    gap-3
                    px-4
                    py-3.5
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
                        rounded-xl
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
                        ${
                            isOpen
                                ? 'text-(--faq-accordion-active-title)'
                                : 'text-(--faq-accordion-title)'
                        }
                    `}
                >
                    {item.question}
                </span>

                {isOpen ? (
                    <span
                        className="
                            flex
                            h-7
                            w-7
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            bg-(--faq-accordion-active-border)
                            text-white
                        "
                    >
                        <Minus aria-hidden="true" className="h-4 w-4" strokeWidth={2.2} />
                    </span>
                ) : (
                    <span
                        className="
                            flex
                            h-7
                            w-7
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-(--faq-accordion-icon)
                            text-(--faq-accordion-icon)
                        "
                    >
                        <Plus aria-hidden="true" className="h-4 w-4" strokeWidth={2.2} />
                    </span>
                )}
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
                            px-4
                            pb-4
                            pl-17
                            text-[13.5px]
                            leading-[1.55]
                            text-(--faq-accordion-text)
                        "
                    >
                        {item.answer}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MobileFaqAccordionItem;
