import NavMenu from './nav-menu';
import TopContactInfo from './top-contact-info';
import TopMenu from './top-menu';

export default function Header() {
    return (
        <header>
            <section className="border-b relative z-10 bg-white dark:bg-[#030712]">
                <TopMenu />
            </section>
            <section className=" md:hover:py-3 -my-1 duration-150 bg-slate-50 dark:bg-slate-900">
                <TopContactInfo />
            </section>

            <section className="bg-gradient-to-r from-[#2d3544] to-[#0165ac] border-y md:py-5 py-4 dark:bg-gradient-to-r dark:from-[#224a94] dark:to-[#17174b] md:px-3 px-2">
                <NavMenu />
            </section>
        </header>
    );
}
