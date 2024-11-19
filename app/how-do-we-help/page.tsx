import BreadcrumbFirstLink from '@/components/breadcrumb-first-link';
import HelpCategory from './_components/help-category';
import HelpSearchSection from './_components/help-search-section';
import HelpSectionTabView from './_components/help-section-tabview';

export default function HowDoWeHelpPage() {
    return (
        <main className="">
            <section className="bg-primaryColor md:mb-16 mb-14">
                <div className="container mx-auto">
                    <BreadcrumbFirstLink
                        currentPageName="How Do We Help"
                        activeClassName="text-white"
                    />
                    <HelpSearchSection />
                </div>
            </section>
            <HelpCategory />
            <HelpSectionTabView />
        </main>
    );
}
