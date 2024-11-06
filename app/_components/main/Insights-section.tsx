import { Button } from '@/components/ui/button';

export default function InsightsSection() {
    return (
        <section className="md:mb-16 mb-8 bg-primaryColor/55 py-10">
            <div className="container mx-auto md:px-0 px-2 py-10 sm:py-7 ">
                <div className="flex sm:flex-row flex-col justify-between sm:gap-0 gap-3 mb-10">
                    <div>
                        {/* <h3 className="text-2xl text-[#0976c4] font-semibold">
                        Insights & Inspirations
                    </h3> */}
                        <h2 className="md:text-[40px] text-4xl font-bold text-[#004679]">
                            B2WI Insights
                        </h2>
                    </div>
                    {/* <Button
                        size="lg"
                        variant="outline"
                        className="border-primaryColor h-12 hover:bg-[#005694] hover:text-neutral-100/80">
                        Read all insights
                    </Button> */}

                    <Button
                        size="lg"
                        variant="outline"
                        className="border-primaryColor h-12 bg-[#005694] text-neutral-100/80 ">
                        Read all insights
                    </Button>
                </div>
                <div>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Repellendus est delectus fugit, ducimus alias
                        obcaecati facilis hic deserunt. Molestias, fugit animi.
                        Minus, blanditiis maxime dolores quaerat culpa eum qui
                        sapiente.
                    </p>
                </div>
            </div>
        </section>
    );
}
