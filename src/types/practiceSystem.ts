import { type LucideIcon } from 'lucide-react';

export type PracticeTabId = 'practice' | 'labs' | 'mocks' | 'reviews';

export type PracticeTab = {
    id: PracticeTabId;
    label: string;
    icon: LucideIcon;
};

export type LoopBullet = {
    label: string;
    icon: LucideIcon;
};

export type PracticeTaskContent = {
    tag: string;
    title: string;
    tags: string[];
    codeLines: string[];
};

export type ChecklistItem = {
    label: string;
    done: boolean;
};

export type FeedbackStatus =
    | 'on-track'
    | 'improving'
    | 'needs-review'
    | 'ready-for-review';

export type FeedbackMetric = {
    label: string;
    status: FeedbackStatus;
    icon: LucideIcon;
};

export type ReadinessAccent = 'blue' | 'green' | 'purple' | 'orange';

export type ReadinessMetric = {
    label: string;
    status: FeedbackStatus;
    icon: LucideIcon;
    accent: ReadinessAccent;
};

export type FeatureStripItem = {
    title: string;
    description: string;
    icon: LucideIcon;
};
