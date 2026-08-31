import {
    BadgeCheck,
    Brain,
    FileCheck2,
    Layers3,
    MonitorPlay,
    ScanEye,
    ShieldCheck,
    Sparkles,
    Target,
    UserRound,
    Users,
} from 'lucide-react';

import { type CapabilityItem, type ModelItem } from '@/types/solution';

export const oldCourseItems: ModelItem[] = [
    {
        desktopText: 'Pre-recorded videos, watched at your own pace',
        mobileText: 'Pre-recorded videos, watched at your own pace',
        icon: MonitorPlay,
    },
    {
        desktopText: 'One project, submitted once',
        mobileText: 'One project, submitted once',
        icon: FileCheck2,
    },
    {
        desktopText: 'Interview prep handled as a separate track',
        mobileText: 'Interview prep handled as a separate track',
        icon: UserRound,
    },
    {
        desktopText: 'AI used to skip the parts that are hard to understand',
        mobileText: 'AI used to skip the hard parts',
        icon: Sparkles,
    },
];

export const interviewCallItems: ModelItem[] = [
    {
        desktopText: 'Live sessions with a mentor you can ask questions',
        mobileText: 'Live sessions with a mentor',
        icon: Users,
    },
    {
        desktopText: 'Assignments reviewed and sent back with comments',
        mobileText: 'Assignments reviewed with comments',
        icon: ShieldCheck,
    },
    {
        desktopText:
            'Mock interviews built into the same track as the coursework',
        mobileText: 'Mock interviews built into the coursework',
        icon: Target,
    },
    {
        desktopText: 'AI output checked and explained, every time',
        mobileText: 'AI output checked and explained',
        icon: ScanEye,
    },
];

export const capabilities: CapabilityItem[] = [
    {
        title: 'Judgment',
        desktopDescription: [
            "Knowing when the AI's answer is wrong,",
            'and being able to say why.',
        ],
        mobileDescription: "Knowing when the AI's answer is wrong.",
        icon: Brain,
    },
    {
        title: 'Context',
        desktopDescription: [
            'Understanding how a change affects',
            'the rest of the system.',
        ],
        mobileDescription: 'Understanding how a change affects the system.',
        icon: Layers3,
    },
    {
        title: 'Proof',
        desktopDescription: [
            'Code and documentation someone',
            'else can open and follow.',
        ],
        mobileDescription:
            'Code and documentation someone else can follow.',
        icon: BadgeCheck,
    },
];
