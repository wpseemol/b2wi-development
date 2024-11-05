import Link from 'next/link';
import { FaFacebookSquare, FaRegUser, FaYoutube } from 'react-icons/fa';
import { FaCartShopping, FaLinkedinIn } from 'react-icons/fa6';
import { PiInstagramLogoLight } from 'react-icons/pi';
import { ModeToggle } from './mode-toggle';

export default function TopMenu() {
    return (
        <>
            <div
                className="mx-auto container flex justify-end items-center my-2 md:my-3 text-fontColor/85 dark:text-neutral-100/80 px-2 md:px-3
                 ">
                {/* more link */}
                <div className="flex md:gap-5 gap-3 justify-end items-center text-base">
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
                    {/* Social icons */}

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
