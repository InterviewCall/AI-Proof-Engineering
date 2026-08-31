'use client';

import {
    ArrowRight,
    BookOpen,
    ChevronDown,
    ChevronRight,
    Download,
    FileText,
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
                py-2
                sm:px-6
                sm:py-16
                lg:px-8
                lg:py-6
                xl:px-12
            "
        >
            <div className="mx-auto w-full max-w-345">
                {/* Header */}
                <header className="mx-auto max-w-290 text-center">
                    <div
                        className="
                            mx-auto
                            inline-flex
                            min-h-9.5
                            items-center
                            justify-center
                            gap-2
                            rounded-full
                            border
                            border-(--hero-section-badge-border)
                            bg-(--hero-section-badge-bg)
                            px-5
                            text-[16px]
                            font-semibold
                            uppercase
                            text-(--color-brand-700)
                            leading-[1.58]
                            tracking-[-2%]
                            sm:text-[18px]
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
                            mt-4
                            hidden
                            text-[clamp(3.4rem,5vw,3.625rem)]
                            font-bold
                            leading-[1.03]
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
                            mt-4
                            text-[42px]
                            font-bold
                            leading-[1.02]
                            tracking-[-2%]
                            text-(--journey-section-title-text)
                            mx-auto
                            max-w-82
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
                            mt-4
                            max-w-82
                            text-[18px]
                            font-medium
                            leading-[1.32]
                            tracking-[-5%]
                            text-(--journey-section-subtitle-text)
                            sm:text-[22px]
                            sm:max-w-190
                            lg:max-w-200
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
                        mt-7
                        grid
                        grid-cols-2
                        gap-2.5
                        sm:gap-3
                        lg:grid-cols-4
                        lg:gap-5
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
                                    px-2.5
                                    py-4
                                    sm:px-5
                                    sm:py-5
                                    ${
                                        hideOnMobile
                                            ? 'hidden lg:flex'
                                            : 'flex'
                                    }
                                    items-center
                                    gap-2.5
                                    sm:gap-4
                                    lg:min-h-22
                                `}
                            >
                                <span
                                    className={`
                                        flex
                                        h-11.5
                                        w-11.5
                                        sm:h-15.5
                                        sm:w-15.5
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
                                            text-[16px]
                                            font-semibold
                                            leading-[1.2]
                                            text-(--journey-section-card-title)
                                            sm:text-[19px]
                                        "
                                    >
                                        {stat.title}
                                    </h3>

                                    <p
                                        className="
                                            mt-1
                                            text-[13px]
                                            font-medium
                                            leading-[1.35]
                                            text-(--journey-section-card-text)
                                            sm:text-[14px]
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
                        mt-5
                        hidden
                        gap-5
                        lg:grid
                        lg:grid-cols-[400px_minmax(0,1fr)]
                    "
                >
                    {/* Sidebar */}
                    <aside
                        className="
                            rounded-[14px]
                            border
                            border-(--journey-section-card-border)
                            bg-(--journey-section-card-bg)
                            px-2
                            py-4
                        "
                    >
                        <div className="relative">
                            <span
                                aria-hidden="true"
                                className="
                                    absolute
                                    left-9.25
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
                                            min-h-16
                                            w-full
                                            grid-cols-[76px_minmax(0,1fr)]
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
                                                h-10
                                                w-10
                                                items-center
                                                justify-center
                                                rounded-full
                                                border
                                                text-[15px]
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
                                                leading-[1.3]
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
                                                    className="
                                                        h-5
                                                        w-5
                                                        shrink-0
                                                    "
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
                        mt-4
                        rounded-[14px]
                        border
                        border-(--journey-section-card-border)
                        bg-(--journey-section-card-bg)
                        px-3
                        py-4
                        lg:hidden
                    "
                >
                    <div className="relative">
                        <span
                            aria-hidden="true"
                            className="
                                absolute
                                left-9
                                top-8
                                bottom-10
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
                                                ? 'rounded-[14px] bg-(--journey-section-phase-one-bg) px-2 py-2'
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
                                            cursor-pointer
                                            min-h-14.5
                                            w-full
                                            grid-cols-[76px_minmax(0,1fr)_24px]
                                            items-center
                                            text-left
                                        "
                                    >
                                        <span
                                            className={`
                                                mx-auto
                                                flex
                                                h-11
                                                w-11
                                                items-center
                                                justify-center
                                                rounded-full
                                                border
                                                text-[16px]
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
                                                text-[17px]
                                                font-semibold
                                                leading-tight
                                                text-(--journey-section-card-title)
                                            "
                                        >
                                            {phase.title}
                                        </span>

                                        <ChevronDown
                                            aria-hidden="true"
                                            className={`
                                                h-5
                                                w-5
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
                                                pl-1.25
                                                pr-1
                                                pb-2
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
                                    mt-2
                                    grid
                                    min-h-13.5
                                    w-full
                                    grid-cols-[76px_minmax(0,1fr)_24px]
                                    items-center
                                    text-left
                                    text-(--color-brand-700)
                                "
                            >
                                <span className="mx-auto flex h-10 w-10 items-center justify-center">
                                    <List
                                        aria-hidden="true"
                                        className="h-7 w-7"
                                        strokeWidth={2}
                                    />
                                </span>

                                <span className="text-[17px] font-semibold">
                                    View remaining phases (05–10)
                                </span>

                                <ArrowRight
                                    aria-hidden="true"
                                    className="h-5 w-5"
                                    strokeWidth={1.8}
                                />
                            </button>
                        )}
                    </div>
                </div>

                {/* Outcome strip */}
                <div
                    className="
                        mt-4
                        flex
                        items-center
                        gap-5
                        rounded-[14px]
                        border
                        border-(--journey-section-card-border)
                        bg-(--career-path-section-eyebrow-bg)
                        px-5
                        py-4
                        lg:hidden
                    "
                >
                    <span
                        className="
                            flex
                            h-16.5
                            w-16.5
                            shrink-0
                            items-center
                            justify-center
                            rounded-[14px]
                            bg-(--journey-section-phase-one-bg)
                            text-(--color-brand-700)
                        "
                    >
                        <Target
                            aria-hidden="true"
                            className="h-10 w-10"
                            strokeWidth={1.8}
                        />
                    </span>

                    <p
                        className="
                            text-[15px]
                            font-medium
                            leading-normal
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
                        mt-5
                        grid
                        gap-3
                        rounded-xl
                        border
                        border-(--journey-section-card-border)
                        bg-(--journey-section-card-bg)
                        px-4
                        py-4
                        lg:grid-cols-2
                        lg:gap-4
                        lg:px-36
                    "
                >
                    <a
                        href="/documents/ai-engineering-curriculum.pdf"
                        download
                        className="
                            group
                            inline-flex
                            min-h-14.5
                            w-full
                            items-center
                            justify-center
                            gap-4
                            rounded-[7px]
                            bg-(--button-primary-bg)
                            px-6
                            text-[17px]
                            font-medium
                            text-white
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

                        <span>Download Curriculum</span>
                    </a>

                    <Link
                        href="#all-phases"
                        className="
                            group
                            inline-flex
                            min-h-14.5
                            w-full
                            items-center
                            justify-center
                            gap-4
                            rounded-[7px]
                            border
                            border-(--color-brand-600)
                            bg-white
                            px-6
                            text-[17px]
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
                        <FileText
                            aria-hidden="true"
                            className="hidden h-5 w-5 lg:block"
                            strokeWidth={1.8}
                        />

                        <span>View Full Curriculum</span>

                        <ArrowRight
                            aria-hidden="true"
                            className="h-5 w-5 lg:hidden"
                            strokeWidth={1.8}
                        />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default StructuredJourneySection;
