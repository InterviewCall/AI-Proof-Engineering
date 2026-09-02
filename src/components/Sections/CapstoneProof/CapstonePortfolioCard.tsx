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
<<<<<<< HEAD
                h-full
                min-h-0
                w-full
                overflow-hidden
=======
                
>>>>>>> ff7b351bedd2b94f3966d98a1fa592a427e5b4d5
            "
        >
            {/* Figma artwork — full 630 × 517 composition */}
            <Image
                src="/images/optimized-svg/capstone-proof-section-portfolio.svg"
                alt=""
                aria-hidden="true"
                fill
<<<<<<< HEAD
                priority
                sizes="630px"
                className="
                    pointer-events-none
                    select-none
                    object-fill
                "
=======
                sizes="(max-width: 1024px) 100vw, 700px"
                className="pointer-events-none -translate-x-10 -translate-y-2 scale-x-[0.94] scale-y-[1.05] object-fill"
>>>>>>> ff7b351bedd2b94f3966d98a1fa592a427e5b4d5
            />

            {/* Everything below sits ON TOP of the Figma artwork */}
            <div
                className="
                    relative
                    z-10
                    h-full
                    min-h-0
                    px-[68px]
                    pb-[24px]
                    pt-[30px]
                "
            >
                {/* Header */}
<<<<<<< HEAD
                <div
                    className="
                        flex
                        items-start
                        justify-between
                        gap-4
                    "
                >
                    <div className="flex min-w-0 items-center gap-3.5">
=======
                <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3 -translate-x-5 translate-y-4">
>>>>>>> ff7b351bedd2b94f3966d98a1fa592a427e5b4d5
                        <span
                            className="
                                flex
                                h-12
                                w-12
                                shrink-0
                                items-center
                                justify-center
                                rounded-[10px]
                                bg-(--button-primary-bg)
                                text-white
                            "
                        >
                            <FolderClosed
                                aria-hidden="true"
<<<<<<< HEAD
                                className="h-6 w-6"
=======
                                className="h-7 w-7"
>>>>>>> ff7b351bedd2b94f3966d98a1fa592a427e5b4d5
                                strokeWidth={1.8}
                            />
                        </span>

                        <div className="min-w-0">
                            <p
                                className="
                                    text-[10px]
                                    font-semibold
                                    uppercase
                                    leading-none
                                    tracking-[0.03em]
                                    text-(--proof-section-card-text)
                                "
                            >
                                Capstone Proof
                            </p>

                            <p
                                className="
                                    mt-1
                                    text-[24px]
                                    font-bold
<<<<<<< HEAD
                                    leading-none
                                    tracking-[-0.025em]
=======
                                    uppercase
                                    leading-tight
                                    tracking-[-1%]
>>>>>>> ff7b351bedd2b94f3966d98a1fa592a427e5b4d5
                                    text-(--proof-section-card-title)
                                "
                            >
                                Portfolio
                            </p>
                        </div>
                    </div>
                <div className="-translate-x-30 translate-y-7 scale-140">
                    <MentorReviewedBadge />
                    
                </div>
                </div>

                {/* Subtitle */}
                <p
                    className="
<<<<<<< HEAD
                        mt-[13px]
                        max-w-[470px]
                        text-[12px]
=======
                        mt-4
                        max-w-[250px]
                        translate-x-12
                        text-[14px]
                        font-semibold
>>>>>>> ff7b351bedd2b94f3966d98a1fa592a427e5b4d5
                        leading-[1.4]
                        text-(--proof-section-card-text)
                    "
                >
                    A complete portfolio-ready proof you can show, explain,
                    and defend.
                </p>

                {/* Source Code */}
                <div
                    className="
                        mt-[18px]
                        grid
<<<<<<< HEAD
                        grid-cols-[minmax(0,1fr)_300px]
=======
                        w-[93%]
                        grid-cols-[minmax(0,1fr)_110px]
>>>>>>> ff7b351bedd2b94f3966d98a1fa592a427e5b4d5
                        items-center
                        gap-4
                        rounded-[10px]
                        border
                        border-(--proof-section-card-border)
