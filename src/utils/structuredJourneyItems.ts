import {
    BookOpen,
    ClipboardCheck,
    FileText,
    FlaskConical,
    Trophy,
} from 'lucide-react';

import {
    type JourneyPhase,
    type JourneyStat,
    type PhaseCard,
} from '@/types/structuredJourney';

export const journeyStats: JourneyStat[] = [
    {
        title: '10 Phases',
        subtitle: 'Step-by-step journey',
        value: '10',
        icon: null,
        colorClass: 'blue',
    },
    {
        title: 'Live + Labs',
        subtitle: 'Practice over theory',
        icon: FlaskConical,
        colorClass: 'purple',
    },
    {
        title: 'Reviews + Tests',
        subtitle: 'Feedback that builds you',
        icon: ClipboardCheck,
        colorClass: 'green',
    },
    {
        title: 'Capstone Proof',
        subtitle: 'Projects that stand out',
        icon: Trophy,
        colorClass: 'orange',
    },
];

const phaseDescription =
    'Learn to use AI as an engineering accelerator without losing technical judgment, code quality, or debugging ability.';

const phaseCards: PhaseCard[] = [
    {
        title: 'What You Learn',
        icon: BookOpen,
        iconBoxClass: 'bg-[#EFF5FF]',
        iconClass: 'text-[#0A53F2]',
        points: [
            'Prompting for code understanding, not blind copying',
            'AI-assisted debugging and refactoring',
            'Reviewing generated code for correctness and maintainability',
        ],
    },
    {
        title: 'Labs & Assignments',
        icon: FlaskConical,
        iconBoxClass: 'bg-[#F4EEFF]',
        iconClass: 'text-[#6D35F5]',
        points: [
            'Refactor AI-generated code',
            'Debug a broken service with AI assistance',
            'Write review notes for generated solutions',
        ],
    },
    {
        title: 'Review Output',
        icon: FileText,
        iconBoxClass: 'bg-[#EAFBF3]',
        iconClass: 'text-[#10B76A]',
        points: [
            'AI workflow checklist',
            'Code review submission',
            'Mentor feedback on engineering judgment',
        ],
    },
];

const phaseMobileCards: PhaseCard[] = [
    {
        title: 'What You Learn',
        icon: BookOpen,
        iconBoxClass: 'bg-[#EFF5FF]',
        iconClass: 'text-[#0A53F2]',
        points: [
            'AI-assisted debugging',
            'Code review with AI',
            'Refactoring generated code',
        ],
    },
    {
        title: 'Practice Output',
        icon: ClipboardCheck,
        points: [
            'AI workflow checklist',
            'Code review submission',
            'Mentor feedback',
        ],
    },
];

const phaseSummaries: Pick<JourneyPhase, 'id' | 'title'>[] = [
    {
        id: '01',
        title: 'Engineering Mindset & Baseline',
    },
    {
        id: '02',
        title: 'Core CS & Problem Solving',
    },
    {
        id: '03',
        title: 'AI-Assisted Engineering Workflow',
    },
    {
        id: '04',
        title: 'Backend, APIs & Databases',
    },
    {
        id: '05',
        title: 'System Design Fundamentals',
    },
    {
        id: '06',
        title: 'Machine Coding & Debugging',
    },
    {
        id: '07',
        title: 'AI Product Building',
    },
    {
        id: '08',
        title: 'Production Readiness',
    },
    {
        id: '09',
        title: 'Interview Readiness & Career Positioning',
    },
    {
        id: '10',
        title: 'Capstone Proof & Final Review',
    },
];

export const phases: JourneyPhase[] = phaseSummaries.map((phase) => ({
    ...phase,
    duration: '2 Weeks',
    description: phaseDescription,
    cards: phaseCards,
    mobileCards: phaseMobileCards,
}));
