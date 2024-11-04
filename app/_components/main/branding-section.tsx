import BardSvg from './bard-svg';
import PointerIcon from './pointer-icon';

export default function BrandingSection() {
    return (
        <section className="flex justify-center">
            <div className=" min-h-[140px] bg-primaryColor dark:bg-[#023153] w-1/2 flex items-center justify-end pr-5 relative">
                <div className="flex justify-end gap-1">
                    <span className="w-5 h-5 mt-1">
                        <PointerIcon />
                    </span>
                    <p className="text-[18px] font-semibold text-white">
                        In Collaboration with top-tiered training professionals
                        throughout <br /> global training industry
                    </p>
                    <span className=" w-16 absolute bottom-2 right-5 ">
                        <BardSvg />
                        <span className="absolute top-0 left-0  w-full h-full bg-primaryColor/55"></span>
                    </span>
                </div>
            </div>
            <div className=" min-h-[140px] w-1/2 bg-[#5d5d5d] dark:bg-transparent">
                right site
            </div>
        </section>
    );
}
