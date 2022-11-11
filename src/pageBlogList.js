import { ArrayField, ChipField, Datagrid, DateField, List, SingleFieldList, TextField } from 'react-admin';

export const PageBlogList = () => (
    <List queryOptions={{ meta: { pageType: 'blog' } }}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="description" />
            <TextField source="page_type" />
            <ArrayField source="PageImages"><SingleFieldList><ChipField source="id" /></SingleFieldList></ArrayField>
        </Datagrid>
    </List>
);