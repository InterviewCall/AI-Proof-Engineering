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
                    sm:text-[28px]
                "
            >
                Three Career Tracks.

                <span className="block">One Structured Program.</span>
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
                    max-w-110
                    text-[15px]
                    leading-[1.55]
                    text-(--build-proof-showcase-text)
                "
            >
                Pick the track that matches your experience level and the
                engineering future you are building.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
                {careerTracks.map((track) => (
                    <CareerTrackColumn key={track.title} track={track} />
                ))}
            </div>

            <div className="mt-auto flex items-center gap-3 pt-6">
                <span className="h-px flex-1 bg-(--build-proof-legend-line)" />

                <div className="flex items-center gap-2 text-[13px] font-medium whitespace-nowrap text-(--build-proof-showcase-text)">
                    {careerTracks.map((track, index) => (
                        <span key={track.title} className="flex items-center gap-2">
                            {track.title.replace(' Track', '')}

                            {index !== careerTracks.length - 1 && (
                                <span aria-hidden="true">•</span>
                            )}
                        </span>
                    ))}
                </div>

                <span className="h-px flex-1 bg-(--build-proof-legend-line)" />
            </div>
        </div>
    );
};

export default CareerTracksPanel;
