import React from 'react';
import { FieldInput } from 'state-template';

import StageSection from '../../StageSection';

import schema from '../schema';

const { section1 } = schema;

const sectionProps = {
  stage: 2,
  section: 1,
};

const Stage2Section1 = () => (
  <StageSection {...sectionProps} title={'General Information'}>
    <FieldInput {...section1.orgName} className={'col-md-6'} />
    <FieldInput {...section1.orgCode} className={'col-md-6'} />
    <FieldInput {...section1.projectName} className={'col-md-6'} />
    <FieldInput {...section1.projectNumber} className={'col-md-6'} />
  </StageSection>
);

export default Stage2Section1;
