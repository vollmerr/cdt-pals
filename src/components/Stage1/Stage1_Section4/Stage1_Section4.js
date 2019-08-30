import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Table } from 'state-template';

import StageSection from '../../StageSection';

import * as selectors from '../selectors';
import schema from '../schema';

const { section4 } = schema;

const mapColumns = section => Object.values(section.fields).map(field => ({
  dataField: field.name,
  text: field.label,
}));

const columns = {
  execSponsors: mapColumns(section4.execSponsors),
  businessOwners: mapColumns(section4.businessOwners),
  stakeHolders: mapColumns(section4.stakeHolders),
};

const sectionProps = {
  stage: 1,
  section: 4,
};

const Stage1Section4 = (props) => {
  const { project } = props;

  return (
    <StageSection {...sectionProps} title={'Business Sponsor and Key Stakeholders'}>
      <Table
        hideSearch
        hidePagination
        title={section4.execSponsors.title}
        columns={columns.execSponsors}
        data={project.execSponsors || []}
        className={'col-12 m-b-lg'}
      />

      <Table
        hideSearch
        hidePagination
        title={section4.businessOwners.title}
        columns={columns.businessOwners}
        data={project.businessOwners || []}
        className={'col-12 m-b-lg'}
      />

      <Table
        hideSearch
        hidePagination
        title={section4.stakeHolders.title}
        columns={columns.stakeHolders}
        data={project.stakeHolders || []}
        className={'col-12'}
      />
    </StageSection>
  );
};

const mapStateToProps = createStructuredSelector({
  project: selectors.getProjectById('20'), // TODO: dynamic id based off url
});

const withRedux = connect(mapStateToProps)(Stage1Section4);

export default withRedux;
