import { Code2, FlaskConical, Mic, Star, UserRound } from 'lucide-react';
import { FC } from 'react';

const nodes = [
    { icon: FlaskConical, top: '2%', left: '50%' },
    { icon: Mic, top: '50%', left: '92%' },
    { icon: Star, top: '92%', left: '50%' },
    { icon: UserRound, top: '50%', left: '8%' },
];

const LoopDiagram: FC = () => {
    return (
        <div className="relative mx-auto aspect-square w-42 shrink-0 sm:w-48">
            <div
                aria-hidden="true"
                className="
                    absolute
                    inset-[14%]
                    rounded-full
                    border-2
                    border-dashed
                    border-(--practice-section-progress-track)
                "
            />
            <svg
    aria-hidden="true"
    className="
        absolute
        inset-[4%]
        z-0
        h-[92%]
        w-[92%]
        overflow-visible
    "
    viewBox="0 0 100 100"
>
    <circle
        cx="50"
        cy="50"
        r="47"
        fill="none"
        stroke="var(--button-primary-bg)"
        strokeWidth="2"
    />

    
</svg>

            <div
                className="
                    absolute
                    left-1/2
                    top-1/2
                    flex
                    h-12
                    w-12
                    -translate-x-1/2
                    -translate-y-1/2
                    items-center
                    justify-center
                    rounded-xl
                    bg-(--button-primary-bg)
                    text-white
                    shadow-[0_10px_20px_rgba(10,83,242,0.28)]
                "
            >
                <Code2
                    aria-hidden="true"
                    className="h-6 w-6"
                    strokeWidth={1.9}
                />
            </div>

            {nodes.map((node, index) => {
                const Icon = node.icon;

                return (
                    <span
                        key={index}
                        className="
                            absolute
                            flex
                            h-10
                            w-10
                            -translate-x-1/2
                            -translate-y-1/2
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-(--practice-section-card-border)
                            bg-white
                            text-(--color-brand-700)
                            shadow-[0_6px_14px_rgba(4,13,87,0.10)]
                        "
                        style={{ top: node.top, left: node.left }}
                    >
                        <Icon
                            aria-hidden="true"
                            className="h-5 w-5"
                            strokeWidth={1.9}
                        />
                    </span>
                );
            })}
        </div>
    );
};

export default LoopDiagram;
