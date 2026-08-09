import { type LucideIcon } from 'lucide-react';

export type ProgressAccent = 'one' | 'two' | 'three' | 'four';

export type ProgressProof = {
    title: string;
    icon: LucideIcon;
    accent: ProgressAccent;
    before: string;
    after: string;
    badge: string;
};

export type ProgressSidebarPoint = {
    label: string;
    icon: LucideIcon;
};

export type ProgressFeatureStripItem = {
    title: string;
    description: string;
    icon: LucideIcon;
    accent: ProgressAccent;
};

export type MobileProgressProof = {
    title: string;
    icon: LucideIcon;
    accent: ProgressAccent;
    before: string;
    after: string;
};
