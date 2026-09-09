import { CalendarDays, Download, Trophy } from 'lucide-react'; 
import Link from 'next/link'; 
import { FC } from 'react'; 
import Image from 'next/image'; 
 
import CapstoneAdvantagePanel from './CapstoneAdvantagePanel'; 
import CapstoneFeatureStrip from './CapstoneFeatureStrip'; 
import CapstonePortfolioCard from './CapstonePortfolioCard'; 
import ExampleProjectsPanel from './ExampleProjectsPanel'; 
import CapstoneMobileSection from './CapstoneMobileSection'; 
import DownloadCurriculumButton from '@/components/Shared/DownloadCurriculumButton';
import BookTrackCounsellingButton from '@/components/Shared/BookTrackCounsellingButton';

const CapstoneProofSection: FC = () => { 
    return ( 
        <> 
            <section 
                id="capstone-proof" 
                className=" 
                    hidden 
                    scroll-mt-25 
                    bg-(--proof-section-bg) 
                    px-4 
                    py-14 
                    sm:px-6 
                    sm:py-16 
                    lg:block 
                    lg:px-8 
                    lg:py-20 
                    xl:px-12 
                " 
            > 
                <div className="mx-auto w-full max-w-370"> 
                    {/* Header */} 
                    <header className="mx-auto max-w-260 text-center"> 
                        <div 
                            className=" 
                                mx-auto 
                                flex 
                                w-fit 
                                min-h-10 
                                items-center 
                                justify-center 
                                gap-2 
                                rounded-full 
                                border 
                                border-[#AFC7FF] 
                                bg-[#EEF4FF] 
                                px-6 
                                text-[clamp(0.875rem,1.1vw,1.0625rem)] 
                                font-semibold 
                                uppercase 
                                tracking-[0.015em] 
                                text-(--proof-section-eyebrow-text) 
                                shadow-[0_7px_14px_rgba(1,17,57,0.18)] 
                                ring-1 
                                ring-[#a9c3fc] 
                            " 
                        > 
                            <Trophy 
                                aria-hidden="true" 
                                className="h-4.5 w-4.5" 
                                strokeWidth={1.8} 
                            /> 
                            <span>Capstone Proof</span> 
                        </div> 
 
                        <h2 
                            className=" 
                                mt-4 
                                whitespace-nowrap 
                                text-[clamp(1.75rem,5vw,3.125rem)] 
                                font-bold 
                                leading-[1.06] 
                                tracking-[-2%] 
                                text-(--proof-section-title-text) 
                            " 
                        > 
                            What You Leave{' '} 
 
                            <span className="text-(--proof-section-title-highlight)"> 
                                With 
                            </span> 
                        </h2> 
 
                        <p 
                            className=" 
                                mx-auto 
                                mt-4 
                                max-w-220 
                                text-[16px] 
                                font-medium 
                                leading-[1.5] 
                                text-(--proof-section-subtitle-text) 
                                sm:text-[19px] 
                            " 
                        > 
                            A capstone with a repository, an architecture 
                            write-up, a recorded walkthrough, and mentor comments 
                            on all of it. 
                        </p> 
                    </header> 
 
                    {/* Three-column layout */} 
                    <div 
                        className=" 
                            mt-5 
                            grid 
                            grid-cols-1 
                            gap-3 
                            lg:grid-cols-[280px_minmax(0,1fr)_320px] 
                            xl:grid-cols-[300px_minmax(0,1fr)_390px] 
                        " 
                    > 
                        <CapstoneAdvantagePanel /> 
 
                        <div className="flex h-full items-center justify-center"> 
                            <Image 
                                src="/images/optimized-svg/capstone-portfolio.svg" 
                                alt="Capstone portfolio example" 
                                width={600} 
                                height={500} 
                                className="h-auto w-full max-w-[850px] object-contain" 
                            /> 
                        </div> 
 
                        <ExampleProjectsPanel /> 
                    </div> 
 
                    {/* Feature strip */} 
                    <div className="mt-5"> 
                        <CapstoneFeatureStrip /> 
                    </div> 
                    {/* CTA */}
                    <div
                        className="
                            mx-auto
                            mt-5
                            grid
                            max-w-[735px]
                            gap-3
                            lg:mt-6
                            lg:grid-cols-[1.2fr_1fr]
                            lg:gap-3
                        "
                    >
                        <DownloadCurriculumButton />
                        <BookTrackCounsellingButton />
                    </div>
                </div>{/* closes mx-auto w-full max-w-370 */}
                </section>

            <CapstoneMobileSection />
        </>
    );
};
 
export default CapstoneProofSection;