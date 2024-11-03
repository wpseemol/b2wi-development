import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-primaryColor text-white pt-5">
            <section></section>

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
