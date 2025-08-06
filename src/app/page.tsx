import HeaderSection from '@/components/header-section';
import SamplesGallery from '@/components/samples-gallery';
import CuratedTrends from '@/components/curated-trends';
import DynamicAdCards from '@/components/dynamic-ad-cards';
import BlogSection from '@/components/blog-section';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import TryItYourself from '@/components/try-it-yourself';
import { Suspense } from 'react';
import { LoaderCircle } from 'lucide-react';

function TryItYourselfFallback() {
  return (
    <div className="flex items-center justify-center h-64">
      <LoaderCircle className="w-8 h-8 animate-spin text-muted-foreground" />
    </div>
  )
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground isolate">
      <div className="fixed inset-0 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] -z-10"></div>
      <div className="fixed inset-0 -z-9 pointer-events-none bg-[radial-gradient(circle_at_50%_200px,#E6E6FA66,transparent)] dark:bg-[radial-gradient(circle_at_50%_200px,#B0E2FF33,transparent)]"></div>
      
      <HeaderSection />

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-24 space-y-24 md:space-y-32">
          <Suspense fallback={<TryItYourselfFallback />}>
            <TryItYourself />
          </Suspense>
          <CuratedTrends />
          <SamplesGallery />
          <DynamicAdCards />
          <BlogSection />
        </div>
      </main>

      <footer className="w-full mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Separator />
          <div className="flex flex-col sm:flex-row justify-between items-center py-8 text-muted-foreground text-sm">
            <div className="flex flex-col sm:flex-row items-center gap-x-4 gap-y-2">
              <span>© {new Date().getFullYear()} IncDrops.com. All rights reserved.</span>
              <span>Questions? Send inquiries to info@incdrops.com</span>
            </div>
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
