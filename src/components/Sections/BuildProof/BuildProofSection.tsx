import { CalendarCheck, FileText } from 'lucide-react';
import { FC } from 'react';

import { admissionInfoChips } from '@/utils/buildProofItems';

import AdmissionsPanel from './AdmissionsPanel';
import BuildProofCtaButtons from './BuildProofCtaButtons';
import CareerTracksPanel from './CareerTracksPanel';
import CohortTrustBar from './CohortTrustBar';
import MobileAdmissionRow from './MobileAdmissionRow';
import MobileTracksIncludeStrip from './MobileTracksIncludeStrip';
import TrackPillsRow from './TrackPillsRow';

const BuildProofSection: FC = () => {
    return (
        <section
            id="build-proof"
            className="
                scroll-mt-25
                bg-(--build-proof-section-bg)
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
                <header className="mx-auto max-w-280 text-center">
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
                            bg-(--build-proof-section-eyebrow-bg)
                            px-5
                            text-[13px]
                            font-semibold
                            uppercase
                            tracking-[-1%]
                            text-(--build-proof-section-eyebrow-text)
                            sm:text-[15px]
                        "
                    >
                        <FileText
                            aria-hidden="true"
                            className="h-4.5 w-4.5"
                            strokeWidth={1.9}
                        />
                        <span>Admissions / Pricing</span>
                    </div>

                    {/* Desktop heading */}
                    <h2
                        className="
                            mt-4
                            hidden
                            text-[clamp(2.25rem,5.5vw,3.75rem)]
                            font-bold
                            leading-[1.15]
                            tracking-[-2%]
                            text-(--build-proof-section-title-text)
                            lg:block
                        "
                    >
                        Ready to Build Your{' '}
                        <span className="text-(--build-proof-section-title-highlight)">
                            AI-Era
                        </span>{' '}
                        Engineering Proof?
                    </h2>

                    {/* Mobile / tablet heading */}
                    <h2
                        className="
                            mt-4
                            text-[clamp(2.5rem,7.5vw,3.75rem)]
                            font-bold
                            leading-[1.06]
                            tracking-[-2%]
                            text-(--build-proof-section-title-text)
                            lg:hidden
                        "
                    >
                        Ready to Build Your

                        <span className="block text-(--build-proof-section-title-highlight)">
                            AI-Era
                        </span>

                        Proof?
                    </h2>

                    <p
                        className="
                            mx-auto
                            mt-4
                            max-w-220
                            text-[16px]
                            font-medium
                            leading-[1.5]
                            text-(--build-proof-section-subtitle-text)
                            sm:text-[19px]
                        "
                    >
                        Choose the right track, understand the program
                        structure, and speak with our team before enrolling.
                    </p>
                </header>

                {/* Desktop board */}
                <div className="hidden lg:block">
                    <div className="mt-8 grid grid-cols-2 items-stretch gap-5">
                        <CareerTracksPanel />
                        <AdmissionsPanel />
                    </div>

                    <div className="mt-5">
                        <CohortTrustBar />
                    </div>
                </div>

                {/* Mobile / tablet board */}
                <div className="mt-8 lg:hidden">
                    <TrackPillsRow />

                    <div
                        className="
                            mt-5
                            rounded-2xl
                            border
                            border-(--build-proof-enrollment-border)
                            bg-(--build-proof-enrollment-bg)
                            p-5
                            sm:p-6
                        "
                    >
                        <h3
                            className="
                                text-[22px]
                                font-bold
                                leading-[1.2]
                                tracking-[-1%]
                                text-(--build-proof-enrollment-title)
                            "
                        >
                            Admissions &amp; Fee Guidance
                        </h3>

                        <span className="mt-3 block h-1 w-11 rounded-full bg-(--color-blue)" />

                        <p
                            className="
                                mt-3
                                text-[14px]
                                leading-[1.55]
                                text-(--build-proof-enrollment-text)
                            "
                        >
                            Get complete program details, latest fee plan,
                            payment options, and track recommendation
                            through a counselling call.
                        </p>

                        <div className="mt-5 space-y-3">
                            {admissionInfoChips.map((chip) => (
                                <MobileAdmissionRow key={chip.label} chip={chip} />
                            ))}
                        </div>

                        <p
                            className="
                                mt-6
                                text-[14px]
                                font-bold
                                text-(--build-proof-enrollment-title)
                            "
                        >
                            All Tracks Include
                        </p>

                        <span className="mt-2 block h-1 w-7 rounded-full bg-(--color-blue)" />

                        <div className="mt-4">
                            <MobileTracksIncludeStrip />
                        </div>
                    </div>

                    <div
                        className="
                            mt-5
                            flex
                            items-center
                            gap-3
                            rounded-xl
                            bg-(--build-proof-mobile-trust-bg)
                            px-4
                            py-3.5
                        "
                    >
                        <CalendarCheck
                            aria-hidden="true"
                            className="h-5 w-5 shrink-0 text-(--build-proof-trust-bar-icon-text)"
                            strokeWidth={1.9}
                        />

                        <p
                            className="
                                text-[14px]
                                font-semibold
                                text-(--build-proof-mobile-trust-text)
                            "
                        >
                            Admissions open for the next cohort.
                        </p>
                    </div>

                    <div className="mt-5">
                        <BuildProofCtaButtons />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BuildProofSection;
