import { Mail } from 'lucide-react';
import { FC } from 'react';

const NewsletterBand: FC = () => {
    return (
        <div
            className="
                flex
                flex-col
                gap-5
                rounded-2xl
                border
                border-(--ecosystem-newsletter-border)
                bg-(--ecosystem-newsletter-bg)
                p-5
                sm:p-6
                lg:flex-row
                lg:items-center
                lg:justify-between
                lg:gap-8
            "
        >
            <div className="flex items-center gap-4">
                <span
                    className="
                        flex
                        h-16
                        w-16
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-(--ecosystem-newsletter-icon-bg)
                        text-(--ecosystem-newsletter-icon-text)
                    "
                >
                    <Mail aria-hidden="true" className="h-8 w-8" strokeWidth={1.8} />
                </span>

                <div>
                    <h3
                        className="
                            text-[18px]
                            font-bold
                            leading-tight
                            text-(--ecosystem-newsletter-title)
                        "
                    >
                        Stay Updated
                    </h3>

                    <p
                        className="
                            mt-2
                            max-w-200
                            text-[13.5px]
                            leading-[1.4]
                            text-(--ecosystem-newsletter-text)
                        "
                    >
                        Get program updates, engineering resources, and
                        career insights from InterviewCall.
                    </p>
                </div>
            </div>

            <div className="shrink-0">
                <form className="flex flex-col gap-3 sm:flex-row sm:items-center">
                    <label htmlFor="ecosystem-newsletter-email" className="sr-only">
                        Email address
                    </label>

                    <input
                        id="ecosystem-newsletter-email"
                        type="email"
                        placeholder="Enter your email"
                        className="
                            min-h-12
                            w-full
                            rounded-lg
                            border
                            border-(--ecosystem-newsletter-input-border)
                            bg-(--ecosystem-newsletter-input-bg)
                            px-4
                            text-[14px]
                            text-(--ecosystem-newsletter-input-text)
                            placeholder:text-(--ecosystem-newsletter-text)
                            focus-visible:outline-none
                            focus-visible:ring-4
                            focus-visible:ring-(--focus-ring-color)
                            sm:w-70
                        "
                    />

                    <button
                        type="submit"
                        className="
                            inline-flex
                            min-h-12
                            shrink-0
                            items-center
                            justify-center
                            rounded-lg
                            bg-(--button-primary-bg)
                            px-6
                            text-[14px]
                            font-semibold
                            text-(--button-primary-text)
                            transition-colors
                            hover:bg-(--button-primary-bg-hover)
                            focus-visible:outline-none
                            focus-visible:ring-4
                            focus-visible:ring-(--focus-ring-color)
                        "
                    >
                        Subscribe
                    </button>
                </form>

                <p
                    className="
                        mt-2
                        text-[12px]
                        text-(--ecosystem-newsletter-text)
                    "
                >
                    No spam. Unsubscribe anytime.
                </p>
            </div>
        </div>
    );
};

export default NewsletterBand;
