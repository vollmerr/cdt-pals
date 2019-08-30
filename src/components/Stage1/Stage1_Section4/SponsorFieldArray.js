import React from 'react';
// import T from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// import { FieldArray } from 'redux-form';
// import { Table } from 'state-template';

import ArrayField from './ArrayField';

import * as selectors from '../selectors';
import schema from '../schema';

const { execSponsors } = schema.section4;

export class SponsorFieldArray extends React.Component {
  render() {
    const { data } = this.props;

    return (
      <ArrayField
        schema={execSponsors}
        data={data || []}
      />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  data: selectors.getExecSponsors('20'), // TODO: dynamic id based off url
});

const withRedux = connect(mapStateToProps)(SponsorFieldArray);

export default withRedux;
