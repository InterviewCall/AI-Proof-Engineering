import { CalendarCheck, ChevronRight, UsersRound } from 'lucide-react';
import Link from 'next/link';
import { FC } from 'react';

const CohortTrustBar: FC = () => {
    return (
        <div
            className="
                flex
                flex-col
                gap-5
                rounded-2xl
                border
                border-(--build-proof-trust-bar-border)
                bg-(--build-proof-trust-bar-bg)
                p-5
                sm:p-6
                lg:flex-row
                lg:items-center
                lg:justify-between
            "
        >
            <div className="flex items-center gap-4">
                <span
                    className="
                        flex
                        h-13
                        w-13
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-(--build-proof-trust-bar-icon-bg)
                        text-(--build-proof-trust-bar-icon-text)
                    "
                >
                    <CalendarCheck
                        aria-hidden="true"
                        className="h-6 w-6"
                        strokeWidth={1.8}
                    />
                </span>

                <div>
                    <p
                        className="
                            text-[17px]
                            font-bold
                            leading-tight
                            text-(--build-proof-trust-bar-title)
                        "
                    >
                        Admissions Open for the Next Cohort
                    </p>

                    <p
                        className="
                            mt-1
                            text-[13px]
                            leading-[1.4]
                            text-(--build-proof-trust-bar-text)
                        "
                    >
                        Cohort seats are reviewed to maintain focused
                        learning, feedback, and mentor support.
                    </p>
                </div>
            </div>

            <div className="flex items-center gap-5 lg:pl-5">
                <span className="hidden h-10 w-px bg-(--build-proof-trust-bar-divider) lg:block" />

                <Link
                    href="#specialists"
                    className="
                        inline-flex
                        min-h-11
                        w-full
                        shrink-0
                        items-center
                        justify-center
                        gap-2
                        rounded-lg
                        border
                        border-(--color-brand-300)
                        bg-white
                        px-5
                        text-[14px]
                        font-semibold
                        text-(--color-brand-700)
                        transition-colors
                        hover:bg-(--color-brand-50)
                        focus-visible:outline-none
                        focus-visible:ring-4
                        focus-visible:ring-(--focus-ring-color)
                        sm:w-auto
                    "
                >
                    <UsersRound
                        aria-hidden="true"
                        className="h-4.5 w-4.5"
                        strokeWidth={1.9}
                    />
                    <span>Check Track Fit</span>
                    <ChevronRight
                        aria-hidden="true"
                        className="h-4.5 w-4.5"
                        strokeWidth={2}
                    />
                </Link>
            </div>
        </div>
    );
};

export default CohortTrustBar;
