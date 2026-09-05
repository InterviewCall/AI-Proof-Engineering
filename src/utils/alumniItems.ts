import { type AlumniCompany, type AlumniStory } from '@/types/alumni';

const ALUMNI_FEATURED_IMAGE = '/images/optimized-svg/alumnis/Alumni_feature_section.svg';
const ALUMNI_IMAGE_1 = '/images/optimized-svg/alumnis-photos/Alumni1.png';
const ALUMNI_IMAGE_2 = '/images/optimized-svg/alumnis-photos/Alumni2.png';
const ALUMNI_IMAGE_3 = '/images/optimized-svg/alumnis-photos/Alumni3.png';

const COMPANY_LOGO_PATH = '/images/optimized-svg/companies-for-alumni';

export const alumniStories: AlumniStory[] = [
    {
        name: 'Ananya Iyer',
        image: ALUMNI_IMAGE_1,
        featuredImage: ALUMNI_FEATURED_IMAGE, // static for now
        role: 'SDE',
        yoe: '1.8 YOE',
        priorFocus: 'QA Engineer',
        builtWith: ['System Design', 'AI Workflows', 'Mock Reviews'],
        careerStepRole: 'Software Engineer',
        careerStepCompany: 'Microsoft',
        careerStepCompanyLogo: `${COMPANY_LOGO_PATH}/Microsoft.svg`,
        quote: 'The mentorship and mock interviews helped me improve my clarity and communication.',
        quoteAuthor: 'Ananya Iyer',
        videoLabel: "Watch Ananya's Story",
        ctaLabel: "View Ananya's Story",
    },
    {
        name: 'Vikram Singh',
        image: ALUMNI_IMAGE_2,
        featuredImage: ALUMNI_FEATURED_IMAGE,
        role: 'Software Developer',
        yoe: '3 YOE',
        priorFocus: 'Software Developer',
        builtWith: ['System Design', 'AI Workflows', 'Mock Reviews'],
        careerStepRole: 'Senior Software Engineer',
        careerStepCompany: 'Uber',
        careerStepCompanyLogo: `${COMPANY_LOGO_PATH}/Uber.svg`,
        quote: 'InterviewCall pushed me to think deeper and communicate better in interviews.',
        quoteAuthor: 'Vikram Singh',
        videoLabel: "Watch Vikram's Story",
        ctaLabel: "View Vikram's Story",
    },
    {
        name: 'Arjun Patel',
        image: ALUMNI_IMAGE_3,
        featuredImage: ALUMNI_FEATURED_IMAGE,
        role: 'SDE',
        yoe: '2 YOE',
        priorFocus: 'Junior Developer',
        builtWith: ['System Design', 'AI Workflows', 'Mock Reviews'],
        careerStepRole: 'Software Engineer II',
        careerStepCompany: 'Flipkart',
        careerStepCompanyLogo: `${COMPANY_LOGO_PATH}/Flipkart.svg`,
        quote: 'The mock interviews and feedback loop were the real game-changer for me.',
        quoteAuthor: 'Arjun Patel',
        videoLabel: "Watch Arjun's Story",
        ctaLabel: "View Arjun's Story",
    },
];

export const alumniCompanies: AlumniCompany[] = [
    { name: 'Google', logo: `${COMPANY_LOGO_PATH}/Google.svg` },
    { name: 'Microsoft', logo: `${COMPANY_LOGO_PATH}/Microsoft.svg` },
    { name: 'Amazon', logo: `${COMPANY_LOGO_PATH}/Amazon.svg` },
    { name: 'Uber', logo: `${COMPANY_LOGO_PATH}/Uber.svg` },
    { name: 'Flipkart', logo: `${COMPANY_LOGO_PATH}/Flipkart.svg` },
    { name: 'Walmart', logo: `${COMPANY_LOGO_PATH}/Walmart.svg` },
    { name: 'Atlassian', logo: `${COMPANY_LOGO_PATH}/Atlassian.svg` },
    { name: 'Zepto', logo: `${COMPANY_LOGO_PATH}/Zepto.svg` },
];