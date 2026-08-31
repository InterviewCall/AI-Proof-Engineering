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
        title: 'Reviews + Mocks',
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

const cardIcons = {
    learn: { icon: BookOpen, iconBoxClass: 'bg-[#EFF5FF]', iconClass: 'text-[#0A53F2]' },
    labs: { icon: FlaskConical, iconBoxClass: 'bg-[#F4EEFF]', iconClass: 'text-[#6D35F5]' },
    review: { icon: FileText, iconBoxClass: 'bg-[#EAFBF3]', iconClass: 'text-[#10B76A]' },
    mobileLearn: { icon: BookOpen, iconBoxClass: 'bg-[#EFF5FF]', iconClass: 'text-[#0A53F2]' },
    mobilePractice: { icon: ClipboardCheck },
} as const;

type PhaseContent = {
    id: JourneyPhase['id'];
    title: string;
    description: string;
    learn: string[];
    labs: string[];
    review: string[];
    mobileLearn: string[];
    mobilePractice: string[];
};

const phaseContent: PhaseContent[] = [
    {
        id: '01',
        title: 'Engineering Mindset & Baseline',
        description:
            'A baseline read on how you approach a problem, structure code, and debug when something breaks.',
        learn: [
            'Breaking a vague problem into smaller, testable pieces',
            'Reading unfamiliar code before changing it',
            'Debugging with a hypothesis instead of guessing',
        ],
        labs: [
            'Diagnose a failing function with no error message',
            'Rewrite a messy function for clarity',
            'Walk a mentor through your reasoning out loud',
        ],
        review: [
            'Baseline skills report',
            'Code readability review',
            'Debugging process notes',
        ],
        mobileLearn: [
            'Reading unfamiliar code',
            'Debugging with a hypothesis',
            'Structuring a solution before coding',
        ],
        mobilePractice: [
            'Baseline skills report',
            'Code readability review',
            'Debugging process notes',
        ],
    },
    {
        id: '02',
        title: 'Core CS & Problem Solving',
        description:
            "Data structures, algorithms, and enough timed practice that a hard problem doesn't rattle you.",
        learn: [
            'Recognizing patterns behind DSA problems',
            'Reasoning about time and space complexity',
            'Talking through a solution while you code it',
        ],
        labs: [
            'Timed problem sets across core patterns',
            'Debugging exercises under a clock',
            'Rewriting a brute-force solution for efficiency',
        ],
        review: [
            'Problem-solving accuracy log',
            "Mentor notes on your explanation, not just your answer",
            'A recorded mock walkthrough',
        ],
        mobileLearn: [
            'DSA patterns',
            'Time and space complexity',
            'Explaining your solution out loud',
        ],
        mobilePractice: [
            'Timed problem sets',
            'Mentor notes on your explanation',
            'Recorded mock walkthrough',
        ],
    },
    {
        id: '03',
        title: 'AI-Assisted Engineering Workflow',
        description:
            "You'll use AI to draft code, debug, and refactor faster. Every exercise also asks you to explain what you kept from its output, what you rewrote, and why.",
        learn: [
            'Prompting for code understanding, not blind copying',
            'AI-assisted debugging and refactoring',
            'Reviewing generated code for correctness and maintainability',
        ],
        labs: [
            'Refactor AI-generated code',
            'Debug a broken service with AI assistance',
            'Write review notes for generated solutions',
        ],
        review: [
            'AI workflow checklist',
            'Code review submission',
            'Mentor feedback on engineering judgment',
        ],
        mobileLearn: [
            'AI-assisted debugging',
            'Code review with AI',
            'Refactoring generated code',
        ],
        mobilePractice: [
            'AI workflow checklist',
            'Code review submission',
            'Mentor feedback',
        ],
    },
    {
        id: '04',
        title: 'Backend, APIs & Databases',
        description:
            'Design an API, choose a schema, implement auth, and handle the failure cases.',
        learn: [
            'Designing REST APIs and choosing the right schema',
            'Implementing authentication and authorization',
            "Handling validation and error cases, not just the happy path",
        ],
        labs: [
            'Design an API contract for a real feature',
            'Build a schema and justify the trade-offs',
            'Implement an auth flow end to end',
        ],
        review: [
            'API design review',
            'Schema walkthrough',
            'Mentor feedback on error handling',
        ],
        mobileLearn: [
            'API and schema design',
            'Auth implementation',
            'Error handling',
        ],
        mobilePractice: [
            'API design review',
            'Schema walkthrough',
            'Mentor feedback',
        ],
    },
    {
        id: '05',
        title: 'System Design Fundamentals',
        description:
            'HLD, LLD, caching, queues, and the trade-offs behind each choice.',
        learn: [
            'High-level and low-level system design',
            'Caching, queues, and load distribution',
            'Explaining a trade-off instead of just naming a pattern',
        ],
        labs: [
            'Design a system from a one-paragraph brief',
            'Defend your design in a live review',
            'Rework a design after new constraints are added',
        ],
        review: [
            'HLD/LLD document',
            'Trade-off notes',
            'Mentor design review',
        ],
        mobileLearn: [
            'HLD and LLD',
            'Caching and queues',
            'Explaining trade-offs',
        ],
        mobilePractice: [
            'System design document',
            'Live design review',
            'Mentor feedback',
        ],
    },
    {
        id: '06',
        title: 'Machine Coding & Debugging',
        description:
            "Turn a spec into working code under a time limit, then explain what you'd change with more of it.",
        learn: [
            'Turning a spec into working, maintainable code',
            "Structuring code so it's easy to extend",
            'Debugging under time pressure',
        ],
        labs: [
            'Build a working feature from a spec, timed',
            'Extend your own code after new requirements arrive',
            "Debug a planted issue in someone else's code",
        ],
        review: [
            'Machine coding submission',
            'Code structure review',
            "Mentor notes on what you'd change with more time",
        ],
        mobileLearn: [
            'Spec to working code',
            'Maintainable structure',
            'Debugging under time pressure',
        ],
        mobilePractice: [
            'Timed machine coding round',
            'Code structure review',
            'Mentor feedback',
        ],
    },
    {
        id: '07',
        title: 'AI Product Building',
        description:
            'Integrate a model into a real feature, including what happens when it gets something wrong.',
        learn: [
            'Integrating a model or API into a real feature',
            'Structuring outputs so the rest of the product can rely on them',
            "Designing fallbacks for when the model gets it wrong",
        ],
        labs: [
            'Build a feature backed by a model or API',
            "Add an evaluation step for the model's output",
            'Design a fallback for a low-confidence response',
        ],
        review: [
            'Feature integration write-up',
            'Evaluation report',
            'Mentor review of the fallback design',
        ],
        mobileLearn: [
            'Model or API integration',
            'Structured outputs',
            'Fallbacks for wrong answers',
        ],
        mobilePractice: [
            'Feature integration',
            'Evaluation report',
            'Mentor review',
        ],
    },
    {
        id: '08',
        title: 'Production Readiness',
        description:
            "Deploy it, monitor it, and figure out what broke when it does.",
        learn: [
            'Deploying a service and setting up monitoring',
            'Reading logs and metrics to find what broke',
            'Thinking about cost and performance, not just correctness',
        ],
        labs: [
            'Deploy a service end to end',
            'Set up an alert and respond to it',
            'Review a real incident and write up the cause',
        ],
        review: [
            'Deployment checklist',
            'Incident write-up',
            'Mentor feedback on your monitoring setup',
        ],
        mobileLearn: [
            'Deployment and monitoring',
            'Reading logs and metrics',
            'Cost and performance',
        ],
        mobilePractice: [
            'Deployment checklist',
            'Incident write-up',
            'Mentor feedback',
        ],
    },
    {
        id: '09',
        title: 'Interview Readiness & Career Positioning',
        description:
            'Mock interviews, resume review, and practice explaining your own work under questions.',
        learn: [
            'Structuring an answer under interview pressure',
            'Explaining your own projects clearly and honestly',
            'Positioning your experience for the role you want next',
        ],
        labs: [
            'Timed mock interviews across DSA, machine coding, and system design',
            'A resume and profile review with a mentor',
            'Practice explaining a past project under follow-up questions',
        ],
        review: [
            'Mock interview scorecard',
            'Resume review notes',
            'Mentor feedback on communication',
        ],
        mobileLearn: [
            'Interview structure',
            'Explaining your projects',
            'Positioning your experience',
        ],
        mobilePractice: [
            'Mock interview scorecard',
            'Resume review',
            'Mentor feedback',
        ],
    },
    {
        id: '10',
        title: 'Capstone Proof & Final Review',
        description: 'Finish and defend a complete piece of work, end to end.',
        learn: [
            'Scoping a capstone you can realistically finish',
            'Documenting architecture and decisions as you go',
            'Presenting and defending your work under questions',
        ],
        labs: [
            'Build and ship your capstone project',
            'Write the architecture and decision documentation',
            'Present a recorded walkthrough to a mentor',
        ],
        review: [
            'Capstone repository and documentation',
            'Architecture review',
            'Final readiness review',
        ],
        mobileLearn: [
            'Scoping a capstone',
            'Documenting decisions',
            'Presenting your work',
        ],
        mobilePractice: [
            'Capstone repository',
            'Architecture review',
            'Final readiness review',
        ],
    },
];

