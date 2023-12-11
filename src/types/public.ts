import React from "react";

export interface LayoutProps {
    children: React.ReactNode
};

export interface MenuTabsPropsType {
    id: string,
    url: string,
    title: string,
    Icon: React.ReactNode,
};


export interface UserStateType {
    data?: {
        last_name: string,
        first_name: string,
        mobile: string,
    },
    status?: string,
    isFetching?: boolean,
};


export interface TableHeadPropsType {
    id: number | string,
    align: 'right' | 'left',
    label: string
};
