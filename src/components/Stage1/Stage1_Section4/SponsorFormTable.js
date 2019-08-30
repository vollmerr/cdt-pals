// import React from 'react';
// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
// import { Table } from 'state-template';

// import './FormTable.css';

// import columns from './columns';

// import * as selectors from '../selectors';

// const SponsorFormTable = (props) => {
//   const { project, arrayName, title } = props;

//   return (
//     <Table
//       hideSearch
//       hidePagination
//       columns={columns}
//       className={'col-12 FormTable'}
//       data={project[arrayName] || []}
//       title={title}
//     />
//   );
// };

// const mapStateToProps = createStructuredSelector({
//   project: selectors.getProjectById('20'), // TODO: dynamic id based off url
// });

// const withRedux = connect(mapStateToProps)(SponsorFormTable);

// export default withRedux;
