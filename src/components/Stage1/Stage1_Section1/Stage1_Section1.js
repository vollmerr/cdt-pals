import React from 'react';
import { FieldInput, FieldRadioButtons, FieldDate } from 'state-template';

import StageSection from '../../StageSection';

import schema from '../schema';

const { section1 } = schema;

const sectionProps = {
  stage: 1,
  section: 1,
};

const Stage1Section1 = () => (
  <StageSection {...sectionProps} title={'General Information'}>
    <FieldInput {...section1.orgName} className={'col-md-12'} />
    <FieldInput {...section1.orgCode} className={'col-md-3'} />
    <FieldInput {...section1.agencyName} className={'col-md-6'} />
    <FieldInput {...section1.agencyCode} className={'col-md-3'} />
    <FieldInput {...section1.projectName} className={'col-md-12'} />
    <FieldInput {...section1.projectDesc} className={'col-md-12'} />
    <FieldDate {...section1.projectStartDate} className={'col-md-4'} />
    <FieldRadioButtons {...section1.costThreshold} inline className={'col-md-4'} />
    <FieldInput {...section1.projectNumber} className={'col-md-4'} />
  </StageSection>
);

export default Stage1Section1;
