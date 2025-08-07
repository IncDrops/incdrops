import Image from "next/image";
import { blogPosts } from "@/lib/data";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const BlogCard = ({ post }: { post: typeof blogPosts[0] }) => {
    return (
        <Card className="bg-card/60 backdrop-blur-lg border-border/20 shadow-lg h-full flex flex-col overflow-hidden group">
            <div className="relative w-full aspect-[3/4] overflow-hidden">
                <Image
                    src={post.images[0]}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    data-ai-hint={post['data-ai-hint']}
                />
            </div>
            <CardContent className="p-6 flex flex-col flex-grow">
                <div className="flex-grow">
                    <Badge variant="secondary" className="mb-2">{post.tag}</Badge>
                    <h3 className="text-lg font-bold font-headline leading-tight text-primary-foreground">{post.title}</h3>
                    <p className="text-muted-foreground mt-2 text-sm">{post.summary}</p>
                </div>
                <Button asChild variant="ghost" className="justify-start p-0 h-auto mt-4 text-accent font-bold">
                    <Link href={`/blog/${post.id}`}>
                        Learn more
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </Button>
            </CardContent>
        </Card>
    );
};

const BlogSection = () => {
    return (
        <section>
            <div className="mb-8">
                <h2 className="text-3xl font-bold font-headline tracking-tight">Blog & Insights</h2>
                <p className="text-muted-foreground mt-2">Trending topics on marketing, technology, and capitalizing on what's next.</p>
            </div>
            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                className="w-full"
            >
                <CarouselContent>
                    {blogPosts.map((post) => (
                        <CarouselItem key={post.id} className="md:basis-1/2 lg:basis-1/3">
                             <div className="p-1">
                                <BlogCard post={post} />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="hidden sm:flex" />
                <CarouselNext className="hidden sm:flex" />
            </Carousel>
        </section>
    );
};

export default BlogSection;
