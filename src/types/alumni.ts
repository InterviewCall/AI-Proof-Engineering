export type FeaturedAlumniStory = {
    name: string;
    image: string;
    role: string;
    yoe: string;
    priorFocus: string;
    builtWith: string[];
    careerStepRole: string;
    careerStepCompany: string;
    careerStepCompanyLogo: string;
    quote: string;
    quoteAuthor: string;
    videoLabel: string;
};

export type AlumniMiniStory = {
    name: string;
    image: string;
    role: string;
    yoe: string;
    priorFocus: string;
    careerStepRole: string;
    company: string;
    companyLogo: string;
    quote: string;
    ctaLabel: string;
};

export type AlumniCompany = {
    name: string;
    logo: string;
};
