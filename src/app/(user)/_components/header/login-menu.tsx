import { auth } from '@/auth/auth';
import Link from 'next/link';
import { FaRegUserCircle } from 'react-icons/fa';
import { IoMdLogIn } from 'react-icons/io';

export default async function LoginMenu() {
    const loginUser = await auth();

    return (
        <>
            <li>
                {loginUser ? (
                    <Link
                        href="/profile"
                        className="flex items-center gap-1 text-primary hover:text-[#0a2f49] dark:text-[#a2bdd1] dark:hover:text-[#a3d7fc] duration-100 group"
                    >
                        <div className="text-4xl">
                            {loginUser?.user.image ? (
                                <>userImage</>
                            ) : (
                                <FaRegUserCircle />
                            )}
                        </div>
                        <div className="text-sm">
                            <h2 className="font-medium">
                                {loginUser?.user.email}
                            </h2>
                            <p className="text-xs">{loginUser?.user.name}</p>
                        </div>
                    </Link>
                ) : (
                    <Link
                        href="/login"
                        className="flex items-center gap-1 text-primary hover:text-[#0a2f49] dark:text-[#a2bdd1] dark:hover:text-[#a3d7fc] duration-100 group"
                    >
                        <div className="text-4xl">
                            <IoMdLogIn className="group-hover:scale-105 duration-100" />
                        </div>
                        <div className="text-sm">
                            <h2 className="font-medium">Login</h2>
                            <p className="text-xs">Connected with us</p>
                        </div>
                    </Link>
                )}
            </li>
        </>
    );
}
