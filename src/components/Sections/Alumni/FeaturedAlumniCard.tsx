// import {
//     ArrowRight,
//     Briefcase,
//     CircleCheck,
//     Code2,
//     Play,
//     TrendingUp,
// } from 'lucide-react';
// import Image from 'next/image';
// import { FC } from 'react';

// import { featuredAlumniStory } from '@/utils/alumniItems';

// const FeaturedAlumniCard: FC = () => {
//     return (
//         <div
//             className="
//                 relative
//                 isolate
//                 flex
//                 flex-col
//                 justify-between
//                 overflow-hidden
//                 rounded-2xl
//                 border
//                 border-(--alumni-featured-card-border)
//                 bg-(--alumni-featured-card-bg)
//                 p-6
//                 sm:p-7
//                 lg:p-7
//             "
//         >
//             <Image
//                 src={featuredAlumniStory.image}
//                 alt=""
//                 aria-hidden="true"
//                 fill
//                 sizes="(max-width: 1024px) 100vw, 700px"
//                 className="-z-10 object-cover"
//             />

//             <div
//                 aria-hidden="true"
//                 className="
//                     pointer-events-none
//                     absolute
//                     inset-0
//                     -z-10
//                     bg-gradient-to-r
//                     from-black/92
//                     via-black/70
//                     to-black/25
//                 "
//             />

//             <div>
//                 <span
//                     className="
//                         inline-flex
//                         min-h-7
//                         items-center
//                         gap-1.5
//                         rounded-lg
//                         border
//                         border-(--alumni-featured-badge-border)
//                         bg-(--alumni-featured-badge-bg)
//                         px-3
//                         text-[11px]
//                         font-bold
//                         uppercase
//                         tracking-[0.04em]
//                         text-(--alumni-featured-badge-text)
//                     "
//                 >
//                     <CircleCheck
//                         aria-hidden="true"
//                         className="h-3.5 w-3.5"
//                         strokeWidth={2.2}
//                     />
//                     <span>Verified Alumni Story</span>
//                 </span>

//                 <h3
//                     className="
//                         mt-4
//                         text-[26px]
//                         font-bold
//                         leading-tight
//                         tracking-[-1%]
//                         text-(--alumni-featured-name-text)
//                         sm:text-[30px]
//                     "
//                 >
//                     {featuredAlumniStory.name}
//                 </h3>

//                 <p
//                     className="
//                         mt-1
//                         text-[14px]
//                         font-medium
//                         text-(--alumni-featured-meta-text)
//                     "
//                 >
//                     {featuredAlumniStory.role} &bull; {featuredAlumniStory.yoe}
//                 </p>

//                 <div className="mt-5 h-px w-full bg-(--alumni-featured-divider) lg:mt-4" />

//                 <div className="mt-5 flex items-start justify-between gap-2 lg:mt-4">
//                     <div className="min-w-0">
//                         <span className="flex items-center gap-1.5 text-(--alumni-featured-info-icon)">
//                             <Code2
//                                 aria-hidden="true"
//                                 className="h-4 w-4"
//                                 strokeWidth={1.9}
//                             />
//                         </span>

//                         <p
//                             className="
//                                 mt-2
//                                 text-[10.5px]
//                                 font-bold
//                                 uppercase
//                                 tracking-[0.04em]
//                                 text-(--alumni-featured-info-label)
//                             "
//                         >
//                             Prior Focus
//                         </p>

//                         <p
//                             className="
//                                 mt-1
//                                 text-[13px]
//                                 leading-[1.4]
//                                 font-semibold
//                                 text-(--alumni-featured-info-value)
//                             "
//                         >
//                             {featuredAlumniStory.priorFocus}
//                         </p>
//                     </div>

//                     <ArrowRight
//                         aria-hidden="true"
//                         className="mt-1.5 h-4 w-4 shrink-0 text-(--alumni-featured-info-arrow)"
//                         strokeWidth={1.9}
//                     />

//                     <div className="min-w-0">
//                         <span className="flex items-center gap-1.5 text-(--alumni-featured-info-icon)">
//                             <TrendingUp
//                                 aria-hidden="true"
//                                 className="h-4 w-4"
//                                 strokeWidth={1.9}
//                             />
//                         </span>

//                         <p
//                             className="
//                                 mt-2
//                                 text-[10.5px]
//                                 font-bold
//                                 uppercase
//                                 tracking-[0.04em]
//                                 text-(--alumni-featured-info-label)
//                             "
//                         >
//                             Built With InterviewCall
//                         </p>

