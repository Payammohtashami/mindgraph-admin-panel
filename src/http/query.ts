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
