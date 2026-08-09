import { InstagramIcon } from '@/components/Footer/icons/InstagramIcon';
import { LinkedInIcon } from '@/components/Footer/icons/LinkedInIcon';
import { XIcon } from '@/components/Footer/icons/XIcon';
import { YoutubeIcon } from '@/components/Footer/icons/YoutubeIcon';
import { type FooterColumn, type SocialLink } from '@/types/footer';

export const footerColumns: FooterColumn[] = [
    {
        title: 'Program',
        links: [
            { label: 'AI-Proof Engineer Program', href: '#program-glance' },
            { label: 'Foundation Track', href: '#career-path' },
            { label: 'Growth Track', href: '#career-path' },
            { label: 'Leadership Track', href: '#career-path' },
            { label: '10-Phase Curriculum', href: '#structured-journey' },
            { label: 'How It Works', href: '#solution' },
        ],
    },
    {
        title: 'Learning System',
        links: [
            { label: 'Practice + Labs', href: '#practice-system' },
            { label: 'Mocks + Reviews', href: '#real-progress' },
            { label: 'Capstone Proof', href: '#capstone-proof' },
            { label: 'Mentors', href: '#specialists' },
            { label: 'Learner Progress', href: '#real-progress' },
            { label: 'Career Desk', href: '#career-insights' },
        ],
    },
    {
        title: 'Admissions',
        links: [
            { label: 'Program Counselling', href: '#callback' },
            { label: 'Track Selection', href: '#career-path' },
            { label: 'Admissions & Fees', href: '#build-proof' },
            { label: 'Frequently Asked Questions', href: '#faq' },
            { label: 'Download Curriculum', href: '#curriculum' },
        ],
    },
    {
        title: 'Company',
        links: [
            { label: 'About InterviewCall', href: '#program' },
            { label: 'Contact Us', href: '#callback' },
            { label: 'Privacy Policy', href: '#privacy' },
            { label: 'Terms of Use', href: '#terms' },
        ],
    },
];

export const socialLinks: SocialLink[] = [
    {
        label: 'LinkedIn',
        href: 'https://linkedin.com',
        icon: LinkedInIcon,
    },
    {
        label: 'X (Twitter)',
        href: 'https://x.com',
        icon: XIcon,
    },
    {
        label: 'YouTube',
        href: 'https://youtube.com',
        icon: YoutubeIcon,
    },
    {
        label: 'Instagram',
        href: 'https://instagram.com',
        icon: InstagramIcon,
    },
];
