// todo Файл на поведение проекта не влияет... пока
import 'proxy-polyfill';
import * as React from 'react';
import ReactDOM from 'react-dom';

import App from './admin/App';

console.log('Тут?');

ReactDOM.render(<App />, document.getElementById('root'));