//                         <ul className="mt-1 space-y-0.5">
//                             {featuredAlumniStory.builtWith.map((item) => (
//                                 <li
//                                     key={item}
//                                     className="
//                                         text-[13px]
//                                         leading-[1.4]
//                                         font-semibold
//                                         text-(--alumni-featured-info-value)
//                                     "
//                                 >
//                                     &bull; {item}
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>

//                     <ArrowRight
//                         aria-hidden="true"
//                         className="mt-1.5 h-4 w-4 shrink-0 text-(--alumni-featured-info-arrow)"
//                         strokeWidth={1.9}
//                     />

//                     <div className="min-w-0">
//                         <span className="flex items-center gap-1.5 text-(--alumni-featured-info-icon)">
//                             <Briefcase
//                                 aria-hidden="true"
//                                 className="h-4 w-4"
//                                 strokeWidth={1.9}
//                             />
//                         </span>

//                         <p
//                             className="
//                                 mt-2
//                                 text-[10.5px]
//                                 font-bold
//                                 uppercase
//                                 tracking-[0.04em]
//                                 text-(--alumni-featured-info-label)
//                             "
//                         >
//                             Career Step
//                         </p>

//                         <p
//                             className="
//                                 mt-1
//                                 text-[13px]
//                                 leading-[1.4]
//                                 font-semibold
//                                 text-(--alumni-featured-info-value)
//                             "
//                         >
//                             {featuredAlumniStory.careerStepRole}
//                         </p>

//                         <div className="relative mt-1.5 h-5 w-20 rounded bg-white/95 px-1.5 py-0.5">
//                             <Image
//                                 src={featuredAlumniStory.careerStepCompanyLogo}
//                                 alt={featuredAlumniStory.careerStepCompany}
//                                 fill
//                                 sizes="80px"
//                                 className="object-contain object-left p-0.5"
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className="mt-6 lg:mt-4">
//                 <p
//                     className="
//                         max-w-135
//                         text-[15px]
//                         leading-[1.6]
//                         text-(--alumni-featured-quote-text)
//                         lg:leading-[1.45]
//                     "
//                 >
//                     {featuredAlumniStory.quote}
//                 </p>

//                 <p
//                     className="
//                         mt-2
//                         text-[13px]
//                         text-(--alumni-featured-quote-author)
//                     "
//                 >
//                     &mdash; {featuredAlumniStory.quoteAuthor}
//                 </p>

//                 <button
//                     type="button"
//                     className="
//                         group
//                         mt-5
//                         lg:mt-4
//                         inline-flex
//                         min-h-11.5
//                         cursor-pointer
//                         items-center
//                         gap-2.5
//                         rounded-lg
//                         border
//                         border-(--alumni-featured-cta-border)
//                         bg-(--alumni-featured-cta-bg)
//                         px-5
//                         text-[14px]
//                         font-semibold
//                         text-(--alumni-featured-cta-text)
//                         transition-colors
//                         hover:bg-(--alumni-featured-cta-hover-bg)
//                         focus-visible:outline-none
//                         focus-visible:ring-4
//                         focus-visible:ring-(--focus-ring-color)
//                     "
//                 >
//                     <span
//                         className="
//                             flex
//                             h-6
//                             w-6
//                             shrink-0
//                             items-center
//                             justify-center
//                             rounded-full
//                             bg-white
//                             text-(--alumni-featured-card-bg)
//                         "
//                     >
//                         <Play
//                             aria-hidden="true"
//                             className="ml-0.5 h-3 w-3 fill-current"
//                             strokeWidth={0}
//                         />
//                     </span>

//                     <span>{featuredAlumniStory.videoLabel}</span>

//                     <ArrowRight
//                         aria-hidden="true"
//                         className="
//                             h-4
//                             w-4
//                             transition-transform
//                             duration-200
//                             group-hover:translate-x-1
//                         "
//                         strokeWidth={1.9}
//                     />
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default FeaturedAlumniCard;


import {
    ArrowRight,
    Briefcase,
    CircleCheck,
    Code2,
    Play,
    TrendingUp,
} from 'lucide-react';
import Image from 'next/image';
import { FC } from 'react';

import { featuredAlumniStory } from '@/utils/alumniItems';

