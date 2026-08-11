import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { FC } from 'react';

import { ecosystemMiniCards } from '@/utils/ecosystemItems';

import EcosystemMiniCardItem from './EcosystemMiniCardItem';

const EcosystemPanel: FC = () => {
    return (
        <div
            className="
                flex
                h-full
                flex-col
                gap-y-2
                rounded-2xl
                border
                border-(--ecosystem-community-border)
                bg-(--ecosystem-community-bg)
                p-6
                sm:p-8
            "
        >
            <h3
                className="
                    text-[28px]
                    font-bold
                    leading-tight
                    tracking-[-1%]
                    text-(--ecosystem-community-title)
                "
            >
                InterviewCall Ecosystem
            </h3>

            <span className="mt-3 block h-1 w-11 rounded-full bg-(--color-blue)" />

            <p
                className="
                    mt-3
                    text-[14.5px]
                    leading-[1.55]
                    text-(--ecosystem-community-text)
                    max-w-lg
                "
            >
                A structured support layer for engineers moving from learning
                to practice, feedback, proof, and career readiness.
            </p>

            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {ecosystemMiniCards.map((card) => (
                    <EcosystemMiniCardItem key={card.title} card={card} />
                ))}
            </div>

            <div className="mt-auto pt-5">
                <Link
                    href="#ecosystem"
                    className="
                        group
                        inline-flex
                        min-h-14
                        w-full
                        items-center
                        justify-center
                        gap-3
                        rounded-lg
                        bg-(--ecosystem-community-button-bg)
                        px-6
                        text-center
                        text-[20px]
                        font-semibold
                        text-(--ecosystem-community-button-text)
                        transition-all
                        duration-200
                        hover:-translate-y-0.5
                        hover:bg-(--ecosystem-community-button-hover-bg)
                        focus-visible:outline-none
                        focus-visible:ring-4
                        focus-visible:ring-(--focus-ring-color)
                    "
                >
                    <span>Explore the Ecosystem</span>

                    <ArrowRight
                        aria-hidden="true"
                        className="
                            h-5
                            w-5
                            transition-transform
                            duration-200
                            group-hover:translate-x-1
                        "
                        strokeWidth={1.9}
                    />
                </Link>
            </div>
        </div>
    );
};

export default EcosystemPanel;
