import { CategoryHelpType } from '@/types/how-does-help';
import Image from 'next/image';

export default function HelpCategoryCard({
    content,
}: {
    content: CategoryHelpType;
}) {
    return (
        <div className="relative ">
            <div className="group border border-black/50 rounded-md hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] duration-200 relative h-[300px] hover:h-fit overflow-hidden">
                <figure>
                    <Image
                        src={`/images/how-does-help/${content.imageUrl}`}
                        alt={content.title}
                        width={450}
                        height={380}
                    />
                </figure>
                <div className="md:px-5 -pb-5 p-2 flex flex-col justify-center items-center absolute group-hover:top-0 top-[14.8rem] left-0 duration-200 group-hover:bg-sky-900/75 group-hover:text-white group-hover:w-full group-hover:h-full ">
                    <h3 className=" h-12 flex items-center group-hover:text-2xl group-hover:font-semibold group-hover:text-neutral-900/85 group-hover:text-white group-hover:dark:text-neutral-100/85 duration-150 text-center group-hover:mb-3">
                        {content.title}
                    </h3>
                    <p className="text-center font-medium group-hover:text-white text-neutral-800/80 dark:text-neutral-100/85">
                        {content.description}
                    </p>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-[3.7rem] "></div>
        </div>
    );
}
