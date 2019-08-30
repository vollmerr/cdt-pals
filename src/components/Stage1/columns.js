
// const formatField = (field, arrayName) => (value, row, index) => (
//   <TableField
//     index={index}
//     field={field}
//     arrayName={arrayName}
//   // component={component}
//   />
// );

// const columns = [
//   {
//     dataField: 'title',
//     text: 'Title',
//     formatter: formatField('title', FieldInput),
//   },
//   {
//     dataField: stakeHolders.fields.firstName.name,
//     text: stakeHolders.fields.firstName.label,
//     formatter: formatField(stakeHolders.fields.firstName, FieldInput),
//   },
//   {
//     dataField: stakeHolders.fields.lastName.name,
//     text: stakeHolders.fields.lastName.label,
//     formatter: formatField(stakeHolders.fields.lastName, FieldInput),
//   },
//   {
//     dataField: stakeHolders.fields.programArea.name,
//     text: stakeHolders.fields.programArea.label,
//     formatter: formatField(stakeHolders.fields.programArea, FieldInput),
//   },
// ];

// export default columns;

// const mapFieldColumns = (schema) => {
//   return Object.keys(schema.fields).map(field => {

//     return ({
//       dataField: field.name,
//       text: field.label,
//       formatter: formatField(schema),
//     });
//   })
// }
