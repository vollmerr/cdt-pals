// import React from 'react';
// import { FieldInput } from 'state-template';

// import schema from '../schema';

// import TableField from './TableField';

// const { stakeHolders } = schema.section4;

// const formatField = (field, component) => (value, row, index) => (
//   <TableField
//     index={index}
//     field={field}
//     arrayName={stakeHolders.arrayName}
//     component={component}
//   />
// );

// // NO SORTING, ORDER MATTERS!
// const columns = [
//   {
//     dataField: stakeHolders.fields.title.name,
//     text: stakeHolders.fields.title.label,
//     formatter: formatField(stakeHolders.fields.title, FieldInput),
//     minWidth: 150,
//     maxWidth: 200,
//   },
//   {
//     dataField: stakeHolders.fields.firstName.name,
//     text: stakeHolders.fields.firstName.label,
//     formatter: formatField(stakeHolders.fields.firstName, FieldInput),
//     minWidth: 150,
//     maxWidth: 200,
//   },
//   {
//     dataField: stakeHolders.fields.lastName.name,
//     text: stakeHolders.fields.lastName.label,
//     formatter: formatField(stakeHolders.fields.lastName, FieldInput),
//     minWidth: 150,
//     maxWidth: 200,
//   },
//   {
//     dataField: stakeHolders.fields.programArea.name,
//     text: stakeHolders.fields.programArea.label,
//     formatter: formatField(stakeHolders.fields.programArea, FieldInput),
//     minWidth: 300,
//     maxWidth: 500,
//   },
// ];

// export default columns;
