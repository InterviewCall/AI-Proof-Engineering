import {
    BookOpen,
    Code2,
    CreditCard,
    Crown,
    FileCheck2,
    FileText,
    MessageSquare,
    Rocket,
    ShieldCheck,
    TrendingUp,
    UsersRound,
} from 'lucide-react';

import {
    type AdmissionInfoChip,
    type CareerTrack,
    type MobileTrackInclude,
    type TrackPill,
} from '@/types/buildProof';

export const careerTracks: CareerTrack[] = [
    {
        title: 'Foundation Track',
        yoe: '0-2 YOE',
        description:
            'Build strong engineering foundations, problem-solving habits, and project confidence.',
        icon: Rocket,
        accent: 'blue',
    },
    {
        title: 'Growth Track',
        yoe: '2-5 YOE',
        description:
            'Strengthen system design, backend depth, AI workflows, and interview readiness.',
        icon: TrendingUp,
        accent: 'green',
    },
    {
        title: 'Leadership Track',
        yoe: '5+ YOE',
        description:
            'Build architecture thinking, technical communication, and senior-role readiness.',
        icon: Crown,
        accent: 'purple',
    },
];

export const admissionInfoChips: AdmissionInfoChip[] = [
    {
        label: 'Track-Based Counselling Call',
        icon: UsersRound,
        accent: 'blue',
    },
    {
        label: 'Current Fee Plan Shared on the Call',
        icon: FileCheck2,
        accent: 'green',
    },
    {
        label: 'Payment Options Discussed',
        icon: CreditCard,
        accent: 'purple',
    },
    {
        label: 'Enrollment Terms Explained Upfront',
        icon: FileText,
        accent: 'orange',
    },
];

export const allTracksInclude: string[] = [
    '10-Phase Curriculum',
    'Live + Labs',
    'Assignments + Reviews',
    'Mocks + Interview Practice',
    'Capstone Project & Proof',
    'Career Readiness Support',
];

export const mobileTrackPills: TrackPill[] = [
    {
        label: 'Foundation (0–2 YOE)',
        icon: ShieldCheck,
        accent: 'blue',
    },
    {
        label: 'Growth (2–5 YOE)',
        icon: TrendingUp,
        accent: 'green',
    },
    {
        label: 'Leadership (5+ YOE)',
        icon: Crown,
        accent: 'purple',
    },
];

export const mobileTracksInclude: MobileTrackInclude[] = [
    {
        label: '10-Phase Curriculum',
        icon: BookOpen,
    },
    {
        label: 'Live + Labs',
        icon: Code2,
    },
    {
        label: 'Mocks + Reviews',
        icon: MessageSquare,
    },
    {
        label: 'Capstone Proof',
        icon: ShieldCheck,
    },
];
