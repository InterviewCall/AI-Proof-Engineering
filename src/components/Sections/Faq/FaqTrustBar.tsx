import { ShieldCheck } from 'lucide-react';
import { FC } from 'react';

import { faqTrustPoints } from '@/utils/faqItems';

const FaqTrustBar: FC = () => {
    return (
        <div
            className="
                mt-6
                flex
                flex-col
                gap-6
                rounded-2xl
                border
                border-(--faq-trust-border)
                bg-(--faq-trust-bg)
                p-6
                lg:flex-row
                lg:items-center
                lg:gap-8
            "
        >
            <div
                className="
                    flex
                    items-start
                    gap-4
                    border-(--faq-trust-divider)
                    pb-6
                    lg:max-w-120
                    lg:border-r
                    lg:pr-8
                    lg:pb-0
                "
            >
                <span
                    className="
                        flex
                        h-16
                        w-16
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-(--faq-trust-icon-bg)
                        text-(--faq-trust-icon-text)
                    "
                >
                    <ShieldCheck
                        aria-hidden="true"
                        className="h-9 w-9"
                        strokeWidth={1.8}
                    />
                </span>

                <div>
                    <h3
                        className="
                            text-[17px]
                            font-bold
                            leading-tight
                            text-(--faq-trust-title)
                        "
                    >
                        Structured, Transparent, and Learner-First
                    </h3>

                    <p
                        className="
                            mt-1.5
                            text-[14px]
                            leading-[1.5]
                            text-(--faq-trust-text)
                        "
                    >
                        Built around skills, practice, feedback, capstone proof, and career readiness.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:flex-1">
                {faqTrustPoints.map((point) => {
                    const Icon = point.icon;

                    return (
                        <div
                            key={point.label}
                            className="
                                flex
                                items-center
                                gap-2.5
                                px-4
                                py-3
                                
                            "
                        >
                            <span className="flex rounded-full h-14 w-14 shrink-0 items-center justify-center bg-(--faq-trust-pill-bg) text-(--faq-trust-pill-icon)">
                                <Icon
                                    aria-hidden="true"
                                    className="h-8 w-8"
                                    strokeWidth={1.9}
                                />
                            </span>

                            <span
                                className="
                                    text-[13px]
                                    font-semibold
                                    leading-[1.3]
                                    text-(--faq-trust-pill-text)
                                "
                            >
                                {point.label}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default FaqTrustBar;
