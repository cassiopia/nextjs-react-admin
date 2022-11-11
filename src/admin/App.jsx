// in src/admin/App.jsx
import * as React from "react";
import { Admin, Resource} from 'react-admin';
import pageDataProvider from "../providers/pageDataProvider";
import { PageBlogList } from "../pageBlogList";
import { PagePortfolioList } from "../pagePortfolioList";


const App = () => (
    <Admin dataProvider={pageDataProvider}>
        <Resource name="blog" list={PageBlogList} />
        <Resource name="portfolio" list={PagePortfolioList} />
    </Admin>
);

export default App;