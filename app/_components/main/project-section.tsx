import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function ProjectSection() {
    return (
        <section
            className="container mx-auto md:px-0 px-2 flex 
        justify-center items-center lg:flex-nowrap flex-wrap md:gap-10 gap-5 md:mb-16 mb-8">
            <div className="md:w-1/2 flex justify-end">
                <figure className="xl:w-[36rem]">
                    <Image
                        src="/images/Working-Student.png"
                        width={515}
                        height={537}
                        alt="Project image"
                        className="w-full h-auto rounded-xl"
                    />
                </figure>
            </div>
            <div className="md:w-1/2 space-y-5">
                <h2 className="sm:text-4xl text-3xl font-bold text-[#024f86] sm:text-left text-center">
                    Your ultimate partner in
                    <br className="hidden sm:block" /> personal and professional{' '}
                    <br className="hidden sm:block" /> growth
                </h2>
                <h3 className="text-lg font-semibold text-[#076eb8] sm:text-left text-center">
                    Develop leadership, efficiency, productivity, and <br />{' '}
                    excellence through our targeted training <br /> programs.
                </h3>
                <div className="text-neutral-700 -space-y-2 xl:w-[38rem] sm:text-left text-center">
                    <p>
                        Take advantage of the experiential-learning
                        opportunities built into many programs. Let your choice
                        take your life on a transformative journeys where your
                        potentials are unleashed.
                    </p>
                    <br />
                    <p>
                        {' '}
                        At Empower Minds, we pride ourselves on being not just a
                        consultancy firm, but a beacon of empowerment, guiding
                        individuals and organizations toward unprecedented
                        success.
                    </p>
                </div>
                <div className=" flex flex-wrap justify-center items-center gap-3 w-fit">
                    <Button
                        size="lg"
                        variant="default"
                        className="bg-primaryColor/80 h-12 hover:bg-primaryColor/85 mx-auto w-fit dark:text-neutral-100/80 text-neutral-100">
                        Talk to an Expert
                    </Button>
                    <Button
                        size="lg"
                        variant="outline"
                        className="border-primaryColor h-12 hover:bg-[#005694] hover:text-neutral-100/80">
                        Training Programs
                    </Button>
                </div>
            </div>
        </section>
    );
}
