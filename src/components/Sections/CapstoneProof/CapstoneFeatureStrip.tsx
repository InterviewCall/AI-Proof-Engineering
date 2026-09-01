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
                            flex-col
                            items-center
                            justify-start
                            gap-2
                            px-3
                            text-center
                        "
                    >
                        <span
                            className="
                                flex
                                h-9
                                w-9
                                shrink-0
                                items-center
                                justify-center
                                rounded-[8px]
                                bg-(--proof-section-blue-bg)
                                text-(--proof-section-blue-text)
                            "
                        >
                            <Icon
                                aria-hidden="true"
                                className="h-4.5 w-4.5"
                                strokeWidth={1.8}
                            />
                        </span>

                        <p
                            className="
                                text-[11px]
                                font-semibold
                                leading-[1.2]
                                text-(--proof-section-card-title)
                            "
                        >
                            {item.title}
                        </p>

                        <p
                            className="
                                max-w-[145px]
                                text-[9.5px]
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
            {/* Mobile / tablet */}
            <FeatureStripGrid
                items={mobileCapstoneFeatureStrip}
                className="
                    grid
                    grid-cols-2
                    gap-x-4
                    gap-y-6
                    rounded-[12px]
                    border
                    border-(--proof-section-card-border)
                    bg-(--proof-section-card-bg)
                    px-4
                    py-5
                    sm:grid-cols-4
                    sm:px-6
                    lg:hidden
                "
            />

            {/* Desktop */}
            <FeatureStripGrid
                items={capstoneFeatureStrip}
                className="
                    hidden
                    rounded-[12px]
                    border
                    border-(--proof-section-card-border)
                    bg-(--proof-section-card-bg)
                    lg:grid
                    lg:grid-cols-6
                    lg:divide-x
                    lg:divide-(--proof-section-card-border)
                    lg:px-2
                    lg:py-5
                "
            />
        </>
    );
};

export default CapstoneFeatureStrip;