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
        before:
            'Jumps straight into components without stating the requirements first.',
        after: 'States assumptions, then works through storage, APIs, and where the system will need to scale.',
        badge: 'Improved structure, clarity, and depth',
    },
    {
        title: 'Mock Interview Feedback',
        icon: MessageSquare,
        accent: 'two',
        before:
            'Loses the thread of the answer once the interviewer pushes back.',
        after: 'Holds the structure of the answer through follow-up questions.',
        badge: 'Better communication and confidence',
    },
    {
        title: 'Capstone Proof',
        icon: Code2,
        accent: 'three',
        before:
            'A resume line describing a project, with no code or write-up attached.',
        after: 'A repository, an architecture document, and a recorded walkthrough.',
        badge: 'Tangible proof of engineering ability',
    },
    {
        title: 'AI Workflow Review',
        icon: Brain,
        accent: 'four',
        before: 'Copies AI-generated code into the project without checking it.',
        after: "Tests the output, flags what's wrong, and rewrites the parts that need it.",
        badge: 'Smarter use of AI with real engineering judgment',
    },
];

export const mobileProgressProofs: MobileProgressProof[] = [
    {
        title: 'System Design Review',
        icon: Network,
        accent: 'one',
        before: 'Jumps into components first',
        after: 'States assumptions, then scales',
    },
    {
        title: 'Mock Interview Feedback',
        icon: MessageSquare,
        accent: 'two',
        before: 'Loses the thread under pushback',
        after: 'Holds structure through follow-ups',
    },
    {
        title: 'Capstone Proof',
        icon: Code2,
        accent: 'three',
        before: 'Resume line, no code attached',
        after: 'A repo, docs, and a walkthrough',
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
