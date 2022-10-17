// in src/admin/App.jsx
import * as React from "react";
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
//import { NodeSSH } from 'node-ssh';

 //const {NodeSSH} = require('node-ssh')
//
// const ssh = new NodeSSH()
//
// ssh.connect({
//     host: '103.125.217.60',
//     username: 'root',
//     password: '002DBGv6AK6Z'
// }).then(function() {
//     ssh.execCommand('ls').then(function(result) {
//         console.log('STDOUT: ' + result.stdout)
//         console.log('STDERR: ' + result.stderr)
//     })
// });

const myArray = ["Ford", "BMW", "Fiat"];
console.log('!!!!!!!!!!', myArray);

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="posts" list={ListGuesser} />
        <Resource name="comments" list={ListGuesser} />

    </Admin>
);

export default App;