import {
    Brain,
    ClipboardCheck,
    Code2,
    FileCheck2,
    Layers,
    MessageSquare,
    Network,
    NotebookPen,
    TrendingUp,
} from 'lucide-react';

import {
    type MobileProgressProof,
    type ProgressFeatureStripItem,
    type ProgressProof,
    type ProgressSidebarPoint,
} from '@/types/realProgress';

export const progressProofs: ProgressProof[] = [
    {
        title: 'System Design Review',
        icon: Network,
        accent: 'one',
        before: 'Unclear architecture explanation',
        after: 'Structured HLD, tradeoffs, and scaling discussion',
        badge: 'Improved structure, clarity, and depth',
    },
    {
        title: 'Mock Interview Feedback',
        icon: MessageSquare,
        accent: 'two',
        before: 'Weak communication under pressure',
        after: 'Clearer approach, stronger reasoning, better explanation',
        badge: 'Better communication and confidence',
    },
    {
        title: 'Capstone Proof',
        icon: Code2,
        accent: 'three',
        before: 'Resume-only project claims',
        after: 'A demoed project with code, docs, and mentor review',
        badge: 'Tangible proof of engineering ability',
    },
    {
        title: 'AI Workflow Review',
        icon: Brain,
        accent: 'four',
        before: 'AI used as a shortcut',
        after: 'AI used with debugging, review, and judgment',
        badge: 'Smarter use of AI with real engineering judgment',
    },
];

export const mobileProgressProofs: MobileProgressProof[] = [
    {
        title: 'System Design Review',
        icon: Network,
        accent: 'one',
        before: 'Unclear explanation',
        after: 'Structured HLD + tradeoffs',
    },
    {
        title: 'Mock Interview Feedback',
        icon: MessageSquare,
        accent: 'two',
        before: 'Weak communication',
        after: 'Clearer reasoning and explanation',
    },
    {
        title: 'Capstone Proof',
        icon: Code2,
        accent: 'three',
        before: 'Resume-only project claims',
        after: 'Code, architecture, demo, and docs',
    },
];

export const progressSidebarPoints: ProgressSidebarPoint[] = [
    {
        label: 'Assignment reviews',
        icon: FileCheck2,
    },
    {
        label: 'Mock interview feedback',
        icon: MessageSquare,
    },
    {
        label: 'System design improvement',
        icon: Layers,
    },
    {
        label: 'Capstone documentation',
        icon: Code2,
    },
    {
        label: 'Mentor review notes',
        icon: NotebookPen,
    },
];

export const progressFeatureStrip: ProgressFeatureStripItem[] = [
    {
        title: 'Assignment Reviews',
        description: 'Detailed feedback on problems and code.',
        icon: ClipboardCheck,
        accent: 'one',
    },
    {
        title: 'Mock Feedback',
        description: 'Actionable feedback to improve interview performance.',
        icon: MessageSquare,
        accent: 'two',
    },
    {
        title: 'Mentor Notes',
        description: 'Personalized notes to strengthen concepts and communication.',
        icon: NotebookPen,
        accent: 'three',
    },
    {
        title: 'Capstone Proof',
        description: 'Portfolio-ready projects with code and documentation.',
        icon: Code2,
        accent: 'four',
    },
    {
        title: 'Readiness Tracking',
        description: 'Track improvements across skills and interviews.',
        icon: TrendingUp,
        accent: 'one',
    },
];
