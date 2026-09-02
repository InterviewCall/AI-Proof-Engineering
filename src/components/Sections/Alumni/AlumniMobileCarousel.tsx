'use client';

import { ArrowRight, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { FC, useState } from 'react';

import { type AlumniMiniStory } from '@/types/alumni';

type AlumniMobileCarouselProps = {
    stories: AlumniMiniStory[];
};

const AlumniMobileCarousel: FC<AlumniMobileCarouselProps> = ({ stories }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const story = stories[activeIndex];

    if (!story) return null;

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % stories.length);
    };

    return (
        <div>
            <div className="relative">
                <div
                    className="
                        flex
                        items-center
                        gap-3
                        rounded-2xl
                        border
                        border-(--alumni-mini-card-border)
                        bg-(--alumni-mini-card-bg)
                        p-4
                        pr-10
                    "
                >
                    <span
                        className="
                            relative
                            h-14
                            w-14
                            shrink-0
                            overflow-hidden
                            rounded-full
                            bg-(--alumni-mini-avatar-bg)
                        "
                    >
                        <Image
                            src={story.image}
                            alt={story.name}
                            fill
                            sizes="56px"
                            className="object-cover"
                        />
                    </span>

                    <div className="min-w-0 flex-1">
                        <h3
                            className="
                                truncate
                                text-[15px]
                                font-bold
                                leading-tight
                                text-(--alumni-mini-name-text)
                            "
                        >
                            {story.name}
                        </h3>

                        <p
                            className="
                                mt-0.5
                                text-[12px]
                                text-(--alumni-mini-meta-text)
                            "
                        >
                            {story.role} &bull; {story.yoe}
                        </p>

                        <div
                            className="
                                mt-1.5
                                flex
                                items-center
                                gap-1.5
                                text-[12.5px]
                                font-semibold
                            "
                        >
                            <span className="truncate text-(--alumni-mini-label-text)">
                                {story.priorFocus}
                            </span>

                            <ArrowRight
                                aria-hidden="true"
                                className="h-3 w-3 shrink-0 text-black"
                                strokeWidth={2.4}
                            />

                            <span className="truncate text-(--alumni-mini-link-text)">
                                {story.careerStepRole}
                            </span>
                        </div>

                        <div className="relative mt-2 h-5 w-20">
                            <Image
                                src={story.companyLogo}
                                alt={story.company}
                                fill
                                sizes="80px"
                                className="object-contain object-left"
                            />
                        </div>
                    </div>
                </div>

                <button
                    type="button"
                    onClick={handleNext}
                    aria-label="Next alumni story"
                    className="
                        absolute
                        top-1/2
                        right-2
                        flex
                        h-8
                        w-8
                        -translate-y-1/2
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-(--alumni-mini-card-border)
                        bg-(--alumni-mini-card-bg)
                        text-(--alumni-mini-name-text)
                        shadow-sm
                        focus-visible:outline-none
                        focus-visible:ring-4
                        focus-visible:ring-(--focus-ring-color)
                    "
                >
                    <ChevronRight aria-hidden="true" className="h-4 w-4" strokeWidth={2.2} />
                </button>
            </div>

            <div className="mt-4 flex items-center justify-center gap-1.5">
                {stories.map((s, index) => (
                    <span
                        key={s.name}
                        className={`
                            h-1.5
                            rounded-full
                            transition-all
                            duration-200
                            ${
                                index === activeIndex
                                    ? 'w-5 bg-(--button-primary-bg)'
                                    : 'w-1.5 bg-(--alumni-mini-card-border)'
                            }
                        `}
                    />
                ))}
            </div>
        </div>
    );
};

export default AlumniMobileCarousel;