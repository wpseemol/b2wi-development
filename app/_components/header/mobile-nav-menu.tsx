'use client';

import MyLink from '@/components/my-link';
import { useState } from 'react';
import { IoClose, IoMenu } from 'react-icons/io5';
import { nevMenus } from './nav-menu';

export default function MobileNavMenu() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <>
            <button
                className="group text-2xl md:text-neutral-100"
                onClick={() => {
                    setIsOpen(!isOpen);
                }}>
                {isOpen ? <IoClose /> : <IoMenu className="" />}
            </button>
            <ul
                className={`absolute bg-slate-50 dark:bg-slate-900
            left-0 md:top-[13rem] top-[3.2rem] w-full overflow-hidden duration-200 ${
                isOpen
                    ? 'border-x border-b h-fit shadow rounded-b duration-200'
                    : 'h-0 p-0 duration-200'
            }`}>
                {isOpen &&
                    nevMenus.map((menu) => (
                        <li
                            key={menu.id}
                            className="pl-3 border-b hover:translate-x-3 duration-150 py-2">
                            <MyLink
                                href={menu.slug}
                                className="hover:text-primaryColor"
                                activeClassName="text-primaryColor translate-x-3">
                                {menu.name}
                            </MyLink>
                        </li>
                    ))}
            </ul>
        </>
    );
}
