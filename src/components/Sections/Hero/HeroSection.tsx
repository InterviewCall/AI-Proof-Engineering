import {
    ArrowRight,
    Download,
    FileDown,
    ShieldCheck,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';

const HeroSection: FC = () => {
    return (
        <section
            id="program"
            className="
                scroll-mt-25
                overflow-hidden
                bg-(--hero-section-bg)
                px-5
                py-10
                sm:px-7
                sm:py-14
                lg:px-10
                lg:py-16
                xl:px-14
                xl:py-20
            "
        >
            <div
                className="
                    mx-auto
                    grid
                    w-full
                    max-w-375
                    items-center
                    gap-10
                    lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)]
                    lg:gap-10
                    xl:gap-14
                    2xl:gap-16
                "
            >
                {/* =====================================================
                    LEFT CONTENT
                ====================================================== */}
                <div
                    className="
                        mx-auto
                        w-full
                        max-w-170
                        text-center
                        lg:mx-0
                        lg:max-w-none
                        lg:text-left
                    "
                >
                    {/* Program badge */}
                    <div
                        className="
                            mx-auto
                            mb-6
                            inline-flex
                            min-h-9.5
                            items-center
                            justify-center
                            gap-2
                            rounded-full
                            border
                            border-(--hero-section-badge-border)
                            bg-(--hero-section-badge-bg)
                            px-4
                            text-[12px]
                            font-semibold
                            uppercase
                            tracking-[0.01em]
                            text-(--hero-section-badge-text)
                            sm:text-[14px]
                            lg:mx-0
                            xl:min-h-10.5
                            xl:px-5
                            xl:text-[15px]
                        "
                    >
                        <span
                            aria-hidden="true"
                            className="
                                h-1.5
                                w-1.5
                                rounded-full
                                bg-(--hero-section-badge-dot)
                            "
                        />

                        <span>AI-Proof Engineer Program</span>

                        <span
                            aria-hidden="true"
                            className="
                                h-1.5
                                w-1.5
                                rounded-full
                                bg-(--hero-section-badge-dot)
                            "
                        />
                    </div>

                    {/* Main heading */}
                    <h1
                        className="
                            font-bold
                            leading-[1.08]
                            tracking-[-0.045em]
                        "
                    >
                        <span
                            className="
                                block
                                text-[clamp(2.65rem,7.8vw,4.2rem)]
                                font-bold
                                tracking-[-3%]
                                text-(--hero-section-title-one-text)
                                md:tracking-[-4%]
                                lg:text-[58px]
                            "
                        >
                            AI writes more of the code now.
                        </span>

                        <span
                            className="
                                mt-2
                                block
                                bg-clip-text
                                text-[clamp(2.55rem,7.5vw,4rem)]
                                font-bold
                                tracking-[-3%]
                                text-(--hero-section-title-two-text-desktop)
                                max-md:hidden
                                md:text-[52px]
                                md:tracking-[-4%]
                                lg:mt-3
                            "
                        >
                            Someone still has to check it.
                        </span>

                        <span
                            className="
                                hidden
                                bg-clip-text
                                pt-2
                                text-[clamp(2.55rem,7.5vw,4rem)]
                                font-bold
                                tracking-[-3%]
                                text-transparent
                                max-md:block
                                md:text-[52px]
                                md:tracking-[-4%]
                                lg:mt-3
                            "
                            style={{
                                backgroundImage:
                                    'var(--hero-section-title-gradient-mobile)',
                            }}
                        >
                            Someone still has to check it.
                        </span>
                    </h1>

                    {/* Description */}
                    <p
                        className="
                            mx-auto
                            mt-6
                            block
                            max-w-155
                            text-[17px]
                            leading-[142%]
                            tracking-[-2%]
                            text-(--hero-section-subtitle-text)
                            max-md:hidden
                            sm:text-[19px]
                            lg:mx-0
                            lg:text-[18px]
                            xl:text-[20px]
                            xl:leading-[1.65]
                        "
                    >
                        A program for software engineers who want stronger
                        fundamentals, real practice working with AI,
                        hands-on system design, and a project they can walk
                        someone through in an interview.
                    </p>

                    <p
                        className="
                            mx-auto
                            hidden
                            max-w-155
                            pt-4
                            text-[17px]
                            leading-[142%]
                            tracking-[-2%]
                            text-(--hero-section-subtitle-text)
                            max-md:block
                            sm:text-[19px]
                            lg:mx-0
                            lg:text-[18px]
                            xl:text-[20px]
                            xl:leading-[1.65]
                        "
                    >
                        Fundamentals, real AI practice, system design, and
                        a project you can explain in an interview.
                    </p>

                    {/* =====================================================
                        CTA AREA
                    ====================================================== */}
                    <div
                        className="
                            mx-auto
                            mt-7
                            flex
                            w-full
                            max-w-142.5
                            flex-col
                            gap-4
                            lg:mx-0
                            lg:max-w-none
                            lg:flex-row
                            lg:items-center
                        "
                    >
                        {/* Main score button */}
                        <Link
                            href="#assessment"
                            className="
                                group
                                inline-flex
                                min-h-14.5
                                w-full
                                items-center
                                justify-center
                                gap-2.5
                                rounded-lg
                                px-6
                                text-center
                                text-[17px]
                                font-semibold
                                text-(--hero-section-button-text)
                                shadow-[0_12px_28px_rgba(5,66,247,0.18)]
                                transition-all
                                duration-200
                                hover:-translate-y-0.5
                                hover:shadow-[0_16px_34px_rgba(5,66,247,0.28)]
                                focus-visible:outline-none
                                focus-visible:ring-4
                                focus-visible:ring-(--focus-ring-color)
                                sm:min-h-16
                                sm:text-[18px]
                                lg:w-auto
                                lg:min-w-75
                                lg:px-6
                                xl:min-w-82.5
                                xl:px-8
                            "
                            style={{
                                backgroundImage:
                                    'var(--hero-section-button-gradient)',
                            }}
                        >
                            <span>Check Your AI-Proof Score</span>

                            <ArrowRight
                                aria-hidden="true"
                                className="
                                    h-5
                                    w-5
                                    shrink-0
                                    transition-transform
                                    duration-200
                                    group-hover:translate-x-1
                                "
                                strokeWidth={2.2}
                            />
                        </Link>

                        {/* Desktop curriculum button */}
                        <a
                            href="/documents/ai-engineering-curriculum.pdf"
                            download
                            className="
                                group
                                hidden
                                min-h-16
                                items-center
                                justify-center
                                gap-4
                                whitespace-nowrap
                                rounded-lg
                                border
                                border-(--hero-section-button-two-border)
                                bg-(--hero-section-button-two-bg)
                                px-6
                                text-center
                                text-[17px]
                                font-medium
                                text-(--hero-section-button-two-text)
                                transition-all
                                duration-200
                                hover:-translate-y-0.5
                                hover:bg-(--hero-section-button-two-hover-bg)
                                hover:shadow-[0_10px_25px_rgba(4,13,87,0.08)]
                                focus-visible:outline-none
                                focus-visible:ring-4
                                focus-visible:ring-(--focus-ring-color)
                                lg:inline-flex
                                lg:min-w-57.5
                                xl:min-w-62.5
                                xl:px-7
                            "
                        >
                            <span>Download Curriculum</span>

                            <Download
                                aria-hidden="true"
                                className="
                                    h-5.5
                                    w-5.5
                                    shrink-0
                                    transition-transform
                                    duration-200
                                    group-hover:translate-y-0.5
                                "
                                strokeWidth={2}
                            />
                        </a>
                    </div>

                    {/* Score details */}
                    <div
                        className="
                            mx-auto
                            mt-4
                            flex
                            max-w-142.5
                            items-start
                            justify-center
                            gap-2
                            text-left
                            lg:mx-0
                            lg:max-w-none
                            lg:justify-start
                        "
                    >
                        <ShieldCheck
                            aria-hidden="true"
                            className="
                                mt-0.5
                                h-4.75
                                w-4.75
                                shrink-0
                                text-(--hero-section-proof-icon)
                                md:h-10
                                md:w-10
                            "
                            strokeWidth={2.2}
                        />

                        <p
                            className="
                                text-[13px]
                                leading-normal
                                text-(--hero-section-proof-text)
                                sm:text-[15px]
                                lg:text-[14px]
                                xl:text-[15px]
                            "
                        >
                            Fundamentals &bull; AI-Assisted Workflows &bull;
                            System Design &bull; Interview Practice &bull;
                            Work You Can Show
                        </p>
                    </div>
                </div>

                {/* =====================================================
                    RIGHT VISUAL
                ====================================================== */}
                <div className="mx-auto w-full max-w-245">
                    <div
                        className="
                            relative
                            overflow-hidden
                            rounded-2xl
                            bg-(--hero-video-card-bg)
                            shadow-[0_22px_60px_rgba(4,13,87,0.13)]
                            sm:rounded-[20px]
                        "
                    >
                        <Image
                            src="/images/optimized-svg/hero-section-image.svg"
                            alt="Sunyul Hossen presenting at a desk"
                            width={980}
                            height={700}
                            loading="eager"
                            fetchPriority="high"
                            sizes="
                                (max-width: 1023px) 100vw,
                                (max-width: 1535px) 58vw,
                                980px
                            "
                            className="
                                block
                                h-auto
                                w-full
                                object-cover
                            "
                        />

                        <div
                            className="
                                pointer-events-none
                                absolute
                                inset-0
                                flex
                                flex-col
                                justify-center
                                px-[6.4%]
                                text-white
                                [text-shadow:0_2px_18px_rgba(0,0,0,0.36)]
                                sm:px-[6%]
                            "
                        >
                            <div className="max-w-[58%] sm:max-w-[46%]">
                                <h2
                                    className="
                                        text-[34px]
                                        font-semibold
                                        leading-[1.35]
                                        lg:text-[34px]
                                        tracking-[-4%]
                                    "
                                >
                                    <span
                                        className="
                                        "
                                    >
                                        What AI Actually Changes {' '}
                                    </span>
                                    <span
                                        className="
                                        "
                                    >
                                        About the Job
                                    </span>
                                </h2>

                                <div
                                    aria-hidden="true"
                                    className="
                                        mt-[8%]
                                        h-0.5
                                        w-[12%]
                                        min-w-10
                                        bg-[#0b62ff]
                                        sm:h-0.75
                                    "
                                />

                                <div
                                    className="
                                        mt-[8%]
                                        space-y-1
                                        sm:space-y-1
                                    "
                                >
                                    <p
                                        className="
                                            text-[24px]
                                            font-semibold
                                            leading-[1.35]
                                            tracking-[-4%]
                                            lg:text-[24px]
                                        "
                                    >
                                        Sunyul Hossen
                                    </p>
                                    <p
                                        className="
                                            text-[22px]
                                            font-normal
                                            leading-[1.35]
                                            tracking-[-6%]
                                            lg:text-[22px]
                                        "
                                    >
                                        Founder &amp; CEO,
                                    </p>
                                    <p
                                        className="
                                            text-[20px]
                                            font-normal
                                            leading-[1.35]
                                            tracking-[-2%]
                                            text-[#D0CFD1]
                                            lg:text-[20px]
                                        "
                                    >
                                        InterviewCall
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mobile and tablet curriculum download */}
                    <div
                        className="
                            mt-4
                            border-b
                            border-(--hero-section-download-divider)
                            pb-4
                            sm:mt-5
                            sm:pb-5
                            lg:hidden
                        "
                    >
                        <a
                            href="/documents/ai-engineering-curriculum.pdf"
                            download
                            className="
                                group
                                inline-flex
                                items-center
                                gap-3
                                text-[16px]
                                font-semibold
                                text-(--hero-section-download-text)
                                underline
                                decoration-1
                                underline-offset-4
                                transition-opacity
                                hover:opacity-75
                                sm:text-[17px]
                            "
                        >
                            <span
                                className="
                                    flex
                                    h-11
                                    w-11
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-full
                                    border
                                    border-(--hero-section-download-icon-border)
                                    bg-(--hero-section-download-icon-bg)
                                    text-(--hero-section-download-icon)
                                    transition-transform
                                    duration-200
                                    group-hover:-translate-y-0.5
                                "
                            >
                                <FileDown
                                    aria-hidden="true"
                                    className="h-6 w-6"
                                    strokeWidth={1.9}
                                />
                            </span>

                            <span>Download Curriculum</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
