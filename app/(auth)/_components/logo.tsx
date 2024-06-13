import Image  from "next/image"
import { Poppins } from "next/font/google";

// It is Come when we install Shadcn & we will uses for mergering tailwind classes or to merge our classes which is come from some wierd constant like font
import { cn } from "@/lib/utils";

const font = Poppins({
    subsets: ["latin"],
    weight: ["200","300","400","500","600","700","800"],
});

export const Logo = () => {
    return (
        <div className="flex flex-col items-center gap-y-4">
            <div className="bg-white rounded-full p-4">
                <Image 
                    src="/twitch.svg"
                    alt="StreamHub"
                    width="50"
                    height="50"
                />
            </div>
            <div className={cn("flex flex-col items-center",
            font.className,
            )}>
                <p className="text-xl font-semibold">
                    StreamHub
                </p>
                <p className="text-sm text-muted-foreground">
                    Let&apos;s LiveStream
                </p>
            </div>
        </div>
    );
};