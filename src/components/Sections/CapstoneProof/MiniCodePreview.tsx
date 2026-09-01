import { FC } from 'react';

const lineWidths = ['60%', '85%', '45%', '70%', '35%'];

const MiniCodePreview: FC = () => {
    return (
        <div
            aria-hidden="true"
            className="
                flex
                h-full
                w-full
                flex-col
                gap-1.5
                overflow-hidden
                rounded-lg
                bg-(--proof-section-code-bg)
                p-2.5
            "
        >
            <div className="flex gap-1">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#dc4c5b]" />
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#d99800]" />
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#179b67]" />
            </div>

            <div className="flex flex-1 flex-col justify-center gap-1">
                {lineWidths.map((width, index) => (
                    <span
                        key={index}
                        className={`
                            h-1
                            rounded-full
                            ${
                                index % 2 === 0
                                    ? 'bg-(--color-brand-400)'
                                    : 'bg-[#4a577b]'
                            }
                        `}
                        style={{ width }}
                    />
                ))}
            </div>
        </div>
    );
};

export default MiniCodePreview;