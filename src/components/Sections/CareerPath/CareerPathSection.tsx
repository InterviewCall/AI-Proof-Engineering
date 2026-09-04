'use client';

import {
    ArrowRight,
    Target,
} from 'lucide-react';
import Link from 'next/link';
import { FC, useState } from 'react';

import { type TrackId } from '@/types/careerPath';
import { careerTracks } from '@/utils/careerTracks';

import TrackDetail from './TrackDetail';

const CareerPathSection: FC = () => {
    const [activeTrackId, setActiveTrackId] =
        useState<TrackId>('growth');

    const activeTrack =
        careerTracks.find((track) => track.id === activeTrackId) ??
        careerTracks[1];

    return (
        <section
            id="career-path"
            className="
                scroll-mt-25
                bg-(--career-path-section-bg)
                px-4
                py-14
                sm:px-6
                sm:py-16
                lg:px-8
                lg:py-20
                xl:px-12
            "
        >
            <div className="mx-auto w-full max-w-[1540px]">
                {/* =====================================================
                    SECTION HEADER
                ====================================================== */}
                <header className="mx-auto max-w-262.5 text-center">
                    <div
                        className="
                            flex
                            items-center
                            justify-center
                            gap-4
                            text-[clamp(0.875rem,1.1vw,1.0625rem)]
                            font-semibold
                            uppercase
                            tracking-[-1%]
                            leading-[1.32]
                            text-(--career-path-section-eyebrow-text)
                            sm:text-[18px]
                        "
                    >
                        <span
                            aria-hidden="true"
                            className="
                                h-0.5
                                w-8
                                bg-(--career-path-section-eyebrow-text)
                            "
                        />

                        <span>Choose Your Track</span>

                        <span
                            aria-hidden="true"
                            className="
                                h-0.5
                                w-8
                                bg-(--career-path-section-eyebrow-text)
                            "
                        />
                    </div>

                    {/* Desktop heading */}
                    <h2
                        className="
                            mt-3
                            hidden
                            text-[clamp(1.75rem,5vw,3.125rem)]
                            font-bold
                            leading-[1.03]
                            tracking-[-1%]
                            text-(--career-path-section-title-text)
                            lg:block
                        "
                    >
                        Choose the Track That{' '}
                        <span className="text-(--career-path-section-title-highlight)">
                            Matches Your Experience
                        </span>
                    </h2>

                    {/* Mobile and tablet heading */}
                    <h2
                        className="
                            mt-3
                            text-[clamp(2.45rem,10vw,3.8rem)]
                            font-bold
                            leading-[1.08]
                            tracking-[-0.04em]
                            text-(--career-path-section-title-text)
                            lg:hidden
                        "
                    >
                        Choose the Track That{' '}
                        <span className="text-(--career-path-section-title-highlight)">
                            Matches Your Experience
                        </span>
                    </h2>

                    <p
                        className="
                            mx-auto
                            mt-4
                            max-w-220
                            text-[19px]
                            font-medium
                            leading-[1.32]
                            tracking-[-5%]
                            text-(--career-path-section-subtitle-text)
                            
                        "
                    >
                        <span className="lg:hidden">
                            It comes down to how long you&apos;ve been
                            working and what&apos;s next.
                        </span>

                        <span className="hidden lg:inline">
                            It comes down to how long you&apos;ve been
                            working and what you&apos;re expected to handle
                            next.
                        </span>
                    </p>
                </header>

                {/* =====================================================
                    DESKTOP AND SMALL-LAPTOP LAYOUT
                    Activates from 1024px
                ====================================================== */}
                <div
                    className="
                        mt-8
                        hidden
                        overflow-hidden
                        rounded-[14px]
                        border
                        border-(--career-path-card-border)
                        bg-(--career-path-card-bg)
                        lg:block
                    "
                >
                    {/* Horizontal track tabs */}
                    <div
                        role="tablist"
                        aria-label="Career tracks"
                        className="grid grid-cols-3"
                    >
                        {careerTracks.map((track, index) => {
                            const Icon = track.icon;
                            const isActive = track.id === activeTrackId;

                            return (
                                <button
                                    key={track.id}
                                    type="button"
                                    role="tab"
                                    aria-selected={isActive}
                                    onClick={() =>
                                        setActiveTrackId(track.id)
                                    }
                                    className={`
                                        relative
                                        flex
                                        cursor-pointer
                                        min-h-24.5
                                        items-center
                                        justify-center
                                        gap-5
                                        px-5
                                        text-left
                                        transition-colors
                                        ${
                                            index < careerTracks.length - 1
                                                ? 'border-r border-(--career-path-tab-border)'
                                                : ''
                                        }
                                        ${
                                            isActive
                                                ? 'bg-(--career-path-tab-active-bg) text-(--career-path-tab-active-text)'
                                                : 'bg-(--career-path-tab-bg) text-(--career-path-tab-text) hover:bg-(--career-path-section-eyebrow-bg)'
                                        }
                                    `}
                                >
                                    {isActive && (
                                        <span
                                            aria-hidden="true"
                                            className="
                                                absolute
                                                inset-x-0
                                                top-0
                                                h-0.75
                                                bg-(--career-path-tab-active-border)
                                            "
                                        />
                                    )}

                                    <Icon
                                        aria-hidden="true"
                                        className="h-10 w-10 shrink-0"
                                        strokeWidth={1.7}
                                        style={{
                                            color: isActive
                                                ? track.accent
                                                : track.accent,
                                        }}
                                    />

                                    <span>
                                        <strong
                                            className="
                                                block
                                                text-[17px]
                                                font-semibold
                                                lg:text-[20px]
                                                leading-[1.32]
                                                tracking-[-3%]
                                            "
                                        >
                                            {track.title}
                                        </strong>

                                        <span
                                            className="
                                                mt-1
                                                block
                                                text-[18px]
                                                font-medium
                                                leading-[1.32]
                                                tracking-[-2%]
                                            "
                                        >
                                            {track.experience}
                                        </span>
                                    </span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Main desktop panel */}
                    <div
                        className="
                            grid
                            border-t
                            border-(--career-path-card-border)
                            lg:grid-cols-[250px_minmax(0,1fr)]
                            xl:grid-cols-[330px_minmax(0,1fr)]
                        "
                    >
                        {/* Sidebar */}
                        <aside
                            className="
                                border-r
                                border-(--career-path-sidebar-border)
                                bg-(--career-path-sidebar-bg)
                                p-4
                                xl:p-5
                            "
                        >
                            <div className="space-y-3">
                                {careerTracks.map((track) => {
                                    const Icon = track.icon;
                                    const isActive =
                                        track.id === activeTrackId;

                                    return (
                                        <button
                                            key={track.id}
                                            type="button"
                                            onClick={() =>
                                                setActiveTrackId(track.id)
                                            }
                                            className={`
                                                relative
                                                flex
                                                cursor-pointer
                                                min-h-23
                                                w-full
                                                items-center
                                                gap-4
                                                rounded-[10px]
                                                px-4
                                                text-left
                                                transition-colors
                                                ${
                                                    isActive
                                                        ? 'bg-(--career-path-sidebar-item-active-bg) text-(--career-path-sidebar-item-active-text)'
                                                        : 'bg-transparent text-(--career-path-sidebar-item-text) hover:bg-white'
                                                }
                                            `}
                                        >
                                            {isActive && (
                                                <span
                                                    aria-hidden="true"
                                                    className="
                                                        absolute
                                                        -left-1
                                                        top-2
                                                        bottom-2
                                                        w-0.75
                                                        rounded-full
                                                        bg-(--career-path-sidebar-item-active-border)
                                                    "
                                                />
                                            )}

                                            <span
                                                className="
                                                    flex
                                                    h-14
                                                    w-14
                                                    shrink-0
                                                    items-center
                                                    justify-center
                                                    rounded-[11px]
                                                    border
                                                    border-(--career-path-card-border)
                                                "
                                                style={{
                                                    color: isActive
                                                        ? '#ffffff'
                                                        : track.accent,
                                                    background: isActive
                                                        ? track.accent
                                                        : track.iconBackground,
                                                }}
                                            >
                                                <Icon
                                                    aria-hidden="true"
                                                    className="h-8 w-8"
                                                    strokeWidth={1.7}
                                                />
                                            </span>

                                            <span>
                                                <strong
                                                    className="
                                                        block
                                                        text-[17px]
                                                        font-semibold
                                                        lg:text-[20px]
                                                        leading-[1.32]
                                                        tracking-[-3%]
                                                    "
                                                >
                                                    {track.title}
                                                </strong>

                                                <span
                                                    className="
                                                        mt-1
                                                        block
                                                        text-[18px]
                                                        font-medium
                                                        leading-[1.32]
                                                        tracking-[-2%]
                                                    "
                                                >
                                                    {track.experience}
                                                </span>
                                            </span>
                                        </button>
                                    );
                                })}
                            </div>
                        </aside>

                        <TrackDetail track={activeTrack} />
                    </div>
                </div>

                {/* =====================================================
                    MOBILE AND TABLET ACCORDION LAYOUT
                    Used below 1024px
                ====================================================== */}
                <div className="mt-8 space-y-3 lg:hidden">
                    {careerTracks.map((track) => {
                        const Icon = track.icon;
                        const isActive = track.id === activeTrackId;

                        return (
                            <article
                                key={track.id}
                                className="
                                    overflow-hidden
                                    rounded-[11px]
                                    border
                                    border-(--career-path-card-border)
                                    bg-(--career-path-card-bg)
                                "
                            >
                                <button
                                    type="button"
                                    aria-expanded={isActive}
                                    onClick={() =>
                                        setActiveTrackId(track.id)
                                    }
                                    className={`
                                        flex
                                        cursor-pointer
                                        min-h-20.5
                                        w-full
                                        items-center
                                        gap-5
                                        px-5
                                        text-left
                                        transition-colors
                                        sm:px-7
                                        ${
                                            isActive
                                                ? 'border-b border-(--career-path-card-border) bg-(--career-path-tab-active-bg)'
                                                : 'bg-white'
                                        }
                                    `}
                                >
                                    <span
                                        className="
                                            flex
                                            h-13.5
                                            w-13.5
                                            shrink-0
                                            items-center
                                            justify-center
                                            rounded-[10px]
                                            border
                                            border-(--career-path-card-border)
                                        "
                                        style={{
                                            color: isActive
                                                ? '#ffffff'
                                                : track.accent,
                                            background: isActive
                                                ? track.accent
                                                : track.iconBackground,
                                        }}
                                    >
                                        <Icon
                                            aria-hidden="true"
                                            className="h-8 w-8"
                                            strokeWidth={1.7}
                                        />
                                    </span>

                                    <span>
                                        <strong
                                            className={`
                                                block
                                                text-[19px]
                                                font-semibold
                                                ${
                                                    isActive
                                                        ? 'text-(--career-path-tab-active-text)'
                                                        : 'text-(--career-path-card-title)'
                                                }
                                            `}
                                        >
                                            {track.title}
                                        </strong>

                                        <span
                                            className="
                                                mt-1
                                                block
                                                text-[16px]
                                                font-medium
                                                text-(--career-path-card-text)
                                            "
                                        >
                                            {track.experience}
                                        </span>
                                    </span>
                                </button>

                                {isActive && (
                                    <TrackDetail
                                        track={track}
                                        mobile
                                    />
                                )}
                            </article>
                        );
                    })}
                </div>

                {/* =====================================================
                    ASSESSMENT CTA
                ====================================================== */}
                <div
                    className="
                        mt-5
                        grid
                        items-center
                        gap-5
                        rounded-[14px]
                        border
                        border-[#DBE6FB]
                        bg-[#F4F7FD]
                        px-5
                        py-5
                        sm:px-7
                        lg:grid-cols-[minmax(0,1fr)_400px]
                        lg:px-8
                    "
                >
                    <div className="flex items-center gap-5">
                        <span
                            className="
                                flex
                                h-16.5
                                w-16.5
                                shrink-0
                                items-center
                                justify-center
                                rounded-[14px]
                                border
                                border-(--career-path-card-border)
                                bg-(--career-path-section-eyebrow-bg)
                                text-(--career-path-card-icon)
                            "
                        >
                            <Target
                                aria-hidden="true"
                                className="h-10 w-10"
                                strokeWidth={1.7}
                            />
                        </span>

                        <div>
                            <h3
                                className="
                                    text-[15px]
                                    font-bold
                                    leading-[1.80]
                                    tracking-[-3%]
                                    text-(--career-path-card-title)
                                    sm:text-[23px]
                                "
                            >
                                Not sure which track fits you?
                            </h3>

                            <p
                                className="
                                    mt-1
                                    text-[12px]
                                    font-medium
                                    leading-[1.67]
                                    tracking-[-2%]
                                    text-(--career-path-card-text)
                                    sm:text-[16px]
                                "
                            >
                                Take the AI-Proof Score assessment and get
                                your recommended learning track.
                            </p>
                        </div>
                    </div>

                    <div
                        className="
                            border-t
                            border-(--career-path-card-divider)
                            pt-5
                            lg:border-l
                            lg:border-t-0
                            lg:pl-10
                            lg:pt-0
                        "
                    >
                        <Link
                            href="#assessment"
                            className="
                                group
                                inline-flex
                                w-full
                                items-center
                                justify-between
                                gap-4
                                px-2
                                text-[16px]
                                font-semibold
                                text-black
                                sm:text-[18px]
                                lg:justify-center
                                lg:text-[20px]
                                leading-[1.67]
                                tracking-[3%]
                            "
                        >
                            <span>Check Your AI-Proof Score</span>

                            <ArrowRight
                                aria-hidden="true"
                                className="
                                    h-6
                                    w-6
                                    text-[#0545F9]
                                    shrink-0
                                    transition-transform
                                    group-hover:translate-x-1
                                "
                                strokeWidth={1.8}
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CareerPathSection;
