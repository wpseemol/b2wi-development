export default function HeroSection() {
    return (
        <section className="bg-hero-pattern bg-right-top bg-no-repeat bg-cover bg-[#8a3f3fb2] -mt-1">
            <div className="w-full min-h-[730px] bg-neutral-900/45">
                <div className="container mx-auto md:px-0 px-2  text-white flex flex-col justify-center md:gap-6 gap-3 min-h-[750px]">
                    {/* <h3 className="text-2xl font-semibold">
                        Ignite Your Potential with
                    </h3> */}
                    <h2 className="sm:text-6xl md:text-5xl text-4xl font-semibold">
                        Bangladeshi Talent.
                        <br /> Global Aspiration.
                    </h2>
                    <p className="text-base font-normal">
                        Whether you’re a student or a professional, at B2WI,{' '}
                        <br />
                        we’re empowering Bangladeshi talent to go global
                    </p>

                    <div>
                        {/* <ScheduleCall /> */}
                        {/* <div className="flex items-center gap-1">
                            <span className="w-4 h-4 ">
                                <TickIcon />
                            </span>
                            <p className='className="text-base font-normal"'>
                                First Pearson-Certified Career Counsellor and
                                Life Coach in Bangladesh
                            </p>
                        </div> */}
                        <button
                            type="submit"
                            className="flex justify-center items-center bg-primaryColor/85 duration-150 px-6 py-4 rounded-sm gap-1 font-medium hover:bg-neutral-100/85 border border-[#013f6b] hover:text-neutral-900/90 hover:font-medium hover:border-neutral-900/90">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
