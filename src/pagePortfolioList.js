import { ArrayField, ChipField, Datagrid, DateField, List, SingleFieldList, TextField } from 'react-admin';

export const PagePortfolioList = () => (
    <List queryOptions={{ meta: { pageType: 'portfolio' } }}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="album_hash" />
            <TextField source="title" />
            <TextField source="description" />
            <TextField source="page_type" />
            <ArrayField source="PageImages"><SingleFieldList><ChipField source="id" /></SingleFieldList></ArrayField>
        </Datagrid>
    </List>
);