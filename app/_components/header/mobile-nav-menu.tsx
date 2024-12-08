'use client';

import MyLink from '@/components/my-link';
import { useEffect, useState } from 'react';
import { IoClose, IoMenu } from 'react-icons/io5';
import { nevMenus } from './nav-menu';

export default function MobileNavMenu() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    useEffect(() => {
        if (isOpen) {
            const handleClose = () => {
                setIsOpen(false);
            };

            const body = document.body;
            body.addEventListener('click', handleClose);

            return () => {
                body.removeEventListener('click', handleClose);
            };
        }
    }, [isOpen]);

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
             md:top-[2.5rem] top-[3rem] container overflow-hidden duration-200
             right-0 z-[99] origin-bottom
             ${
                 isOpen
                     ? 'border-x border-b h-fit shadow rounded-b duration-200'
                     : 'h-0 p-0 duration-200'
             }`}>
                {isOpen &&
                    nevMenus.map((menu) => (
                        <MyLink
                            key={menu.id}
                            href={menu.slug}
                            className="hover:text-primaryColor "
                            activeClassName="text-primaryColor translate-x-3 ">
                            <li className="pl-3 border-b hover:translate-x-3 duration-150 py-2">
                                {menu.name}
                            </li>
                        </MyLink>
                    ))}
            </ul>
        </>
    );
}
