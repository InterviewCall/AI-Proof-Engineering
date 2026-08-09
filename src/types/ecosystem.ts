import { type LucideIcon } from 'lucide-react';

export type EcosystemAccent = 'blue' | 'green' | 'purple';

export type ProgramUpdate = {
    category: string;
    title: string;
    description: string;
    icon: LucideIcon;
    accent: EcosystemAccent;
};

export type EcosystemMiniCard = {
    title: string;
    description: string;
    icon: LucideIcon;
};

export type EcosystemFeatureStripItem = {
    title: string;
    icon: LucideIcon;
};

export type MobileEcosystemItem = {
    label: string;
    icon: LucideIcon;
};
