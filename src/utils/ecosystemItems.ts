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
        title: 'Phase 03 revised as AI tools and workflows change.',
        description: '',
        icon: BookOpen,
        accent: 'blue',
    },
    {
        category: 'Practice System',
        title: 'New labs added for system design and debugging.',
        description: '',
        icon: Code2,
        accent: 'green',
    },
    {
        category: 'Career Desk',
        title: 'New pieces on hiring and interview prep.',
        description: '',
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
        title: 'Practice + Labs',
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
        title: 'Career Readiness',
        description:
            'Profile review, role-readiness guidance, and career communication support.',
        icon: Briefcase,
    },
];

export const mobileEcosystemItems: MobileEcosystemItem[] = [
    {
        label: 'AI-Proof Engineer Program',
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
