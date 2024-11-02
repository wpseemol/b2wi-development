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

            <section className="bg-gradient-to-r from-cyan-500 to-blue-500 border-y py-5">
                <nav className="container mx-auto ">
                    <ul className="flex gap-3 justify-center">
                        <li>link1</li>
                        <li>link2</li>
                        <li>link3</li>
                    </ul>
                </nav>
            </section>
        </header>
    );
}
