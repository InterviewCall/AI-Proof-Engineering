import { FC } from 'react';

import { careerTracks } from '@/utils/buildProofItems';

import CareerTrackColumn from './CareerTrackColumn';

const CareerTracksPanel: FC = () => {
    return (
        <div
            className="
                flex
                h-full
                flex-col
                rounded-2xl
                gap-y-2.5
                border
                border-(--build-proof-showcase-border)
                bg-(--build-proof-showcase-bg)
                p-6
                sm:p-8
            "
        >
            <h3
                className="
                    text-[26px]
                    font-bold
                    leading-[1.2]
                    tracking-[-1%]
                    text-(--build-proof-showcase-title)
                    sm:text-[30px]
                "
            >
                Choose Your Track
            </h3>

            <span
                className="
                    mt-3
                    block
                    h-1
                    w-11
                    rounded-full
                    bg-(--color-blue)
                "
            />

            <p
                className="
                    mt-3
                    max-w-100
                    text-[16px]
                    font-medium
                    leading-[1.55]
                    text-(--build-proof-showcase-text)
                "
            >
                Foundation, Growth, or Leadership — based on your years of
                experience.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
                {careerTracks.map((track) => (
                    <CareerTrackColumn key={track.title} track={track} />
                ))}
            </div>

            <div className="mt-auto flex justify-between items-center pt-6">
                <span className="h-px max-w-24 flex-1 bg-(--build-proof-legend-line)" />

                <div className="flex items-center gap-7 text-[16px] font-medium whitespace-nowrap text-(--build-proof-showcase-text)">
                    {careerTracks.map((track, index) => (
                        <span key={track.title} className="flex items-center gap-5">
                            {track.title.replace(' Track', '')}

                            {index !== careerTracks.length - 1 && (
                                <span aria-hidden="true">•</span>
                            )}
                        </span>
                    ))}
                </div>

                <span className="h-px max-w-24 flex-1 bg-(--build-proof-legend-line)" />
            </div>
        </div>
    );
};

export default CareerTracksPanel;
