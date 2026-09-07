import { type LucideIcon } from 'lucide-react';

export type SpecialistAccent = 'blue' | 'green' | 'purple' | 'orange';

export type Specialist = {
    id: string;
    number: number;
    name: string;
    description: string;
    tags: string[];
    accent: SpecialistAccent;
};

export type MentorshipSystemPoint = {
    label: string;
    icon: LucideIcon;
};

export type SpecialistFeatureStripItem = {
    title: string;
    description: string;
    icon: LucideIcon;
    accent: SpecialistAccent;
};

export type MobileSpecialist = {
    id: string;
    title: string;
    tags: string[];
    icon: LucideIcon;
    accent: SpecialistAccent;
};

export type MobileFeatureStripItem = {
    title: string;
    icon: LucideIcon;
    accent: SpecialistAccent;
};