<<<<<<< HEAD
                        bg-white/90
                        px-[13px]
                        py-[11px]
=======
                        p-3.5
                        sm:p-4
                        origin-left
                        -translate-x-6
                        -translate-y-3
                        scale-[0.96]
>>>>>>> ff7b351bedd2b94f3966d98a1fa592a427e5b4d5
                    "
                >
                    <div className="flex min-w-0 items-center gap-3">
                        <span
                            className={`
                                flex
                                h-10
                                w-10
                                shrink-0
                                items-center
                                justify-center
                                rounded-[9px]
                                ${accentStyles[sourceCodeDeliverable.accent]}
                            `}
                        >
                            <SourceIcon
                                aria-hidden="true"
                                className="h-10 w-10"
                                strokeWidth={1.8}
                            />
                        </span>

                        <div className="min-w-0">
                            <h3
                                className="
                                    text-[13px]
                                    font-semibold
                                    leading-tight
                                    text-(--proof-section-card-title)
                                "
                            >
                                {sourceCodeDeliverable.title}
                            </h3>

                            <p
                                className="
<<<<<<< HEAD
                                    mt-1
                                    max-w-[190px]
                                    text-[10.5px]
                                    leading-[1.35]
=======
                                    mt-0.5
                                    max-w-[150px]
                                    text-[12px]
                                    leading-[1.4]
>>>>>>> ff7b351bedd2b94f3966d98a1fa592a427e5b4d5
                                    text-(--proof-section-card-text)
                                "
                            >
                                {sourceCodeDeliverable.description}
                            </p>
                        </div>
                    </div>

<<<<<<< HEAD
                    <div
                        className="
                            h-[92px]
                            w-full
                            overflow-hidden
                            rounded-[8px]
                        "
                    >
=======
                    <div className="h-20 w-[210px] -translate-x-30">
>>>>>>> ff7b351bedd2b94f3966d98a1fa592a427e5b4d5
                        <MiniCodePreview />
                    </div>
                </div>

<<<<<<< HEAD
                {/* Remaining deliverables */}
                <div
                    className="
                        mt-[13px]
                        grid
                        grid-cols-2
                        gap-[10px]
                    "
                >
=======
                {/* Remaining deliverables grid */}
                <div className="mt-3 grid w-[92%] grid-cols-1 gap-3 origin-left -translate-x-6 -translate-y-5 scale-[0.96] sm:grid-cols-2">
>>>>>>> ff7b351bedd2b94f3966d98a1fa592a427e5b4d5
                    {gridDeliverables.map((deliverable) => {
                        const Icon = deliverable.icon;

                        return (
                            <div
                                key={deliverable.title}
                                className="
                                    flex
                                    min-h-[126px]
                                    min-w-0
                                    items-start
                                    gap-2.5
                                    rounded-[10px]
                                    border
                                    border-(--proof-section-card-border)
<<<<<<< HEAD
                                    bg-white/90
                                    p-[11px]
=======
                                    p-3.5
                                    min-h-28
>>>>>>> ff7b351bedd2b94f3966d98a1fa592a427e5b4d5
                                "
                            >
                                <span
                                    className={`
                                        flex
<<<<<<< HEAD
                                        h-9
                                        w-9
=======
                                        h-20
                                        w-20
>>>>>>> ff7b351bedd2b94f3966d98a1fa592a427e5b4d5
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-[8px]
                                        ${accentStyles[deliverable.accent]}
                                    `}
                                >
                                    <Icon
                                        aria-hidden="true"
<<<<<<< HEAD
                                        className="h-[18px] w-[18px]"
=======
                                        className="h-10 w-10"
>>>>>>> ff7b351bedd2b94f3966d98a1fa592a427e5b4d5
                                        strokeWidth={1.8}
                                    />
                                </span>

                                <div className="min-w-0">
                                    <h3
                                        className="
                                            text-[12px]
                                            font-semibold
                                            leading-[1.2]
                                            text-(--proof-section-card-title)
                                        "
                                    >
                                        {deliverable.title}
                                    </h3>

                                    <p
                                        className="
                                            mt-1
                                            text-[10px]
                                            leading-[1.3]
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