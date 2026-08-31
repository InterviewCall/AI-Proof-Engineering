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
                        className="flex flex-col items-center gap-2 px-2 text-center lg:first:pl-0"
                    >
                        <span
                            className="
                                flex
                                h-11
                                w-11
                                items-center
                                justify-center
                                rounded-[10px]
                                bg-(--proof-section-blue-bg)
                                text-(--proof-section-blue-text)
                            "
                        >
                            <Icon
                                aria-hidden="true"
                                className="h-5.5 w-5.5"
                                strokeWidth={1.8}
                            />
                        </span>

                        <p
                            className="
                                text-[14px]
                                font-semibold
                                leading-tight
                                text-(--proof-section-card-title)
                            "
                        >
                            {item.title}
                        </p>

                        <p
                            className="
                                text-[12px]
                                leading-[1.35]
                                text-(--proof-section-card-text)
                            "
                        >
                            {item.description}
                        </p>
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
                    gap-x-4
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
