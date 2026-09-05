'use client';

import {
    ArrowRight,
    BookOpen,
    ChevronDown,
    ChevronRight,
    Download,
    CalendarDays,
    List,
    Target,
} from 'lucide-react';
import Link from 'next/link';
import { FC, useState } from 'react';

import { type PhaseId } from '@/types/structuredJourney';
import { journeyStats, phases } from '@/utils/structuredJourneyItems';

import { PhaseDetails } from './PhaseDetails';

const StructuredJourneySection: FC = () => {
    const [activePhaseId, setActivePhaseId] =
        useState<PhaseId>('03');

    const [showAllMobilePhases, setShowAllMobilePhases] =
        useState<boolean>(false);

    const activePhase =
        phases.find((phase) => phase.id === activePhaseId) ?? phases[2];

    const mobileVisiblePhases = showAllMobilePhases
        ? phases
        : phases.slice(0, 4);

    return (
        <section
            id="curriculum"
            className="
                scroll-mt-25
                px-4
                py-8
                sm:px-6
                sm:py-10
                lg:px-8
                lg:py-8
                xl:px-12
            "
        >
            <div className="mx-auto w-full max-w-370">

                {/* Header */}
                <header className="mx-auto max-w-[1100px] text-center">
                    <div
                        className="
                            mx-auto
                            flex
                            w-fit
                            min-h-10
                            items-center
                            justify-center
                            gap-2
                            rounded-full
                            border
                            border-(--hero-section-badge-border)
                            bg-(--hero-section-badge-bg)
                            px-6
                            text-[clamp(0.875rem,1.1vw,1.0625rem)]
                            font-semibold
                            uppercase
                            tracking-[0.015em]
                            text-(--color-brand-700)
                            shadow-[0_7px_14px_rgba(1,17,57,0.18)]
                            ring-1
                            ring-[#a9c3fc]
                        "
                    >
                        <BookOpen
                            aria-hidden="true"
                            className="h-5 w-5"
                            strokeWidth={1.8}
                        />
                        <span>10-Phase Curriculum</span>
                    </div>

                    <h2
                        className="
                            mt-3
                            hidden
                            text-[clamp(1.75rem,5vw,3.125rem)]
                            font-bold
                            leading-[1.05]
                            tracking-[-2%]
                            text-(--journey-section-title-text)
                            lg:block
                        "
                    >
                        The{' '}
                        <span className="text-(--journey-section-title-highlight)">
                            Curriculum
                        </span>
                        , Phase by Phase
                    </h2>

                    <h2
                        className="
                            mx-auto
                            mt-4
                            max-w-82
                            text-[42px]
                            font-bold
                            leading-[1.02]
                            tracking-[-2%]
                            text-(--journey-section-title-text)
                            lg:hidden
                        "
                    >
                        <span className="block">
                            <span className="text-(--journey-section-title-highlight)">
                                The Curriculum,
                            </span>
                        </span>

                        <span className="block">Phase by Phase</span>
                    </h2>

                    <p
                        className="
                            mx-auto
                            mt-3
                            max-w-[850px]
                            text-[16px]
                            font-medium
                            leading-[1.35]
                            tracking-[-2%]
                            text-(--journey-section-subtitle-text)
                            sm:text-[18px]
                            lg:text-[19px]
                        "
                    >
                        <span className="hidden lg:inline">
                            Ten phases, each ending in something you build
                            and someone reviews.
                        </span>

                        <span className="lg:hidden">
                            Ten phases, each ending in something you build
                            and someone reviews.
                        </span>
                    </p>
                </header>

                {/* Stat cards */}
                <div
                    className="
                        mt-6
                        grid
                        grid-cols-2
                        gap-2.5
                        sm:gap-3
                        lg:grid-cols-4
                        lg:gap-4
                    "
                >
                    {journeyStats.map((stat, index) => {
                        const Icon = stat.icon;
                        const hideOnMobile = index > 1;

                        return (
                            <article
                                key={stat.title}
                                className={`
                                    rounded-[10px]
                                    border
                                    border-(--journey-section-card-border)
                                    bg-(--journey-section-card-bg)
                                    px-3
                                    py-3.5
                                    sm:px-4
                                    sm:py-4
                                    ${
                                        hideOnMobile
                                            ? 'hidden lg:flex'
                                            : 'flex'
                                    }
                                    items-center
                                    gap-2.5
                                    sm:gap-4
                                    lg:min-h-[70px]
                                `}
                            >
                                <span
                                    className={`
                                        flex
                                        h-10
                                        w-10
                                        sm:h-12
                                        sm:w-12
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-[10px]
                                        sm:rounded-[11px]
                                        ${
                                            stat.colorClass === 'blue'
                                                ? 'bg-(--button-primary-bg) text-white'
                                                : ''
                                        }
                                        ${
                                            stat.colorClass === 'purple'
                                                ? 'bg-(--journey-section-phase-two-bg) text-(--journey-section-phase-two-color)'
                                                : ''
                                        }
                                        ${
                                            stat.colorClass === 'green'
                                                ? 'bg-(--journey-section-phase-three-bg) text-(--journey-section-phase-three-color)'
                                                : ''
                                        }
                                        ${
                                            stat.colorClass === 'orange'
                                                ? 'bg-(--journey-section-phase-four-bg) text-(--journey-section-phase-four-color)'
                                                : ''
                                        }
                                    `}
                                >
                                    {stat.value ? (
                                        <span className="text-[27px] font-medium sm:text-[32px]">
                                            {stat.value}
                                        </span>
                                    ) : Icon ? (
                                        <Icon
                                            aria-hidden="true"
                                            className="h-7 w-7 sm:h-9 sm:w-9"
                                            strokeWidth={1.8}
                                        />
                                    ) : null}
                                </span>

                                <div className="min-w-0">
                                    <h3
                                        className="
                                            text-[14px]
                                            font-semibold
                                            leading-[1.2]
                                            text-(--journey-section-card-title)
                                            sm:text-[17px]
                                        "
                                    >
                                        {stat.title}
                                    </h3>

                                    <p
                                        className="
                                            mt-1
                                            text-[12px]
                                            font-medium
                                            leading-[1.35]
                                            text-(--journey-section-card-text)
                                            sm:text-[13px]
                                        "
                                    >
                                        {stat.subtitle}
                                    </p>
                                </div>
                            </article>
                        );
                    })}
                </div>

                {/* Desktop layout */}
                <div
                    className="
                        mt-4
                        hidden
                        gap-4
                        lg:grid
                        lg:grid-cols-[380px_minmax(0,1fr)]
                    "
                >
                    {/* Sidebar */}
                    <aside
                        className="
                            rounded-[10px]
                            border
                            border-(--journey-section-card-border)
                            bg-(--journey-section-card-bg)
                            px-1.5
                            py-3
                        "
                    >
                        <div className="relative">
                            <span
                                aria-hidden="true"
                                className="
                                    absolute
                                    left-8
                                    top-8
                                    bottom-8
                                    w-0.5
                                    bg-(--journey-section-timeline-active-line)
                                "
                            />

                            {phases.map((phase) => {
                                const isActive =
                                    phase.id === activePhaseId;

                                return (
                                    <button
                                        key={phase.id}
                                        type="button"
                                        onClick={() =>
                                            setActivePhaseId(phase.id)
                                        }
                                        className={`
                                            relative
                                            z-10
                                            grid
                                            cursor-pointer
                                            min-h-[58px]
                                            w-full
                                            grid-cols-[64px_minmax(0,1fr)]
                                            items-center
                                            rounded-[10px]
                                            text-left
                                            transition-colors
                                            ${
                                                isActive
                                                    ? 'border border-(--journey-section-card-border) bg-(--journey-section-phase-one-bg)'
                                                    : 'hover:bg-(--journey-section-phase-one-bg)'
                                            }
                                        `}
                                    >
                                        <span
                                            className={`
                                                mx-auto
                                                flex
                                                h-9
                                                w-9
                                                items-center
                                                justify-center
                                                rounded-full
                                                border
                                                text-[13px]
                                                font-semibold
                                                ${
                                                    isActive
                                                        ? 'border-(--button-primary-bg) bg-(--button-primary-bg) text-white'
                                                        : 'border-(--journey-section-card-border) bg-white text-(--journey-section-card-title)'
                                                }
                                            `}
                                        >
                                            {phase.id}
                                        </span>

                                        <span
                                            className={`
                                                flex
                                                min-w-0
                                                items-center
                                                gap-2
                                                pr-4
                                                text-[15px]
                                                font-semibold
                                                leading-[1.25]
                                                ${
                                                    isActive
                                                        ? 'text-(--color-brand-700)'
                                                        : 'text-(--journey-section-card-title)'
                                                }
                                            `}
                                        >
                                            <span
                                                className={`
                                                    min-w-0
                                                    ${
                                                        phase.id === '09'
                                                            ? ''
                                                            : 'whitespace-nowrap'
                                                    }
                                                `}
                                            >
                                                {phase.title}
                                            </span>

                                            {isActive && (
                                                <ChevronRight
                                                    aria-hidden="true"
                                                    className="h-5 w-5 shrink-0"
                                                    strokeWidth={2}
                                                />
                                            )}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </aside>

                    <PhaseDetails phase={activePhase} />
                </div>

                {/* Mobile layout */}
                <div
                    className="
                        mt-3
                        rounded-[10px]
                        border
                        border-(--journey-section-card-border)
                        bg-(--journey-section-card-bg)
                        px-1.5
                        py-2
                        lg:hidden
                    "
                >
                    <div className="relative">
                        <span
                            aria-hidden="true"
                            className="
                                absolute
                                left-7.5
                                top-7
                                bottom-8
                                w-px
                                border-l
                                border-dotted
                                border-(--journey-section-timeline-active-line)
                            "
                        />

                        {mobileVisiblePhases.map((phase) => {
                            const isActive =
                                phase.id === activePhaseId;

                            return (
                                <div
                                    key={phase.id}
                                    className={`
                                        relative
                                        z-10
                                        ${
                                            isActive
                                                ? 'rounded-[10px] bg-(--journey-section-phase-one-bg) px-1.5 py-1'
                                                : ''
                                        }
                                    `}
                                >
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setActivePhaseId(phase.id)
                                        }
                                        aria-expanded={isActive}
                                        className="
                                            grid
                                            min-h-11
                                            w-full
                                            cursor-pointer
                                            grid-cols-[50px_minmax(0,1fr)_20px]
                                            items-center
                                            text-left
                                        "
                                    >
                                        <span
                                            className={`
                                                mx-auto
                                                flex
                                                h-8
                                                w-8
                                                items-center
                                                justify-center
                                                rounded-full
                                                border
                                                text-[11px]
                                                font-semibold
                                                ${
                                                    isActive
                                                        ? 'border-(--button-primary-bg) bg-(--button-primary-bg) text-white'
                                                        : 'border-(--journey-section-card-border) bg-white text-(--journey-section-card-title)'
                                                }
                                            `}
                                        >
                                            {phase.id}
                                        </span>

                                        <span
                                            className="
                                                min-w-0
                                                pr-1
                                                text-[15px]
                                                font-semibold
                                                leading-[1.25]
                                                text-(--journey-section-card-title)
                                            "
                                        >
                                            {phase.title}
                                        </span>

                                        <ChevronDown
                                            aria-hidden="true"
                                            className={`
                                                h-4
                                                w-4
                                                text-(--color-brand-700)
                                                transition-transform
                                                ${
                                                    isActive
                                                        ? 'rotate-180'
                                                        : ''
                                                }
                                            `}
                                            strokeWidth={1.8}
                                        />
                                    </button>

                                    <div
                                        className={`
                                            overflow-hidden
                                            transition-[max-height,opacity]
                                            duration-300
                                            ease-out
                                            ${
                                                isActive
                                                    ? 'max-h-300 opacity-100'
                                                    : 'max-h-0 opacity-0'
                                            }
                                        `}
                                    >
                                        <div
                                            className={`
                                                pl-0.5
                                                pr-0.5
                                                pb-1
                                                transition-transform
                                                duration-300
                                                ease-out
                                                ${
                                                    isActive
                                                        ? 'translate-y-0'
                                                        : '-translate-y-2'
                                                }
                                            `}
                                        >
                                            <PhaseDetails
                                                phase={phase}
                                                mobile
                                            />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}

                        {!showAllMobilePhases && (
                            <button
                                type="button"
                                onClick={() =>
                                    setShowAllMobilePhases(true)
                                }
                                className="
                                    relative
                                    z-10
                                    mt-1
                                    grid
                                    min-h-10.5
                                    w-full
                                    grid-cols-[60px_minmax(0,1fr)_20px]
                                    items-center
                                    text-left
                                    text-(--color-brand-700)
                                "
                            >
                                <span className="mx-auto flex h-8 w-8 items-center justify-center">
                                    <List
                                        aria-hidden="true"
                                        className="h-5 w-5"
                                        strokeWidth={2}
                                    />
                                </span>

                                <span className="text-[14px] font-semibold">
                                    View remaining phases (05–10)
                                </span>

                                <ArrowRight
                                    aria-hidden="true"
                                    className="h-4 w-4"
                                    strokeWidth={1.8}
                                />
                            </button>
                        )}
                    </div>
                </div>

                {/* Outcome strip */}
                <div
                    className="
                        mt-3
                        flex
                        items-center
                        gap-3
                        rounded-[10px]
                        border
                        border-(--journey-section-card-border)
                        bg-(--career-path-section-eyebrow-bg)
                        px-3
                        py-2.5
                        lg:hidden
                    "
                >
                    <span
                        className="
                            flex
                            h-11
                            w-11
                            shrink-0
                            items-center
                            justify-center
                            rounded-[9px]
                            bg-(--journey-section-phase-one-bg)
                            text-(--color-brand-700)
                        "
                    >
                        <Target
                            aria-hidden="true"
                            className="h-6 w-6"
                            strokeWidth={1.8}
                        />
                    </span>

                    <p
                        className="
                            text-[10px]
                            font-medium
                            leading-[1.4]
                            text-(--journey-section-card-text)
                        "
                    >
                        Build stronger habits across{' '}
                        <span className="font-semibold text-(--color-brand-700)">
                            DSA, backend, system design, AI workflows, mocks,
                            reviews, and capstone proof.
                        </span>
                    </p>
                </div>

                {/* CTA bar */}
                <div
                    className="
                        mx-auto
                        mt-5
                        grid
                        max-w-[735px]
                        gap-2.5
                        lg:mt-6
                        lg:grid-cols-[1.2fr_1fr]
                        lg:gap-6
                        rounded-xl
                        border
                        border-blue-100
                        p-3
                    "
                >
                    <a
                        href="/documents/ai-engineering-curriculum.pdf"
                        download
                        className="
                            group
                            inline-flex
                            min-h-11
                            w-full
                            items-center
                            justify-center
                            gap-2.5
                            rounded-lg
                            bg-(--button-primary-bg)
                            px-4
                            text-center
                            text-[14px]
                            font-medium
                            text-white
                            transition-all
                            duration-200
                            hover:-translate-y-0.5
                            hover:bg-(--button-primary-bg-hover)
                            focus-visible:outline-none
                            focus-visible:ring-4
                            focus-visible:ring-(--focus-ring-color)
                            lg:min-h-14
                            lg:gap-4
                            lg:px-6
                            lg:text-[15px]
                        "
                    >
                        <Download
                            aria-hidden="true"
                            className="h-5 w-5 lg:h-7 lg:w-7"
                            strokeWidth={1.9}
                        />

                        <span>Download Curriculum</span>
                    </a>

                    <Link
                        href="#all-phases"
                        className="
                            group
                            inline-flex
                            min-h-11
                            w-full
                            items-center
                            justify-center
                            gap-2.5
                            rounded-lg
                            border
                            border-(--color-brand-600)
                            bg-white
                            px-4
                            text-center
                            text-[14px]
                            font-semibold
                            text-(--color-brand-700)
                            transition-all
                            duration-200
                            hover:-translate-y-0.5
                            hover:bg-(--color-brand-50)
                            focus-visible:outline-none
                            focus-visible:ring-4
                            focus-visible:ring-(--focus-ring-color)
                            lg:min-h-14
                            lg:gap-4
                            lg:px-6
                            lg:text-[15px]
                        "
                    >
                        <CalendarDays
                            aria-hidden="true"
                            className="h-5 w-5"
                            strokeWidth={1.8}
                    />

                        <span>Book a Track Counselling Call</span>

                        <ArrowRight
                            aria-hidden="true"
                            className="h-4 w-4 lg:hidden"
                            strokeWidth={1.8}
                        />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default StructuredJourneySection;