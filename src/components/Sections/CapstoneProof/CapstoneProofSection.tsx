import { CircleArrowRight, Download, Trophy } from 'lucide-react';
import Link from 'next/link';
import { FC } from 'react';

import CapstoneAdvantagePanel from './CapstoneAdvantagePanel';
import CapstoneFeatureStrip from './CapstoneFeatureStrip';
import CapstonePortfolioCard from './CapstonePortfolioCard';
import ExampleProjectsPanel from './ExampleProjectsPanel';

const CapstoneProofSection: FC = () => {
    return (
        <section
            id="capstone-proof"
            className="
                scroll-mt-25
                bg-(--proof-section-bg)
                px-4
                py-14
                sm:px-6
                sm:py-16
                lg:px-8
                lg:py-20
                xl:px-12
            "
        >
            <div className="mx-auto w-full max-w-345">
                {/* Header */}
                <header className="mx-auto max-w-260 text-center">
                    <div
                        className="
                            inline-flex
                            min-h-9.5
                            items-center
                            justify-center
                            gap-2
                            rounded-full
                            border
                            border-(--color-brand-200)
                            bg-(--proof-section-eyebrow-bg)
                            px-5
                            text-[13px]
                            font-semibold
                            uppercase
                            tracking-[-1%]
                            text-(--proof-section-eyebrow-text)
                            sm:text-[15px]
                        "
                    >
                        <Trophy
                            aria-hidden="true"
                            className="h-4.5 w-4.5"
                            strokeWidth={1.8}
                        />
                        <span>Capstone Proof</span>
                    </div>

                    <h2
                        className="
                            mt-4
                            text-[clamp(2.5rem,6vw,3.75rem)]
                            font-bold
                            leading-[1.06]
                            tracking-[-2%]
                            text-(--proof-section-title-text)
                        "
                    >
                        Finish With Proof You Can

                        <span className="block text-(--proof-section-title-highlight)">
                            Show, Explain, and Defend.
                        </span>
                    </h2>

                    <p
                        className="
                            mx-auto
                            mt-4
                            max-w-220
                            text-[16px]
                            font-medium
                            leading-[1.5]
                            text-(--proof-section-subtitle-text)
                            sm:text-[19px]
                        "
                    >
                        Build capstone projects, architecture documents, code
                        walkthroughs, and mentor-reviewed proof that
                        demonstrate how you think, build, and communicate as
                        an engineer.
                    </p>
                </header>

                {/* Three-column layout */}
                <div
                    className="
                        mt-10
                        grid
                        grid-cols-1
                        gap-8
                        lg:grid-cols-[280px_minmax(0,1fr)]
                        xl:grid-cols-[300px_minmax(0,1fr)_320px]
                    "
                >
                    <CapstoneAdvantagePanel />
                    <CapstonePortfolioCard />
                    <ExampleProjectsPanel />
                </div>

                {/* Feature strip */}
                <div className="mt-8">
                    <CapstoneFeatureStrip />
                </div>

                {/* CTA */}
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                    <Link
                        href="#capstone-proof"
                        className="
                            group
                            inline-flex
                            min-h-14
                            items-center
                            justify-center
                            gap-3
                            rounded-lg
                            bg-(--button-primary-bg)
                            px-7
                            text-center
                            text-[16px]
                            font-semibold
                            text-(--button-primary-text)
                            transition-all
                            duration-200
                            hover:-translate-y-0.5
                            hover:bg-(--button-primary-bg-hover)
                            focus-visible:outline-none
                            focus-visible:ring-4
                            focus-visible:ring-(--focus-ring-color)
                        "
                    >
                        <CircleArrowRight
                            aria-hidden="true"
                            className="h-5 w-5"
                            strokeWidth={1.9}
                        />
                        <span>Explore Capstone Projects</span>
                    </Link>

                    <a
                        href="/documents/ai-engineering-curriculum.pdf"
                        download
                        className="
                            inline-flex
                            min-h-14
                            items-center
                            justify-center
                            gap-3
                            rounded-lg
                            border
                            border-(--color-brand-300)
                            bg-white
                            px-7
                            text-center
                            text-[16px]
                            font-semibold
                            text-(--color-brand-700)
                            transition-colors
                            hover:bg-(--color-brand-50)
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
                </div>
            </div>
        </section>
    );
};

export default CapstoneProofSection;
