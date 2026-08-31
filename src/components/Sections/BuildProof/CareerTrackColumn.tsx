import { FC } from 'react';

import { type CareerTrack, type TrackAccent } from '@/types/buildProof';

const iconBgStyles: Record<TrackAccent, string> = {
    blue: 'bg-(--color-blue)',
    green: 'bg-(--color-green)',
    purple: 'bg-(--color-purple)',
};

const yoeTextStyles: Record<TrackAccent, string> = {
    blue: 'text-(--build-proof-showcase-blue-icon)',
    green: 'text-(--build-proof-showcase-green-icon)',
    purple: 'text-(--build-proof-showcase-purple-icon)',
};

const underlineStyles: Record<TrackAccent, string> = {
    blue: 'bg-(--build-proof-showcase-blue-icon)',
    green: 'bg-(--build-proof-showcase-green-icon)',
    purple: 'bg-(--build-proof-showcase-purple-icon)',
};

const CareerTrackColumn: FC<{ track: CareerTrack }> = ({ track }) => {
    const Icon = track.icon;

    return (
        <div className='border p-5 rounded-lg border-[#02285D] flex flex-col gap-y-1'>
            <span
                className={`
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-xl
                    text-white
                    ${iconBgStyles[track.accent]}
                `}
            >
                <Icon aria-hidden="true" className="h-8 w-8" strokeWidth={1.8} />
            </span>

            <h4
                className="
                    mt-3
                    text-[18px]
                    font-bold
                    leading-tight
                    text-(--build-proof-showcase-title)
                "
            >
                {track.title}
            </h4>

            <p
                className={`mt-1 text-[14px] font-bold ${yoeTextStyles[track.accent]}`}
            >
                {track.yoe}
            </p>

            <span
                className={`mt-3 block h-1 w-8 rounded-full ${underlineStyles[track.accent]}`}
            />

            <p
                className="
                    mt-3
                    text-[13.5px]
                    font-medium
                    leading-[1.5]
                    text-(--build-proof-showcase-text)
                "
            >
                {track.description}
            </p>
        </div>
    );
};

export default CareerTrackColumn;
