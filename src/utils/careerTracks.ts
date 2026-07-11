import {
    ChartNoAxesCombined,
    Crown,
    Sprout,
} from 'lucide-react';

import { type CareerTrack } from '@/types/careerPath';

export const careerTracks: CareerTrack[] = [
    {
        id: 'foundation',
        title: 'Foundation Track',
        experience: '0–2 YOE',
        description:
            'For software engineers with 0–2 years of experience who want to build strong fundamentals and become interview-ready for product companies.',
        icon: Sprout,
        accent: '#175AED',
        iconBackground: '#F2F8FE',
        focusAreas:
            'AI-assisted engineering, system design, debugging, backend depth, machine coding, and interview communication.',
        bestFor:
            'Engineers who understand basic coding but need stronger fundamentals, structure, and product-company readiness.',
        outcome:
            'A clearer roadmap, stronger technical judgment, better interview structure, and portfolio-ready proof.',
        duration: '6–9 months',
        format: 'Live + Labs',
        projects: 'AI + System Design',
        careerLayer: 'Mocks + Profile Review',
        mobileProjectLabel: 'Mocks + Capstone',
        curriculumPath: '/documents/ai-engineering-curriculum.pdf',
    },
    {
        id: 'growth',
        title: 'Growth Track',
        experience: '2–5 YOE',
        description:
            'For software engineers with 2–5 years of experience who want to become stronger product engineers in the AI era.',
        icon: ChartNoAxesCombined,
        accent: '#0542F7',
        iconBackground: '#F2F8FE',
        focusAreas:
            'AI-assisted engineering, system design, debugging, backend depth, machine coding, and interview communication.',
        bestFor:
            'Engineers who can code but want stronger product-company readiness and AI-era execution.',
        outcome:
            'A clearer roadmap, stronger technical judgment, better interview structure, and portfolio-ready proof.',
        duration: '6–9 months',
        format: 'Live + Labs',
        projects: 'AI + System Design',
        careerLayer: 'Mocks + Profile Review',
        mobileProjectLabel: 'Mocks + Capstone',
        curriculumPath: '/documents/ai-engineering-curriculum.pdf',
    },
    {
        id: 'leadership',
        title: 'Leadership Track',
        experience: '5+ YOE',
        description:
            'For software engineers with 5+ years of experience who want to strengthen technical leadership, system design, and senior-level interview readiness.',
        icon: Crown,
        accent: '#7256E8',
        iconBackground: '#F2EFFF',
        focusAreas:
            'AI-assisted engineering, system design, debugging, backend depth, machine coding, and interview communication.',
        bestFor:
            'Engineers who can code but want stronger product-company readiness and AI-era execution.',
        outcome:
            'A clearer roadmap, stronger technical judgment, better interview structure, and portfolio-ready proof.',
        duration: '6–9 months',
        format: 'Live + Labs',
        projects: 'AI + System Design',
        careerLayer: 'Mocks + Profile Review',
        mobileProjectLabel: 'Mocks + Capstone',
        curriculumPath: '/documents/ai-engineering-curriculum.pdf',
    },
];
