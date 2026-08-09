import { type LucideIcon } from 'lucide-react';

export type InsightAccent = 'purple' | 'green' | 'orange' | 'blue';

export type InsightDurationType = 'watch' | 'read';

export type FeaturedTalk = {
    badge: string;
    title: string;
    description: string;
    descriptionMobile: string;
    duration: string;
    tags: string[];
};

export type InsightArticle = {
    label: string;
    title: string;
    duration: string;
    durationType: InsightDurationType;
    tag: string;
    icon: LucideIcon;
    accent: InsightAccent;
};

export type CareerInsightsFeatureStripItem = {
    title: string;
    description: string;
    icon: LucideIcon;
    accent: InsightAccent;
};
