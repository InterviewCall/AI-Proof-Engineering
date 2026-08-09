import { type LucideIcon } from 'lucide-react';

export type TrackAccent = 'blue' | 'green' | 'purple';
export type ChipAccent = 'blue' | 'green' | 'purple' | 'orange';

export type CareerTrack = {
    title: string;
    yoe: string;
    description: string;
    icon: LucideIcon;
    accent: TrackAccent;
};

export type AdmissionInfoChip = {
    label: string;
    icon: LucideIcon;
    accent: ChipAccent;
};

export type MobileTrackInclude = {
    label: string;
    icon: LucideIcon;
};

export type TrackPill = {
    label: string;
    icon: LucideIcon;
    accent: TrackAccent;
};
