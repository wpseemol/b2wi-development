import Image from 'next/image';
import Link from 'next/link';

export default function TopContactInfo() {
    return (
        <div>
            <section className="dark:hidden">
                <Link href="/">
                    <Image
                        src="/logo/B2W-Logo-v1_transparent.png"
                        alt="site logo"
                        width={200}
                        height={150}
                        className="w-auto h-auto"
                        as="image"
                        priority
                    />
                </Link>
            </section>
            <section className="hidden dark:block">
                <Link href="/">
                    <Image
                        src="/logo/B2W-Logo-v1_transparent_dark.png"
                        alt="site logo"
                        width={200}
                        height={150}
                        className="w-auto h-auto"
                        as="image"
                        priority
                    />
                </Link>
            </section>
            <ul>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    );
}
