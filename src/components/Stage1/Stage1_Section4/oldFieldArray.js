

// getFieldSchema = (prefix, key) => {
//   const { schema } = this.props;
//   const field = schema.fields[key];

//   return ({
//     ...field,
//     name: `${prefix}.${field.name}`,
//   });
// }

// renderSponsors = ({ fields }) => {
//   console.log('fields: ', fields);
//   const { schema } = this.props;

//   console.log('schema: ', schema);
//   return (
//     <ul className={'col-md-12'}>
//       {fields.map(sponsor => (
//         <li key={sponsor} className={'row'}>
//           <FieldInput {...this.getFieldSchema(sponsor, 'title')} className={'col-md-3'} />
//           <FieldInput {...this.getFieldSchema(sponsor, 'firstName')} className={'col-md-3'} />
//           <FieldInput {...this.getFieldSchema(sponsor, 'lastName')} className={'col-md-3'} />
//           <FieldInput {...this.getFieldSchema(sponsor, 'programArea')} className={'col-md-3'} />
//         </li>
//       ))}
//     </ul>
//   );
// }
