import { type LucideIcon } from 'lucide-react';

export type CapstoneAccent = 'blue' | 'green' | 'purple' | 'orange';

export type CapstoneDeliverable = {
    title: string;
    description: string;
    icon: LucideIcon;
    accent: CapstoneAccent;
};

export type ExampleProject = {
    title: string;
    description: string;
    icon: LucideIcon;
    accent: CapstoneAccent;
};

export type CapstoneFeatureItem = {
    title: string;
    description: string;
    icon: LucideIcon;
};
