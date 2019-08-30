// import React from 'react';
// import T from 'prop-types';
// import { FieldArray } from 'redux-form';
// import { Table } from 'state-template';

// export class ArrayField extends React.Component {
//   buildColumns = () => {
//     const { schema } = this.props;
//     console.log('schema: ', schema);
//     return Object.values(schema.fields).map((field, index) => ({
//       dataField: field.name,
//       text: field.label,
//       formatter: this.renderField(field, index),
//     }));
//   }

//   getFieldName = (field, index) => {
//     const { schema } = this.props;
//     // ex: execSponsors[2].firstName
//     return `${schema.arrayName}[${index}]${field.name}`;
//   }

//   renderField = (field, index) => () => {
//     const { component: C, ...rest } = field;
//     // const name = this.getFieldName(field, index);
//     // console.log('FIELD ', field, name);
//     return (
//       <C
//         {...rest}
//         // name={name}
//         label={''}
//         aria-label={field.label}
//       />
//     );
//   }

//   renderFields = props => () => {
//     const { schema, data } = props;
//     const { title } = schema;
//     const columns = this.buildColumns();

//     return (
//       <Table
//         hideSearch
//         hidePagination
//         columns={columns}
//         data={data}
//         title={title}
//       />
//     );
//   }

//   render() {
//     const { arrayName } = this.props.schema;
//     const component = this.renderFields(this.props);

//     return (
//       <FieldArray
//         name={arrayName}
//         component={component}
//       />
//     );
//   }
// }

// export default ArrayField;
