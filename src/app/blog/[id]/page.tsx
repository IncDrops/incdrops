import { blogPosts } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import HeaderSection from '@/components/header-section';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = blogPosts.find((p) => p.id.toString() === params.id);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground isolate">
      <div className="fixed inset-0 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] -z-10"></div>
      <div className="fixed inset-0 -z-9 pointer-events-none bg-[radial-gradient(circle_at_50%_200px,#E6E6FA66,transparent)] dark:bg-[radial-gradient(circle_at_50%_200px,#B0E2FF33,transparent)]"></div>

      <HeaderSection />

      <main className="flex-1 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className="pt-24 pb-16">
          <div className="mb-8">
            <Badge variant="secondary">{post.tag}</Badge>
            <h1 className="text-4xl font-bold font-headline tracking-tight mt-2">{post.title}</h1>
          </div>
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden mb-8 shadow-lg">
            <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                data-ai-hint={post['data-ai-hint']}
                priority
            />
          </div>
          <div
            className="prose prose-lg dark:prose-invert max-w-none text-foreground/80 space-y-4"
            dangerouslySetInnerHTML={{ __html: post.fullContent }}
          />
        </article>
      </main>

      <footer className="w-full mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Separator />
          <div className="flex flex-col sm:flex-row justify-between items-center py-8 text-muted-foreground text-sm">
            <span>© {new Date().getFullYear()} IncDrops.com. All rights reserved.</span>
            <div className="flex gap-4 mt-4 sm:mt-0">
                <Link href="/terms" className="hover:text-accent transition-colors">Terms of Use</Link>
                <Link href="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}