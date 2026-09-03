import { FC } from 'react';

import { type CapstoneFeatureItem } from '@/types/capstoneProof';
import {
    capstoneFeatureStrip,
    mobileCapstoneFeatureStrip,
} from '@/utils/capstoneProofItems';

const FeatureStripGrid: FC<{
    items: CapstoneFeatureItem[];
    className: string;
}> = ({ items, className }) => {
    return (
        <div className={className}>
            {items.map((item) => {
                const Icon = item.icon;

                return (
                    <div
                        key={item.title}
                        className="
                            flex
                            min-w-0
                            items-center
                            gap-3
                            px-4
                            text-left
                            lg:min-h-16
                            lg:first:pl-0
                            lg:last:pr-0
                        "
                    >
                        <span
                            className="
                                flex
                                h-16
                                w-16
                                shrink-0
                                items-center
                                justify-center
                                rounded-[10px]
                                bg-(--proof-section-blue-bg)
                                text-(--proof-section-blue-text)
                            "
                        >
                            <Icon
                                aria-hidden="true"
                                className="h-8 w-8"
                                strokeWidth={1.8}
                            />
                        </span>

                        <div
                            className="
                                min-w-0
                                flex-1
                            "
                        >
                            <p
                                className="
                                    text-[16px]
                                    font-semibold
                                    leading-[1.2]
                                    text-(--proof-section-card-title)
                                "
                            >
                                {item.title}
                            </p>

                            <p
                                className="
                                    mt-1.5
                                    text-[14.5px]
                                    leading-[1.4]
                                    text-(--proof-section-card-text)
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

const CapstoneFeatureStrip: FC = () => {
    return (
        <>
            {/* Mobile / tablet — trimmed to 4 components */}
            <FeatureStripGrid
                items={mobileCapstoneFeatureStrip}
                className="
                    grid
                    grid-cols-2
                    gap-x-4
                    gap-y-6
                    rounded-2xl
                    border
                    border-(--proof-section-card-border)
                    bg-(--proof-section-card-bg)
                    px-5
                    py-6
                    sm:grid-cols-4
                    sm:px-8
                    lg:hidden
                "
            />

            {/* Desktop — full 6 components */}
            <FeatureStripGrid
                items={capstoneFeatureStrip}
                className="
                    hidden
                    gap-x-0
                    gap-y-6
                    rounded-2xl
                    border
                    border-(--proof-section-card-border)
                    bg-(--proof-section-card-bg)
                    px-5
                    py-6
                    sm:px-8
                    lg:grid
                    lg:grid-cols-6
                    lg:divide-x
                    lg:divide-(--proof-section-card-border)
                    lg:py-7
                "
            />
        </>
    );
};

export default CapstoneFeatureStrip;