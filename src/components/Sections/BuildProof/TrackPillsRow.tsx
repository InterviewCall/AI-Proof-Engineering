import { FC } from 'react';

import { type TrackAccent } from '@/types/buildProof';
import { mobileTrackPills } from '@/utils/buildProofItems';

const pillStyles: Record<TrackAccent, string> = {
    blue: 'bg-(--build-proof-chip-blue-bg) text-(--build-proof-chip-blue-icon)',
    green: 'bg-(--build-proof-chip-green-bg) text-(--build-proof-chip-green-icon)',
    purple:
        'bg-(--build-proof-chip-purple-bg) text-(--build-proof-chip-purple-icon)',
};

const TrackPillsRow: FC = () => {
    return (
        <div className="flex flex-wrap gap-3">
            {mobileTrackPills.map((pill) => {
                const Icon = pill.icon;

                return (
                    <span
                        key={pill.label}
                        className={`
                            inline-flex
                            min-h-12
                            flex-1
                            items-center
                            justify-center
                            gap-2
                            rounded-xl
                            px-4
                            text-[15px]
                            font-bold
                            whitespace-nowrap
                            ${pillStyles[pill.accent]}
                        `}
                    >
                        <Icon
                            aria-hidden="true"
                            className="h-5 w-5"
                            strokeWidth={1.9}
                        />
                        {pill.label}
                    </span>
                );
            })}
        </div>
    );
};

export default TrackPillsRow;
