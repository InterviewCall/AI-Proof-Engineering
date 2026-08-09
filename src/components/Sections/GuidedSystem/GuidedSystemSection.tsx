import {
    ArrowRight,
    BookOpen,
    Briefcase,
    CheckCircle2,
    ClipboardCheck,
    Code2,
    Download,
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
            'Start with a baseline across fundamentals, system design, AI workflows, and interview communication.',
        mobileDescription:
            'Start with a baseline across skills, AI workflows, and interview readiness.',
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
            'Learn through live sessions and guided modules across DSA, backend, system design, AI-assisted engineering, and career readiness.',
        mobileDescription:
            'Learn through live sessions and guided modules with specialist mentors.',
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
            'Complete labs, assignments, debugging tasks, mock interviews, reviews, and mentor feedback loops.',
        mobileDescription:
            'Complete labs, assignments, reviews, and mock interviews.',
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
            'Build portfolio-ready proof, complete readiness reviews, and prepare for serious technical interview expectations.',
        mobileDescription:
            'Build portfolio-ready proof and complete readiness reviews.',
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
                            mx-auto
                            inline-flex
                            min-h-10
                            items-center
                            justify-center
                            gap-3
                            rounded-full
                            border
                            border-(--guided-system-section-eyebrow-text)
                            bg-(--guided-system-section-eyebrow-bg)
                            px-6
                            text-[16px]
                            font-semibold
                            uppercase
                            tracking-[-2%]
                            leading-[1.58]
                            text-(--guided-system-section-eyebrow-text)
                            sm:text-[20px]
                            lg:text-[20px]
                        "
                    >
                        <PlayCircle
                            aria-hidden="true"
                            className="h-5 w-5"
                            strokeWidth={1.8}
                        />

                        <span>How InterviewCall Works</span>
                    </div>

                    <h2
                        className="
                            mt-5
                            text-[clamp(3rem,10vw,4.5rem)]
                            font-bold
                            leading-[1.03]
                            tracking-[-2%]
                            text-(--guided-system-section-title-text)
                            lg:text-[clamp(4rem,5.4vw,4.2rem)]
                        "
                    >
                        <span className="hidden lg:inline">
                            A Guided System From
                            <span className="block">
                                Diagnosis to{' '}
                                <span className="text-(--guided-system-section-title-highlight)">
                                    Capstone Proof
                                </span>
                            </span>
                        </span>

                        <span className="lg:hidden">
                            From Diagnosis to
                            <span className="block text-(--guided-system-section-title-highlight)">
                                Capstone Proof
                            </span>
                        </span>
                    </h2>

                    <p
                        className="
                            mx-auto
                            mt-5
                            max-w-212.5
                            text-[20px]
                            font-semibold
                            leading-[1.32]
                            text-(--guided-system-section-subtitle-text)
                            lg:text-[22px]
                        "
                    >
                        <span className="hidden lg:inline">
                            Every learner moves through a structured cycle of
                            assessment, live learning, labs, reviews, mock
                            interviews, and portfolio-backed proof.
                        </span>

                        <span className="lg:hidden">
                            A structured cycle of assessment, live learning,
                            labs, reviews, mocks, and portfolio-backed proof.
                        </span>
                    </p>
                </header>

                {/* Desktop / laptop step cards */}
                <div
                    className="
                        mt-8
                        hidden
                        gap-5
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
                                    min-h-87.5
                                    rounded-[18px]
                                    border
                                    border-(--guided-system-step-border)
                                    bg-(--guided-system-step-bg)
                                    px-4
                                    pb-4
                                    pt-4
                                "
                            >
                                <span
                                    className="
                                        absolute
                                        left-4
                                        top-4
                                        flex
                                        h-13.5
                                        w-13.5
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-(--guided-system-step-number-bg)
                                        text-[24px]
                                        font-semibold
                                        text-(--guided-system-step-number-text)
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
                                                -right-7.5
                                                top-1/2
                                                z-10
                                                hidden
                                                h-px
                                                w-11
                                                border-t
                                                border-dashed
                                                border-(--guided-system-step-connector)
                                                lg:block
                                            "
                                        />

                                        <span
                                            aria-hidden="true"
                                            className="
                                                absolute
                                                -right-10.5
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
                                                border-(--guided-system-step-border)
                                                bg-white
                                                text-(--guided-system-step-icon)
                                                lg:flex
                                            "
                                        >
                                            <ArrowRight
                                                className="h-5 w-5"
                                                strokeWidth={1.8}
                                            />
                                        </span>
                                    </>
                                )}

                                <div className="flex justify-center pt-6">
                                    <span
                                        className="
                                            flex
                                            h-20.5
                                            w-20.5
                                            items-center
                                            justify-center
                                            rounded-[14px]
                                            border
                                            border-(--guided-system-step-border)
                                            bg-(--guided-system-step-number-bg)
                                            text-(--guided-system-step-icon)
                                        "
                                    >
                                        <Icon
                                            aria-hidden="true"
                                            className="h-12 w-12"
                                            strokeWidth={1.7}
                                        />
                                    </span>
                                </div>

                                <h3
                                    className="
                                        mt-5
                                        text-center
                                        text-[20px]
                                        font-bold
                                        leading-tight
                                        text-(--guided-system-step-title)
                                    "
                                >
                                    {step.title}
                                </h3>

                                <p
                                    className="
                                        mx-auto
                                        mt-4
                                        max-w-67.5
                                        text-center
                                        text-[15px]
                                        font-medium
                                        leading-[1.6]
                                        text-(--guided-system-step-text)
                                    "
                                >
                                    {step.desktopDescription}
                                </p>

                                <div
                                    className="
                                        mt-6
                                        grid
                                        min-h-17
                                        items-center
                                        rounded-lg
                                        border
                                        border-(--guided-system-step-border)
                                        bg-(--guided-system-tool-bar-bg)
                                        px-2
                                    "
                                    style={{
                                        gridTemplateColumns: `repeat(${step.desktopItems.length}, minmax(0, 1fr))`,
                                    }}
                                >
                                    {step.desktopItems.map(
                                        (item, itemIndex) => {
                                            const ItemIcon = item.icon;

                                            return (
                                                <div
                                                    key={item.label}
                                                    className={`
                                                        flex
                                                        h-full
                                                        flex-col
                                                        items-center
                                                        justify-center
                                                        gap-1
                                                        px-2
                                                        text-center
                                                        ${
                                                            itemIndex <
                                                            step.desktopItems
                                                                .length -
                                                                1
                                                                ? 'border-r border-(--guided-system-tool-bar-border)'
                                                                : ''
                                                        }
                                                    `}
                                                >
                                                    <ItemIcon
                                                        aria-hidden="true"
                                                        className="
                                                            h-6
                                                            w-6
                                                            text-(--guided-system-tool-icon)
                                                        "
                                                        strokeWidth={1.8}
                                                    />

                                                    <span
                                                        className="
                                                            text-[11px]
                                                            font-semibold
                                                            leading-[1.15]
                                                            text-(--guided-system-tool-text)
                                                        "
                                                    >
                                                        {item.label}
                                                    </span>
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
                <div className="relative mt-8 lg:hidden">
                    <span
                        aria-hidden="true"
                        className="
                            absolute
                            left-8.75
                            top-8
                            bottom-8
                            w-px
                            border-l
                            border-dotted
                            border-(--guided-system-step-connector)
                        "
                    />

                    <div className="space-y-4">
                        {guidedSteps.map((step) => {
                            const Icon = step.icon;

                            return (
                                <article
                                    key={step.id}
                                    className="
                                        relative
                                        grid
                                        grid-cols-[70px_minmax(0,1fr)]
                                        gap-0
                                    "
                                >
                                    <div className="relative z-10 pt-3">
                                        <span
                                            className="
                                                flex
                                                h-16
                                                w-16
                                                items-center
                                                justify-center
                                                rounded-full
                                                bg-(--guided-system-step-number-bg)
                                                text-[24px]
                                                font-semibold
                                                text-(--guided-system-step-number-text)
                                            "
                                        >
                                            {step.id}
                                        </span>
                                    </div>

                                    <div
                                        className="
                                            rounded-2xl
                                            border
                                            border-(--guided-system-step-border)
                                            bg-(--guided-system-step-bg)
                                            px-6
                                            py-6
                                        "
                                    >
                                        <div
                                            className="
                                                grid
                                                grid-cols-[110px_minmax(0,1fr)]
                                                gap-5
                                                sm:grid-cols-[120px_minmax(0,1fr)]
                                            "
                                        >
                                            <span
                                                className="
                                                    flex
                                                    h-27.5
                                                    w-27.5
                                                    items-center
                                                    justify-center
                                                    rounded-2xl
                                                    border
                                                    border-(--guided-system-step-border)
                                                    bg-(--guided-system-step-number-bg)
                                                    text-(--guided-system-step-icon)
                                                "
                                            >
                                                <Icon
                                                    aria-hidden="true"
                                                    className="h-16 w-16"
                                                    strokeWidth={1.6}
                                                />
                                            </span>

                                            <div>
                                                <h3
                                                    className="
                                                        text-[25px]
                                                        font-bold
                                                        leading-[1.2]
                                                        tracking-[-0.03em]
                                                        text-(--guided-system-step-title)
                                                    "
                                                >
                                                    {step.title}
                                                </h3>

                                                <p
                                                    className="
                                                        mt-3
                                                        text-[18px]
                                                        font-semibold
                                                        leading-[1.55]
                                                        text-(--guided-system-step-text)
                                                    "
                                                >
                                                    {step.mobileDescription}
                                                </p>
                                            </div>
                                        </div>

                                        <div
                                            className="
                                                mt-6
                                                rounded-xl
                                                bg-(--guided-system-tool-bar-bg)
                                                px-5
                                                py-3
                                            "
                                        >
                                            <div
                                                className="
                                                    flex
                                                    items-start
                                                    gap-3
                                                    text-[18px]
                                                    font-medium
                                                    leading-[1.45]
                                                    text-(--guided-system-step-text)
                                                "
                                            >
                                                <CheckCircle2
                                                    aria-hidden="true"
                                                    className="
                                                        mt-1
                                                        h-6
                                                        w-6
                                                        shrink-0
                                                        text-(--guided-system-step-icon)
                                                    "
                                                    strokeWidth={1.8}
                                                />

                                                <span>
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
                        rounded-xl
                        border
                        border-(--guided-system-tool-bar-border)
                        bg-(--guided-system-tool-bar-bg)
                        px-5
                        py-4
                        lg:grid
                        lg:grid-cols-[290px_minmax(0,1fr)]
                        xl:grid-cols-[360px_minmax(0,1fr)]
                    "
                >
                    <div className="flex items-center gap-5">
                        <span
                            className="
                                flex
                                h-19
                                w-19
                                shrink-0
                                items-center
                                justify-center
                                rounded-xl
                                bg-(--button-primary-bg)
                                text-white
                            "
                        >
                            <Settings
                                aria-hidden="true"
                                className="h-12 w-12"
                                strokeWidth={1.7}
                            />
                        </span>

                        <div>
                            <h3
                                className="
                                    text-[20px]
                                    font-bold
                                    leading-tight
                                    text-(--guided-system-step-title)
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
                                    max-w-60
                                    text-[15px]
                                    font-medium
                                    leading-[1.4]
                                    text-(--guided-system-step-text)
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
                                    <div className="flex w-19.5 shrink-0 flex-col items-center text-center">
                                        <span
                                            className="
                                                flex
                                                h-15.5
                                                w-15.5
                                                shrink-0
                                                items-center
                                                justify-center
                                                rounded-full
                                                border
                                                border-(--guided-system-step-border)
                                                bg-white
                                                text-(--guided-system-step-icon)
                                            "
                                        >
                                            <Icon
                                                aria-hidden="true"
                                                className="h-9 w-9"
                                                strokeWidth={1.6}
                                            />
                                        </span>

                                        <span
                                            className="
                                                mt-2
                                                text-[12px]
                                                font-semibold
                                                leading-tight
                                                text-(--guided-system-step-title)
                                            "
                                        >
                                            {item.label}
                                        </span>
                                    </div>

                                    {!isLast && (
                                        <span
                                            aria-hidden="true"
                                            className="
                                                mt-7.75
                                                h-px
                                                min-w-4
                                                flex-1
                                                border-t
                                                border-dashed
                                                border-(--guided-system-step-connector)
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
                        mt-5
                        flex
                        items-center
                        gap-5
                        rounded-[14px]
                        border
                        border-(--guided-system-tool-bar-border)
                        bg-(--guided-system-tool-bar-bg)
                        px-5
                        py-4
                        lg:hidden
                    "
                >
                    <span
                        className="
                            flex
                            h-20
                            w-20
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
                            className="h-12 w-12"
                            strokeWidth={1.6}
                        />
                    </span>

                    <p
                        className="
                            text-[22px]
                            font-medium
                            leading-[1.55]
                            text-(--guided-system-step-title)
                        "
                    >
                        Assessment{' '}
                        <span className="text-(--guided-system-step-icon)">
                            →
                        </span>{' '}
                        Classes{' '}
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
                        Capstone
                    </p>
                </div>

                {/* CTA buttons */}
                <div
                    className="
                        mx-auto
                        mt-6
                        grid
                        max-w-180
                        gap-3
                        lg:mt-7
                        lg:max-w-175
                        lg:grid-cols-[1.2fr_1fr]
                        lg:gap-6
                    "
                >
                    <Link
                        href="#curriculum"
                        className="
                            group
                            inline-flex
                            min-h-17.5
                            w-full
                            items-center
                            justify-center
                            gap-4
                            rounded-lg
                            bg-(--button-primary-bg)
                            px-6
                            text-center
                            text-[22px]
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
                            lg:text-[20px]
                        "
                    >
                        <PlayCircle
                            aria-hidden="true"
                            className="h-7 w-7"
                            strokeWidth={1.8}
                        />

                        <span>Explore Program Structure</span>
                    </Link>

                    <a
                        href="/documents/ai-engineering-curriculum.pdf"
                        download
                        className="
                            group
                            inline-flex
                            min-h-14
                            w-full
                            items-center
                            justify-center
                            gap-4
                            rounded-lg
                            bg-white
                            px-6
                            text-center
                            text-[21px]
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
                            lg:border
                            lg:border-(--guided-system-step-border)
                            lg:text-[20px]
                        "
                    >
                        <Download
                            aria-hidden="true"
                            className="
                                hidden
                                h-5
                                w-5
                                lg:block
                            "
                            strokeWidth={1.8}
                        />

                        <span>Download Curriculum</span>

                        <ArrowRight
                            aria-hidden="true"
                            className="
                                h-6
                                w-6
                                lg:hidden
                            "
                            strokeWidth={1.8}
                        />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default GuidedSystemSection;