import { FolderClosed } from 'lucide-react';
import Image from 'next/image';
import { FC } from 'react';

import { type CapstoneAccent } from '@/types/capstoneProof';
import {
    gridDeliverables,
    sourceCodeDeliverable,
} from '@/utils/capstoneProofItems';

import MentorReviewedBadge from './MentorReviewedBadge';
import MiniCodePreview from './MiniCodePreview';

const accentStyles: Record<CapstoneAccent, string> = {
    blue: 'bg-(--proof-section-blue-bg) text-(--proof-section-blue-text)',
    green: 'bg-(--proof-section-green-bg) text-(--proof-section-green-text)',
    purple:
        'bg-(--proof-section-purple-bg) text-(--proof-section-purple-text)',
    orange:
        'bg-(--proof-section-orange-bg) text-(--proof-section-orange-text)',
};

const SourceIcon = sourceCodeDeliverable.icon;

const CapstonePortfolioCard: FC = () => {
    return (
        <div
            className="
                relative
            "
        >
            {/* Folder-stack background artwork */}
            <Image
                src="/images/optimized-svg/capstone-proof-section-portfolio.svg"
                alt=""
                aria-hidden="true"
                fill
                sizes="(max-width: 1024px) 100vw, 700px"
                className="pointer-events-none object-fill"
            />

            <div
                className="
                    relative
                    p-5
                    pl-12
                    sm:p-7
                    sm:pl-16
                "
            >
                {/* Header */}
                <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-4">
                        <span
                            className="
                                flex
                                h-13
                                w-13
                                shrink-0
                                items-center
                                justify-center
                                rounded-xl
                                bg-(--button-primary-bg)
                                text-white
                            "
                        >
                            <FolderClosed
                                aria-hidden="true"
                                className="h-6.5 w-6.5"
                                strokeWidth={1.8}
                            />
                        </span>

                        <div>
                            <p
                                className="
                                    text-[13px]
                                    font-semibold
                                    uppercase
                                    tracking-[0.03em]
                                    text-(--proof-section-card-text)
                                "
                            >
                                Capstone Proof
                            </p>

                            <p
                                className="
                                    text-[22px]
                                    font-bold
                                    leading-tight
                                    tracking-[-1%]
                                    text-(--proof-section-card-title)
                                    sm:text-[26px]
                                "
                            >
                                Portfolio
                            </p>
                        </div>
                    </div>

                    <MentorReviewedBadge />
                </div>

                <p
                    className="
                        mt-4
                        text-[14px]
                        leading-[1.5]
                        text-(--proof-section-card-text)
                    "
                >
                    A complete portfolio-ready proof you can show, explain,
                    and defend.
                </p>

                {/* Source code row */}
                <div
                    className="
                        mt-5
                        grid
                        grid-cols-[minmax(0,1fr)_110px]
                        items-center
                        gap-4
                        rounded-xl
                        border
                        border-(--proof-section-card-border)
                        p-3.5
                        sm:p-4
                    "
                >
                    <div className="flex items-start gap-3">
                        <span
                            className={`
                                flex
                                h-9.5
                                w-9.5
                                shrink-0
                                items-center
                                justify-center
                                rounded-[9px]
                                ${accentStyles[sourceCodeDeliverable.accent]}
                            `}
                        >
                            <SourceIcon
                                aria-hidden="true"
                                className="h-5 w-5"
                                strokeWidth={1.8}
                            />
                        </span>

                        <div className="min-w-0">
                            <h3
                                className="
                                    text-[14px]
                                    font-semibold
                                    text-(--proof-section-card-title)
                                "
                            >
                                {sourceCodeDeliverable.title}
                            </h3>

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
                    </div>

                    <div className="h-16.5">
                        <MiniCodePreview />
                    </div>
                </div>

                {/* Remaining deliverables grid */}
                <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {gridDeliverables.map((deliverable) => {
                        const Icon = deliverable.icon;

                        return (
                            <div
                                key={deliverable.title}
                                className="
                                    flex
                                    items-start
                                    gap-3
                                    rounded-xl
                                    border
                                    border-(--proof-section-card-border)
                                    p-3.5
                                "
                            >
                                <span
                                    className={`
                                        flex
                                        h-9.5
                                        w-9.5
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-[9px]
                                        ${accentStyles[deliverable.accent]}
                                    `}
                                >
                                    <Icon
                                        aria-hidden="true"
                                        className="h-5 w-5"
                                        strokeWidth={1.8}
                                    />
                                </span>

                                <div className="min-w-0">
                                    <h3
                                        className="
                                            text-[14px]
                                            font-semibold
                                            text-(--proof-section-card-title)
                                        "
                                    >
                                        {deliverable.title}
                                    </h3>

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
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default CapstonePortfolioCard;
