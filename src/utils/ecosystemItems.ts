import {
    BookOpen,
    Briefcase,
    CalendarCheck,
    Code2,
    FileText,
    UserRound,
    UsersRound,
} from 'lucide-react';

import {
    type EcosystemFeatureStripItem,
    type EcosystemMiniCard,
    type MobileEcosystemItem,
    type ProgramUpdate,
} from '@/types/ecosystem';

export const programUpdates: ProgramUpdate[] = [
    {
        category: 'Curriculum Update',
        title: 'AI-Assisted Engineering Workflows',
        description:
            'AI workflow practice is built into the program structure with review, debugging, and judgment checkpoints.',
        icon: BookOpen,
        accent: 'blue',
    },
    {
        category: 'Practice System',
        title: 'Labs, Reviews, and Mock Feedback',
        description:
            'Learners move through structured assignments, mentor reviews, mock interviews, and readiness improvement loops.',
        icon: Code2,
        accent: 'green',
    },
    {
        category: 'Career Desk',
        title: 'Engineering Career Frameworks',
        description:
            'Founder-led insights and practical frameworks on AI-era careers, system design, interviews, and proof-building.',
        icon: UserRound,
        accent: 'purple',
    },
];

export const ecosystemMiniCards: EcosystemMiniCard[] = [
    {
        title: 'AI-Proof Engineer Program',
        description:
            'Structured curriculum, tracks, labs, reviews, mocks, and capstone proof.',
        icon: BookOpen,
    },
    {
        title: 'Practice + Labs System',
        description:
            'Assignments, debugging tasks, AI workflow practice, and project work.',
        icon: CalendarCheck,
    },
    {
        title: 'Mentor Reviews + Mocks',
        description:
            'Feedback loops for technical improvement, communication, and interview readiness.',
        icon: UsersRound,
    },
    {
        title: 'Career Readiness Support',
        description:
            'Profile review, role-readiness guidance, and career communication support.',
        icon: Briefcase,
    },
];

export const mobileEcosystemItems: MobileEcosystemItem[] = [
    {
        label: 'AI-Proof Program',
        icon: BookOpen,
    },
    {
        label: 'Practice + Labs',
        icon: CalendarCheck,
    },
    {
        label: 'Mentor Reviews + Mocks',
        icon: UsersRound,
    },
    {
        label: 'Career Readiness',
        icon: Briefcase,
    },
];

export const ecosystemFeatureStrip: EcosystemFeatureStripItem[] = [
    {
        title: 'Curriculum Updates',
        icon: FileText,
    },
    {
        title: 'Engineering Resources',
        icon: BookOpen,
    },
    {
        title: 'Mentor Reviews',
        icon: UserRound,
    },
    {
        title: 'Practice Systems',
        icon: Code2,
    },
    {
        title: 'Career Desk',
        icon: Briefcase,
    },
];
