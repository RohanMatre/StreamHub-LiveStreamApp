import Link from "next/link";
import Image from "next/image";
import { Poppins } from "next/font/google";

// It is Come when we install Shadcn & we will uses for mergering tailwind classes or to merge our classes which is come from some wierd constant like font
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center gap-x-4 hover:opacity-75 transition">
        <div className="bg-white rounded-full p-2 mr-10 shrink-0 lg:mr-0 lg:shrink">
          <Image src="/twitch.svg" alt="streamhub" height="32" width="32" />
        </div>
        <div className={cn("hidden lg:block",font.className)}>
          <p className="text-lg font-semibold">StreamHub</p>
          <p className="text-xs text-muted-foreground">Create dashboard</p>
        </div>
      </div>
    </Link>
  );
};
