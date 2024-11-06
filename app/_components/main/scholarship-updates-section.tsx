import { Button } from '@/components/ui/button';

export default function ScholarshipUpdates() {
    return (
        <section className="container mx-auto md:px-0 px-2 py-10 sm:py-7 md:mb-16 mb-8">
            <div className="flex sm:flex-row flex-col justify-between sm:gap-0 gap-3 mb-10">
                <div>
                    {/* <h3 className="text-2xl text-[#0976c4] font-semibold">
                        Insights & Inspirations
                    </h3> */}
                    <h2 className="md:text-[40px] text-4xl font-bold text-[#004679]">
                        Scholarship Updates
                    </h2>
                </div>
                <Button
                    size="lg"
                    variant="outline"
                    className="border-primaryColor h-12 hover:bg-[#005694] hover:text-neutral-100/80">
                    Read all Scholarship Updates
                </Button>
            </div>
            {/* slider section */}
            {/* <NewsCarousel /> */}
        </section>
    );
}
