import CountupAnimation from './countup-animation';

export default function ProjectDoneNumbering() {
    return (
        <section className="container mx-auto md:px-2 px-3 py-10">
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-1 gap-1">
                {numberWorks.map((work) => (
                    <div
                        key={work.id}
                        className="flex flex-col justify-center items-center md:py-10 py-7 cursor-pointer group">
                        <h2 className="md:text-[69px] text-6xl font-bold text-primaryColor group-hover:scale-105 duration-150 mb-3">
                            <CountupAnimation wNumber={work.wNumber} />
                            {work.symbol}
                        </h2>
                        <h3 className="text-neutral-700/85 text-lg font-medium">
                            {work.title}
                        </h3>
                    </div>
                ))}
            </div>
        </section>
    );
}

const numberWorks: NumberWorks[] = [
    { id: 1, wNumber: 17, symbol: '+', title: 'Years of Experience' },
    { id: 2, wNumber: 100, symbol: '+', title: 'Learners & Professionals' },
    { id: 3, wNumber: 47, symbol: '%', title: 'Trainees are Women' },
    { id: 4, wNumber: 2, symbol: 'K+', title: 'Free Counseling Sessions' },
    { id: 5, wNumber: 30, symbol: '+', title: 'Life Coaching Clients' },
    { id: 6, wNumber: 25, symbol: '+', title: 'Instructors & Mentors' },
    { id: 7, wNumber: 9, symbol: '', title: 'National Certifications' },
    { id: 8, wNumber: 3, symbol: '', title: 'Projects with Dev Orgs' },
];

interface NumberWorks {
    id: number;
    wNumber: number;
    symbol: string;
    title: string;
}
