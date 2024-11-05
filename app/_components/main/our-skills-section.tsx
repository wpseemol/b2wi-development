export default function OurSkillSection() {
    return (
        <section className="container mx-auto md:px-0 px-2 md:mb-16 mb-8">
            <div>
                <h2 className="text-center sm:text-[40px] sm:font-bold text-4xl font-semibold text-[#00355a] mb-5">
                    Empowering Students with{' '}
                    <span className="text-[#0070c0]">Global </span> Insights for{' '}
                    <span className="text-[#0070c0]"> Lasting Impact</span>
                </h2>
                <p className="text-center text-neutral-700/85 font-medium text-xl">
                    Get expert guidance to thrive in global careers
                </p>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-10">
                    {skills.map((skill) => (
                        <div
                            key={skill.id}
                            className="w-full md:h-[300px] h-[230px] rounded-2xl hover:scale-[1.01] duration-150"
                            style={{
                                backgroundImage: `url('/images/services/${skill.imgUrl}')`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}>
                            <div
                                className=" w-full h-full flex items-end justify-center pb-10 text-neutral-100/90 text-2xl font-semibold rounded-2xl"
                                style={{
                                    background:
                                        'linear-gradient(rgb(1 30 51 / 17%) 30%, rgb(86 86 126 / 30%) 35%, rgb(0 63 108) 91%)',
                                }}>
                                <h2>{skill.title}</h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

const skills: skills[] = [
    {
        id: 1,
        imgUrl: 'University Research Assistance 1.png',
        title: 'University Research Assistance',
    },
    {
        id: 2,
        imgUrl: 'Profile Assessment 2.png',
        title: 'Profile Assessment',
    },
    {
        id: 3,
        imgUrl: 'SOP Review 3.png',
        title: 'SOP Review ',
    },
    {
        id: 4,
        imgUrl: 'LOR Review 4.png',
        title: 'LOR Review ',
    },
    {
        id: 5,
        imgUrl: 'Visa Application Review 5.png',
        title: 'Visa Application Review ',
    },
    {
        id: 6,
        imgUrl: 'Accommodation Assistance 6.png',
        title: 'Accommodation Assistance',
    },
    // {
    //     id: 7,
    //     imgUrl: '11.-Startup-Mentoring.png',
    //     title: 'Startup Mentoring',
    // },

    // {
    //     id: 8,
    //     imgUrl: '12.-HR-Solutions-1.png',
    //     title: 'HR Solutions',
    // },
    // {
    //     id: 9,
    //     imgUrl: '13.-Mental-Health-1.png',
    //     title: 'Mental Health',
    // },
    // {
    //     id: 10,
    //     imgUrl: '14.-Relationship.png',
    //     title: 'Relationships',
    // },
    // {
    //     id: 11,
    //     imgUrl: '15.-Conjugal-Life.png',
    //     title: 'Conjugal Life',
    // },
    // {
    //     id: 12,
    //     imgUrl: '16.-Life-Coach.png',
    //     title: 'Life Coach',
    // },
];

interface skills {
    id: number | string;
    imgUrl: string;
    title: string;
}
