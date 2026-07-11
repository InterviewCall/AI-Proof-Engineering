import { type LucideIcon } from 'lucide-react';

export type ModelItem = {
    desktopText: string;
    mobileText: string;
    icon: LucideIcon;
};

export type CapabilityItem = {
    title: string;
    desktopDescription: [string, string];
    mobileDescription: string;
    icon: LucideIcon;
};
