import { CategoryHelpType } from '@/types/how-does-help';

export default function HelpCategory() {
    return (
        <section className="container mx-auto md:mb-16 mb-14">
            {/* <div>
                <h3></h3>
            </div> */}

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-5 gap-y-7">
                {categoryHelp.map((category) => (
                    <div
                        key={category.id}
                        className="flex flex-col gap-y-5 justify-center items-center p-5 border rounded-md hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] duration-200">
                        <h3 className="text-3xl font-semibold text-center text-neutral-900/85">
                            {category.title}
                        </h3>
                        <p className="text-center text-lg font-medium text-neutral-800/80">
                            {category.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}

const categoryHelp: CategoryHelpType[] = [
    {
        id: 1,
        title: 'University Research Assistance',
        description:
            'Our database has information on over 2,000 universities across 30+ country destinations across the world. You can explore and find the initial information necessary from this database.',
    },
    {
        id: 2,
        title: 'Profile Assessment',
        description:
            'You always know what’s best for your kid, so if a time comes when you need help, here’s one more thing to know: not all hospitals can deliver the same quality of care.',
    },
    {
        id: 3,
        title: 'SOP (Statement of Purpose) Review',
        description:
            'You always know what’s best for your kid, so if a time comes when you need help, here’s one more thing to know: not all hospitals can deliver the same quality of care.',
    },
];
