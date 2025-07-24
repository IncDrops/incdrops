import { type Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy - IncDrops.ai',
    description: 'Privacy Policy for IncDrops.ai.',
};

export default function PrivacyPolicyPage() {
    return (
        <div className="bg-background text-foreground">
            <div className="container mx-auto px-4 md:px-6 py-12 md:py-24 lg:py-32">
                <article className="prose prose-lg dark:prose-invert mx-auto">
                    <h1 className="text-4xl font-extrabold font-headline tracking-tight lg:text-5xl">Privacy Policy</h1>
                    <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

                    <section className="mt-8">
                        <h2 className="text-2xl font-bold font-headline mt-8 mb-4">1. Introduction</h2>
                        <p>
                            Welcome to IncDrops.ai. We are committed to protecting your privacy. This Privacy Policy explains how we
                            collect, use, disclose, and safeguard your information when you visit our website. Please read this
                            privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not
                            access the site.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold font-headline mt-8 mb-4">2. Information We Collect</h2>
                        <p>
                            We may collect information about you in a variety of ways. The information we may collect on the Site
                            includes:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-4">
                            <li>
                                <strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address,
                                email address, and telephone number, that you voluntarily give to us when you register with the
                                Site or when you choose to participate in various activities related to the Site.
                            </li>
                            <li>
                                <strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site,
                                such as your IP address, your browser type, your operating system, your access times, and the
                                pages you have viewed directly before and after accessing the Site.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold font-headline mt-8 mb-4">3. How We Use Your Information</h2>
                        <p>
                            Having accurate information about you permits us to provide you with a smooth, efficient, and
                            customized experience. Specifically, we may use information collected about you via the Site to:
                        </p>
                         <ul className="list-disc pl-6 space-y-2 mt-4">
                            <li>Create and manage your account.</li>
                            <li>Email you regarding your account or order.</li>
                            <li>Fulfill and manage purchases, orders, payments, and other transactions related to the Site.</li>
                             <li>Improve our website and offerings.</li>
                        </ul>
                    </section>
                    
                    <section>
                        <h2 className="text-2xl font-bold font-headline mt-8 mb-4">4. Information Sharing</h2>
                        <p>
                           We may share information we have collected about you in certain situations. Your information may be disclosed as follows: by law or to protect rights, for business transfers, or with third-party service providers. We do not sell your personal information to third parties.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold font-headline mt-8 mb-4">5. Data Security</h2>
                        <p>
                            We use administrative, technical, and physical security measures to help protect your personal
                            information. While we have taken reasonable steps to secure the personal information you provide to us,
                            please be aware that despite our efforts, no security measures are perfect or impenetrable, and no
                            method of data transmission can be guaranteed against any interception or other type of misuse.
                        </p>
                    </section>
                    
                     <section>
                        <h2 className="text-2xl font-bold font-headline mt-8 mb-4">6. Your Rights</h2>
                        <p>
                           You may at any time review or change the information in your account or terminate your account by logging into your account settings and updating your account, or contacting us using the contact information provided below.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold font-headline mt-8 mb-4">7. Changes to This Policy</h2>
                        <p>
                            We may update this Privacy Policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal, or regulatory reasons.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold font-headline mt-8 mb-4">8. Contact Us</h2>
                        <p>
                            If you have questions or comments about this Privacy Policy, please contact us at: ai@incdrops.com.
                        </p>
                    </section>
                </article>
            </div>
        </div>
    );
}
