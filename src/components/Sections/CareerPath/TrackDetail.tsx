import {
    CalendarDays,
    Code2,
    Download,
    Rocket,
    Target,
    Trophy,
    UserRound,
    UsersRound,
    Video,
} from 'lucide-react';
import Link from 'next/link';
import type { FC } from 'react';

import { type TrackDetailProps } from '@/types/careerPath';

import TrackMetaItem from './TrackMetaItem';
import DownloadCurriculumButton from '@/components/Shared/DownloadCurriculumButton';
import BookTrackCounsellingButton from '@/components/Shared/BookTrackCounsellingButton';

const TrackDetail: FC<TrackDetailProps> = ({
    track,
    mobile = false,
}) => {
    const detailItems = [
        {
            title: mobile ? 'Focus' : 'Focus Areas',
            description: mobile
                ? track.mobileFocusAreas
                : track.focusAreas,
            icon: Target,
        },
        {
            title: 'Best For',
            description: mobile ? track.mobileBestFor : track.bestFor,
            icon: UsersRound,
        },
        {
            title: 'Outcome',
            description: mobile ? track.mobileOutcome : track.outcome,
            icon: Trophy,
        },
    ];

    if (mobile) {
        return (
            <div className="px-5 pb-5 pt-6 sm:px-7 sm:pb-7">
                <h3
                    className="
                        text-[28px]
                        font-bold
                        leading-[1.15]
                        tracking-[-0.035em]
                        text-(--career-path-card-title)
                        sm:text-[32px]
                    "
                >
                    {track.title}
                </h3>

                <p
                    className="
                        mt-2
                        text-[15px]
                        leading-normal
                        text-(--career-path-card-text)
                        sm:text-[17px]
                    "
                >
                    {track.description}
                </p>

                <div className="mt-5">
                    {detailItems.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={item.title}
                                className={`
                                    grid
                                    grid-cols-[54px_minmax(0,1fr)]
                                    gap-4
                                    py-4
                                    ${
                                        index < detailItems.length - 1
                                            ? 'border-b border-(--career-path-card-divider)'
                                            : ''
                                    }
                                `}
                            >
                                <span
                                    className="
                                        flex
                                        h-13.5
                                        w-13.5
                                        items-center
                                        justify-center
                                        rounded-[11px]
                                        border
                                        border-(--career-path-card-border)
                                        bg-(--career-path-section-eyebrow-bg)
                                        text-(--career-path-card-icon)
                                    "
                                >
                                    <Icon
                                        aria-hidden="true"
                                        className="h-7 w-7"
                                        strokeWidth={1.7}
                                    />
                                </span>

                                <div>
                                    <h4
                                        className="
                                            text-[15px]
                                            font-semibold
                                            text-(--career-path-card-title)
                                        "
                                    >
                                        {item.title}
                                    </h4>

                                    <p
                                        className="
                                            mt-1
                                            text-[13px]
                                            font-medium
                                            leading-[1.45]
                                            text-(--career-path-card-text)
                                            sm:text-[14px]
                                        "
                                    >
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-4 grid grid-cols-3 gap-2">
                    <TrackMetaItem
                        icon={CalendarDays}
                        label={track.duration}
                        compact
                    />

                    <TrackMetaItem
                        icon={Video}
                        label={track.format}
                        compact
                    />

                    <TrackMetaItem
                        icon={Rocket}
                        label={track.mobileProjectLabel}
                        compact
                    />
                </div>

                {/* CTA */}
                
                <div className="mt-5 flex flex-col gap-3">
                    <DownloadCurriculumButton />

                    <BookTrackCounsellingButton />
                </div>
            </div>
        );
    }

    return (
        <div className="min-w-0 px-6 py-7 xl:px-10 xl:py-8">
            <h3
                className="
                    text-[24px]
                    font-semibold
                    leading-[1.32]
                    text-(--career-path-card-title)
                    tracking-[-2%]
                "
            >
                {track.title}
            </h3>

            <p
                className="
                    mt-2
                    max-w-190
                    text-[16px]
                    font-medium
                    leading-[1.38]
                    tracking-[-2%]
                    text-(--career-path-card-text)
                "
            >
                {track.description}
            </p>

            <div className="mt-7 grid grid-cols-3">
                {detailItems.map((item, index) => {
                    const Icon = item.icon;

                    return (
                        <article
                            key={item.title}
                            className={`
                                grid
                                grid-cols-[56px_minmax(0,1fr)]
                                gap-4
                                px-5
                                first:pl-0
                                last:pr-0
                                ${
                                    index < detailItems.length - 1
                                        ? 'border-r border-(--career-path-card-divider)'
                                        : ''
                                }
                            `}
                        >
                            <span
                                className="
                                    flex
                                    h-14
                                    w-14
                                    items-center
                                    justify-center
                                    rounded-xl
                                    border
                                    border-(--career-path-card-border)
                                    bg-(--career-path-section-eyebrow-bg)
                                    text-(--career-path-card-icon)
                                "
                            >
                                <Icon
                                    aria-hidden="true"
                                    className="h-8 w-8"
                                    strokeWidth={1.7}
                                />
                            </span>

                            <div>
                                <h4
                                    className="
                                        text-[18px]
                                        font-semibold
                                        text-(--career-path-card-title)
                                        leading-[1.32]
                                        tracking-[-2%]
                                    "
                                >
                                    {item.title}
                                </h4>

                                <p
                                    className="
                                        mt-2
                                        text-[14px]
                                        font-medium
                                        leading-[1.67]
                                        tracking-[-2%]
                                        text-(--career-path-card-text)
                                    "
                                >
                                    {item.description}
                                </p>
                            </div>
                        </article>
                    );
                })}
            </div>

            <div
                className="
                    mt-7
                    grid
                    grid-cols-2
                    gap-3
                    lg:grid-cols-[minmax(0,0.95fr)_minmax(0,0.95fr)_minmax(0,1.3fr)_minmax(0,1.55fr)]
                "
            >
                <TrackMetaItem
                    icon={CalendarDays}
                    label={`Duration: ${track.duration}`}
                />

                <TrackMetaItem
                    icon={Video}
                    label={`Format: ${track.format}`}
                />

                <TrackMetaItem
                    icon={Code2}
                    label={`Projects: ${track.projects}`}
                />

                <TrackMetaItem
                    icon={UserRound}
                    label={`Career Layer: ${track.careerLayer}`}
                />
            </div>

            {/* CTA */}
            <div
                className="
                    mt-5
                    grid
                    max-w-[735px]
                    gap-3
                    lg:mt-6
                    lg:grid-cols-[1.2fr_1fr]
                    lg:gap-3
                "
            >
                <DownloadCurriculumButton />
                <BookTrackCounsellingButton />
            </div>

            
        </div>
    );
};

export default TrackDetail;
