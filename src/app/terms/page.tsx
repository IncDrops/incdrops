import { type Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms of Service - IncDrops.ai',
    description: 'Terms of Service for IncDrops.ai.',
};

export default function TermsOfServicePage() {
    return (
        <div className="bg-background text-foreground">
            <div className="container mx-auto px-4 md:px-6 py-12 md:py-24 lg:py-32">
                <article className="prose prose-lg dark:prose-invert mx-auto">
                    <h1 className="text-4xl font-extrabold font-headline tracking-tight lg:text-5xl">Terms of Service</h1>
                    <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

                    <section className="mt-8">
                        <h2 className="text-2xl font-bold font-headline mt-8 mb-4">1. Agreement to Terms</h2>
                        <p>
                            By using our services, you agree to be bound by these Terms of Service. If you do not agree to these
                            Terms, do not use the services. We may modify the Terms at any time, and if we do, we will let you know
                            either by posting the modified Terms on the site or through other communications.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold font-headline mt-8 mb-4">2. Use of Services</h2>
                        <p>
                            You may use our services only if you are 18 years or older and are not barred from using the services
                            under applicable law. You agree not to use the services for any illegal or unauthorized purpose. You
                            agree to comply with all laws, rules, and regulations applicable to your use of the services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold font-headline mt-8 mb-4">3. Content and Ownership</h2>
                        <p>
                            All content provided through the services is owned by IncDrops.ai or our licensors and is protected by
                            copyright, trademark, and other laws. We grant you a limited, non-exclusive, non-transferable license
                            to view, copy, and display the content solely in connection with your permitted use of the services.
                            Content you provide to us remains your property.
                        </p>
                    </section>
                    
                    <section>
                        <h2 className="text-2xl font-bold font-headline mt-8 mb-4">4. Termination</h2>
                        <p>
                           We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold font-headline mt-8 mb-4">5. Disclaimer of Warranty</h2>
                        <p>
                            Our services are provided "AS IS," without warranty of any kind. Without limiting the foregoing, we
                            explicitly disclaim any warranties of merchantability, fitness for a particular purpose, quiet
                            enjoyment, or non-infringement.
                        </p>
                    </section>
                    
                     <section>
                        <h2 className="text-2xl font-bold font-headline mt-8 mb-4">6. Limitation of Liability</h2>
                        <p>
                           Neither IncDrops.ai nor any other party involved in creating, producing, or delivering the services will be liable for any incidental, special, exemplary, or consequential damages, including lost profits, loss of data or goodwill, service interruption, computer damage, or system failure.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold font-headline mt-8 mb-4">7. Governing Law</h2>
                        <p>
                            These Terms shall be governed by the laws of the jurisdiction in which our company is established, without regard to its conflict of law provisions.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold font-headline mt-8 mb-4">8. Contact Us</h2>
                        <p>
                           If you have any questions about these Terms, please contact us at: ai@incdrops.com.
                        </p>
                    </section>
                </article>
            </div>
        </div>
    );
}
