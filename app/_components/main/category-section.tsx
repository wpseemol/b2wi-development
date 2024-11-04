import ResearchAssistance from '@/components/svg/research-assistance';
import { CgPlayListSearch } from 'react-icons/cg';
import { GiFamilyHouse } from 'react-icons/gi';
import { ImProfile } from 'react-icons/im';

export default function CategorySection() {
    return (
        <section className="container mx-auto md:px-2 px-3 py-8">
            <div className="flex flex-wrap justify-center items-center md:gap-8 gap-5">
                <div className="group flex flex-col items-center border border-neutral-700/10 px-4 py-7 hover:shadow-md duration-150 rounded h-[12rem]">
                    <span className="group-hover:scale-105 duration-150 w-[5rem] h-[5rem]">
                        <ResearchAssistance />
                    </span>
                    <h2 className="text-center font-semibold text-neutral-800/70 w-60">
                        University Research <br /> Assistance
                    </h2>
                </div>

                <div className="group flex flex-col items-center border border-neutral-700/10 px-4 py-7 hover:shadow-md duration-150 rounded h-[12rem]">
                    <span className="group-hover:scale-105 duration-150 w-[5rem] h-[5rem] flex justify-center items-center">
                        <ImProfile className="text-5xl text-[#087bceb3]" />
                    </span>
                    <h2 className="text-center font-semibold text-neutral-800/70 w-60">
                        Profile Assessment
                    </h2>
                </div>
                <div className="group flex flex-col items-center border border-neutral-700/10 px-4 py-7 hover:shadow-md duration-150 rounded h-[12rem]">
                    <span className="group-hover:scale-105 duration-150 w-[5rem] h-[5rem] flex justify-center items-center">
                        <GiFamilyHouse className="text-5xl text-[#087bceb3]" />
                    </span>
                    <h2 className="text-center font-semibold text-neutral-800/70 w-60">
                        Accommodation Assistance
                    </h2>
                </div>
                <div className="group flex flex-col items-center border border-neutral-700/10 px-4 py-7 hover:shadow-md duration-150 rounded h-[12rem]">
                    <span className="group-hover:scale-105 duration-150 w-[5rem] h-[5rem] flex justify-center items-center">
                        <CgPlayListSearch className="text-5xl text-[#087bceb3]" />
                    </span>
                    <h2 className="text-center font-semibold text-neutral-800/70 w-60">
                        SOP Review
                    </h2>
                </div>
            </div>
        </section>
    );
}
