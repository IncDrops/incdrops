import HeaderSection from '@/components/header-section';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export default function TermsOfUse() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground isolate">
      <div className="fixed inset-0 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] -z-10"></div>
      <div className="fixed inset-0 -z-9 pointer-events-none bg-[radial-gradient(circle_at_50%_200px,#E6E6FA66,transparent)] dark:bg-[radial-gradient(circle_at_50%_200px,#B0E2FF33,transparent)]"></div>
      
      <HeaderSection />

      <main className="flex-1 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-24 pb-16">
            <Card className="bg-card/60 backdrop-blur-lg border-border/20 shadow-lg">
                <CardHeader>
                    <CardTitle className="text-3xl font-bold font-headline tracking-tight">Terms of Use</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-foreground/80">
                    <p>Welcome to IncDrops! These terms and conditions outline the rules and regulations for the use of IncDrops's Website, located at incdrops.com.</p>
                    <p>By accessing this website we assume you accept these terms and conditions. Do not continue to use IncDrops if you do not agree to take all of the terms and conditions stated on this page.</p>
                    <h3 className="font-bold text-xl pt-4 font-headline text-primary-foreground">License</h3>
                    <p>Unless otherwise stated, IncDrops and/or its licensors own the intellectual property rights for all material on IncDrops. All intellectual property rights are reserved. You may access this from IncDrops for your own personal use subjected to restrictions set in these terms and conditions.</p>
                    <p>You must not:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Republish material from IncDrops</li>
                        <li>Sell, rent or sub-license material from IncDrops</li>
                        <li>Reproduce, duplicate or copy material from IncDrops</li>
                        <li>Redistribute content from IncDrops</li>
                    </ul>
                    <h3 className="font-bold text-xl pt-4 font-headline text-primary-foreground">Disclaimer</h3>
                    <p>The materials on IncDrops's website are provided on an 'as is' basis. IncDrops makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
                    <p>Further, IncDrops does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.</p>
                </CardContent>
            </Card>
        </div>
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
