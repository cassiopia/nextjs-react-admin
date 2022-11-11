import { fetchUtils } from 'react-admin';
import { stringify } from 'query-string';

//const apiUrl = 'https://my.api.com/';
//http://localhost:3000/page/http://localhost:3000/page/get_by_page_type//
const apiUrl = 'http://localhost:3000/page';
const httpClient = fetchUtils.fetchJson;

export default {
    getList: (resource, params) => {
        // const { page, perPage } = params.pagination;
        // const { field, order } = params.sort;
       // !!!! const { pageType } = params.pageType;
       //  const query = {
       //      sort: JSON.stringify([field, order]),
       //      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
       //      filter: JSON.stringify(params.filter),
       //  };
        // const url = `${apiUrl}/${resource}?${stringify(query)}`;
        console.log('meta? ;)', params.meta);
        const url = `${apiUrl}/get_by_page_type/${params.meta.pageType}`;

        return httpClient(url).then(({ headers, json }) => ({
            data: json,
            // todo Сделать пагинацию используя content-range
            //total: parseInt(headers.get('content-range').split('/').pop(), 10),
            total: 4,
        }));
    },

    getOne: (resource, params) =>
        httpClient(`${apiUrl}/get_one_by_id/{params.id}`).then(({ json }) => ({
            data: json,
        })),
    //
    // getMany: (resource, params) => {
    //     const query = {
    //         filter: JSON.stringify({ ids: params.ids }),
    //     };
    //     const url = `${apiUrl}/${resource}?${stringify(query)}`;
    //     return httpClient(url).then(({ json }) => ({ data: json }));
    // },
    //
    // getManyReference: (resource, params) => {
    //     const { page, perPage } = params.pagination;
    //     const { field, order } = params.sort;
    //     const query = {
    //         sort: JSON.stringify([field, order]),
    //         range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
    //         filter: JSON.stringify({
    //             ...params.filter,
    //             [params.target]: params.id,
    //         }),
    //     };
    //     const url = `${apiUrl}/${resource}?${stringify(query)}`;
    //
    //     return httpClient(url).then(({ headers, json }) => ({
    //         data: json,
    //         total: parseInt(headers.get('content-range').split('/').pop(), 10),
    //     }));
    // },
    //
    // create: (resource, params) =>
    //     httpClient(`${apiUrl}/${resource}`, {
    //         method: 'POST',
    //         body: JSON.stringify(params.data),
    //     }).then(({ json }) => ({
    //         data: { ...params.data, id: json.id },
    //     })),
    //
    // update: (resource, params) =>
    //     httpClient(`${apiUrl}/${resource}/${params.id}`, {
    //         method: 'PUT',
    //         body: JSON.stringify(params.data),
    //     }).then(({ json }) => ({ data: json })),
    //
    // updateMany: (resource, params) => {
    //     const query = {
    //         filter: JSON.stringify({ id: params.ids}),
    //     };
    //     return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
    //         method: 'PUT',
    //         body: JSON.stringify(params.data),
    //     }).then(({ json }) => ({ data: json }));
    // },
    //
    // delete: (resource, params) =>
    //     httpClient(`${apiUrl}/${resource}/${params.id}`, {
    //         method: 'DELETE',
    //     }).then(({ json }) => ({ data: json })),
    //
    // deleteMany: (resource, params) => {
    //     const query = {
    //         filter: JSON.stringify({ id: params.ids}),
    //     };
    //     return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
    //         method: 'DELETE',
    //         body: JSON.stringify(params.data),
    //     }).then(({ json }) => ({ data: json }));
    // },
};