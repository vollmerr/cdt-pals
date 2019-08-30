import React from 'react';
import { FieldInput } from 'state-template';

import StageSectionArea from '../../StageSectionArea';

import schema from '../schema';

const { area1 } = schema.section5;

const Stage2Section5Area1 = props => (
  <StageSectionArea {...props} area={1} title={'Description'}>
    <FieldInput {...area1.description} className={'col-md-12'} />
  </StageSectionArea>
);

export default Stage2Section5Area1;
