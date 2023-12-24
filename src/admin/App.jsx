import * as React from "react";
import {Admin, Resource} from 'react-admin';
import postgrestRestProvider from '@raphiniert/ra-data-postgrest';
import authProvider from './authProvider';
import {Login, Layout} from './layout';
import {greenTheme} from './layout/themes';
import {NewsList} from "./NewsList";
import posts from "./posts";

const dataPostgreeProvider = postgrestRestProvider('http://localhost:3001/posts');

console.log('dataPostgreeProvider', dataPostgreeProvider);

const App = () => (
    <>
        <Admin
            dataProvider={dataPostgreeProvider}
            authProvider={authProvider}
            loginPage={Login}
            layout={Layout}
            theme={greenTheme}
        >
            <Resource name="news" list={NewsList}/>
            <Resource name="post" {...posts}/>

        </Admin>
    </>
);

export default App;