const buildCards = (content: PhaseContent): PhaseCard[] => [
    {
        title: 'What You Learn',
        icon: cardIcons.learn.icon,
        iconBoxClass: cardIcons.learn.iconBoxClass,
        iconClass: cardIcons.learn.iconClass,
        points: content.learn,
    },
    {
        title: 'Labs & Assignments',
        icon: cardIcons.labs.icon,
        iconBoxClass: cardIcons.labs.iconBoxClass,
        iconClass: cardIcons.labs.iconClass,
        points: content.labs,
    },
    {
        title: 'Review Output',
        icon: cardIcons.review.icon,
        iconBoxClass: cardIcons.review.iconBoxClass,
        iconClass: cardIcons.review.iconClass,
        points: content.review,
    },
];

const buildMobileCards = (content: PhaseContent): PhaseCard[] => [
    {
        title: 'What You Learn',
        icon: cardIcons.mobileLearn.icon,
        iconBoxClass: cardIcons.mobileLearn.iconBoxClass,
        iconClass: cardIcons.mobileLearn.iconClass,
        points: content.mobileLearn,
    },
    {
        title: 'Practice Output',
        icon: cardIcons.mobilePractice.icon,
        points: content.mobilePractice,
    },
];

export const phases: JourneyPhase[] = phaseContent.map((content) => ({
    id: content.id,
    title: content.title,
    duration: '2 Weeks',
    description: content.description,
    cards: buildCards(content),
    mobileCards: buildMobileCards(content),
}));
