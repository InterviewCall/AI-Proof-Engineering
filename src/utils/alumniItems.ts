import {
    type AlumniCompany,
    type AlumniMiniStory,
    type FeaturedAlumniStory,
} from '@/types/alumni';

const ALUMNI_FEATURED_IMAGE = '/images/optimized-svg/alumnis/Alumni_feature_section.svg';
const ALUMNI_FEATURED_LOGO = '/images/optimized-svg/alumnis/Alumni_feature_company.svg';
const ALUMNI_IMAGE_1 = '/images/optimized-svg/alumnis-photos/Alumni1.png';
const ALUMNI_IMAGE_2 = '/images/optimized-svg/alumnis-photos/Alumni2.png';
const ALUMNI_IMAGE_3 = '/images/optimized-svg/alumnis-photos/Alumni3.png';

const COMPANY_LOGO_PATH = '/images/optimized-svg/companies-for-alumni';

export const featuredAlumniStory: FeaturedAlumniStory = {
    name: 'Rahul Sharma',
    image: ALUMNI_FEATURED_IMAGE,
    role: 'Backend Engineer',
    yoe: '2.3 YOE',
    priorFocus: 'Backend Implementation',
    builtWith: ['System Design', 'AI Workflows', 'Mock Reviews'],
    careerStepRole: 'Software Engineer II',
    careerStepCompany: 'Amazon',
    careerStepCompanyLogo: ALUMNI_FEATURED_LOGO,
    quote: 'The capstone project and mock reviews helped me think like an engineer. The structured learning path gave me the confidence to clear interviews I once struggled with.',
    quoteAuthor: 'Rahul Sharma',
    videoLabel: 'Watch Rahul\'s Story',
};

export const alumniMiniStories: AlumniMiniStory[] = [
    {
        name: 'Ananya Iyer',
        image: ALUMNI_IMAGE_1,
        role: 'SDE',
        yoe: '1.8 YOE',
        priorFocus: 'QA Engineer',
        careerStepRole: 'Software Engineer',
        company: 'Microsoft',
        companyLogo: `${COMPANY_LOGO_PATH}/Microsoft.svg`,
        quote: 'The mentorship and mock interviews helped me improve my clarity and communication.',
        ctaLabel: 'View Ananya\'s Story',
    },
    {
        name: 'Vikram Singh',
        image: ALUMNI_IMAGE_2,
        role: 'Software Developer',
        yoe: '3 YOE',
        priorFocus: 'Software Developer',
        careerStepRole: 'Senior Software Engineer',
        company: 'Uber',
        companyLogo: `${COMPANY_LOGO_PATH}/Uber.svg`,
        quote: 'InterviewCall pushed me to think deeper and communicate better in interviews.',
        ctaLabel: 'View Vikram\'s Story',
    },
    {
        name: 'Arjun Patel',
        image: ALUMNI_IMAGE_3,
        role: 'SDE',
        yoe: '2 YOE',
        priorFocus: 'Junior Developer',
        careerStepRole: 'Software Engineer II',
        company: 'Flipkart',
        companyLogo: `${COMPANY_LOGO_PATH}/Flipkart.svg`,
        quote: 'The mock interviews and feedback loop were the real game-changer for me.',
        ctaLabel: 'View Arjun\'s Story',
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
