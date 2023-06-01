import { Datagrid, EmailField, List, ReferenceField, TextField } from 'react-admin';

export const PostList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="name" />
         </Datagrid>
    </List>
);