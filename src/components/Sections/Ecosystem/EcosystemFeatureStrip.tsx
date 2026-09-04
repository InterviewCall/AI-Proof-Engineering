import { FC } from 'react';

import { ecosystemFeatureStrip } from '@/utils/ecosystemItems';

const EcosystemFeatureStrip: FC = () => {
    return (
        <div
            className="
                grid
                grid-cols-2
                gap-x-4
                gap-y-6
                rounded-2xl
                border
                border-(--ecosystem-strip-border)
                bg-(--ecosystem-strip-bg)
                px-5
                py-6
                sm:grid-cols-3
                sm:px-8
                lg:grid-cols-5
                lg:divide-x
                lg:divide-(--ecosystem-strip-border)
                lg:py-7
            "
        >
            {ecosystemFeatureStrip.map((item) => {
                const Icon = item.icon;

                return (
                    <div
                        key={item.title}
                        className="flex flex-col items-center gap-2 px-2 text-center lg:first:pl-0"
                    >
                        <span
                            className="
                                flex
                                h-13
                                w-13
                                items-center
                                justify-center
                                rounded-full
                                bg-(--ecosystem-strip-icon-bg)
                                text-(--ecosystem-strip-icon-text)
                            "
                        >
                            <Icon
                                aria-hidden="true"
                                className="h-6.5 w-6.5"
                                strokeWidth={1.8}
                            />
                        </span>

                        <p
                            className="
                                text-[17px]
                                font-semibold
                                leading-tight
                                text-(--ecosystem-strip-title-text)
                            "
                        >
                            {item.title}
                        </p>
                    </div>
                );
            })}
        </div>
    );
};

export default EcosystemFeatureStrip;
