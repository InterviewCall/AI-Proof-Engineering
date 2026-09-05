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

                <div className="mt-4 flex flex-col gap-2">
                    <a
                        href={track.curriculumPath}
                        download
                        className="
                            group
                            inline-flex
                            min-h-13.5
                            w-full
                            items-center
                            justify-center
                            gap-3
                            rounded-[5px]
                            bg-(--button-primary-bg)
                            px-5
                            text-center
                            text-[16px]
                            font-medium
                            text-(--button-primary-text)
                            transition-all
                            duration-200
                            hover:-translate-y-0.5
                            hover:bg-(--button-primary-bg-hover)
                            focus-visible:outline-none
                            focus-visible:ring-4
                            focus-visible:ring-(--focus-ring-color)
                        "
                    >
                        <Download
                            aria-hidden="true"
                            className="h-5 w-5"
                            strokeWidth={1.9}
                        />

                        <span>Download Track Curriculum</span>
                    </a>

                    <Link
                        href="#callback"
                        className="
                            inline-flex
                            min-h-12.5
                            w-full
                            items-center
                            justify-center
                            gap-3
                            rounded-[5px]
                            border
                            border-(--color-brand-600)
                            bg-white
                            px-5
                            text-center
                            text-[15px]
                            font-semibold
                            text-(--color-brand-700)
                            transition-colors
                            hover:bg-(--color-brand-50)
                            hover:-translate-y-0.5
                            focus-visible:outline-none
                            focus-visible:ring-4
                            focus-visible:ring-(--focus-ring-color)
                        "
                    >
                        <CalendarDays
                            aria-hidden="true"
                            className="h-5 w-5"
                            strokeWidth={1.8}
                        />

                        <span>Book a Track Counselling Call</span>
                    </Link>
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

            <div className="mt-7 flex flex-col gap-3 xl:flex-row xl:justify-center xl:px-4">
                <a
                    href={track.curriculumPath}
                    download
                    className="
                        group
                        inline-flex
                        min-h-14.5
                        xl:w-[38%]
                        items-center
                        justify-center
                        gap-4
                        rounded-md
                        bg-(--button-primary-bg)
                        px-7
                        text-[15px]
                        font-medium
                        text-(--button-primary-text)
                        transition-all
                        duration-200
                        hover:-translate-y-0.5
                        hover:bg-(--button-primary-bg-hover)
                        focus-visible:outline-none
                        focus-visible:ring-4
                        focus-visible:ring-(--focus-ring-color)
                    "
                >
                    <Download
                        aria-hidden="true"
                        className="h-5 w-5"
                        strokeWidth={1.9}
                    />

                    <span>Download Track Curriculum</span>
                </a>

                <Link
                    href="#callback"
                    className="
                        inline-flex
                        min-h-14.5
                        xl:w-[38%]
                        items-center
                        justify-center
                        gap-4
                        rounded-md
                        border
                        border-(--color-brand-600)
                        bg-white
                        px-7
                        text-[15px]
                        font-semibold
                        text-(--color-brand-700)
                        transition-all
                        duration-200
                        hover:-translate-y-0.5
                        hover:bg-(--color-brand-50)
                        focus-visible:outline-none
                        focus-visible:ring-4
                        focus-visible:ring-(--focus-ring-color)
                    "
                >
                    <CalendarDays
                        aria-hidden="true"
                        className="h-5 w-5"
                        strokeWidth={1.8}
                    />

                    <span>Book a Track Counselling Call</span>
                </Link>
            </div>
        </div>
    );
};

export default TrackDetail;
