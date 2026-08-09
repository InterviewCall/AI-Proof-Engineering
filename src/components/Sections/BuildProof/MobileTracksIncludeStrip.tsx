import { FC } from 'react';

import { mobileTracksInclude } from '@/utils/buildProofItems';

const MobileTracksIncludeStrip: FC = () => {
    return (
        <div className="grid grid-cols-4 gap-2">
            {mobileTracksInclude.map((item) => {
                const Icon = item.icon;

                return (
                    <div
                        key={item.label}
                        className="flex flex-col items-center gap-2 text-center"
                    >
                        <Icon
                            aria-hidden="true"
                            className="h-6 w-6 text-(--color-blue)"
                            strokeWidth={1.8}
                        />

                        <span
                            className="
                                text-[11.5px]
                                font-semibold
                                leading-[1.3]
                                text-(--build-proof-enrollment-title)
                            "
                        >
                            {item.label}
                        </span>
                    </div>
                );
            })}
        </div>
    );
};

export default MobileTracksIncludeStrip;
