import React from 'react';

import StageSection from '../../StageSection';

import Stage1Section3Area1 from './Stage1_Section3_Area1';
import Stage1Section3Area2 from './Stage1_Section3_Area2';

const sectionProps = {
  stage: 1,
  section: 3,
};

const Stage1Section3 = () => (
  <StageSection {...sectionProps} title={'Preliminary Assessment'}>
    <Stage1Section3Area1 {...sectionProps} />
    <Stage1Section3Area2 {...sectionProps} />
  </StageSection>
);

export default Stage1Section3;
