import { FC } from 'react';

import { type FeatureStripItem } from '@/types/practiceSystem';

type FeatureStripProps = {
    items: FeatureStripItem[];
    compact?: boolean;
};

const FeatureStrip: FC<FeatureStripProps> = ({ items, compact = false }) => {
    if (compact) {
        return (
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {items.map((item) => {
                    const Icon = item.icon;

                    return (
                        <div
                            key={item.title}
                            className="
                                flex
                                flex-col
                                items-center
                                gap-2
                                rounded-xl
                                border
                                border-(--practice-section-card-border)
                                bg-(--practice-section-card-bg)
                                px-3
                                py-4
                                text-center
                            "
                        >
                            <span
                                className="
                                    flex
                                    h-10
                                    w-10
                                    items-center
                                    justify-center
                                    rounded-[10px]
                                    bg-(--practice-section-board-bg)
                                    text-(--color-brand-700)
                                "
                            >
                                <Icon
                                    aria-hidden="true"
                                    className="h-5 w-5"
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
                lg:grid-cols-5
            "
        >
            {items.map((item) => {
                const Icon = item.icon;

                return (
                    <div key={item.title} className="flex items-start gap-3">
                        <span
                            className="
                                flex
                                h-10.5
                                w-10.5
                                shrink-0
                                items-center
                                justify-center
                                rounded-[10px]
                                border
                                border-(--practice-section-card-border)
                                bg-white
                                text-(--color-brand-700)
                            "
                        >
                            <Icon
                                aria-hidden="true"
                                className="h-5 w-5"
                                strokeWidth={1.8}
                            />
                        </span>

                        <div className="min-w-0">
                            <p
                                className="
                                    text-[14px]
                                    font-semibold
                                    leading-tight
                                    text-(--practice-section-card-title)
                                "
                            >
                                {item.title}
                            </p>

                            <p
                                className="
                                    mt-1
                                    text-[12px]
                                    leading-[1.35]
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
