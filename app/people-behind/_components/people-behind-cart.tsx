import { PeopleBehind } from '@/lib/people-behind-data';
import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedinIn } from 'react-icons/fa6';
import PeopleDetails from './people-details';

export default function PeopleBehindCart({
    details,
}: {
    details: PeopleBehind;
}) {
    return (
        <div className="flex flex-col items-center gap-y-3 border border-neutral-700/15 px-3 py-5 sm:px-5 sm:py-8 h-fit hover:shadow-md duration-100 rounded">
            <figure className="overflow-hidden rounded-md">
                <Image
                    src={`/images/people-behind/${details.imageUrl}`}
                    alt={details.name}
                    width={160}
                    height={175}
                    className="rounded-md"
                />
            </figure>
            <h3 className="text-2xl font-medium">{details.name}</h3>

            <PeopleDetails htmlContent={details.description} />

            {details.socialLink && (
                <div className="mt-3">
                    <Link
                        href={details.socialLink}
                        className="hover:scale-110 inline-block duration-150 group">
                        <FaLinkedinIn className="text-primaryColor text-2xl group-hover:drop-shadow-2xl" />
                    </Link>
                </div>
            )}
        </div>
    );
}
