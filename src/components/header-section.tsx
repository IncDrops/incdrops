import Logo from "./logo";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";

const HeaderSection = () => {
    return (
        <header className="sticky top-0 z-40 w-full bg-background/80 backdrop-blur-lg border-b border-border/20">
            <div className="container mx-auto flex h-[72px] items-center justify-between px-4 sm:px-6 lg:px-8">
                <Link href="/" className="flex items-center gap-2">
                    <Image src="/incdrops-logo.png" alt="IncDrops Logo" width={32} height={32} className="h-8 w-auto" />
                    <Logo className="h-8 w-auto" />
                </Link>
                <div className="flex items-center gap-4">
                    <h1 className="hidden md:block text-center font-headline text-lg md:text-xl font-bold bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">
                        What’s the next big thing?
                    </h1>
                </div>
                <Button className="font-bold bg-gradient-accent text-accent-foreground animate-gradient">
                    Ask IncDrops's AI
                </Button>
            </div>
            <div className="container mx-auto text-center pb-4 px-4 sm:px-6 lg:px-8">
                 <p className="text-muted-foreground text-sm md:text-base">
                    Get instant, AI-powered trend forecasts for ideas, hashtags, products, memes, and more.
                </p>
            </div>
        </header>
    );
};

export default HeaderSection;
