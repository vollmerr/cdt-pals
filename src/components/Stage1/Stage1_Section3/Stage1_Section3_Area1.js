import React from 'react';
import { FieldInput } from 'state-template';

import StageSectionArea from '../../StageSectionArea';

import schema from '../schema';

const { area1 } = schema.section3;

const Stage1Section3Area1 = props => (
  <StageSectionArea {...props} area={1} title={'Reportability Assessment'}>
    <div className={'col-12'}>...</div>
  </StageSectionArea>
);

export default Stage1Section3Area1;
