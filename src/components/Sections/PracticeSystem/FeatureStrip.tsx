import { FC } from 'react';

import { type FeatureStripItem } from '@/types/practiceSystem';

type FeatureStripProps = {
    items: FeatureStripItem[];
    compact?: boolean;
};

const FeatureStrip: FC<FeatureStripProps> = ({ items, compact = false }) => {
    if (compact) {
        return (
            <div
                className="
                    grid
                    grid-cols-4
                    overflow-hidden
                    rounded-xl
                    border
                    border-(--practice-section-card-border)
                    bg-white
                "
            >
                {items.map((item, index) => {
                    const Icon = item.icon;

                    return (
                        <div
                            key={item.title}
                            className={`
                                flex
                                flex-col
                                items-center
                                justify-center
                                gap-2
                                px-3
                                py-4
                                text-center
                                ${
                                    index < items.length - 1
                                        ? 'border-r border-(--practice-section-card-border)'
                                        : ''
                                }
                            `}
                        >
                            <span
                                className="
                                    flex
                                    h-16
                                    w-16
                                    items-center
                                    justify-center
                                    rounded-[10px]
                                    bg-(--practice-section-board-bg)
                                    text-(--color-brand-700)
                                "
                            >
                                <Icon
                                    aria-hidden="true"
                                    className="h-8 w-8"
                                    strokeWidth={1.8}
                                />
                            </span>

                            <span
                                className="
                                    text-[12px]
                                    font-semibold
                                    leading-tight
                                    text-(--practice-section-card-title)
                                "
                            >
                                {item.title}
                            </span>
                        </div>
                    );
                })}
            </div>
        );
    }

    return (
        <div
            className="
                grid
                gap-3
                border-t
                border-(--practice-section-board-border)
                pt-6
                sm:grid-cols-3
                lg:grid-cols-4
            "
        >
            {items.map((item) => {
                const Icon = item.icon;

                return (
                    <div
                        key={item.title}
                        className={`flex items-start gap-3 ${item.title === 'Readiness Tracking' ? 'lg:hidden' : ''}`}

                    >
                        <span
                            className="
                                flex
                                h-18
                                w-18
                                shrink-0
                                items-center
                                justify-center
                                rounded-[10px]
                                border
                                border-(--practice-section-card-border)
                                bg-[#E6EDFB]
                                text-(--color-brand-700)
                            "
                        >
                            <Icon
                                aria-hidden="true"
                                className="h-9 w-9"
                                strokeWidth={1.8}
                            />
                        </span>

                        <div className="min-w-0 self-start">
                            <p
                                className="
                                    text-[16px]
                                    font-semibold
                                    leading-[1.25]
                                    text-(--practice-section-card-title)
                                    lg:whitespace-nowrap
                                "
                            >
                                {item.title}
                            </p>

                            <p
                                className="
                                    mt-1
                                    text-[13px]
                                    leading-[1.4]
                                    text-(--practice-section-card-text)
                                "
                            >
                                {item.description}
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default FeatureStrip;