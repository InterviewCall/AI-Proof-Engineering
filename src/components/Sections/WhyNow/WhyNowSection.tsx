import {
    ArrowDown,
    ArrowRight,
    Bot,
    CircleCheck,
    CircleX,
    ShieldCheck,
    UserRound,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';

import { aiProofPoints, executionOnlyPoints } from '@/utils/whyNowPoints';

const WhyNowSection: FC = () => {
    return (
        <section
            id='why-now'
            className='
                scroll-mt-27.5
                overflow-hidden
                bg-white
                px-4
                py-8
                sm:px-6
                sm:py-10
                lg:px-8
                lg:py-12
                xl:px-12
            '
        >
            <div className='mx-auto w-full max-w-370'>
                {/* Section header */}
                <div className='mx-auto max-w-240 text-center'>
                    <div
                        className='
                            mx-auto
                            flex
                            w-fit
                            min-h-10
                            items-center
                            justify-center
                            rounded-full
                            bg-(--why-now-section-header-bg)
                            px-6
                            text-[clamp(0.875rem,1.1vw,1.0625rem)]
                            font-semibold
                            uppercase
                            tracking-[0.015em]
                            text-(--why-now-section-header-text)
                            shadow-[0_7px_14px_rgba(1,17,57,0.18)]
                            ring-1
                            ring-[#a9c3fc]
                        '
                    >
                        Why This Program Now
                    </div>

                    <h2
                        className='
                            mt-5
                            text-[clamp(2rem,4.2vw,3.125rem)]
                            font-bold
                            leading-[1.12]
                            tracking-[-0.042em]
                            text-(--why-now-section-title-text)
                            [text-shadow:0_6px_14px_rgba(1,13,47,0.18)]
                        '
                    >
                        AI Has Already Changed How Many{' '}
                        <span className='text-(--why-now-section-title-highlight)'>
                            Engineering Teams work
                        </span>
                    </h2>

                    <p
                        className='
                            mx-auto
                            mt-5
                            max-w-227.5
                            text-[clamp(0.9rem,1.15vw,1.1875rem)]
                            leading-[1.65]
                            text-(--why-now-section-subtitle-text)
                            [text-shadow:0_3px_8px_rgba(1,13,47,0.12)]
                        '
                    >
                        It can draft an endpoint, write a first pass at
                        tests, generate documentation, and explain a
                        library you&apos;ve never touched. Most of that
                        used to take longer.
                    </p>
                </div>

                {/* Main content */}
                <div
                    className='
                        mt-8
                        grid
                        items-stretch
                        gap-3
                        xl:grid-cols-[0.74fr_1.26fr]
                        xl:gap-3
                    '
                >
                    {/* Left automation visual */}
                    <div className='h-full w-full'>
                        {/* Mobile and tablet version */}
                        <article
                            className='
                                relative
                                aspect-1599/774
                                w-full
                                overflow-hidden
                                drop-shadow-[0_14px_18px_rgba(1,13,47,0.18)]
                                xl:hidden
                            '
                        >
                            <Image
                                src='/images/optimized-svg/why-now-section-left-image-mobile.svg'
                                alt=''
                                fill
                                aria-hidden='true'
                                sizes='
                                    (max-width: 639px) calc(100vw - 32px),
                                    (max-width: 1279px) calc(100vw - 48px),
                                    1px
                                '
                                className='
                                    pointer-events-none
                                    select-none
                                    object-contain
                                    object-center
                                '
                            />

                            <div
                                className='
                                    absolute
                                    inset-0
                                    z-10
                                    px-[4.2%]
                                    pt-[14%]
                                '
                            >
                                <h3
                                    className='
                                        max-w-[49%]
                                        text-[clamp(0.625rem,2.8vw,1.625rem)]
                                        font-bold
                                        leading-[1.14]
                                        tracking-[-0.035em]
                                        text-(--why-now-section-left-box-title-text)
                                    '
                                >
                                    AI drafts it. You still decide.
                                </h3>

                                <div
                                    className='
                                        mt-[3.3%]
                                        h-0.5
                                        w-[8%]
                                        min-w-5
                                        max-w-12
                                        rounded-full
                                        bg-(--why-now-section-left-box-divider)
                                    '
                                />

                                <p
                                    className='
                                        mt-[3.8%]
                                        max-w-[50%]
                                        text-[clamp(0.48rem,1.7vw,1rem)]
                                        leading-[1.55]
                                        text-(--why-now-section-left-box-subtitle-text)
                                    '
                                >
                                    AI can draft an endpoint, a first test,
                                    or explain a library you&apos;ve never
                                    touched. It can&apos;t tell you whether
                                    the answer is right for your system.
                                </p>
                            </div>
                        </article>

                        {/* Desktop version */}
                        <article
                            className='
                                relative
                                hidden
                                aspect-[756/735]
                                h-auto
                                w-full
                                overflow-hidden
                                drop-shadow-[0_18px_20px_rgba(1,13,47,0.20)]
                                xl:block
                            '
                        >
                            <Image
                                src='/images/optimized-svg/why-now-section-left-image.svg'
                                alt=''
                                fill
                                aria-hidden='true'
                                loading='eager'
                                sizes='(min-width: 1280px) 34vw, 1px'
                                className='
                                    pointer-events-none
                                    select-none
                                    object-contain
                                    object-center
                                    xl:object-left
                                '
                            />

                            <div
                                className='
                                    absolute
                                    inset-0
                                    z-10
                                    px-[6.5%]
                                    pt-[18%]
                                '
                            >
                                <h3
                                    className='
                                        max-w-[92%]
                                        text-[clamp(1.45rem,1.8vw,2rem)]
                                        font-bold
                                        leading-[1.13]
                                        tracking-[-0.035em]
                                        text-(--why-now-section-left-box-title-text)
                                    '
                                >
                                    AI drafts it. You still decide.
                                </h3>

                                <div
                                    className='
                                        mt-[4.5%]
                                        h-0.75
                                        w-[11%]
                                        min-w-10
                                        max-w-14
                                        rounded-full
                                        bg-(--why-now-section-left-box-divider)
                                    '
                                />

                                <div
                                    className='
                                        mt-[5%]
                                        max-w-[94%]
                                    '
                                >
                                    <p
                                        className='
                                            text-[clamp(0.9rem,1.05vw,1.125rem)]
                                            leading-[1.55]
                                            text-(--why-now-section-left-box-subtitle-text)
                                        '
                                    >
                                        AI can draft an endpoint, write a
                                        first pass at tests, and explain a
                                        library you&apos;ve never touched.
                                    </p>

                                    <p
                                        className='
                                            mt-[3.5%]
                                            text-[clamp(0.9rem,1.05vw,1.125rem)]
                                            font-semibold
                                            leading-[1.55]
                                            text-(--why-now-section-left-box-subtitle-text)
                                        '
                                    >
                                        It can&apos;t tell you whether the
                                        answer is right for your system.
                                    </p>
                                </div>
                            </div>
                        </article>
                    </div>

                    {/* Mobile and tablet comparison */}
                    <article
                        className='
                            rounded-[18px]
                            border
                            border-(--why-now-section-right-box-border)
                            bg-(--why-now-section-right-box-bg)
                            p-4
                            shadow-[0_14px_24px_rgba(1,13,47,0.16),0_2px_6px_rgba(1,13,47,0.10)]
                            sm:p-6
                            xl:hidden
                        '
                    >
                        <div>
                            <div className='flex items-center gap-3'>
                                <div
                                    className='
                                        flex
                                        h-16
                                        w-16
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-[#e4e5e9]
                                        text-[#5c6070]
                                        shadow-[0_8px_18px_rgba(1,13,47,0.12)]
                                    '
                                >
                                    <Bot
                                        aria-hidden='true'
                                        className='h-8 w-8'
                                        strokeWidth={2}
                                    />
                                </div>

                                <h3
                                    className='
                                        text-[16px]
                                        font-semibold
                                        text-(--why-now-section-right-box-sub-box-one-title)
                                        sm:text-[18px]
                                    '
                                >
                                    What AI Handles Well
                                </h3>
                            </div>

                            <div
                                className='
                                    mt-4
                                    rounded-xl
                                    border
                                    border-(--why-now-section-right-box-sub-box-one-border)
                                    bg-(--why-now-section-right-box-sub-box-one-bg)
                                    px-4
                                    py-2
                                    shadow-[inset_0_1px_0_rgba(255,255,255,0.78),0_6px_14px_rgba(1,13,47,0.05)]
                                '
                            >
                                {executionOnlyPoints.map((point) => (
                                    <div
                                        key={point.text}
                                        className={`
                                            items-start
                                            gap-3
                                            py-2.5
                                            ${
                                                point.hideOnMobile
                                                    ? 'hidden'
                                                    : 'flex'
                                            }
                                        `}
                                    >
                                        <CircleX
                                            aria-hidden='true'
                                            className='
                                                mt-0.5
                                                h-4.5
                                                w-4.5
                                                shrink-0
                                                fill-[#273250]
                                                text-white
                                            '
                                            strokeWidth={2.5}
                                        />

                                        <p
                                            className='
                                                text-[15px]
                                                font-medium
                                                leading-[1.45]
                                                text-(--why-now-section-right-box-sub-box-one-point-text)
                                                sm:text-[14px]
                                            '
                                        >
                                            {point.text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div
                            className='
                                flex
                                flex-col
                                items-center
                                justify-center
                                py-4
                                text-center
                            '
                        >
                            <span
                                className='
                                    text-[13px]
                                    font-medium
                                    text-(--why-now-section-right-box-sub-box-middle-upper-text)
                                '
                            >
                                AI&apos;s first draft
                            </span>

                            <ArrowDown
                                aria-hidden='true'
                                className='
                                    my-1
                                    h-8
                                    w-8
                                    text-(--why-now-section-right-box-sub-box-middle-down-text)
                                '
                                strokeWidth={1.8}
                            />

                            <span
                                className='
                                    text-[13px]
                                    font-semibold
                                    text-(--why-now-section-right-box-sub-box-middle-down-text)
                                '
                            >
                                Your judgment call
                            </span>
                        </div>

                        <div>
                            <div className='flex items-center gap-3'>
                                <div
                                    className='
                                        flex
                                        h-11
                                        w-11
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-(--why-now-section-right-box-sub-box-two-title)
                                        text-white
                                        shadow-[0_10px_22px_rgba(2,69,250,0.26)]
                                    '
                                >
                                    <UserRound
                                        aria-hidden='true'
                                        className='h-6 w-6'
                                        strokeWidth={2}
                                    />
                                </div>

                                <h3
                                    className='
                                        text-[16px]
                                        font-semibold
                                        text-(--why-now-section-right-box-sub-box-two-title)
                                        sm:text-[18px]
                                    '
                                >
                                    What Still Needs an Engineer
                                </h3>
                            </div>

                            <div
                                className='
                                    mt-4
                                    rounded-xl
                                    border
                                    border-(--why-now-section-right-box-sub-box-two-border)
                                    bg-(--why-now-section-right-box-sub-box-two-bg)
                                    px-4
                                    py-2
                                    shadow-[inset_0_1px_0_rgba(255,255,255,0.78),0_6px_14px_rgba(1,13,47,0.05)]
                                '
                            >
                                {aiProofPoints.map((point) => (
                                    <div
                                        key={point.text}
                                        className={`
                                            items-start
                                            gap-3
                                            py-2.5
                                            ${
                                                point.hideOnMobile
                                                    ? 'hidden'
                                                    : 'flex'
                                            }
                                        `}
                                    >
                                        <CircleCheck
                                            aria-hidden='true'
                                            className='
                                                mt-0.5
                                                h-4.5
                                                w-4.5
                                                shrink-0
                                                fill-(--why-now-section-right-box-sub-box-two-title)
                                                text-white
                                            '
                                            strokeWidth={2.5}
                                        />

                                        <p
                                            className='
                                                text-[12px]
                                                font-medium
                                                leading-[1.45]
                                                text-(--why-now-section-right-box-sub-box-two-point-text)
                                                sm:text-[14px]
                                            '
                                        >
                                            {point.text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </article>

                    {/* Desktop comparison */}
                    <article
                        className='
                            hidden
                            min-h-[clamp(430px,31vw,520px)]
                            rounded-[22px]
                            border
                            border-(--why-now-section-right-box-border)
                            bg-(--why-now-section-right-box-bg)
                            p-4
                            pt-10
                            shadow-[0_16px_24px_rgba(1,13,47,0.18),0_2px_7px_rgba(1,13,47,0.10)]
                            xl:block
                            2xl:p-5
                            2xl:pt-10
                        '
                    >
                        <div
                            className='
                                grid
                                h-full
                                items-stretch
                                gap-2
                                xl:grid-cols-[minmax(0,1fr)_62px_minmax(0,1fr)]
                                2xl:grid-cols-[minmax(0,1fr)_76px_minmax(0,1fr)]
                            '
                        >
                            {/* Desktop execution-only engineer */}
                            <div className='flex min-w-0 flex-col'>
                                <div className='flex flex-col items-center text-center'>
                                    <div
                                        className='
                                            flex
                                            h-16
                                            w-16
                                            items-center
                                            justify-center
                                            rounded-full
                                            bg-[#e4e5e9]
                                            text-[#5c6070]
                                            shadow-[0_8px_18px_rgba(1,13,47,0.12)]
                                        '
                                    >
                                        <Bot
                                            aria-hidden='true'
                                            className='h-9 w-9'
                                            strokeWidth={2}
                                        />
                                    </div>

                                    <h3
                                        className='
                                            mt-4
                                            text-[clamp(1.15rem,1.35vw,1.35rem)]
                                            font-semibold
                                            text-(--why-now-section-right-box-sub-box-one-title)
                                        '
                                    >
                                        What AI Handles Well
                                    </h3>
                                </div>

                                <div
                                    className='
                                        mt-4
                                        rounded-[14px]
                                        border
                                        border-(--why-now-section-right-box-sub-box-one-border)
                                        bg-(--why-now-section-right-box-sub-box-one-bg)
                                        px-4
                                        py-2
                                        shadow-[inset_0_1px_0_rgba(255,255,255,0.78),0_7px_16px_rgba(1,13,47,0.05)]
                                    '
                                >
                                    {executionOnlyPoints.map(
                                        (point, index) => (
                                            <div
                                                key={point.text}
                                                className={`
                                                    flex
                                                    items-start
                                                    gap-2.5
                                                    py-3
                                                    ${
                                                        index <
                                                        executionOnlyPoints.length -
                                                            1
                                                            ? 'border-b border-(--why-now-section-right-box-sub-box-one-divider)'
                                                            : ''
                                                    }
                                                `}
                                            >
                                                <CircleX
                                                    aria-hidden='true'
                                                    className='
                                                        mt-0.5
                                                        h-4.5
                                                        w-4.5
                                                        shrink-0
                                                        fill-[#a4a8b3]
                                                        text-white
                                                    '
                                                    strokeWidth={2.4}
                                                />

                                                <p
                                                    className='
                                                        whitespace-nowrap
                                                        text-[clamp(0.82rem,0.86vw,1rem)]
                                                        font-medium
                                                        leading-[1.45]
                                                        text-(--why-now-section-right-box-sub-box-one-point-text)
                                                    '
                                                >
                                                    {point.text}
                                                </p>
                                            </div>
                                        ),
                                    )}
                                </div>
                            </div>

                            {/* Desktop transition */}
                            <div
                                className='
                                    flex
                                    flex-col
                                    items-center
                                    justify-center
                                    border-x
                                    border-dashed
                                    border-(--why-now-section-right-box-sub-box-one-divider)
                                    px-1
                                    text-center
                                '
                            >
                                <span
                                    className='
                                        text-[clamp(0.72rem,0.78vw,0.875rem)]
                                        leading-[1.4]
                                        text-(--why-now-section-right-box-sub-box-middle-upper-text)
                                    '
                                >
                                    From
                                    <span className='block'>
                                        AI&apos;s first draft
                                    </span>
                                </span>

                                <ArrowRight
                                    aria-hidden='true'
                                    className='
                                        my-3
                                        h-8
                                        w-8
                                        text-(--why-now-section-right-box-sub-box-middle-down-text)
                                    '
                                    strokeWidth={1.8}
                                />

                                <span
                                    className='
                                        text-[clamp(0.72rem,0.78vw,0.875rem)]
                                        font-medium
                                        leading-[1.4]
                                        text-(--why-now-section-right-box-sub-box-middle-down-text)
                                    '
                                >
                                    to your
                                    <span className='block'>
                                        judgment call
                                    </span>
                                </span>
                            </div>

                            {/* Desktop AI-Proof engineer */}
                            <div className='flex min-w-0 flex-col'>
                                <div className='flex flex-col items-center text-center'>
                                    <div
                                        className='
                                            flex
                                            h-16
                                            w-16
                                            items-center
                                            justify-center
                                            rounded-full
                                            bg-(--why-now-section-right-box-sub-box-two-title)
                                            text-white
                                            shadow-[0_12px_26px_rgba(2,69,250,0.28)]
                                        '
                                    >
                                        <UserRound
                                            aria-hidden='true'
                                            className='h-9 w-9'
                                            strokeWidth={2}
                                        />
                                    </div>

                                    <h3
                                        className='
                                            mt-4
                                            text-[clamp(1.15rem,1.35vw,1.35rem)]
                                            font-semibold
                                            text-(--why-now-section-right-box-sub-box-two-title)
                                        '
                                    >
                                        What Still Needs an Engineer
                                    </h3>
                                </div>

                                <div
                                    className='
                                        mt-4
                                        rounded-[14px]
                                        border
                                        border-(--why-now-section-right-box-sub-box-two-border)
                                        bg-(--why-now-section-right-box-sub-box-two-bg)
                                        px-4
                                        py-2
                                        shadow-[inset_0_1px_0_rgba(255,255,255,0.78),0_7px_16px_rgba(1,13,47,0.05)]
                                    '
                                >
                                    {aiProofPoints.map((point, index) => (
                                        <div
                                            key={point.text}
                                            className={`
                                                flex
                                                items-start
                                                gap-2.5
                                                py-3
                                                ${
                                                    index <
                                                    aiProofPoints.length - 1
                                                        ? 'border-b border-(--why-now-section-right-box-sub-box-one-divider)'
                                                        : ''
                                                }
                                            `}
                                        >
                                            <CircleCheck
                                                aria-hidden='true'
                                                className='
                                                    mt-0.5
                                                    h-4.5
                                                    w-4.5
                                                    shrink-0
                                                    fill-(--why-now-section-right-box-sub-box-two-title)
                                                    text-white
                                                '
                                                strokeWidth={2.4}
                                            />

                                            <p
                                                className='
                                                    whitespace-nowrap
                                                    text-[clamp(0.82rem,0.86vw,1rem)]
                                                    font-medium
                                                    leading-[1.45]
                                                    text-(--why-now-section-right-box-sub-box-two-point-text)
                                                '
                                            >
                                                {point.text}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </article>
                </div>

                {/* Program outcome bar */}
                <div
                    className='
                        mt-8
                        rounded-2xl
                        border
                        border-(--program-outcome-bar-border)
                        bg-(--program-outcome-bar-bg)
                        px-5
                        py-4
                        shadow-[0_14px_22px_rgba(1,13,47,0.14),0_2px_6px_rgba(1,13,47,0.08)]
                        sm:px-6
                        sm:py-5
                        lg:grid
                        lg:grid-cols-[minmax(0,1fr)_340px]
                        lg:items-center
                        lg:gap-7
                    '
                >
                    <div className='flex items-start gap-4'>
                        <div
                            className='
                                flex
                                h-12
                                w-12
                                shrink-0
                                items-center
                                justify-center
                                rounded-xl
                                border
                                border-(--program-outcome-bar-border)
                                bg-white
                                text-(--program-outcome-bar-icon)
                                shadow-[0_8px_18px_rgba(1,13,47,0.08)]
                                sm:h-14
                                sm:w-14
                            '
                        >
                            <ShieldCheck
                                aria-hidden='true'
                                className='h-7 w-7 sm:h-8 sm:w-8'
                                strokeWidth={1.8}
                            />
                        </div>

                        <p
                            className='
                                max-w-[680px]
                                text-[clamp(0.8rem,1.05vw,1.0625rem)]
                                font-semibold
                                leading-[1.5]
                                text-(--program-outcome-bar-title-text)
                            '
                        >
                            This program is built around what&apos;s still
                            an engineer&apos;s job:{' '}
                            <span className='text-(--program-outcome-bar-title-middle-text)'>
                                deciding what to build, reviewing what AI
                                generates,
                            </span>{' '}
                            and proving you can defend it in an interview.
                        </p>
                    </div>

                    <div
                        className='
                            mt-4
                            border-t
                            border-(--program-outcome-bar-divider)
                            pt-4
                            lg:mt-0
                            lg:border-l
                            lg:border-t-0
                            lg:pl-7
                            lg:pt-0
                        '
                    >
                        <Link
                            href='#solution'
                            className='
                                group
                                inline-flex
                                min-h-14
                                w-full
                                items-center
                                justify-center
                                gap-3
                                whitespace-nowrap
                                rounded-lg
                                bg-(--assessment-banner-button-bg)
                                px-6
                                text-center
                                text-[clamp(0.875rem,1vw,1rem)]
                                font-semibold
                                leading-none
                                text-white
                                shadow-[0_10px_25px_rgba(0,67,251,0.16)]
                                transition-all
                                duration-200
                                hover:-translate-y-0.5
                                hover:bg-(--assessment-banner-button-hover-bg)
                                hover:shadow-[0_14px_30px_rgba(0,67,251,0.24)]
                                focus-visible:outline-none
                                focus-visible:ring-4
                                focus-visible:ring-(--focus-ring-color)
                            '
                        >
                            <span>See What the Program Covers</span>

                            <ArrowRight
                                aria-hidden='true'
                                className='
                                    h-5
                                    w-5
                                    shrink-0
                                    transition-transform
                                    duration-200
                                    group-hover:translate-x-1
                                '
                                strokeWidth={2}
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyNowSection;