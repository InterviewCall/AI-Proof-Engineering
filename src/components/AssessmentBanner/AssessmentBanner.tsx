import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import DownloadCurriculumButton from "@/components/Shared/DownloadCurriculumButton";
import BookTrackCounsellingButton from "@/components/Shared/BookTrackCounsellingButton";

import { assessmentBenefits } from '@/utils/assessmentBenefits';

const readinessCheckUrl = process.env.NEXT_PUBLIC_PRODUCT_READINESS_CHECK_URL;

const AssessmentBanner: FC = () => {
    return (
        <section
            id="assessment"
            className="
                scroll-mt-27.5
                bg-white
                px-4
                py-5
                sm:px-6
                sm:py-6
                lg:px-8
                lg:py-8
                xl:px-10
            "
        >
            <div
                className="
                    mx-auto
                    grid
                    w-full
                    max-w-370
                    grid-cols-1
                    overflow-hidden
                    rounded-[20px]
                    border
                    border-(--assessment-banner-border)
                    bg-(--assessment-banner-bg)
                    px-5
                    py-6
                    sm:px-6
                    sm:py-7
                    xl:min-h-60
                    xl:grid-cols-[190px_minmax(0,1fr)_280px]
                    xl:grid-rows-[auto_auto]
                    xl:items-center
                    xl:px-7
                    xl:py-7
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
                            xl:h-32
                            xl:w-32
                            xl:rounded-[20px]
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
                        xl:px-8
                        2xl:px-8
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
                            sm:text-[32px]
                            xl:text-[32px]
                            2xl:text-[32px]
                            max-md:tracking-[-2%]
                            max-md:leading-[1.3]
                        "
                    >
                        Not Sure How AI-Ready Your Profile Is?
                    </h2>

                    <p
                        className="
                            mt-3
                            max-w-212.5
                            text-[16px]
                            leading-[1.5]
                            text-(--assessment-banner-point-text)
                            sm:text-[18px]
                            xl:mt-3
                            xl:text-[16px]
                            2xl:text-[17px]
                            tracking-[-1%]
                        "
                    >
                        Take the assessment and get a track recommendation
                        based on where your fundamentals, AI habits, and
                        system design skills actually stand.
                    </p>
                </div>

                {/* CTA */}
                <div
                    className="
                        mt-6
                        flex
                        items-center
                        justify-start
                        xl:col-start-3
                        xl:row-span-2
                        xl:mt-0
                        xl:h-full
                        xl:justify-center
                        xl:border-l
                        xl:border-(--assessment-banner-divider)
                        xl:pl-8
                    "
                >
                    <Link
                        href={readinessCheckUrl ?? "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            group
                            inline-flex
                            min-h-12.5
                            w-full
                            items-center
                            justify-center
                            gap-3
                            rounded-lg
                            bg-(--faq-support-button-bg)
                            px-6
                            text-center
                            text-[15px]
                            font-semibold
                            text-(--faq-support-button-text)
                            transition-all
                            duration-200
                            hover:-translate-y-0.5
                            hover:bg-(--faq-support-button-hover-bg)
                            focus-visible:outline-none
                            focus-visible:ring-4
                            focus-visible:ring-(--focus-ring-color)
                            xl:w-auto
                        "
                    >
                        <span>Unlock Your Score</span>

                        <ArrowRight
                            aria-hidden="true"
                            className="
                                h-5
                                w-5
                                shrink-0
                                transition-transform
                                group-hover:translate-x-1
                            "
                            strokeWidth={1.8}
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
                            xl:justify-between
                            2xl:gap-8
                        "
                    >
                        {assessmentBenefits.map((benefit, index) => (
                            <div
                                key={benefit.label}
                                className="flex flex-1 items-center justify-center gap-4"
                            >
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