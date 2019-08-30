import React from 'react';
import { FieldInput } from 'state-template';

import StageSectionArea from '../../StageSectionArea';

import schema from '../schema';

const { area3 } = schema.section5;

const Stage2Section5Area3 = props => (
  <StageSectionArea {...props} area={3} title={'Current Architecture Information'}>
    <FieldInput {...area3.currentProcesses} className={'col-md-12'} />
    <FieldInput {...area3.currentSystem} className={'col-md-12'} />
    <FieldInput {...area3.currentCots} className={'col-md-12'} />
  </StageSectionArea>
);

export default Stage2Section5Area3;
