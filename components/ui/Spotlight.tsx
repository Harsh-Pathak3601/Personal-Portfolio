import { cn } from "@/utils/cn";

type SpotlightProps = {
    className?: string;
    fill?: string;
};

export const Spotlight = ({ className, fill } : SpotlightProps) => {
    return (
        <div
            className={cn("animate-spotlight pointer-events-none absolute z-[1] h-[169%] w-[138%] lg:w-[84%] opacity-0", className)}
            style={{
                willChange: "transform, opacity"
            }}
        >
            <div 
                className="absolute inset-0 w-[100%] h-[100%] rounded-[100%] blur-[150px] opacity-25"
                style={{ 
                    backgroundColor: fill || "white",
                    transform: "rotate(-45deg) scale(0.8)",
                    willChange: "transform"
                }}
            />
        </div>
    );
};