import {
    CircleArrowRight,
    Download,
    FolderClosed,
    Trophy,
} from 'lucide-react';
import Link from 'next/link';
import { FC } from 'react';

import { type CapstoneAccent } from '@/types/capstoneProof';
import {
    exampleProjects,
    gridDeliverables,
    sourceCodeDeliverable,
} from '@/utils/capstoneProofItems';

import MentorReviewedBadge from './MentorReviewedBadge';

const accentStyles: Record<CapstoneAccent, string> = {
    blue: 'bg-(--proof-section-blue-bg) text-(--proof-section-blue-text)',
    green: 'bg-(--proof-section-green-bg) text-(--proof-section-green-text)',
    purple:
        'bg-(--proof-section-purple-bg) text-(--proof-section-purple-text)',
    orange:
        'bg-(--proof-section-orange-bg) text-(--proof-section-orange-text)',
};

const CapstoneMobileSection: FC = () => {
    return (
        <section
            id="capstone-proof-mobile"
            className="
                bg-(--proof-section-bg)
                px-1
                py-10
                lg:hidden
            "
        >
            <div className="mx-auto w-full max-w-[500px]">
                {/* Header */}
                <header className="text-center">
                    <div
                        className="
                            mx-auto
                            inline-flex
                            min-h-7
                            items-center
                            justify-center
                            gap-1.5
                            rounded-full
                            border
                            border-(--color-brand-200)
                            bg-(--proof-section-eyebrow-bg)
                            px-4
                            text-[11px]
                            font-semibold
                            uppercase
                            tracking-[0.02em]
                            text-(--proof-section-eyebrow-text)
                        "
                    >
                        <Trophy
                            aria-hidden="true"
                            className="h-3.5 w-3.5"
                            strokeWidth={1.8}
                        />
                        <span>Capstone Proof</span>
                    </div>

                    <h2
                        className="
                            mt-4
                            text-[36px]
                            font-bold
                            leading-[1.05]
                            tracking-[-1.5%]
                            text-(--proof-section-title-text)
                        "
                    >
                        What You Leave
                        <span className="block text-(--proof-section-title-highlight)">
                            With
                        </span>
                    </h2>

                    <p
                        className="
                            mx-auto
                            mt-3
                            max-w-[330px]
                            text-[14px]
                            font-medium
                            leading-[1.45]
                            text-(--proof-section-subtitle-text)
                        "
                    >
                        A capstone with a repository, an architecture write-up, a recorded walkthrough, and mentor comments on all of it.
                    </p>
                </header>

                {/* Portfolio */}
                <div
                    className="
                        mt-5
                        rounded-xl
                        border
                        border-(--proof-section-card-border)
                        bg-(--proof-section-card-bg)
                        p-3
                    "
                >
                    <div
                        className="
                            flex
                            items-start
                            justify-between
                            gap-3
                            px-1
                        "
                    >
                        <div className="flex min-w-0 items-center gap-3">
                            <span
                                className="
                                    flex
                                    h-10
                                    w-10
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-lg
                                    bg-(--button-primary-bg)
                                    text-white
                                "
                            >
                                <FolderClosed
                                    aria-hidden="true"
                                    className="h-6 w-6"
                                    strokeWidth={1.8}
                                />
                            </span>

                            <div className="min-w-0">
                                <h3
                                    className="
                                        text-[17px]
                                        font-bold
                                        leading-tight
                                        text-(--proof-section-card-title)
                                    "
                                >
                                    Capstone Proof Portfolio
                                </h3>

                                <p
                                    className="
                                        mt-1
                                        text-[12px]
                                        leading-[1.4]
                                        text-(--proof-section-card-text)
                                    "
                                >
                                    A complete Portfolio-ready proof you can show,
                                    explain, and defend
                                </p>
                            </div>
                        </div>

                        <div className="shrink-0">
                            <MentorReviewedBadge />
                        </div>
                    </div>

                    <div className="mt-3 space-y-1">
                        <div
                            className="
                                flex
                                items-center
                                gap-3
                                rounded-lg
                                border
                                border-(--proof-section-card-border)
                                p-2.5
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
                                    rounded-lg
                                    bg-(--proof-section-blue-bg)
                                    text-(--proof-section-blue-text)
                                "
                            >
                                <sourceCodeDeliverable.icon
                                    aria-hidden="true"
                                    className="h-6 w-6"
                                    strokeWidth={1.8}
                                />
                            </span>

                            <div className="min-w-0 flex-1">
                                <h4
                                    className="
                                        text-[14px]
                                        font-semibold
                                        text-(--proof-section-card-title)
                                    "
                                >
                                    {sourceCodeDeliverable.title}
                                </h4>

                                <p
                                    className="
                                        mt-0.5
                                        text-[12px]
                                        leading-[1.4]
                                        text-(--proof-section-card-text)
                                    "
                                >
                                    {sourceCodeDeliverable.description}
                                </p>
                            </div>

                            <span className="text-[24px] leading-none text-(--color-brand-700)">
                                ›
                            </span>
                        </div>

                        {gridDeliverables.map((deliverable) => {
                            const Icon = deliverable.icon;

                            return (
                                <div
                                    key={deliverable.title}
                                    className="
                                        flex
                                        items-center
                                        gap-3
                                        rounded-lg
                                        border
                                        border-(--proof-section-card-border)
                                        p-2.5
                                    "
                                >
                                    <span
                                        className={`
                                            flex
                                            h-11
                                            w-11
                                            shrink-0
                                            items-center
                                            justify-center
                                            rounded-lg
                                            ${accentStyles[deliverable.accent]}
                                        `}
                                    >
                                        <Icon
                                            aria-hidden="true"
                                            className="h-6 w-6"
                                            strokeWidth={1.8}
                                        />
                                    </span>

                                    <div className="min-w-0 flex-1">
                                        <h4
                                            className="
                                                text-[14px]
                                                font-semibold
                                                leading-tight
                                                text-(--proof-section-card-title)
                                            "
                                        >
                                            {deliverable.title}
                                        </h4>

                                        <p
                                            className="
                                                mt-0.5
                                                text-[12px]
                                                leading-[1.4]
                                                text-(--proof-section-card-text)
                                            "
                                        >
                                            {deliverable.description}
                                        </p>
                                    </div>

                                    <span className="text-[24px] leading-none text-(--color-brand-700)">
                                        ›
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Example projects */}
                <div
                    className="
                        mt-2
                        rounded-xl
                        border
                        border-(--proof-section-card-border)
                        bg-(--proof-section-card-bg)
                        p-3
                    "
                >
                    <h3
                        className="
                            text-[14px]
                            font-semibold
                            text-(--proof-section-card-title)
                        "
                    >
                        Example Capstones
                    </h3>

                    <div className="mt-2 space-y-1">
                        {exampleProjects.slice(0, 2).map((project) => {
                            const Icon = project.icon;

                            return (
                                <div
                                    key={project.title}
                                    className="
                                        flex
                                        items-center
                                        gap-3
                                        rounded-lg
                                        border
                                        border-(--proof-section-card-border)
                                        p-2.5
                                    "
                                >
                                    <span
                                        className={`
                                            flex
                                            h-10
                                            w-10
                                            shrink-0
                                            items-center
                                            justify-center
                                            rounded-lg
                                            ${accentStyles[project.accent]}
                                        `}
                                    >
                                        <Icon
                                            aria-hidden="true"
                                            className="h-5 w-5"
                                            strokeWidth={1.8}
                                        />
                                    </span>

                                    <div className="min-w-0 flex-1">
                                        <h4
                                            className="
                                                text-[13px]
                                                font-semibold
                                                leading-tight
                                                text-(--proof-section-card-title)
                                            "
                                        >
                                            {project.title}
                                        </h4>

                                        <p
                                            className="
                                                mt-0.5
                                                text-[11px]
                                                leading-[1.35]
                                                text-(--proof-section-card-text)
                                            "
                                        >
                                            {project.description}
                                        </p>
                                    </div>

                                    <span className="text-[24px] leading-none text-(--color-brand-700)">
                                        ›
                                    </span>
                                </div>
                            );
                        })}
                    </div>

                    <Link
                        href="#capstone-proof"
                        className="
                            mt-2
                            flex
                            items-center
                            justify-center
                            gap-2
                            text-[12px]
                            font-semibold
                            text-(--color-brand-700)
                        "
                    >
                        <span>View more capstone examples</span>
                        <CircleArrowRight
                            aria-hidden="true"
                            className="h-4 w-4"
                            strokeWidth={1.9}
                        />
                    </Link>
                </div>

                {/* CTA */}
                <div className="mt-2 space-y-2">
                    <Link
                        href="#capstone-proof"
                        className="
                            flex
                            min-h-10
                            items-center
                            justify-center
                            gap-2
                            rounded-lg
                            bg-(--button-primary-bg)
                            px-4
                            text-[12px]
                            font-semibold
                            text-(--button-primary-text)
                        "
                    >
                        <CircleArrowRight
                            aria-hidden="true"
                            className="h-4 w-4"
                            strokeWidth={1.9}
                        />
                        <span>Explore Capstone Projects</span>
                    </Link>

                    <a
                        href="/documents/ai-engineering-curriculum.pdf"
                        download
                        className="
                            flex
                            min-h-10
                            items-center
                            justify-center
                            gap-2
                            rounded-lg
                            border
                            border-(--color-brand-300)
                            bg-white
                            px-4
                            text-[12px]
                            font-semibold
                            text-(--color-brand-700)
                        "
                    >
                        <Download
                            aria-hidden="true"
                            className="h-4 w-4"
                            strokeWidth={1.9}
                        />
                        <span>Download Curriculum</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CapstoneMobileSection;