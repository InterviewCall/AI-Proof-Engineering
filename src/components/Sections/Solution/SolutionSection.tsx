import {
    ArrowDown,
    ArrowRight,
    Check,
    ChevronRight,
    ShieldCheck,
    Sparkles,
    X,
} from 'lucide-react';
import Link from 'next/link';
import { FC } from 'react';

import {
    capabilities,
    interviewCallItems,
    oldCourseItems,
} from '@/utils/solutionItems';

const SolutionSection: FC = () => {
    return (
        <section
            id="solution"
            className="
                scroll-mt-25
                overflow-hidden
                bg-(--solution-section-bg)
                px-5
                py-12
                sm:px-6
                sm:py-14
                lg:px-8
                lg:py-16
                xl:px-10
                xl:py-20
            "
        >
            <div className="mx-auto w-full max-w-[1540px]">
                {/* =====================================================
                    SECTION HEADER
                ====================================================== */}
                <header
                    className="
                        max-w-230
                        text-left
                        lg:mx-auto
                        lg:text-center
                    "
                >
                    {/* Desktop badge */}
                    <div
                        className="
                            hidden
                            min-h-7
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-(--solution-section-header-border)
                            bg-(--solution-section-header-bg)
                            px-5
                            text-[12px]
                            font-medium
                            uppercase
                            tracking-[0.08em]
                            text-(--solution-section-header-text)
                            lg:inline-flex
                        "
                    >
                        Why InterviewCall
                    </div>

                    {/* Mobile and tablet eyebrow */}
                    <p
                        className="
                            text-[17px]
                            font-medium
                            uppercase
                            tracking-normal
                            leading-none
                            text-(--solution-section-title-text-end)
                            lg:hidden
                        "
                    >
                        Why InterviewCall
                    </p>

                    {/* Desktop heading */}
                    <h2
                        className="
                            mt-4
                            hidden
                            text-[50px]
                            font-semibold
                            leading-[1]
                            tracking-[-0.02em]
                            text-(--solution-section-title-text)
                            lg:block
                        "
                    >
                        How the Program Is Run
                    </h2>

                    {/* Mobile and tablet heading */}
                    <h2
                        className="
                            mt-4
                            text-[clamp(2.4rem,9vw,3.5rem)]
                            font-bold
                            leading-[1.05]
                            tracking-[-0.02em]
                            text-(--solution-section-title-text)
                            lg:hidden
                        "
                    >
                        How the Program Is Run
                    </h2>

                    {/* Desktop description */}
                    <p
                        className="
                            mx-auto
                            mt-4
                            hidden
                            max-w-195
                            text-[16px]
                            font-medium
                            leading-[1.5]
                            tracking-normal
                            text-center
                            text-(--solution-section-subtitle-text)
                            lg:block
                        "
                    >
                        Live sessions, assignments with feedback, code
                        review, system design work, mock interviews, and a
                        capstone that gets reviewed more than once.
                    </p>

                    {/* Mobile and tablet description */}
                    <p
                        className="
                            mt-5
                            max-w-155
                            text-[15px]
                            leading-[1.55]
                            text-(--solution-section-subtitle-text)
                            sm:text-[19px]
                            lg:hidden
                        "
                    >
                        Live sessions, reviewed assignments, and mock
                        interviews built into the coursework.
                    </p>
                </header>

                {/* =====================================================
                    DESKTOP COMPARISON
                ====================================================== */}
                <div
                    className="
                        mt-8
                        hidden
                        overflow-hidden
                        rounded-xl
                        border
                        border-(--solution-section-different-box-border)
                        bg-(--solution-section-different-box-bg)
                        px-4
                        pb-4
                        pt-4
                        lg:block
                    "
                >
                    {/* Comparison headings */}
                    <div
                        className="
                            grid
                            grid-cols-[minmax(0,1fr)_80px_minmax(0,1fr)]
                            items-center
                            gap-4
                            px-4
                            pb-3
                        "
                    >
                        <h3
                            className="
                                text-center
                                text-[14px]
                                font-semibold
                                leading-[1.3]
                                uppercase
                                tracking-[2%]
                                text-(--solution-section-different-box-left-title)
                            "
                        >
                            Old Course Model
                        </h3>

                        <div aria-hidden="true" />

                        <h3
                            className="
                                text-center
                                text-[14px]
                                font-semibold
                                leading-[1.3]
                                uppercase
                                tracking-[2%]
                                text-(--solution-section-different-box-right-title)
                            "
                        >
                            InterviewCall Model
                        </h3>
                    </div>

                    {/* Comparison rows */}
                    <div className="space-y-2">
                        {oldCourseItems.map((oldItem, index) => {
                            const OldIcon = oldItem.icon;
                            const newItem = interviewCallItems[index];
                            const NewIcon = newItem.icon;

                            return (
                                <div
                                    key={oldItem.desktopText}
                                    className="
                                        grid
                                        grid-cols-[minmax(0,1fr)_80px_minmax(0,1fr)]
                                        items-center
                                        gap-4
                                    "
                                >
                                    {/* Old model row */}
                                    <div
                                        className="
                                            flex
                                            min-h-[64px]
                                            items-center
                                            gap-4
                                            rounded-lg
                                            border
                                            border-(--solution-section-different-box-left-point-border)
                                            bg-(--solution-section-different-box-left-point-bg)
                                            px-4
                                            py-3
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
                                                border-(--solution-section-different-box-left-point-border)
                                                bg-(--solution-section-different-box-arrow-box-bg)
                                                text-(--solution-section-different-box-left-point-icon)
                                            "
                                        >
                                            <OldIcon
                                                aria-hidden="true"
                                                className="h-8 w-6"
                                                strokeWidth={1.6}
                                            />
                                        </span>

                                        <p
                                            className="
                                                text-[15px]
                                                font-semibold
                                                leading-[1.35]
                                                tracking-[-0.01em]
                                                text-(--solution-section-different-box-left-point-text)
                                            "
                                        >
                                            {oldItem.desktopText}
                                        </p>
                                    </div>

                                    {/* Transformation arrow */}
                                    <div
                                        className="
                                            flex
                                            items-center
                                            justify-center
                                        "
                                    >
                                        <span
                                            className="
                                                flex
                                                h-11
                                                w-11
                                                items-center
                                                justify-center
                                                rounded-full
                                                border
                                                border-(--solution-section-different-box-arrow-box-border)
                                                bg-(--solution-section-different-box-arrow-box-bg)
                                                text-(--solution-section-different-box-arrow-bg)
                                            "
                                        >
                                            <ArrowRight
                                                aria-hidden="true"
                                                className="h-8 w-5"
                                                strokeWidth={1.7}
                                            />
                                        </span>
                                    </div>

                                    {/* InterviewCall model row */}
                                    <div
                                        className="
                                            flex
                                            min-h-[64px]
                                            items-center
                                            gap-4
                                            rounded-lg
                                            border
                                            border-(--solution-section-different-box-right-point-border)
                                            bg-(--solution-section-different-box-right-point-bg)
                                            px-4
                                            py-3
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
                                                border-(--solution-section-different-box-right-point-border)
                                                bg-(--solution-section-feature-icon-bg)
                                                text-(--solution-section-different-box-right-point-icon)
                                            "
                                        >
                                            <NewIcon
                                                aria-hidden="true"
                                                className="h-6 w-6"
                                                strokeWidth={1.7}
                                            />
                                        </span>

                                        <p
                                            className="
                                                text-[15px]
                                                font-semibold
                                                leading-[1.35]
                                                tracking-[-0.01em]
                                                text-(--solution-section-different-box-right-point-text)
                                            "
                                        >
                                            {newItem.desktopText}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Transformation footer */}
                    <div
                        className="
                            mt-3
                            flex
                            items-center
                            justify-center
                            gap-4
                            text-[10px]
                            font-semibold
                            uppercase
                            leading-[1.3]
                            tracking-[0.1em]
                        "
                    >
                        <span className="text-(--solution-section-different-box-footer-from-text)">
                            From Passive Content
                        </span>

                        <ArrowRight
                            aria-hidden="true"
                            className="
                                h-5
                                w-5
                                text-(--solution-section-different-box-footer-from-arrow)
                            "
                            strokeWidth={1.8}
                        />

                        <span className="text-(--solution-section-different-box-footer-to-text)">
                            Reviewed Engineering Work
                        </span>
                    </div>
                </div>

                {/* =====================================================
                    MOBILE AND TABLET COMPARISON
                ====================================================== */}
                <div className="mt-8 lg:hidden">
                    {/* Old course card */}
                    <article
                        className="
                            border
                            border-(--solution-section-different-box-left-point-border)
                            bg-[#051024]
                            px-5
                            py-5
                            sm:px-7
                            sm:py-7
                        "
                    >
                        <h3
                            className="
                                text-[20px]
                                font-semibold
                                text-(--solution-section-different-box-left-title)
                                sm:text-[23px]
                            "
                        >
                            Old Course Model
                        </h3>

                        <div className="mt-4">
                            {oldCourseItems.map((item, index) => (
                                <div
                                    key={item.mobileText}
                                    className={`
                                        flex
                                        items-center
                                        gap-4
                                        py-3
                                        ${
                                            index <
                                            oldCourseItems.length - 1
                                                ? 'border-b border-(--solution-section-different-box-divider)'
                                                : ''
                                        }
                                    `}
                                >
                                    <span
                                        className="
                                            flex
                                            h-9
                                            w-9
                                            shrink-0
                                            items-center
                                            justify-center
                                            rounded-full
                                            bg-[#151F37]
                                            text-white
                                        "
                                    >
                                        <X
                                            aria-hidden="true"
                                            className="h-5 w-5"
                                            strokeWidth={2}
                                        />
                                    </span>

                                    <p
                                        className="
                                            text-[16px]
                                            leading-[1.4]
                                            text-(--solution-section-different-box-left-point-text)
                                            sm:text-[18px]
                                        "
                                    >
                                        {item.mobileText}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </article>

                    {/* Vertical transformation */}
                    <div
                        className="
                            flex
                            flex-col
                            items-center
                            justify-center
                            py-6
                            text-center
                        "
                    >
                        <p
                            className="
                                text-[15px]
                                font-semibold
                                text-(--solution-section-different-box-left-title)
                            "
                        >
                            From passive content
                        </p>

                        <span
                            className="
                                my-4
                                flex
                                h-10
                                w-10
                                items-center
                                justify-center
                                rounded-full
                                bg-[#00196F]
                                text-white
                            "
                        >
                            <ArrowDown
                                aria-hidden="true"
                                className="h-6 w-6"
                                strokeWidth={1.8}
                            />
                        </span>

                        <p
                            className="
                                text-[15px]
                                font-semibold
                                text-(--solution-section-different-box-footer-to-text)
                            "
                        >
                            Reviewed engineering work
                        </p>
                    </div>

                    {/* InterviewCall card */}
                    <article
                        className="
                            border
                            border-(--solution-section-different-box-right-point-border)
                            bg-[#051024]
                            px-5
                            py-5
                            sm:px-7
                            sm:py-7
                        "
                    >
                        <h3
                            className="
                                text-[20px]
                                font-semibold
                                text-(--solution-section-different-box-right-title)
                                sm:text-[23px]
                            "
                        >
                            InterviewCall Model
                        </h3>

                        <div className="mt-4">
                            {interviewCallItems.map((item, index) => (
                                <div
                                    key={item.mobileText}
                                    className={`
                                        flex
                                        items-center
                                        gap-4
                                        py-3
                                        ${
                                            index <
                                            interviewCallItems.length - 1
                                                ? 'border-b border-(--solution-section-different-box-divider)'
                                                : ''
                                        }
                                    `}
                                >
                                    <span
                                        className="
                                            flex
                                            h-9
                                            w-9
                                            shrink-0
                                            items-center
                                            justify-center
                                            rounded-full
                                            bg-[#002488]
                                            text-white
                                        "
                                    >
                                        <Check
                                            aria-hidden="true"
                                            className="h-5 w-5"
                                            strokeWidth={2}
                                        />
                                    </span>

                                    <p
                                        className="
                                            text-[16px]
                                            leading-[1.4]
                                            text-(--solution-section-different-box-right-point-text)
                                            sm:text-[18px]
                                        "
                                    >
                                        {item.mobileText}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </article>
                </div>

                {/* =====================================================
                    CAPABILITY PILLARS — DESKTOP
                ====================================================== */}
                <div
                    className="
                        mt-3
                        hidden
                        grid-cols-3
                        gap-3
                        lg:grid
                    "
                >
                    {capabilities.map((capability) => {
                        const Icon = capability.icon;

                        return (
                            <article
                                key={capability.title}
                                className="
                                    flex
                                    min-h-[88px]
                                    items-center
                                    gap-4
                                    rounded-lg
                                    border
                                    border-(--solution-section-different-box-border)
                                    bg-(--solution-section-different-box-bg)
                                    px-4
                                    py-4
                                "
                            >
                                <Icon
                                    aria-hidden="true"
                                    className="
                                        h-11
                                        w-11
                                        shrink-0
                                        text-(--solution-section-feature-icon-color)
                                    "
                                    strokeWidth={1.5}
                                />

                                <div>
                                    <h3
                                        className="
                                            text-[17px]
                                            font-semibold
                                            text-(--solution-section-feature-title)
                                            tracking-[2%]
                                            leading-[1.35]
                                        "
                                    >
                                        {capability.title}
                                    </h3>

                                    <p
                                        className="
                                            mt-1
                                            text-[13px]
                                            leading-[1.4]
                                            text-(--solution-section-feature-text)
                                            tracking-[-1%]
                                        "
                                    >
                                        {capability.desktopDescription.map(
                                            (line) => (
                                                <span
                                                    key={line}
                                                    className="block"
                                                >
                                                    {line}
                                                </span>
                                            ),
                                        )}
                                    </p>
                                </div>
                            </article>
                        );
                    })}
                </div>

                {/* =====================================================
                    CAPABILITY PILLARS — MOBILE AND TABLET
                ====================================================== */}
                <div
                    className="
                        mt-4
                        border
                        border-(--solution-section-different-box-border)
                        bg-[#051024]
                        px-5
                        lg:hidden
                    "
                >
                    {capabilities.map((capability, index) => {
                        const Icon = capability.icon;

                        return (
                            <article
                                key={capability.title}
                                className={`
                                    grid
                                    grid-cols-[44px_minmax(90px,auto)_minmax(0,1fr)_20px]
                                    items-center
                                    gap-3
                                    py-4
                                    ${
                                        index < capabilities.length - 1
                                            ? 'border-b border-(--solution-section-different-box-divider)'
                                            : ''
                                    }
                                `}
                            >
                                <Icon
                                    aria-hidden="true"
                                    className="
                                        h-9
                                        w-9
                                        text-(--solution-section-feature-icon-color)
                                    "
                                    strokeWidth={1.5}
                                />

                                <h3
                                    className="
                                        text-[16px]
                                        font-medium
                                        text-(--solution-section-feature-title)
                                        tracking-[-3%]
                                        leading-none
                                    "
                                >
                                    {capability.title}
                                </h3>

                                <p
                                    className="
                                        text-[13px]
                                        leading-[1.39]
                                        tracking-normal
                                        text-(--solution-section-feature-text)
                                        sm:text-[15px]
                                    "
                                >
                                    {capability.mobileDescription}
                                </p>

                                <ChevronRight
                                    aria-hidden="true"
                                    className="
                                        h-5
                                        w-5
                                        text-(--solution-section-feature-text)
                                    "
                                    strokeWidth={1.5}
                                />
                            </article>
                        );
                    })}
                </div>

                {/* =====================================================
                    FINAL TRANSFORMATION CTA
                ====================================================== */}
                <div
                    className="
                        mt-3
                        border
                        border-(--solution-section-different-box-border)
                        bg-(--solution-section-different-box-bg)
                        max-lg:bg-[#051024]
                        p-3
                        sm:p-4
                        lg:grid
                        lg:grid-cols-[minmax(0,1fr)_300px]
                        lg:items-center
                        lg:gap-4
                        lg:rounded-lg
                        lg:px-4
                        lg:py-4
                        xl:grid-cols-[minmax(0,1fr)_320px]
                        xl:gap-5
                        xl:px-5
                    "
                >
                    <div
                        className="
                            flex
                            items-start
                            gap-3
                            lg:items-center
                            lg:gap-4
                        "
                    >
                        {/* Mobile icon */}
                        <Sparkles
                            aria-hidden="true"
                            className="
                                mt-1
                                h-9
                                w-9
                                shrink-0
                                text-(--solution-section-feature-icon-color)
                                lg:hidden
                                sm:h-10
                                sm:w-10
                            "
                            strokeWidth={1.5}
                        />

                        {/* Desktop icon */}
                        <ShieldCheck
                            aria-hidden="true"
                            className="
                                hidden
                                h-11
                                w-11
                                shrink-0
                                text-(--solution-section-feature-icon-color)
                                lg:block
                            "
                            strokeWidth={1.5}
                        />

                        <div
                            className="
                                lg:border-l
                                lg:border-(--solution-section-different-box-divider)
                                lg:pl-4
                                xl:pl-5
                            "
                        >
                            <h3
                                className="
                                    text-[17px]
                                    font-semibold
                                    leading-[1.2]
                                    text-(--solution-section-title-text)
                                    tracking-normal
                                    lg:text-[17px]
                                    xl:text-[18px]
                                "
                            >
                                AI can write code.
                            </h3>

                            <p
                                className="
                                    mt-1
                                    text-[13px]
                                    font-medium
                                    leading-[1.4]
                                    text-(--solution-section-title-text-end)
                                    tracking-normal
                                    lg:max-w-155
                                    lg:text-[13px]
                                    xl:max-w-160
                                    xl:text-[14px]
                                "
                            >
                                It still can&apos;t tell you whether the
                                decision behind it was right.
                            </p>
                        </div>
                    </div>

                    <Link
                        href="#career-path"
                        className="
                            group
                            mt-4
                            inline-flex
                            min-h-11
                            w-full
                            items-center
                            justify-center
                            gap-2
                            rounded-[7px]
                            bg-(--solution-section-button-bg)
                            px-4
                            text-center
                            text-[13px]
                            font-medium
                            text-(--solution-section-button-text)
                            transition-all
                            duration-200
                            hover:-translate-y-0.5
                            hover:bg-(--solution-section-button-hover-bg)
                            focus-visible:outline-none
                            focus-visible:ring-4
                            focus-visible:ring-(--focus-ring-color)
                            sm:mt-0
                            sm:min-h-12
                            sm:text-[14px]
                            lg:mt-0
                            lg:min-h-12
                            lg:text-[14px]
                            xl:min-h-13
                            xl:text-[15px]
                        "
                    >
                        <span>See How the Program Works</span>

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
                            strokeWidth={1.8}
                        />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default SolutionSection;
