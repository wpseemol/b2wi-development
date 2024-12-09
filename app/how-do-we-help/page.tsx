import BreadcrumbFirstLink from '@/components/breadcrumb-first-link';
import HelpCategory from './_components/help-category';
import HelpSectionTabView from './_components/help-section-tabview';

export default function HowDoWeHelpPage() {
    return (
        <main className="">
            <section className="container mx-auto">
                <BreadcrumbFirstLink currentPageName="About" />
            </section>

            <section className="text-center py-5 container mx-auto">
                <h2 className="text-neutral-900/85 sm:text-[52px] text-3xl font-bold leading-snug">
                    How Does B2WI Help.
                </h2>
                <p className="font-normal text-neutral-800/80">
                    At B2W, we take a holistic approach to ensure you receive
                    support at every stage of your academic journey.
                    <br /> This is how we support our aspirants:
                </p>
            </section>
            <HelpCategory />
            <HelpSectionTabView />
        </main>
    );
}
