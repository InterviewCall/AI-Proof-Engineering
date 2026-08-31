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
    title: 'What AI Actually Changes About the Job',
    description:
        "Sunyul Hossen on what he's hearing in hiring conversations right now, and where engineers should probably be spending their time.",
    descriptionMobile:
        "Sunyul Hossen on what he's hearing in hiring conversations right now.",
    duration: '18 min watch',
    tags: ['AI Careers', 'Career Strategy'],
};

export const insightArticles: InsightArticle[] = [
    {
        label: 'Expert Conversation',
        title: 'What Product Companies Are Actually Hiring For',
        duration: '32 min watch',
        durationType: 'watch',
        tag: 'Hiring Signals',
        icon: UsersRound,
        accent: 'purple',
    },
    {
        label: 'Engineering Deep Dive',
        title: 'System Design Matters More When Teams Are Small',
        duration: '24 min watch',
        durationType: 'watch',
        tag: 'System Design',
        icon: Layers,
        accent: 'green',
    },
    {
        label: 'AI Workflow',
        title: 'When to Trust AI-Generated Code',
        duration: '21 min watch',
        durationType: 'watch',
        tag: 'AI-Assisted Engineering',
        icon: Sparkles,
        accent: 'orange',
    },
    {
        label: 'Career Framework',
        title: 'Building Something You Can Talk About in an Interview',
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