const FeaturedAlumniCard: FC = () => {
    return (
        <div
            className="
                relative
                isolate
                self-start
                overflow-hidden
                rounded-2xl
                border
                border-(--alumni-featured-card-border)
                bg-(--alumni-featured-card-bg)
                p-6
                sm:p-6
                lg:aspect-[1.47/1]
            "
        >
            {/* Background image */}
            <Image
                src={featuredAlumniStory.image}
                alt=""
                aria-hidden="true"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 700px"
                className="
                    -z-20
                    object-cover
                    object-[67%_center]
                "
            />

            {/* Dark overlay */}
            <div
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute
                    inset-0
                    -z-10
                    bg-[linear-gradient(90deg,rgba(0,18,48,0.98)_0%,rgba(0,18,48,0.96)_35%,rgba(0,17,43,0.88)_47%,rgba(0,10,27,0.55)_59%,rgba(0,0,0,0.12)_76%,rgba(0,0,0,0.03)_100%)]
                "
            />

            {/* Desktop content only occupies the left side */}
            <div
                className="
                    relative
                    z-10
                    flex
                    h-full
                    flex-col
                    lg:w-[53%]
                "
            >
                {/* Header */}
                <div>
                    <span
                        className="
                            inline-flex
                            min-h-6
                            items-center
                            gap-2
                            rounded-lg
                            border
                            border-(--alumni-featured-badge-border)
                            bg-(--alumni-featured-badge-bg)
                            px-3
                            text-[10.5px]
                            font-bold
                            uppercase
                            tracking-[0.025em]
                            text-(--alumni-featured-badge-text)
                        "
                    >
                        <CircleCheck
                            aria-hidden="true"
                            className="h-3.5 w-3.5 shrink-0"
                            strokeWidth={2.2}
                        />

                        <span>Verified Alumni Story</span>
                    </span>

                    <h3
                        className="
                            mt-3.5
                            text-[25px]
                            leading-[1.08]
                            font-bold
                            tracking-[-0.025em]
                            text-(--alumni-featured-name-text)
                            sm:text-[28px]
                        "
                    >
                        {featuredAlumniStory.name}
                    </h3>

                    <p
                        className="
                            mt-1.5
                            text-[13px]
                            leading-none
                            font-medium
                            text-(--alumni-featured-meta-text)
                        "
                    >
                        {featuredAlumniStory.role}
                        <span className="mx-2">•</span>
                        {featuredAlumniStory.yoe}
                    </p>

                    <div
                        className="
                            mt-4
                            h-px
                            w-full
                            bg-(--alumni-featured-divider)
                        "
                    />

                    {/* Career progression */}
                    <div
                        className="
                            mt-4
                            grid
                            grid-cols-[1fr_24px_1.32fr_24px_0.9fr]
                            items-stretch
                            gap-x-2
                        "
                    >
                        {/* Prior focus */}
                        <div className="py-0.5">
                            <div
                                className="
                                    flex
                                    items-center
                                    gap-2
                                    text-(--alumni-featured-info-icon)
                                "
                            >
                                <Code2
                                    aria-hidden="true"
                                    className="h-4.5 w-4.5 shrink-0"
                                    strokeWidth={1.9}
                                />

                                <p
                                    className="
                                        text-[9.5px]
                                        leading-[1.15]
                                        font-bold
                                        uppercase
                                        tracking-[0.02em]
                                        text-(--alumni-featured-info-label)
                                    "
                                >
                                    Prior Focus
                                </p>
                            </div>

                            <p
                                className="
                                    mt-2
                                    text-[12px]
                                    leading-[1.45]
                                    font-semibold
                                    text-(--alumni-featured-info-value)
                                "
                            >
                                {featuredAlumniStory.priorFocus}
                            </p>
                        </div>

                        {/* Divider + arrow */}
                        <div
                            className="
                                relative
                                min-h-17
                                border-r
                                border-(--alumni-featured-divider)
                            "
                        >
                            <ArrowRight
                                aria-hidden="true"
                                className="
                                    absolute
                                    top-1/2
                                    right-[-4px]
                                    h-4
                                    w-4
                                    -translate-y-1/2
                                    bg-(--alumni-featured-card-bg)
                                    text-(--alumni-featured-info-arrow)
                                "
                                strokeWidth={1.9}
                            />
                        </div>

                        {/* Built with InterviewCall */}
                        <div className="py-0.5">
                            <div
                                className="
                                    flex
                                    items-start
                                    gap-2
                                    text-(--alumni-featured-info-icon)
                                "
                            >
                                <TrendingUp
                                    aria-hidden="true"
                                    className="mt-px h-4.5 w-4.5 shrink-0"
                                    strokeWidth={1.9}
                                />

                                <p
                                    className="
                                        text-[9.5px]
                                        leading-[1.15]
                                        font-bold
                                        uppercase
                                        tracking-[0.02em]
                                        text-(--alumni-featured-info-label)
                                    "
                                >
                                    Built With InterviewCall
                                </p>
                            </div>

                            <ul className="mt-2 space-y-0.5">
                                {featuredAlumniStory.builtWith.map((item) => (
                                    <li
                                        key={item}
                                        className="
                                            text-[12px]
                                            leading-[1.4]
                                            font-semibold
                                            text-(--alumni-featured-info-value)
                                        "
                                    >
                                        • {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Divider + arrow */}
                        <div
                            className="
                                relative
                                min-h-17
                                border-r
                                border-(--alumni-featured-divider)
                            "
                        >
                            <ArrowRight
                                aria-hidden="true"
                                className="
                                    absolute
                                    top-1/2
                                    right-[-4px]
                                    h-4
                                    w-4
                                    -translate-y-1/2
                                    bg-(--alumni-featured-card-bg)
                                    text-(--alumni-featured-info-arrow)
                                "
                                strokeWidth={1.9}
                            />
                        </div>

                        {/* Career step */}
                        <div className=" py-0.5">
                            <div
                                className="
                                    flex
                                    items-center
                                    gap-2
                                    text-(--alumni-featured-info-icon)
                                "
                            >
                                <Briefcase
                                    aria-hidden="true"
                                    className="h-4.5 w-4.5 shrink-0"
                                    strokeWidth={1.9}
                                />

                                <p
                                    className="
                                        text-[9.5px]
                                        leading-[1.15]
                                        font-bold
                                        uppercase
                                        tracking-[0.02em]
                                        text-(--alumni-featured-info-label)
                                    "
                                >
                                    Career Step
                                </p>
                            </div>

                            <p
                                className="
                                    mt-2
                                    text-[12px]
                                    leading-[1.35]
                                    font-semibold
                                    text-(--alumni-featured-info-value)
                                "
                            >
                                {featuredAlumniStory.careerStepRole}
                            </p>

                            <div
                                className="
                                    relative
                                    mt-1.5
                                    h-5
                                    w-20
                                "
                            >
                                <Image
                                    src={
                                        featuredAlumniStory.careerStepCompanyLogo
                                    }
                                    alt={
                                        featuredAlumniStory.careerStepCompany
                                    }
                                    fill
                                    sizes="80px"
                                    className="
                                        object-contain
                                        object-left
                                    "
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom content */}
                <div className="mt-auto pt-5">
                    <p
                        className="
                            text-[13px]
                            w-full
                            leading-[1.5]
                            text-(--alumni-featured-quote-text)
                        "
                    >
                        {featuredAlumniStory.quote}
                    </p>

                    <p
                        className="
                            mt-2
                            text-[12px]
                            text-(--alumni-featured-quote-author)
                        "
                    >
                        &mdash; {featuredAlumniStory.quoteAuthor}
                    </p>

                    <button
                        type="button"
                        className="
                            group
                            mt-4
                            inline-flex
                            min-h-9
                            cursor-pointer
                            items-center
                            gap-2.5
                            rounded-md
                            border
                            border-(--alumni-featured-cta-border)
                            bg-(--alumni-featured-cta-bg)
                            px-4
                            text-[12px]
                            font-semibold
                            text-(--alumni-featured-cta-text)
                            transition-colors
                            hover:bg-(--alumni-featured-cta-hover-bg)
                            focus-visible:outline-none
                            focus-visible:ring-4
                            focus-visible:ring-(--focus-ring-color)
                        "
                    >
                        <span
                            className="
                                flex
                                h-5
                                w-5
                                shrink-0
                                items-center
                                justify-center
                                rounded-full
                                bg-white
                                text-(--alumni-featured-card-bg)
                            "
                        >
                            <Play
                                aria-hidden="true"
                                className="
                                    ml-px
                                    h-2.5
                                    w-2.5
                                    fill-current
                                "
                                strokeWidth={0}
                            />
                        </span>

                        <span>
                            {featuredAlumniStory.videoLabel}
                        </span>

                        <ArrowRight
                            aria-hidden="true"
                            className="
                                ml-1
                                h-3.5
                                w-3.5
                                transition-transform
                                duration-200
                                group-hover:translate-x-1
                            "
                            strokeWidth={1.9}
                        />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedAlumniCard;