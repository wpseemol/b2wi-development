import React from 'react';

export type MyLinkType = {
    href: string;
    className?: string;
    children: React.ReactNode;
    activeClassName?: string;
};

export type BrandImages = {
    id: number;
    url: string;
    name: string;
};
