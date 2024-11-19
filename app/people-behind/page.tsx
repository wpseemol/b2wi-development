import BreadcrumbFirstLink from '@/components/breadcrumb-first-link';
import HeaderContent from './_components/header-content';

export default function PeopleBehindPage() {
    return (
        <main className="container mx-auto">
            <BreadcrumbFirstLink currentPageName="People Behind" />
            <HeaderContent />
        </main>
    );
}
