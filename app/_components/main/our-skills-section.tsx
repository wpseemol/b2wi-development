export default function OurSkillSection() {
    return (
        <section className="container mx-auto md:px-2 px-2 md:mb-16 mb-8">
            <div>
                <h2 className="text-center sm:text-[40px] sm:font-bold text-4xl font-semibold text-[#00355a] mb-5">
                    Our students develop{' '}
                    <span className="text-[#0070c0]">insights</span> that drive{' '}
                    <span className="text-[#0070c0]">impact</span>
                </h2>
                <p className="text-center text-neutral-700/85 font-medium text-base">
                    Elevate your skills with career guidance from our experts
                </p>

                <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-1 gap-5 mt-10">
                    {skills.map((skill) => (
                        <div
                            key={skill.id}
                            className="w-full md:h-[300px] h-[230px] rounded-2xl hover:scale-[1.01] duration-150"
                            style={{
                                backgroundImage: `url('/images/skills/${skill.imgUrl}')`,
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
        imgUrl: '5.-Career.png',
        title: 'Career Mentoring',
    },
    {
        id: 2,
        imgUrl: '6.-Admission-Preparation-1.png',
        title: 'Admission Preperation',
    },
    {
        id: 3,
        imgUrl: '7.-Job-Preparation.png',
        title: 'Job Preparation',
    },
    {
        id: 4,
        imgUrl: '8.-Soft-Hard-Skills.png',
        title: 'Soft & Hard Skills',
    },
    {
        id: 5,
        imgUrl: '5.-Communicative-English.png',
        title: 'Communicative English',
    },
    {
        id: 6,
        imgUrl: '10.-Data-Analysis.png',
        title: 'Data Analysis',
    },
    {
        id: 7,
        imgUrl: '11.-Startup-Mentoring.png',
        title: 'Startup Mentoring',
    },

    {
        id: 8,
        imgUrl: '12.-HR-Solutions-1.png',
        title: 'HR Solutions',
    },
    {
        id: 9,
        imgUrl: '13.-Mental-Health-1.png',
        title: 'Mental Health',
    },
    {
        id: 10,
        imgUrl: '14.-Relationship.png',
        title: 'Relationships',
    },
    {
        id: 11,
        imgUrl: '15.-Conjugal-Life.png',
        title: 'Conjugal Life',
    },
    {
        id: 12,
        imgUrl: '16.-Life-Coach.png',
        title: 'Life Coach',
    },
];

interface skills {
    id: number | string;
    imgUrl: string;
    title: string;
}
