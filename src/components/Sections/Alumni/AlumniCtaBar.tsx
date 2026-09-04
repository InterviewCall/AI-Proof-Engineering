import { ArrowRight, CalendarCheck, UsersRound } from 'lucide-react';
import Link from 'next/link';
import { FC } from 'react';

const AlumniCtaBar: FC = () => {
    return (
        <div
            className="
                mt-6
                flex
                flex-col
                items-center
                gap-5
                rounded-2xl
                border
                border-(--alumni-cta-border)
                bg-(--alumni-cta-bg)
                px-6
                py-6
                text-center
                sm:flex-row
                sm:justify-between
                sm:text-left
            "
        >
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:text-left">
                <span
                    className="
                        hidden
                        h-13
                        w-13
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-(--alumni-cta-icon-bg)
                        text-(--alumni-cta-icon-text)
                        sm:flex
                    "
                >
                    <UsersRound
                        aria-hidden="true"
                        className="h-6.5 w-6.5"
                        strokeWidth={1.7}
                    />
                </span>

                <div>
                    <h3
                        className="
                            text-[18px]
                            font-bold
                            leading-tight
                            text-(--alumni-cta-title-text)
                        "
                    >
                        Explore More Verified Alumni Journeys
                    </h3>

                    <p
                        className="
                            mt-1.5
                            max-w-115
                            text-[14px]
                            leading-[1.5]
                            text-(--alumni-cta-text)
                        "
                    >
                        See how InterviewCall learners approached
                        skill-building, interview preparation, and their next
                        career step.
                    </p>
                </div>
            </div>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:shrink-0">
                <Link
                    href="#alumni"
                    className="
                        group
                        inline-flex
                        min-h-12.5
                        w-full
                        items-center
                        justify-center
                        gap-2.5
                        rounded-lg
                        border
                        border-[#144EFE]
                        bg-(--alumni-cta-secondary-button-bg)
                        px-6
                        text-center
                        text-[14px]
                        font-semibold
                        whitespace-nowrap
                        text-(--alumni-cta-secondary-button-text)
                        transition-all
                        duration-200
                        hover:-translate-y-0.5
                        hover:bg-(--alumni-cta-secondary-button-hover-bg)
                        focus-visible:outline-none
                        focus-visible:ring-4
                        focus-visible:ring-(--focus-ring-color)
                        sm:w-auto
                        sm:min-w-[248px]
                    "
                >
                    <span>View Alumni Stories</span>
                    <ArrowRight
                        aria-hidden="true"
                        className="h-4.5 w-4.5 shrink-0 transition-transform duration-200 group-hover:translate-x-1"
                        strokeWidth={1.8}
                    />
                </Link>

                <Link
                    href="#callback"
                    className="
                        group
                        inline-flex
                        min-h-12.5
                        w-full
                        items-center
                        justify-center
                        gap-2.5
                        rounded-lg
                        bg-(--alumni-cta-primary-button-bg)
                        px-6
                        text-center
                        text-[14px]
                        font-semibold
                        whitespace-nowrap
                        text-(--alumni-cta-primary-button-text)
                        transition-all
                        duration-200
                        hover:-translate-y-0.5
                        hover:bg-(--alumni-cta-primary-button-hover-bg)
                        focus-visible:outline-none
                        focus-visible:ring-4
                        focus-visible:ring-(--focus-ring-color)
                        sm:w-auto
                        sm:min-w-[248px]
                    "
                >
                    <CalendarCheck aria-hidden="true" className="h-4.5 w-4.5 shrink-0" strokeWidth={1.9} />
                    <span>Book a Counselling Call</span>
                </Link>
            </div>
        </div>
    );
};

export default AlumniCtaBar;
