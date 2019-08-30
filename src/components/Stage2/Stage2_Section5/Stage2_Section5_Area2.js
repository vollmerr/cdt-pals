import React from 'react';
import { FieldInput } from 'state-template';

import StageSectionArea from '../../StageSectionArea';

import schema from '../schema';

const { area2 } = schema.section5;

const Stage2Section5Area2 = props => (
  <StageSectionArea {...props} area={2} title={'Business Process Workflow'}>
    <FieldInput {...area2.worflowDiagram} className={'col-md-12'} />
  </StageSectionArea>
);

export default Stage2Section5Area2;
