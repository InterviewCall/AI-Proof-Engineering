import {
    ClipboardCheck,
    Code2,
    FolderClosed,
    Layers,
    MessageSquare,
    MessageSquareCode,
    Network,
    Sparkles,
    TrendingUp,
    UserRound,
} from 'lucide-react';

import {
    type MentorshipSystemPoint,
    type MobileFeatureStripItem,
    type MobileSpecialist,
    type Specialist,
    type SpecialistFeatureStripItem,
} from '@/types/specialists';

export const specialists: Specialist[] = [
    {
        id: 'dsa',
        number: 1,
        name: 'DSA & Problem Solving Mentor',
        description:
            'Runs through patterns, complexity, and how to talk through a problem out loud.',
        tags: ['Patterns', 'Complexity', 'Debugging'],
        accent: 'blue',
    },
    {
        id: 'system-design',
        number: 2,
        name: 'System Design Mentor',
        description:
            'HLD, LLD, scaling decisions, and how to explain a trade-off clearly.',
        tags: ['Communication', 'Scaling', 'Trade-offs'],
        accent: 'green',
    },
    {
        id: 'ai-engineering',
        number: 3,
        name: 'AI Engineering Mentor',
        description:
            "AI-assisted workflows and code review. Where to trust the model's output, and where to check it yourself.",
        tags: ['AI Workflows', 'Code Review', 'Agents'],
        accent: 'purple',
    },
    {
        id: 'mock-interview',
        number: 4,
        name: 'Mock Interview Mentor',
        description:
            'Runs mock interviews and gives feedback you can actually use next time.',
        tags: ['Technical Rounds', 'HLD/LLD', 'Feedback'],
        accent: 'orange',
    },
    {
        id: 'capstone-review',
        number: 5,
        name: 'Capstone Review Mentor',
        description:
            'Reviews your architecture and documentation, then asks you to defend it.',
        tags: ['Architecture', 'Documentation', 'Demo'],
        accent: 'blue',
    },
];
export const mentorshipSystemPoints: MentorshipSystemPoint[] = [
    {
        label: 'DSA and problem-solving guidance',
        icon: Code2,
    },
    {
        label: 'System design and architecture reviews',
        icon: Network,
    },
    {
        label: 'AI-assisted engineering workflow feedback',
        icon: Sparkles,
    },
    {
        label: 'Mock interviews and communication improvement',
        icon: MessageSquareCode,
    },
    {
        label: 'Capstone and portfolio review',
        icon: FolderClosed,
    },
];

export const specialistFeatureStrip: SpecialistFeatureStripItem[] = [
    {
        title: 'Live Guidance',
        description: 'Get real-time help and clarifications when you need it.',
        icon: UserRound,
        accent: 'blue',
    },
    {
        title: 'Structured Reviews',
        description:
            'Detailed, actionable reviews that help you improve faster.',
        icon: ClipboardCheck,
        accent: 'green',
    },
    {
        title: 'Mock Feedback',
        description: 'Practice with realistic mocks and expert feedback.',
        icon: MessageSquare,
        accent: 'purple',
    },
    {
        title: 'Capstone Review',
        description:
            'Expert review of your project, architecture, and documentation.',
        icon: Code2,
        accent: 'orange',
    },
    {
        title: 'Career Readiness',
        description:
            'Guidance to help you prepare and communicate with impact.',
        icon: TrendingUp,
        accent: 'blue',
    },
];

export const mobileSpecialists: MobileSpecialist[] = [
    {
        id: 'dsa',
        title: 'DSA & Problem Solving',
        tags: ['Patterns', 'Complexity', 'Debugging'],
        icon: Code2,
        accent: 'blue',
    },
    {
        id: 'system-design',
        title: 'System Design',
        tags: ['HLD/LLD', 'Scaling', 'Trade-offs'],
        icon: Layers,
        accent: 'green',
    },
    {
        id: 'ai-engineering',
        title: 'AI Engineering',
        tags: ['AI Workflows', 'Code Review', 'Agents'],
        icon: Sparkles,
        accent: 'purple',
    },
    {
        id: 'mock-interview',
        title: 'Mock Interviews',
        tags: ['Communication', 'Technical Rounds', 'Feedback'],
        icon: MessageSquare,
        accent: 'orange',
    },
    {
        id: 'capstone-review',
        title: 'Capstone Review',
        tags: ['Architecture', 'Documentation', 'Demo'],
        icon: FolderClosed,
        accent: 'blue',
    },
];
export const mobileSpecialistFeatureStrip: MobileFeatureStripItem[] = [
    {
        title: 'Live Guidance',
        icon: UserRound,
        accent: 'blue',
    },
    {
        title: 'Reviews',
        icon: ClipboardCheck,
        accent: 'green',
    },
    {
        title: 'Mocks',
        icon: MessageSquare,
        accent: 'purple',
    },
    {
        title: 'Capstone Feedback',
        icon: Code2,
        accent: 'orange',
    },
];
