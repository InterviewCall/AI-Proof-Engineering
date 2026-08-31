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
            'Data structures and algorithms, clean coding habits, backend basics, debugging, structuring an interview answer, and checking AI output before you rely on it.',
        bestFor:
            'Engineers early in their career who want a stronger technical base before tackling harder material.',
        outcome:
            'Walk into an interview able to explain a project in your own words, not describe what it does from memory.',
        mobileFocusAreas:
            'Data structures and algorithms, clean coding habits, and debugging.',
        mobileBestFor:
            'Early-career engineers who want a stronger technical base.',
        mobileOutcome:
            'Explain a project in your own words in an interview.',
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
            'System design, backend depth, machine coding, debugging under time pressure, working with AI on real tasks, and interviewing at product companies.',
        bestFor:
            'Engineers who can already ship, and want to take on bigger, less well-defined problems.',
        outcome:
            'Handle a system design round or a machine coding round with a process you can repeat.',
        mobileFocusAreas:
            'System design, backend depth, and machine coding.',
        mobileBestFor:
            'Engineers ready to take on bigger, less-defined problems.',
        mobileOutcome:
            'Handle a system design or machine coding round with a repeatable process.',
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
            'Architecture decisions, scaling trade-offs, design reviews, explaining technical decisions to non-engineers, and senior-level interviews.',
        bestFor:
            "Senior engineers and experienced ICs, not only people who manage a team.",
        outcome:
            "Explain a system you didn't build, and defend the choices in one you did.",
        mobileFocusAreas:
            'Architecture decisions, scaling trade-offs, and design reviews.',
        mobileBestFor:
            'Senior engineers and experienced ICs, not just managers.',
        mobileOutcome: 'Explain and defend system-level decisions.',
        duration: '6–9 months',
        format: 'Live + Labs',
        projects: 'AI + System Design',
        careerLayer: 'Mocks + Profile Review',
        mobileProjectLabel: 'Mocks + Capstone',
        curriculumPath: '/documents/ai-engineering-curriculum.pdf',
    },
];
