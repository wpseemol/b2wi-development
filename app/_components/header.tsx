import NavMenu from './nav-menu';
import TopContactInfo from './top-contact-info';
import TopMenu from './top-menu';

export default function Header() {
    return (
        <header>
            <section className="border-b">
                <TopMenu />
            </section>
            <section className="container mx-auto hover:py-3 -my-1 duration-150">
                <TopContactInfo />
            </section>

            <section className="bg-gradient-to-r from-[#2d3544] to-[#0165ac] border-y py-5 dark:bg-gradient-to-r dark:from-[#224a94] dark:to-[#17174b]">
                <NavMenu />
            </section>
        </header>
    );
}
