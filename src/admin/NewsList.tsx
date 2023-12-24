import { Datagrid, EmailField, List, ReferenceField, TextField } from 'react-admin';

export const NewsList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" />
        </Datagrid>
    </List>
);

// import React from "react";
// import { List, Datagrid, TextField } from "react-admin";
// import {ListViewProps} from "ra-ui-materialui/src/list/ListView";
//
// export const NewsList = (props: Omit<ListViewProps, 'children'>) => {
//
//     interface PortfolioListProps {
//         name: string;
//         age: number;
//         country: string;
//         children?: React.ReactNode; // 👈️ for demo purposes
//     }
//
//     return (
//         <List {...props}>
//             <Datagrid>
//                 <TextField label="id" source="id"/>
//                 <TextField label="title" source="title"/>
//             </Datagrid>
//         </List>
//     );
// };