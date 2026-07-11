import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { assessmentBenefits } from '@/utils/assessmentBenefits';

const AssessmentBanner: FC = () => {
    return (
        <section
            id="assessment"
            className="
                scroll-mt-27.5
                bg-white
                px-4
                py-8
                sm:px-6
                sm:py-10
                lg:px-10
                lg:py-12
                xl:px-14
            "
        >
            <div
                className="
                    mx-auto
                    grid
                    w-full
                    max-w-345
                    grid-cols-1
                    overflow-hidden
                    rounded-[26px]
                    border
                    border-(--assessment-banner-border)
                    bg-(--assessment-banner-bg)
                    px-6
                    py-8
                    sm:px-8
                    sm:py-10
                    xl:min-h-75
                    xl:grid-cols-[220px_minmax(0,1fr)_320px]
                    xl:grid-rows-[auto_auto]
                    xl:items-center
                    xl:px-8
                    xl:py-10
                "
            >
                {/* Assessment image */}
                <div
                    className="
                        flex
                        justify-start
                        xl:col-start-1
                        xl:row-span-2
                        xl:h-full
                        xl:items-center
                        xl:justify-center
                        xl:border-r
                        xl:border-(--assessment-banner-divider)
                        xl:pr-5
                    "
                >
                    <div
                        className="
                            flex
                            h-26.25
                            w-26.25
                            items-center
                            justify-center
                            overflow-hidden
                            rounded-[25px]
                            sm:h-30
                            sm:w-30
                            xl:h-41.25
                            xl:w-41.25
                            xl:rounded-[28px]
                        "
                    >
                        <Image
                            src="/images/optimized-svg/assesment-banner.svg"
                            alt="AI readiness score assessment"
                            width={165}
                            height={165}
                            className="h-full w-full object-contain"
                        />
                    </div>
                </div>

                {/* Heading and description */}
                <div
                    className="
                        mt-8
                        text-left
                        xl:col-start-2
                        xl:row-start-1
                        xl:mt-0
                        xl:px-10
                        2xl:px-10
                    "
                >
                    <h2
                        className="
                            max-w-225
                            text-3xl
                            font-semibold
                            leading-[1.18]
                            tracking-[-4%]
                            text-(--assessment-banner-title-text)
                            max-md:font-extrabold
                            sm:text-[48px]
                            xl:text-[38px]
                            2xl:text-[34px]
                            max-md:tracking-[-2%]
                            max-md:leading-[1.3]
                        "
                    >
                        Not sure how AI-ready your engineering profile is?
                    </h2>

                    <p
                        className="
                            mt-6
                            max-w-212.5
                            text-[clamp(0.45rem,6vw,1.25rem)]
                            leading-[1.65]
                            text-(--assessment-banner-point-text)
                            sm:text-[28px]
                            xl:mt-5
                            xl:text-[23px]
                            2xl:text-[24px]
                            tracking-[-3%]
                            max-md:tracking-[-2%]
                        "
                    >
                        Take the 3-minute AI-Proof Score assessment and get your
                        recommended learning track.
                    </p>
                </div>

                {/* CTA */}
                <div
                    className="
                        mt-8
                        flex
                        items-center
                        justify-center
                        xl:col-start-3
                        xl:row-span-2
                        xl:mt-0
                        xl:h-full
                        xl:border-l
                        xl:border-(--assessment-banner-divider)
                        xl:pl-10
                    "
                >
                    <Link
                        href="#assessment-form"
                        className="
                            group
                            inline-flex
                            min-h-17
                            w-full
                            items-center
                            justify-center
                            gap-4
                            rounded-xl
                            bg-(--assessment-banner-button-bg)
                            px-6
                            text-center
                            text-[21px]
                            font-medium
                            text-(--assessment-banner-button-text)
                            shadow-[0_12px_30px_rgba(0,67,251,0.16)]
                            transition-all
                            duration-200
                            hover:-translate-y-0.5
                            hover:bg-(--assessment-banner-button-hover-bg)
                            hover:shadow-[0_16px_35px_rgba(0,67,251,0.24)]
                            focus-visible:outline-none
                            focus-visible:ring-4
                            focus-visible:ring-(--focus-ring-color)
                            sm:min-h-19.5
                            sm:text-[25px]
                            xl:min-h-16
                            xl:max-w-[320px]
                            xl:text-[18px]
                        "
                    >
                        <span className="xl:hidden">
                            Unlock Your Score Now
                        </span>

                        <span className="hidden xl:inline">
                            Unlock Your Score
                        </span>

                        <ArrowRight
                            aria-hidden="true"
                            className="
                                h-7
                                w-7
                                shrink-0
                                transition-transform
                                duration-200
                                group-hover:translate-x-1
                                xl:h-6
                                xl:w-6
                            "
                            strokeWidth={1.9}
                        />
                    </Link>
                </div>

                {/* Benefits */}
                <div
                    className="
                        mt-9
                        overflow-x-auto
                        pb-1
                        xl:col-start-2
                        xl:row-start-2
                        xl:mt-7
                        xl:overflow-visible
                        xl:px-8
                        2xl:px-8
                    "
                >
                    <div
                        className="
                            flex
                            min-w-max
                            items-center
                            gap-4
                            xl:min-w-0
                            xl:gap-6
                            2xl:gap-8
                        "
                    >
                        {assessmentBenefits.map((benefit, index) => (
                            <div
                                key={benefit.label}
                                className="flex shrink-0 items-center gap-4"
                            >
                                {index > 0 && (
                                    <span
                                        aria-hidden="true"
                                        className="
                                            h-2
                                            w-2
                                            shrink-0
                                            rounded-full
                                            bg-(--assessment-banner-point-bg)
                                        "
                                    />
                                )}

                                <div className="flex items-center gap-3">
                                    <Image
                                        src={benefit.image}
                                        alt=""
                                        width={38}
                                        height={38}
                                        aria-hidden="true"
                                        className="
                                            h-9
                                            w-9
                                            shrink-0
                                            object-contain
                                            sm:h-10
                                            sm:w-10
                                            xl:h-8
                                            xl:w-8
                                        "
                                    />

                                    <span
                                        className="
                                            whitespace-nowrap
                                            text-[16px]
                                            leading-none
                                            text-(--assessment-banner-point-text)
                                            sm:text-[18px]
                                            xl:text-[16px]
                                            2xl:text-[18px]
                                        "
                                    >
                                        {benefit.label}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AssessmentBanner;