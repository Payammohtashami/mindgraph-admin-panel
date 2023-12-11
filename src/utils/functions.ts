import { UserStateType } from "@/types/public";

export function fullname(user: UserStateType){
    if(!user?.data?.mobile) null; 
    return !!user?.data?.first_name && !!user?.data?.last_name ? user?.data?.first_name + ' ' + user?.data?.last_name : 'unKnown';
};