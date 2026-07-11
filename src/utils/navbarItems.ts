import { NavigationItem } from '@/types/navbar';

export const navigationItems: NavigationItem[] = [
    {
        label: 'Program',
        children: [
            {
                label: 'Why This Program',
                href: '#why-now',
            },
            {
                label: 'Program Structure',
                href: '#program',
            },
            {
                label: 'Learning Journey',
                href: '#journey',
            },
        ],
    },
    {
        label: 'Curriculum',
        href: '#curriculum',
    },
    {
        label: 'Projects',
        href: '#projects',
    },
    {
        label: 'Mentors',
        href: '#mentors',
    },
    {
        label: 'Outcomes',
        href: '#outcomes',
    },
    {
        label: 'Resources',
        children: [
            {
                label: 'Career Insights',
                href: '#career-insights',
            },
            {
                label: 'Learning Ecosystem',
                href: '#resources',
            },
            {
                label: 'Frequently Asked Questions',
                href: '#faq',
            },
        ],
    },
    // {
    //     label: 'About us',
    //     href: '#about',
    // },
];
