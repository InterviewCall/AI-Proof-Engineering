import {
    BookOpen,
    Briefcase,
    Code2,
    Route,
    ShieldCheck,
    Star,
    TrendingUp,
    User,
    UsersRound,
} from 'lucide-react';

import {
    type GlanceAudiencePill,
    type GlanceInfoCard,
} from '@/types/programGlance';

export const glanceInfoCards: GlanceInfoCard[] = [
    {
        title: '10-Phase Curriculum',
        description:
            'Fundamentals to AI workflows, system design, and capstone proof.',
        icon: BookOpen,
        accent: 'blue',
    },
    {
        title: '3 Career Tracks',
        description:
            'Foundation, Growth, and Leadership paths by experience level.',
        icon: Route,
        accent: 'green',
    },
    {
        title: 'Live + Labs Format',
        description:
            'Guided learning, assignments, debugging, and project work.',
        icon: Code2,
        accent: 'purple',
    },
    {
        title: 'Mocks + Reviews',
        description:
            'Interview practice, mentor feedback, and readiness checks.',
        icon: UsersRound,
        accent: 'orange',
    },
    {
        title: 'Capstone Proof',
        description:
            'Source code, architecture, demo, documentation, and review notes.',
        icon: ShieldCheck,
        accent: 'blue',
    },
    {
        title: 'Career Readiness',
        description:
            'Profile review, communication, and interview preparation support.',
        icon: TrendingUp,
        accent: 'orange',
    },
];

export const mobileGlanceInfoCards: GlanceInfoCard[] = [
    {
        title: '10-Phase Curriculum',
        description: 'From fundamentals to AI workflows and system design.',
        icon: BookOpen,
        accent: 'blue',
    },
    {
        title: '3 Career Tracks',
        description: 'Foundation, Growth, and Leadership paths.',
        icon: Route,
        accent: 'green',
    },
    {
        title: 'Live + Labs',
        description: 'Guided learning, assignments, and project work.',
        icon: Code2,
        accent: 'purple',
    },
    {
        title: 'Capstone Proof',
        description:
            'Code, architecture, demo, documentation, and review notes.',
        icon: ShieldCheck,
        accent: 'orange',
    },
];

export const audiencePills: GlanceAudiencePill[] = [
    {
        label: '0-2 YOE Engineers',
        icon: User,
    },
    {
        label: '2-5 YOE Engineers',
        icon: User,
    },
    {
        label: '5+ YOE Engineers',
        icon: User,
    },
    {
        label: 'Backend / Full-Stack Engineers',
        icon: Code2,
    },
    {
        label: 'Product-Role Aspirants',
        icon: Briefcase,
    },
    {
        label: 'AI-Era Career Builders',
        icon: Star,
    },
];
