import { type LucideIcon } from 'lucide-react';

export type TrackId = 'foundation' | 'growth' | 'leadership';

export type CareerTrack = {
    id: TrackId;
    title: string;
    experience: string;
    description: string;
    icon: LucideIcon;
    accent: string;
    iconBackground: string;
    focusAreas: string;
    bestFor: string;
    outcome: string;
    duration: string;
    format: string;
    projects: string;
    careerLayer: string;
    mobileProjectLabel: string;
    curriculumPath: string;
};

export type TrackDetailProps = {
    track: CareerTrack;
    mobile?: boolean;
};

export type TrackMetaItemProps = {
    icon: LucideIcon;
    label: string;
    compact?: boolean;
};
