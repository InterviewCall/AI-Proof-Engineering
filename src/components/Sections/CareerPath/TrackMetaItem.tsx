import type { FC } from 'react';

import { type TrackMetaItemProps } from '@/types/careerPath';

const TrackMetaItem: FC<TrackMetaItemProps> = ({
    icon: Icon,
    label,
    compact = false,
}) => {
    return (
        <div
            className={`
                flex
                items-center
                justify-center
                rounded-[7px]
                border
                border-(--color-brand-300)
                bg-[#F6F9FD]
                text-(--career-path-card-title)
                ${
                    compact
                        ? 'min-h-11 gap-2 px-2 py-2 text-[11px] font-semibold'
                        : 'min-h-12 gap-3 px-4 py-3 text-[12px] font-semibold lg:w-full lg:gap-2.5 lg:px-4 lg:text-[13px]'
                }
            `}
        >
            <Icon
                aria-hidden="true"
                className={`
                    shrink-0
                    text-(--color-brand-700)
                    ${compact ? 'h-5 w-5' : 'h-6 w-6'}
                `}
                strokeWidth={1.8}
            />

            <span className="whitespace-nowrap text-[12px] font-bold leading-tight">
                {label}
            </span>
        </div>
    );
};

export default TrackMetaItem;
