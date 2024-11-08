import Link from 'next/link';

import { MdNavigateNext } from 'react-icons/md';

export default function BreadcrumbFirstLink({
    currentPageName,
}: {
    currentPageName;
}) {
    return (
        <section className="mt-4">
            <div className="flex items-center gap-2">
                <Link href="/">Home</Link>
                <MdNavigateNext />
                <p className="text text-primaryColor">{currentPageName}</p>
            </div>
        </section>
    );
}
