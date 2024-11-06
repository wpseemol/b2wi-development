'use client';
import { newData } from '@/lib/news-data';
import Glide from '@glidejs/glide';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { BsArrowRightShort } from 'react-icons/bs';
import { FaTags } from 'react-icons/fa6';

export default function ScholarshipUpdatesCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
        const slider = new Glide('.scholarship-updates-carousel', {
            type: 'carousel',
            focusAt: 0,
            perView: 3,
            autoplay: 4500,
            animationDuration: 700,
            gap: 35,
            breakpoints: {
                1249: {
                    perView: 3,
                },
                750: {
                    perView: 2,
                },
                640: {
                    perView: 1,
                },
            },
        });

        // Listen to the "move" event to update the active indicator
        slider.on('move', () => {
            setCurrentIndex(slider.index);
        });

        slider.mount();

        return () => {
            slider.destroy();
        };
    }, []);

    return (
        <div className="relative">
            {loading && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <p className="text-xl">loading...</p>
                </div>
            )}
            <div
                className={`scholarship-updates-carousel relative w-full ${
                    loading ? 'opacity-0' : ''
                }`}>
                {/* Slides */}
                <div className="overflow-hidden" data-glide-el="track">
                    <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
                        {newData.map((news) => (
                            <li
                                key={news.id}
                                className="group border border-neutral-500/10 rounded-lg ">
                                <figure className="w-full sm:h-[280px] h-[200px] rounded-t-lg overflow-hidden">
                                    <Image
                                        width={350}
                                        height={240}
                                        alt={news.title}
                                        src={`/images/news/${news.imgUrl}`}
                                        className="w-full h-full object-cover object-center rounded-t-lg scale-110 hover:scale-100 duration-200"
                                    />
                                </figure>
                                <div className="ml-1 mt-3 p-3 pl-6 pb-6 ">
                                    <div className="flex items-center gap-1 text-xs mb-3 text-neutral-700/70 dark:text-neutral-400">
                                        <FaTags /> <h3>{news.publishedBy}</h3>
                                    </div>
                                    <p className="text-primaryColor/70 dark:text-neutral-300 text-sm mb-1">
                                        {news.publishedAt}
                                    </p>
                                    <h2 className="text-base font-semibold text-[#002c4b] dark:text-neutral-100 group-hover:underline duration-150 ">
                                        {news.title}
                                    </h2>
                                    <button className="mt-4 text-base text-neutral-700/75 dark:text-neutral-500 flex items-center gap-1 group-hover:gap-4 duration-150 bg-primaryColor text-white px-3 py-2 rounded">
                                        Read More{' '}
                                        <span className="text-2xl">
                                            <BsArrowRightShort />
                                        </span>
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Indicators */}
                <div
                    className="flex w-full items-center justify-center gap-2 mt-4"
                    data-glide-el="controls[nav]">
                    {newData.map((data, index) => (
                        <button
                            key={index}
                            className={`group p-2 `}
                            data-glide-dir={`=${index}`}
                            aria-label={`goto slide ${index + 1}`}>
                            <span
                                className={`block h-2 w-2 rounded-full transition-colors duration-300 overflow-hidden ring-1 ring-primaryColor ${
                                    currentIndex === index ? 'bg-[#013458]' : ''
                                }`}></span>
                        </button>
                    ))}
                </div>
            </div>
            {/*<!-- End Carousel with indicators outside --> */}
        </div>
    );
}
