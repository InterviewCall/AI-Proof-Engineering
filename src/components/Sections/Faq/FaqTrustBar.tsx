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
                    lg:max-w-90
                    lg:border-r
                    lg:pr-8
                    lg:pb-0
                "
            >
                <span
                    className="
                        flex
                        h-12
                        w-12
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
                        className="h-6 w-6"
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
                        Every phase, review, and payment term is documented
                        upfront, so there are no surprises after you enroll.
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
                                rounded-xl
                                bg-(--faq-trust-pill-bg)
                                px-4
                                py-3
                            "
                        >
                            <span className="flex h-5 w-5 shrink-0 items-center justify-center text-(--faq-trust-pill-icon)">
                                <Icon
                                    aria-hidden="true"
                                    className="h-5 w-5"
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
