import React from 'react';
import { FieldInput } from 'state-template';

import StageSectionArea from '../../StageSectionArea';

import schema from '../schema';

const { area2 } = schema.section3;

const Stage1Section3Area2 = props => (
  <StageSectionArea {...props} area={2} title={'Impact Assessment'}>
    <div className={'col-12'}>...</div>
  </StageSectionArea>
);

export default Stage1Section3Area2;
