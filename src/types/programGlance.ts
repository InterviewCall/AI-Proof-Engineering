import { type LucideIcon } from 'lucide-react';

export type GlanceAccent = 'blue' | 'green' | 'purple' | 'orange';

export type GlanceInfoCard = {
    title: string;
    description: string;
    icon: LucideIcon;
    accent: GlanceAccent;
};

export type GlanceAudiencePill = {
    label: string;
    icon: LucideIcon;
};
