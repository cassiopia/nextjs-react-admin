import * as React from "react";
import {Admin, Resource, fetchUtils} from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import simpleRestProvider from 'ra-data-simple-rest';
import postgrestRestProvider from '@raphiniert/ra-data-postgrest';
import authProvider from './authProvider';
import {Login, Layout} from './layout';
import {greenTheme} from './layout/themes';
import {TestCommentsList, TestPostList, TestTmpList} from "./TestList";
import {PortfolioList} from "./PortfolioList";
import {PostList} from "./PostList";

//console.log('pageDataProvider', pageDataProvider.getOne());

const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    // add your own headers here
    options.headers.set('X-Custom-Header', 'foobar');
    return fetchUtils.fetchJson(url, options);
};

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
//const dataSimpleRestProvider = simpleRestProvider('http://localhost:3010/portfolio/get_albums');
//const dataPostgreeProvider = postgrestRestProvider('http://localhost:3010/portfolio');
const dataPostgreeProvider = postgrestRestProvider('http://localhost:3001/experiments');

//console.log('dataProvider @@@@@@@ ', dataProvider);
console.log('dataPostgreeProvider', dataPostgreeProvider);

// TODO нужно сделать выборку с этого адреса
//http://localhost:3010/portfolio/get_albums


// todo на сервере запрашивается такорй путь http://localhost:3001/experiments/experiments?order=id.asc&offset=0&limit=10, придумать как с этим быть


const App = () => (
    <>
        <Admin
            dataProvider={dataPostgreeProvider}
            authProvider={authProvider}
            loginPage={Login}
            layout={Layout}
            theme={greenTheme}
        >
            <Resource name="tmp" list={PortfolioList}/>
            <Resource name="post" list={PostList}/>

        </Admin>
    </>
);

export default App;