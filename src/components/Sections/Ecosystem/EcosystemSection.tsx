import { ArrowRight, Mail, Newspaper } from 'lucide-react';
import Link from 'next/link';
import { FC } from 'react';

import { programUpdates } from '@/utils/ecosystemItems';

import EcosystemFeatureStrip from './EcosystemFeatureStrip';
import EcosystemPanel from './EcosystemPanel';
import MobileEcosystemPanel from './MobileEcosystemPanel';
import MobileUpdateCard from './MobileUpdateCard';
import NewsletterBand from './NewsletterBand';
import ProgramUpdatesPanel from './ProgramUpdatesPanel';

const EcosystemSection: FC = () => {
    return (
        <section
            id="ecosystem"
            className="
                scroll-mt-25
                px-4
                py-14
                sm:px-6
                sm:py-6
                lg:px-8
                lg:py-6
                xl:px-12
            "
        >
            <div className="mx-auto w-full max-w-[1540px]">
                {/* Header */}
                <header className="mx-auto max-w-280 text-center">
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
                            border-[#AFC7FF]
                            bg-[#EEF4FF]
                            px-6
                            text-[clamp(0.875rem,1.1vw,1.0625rem)]
                            font-semibold
                            uppercase
                            tracking-[0.015em]
                            text-(--ecosystem-section-eyebrow-text)
                            shadow-[0_7px_14px_rgba(1,17,57,0.18)]
                            ring-1
                            ring-[#a9c3fc]
                        "
                    >
                        <Newspaper
                            aria-hidden="true"
                            className="h-4.5 w-4.5"
                            strokeWidth={1.9}
                        />
                        <span>Updates &amp; Ecosystem</span>
                    </div>

                    {/* Heading */}
                    <h2
                        className="
                            mt-4
                            text-[clamp(2.5rem,7.5vw,3.75rem)]
                            font-bold
                            leading-[1.06]
                            tracking-[-2%]
                            text-(--ecosystem-section-title-text)
                            lg:text-[clamp(2.25rem,5.5vw,3.75rem)]
                            lg:leading-[1.15]
                        "
                    >
                        Recent <span className="text-(--color-brand-700)">Updates</span>
                    </h2>

                    {/* Subtitle */}
                    <p
                        className="
                            mx-auto
                            mt-4
                            max-w-220
                            text-[16px]
                            font-medium
                            leading-[1.5]
                            text-(--ecosystem-section-subtitle-text)
                            sm:text-[19px]
                            lg:text-[20px]
                            lg:font-semibold
                        "
                    >
                        Changes to the curriculum and practice system as
                        engineering work changes.
                    </p>
                </header>

                {/* Desktop board */}
                <div className="hidden lg:block">
                    <div className="mt-8 grid grid-cols-2 items-stretch gap-5">
                        <ProgramUpdatesPanel />
                        <EcosystemPanel />
                    </div>

                    <div className="mt-5">
                        <EcosystemFeatureStrip />
                    </div>

                    <div className="mt-5">
                        <NewsletterBand />
                    </div>
                </div>

                {/* Mobile / tablet board */}
                <div className="mt-8 lg:hidden">
                    <h3
                        className="
                            text-[20px]
                            font-bold
                            leading-tight
                            text-(--ecosystem-resource-card-title)
                        "
                    >
                        Latest Updates
                    </h3>

                    <span className="mt-2 block h-1 w-9 rounded-full bg-(--color-blue)" />

                    <div className="mt-4 space-y-3">
                        {programUpdates.slice(0, 2).map((update) => (
                            <MobileUpdateCard key={update.title} update={update} />
                        ))}
                    </div>

                    <div className="mt-5">
                        <MobileEcosystemPanel />
                    </div>

                    <Link
                        href="#ecosystem"
                        className="
                            group
                            mt-5
                            flex
                            items-center
                            justify-center
                            gap-3
                            rounded-xl
                            border
                            border-(--ecosystem-newsletter-border)
                            bg-(--ecosystem-newsletter-bg)
                            px-5
                            py-4
                            transition-colors
                            hover:bg-(--color-brand-50)
                        "
                    >
                        <span
                            className="
                                flex
                                h-10
                                w-10
                                shrink-0
                                items-center
                                justify-center
                                rounded-full
                                bg-(--ecosystem-newsletter-icon-bg)
                                text-(--ecosystem-newsletter-icon-text)
                            "
                        >
                            <Mail
                                aria-hidden="true"
                                className="h-5 w-5"
                                strokeWidth={1.9}
                            />
                        </span>

                        <span className="text-[15px] font-bold text-(--color-brand-700)">
                            Subscribe for Updates
                        </span>

                        <ArrowRight
                            aria-hidden="true"
                            className="
                                h-4.5
                                w-4.5
                                text-(--color-brand-700)
                                transition-transform
                                duration-200
                                group-hover:translate-x-1
                            "
                            strokeWidth={2}
                        />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default EcosystemSection;