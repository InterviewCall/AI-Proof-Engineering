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
            'An AI-assisted workflow with a validation step and a point where a person checks the output before it goes further.',
        icon: Bot,
        accent: 'blue',
    },
    {
        title: 'Scalable Backend System',
        description:
            'APIs, a schema, a queue, and caching decisions that hold up once traffic increases.',
        icon: Server,
        accent: 'green',
    },
    {
        title: 'System Design Case Study',
        description:
            "An HLD and LLD with the trade-offs written up the way you'd document them at work.",
        icon: Network,
        accent: 'purple',
    },
    {
        title: 'Product Engineering Capstone',
        description:
            'Auth, a set of APIs, a working dashboard, tests, and documentation someone else could pick up and continue.',
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
        title: 'Architecture Diagram',
        description: 'HLD, LLD, and key design decisions',
        icon: Network,
    },
    {
        title: 'Demo Walkthrough',
        description: 'End-to-end demo and walkthrough',
        icon: Play,
    },
    {
        title: 'Review Notes',
        description: 'Mentor feedback, improvements, and key learnings',
        icon: MessageSquareText,
    },
    {
        title: 'Documentation',
        description: 'README, API docs, and user guide',
        icon: FileText,
    },
    {
        title: 'Final Presentation',
        description: 'A structured deck to explain your solution clearly',
        icon: Presentation,
    },
];

export const mobileCapstoneFeatureStrip: CapstoneFeatureItem[] = [
    {
        title: 'Repository',
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
        title: 'Mentor Comments',
        description: 'Feedback, improvements, and key learnings',
        icon: UserRound,
    },
];
