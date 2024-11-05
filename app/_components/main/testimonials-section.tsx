import TestimonialSlider from './testimonial-slider';

export default function TestimonialsSection() {
    return (
        <section className="container mx-auto md:px-0 px-2 md:mb-16 mb-20">
            <div className="mb-8">
                <h2 className="text-center sm:text-[40px] sm:font-bold text-4xl font-semibold text-[#00355a] mb-5">
                    Recommended by
                    <span className="text-[#0070c0]">
                        Learner and Professionals
                    </span>
                </h2>
                <p className="text-center text-neutral-700/85 font-medium text-base">
                    A deep commitment to diversity and inclusion
                </p>
            </div>
            <div className="relative max-h-[350px]">
                <TestimonialSlider />
            </div>
        </section>
    );
}
