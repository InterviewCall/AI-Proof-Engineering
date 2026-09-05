export type AlumniStory = {
    name: string;
    image: string;            // small avatar (mini card)
    featuredImage: string;    // hero background (featured card) — static for now
    role: string;
    yoe: string;
    priorFocus: string;
    builtWith: string[];
    careerStepRole: string;
    careerStepCompany: string;
    careerStepCompanyLogo: string;
    quote: string;
    quoteAuthor: string;
    videoLabel: string;   // featured card CTA, e.g. "Watch Ananya's Story"
    ctaLabel: string;     // mini card CTA, e.g. "View Ananya's Story"
};

export type AlumniCompany = {
    name: string;
    logo: string;
};