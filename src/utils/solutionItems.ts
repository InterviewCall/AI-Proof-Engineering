import {
    BadgeCheck,
    BookOpen,
    Brain,
    FlaskConical,
    Layers3,
    ShieldCheck,
    Sparkles,
    Target,
    UserRound,
} from 'lucide-react';

import { type CapabilityItem, type ModelItem } from '@/types/solution';

export const oldCourseItems: ModelItem[] = [
    {
        desktopText: 'Learn topics passively',
        mobileText: 'Learn topics passively',
        icon: BookOpen,
    },
    {
        desktopText: 'Use AI as a shortcut',
        mobileText: 'Use AI as a shortcut',
        icon: Sparkles,
    },
    {
        desktopText: 'Prepare for interviews separately',
        mobileText: 'Prepare for interviews separately',
        icon: UserRound,
    },
];

export const interviewCallItems: ModelItem[] = [
    {
        desktopText:
            'Build through labs, mocks, reviews, and mentor feedback',
        mobileText: 'Labs, mocks, reviews, and mentor feedback',
        icon: FlaskConical,
    },
    {
        desktopText:
            'Use AI with review, debugging, judgment, and product context',
        mobileText: 'AI with review, debugging, and judgment',
        icon: ShieldCheck,
    },
    {
        desktopText:
            'Combine fundamentals, system design, AI workflows, capstone proof, and career readiness',
        mobileText: 'Fundamentals, system design, and capstone proof',
        icon: Target,
    },
];

export const capabilities: CapabilityItem[] = [
    {
        title: 'Judgment',
        desktopDescription: ['Think beyond', 'generated code.'],
        mobileDescription: 'Think beyond generated code.',
        icon: Brain,
    },
    {
        title: 'Context',
        desktopDescription: [
            'Understand systems, users, and',
            'tradeoffs.',
        ],
        mobileDescription: 'Understand systems and tradeoffs.',
        icon: Layers3,
    },
    {
        title: 'Proof',
        desktopDescription: [
            'Show capability through projects,',
            'mocks, and reviews.',
        ],
        mobileDescription:
            'Show capability through projects and reviews.',
        icon: BadgeCheck,
    },
];
