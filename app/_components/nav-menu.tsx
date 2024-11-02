import MyLink from '@/components/my-link';
import { MenuItem } from '@/types/nav-menu';
import { IoMdArrowDropdown } from 'react-icons/io';

export default function NavMenu() {
    return (
        <div>
            <nav className="container mx-auto flex justify-between items-center">
                <ul className="flex gap-4 items-center text-neutral-100 text-lg ">
                    {nevMenus.map((menu) => {
                        return (
                            <li
                                key={menu.slug}
                                className={`hover:text-primaryColor ${
                                    menu.subMenu ? 'relative group' : ''
                                }`}>
                                {menu.subMenu ? (
                                    <button className="flex items-center gap-1 cursor-pointer border-spacing-2 ">
                                        {menu.name}{' '}
                                        <span>
                                            <IoMdArrowDropdown />{' '}
                                        </span>{' '}
                                        <ul className="absolute top-7 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 shadow-xl rounded-b-md overflow-hidden h-0 pt-0 group-hover:h-fit group-hover:pt-2 group-hover:border group-hover:opacity-100 duration-200">
                                            {subMenu.map((menu) => (
                                                <li
                                                    key={menu.slug}
                                                    className="pl-2 pr-5 border-b w-full text-nowrap hover:translate-x-1 duration-100 hover:text-primaryColor text-left">
                                                    <MyLink
                                                        href={menu.slug}
                                                        activeClassName="text-primaryColor">
                                                        {menu.name}
                                                    </MyLink>
                                                </li>
                                            ))}
                                        </ul>
                                    </button>
                                ) : (
                                    <MyLink
                                        href={menu.slug}
                                        activeClassName="text-primaryColor">
                                        {menu.name}
                                    </MyLink>
                                )}
                            </li>
                        );
                    })}
                </ul>

                <button
                    className="bg-transparent border-2 
                    hover:scale-105 duration-300 hover:bg-transparent font-medium text-neutral-50 text-center
                border-[#1d87d3] px-6 py-3 rounded-full shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
                    BOOK CONSULTATION
                </button>
            </nav>
        </div>
    );
}

const nevMenus: MenuItem[] = [
    { slug: '/', name: 'Home' },
    { slug: '/hacks', name: 'Hacks' },
    { slug: '#', name: 'Service', subMenu: true },
    { slug: '/scholarships', name: 'Scholarships' },
    { slug: '/assessment', name: 'Assessment' },
    { slug: '/about-us', name: 'About Us' },
];

const subMenu: MenuItem[] = [
    {
        slug: '/how-do-we-help',
        name: 'How Do We Help',
    },
    { slug: 'people-behind', name: 'People Behind' },
    { slug: 'success-stories', name: 'Success Stories' },
    { slug: 'media-coverage', name: 'Media Coverage' },
];
