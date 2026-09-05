import {
    ArrowRight,
    BookOpen,
    Briefcase,
    CheckCircle2,
    ClipboardCheck,
    Code2,
    Download,
    CalendarDays,
    FlaskConical,
    type LucideIcon,
    Mic,
    MonitorPlay,
    PlayCircle,
    Route,
    Settings,
    Star,
    Target,
    TrendingUp,
    Trophy,
    UserCheck,
} from 'lucide-react';
import Link from 'next/link';
import { FC } from 'react';

interface GuidedStep {
    id: string;
    title: string;
    desktopDescription: string;
    mobileDescription: string;
    icon: LucideIcon;
    desktopItems: {
        label: string;
        icon: LucideIcon;
    }[];
    mobileIncludes: string;
}

interface OperatingSystemItem {
    label: string;
    icon: LucideIcon;
}

const guidedSteps: GuidedStep[] = [
    {
        id: '01',
        title: 'Diagnose Readiness',
        desktopDescription:
            'An assessment across fundamentals, AI workflow habits, and how you currently interview.',
        mobileDescription:
            "An assessment of where you're starting from.",
        icon: ClipboardCheck,
        desktopItems: [
            {
                label: 'AI-Proof Score',
                icon: TrendingUp,
            },
            {
                label: 'Track Recommendation',
                icon: Target,
            },
            {
                label: 'Readiness Map',
                icon: BookOpen,
            },
        ],
        mobileIncludes: 'Score • Track • Readiness Map',
    },
    {
        id: '02',
        title: 'Build With Specialists',
        desktopDescription:
            'Live sessions with mentors who each focus on one part of the curriculum.',
        mobileDescription: 'Live sessions with focused mentors.',
        icon: MonitorPlay,
        desktopItems: [
            {
                label: 'Live Classes',
                icon: MonitorPlay,
            },
            {
                label: 'Specialist Mentors',
                icon: UserCheck,
            },
            {
                label: 'Structured Curriculum',
                icon: BookOpen,
            },
        ],
        mobileIncludes: 'Live Classes • Mentors • Curriculum',
    },
    {
        id: '03',
        title: 'Practice With Feedback',
        desktopDescription:
            'Labs, assignments, and mock interviews, each one reviewed by a mentor.',
        mobileDescription: 'Labs and mocks, each reviewed.',
        icon: Code2,
        desktopItems: [
            {
                label: 'Labs',
                icon: FlaskConical,
            },
            {
                label: 'Assignments',
                icon: ClipboardCheck,
            },
            {
                label: 'Reviews',
                icon: Star,
            },
            {
                label: 'Mocks',
                icon: Mic,
            },
        ],
        mobileIncludes: 'Labs • Assignments • Reviews • Mocks',
    },
    {
        id: '04',
        title: 'Prove With Capstone',
        desktopDescription:
            "A capstone you build over the final phase and walk a mentor through before you're done.",
        mobileDescription: 'A capstone you walk a mentor through.',
        icon: Trophy,
        desktopItems: [
            {
                label: 'Capstone',
                icon: Briefcase,
            },
            {
                label: 'Profile Review',
                icon: UserCheck,
            },
            {
                label: 'Career Readiness',
                icon: TrendingUp,
            },
        ],
        mobileIncludes: 'Capstone • Profile Review • Career Readiness',
    },
];

const operatingSystemItems: OperatingSystemItem[] = [
    {
        label: 'Assessment',
        icon: ClipboardCheck,
    },
    {
        label: 'Live Classes',
        icon: MonitorPlay,
    },
    {
        label: 'Labs',
        icon: Code2,
    },
    {
        label: 'Reviews',
        icon: Star,
    },
    {
        label: 'Mocks',
        icon: Mic,
    },
    {
        label: 'Capstone',
        icon: Trophy,
    },
    {
        label: 'Career Readiness',
        icon: UserCheck,
    },
];

