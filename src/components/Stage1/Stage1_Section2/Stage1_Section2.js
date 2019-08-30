import React from 'react';
import { FieldInput, FieldRadioButtons, FieldDate } from 'state-template';

import StageSection from '../../StageSection';

import schema from '../schema';

const { section2 } = schema;

const sectionProps = {
  stage: 1,
  section: 2,
};

const Stage1Section2 = () => (
  <StageSection {...sectionProps} title={'Submittal Information'}>
    <div className={'col-12'}>...</div>
  </StageSection>
);

export default Stage1Section2;
