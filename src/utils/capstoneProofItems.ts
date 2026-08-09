import {
    Bot,
    FileCode2,
    FileText,
    MessageSquareText,
    Network,
    Play,
    Presentation,
    Server,
    UserRound,
} from 'lucide-react';

import {
    type CapstoneDeliverable,
    type CapstoneFeatureItem,
    type ExampleProject,
} from '@/types/capstoneProof';

export const advantagePoints: string[] = [
    'End-to-end engineering project',
    'Architecture + tradeoff documentation',
    'Code walkthrough and demo',
    'Mentor review and improvement notes',
];

export const sourceCodeDeliverable: CapstoneDeliverable = {
    title: 'Source Code',
    description: 'Clean, modular, and well-documented codebase.',
    icon: FileCode2,
    accent: 'blue',
};

export const gridDeliverables: CapstoneDeliverable[] = [
    {
        title: 'Architecture Diagram',
        description: 'System design with HLD and key components.',
        icon: Network,
        accent: 'purple',
    },
    {
        title: 'Demo Walkthrough',
        description: 'End-to-end demo showing real functionality.',
        icon: Play,
        accent: 'green',
    },
    {
        title: 'Review Notes',
        description: 'Mentor feedback, improvements, and key learnings.',
        icon: MessageSquareText,
        accent: 'orange',
    },
    {
        title: 'Final Presentation',
        description: 'Structured deck to explain your solution clearly.',
        icon: Presentation,
        accent: 'orange',
    },
];

export const exampleProjects: ExampleProject[] = [
    {
        title: 'AI Workflow Automation Project',
        description:
            'Build an AI-assisted workflow with validation, review, and human-in-the-loop checks.',
        icon: Bot,
        accent: 'blue',
    },
    {
        title: 'Scalable Backend System',
        description:
            'Design APIs, database schema, queues, caching, and deployment-ready structure.',
        icon: Server,
        accent: 'green',
    },
    {
        title: 'System Design Capstone',
        description:
            'Create HLD, LLD, scaling decisions, tradeoffs, and interview-style explanation.',
        icon: Network,
        accent: 'purple',
    },
    {
        title: 'Product Engineering Capstone',
        description:
            'Build a realistic product feature with auth, APIs, dashboard, testing, and documentation.',
        icon: FileCode2,
        accent: 'orange',
    },
];

export const capstoneFeatureStrip: CapstoneFeatureItem[] = [
    {
        title: 'Source Code',
        description: 'Clean, modular, and maintainable',
        icon: FileCode2,
    },
    {
        title: 'Architecture',
        description: 'HLD, LLD, and key design decisions',
        icon: Network,
    },
    {
        title: 'Demo',
        description: 'End-to-end demo and walkthrough',
        icon: Play,
    },
    {
        title: 'Documentation',
        description: 'README, API docs, and user guide',
        icon: FileText,
    },
    {
        title: 'Mentor Review',
        description: 'Expert feedback and improvement notes',
        icon: UserRound,
    },
    {
        title: 'Final Walkthrough',
        description: 'Presentation to explain your solution clearly',
        icon: Presentation,
    },
];
