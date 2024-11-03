import Link from 'next/link';
import { FaFacebookSquare, FaRegUser, FaYoutube } from 'react-icons/fa';
import { FaCartShopping, FaLinkedinIn } from 'react-icons/fa6';
import { PiInstagramLogoLight } from 'react-icons/pi';
import { ModeToggle } from './mode-toggle';

export default function TopMenu() {
    return (
        <>
            <div
                className="mx-auto container flex justify-between items-center my-2 md:my-3 text-fontColor/85 dark:text-neutral-100/80 px-2 md:px-3
                 ">
                <div className="flex justify-start items-center md:gap-5 gap-3 text-lg">
                    {/* Social icons */}
                    <Link
                        href="#"
                        className="hover:text-primaryColor duration-100 hover:scale-105">
                        <FaFacebookSquare />
                    </Link>
                    <Link
                        href="#"
                        className="hover:text-primaryColor duration-100 hover:scale-105">
                        <PiInstagramLogoLight />
                    </Link>
                    <Link
                        href="#"
                        className="hover:text-primaryColor duration-100 hover:scale-105">
                        <FaLinkedinIn />
                    </Link>
                    <Link
                        href="#"
                        className="hover:text-primaryColor duration-100 hover:scale-105">
                        <FaYoutube />
                    </Link>
                </div>

                {/* more link */}
                <div className="flex md:gap-5 gap-3 justify-end items-center text-base">
                    <div className=" gap-5 items-center md:flex hidden">
                        <Link
                            href="#"
                            className="hover:text-primaryColor duration-100">
                            Placement
                        </Link>
                        <Link
                            href="#"
                            className="hover:text-primaryColor duration-100">
                            Blog
                        </Link>
                        <Link
                            href="#"
                            className="hover:text-primaryColor duration-100">
                            Events
                        </Link>
                        <Link
                            href="#"
                            className="hover:text-primaryColor duration-100">
                            Contact Us
                        </Link>
                    </div>

                    <ModeToggle />

                    <Link
                        href="#"
                        className="hover:text-primaryColor duration-100 text-lg hover:scale-105">
                        <FaCartShopping />
                    </Link>
                    <Link
                        href="#"
                        className="hover:text-primaryColor duration-100 text-lg hover:scale-105">
                        <FaRegUser />
                    </Link>
                </div>
            </div>
        </>
    );
}
