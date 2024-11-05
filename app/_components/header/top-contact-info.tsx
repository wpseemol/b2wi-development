import Image from 'next/image';
import Link from 'next/link';
import { GoMail } from 'react-icons/go';
import { PiPhoneCallLight } from 'react-icons/pi';
import { TfiLocationPin } from 'react-icons/tfi';
import MobileNavMenu from './mobile-nav-menu';

export default function TopContactInfo() {
    return (
        <div className="container mx-auto px-2 md:px-3 flex md:justify-between justify-around items-center relative">
            <section className="dark:hidden">
                <Link href="/">
                    <Image
                        src="/logo/B2W-Logo-v1_transparent.png"
                        alt="site logo"
                        width={200}
                        height={150}
                        className="md:w-auto md:h-auto w-32 h-14"
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
                        className="md:w-auto md:h-auto w-32 h-14"
                    />
                </Link>
            </section>
            <ul className="md:flex justify-end items-center gap-4 hidden">
                <li>
                    <Link
                        href={`tel:${+8801685456708}`}
                        className="flex items-center gap-1 text-primaryColor/75 hover:text-[#0165ac] duration-100 group">
                        <div className="text-4xl">
                            <PiPhoneCallLight className="group-hover:scale-105 duration-100" />
                        </div>
                        <div className="text-sm">
                            <h2 className="font-medium">+8801685456708</h2>
                            <p>{`Student's Inquiries`}</p>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link
                        href={`mailto:${'⁠b2winitiative@gmail.com'}`}
                        className="flex items-center gap-2 text-primaryColor/75 hover:text-[#0165ac] duration-100 group">
                        <div className="text-4xl">
                            <GoMail className="group-hover:scale-105 duration-100" />
                        </div>
                        <div className="text-sm">
                            <h2 className="font-medium">
                                ⁠b2winitiative@gmail.com
                            </h2>
                            <p>Get in touch</p>
                        </div>
                    </Link>
                </li>

                <li>
                    <Link
                        href={`https://www.google.com/maps?q=${23.7959291},${90.4231129}`}
                        target="_blank"
                        className="flex items-center gap-1 text-primaryColor/75 hover:text-[#0165ac] duration-100 group">
                        <div className="text-4xl">
                            <TfiLocationPin className="group-hover:scale-105 duration-100" />
                        </div>
                        <div className="text-sm">
                            <h2 className="font-medium">
                                Banani, Dhaka, Bangladesh
                            </h2>
                            <p>Find Us</p>
                        </div>
                    </Link>
                </li>
            </ul>
            {/* menu button section  */}
            <section className="md:hidden ">
                <MobileNavMenu />
            </section>
        </div>
    );
}
