import { Clock, Play } from 'lucide-react';
import Image from 'next/image';
import { FC } from 'react';

import { featuredTalk } from '@/utils/careerInsightsItems';

import WaveformBars from './WaveformBars';

const FeaturedTalkCard: FC = () => {
    return (
        <div
            className="
                relative
                isolate
                flex
                min-h-full
                flex-col
                justify-between
                overflow-hidden
                rounded-2xl
                border
                border-(--career-insights-video-border)
                bg-(--career-insights-video-bg)
                p-6
                sm:p-8
            "
        >
            <Image
                src="/images/optimized-svg/career-insight-section-left-image.svg"
                alt=""
                fill
                aria-hidden="true"
                sizes="(max-width: 1024px) 100vw, 700px"
                className="-z-10 object-cover object-top"
            />

            <div
                className="
                    pointer-events-none
                    absolute
                    inset-0
                    -z-10
                    bg-gradient-to-t
                    from-black/85
                    via-black/35
                    to-black/10
                "
            />

            <div>
                <span
                    className="
                        inline-flex
                        min-h-7
                        items-center
                        rounded-md
                        bg-(--career-insights-video-badge-bg)
                        px-3
                        text-[12.5px]
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
                        max-w-90
                        text-[28px]
                        font-bold
                        leading-[1.2]
                        tracking-[-1%]
                        text-(--career-insights-video-text)
                        sm:text-[30px]
                    "
                >
                    {featuredTalk.title}
                </h3>

                {/* <span
                    className="
                        mt-4
                        block
                        h-1
                        w-11
                        rounded-full
                        bg-(--career-insights-video-accent-bar)
                    "
                /> */}

                <p
                    className="
                        mt-4
                        w-full
                        max-w-full
                        sm:max-w-80
                        lg:max-w-67
                        text-[15.5px]
                        leading-[1.6]
                        text-(--career-insights-video-muted-text)
                    "
                >
                    {featuredTalk.description}
                </p>
            </div>

            <button
                type="button"
                aria-label="Play featured career insight video"
                className="
                    absolute
                    top-1/2
                    left-1/2
                    flex
                    h-16
                    w-16
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
                    className="ml-0.5 h-6 w-6 fill-current"
                    strokeWidth={0}
                />
            </button>

            <div>
                <WaveformBars />

                <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                        <Clock
                            aria-hidden="true"
                            className="h-4 w-4 text-(--career-insights-video-muted-text)"
                            strokeWidth={1.9}
                        />

                        <span
                            className="
                                text-[13.5px]
                                font-medium
                                text-(--career-insights-video-muted-text)
                            "
                        >
                            {featuredTalk.duration}
                        </span>
                    </div>

                    <div className="flex flex-wrap gap-2">
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
                                    text-[12.5px]
                                    font-semibold
                                    text-[#A2C5EC]
                                    text-(--career-insights-video-tag-text)

                                "
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedTalkCard;
