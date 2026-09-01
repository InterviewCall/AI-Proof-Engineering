import { FC } from 'react';

const BAR_HEIGHTS = [
    45, 70, 35, 85, 55, 95, 40, 65, 30, 75, 50, 90, 60, 35, 80, 45,
    70, 95, 55, 40, 85, 60, 30, 75, 50, 90, 65, 35, 80, 45, 70, 55,
    95, 40, 60, 85, 30, 75, 50, 65, 90, 45, 35, 80, 55, 70, 60, 40,
    85, 50, 95, 35, 65, 75, 45, 30, 80, 60, 90, 55,
];

const WaveformBars: FC = () => {
    return (
        <div
            aria-hidden="true"
            className="
                flex
                h-10
                items-center
                gap-[3px]
                overflow-hidden
                
                [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]
            "
        >
            {BAR_HEIGHTS.map((height, index) => (
                <span
                    key={index}
                    className="w-[3px] shrink-0 rounded-full bg-(--career-insights-video-waveform)"
                    style={{ height: `${height}%` }}
                />
            ))}
        </div>
    );
};

export default WaveformBars;