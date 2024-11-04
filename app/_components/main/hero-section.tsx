import TickIcon from '../../../components/svg/tik-icon';
import ScheduleCall from './schedule-call';

export default function HeroSection() {
    return (
        <section className="bg-hero-pattern bg-right-top bg-no-repeat bg-cover bg-[#8a3f3fb2] -mt-1 ">
            <div className="w-full min-h-[750px] bg-neutral-900/45">
                <div className="container mx-auto md:px-2 px-3 text-white flex flex-col justify-center gap-3 min-h-[750px]">
                    <h3 className="text-2xl font-semibold">
                        Ignite Your Potential with
                    </h3>
                    <h2 className="text-6xl font-semibold">Empower Minds</h2>
                    <p className="text-base font-normal">
                        Skilling, reskilling, upskilling, and cross-skilling in
                        different areas.
                        <br /> Your partner in personal and professional
                        success.
                    </p>

                    <div>
                        <ScheduleCall />
                        <div className="flex items-center gap-1">
                            <span className="w-4 h-4 ">
                                <TickIcon />
                            </span>
                            <p className='className="text-base font-normal"'>
                                First Pearson-Certified Career Counsellor and
                                Life Coach in Bangladesh
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
