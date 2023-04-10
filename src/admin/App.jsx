import * as React from "react";
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import authProvider from './authProvider';
import { Login, Layout } from './layout';
import { greenTheme } from './layout/themes';


const myArray = ["Ford", "BMW", "Fiat"];
console.log('!!!!!!!!!!', myArray);

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (
    <Admin
        dataProvider={dataProvider}
        authProvider={authProvider}
        loginPage={Login}
        layout={Layout}
        theme={greenTheme}
    >
        <Resource name="posts" list={ListGuesser} />
        <Resource name="comments" list={ListGuesser} />

    </Admin>
);

export default App;