import * as React from "react";
import {Admin, Resource} from 'react-admin';
import postgrestRestProvider from '@raphiniert/ra-data-postgrest';
import authProvider from './authProvider';
import {Login, Layout} from './layout';
import {greenTheme} from './layout/themes';
import {PortfolioList} from "./PortfolioList";
import {PostList} from "./PostList";

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
            <Resource name="tmp" list={PortfolioList}/>
            <Resource name="post" list={PostList}/>

        </Admin>
    </>
);

export default App;