
const routes = {
    dashboard: '/',
    users: {
        base: '/users',
    },
    licenses: {
        base: '/licenses',
    },
    companies: {
        base: '/companies',
        detail: (id: string | number) => `/companies/${id ?? "id"}`,
    },
};

export default routes;