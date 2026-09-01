import { Clock, Play } from 'lucide-react';
import Image from 'next/image';
import { FC } from 'react';

import { featuredTalk } from '@/utils/careerInsightsItems';

const MobileFeaturedTalkCard: FC = () => {
    return (
        <div
            className="
                relative
                isolate
                min-h-[294px]
                overflow-hidden
                rounded-2xl
                border
                border-(--career-insights-video-border)
                bg-(--career-insights-video-bg)
                p-5
                sm:p-7
            "
        >
            <Image
                src="/images/optimized-svg/career-insight-section-mobile-view-image.svg"
                alt=""
                fill
                aria-hidden="true"
                sizes="100vw"
                className="-z-10 object-cover"
            />

            <div
                className="
                    pointer-events-none
                    absolute
                    inset-0
                    -z-10
                    bg-gradient-to-t
                    from-black/90
                    via-black/40
                    to-black/10
                "
            />

            <span
                className="
                    inline-flex
                    min-h-7
                    items-center
                    rounded-md
                    bg-(--career-insights-video-badge-bg)
                    px-3
                    text-[12px]
                    font-bold
                    uppercase
                    tracking-[0.03em]
                    text-(--career-insights-video-badge-text)
                "
            >
                {featuredTalk.badge}
            </span>

            <h3
                className="
                    mt-4
                    max-w-75
                    text-[24px]
                    font-bold
                    leading-[1.2]
                    tracking-[-1%]
                    text-(--career-insights-video-text)
                "
            >
                {featuredTalk.title}
            </h3>

            <span
                className="
                    mt-4
                    block
                    h-1
                    w-11
                    rounded-full
                    bg-(--career-insights-video-accent-bar)
                "
            />

            <p
                className="
                    mt-2
                    max-w-28
                    text-[14px]
                    leading-[1.6]
                    text-(--career-insights-video-muted-text)
                "
            >
                {featuredTalk.descriptionMobile}
            </p>

            <button
                type="button"
                aria-label="Play featured career insight video"
                className="
                    absolute
                    top-1/2
                    left-1/2
                    flex
                    h-14
                    w-14
                    shrink-0
                    -translate-x-1/2
                    -translate-y-1/2
                    cursor-pointer
                    items-center
                    justify-center
                    rounded-full
                    bg-(--career-insights-video-play-bg)
                    text-(--career-insights-video-play-icon)
                    shadow-[0_10px_30px_rgba(0,0,0,0.35)]
                    transition-transform
                    hover:scale-105
                "
            >
                <Play
                    aria-hidden="true"
                    className="ml-0.5 h-5.5 w-5.5 fill-current"
                    strokeWidth={0}
                />
            </button>

            <div className="mt-3 flex items-center gap-2">
                <Clock
                    aria-hidden="true"
                    className="h-4 w-4 text-(--career-insights-video-muted-text)"
                    strokeWidth={1.9}
                />

                <span
                    className="
                        text-[13px]
                        font-medium
                        text-(--career-insights-video-muted-text)
                    "
                >
                    {featuredTalk.duration}
                </span>
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
                {featuredTalk.tags.map((tag) => (
                    <span
                        key={tag}
                        className="
                            inline-flex
                            min-h-7
                            items-center
                            rounded-full
                            border
                            border-(--career-insights-video-tag-border)
                            bg-(--career-insights-video-tag-bg)
                            px-3
                            text-[12px]
                            font-semibold
                            text-(--career-insights-video-tag-text)
                        "
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default MobileFeaturedTalkCard;
