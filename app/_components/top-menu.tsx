import Link from 'next/link';
import { FaFacebookSquare, FaRegUser, FaYoutube } from 'react-icons/fa';
import { FaCartShopping, FaLinkedinIn } from 'react-icons/fa6';
import { PiInstagramLogoLight } from 'react-icons/pi';
import { ModeToggle } from './mode-toggle';

export default function TopMenu() {
    return (
        <>
            <div
                className="mx-auto container flex justify-between items-center my-3 text-fontColor/85 dark:text-neutral-100/80
                 ">
                <div className="flex justify-start items-center gap-5 text-lg">
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
                <div className="flex gap-5 justify-end items-center text-base">
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