const GuidedSystemSection: FC = () => {
    return (
        <section
            id="guided-system"
            className="
                scroll-mt-25
                bg-(--guided-system-section-bg)
                px-4
                py-12
                sm:px-6
                sm:py-14
                lg:px-8
                lg:py-16
                xl:px-12
            "
        >
            <div className="mx-auto w-full max-w-370">
                {/* Header */}
                <header className="mx-auto max-w-[900px] text-center">
                    <div
                        className="
                            mx-auto
                            flex
                            w-fit
                            min-h-10
                            items-center
                            justify-center
                            gap-2.5
                            rounded-full
                            border
                            border-[#AFC7FF]
                            bg-[#EEF4FF]
                            px-6
                            text-[clamp(0.875rem,1.1vw,1.0625rem)]
                            font-semibold
                            uppercase
                            tracking-[0.015em]
                            text-[#0757F5]
                            shadow-[0_7px_14px_rgba(1,17,57,0.18)]
                            ring-1
                            ring-[#a9c3fc]
                        "
                    >
                        <PlayCircle
                            aria-hidden="true"
                            className="h-5 w-5"
                            strokeWidth={2}
                        />

                        <span>How It Works</span>
                    </div>

                    <h2
                        className="
                            mt-5
                            text-[clamp(1.75rem,5vw,3.125rem)]
                            font-[800]
                            leading-[1.08]
                            tracking-[-0.035em]
                            text-[#0B1B3F]
                            sm:text-[50px]
                            lg:text-[58px]
                        "
                    >
                        <span>
                            How You&apos;ll Move{' '}
                            <span className="text-[#0052FF]">
                                Through It
                            </span>
                        </span>
                    </h2>

                    <p
                        className="
                            mx-auto
                            mt-5
                            max-w-[820px]
                            text-[17px]
                            font-semibold
                            leading-[1.45]
                            tracking-[-0.02em]
                            text-(--guided-system-section-subtitle-text)
                            sm:text-[19px]
                            lg:text-[21px]
                        "
                    >
                        Every learner goes through the same four stages, in
                        the same order.
                    </p>
                </header>

                {/* Desktop / laptop step cards */}
                <div
                    className="
                        mt-7
                        hidden
                        gap-[48px]
                        lg:grid
                        lg:grid-cols-4
                    "
                >
                    {guidedSteps.map((step, index) => {
                        const Icon = step.icon;

                        return (
                            <article
                                key={step.id}
                                className="
                                    relative
                                    flex
                                    flex-col
                                    min-h-[392px]
                                    rounded-[18px]
                                    border
                                    border-[#D9E4FF]
                                    bg-white
                                    px-3
                                    pb-4
                                    pt-3
                                "
                            >
                                <span
                                    className="
                                        absolute
                                        left-3
                                        top-3
                                        flex
                                        h-[58px]
                                        w-[58px]
                                        items-center
                                        justify-center
                                        rounded-full
                                        border
                                        border-[#D9E4FF]
                                        bg-[#EEF4FF]
                                        text-[24px]
                                        font-semibold
                                        text-[#0757F5]
                                    "
                                >
                                    {step.id}
                                </span>

                                {index < guidedSteps.length - 1 && (
                                    <>
                                        <span
                                            aria-hidden="true"
                                            className="
                                                absolute
                                                -right-[52px]
                                                top-1/2
                                                z-10
                                                hidden
                                                h-px
                                                w-[52px]
                                                border-t
                                                border-dashed
                                                border-[#8FB0FF]
                                                lg:block
                                            "
                                        />

                                        <span
                                            aria-hidden="true"
                                            className="
                                                absolute
                                                -right-[49px]
                                                top-1/2
                                                z-20
                                                hidden
                                                h-10
                                                w-10
                                                -translate-y-1/2
                                                items-center
                                                justify-center
                                                rounded-full
                                                border
                                                border-[#D9E4FF]
                                                bg-white
                                                text-[#0757F5]
                                                lg:flex
                                            "
                                        >
                                            <ArrowRight
                                                className="h-5 w-5"
                                                strokeWidth={2.2}
                                            />
                                        </span>
                                    </>
                                )}

                                <div className="flex justify-center pt-[34px]">
                                    <span
                                        className="
                                            flex
                                            h-[90px]
                                            w-[90px]
                                            items-center
                                            justify-center
                                            rounded-[14px]
                                            border
                                            border-[#D9E4FF]
                                            bg-[#F5F8FF]
                                            text-[#0757F5]
                                        "
                                    >
                                        <Icon
                                            aria-hidden="true"
                                            className="h-[52px] w-[52px]"
                                            strokeWidth={1.8}
                                        />
                                    </span>
                                </div>

                                <h3
                                    className="
                                        mt-4
                                        text-center
                                        text-[20px]
                                        font-bold
                                        leading-[1.2]
                                        tracking-[-0.02em]
                                        text-[#102454]
                                    "
                                >
                                    {step.title}
                                </h3>

                                <p
                                    className="
                                        mx-auto
                                        mt-3
                                        max-w-[270px]
                                        text-center
                                        text-[15px]
                                        font-medium
                                        leading-[1.6]
                                        text-[#465272]
                                    "
                                >
                                    {step.desktopDescription}
                                </p>

                                <div
                                    className="
                                        mt-auto
                                        grid
                                        min-h-[95px]
                                        w-full
                                        items-stretch
                                        rounded-[10px]
                                        border
                                        border-[#D5E2FF]
                                        bg-[#F7F9FE]
                                        px-1
                                        py-2
                                    "
                                    style={{
                                        gridTemplateColumns: `repeat(${step.desktopItems.length}, minmax(0, 1fr))`,
                                    }}
                                >
                                    {step.desktopItems.map(
                                        (item, itemIndex) => {
                                            const ItemIcon = item.icon;
                                            const isLast =
                                                itemIndex ===
                                                step.desktopItems.length - 1;

                                            return (
                                                <div
                                                    key={item.label}
                                                    className="
                                                        relative
                                                        flex
                                                        min-w-0
                                                        flex-col
                                                        items-center
                                                        justify-center
                                                        gap-1
                                                        px-1
                                                        text-center
                                                    "
                                                >
                                                    <ItemIcon
                                                        aria-hidden="true"
                                                        className="
                                                            h-8
                                                            w-8
                                                            shrink-0
                                                            text-[#0757F5]
                                                        "
                                                        strokeWidth={2}
                                                    />

                                                    <span
                                                        className="
                                                            w-full
                                                            break-words
                                                            text-[11px]
                                                            font-semibold
                                                            leading-[1.2]
                                                            text-[#111A35]
                                                        "
                                                    >
                                                        {item.label}
                                                    </span>

                                                    {!isLast && (
                                                        <span
                                                            aria-hidden="true"
                                                            className="
                                                                absolute
                                                                -right-[1px]
                                                                top-1/2
                                                                h-[38px]
                                                                w-px
                                                                -translate-y-1/2
                                                                bg-[#DCE7FF]
                                                            "
                                                        >
                                                            <span
                                                                className="
                                                                    absolute
                                                                    -right-[4px]
                                                                    top-1/2
                                                                    h-1.5
                                                                    w-1.5
                                                                    -translate-y-1/2
                                                                    rounded-full
                                                                    bg-[#0757F5]
                                                                "
                                                            />
                                                        </span>
                                                    )}
                                                </div>
                                            );
                                        },
                                    )}
                                </div>
                            </article>
                        );
                    })}
                </div>

                {/* Mobile / tablet timeline */}
                <div
                    className="
                        relative
                        mt-7
                        lg:hidden
                    "
                >
                    {/* Figma-style vertical timeline */}
                    <span
                        aria-hidden="true"
                        className="
                            absolute
                            left-[20px]
                            top-[20px]
                            bottom-[20px]
                            w-px
                            border-l
                            border-dotted
                            border-[#BFD2FF]
                        "
                    />

                    <div className="space-y-3">
                        {guidedSteps.map((step) => {
                            const Icon = step.icon;

                            return (
                                <article
                                    key={step.id}
                                    className="
                                        relative
                                        grid
                                        grid-cols-[40px_minmax(0,1fr)]
                                        gap-3
                                    "
                                >
                                    {/* Step number */}
                                    <div className="relative z-10 flex justify-center pt-2">
                                        <span
                                            className="
                                                flex
                                                h-10
                                                w-10
                                                shrink-0
                                                items-center
                                                justify-center
                                                rounded-full
                                                border
                                                border-[#D9E4FF]
                                                bg-[#EEF4FF]
                                                text-[15px]
                                                font-semibold
                                                text-[#0757F5]
                                            "
                                        >
                                            {step.id}
                                        </span>
                                    </div>

                                    {/* Mobile card */}
                                    <div
                                        className="
                                            min-w-0
                                            rounded-[12px]
                                            border
                                            border-[#D9E4FF]
                                            bg-white
                                            px-3
                                            py-3
                                        "
                                    >
                                        {/* Main content */}
                                        <div
                                            className="
                                                grid
                                                grid-cols-[48px_minmax(0,1fr)]
                                                items-center
                                                gap-3
                                            "
                                        >
                                            {/* Icon */}
                                            <span
                                                className="
                                                    flex
                                                    h-12
                                                    w-12
                                                    shrink-0
                                                    items-center
                                                    justify-center
                                                    rounded-[9px]
                                                    border
                                                    border-[#D9E4FF]
                                                    bg-[#F5F8FF]
                                                    text-[#0757F5]
                                                "
                                            >
                                                <Icon
                                                    aria-hidden="true"
                                                    className="h-7 w-7"
                                                    strokeWidth={1.8}
                                                />
                                            </span>

                                            {/* Text */}
                                            <div className="min-w-0">
                                                <h3
                                                    className="
                                                        text-[14px]
                                                        font-bold
                                                        leading-[1.2]
                                                        tracking-[-0.02em]
                                                        text-[#102454]
                                                    "
                                                >
                                                    {step.title}
                                                </h3>

                                                <p
                                                    className="
                                                        mt-1
                                                        text-[11px]
                                                        font-medium
                                                        leading-[1.4]
                                                        text-[#465272]
                                                    "
                                                >
                                                    {step.mobileDescription}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Includes bar */}
                                        <div
                                            className="
                                                mt-2.5
                                                flex
                                                min-h-[27px]
                                                items-center
                                                rounded-[6px]
                                                border
                                                border-[#E0E9FF]
                                                bg-[#F7F9FE]
                                                px-2
                                            "
                                        >
                                            <div
                                                className="
                                                    flex
                                                    min-w-0
                                                    items-center
                                                    gap-1.5
                                                    text-[10px]
                                                    font-medium
                                                    leading-[1.25]
                                                    text-[#465272]
                                                "
                                            >
                                                <CheckCircle2
                                                    aria-hidden="true"
                                                    className="
                                                        h-3.5
                                                        w-3.5
                                                        shrink-0
                                                        text-[#0757F5]
                                                    "
                                                    strokeWidth={1.8}
                                                />

                                                <span className="min-w-0">
                                                    Includes:{' '}
                                                    {step.mobileIncludes}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>

                {/* Desktop operating system strip */}
                <div
                    className="
                        mt-7
                        hidden
                        min-h-[152px]
                        rounded-[10px]
                        border
                        border-[#D5E2FF]
                        bg-[#F7F9FE]
                        px-5
                        py-4
                        lg:grid
                        lg:grid-cols-[350px_minmax(0,1fr)]
                        xl:grid-cols-[370px_minmax(0,1fr)]
                    "
                >
                    <div className="flex items-center gap-5">
                        <span
                            className="
                                flex
                                h-20
                                w-20
                                shrink-0
                                items-center
                                justify-center
                                rounded-[14px]
                                bg-[#0757F5]
                                text-white
                            "
                        >
                            <Settings
                                aria-hidden="true"
                                className="h-11 w-11"
                                strokeWidth={1.7}
                            />
                        </span>

                        <div>
                            <h3
                                className="
                                    text-[20px]
                                    font-bold
                                    leading-tight
                                    text-[#102454]
                                "
                            >
                                The InterviewCall
                                <span className="block text-(--guided-system-step-icon)">
                                    Operating System
                                </span>
                            </h3>

                            <p
                                className="
                                    mt-2
                                    max-w-[220px]
                                    text-[15px]
                                    font-medium
                                    leading-[1.4]
                                    text-[#465272]
                                "
                            >
                                A continuous cycle of improvement and readiness.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start">
                        {operatingSystemItems.map((item, index) => {
                            const Icon = item.icon;
                            const isLast =
                                index === operatingSystemItems.length - 1;

                            return (
                                <div
                                    key={item.label}
                                    className={`
                                        flex
                                        items-start
                                        gap-2
                                        ${isLast ? '' : 'flex-1'}
                                    `}
                                >
                                    <div className="flex w-[86px] shrink-0 flex-col items-center text-center">
                                        <span
                                            className="
                                                flex
                                                h-[72px]
                                                w-[72px]
                                                shrink-0
                                                items-center
                                                justify-center
                                                rounded-full
                                                border
                                                border-[#D9E4FF]
                                                bg-white
                                                text-[#0757F5]
                                            "
                                        >
                                            <Icon
                                                aria-hidden="true"
                                                className="h-9 w-9"
                                                strokeWidth={1.8}
                                            />
                                        </span>

                                        <span
                                            className="
                                                mt-2
                                                text-[12px]
                                                font-semibold
                                                leading-[1.25]
                                                text-[#102454]
                                            "
                                        >
                                            {item.label}
                                        </span>
                                    </div>

                                    {!isLast && (
                                        <span
                                            aria-hidden="true"
                                            className="
                                                relative
                                                mt-9
                                                h-px
                                                min-w-5
                                                flex-1
                                                border-t-2
                                                border-dashed
                                                border-[#0757F5]
                                                after:absolute
                                                after:-right-[2px]
                                                after:-top-[4px]
                                                after:h-0
                                                after:w-0
                                                after:content-['']
                                                after:border-y-[4px]
                                                after:border-y-transparent
                                                after:border-l-[6px]
                                                after:border-l-[#0757F5]
                                            "
                                        />
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Mobile operating flow */}
                <div
                    className="
                        mt-4
                        flex
                        items-start
                        gap-3
                        rounded-[10px]
                        border
                        border-[#D9E4FF]
                        bg-[#F7F9FE]
                        px-3
                        py-3
                        lg:hidden
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
                            bg-white
                            text-(--guided-system-step-icon)
                        "
                    >
                        <Route
                            aria-hidden="true"
                            className="h-6 w-6"
                            strokeWidth={1.6}
                        />
                    </span>

                    <p
                        className="
                            pt-0.5
                            text-[12px]
                            font-medium
                            leading-[1.55]
                            text-(--guided-system-step-title)
                        "
                    >
                        Assessment{' '}
                        <span className="text-(--guided-system-step-icon)">
                            →
                        </span>{' '}
                        Live Classes{' '}
                        <span className="text-(--guided-system-step-icon)">
                            →
                        </span>{' '}
                        Labs{' '}
                        <span className="text-(--guided-system-step-icon)">
                            →
                        </span>{' '}
                        Reviews{' '}
                        <span className="text-(--guided-system-step-icon)">
                            →
                        </span>{' '}
                        Mocks{' '}
                        <span className="text-(--guided-system-step-icon)">
                            →
                        </span>{' '}
                        Capstone{' '}
                        <span className="text-(--guided-system-step-icon)">
                            →
                        </span>{' '}
                        Career Readiness
                    </p>
                </div>

                {/* CTA buttons */}
                <div
                    className="
                        mx-auto
                        mt-5
                        grid
                        max-w-[735px]
                        gap-2.5
                        lg:mt-6
                        lg:grid-cols-[1.2fr_1fr]
                        lg:gap-6
                    "
                >
                    <Link
                        href="#curriculum"
                        className="
                            group
                            inline-flex
                            min-h-12
                            w-full
                            items-center
                            justify-center
                            gap-2.5
                            rounded-lg
                            bg-(--button-primary-bg)
                            px-4
                            text-center
                            text-[14px]
                            font-medium
                            text-white
                            transition-all
                            duration-200
                            hover:-translate-y-0.5
                            hover:bg-(--button-primary-bg-hover)
                            focus-visible:outline-none
                            focus-visible:ring-4
                            focus-visible:ring-(--focus-ring-color)
                            lg:min-h-16
                            lg:gap-4
                            lg:px-6
                            lg:text-[15px]
                        "
                    >
                        <Download
                            aria-hidden="true"
                            className="h-5 w-5 lg:h-7 lg:w-7"
                            strokeWidth={1.9}
                        />

                        <span>Download Curriculum</span>
                    </Link>

                    <a
                        href="/documents/ai-engineering-curriculum.pdf"
                        download
                        className="
                            group
                            inline-flex
                            min-h-12
                            w-full
                            items-center
                            justify-center
                            gap-2.5
                            rounded-lg
                            border
                            border-(--guided-system-step-border)
                            bg-white
                            px-4
                            text-center
                            text-[14px]
                            font-semibold
                            text-(--guided-system-step-icon)
                            transition-all
                            duration-200
                            hover:-translate-y-0.5
                            hover:bg-(--guided-system-tool-bar-bg)
                            focus-visible:outline-none
                            focus-visible:ring-4
                            focus-visible:ring-(--focus-ring-color)
                            lg:min-h-16
                            lg:gap-4
                            lg:border
                            lg:px-6
                            lg:text-[15px]
                        "
                    >
                        <CalendarDays
                            aria-hidden="true"
                            className="h-5 w-5"
                            strokeWidth={1.8}
                    />

                        <span>Book a Track Counselling Call</span>

                        {/* <ArrowRight
                            aria-hidden="true"
                            className="
                                h-5
                                w-5
                                lg:hidden
                            "
                            strokeWidth={1.8}
                        /> */}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default GuidedSystemSection;