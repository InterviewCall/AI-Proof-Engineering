import { Clock3 } from 'lucide-react';
import Image from 'next/image';
import { FC } from 'react';

import { type PhaseDetailProps } from '@/types/structuredJourney';

export const PhaseDetails: FC<PhaseDetailProps> = ({
    phase,
    mobile = false,
}) => {
    if (mobile) {
        return (
            <div
                className="
                    rounded-[14px]
                    border
                    border-(--journey-section-card-border)
                    bg-(--journey-section-card-bg)
                    px-5
                    py-5
                    shadow-[0_10px_30px_rgba(9,77,231,0.04)]
                "
            >
                <span
                    className="
                        inline-flex
                        min-h-7
                        items-center
                        rounded-lg
                        bg-(--button-primary-bg)
                        px-4
                        text-[12px]
                        font-semibold
                        uppercase
                        text-white
                    "
                >
                    Phase {phase.id}
                </span>

                <h3
                    className="
                        mt-3
                        text-[25px]
                        font-bold
                        leading-[1.15]
                        tracking-[-0.035em]
                        text-(--journey-section-card-title)
                    "
                >
                    {phase.title}
                </h3>

                <div
                    className="
                        mt-3
                        flex
                        items-center
                        gap-2
                        text-[15px]
                        font-semibold
                        text-(--color-brand-700)
                    "
                >
                    <Clock3
                        aria-hidden="true"
                        className="h-5 w-5"
                        strokeWidth={1.8}
                    />
                    <span>{phase.duration}</span>
                </div>

                <p
                    className="
                        mt-4
                        text-[15px]
                        font-medium
                        leading-normal
                        text-(--journey-section-card-text)
                    "
                >
                    Learn to use AI as an engineering accelerator without
                    losing technical judgment or code quality.
                </p>

                <div
                    className="
                        mt-5
                        border-t
                        border-(--journey-section-card-border)
                        pt-1
                    "
                >
                    {phase.mobileCards.map((card, index) => {
                        const Icon = card.icon;

                        return (
                            <div
                                key={card.title}
                                className={`
                                    grid
                                    grid-cols-[58px_minmax(0,1fr)]
                                    gap-4
                                    py-4
                                    ${
                                        index < phase.mobileCards.length - 1
                                            ? 'border-b border-(--journey-section-card-border)'
                                            : ''
                                    }
                                `}
                            >
                                <span
                                    className={`
                                        flex
                                        h-13.5
                                        w-13.5
                                        items-center
                                        justify-center
                                        rounded-[11px]
                                        ${
                                            card.iconBoxClass ??
                                            'bg-(--journey-section-phase-one-bg)'
                                        }
                                        ${
                                            card.iconClass ??
                                            'text-(--color-brand-700)'
                                        }
                                    `}
                                >
                                    <Icon
                                        aria-hidden="true"
                                        className="h-8 w-8"
                                        strokeWidth={1.8}
                                    />
                                </span>

                                <div>
                                    <h4
                                        className="
                                            text-[17px]
                                            font-semibold
                                            text-(--journey-section-card-title)
                                        "
                                    >
                                        {card.title}
                                    </h4>

                                    <ul className="mt-2 space-y-1.5">
                                        {card.points.map((point) => (
                                            <li
                                                key={point}
                                                className="
                                                    flex
                                                    gap-2
                                                    text-[14px]
                                                    font-medium
                                                    leading-[1.35]
                                                    text-(--journey-section-card-text)
                                                "
                                            >
                                                <span className="mt-1.75 h-1.5 w-1.5 shrink-0 rounded-full bg-(--color-brand-700)" />
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }

    return (
        <article
            className="
                rounded-[14px]
                border
                border-(--journey-section-card-border)
                bg-(--journey-section-card-bg)
                px-6
                pt-8
                pb-1
            "
        >
            <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_320px] xl:grid-cols-[minmax(0,1fr)_340px]">
                <div>
                    <span
                        className="
                            inline-flex
                            min-h-7
                            items-center
                            rounded-lg
                            bg-(--button-primary-bg)
                            px-4
                            text-[12px]
                            font-semibold
                            uppercase
                            text-white
                        "
                    >
                        Phase {phase.id}
                    </span>

                    <h3
                        className="
                            mt-3
                            text-[32px]
                            font-semibold
                            leading-[1.08]
                            tracking-[-1%]
                            text-(--journey-section-card-title)
                            xl:text-[32px]
                        "
                    >
                        {phase.title}
                    </h3>

                    <div
                        className="
                            mt-4
                            flex
                            items-center
                            gap-2
                            text-[18px]
                            font-semibold
                            text-(--color-brand-700)
                            leading-[1.2]
                            tracking-[-1%]
                        "
                    >
                        <Clock3
                            aria-hidden="true"
                            className="h-5 w-5"
                            strokeWidth={1.8}
                        />
                        <span>{phase.duration}</span>
                    </div>

                    <p
                        className="
                            mt-4
                            max-w-170
                            text-[18px]
                            leading-[1.35]
                            tracking-[-1%]
                            text-(--journey-section-card-text)
                        "
                    >
                        {phase.description}
                    </p>
                </div>

                <div className="flex justify-end">
                    <Image
                        src='/images/optimized-svg/image 425.svg'
                        alt='image'
                        width={320}
                        height={250}
                        loading='lazy'
                        className='h-auto w-full max-w-65'
                    />
                </div>
            </div>

            <div className="mt-6 border-t border-(--journey-section-card-border) pt-5">
                <div className="grid gap-3 lg:grid-cols-3">
                    {phase.cards.map((card) => {
                        const Icon = card.icon;

                        return (
                            <article
                                key={card.title}
                                className="
                                    rounded-xl
                                    border
                                    border-(--journey-section-card-border)
                                    bg-white
                                    px-5
                                    py-5
                                "
                            >
                                <div className="flex items-center gap-3">
                                    <span
                                        className={`
                                            flex
                                            h-11
                                            w-11
                                            items-center
                                            justify-center
                                            rounded-[10px]
                                            ${card.iconBoxClass}
                                            ${card.iconClass}
                                        `}
                                    >
                                        <Icon
                                            aria-hidden="true"
                                            className="h-7 w-7"
                                            strokeWidth={1.8}
                                        />
                                    </span>

                                    <h4
                                        className="
                                            text-[17px]
                                            font-semibold
                                            text-(--journey-section-card-title)
                                            leading-[1.32]
                                            tracking-[-1%]
                                        "
                                    >
                                        {card.title}
                                    </h4>
                                </div>

                                <ul className="mt-4 space-y-3">
                                    {card.points.map((point) => (
                                        <li
                                            key={point}
                                            className="
                                                flex
                                                gap-3
                                                text-[14px]
                                                font-semibold
                                                leading-[1.61]
                                                tracking-[-4%]
                                                text-(--journey-section-card-text)
                                            "
                                        >
                                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-(--color-brand-700)" />
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </article>
                        );
                    })}
                </div>
            </div>

            <div
                className="
                    mt-4
                    flex
                    items-center
                    gap-6
                    rounded-xl
                    bg-(--career-path-section-eyebrow-bg)
                    px-6
                    py-3
                "
            >
                <div className="shrink-0">
                    <Image
                        src='/images/optimized-svg/image 424.svg'
                        alt='target'
                        width={64}
                        height={64}
                        loading='lazy'
                        className='h-16 w-16'
                    />
                </div>

                <p
                    className="
                        max-w-230
                        text-[17px]
                        font-semibold
                        leading-[1.45]
                        tracking-[-4%]
                        text-(--journey-section-card-text)
                    "
                >
                    By the end, learners build stronger habits across{' '}
                    <span className="font-semibold text-(--color-brand-700)">
                        DSA, backend, system design, AI workflows, mocks,
                        reviews, and capstone proof.
                    </span>
                </p>
            </div>
        </article>
    );
};
