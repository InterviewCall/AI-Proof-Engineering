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
            'Fundamentals, AI workflows, system design, and a capstone.',
        icon: BookOpen,
        accent: 'blue',
    },
    {
        title: '3 Career Tracks',
        description:
            'Foundation, Growth, and Leadership, based on years of experience.',
        icon: Route,
        accent: 'green',
    },
    {
        title: 'Live + Labs Format',
        description: 'Live sessions paired with hands-on labs.',
        icon: Code2,
        accent: 'purple',
    },
    {
        title: 'Mocks + Reviews',
        description: 'Mock interviews and reviewed feedback on your work.',
        icon: UsersRound,
        accent: 'orange',
    },
    {
        title: 'Capstone Proof',
        description:
            'A repository, architecture write-up, and a recorded walkthrough.',
        icon: ShieldCheck,
        accent: 'blue',
    },
    {
        title: 'Career Readiness',
        description:
            'Resume review, mock interviews, and practice explaining your own work.',
        icon: TrendingUp,
        accent: 'orange',
    },
];

export const mobileGlanceInfoCards: GlanceInfoCard[] = [
    {
        title: '10-Phase Curriculum',
        description: 'Fundamentals, AI workflows, system design, capstone.',
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
        description: 'Live sessions paired with hands-on labs.',
        icon: Code2,
        accent: 'purple',
    },
    {
        title: 'Capstone Proof',
        description:
            'A repository, architecture write-up, and a recorded walkthrough.',
        icon: ShieldCheck,
        accent: 'orange',
    },
];

export const audiencePills: GlanceAudiencePill[] = [
    {
        label: '0–2 YOE',
        icon: User,
    },
    {
        label: '2–5 YOE',
        icon: User,
    },
    {
        label: '5+ YOE',
        icon: User,
    },
    {
        label: 'Backend & Full-Stack Engineers',
        icon: Code2,
    },
    {
        label: 'Engineers Moving Toward Product Roles',
        icon: Briefcase,
    },
    {
        label: 'Engineers Using AI More Than They Used To',
        icon: Star,
    },
];
