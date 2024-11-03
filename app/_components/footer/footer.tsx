import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookSquare, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { HiPhone } from 'react-icons/hi';
import { MdLocationPin } from 'react-icons/md';
import { PiInstagramLogoLight } from 'react-icons/pi';
import { VscMail } from 'react-icons/vsc';
import EmailSendButton from './email-send-input';

export default function Footer() {
    return (
        <footer className="bg-[#023153] dark:bg-[#02223a] text-white">
            <section className="container mx-auto flex md:flex-row flex-col md:justify-evenly items-start md:py-14 py-8 md:gap-0 gap-7">
                {/* site inform */}

                <div className="xl:w-[calc(25%-3.5rem)] md:w-1/4 w-full xl:px-5">
                    <figure className="md:py-5 py-3 md:mx-0 mx-auto w-fit">
                        <Image
                            src="/images/footer.png"
                            alt="footer site logo"
                            width={200}
                            height={150}
                            className="w-auto h-auto"
                        />
                    </figure>
                    <p className="text-base text-center md:text-left">
                        Join Empower Minds and transform your future with our
                        holistic services and unwavering commitment to your
                        success.
                    </p>

                    <div className="mt-3">
                        <h2 className="text-2xl font-medium md:text-left text-center">
                            Follow Us
                        </h2>
                        <div className="flex md:justify-normal justify-center items-center gap-5 text-lg mt-1 text-neutral-100/80">
                            <Link
                                href="#"
                                className="hover:text-neutral-50 duration-100 hover:scale-105">
                                <FaFacebookSquare />
                            </Link>
                            <Link
                                href="#"
                                className="hover:text-neutral-50 duration-100 hover:scale-105">
                                <PiInstagramLogoLight />
                            </Link>
                            <Link
                                href="#"
                                className="hover:text-neutral-50 duration-100 hover:scale-105">
                                <FaLinkedinIn />
                            </Link>
                            <Link
                                href="#"
                                className="hover:text-neutral-50 duration-100 hover:scale-105">
                                <FaYoutube />
                            </Link>
                        </div>
                    </div>
                </div>
                {/* site inform */}
                {/* some link */}
                <div className="xl:w-[calc(25%-3.5rem)] md:w-1/4 w-full xl:px-5">
                    <h2 className="text-2xl font-medium border-l-4 border-primaryColor pl-3 md:mb-5 mb-2 w-fit md:w-full mx-auto md:mx-0">
                        Our Partners
                    </h2>
                    <ul className="space-y-2 capitalize text-center md:text-left">
                        <li className="hover:translate-x-2 hover:text-primaryColor duration-150">
                            <Link href="#">BePro</Link>
                        </li>
                        <li className="hover:translate-x-2 hover:text-primaryColor duration-150">
                            <Link href="#">GEE</Link>
                        </li>
                        <li className="hover:translate-x-2 hover:text-primaryColor duration-150">
                            <Link href="#">FLY8</Link>
                        </li>
                        <li className="hover:translate-x-2 hover:text-primaryColor duration-150">
                            <Link href="#">Our teem</Link>
                        </li>
                    </ul>
                </div>
                {/* some link */}

                {/* Quick Links */}
                <div className="xl:w-[calc(25%-3.5rem)] md:w-1/4 w-full xl:px-5">
                    <h2 className="text-2xl font-medium border-l-4 border-primaryColor pl-3 md:mb-5 mb-2 w-fit mx-auto md:w-full md:mx-0">
                        Quick Links
                    </h2>
                    <ul className="space-y-2 capitalize md:text-left text-center">
                        <li className="hover:translate-x-2 hover:text-primaryColor duration-150">
                            <Link href="#">About Us </Link>
                        </li>
                        <li className="hover:translate-x-2 hover:text-primaryColor duration-150">
                            <Link href="#">FAQs </Link>
                        </li>
                        <li className="hover:translate-x-2 hover:text-primaryColor duration-150">
                            <Link href="#">Privacy Policy</Link>
                        </li>
                        <li className="hover:translate-x-2 hover:text-primaryColor duration-150">
                            <Link href="#">How do we help</Link>
                        </li>
                        <li className="hover:translate-x-2 hover:text-primaryColor duration-150">
                            <Link href="#">People behind</Link>
                        </li>
                        <li className="hover:translate-x-2 hover:text-primaryColor duration-150">
                            <Link href="#">Success story</Link>
                        </li>
                    </ul>
                </div>
                {/* Quick Links */}

                {/* Quick Links */}
                <div className="xl:w-[calc(25%-3.5rem)] md:w-1/4 w-full xl:px-5">
                    <div>
                        <h2 className="text-2xl font-medium md:mb-5 mb-2 md:text-left text-center">
                            Become a part of our groups
                        </h2>
                        <div>
                            <EmailSendButton />
                        </div>
                    </div>
                    <div className="mt-5">
                        <h2 className="text-2xl font-medium pl-3 mb-5 border-l-4 border-primaryColor mx-auto w-fit md:mx-0 md:w-full">
                            Contact Us
                        </h2>
                        <ul className="font-thin space-y-2 w-fit mx-auto md:mx-0 md:w-full">
                            <li>
                                <Link
                                    href="mailto:⁠b2winitiative@gmail.com"
                                    target="_blank"
                                    className="flex items-center gap-3">
                                    <VscMail />{' '}
                                    <p className="font-thin">
                                        ⁠b2winitiative@gmail.com
                                    </p>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="mailto:⁠b2winitiative@gmail.com"
                                    target="_blank"
                                    className="flex items-center gap-3">
                                    <MdLocationPin />{' '}
                                    <p className="font-thin">
                                        Banani, Dhaka, Bangladesh
                                    </p>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="tel:+8801685456708"
                                    target="_blank"
                                    className="flex items-center gap-3">
                                    <HiPhone />{' '}
                                    <p className="font-thin">+8801685456708</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* Quick Links */}
            </section>

            <section className="bg-white">
                <figure className="mx-auto w-fit">
                    <Image
                        src={'/images/Payment-Banner_Jul24_V1-02-2048x229.png'}
                        width={1140}
                        height={127}
                        alt="ssl commerz banare"
                    />
                </figure>
            </section>
            <section className="container mx-auto">
                <p className="text-center md:py-5 py-3 text-base">
                    Copyright ©2024 B2W Initiative. Developed by YSI Bangla Ltd.{' '}
                </p>
            </section>
        </footer>
    );
}
