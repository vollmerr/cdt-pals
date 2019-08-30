import React from 'react';

import StageSection from '../../StageSection';

import Stage2Section5Area1 from './Stage2_Section5_Area1';
import Stage2Section5Area2 from './Stage2_Section5_Area2';
import Stage2Section5Area3 from './Stage2_Section5_Area3';

const sectionProps = {
  stage: 2,
  section: 5,
};

const Stage2Section5 = () => (
  <StageSection {...sectionProps} title={'Baseline Processes and Systems'}>
    <Stage2Section5Area1 {...sectionProps} />
    <Stage2Section5Area2 {...sectionProps} />
    <Stage2Section5Area3 {...sectionProps} />
  </StageSection>
);

export default Stage2Section5;
