import {
    Bell,
    Briefcase,
    Layers,
    Sparkles,
    User,
    UsersRound,
} from 'lucide-react';

import {
    type CareerInsightsFeatureStripItem,
    type FeaturedTalk,
    type InsightArticle,
} from '@/types/careerInsights';

export const featuredTalk: FeaturedTalk = {
    badge: 'Founder Talk',
    title: 'Will AI Replace Software Engineers - or Just Average Execution?',
    description:
        'A clear breakdown of how AI is changing engineering careers and what serious engineers should build next.',
    descriptionMobile:
        'How AI is changing engineering careers and what serious engineers should build next.',
    duration: '18 min watch',
    tags: ['AI Careers', 'Career Strategy'],
};

export const insightArticles: InsightArticle[] = [
    {
        label: 'Expert Conversation',
        title: 'What Product Companies Expect From Engineers Now',
        duration: '32 min watch',
        durationType: 'watch',
        tag: 'Hiring Signals',
        icon: UsersRound,
        accent: 'purple',
    },
    {
        label: 'Engineering Deep Dive',
        title: 'Why System Design Matters More in Lean Teams',
        duration: '24 min watch',
        durationType: 'watch',
        tag: 'System Design',
        icon: Layers,
        accent: 'green',
    },
    {
        label: 'AI Workflow',
        title: 'How to Use AI Without Becoming a Copy-Paste Engineer',
        duration: '21 min watch',
        durationType: 'watch',
        tag: 'AI-Assisted Engineering',
        icon: Sparkles,
        accent: 'orange',
    },
    {
        label: 'Career Framework',
        title: 'How to Build Proof Before Your Next Interview',
        duration: '7 min read',
        durationType: 'read',
        tag: 'Career Readiness',
        icon: Briefcase,
        accent: 'blue',
    },
];

export const careerInsightsFeatureStrip: CareerInsightsFeatureStripItem[] = [
    {
        title: 'Founder Talks',
        description: 'Direct insights from the InterviewCall founder.',
        icon: User,
        accent: 'blue',
    },
    {
        title: 'Expert Conversations',
        description: 'Real conversations on careers, hiring, and engineering.',
        icon: UsersRound,
        accent: 'purple',
    },
    {
        title: 'Engineering Breakdowns',
        description: 'Deep dives on system design, architecture, and more.',
        icon: Layers,
        accent: 'green',
    },
    {
        title: 'Career Frameworks',
        description: 'Practical frameworks to grow, prepare, and stand out.',
        icon: Briefcase,
        accent: 'orange',
    },
    {
        title: 'Monthly Updates',
        description: 'Fresh insights, tools, and lessons every month.',
        icon: Bell,
        accent: 'blue',
    },
];
