import ApiCall from "@/libs/axios/axiosCall";
import { useQuery } from "react-query";

export const useGetUsersList = () => {
    return useQuery(
      ["get-users-list"],
      () =>
        ApiCall({
            method: 'get',
            path: '/users',
        }),
    );
};

export const useGetCompaniesList = () => {
    return useQuery(
      ["get-companies-list"],
      () =>
        ApiCall({
            method: 'get',
            path: '/companies',
        }),
    );
};

export const useGetLicensesList = () => {
    return useQuery(
      ["get-licenses-list"],
      () =>
        ApiCall({
            method: 'get',
            path: '/licenses',
        }),
    );
};