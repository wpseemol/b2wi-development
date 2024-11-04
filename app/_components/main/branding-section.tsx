import { BrandImages } from '@/types';
import Image from 'next/image';
import BardSvg from './bard-svg';
import PointerIcon from './pointer-icon';

export default function BrandingSection() {
    return (
        <section className="flex justify-center md:flex-row flex-col">
            <div className=" min-h-[140px] bg-primaryColor dark:bg-[#023153] md:w-1/2 flex items-center md:justify-end justify-center md:pr-5 relative">
                <div className="flex md:justify-end gap-1 justify-center w-full">
                    <span className="w-5 h-5 mt-1">
                        <PointerIcon />
                    </span>
                    <p className="md:text-[18px] md:font-semibold font-medium text-white">
                        In Collaboration with top-tiered training professionals
                        throughout <br /> global training industry
                    </p>
                    <span className=" w-[70px] absolute bottom-2 right-5 ">
                        <BardSvg />
                        <span className="absolute top-0 left-0  w-full h-full bg-primaryColor/55"></span>
                    </span>
                </div>
            </div>
            <div className=" min-h-[140px] md:w-1/2 bg-[#5d5d5d27] dark:bg-transparent flex items-center md:flex-row flex-col justify-center md:justify-normal">
                <div className="flex items-center md:justify-evenly justify-center gap-10 w-full">
                    {brandImages.map((bImage) => (
                        <figure
                            key={bImage.id}
                            className="max-w-full h-[80px] group">
                            <Image
                                src={`/images/${bImage.url}`}
                                alt={bImage.name}
                                width={224}
                                height={80}
                                className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition "
                            />
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    );
}

const brandImages: BrandImages[] = [
    {
        id: 1,
        url: 'IITM-Research-Park-Logo-1024x877.png',
        name: 'IITM-Research-Park',
    },
    {
        id: 2,
        url: 'IIT_Madras_Logo.svg.png',
        name: 'IIT_Madras_Logo',
    },
    { id: 3, url: 'PSO_BIG-bf5a6ba8-1024x308.png', name: 'BIG-bf5a6ba8' },
];
