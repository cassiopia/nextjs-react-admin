// import React from "react";
// import { List, Datagrid, TextField } from "react-admin";
// import {ListViewProps} from "ra-ui-materialui/src/list/ListView";
//
// export const TestList = (props: Omit<ListViewProps, 'children'>) => {
//
//     interface TestListProps {
//         name: string;
//         age: number;
//         country: string;
//         children?: React.ReactNode; // 👈️ for demo purposes
//     }
//
//     return (
//         <List {...props}>
//             <Datagrid>
//                 <TextField label="UserID" source="userID"/>
//                 <TextField label="ID" source="id"/>
//                 <TextField label="Title" source="title"/>
//                 <TextField label="Completed" source="completed"/>
//             </Datagrid>
//         </List>
//     );
// };

import { Datagrid, EmailField, List, ReferenceField, TextField } from 'react-admin';

export const TestCommentsList = () => (
    <List>
        <Datagrid rowClick="edit">
            <ReferenceField source="postId" reference="posts" />
            <TextField source="id" />
            <TextField source="name" />
            <EmailField source="email" />
            <TextField source="body" />
        </Datagrid>
    </List>
);

export const TestPostList = () => (
    <List>
        <Datagrid rowClick="edit">
            <ReferenceField source="userId" reference="users" />
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="body" />
        </Datagrid>
    </List>
);

export const TestTmpList = () => (
    <List>
        <Datagrid rowClick="edit">
            <ReferenceField source="postId" reference="posts" />
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="body" />
        </Datagrid>
    </List>
);

// // todo Попробовать вывести список двумя способами. Вот так влоб и как закоменчено (с интерфейсом и пропсами)
// export const TestAlbumsList = () => (
//     <List>
//         <Datagrid rowClick="edit">
//             <ReferenceField source="userId" reference="users" />
//             <TextField source="id" />
//             <TextField source="title" />
//             <TextField source="body" />
//         </Datagrid>
//     </List>
// );