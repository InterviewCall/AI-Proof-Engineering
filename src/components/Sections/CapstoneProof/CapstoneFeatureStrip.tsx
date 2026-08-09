import { FC } from 'react';

import { capstoneFeatureStrip } from '@/utils/capstoneProofItems';

const CapstoneFeatureStrip: FC = () => {
    return (
        <div
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
                sm:grid-cols-3
                sm:px-8
                lg:grid-cols-6
                lg:divide-x
                lg:divide-(--proof-section-card-border)
                lg:py-7
            "
        >
            {capstoneFeatureStrip.map((item) => {
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

export default CapstoneFeatureStrip;
