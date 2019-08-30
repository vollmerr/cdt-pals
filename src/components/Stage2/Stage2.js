import React from 'react';

import Stage from '../Stage';

import Stage2Section1 from './Stage2_Section1';
import Stage2Section5 from './Stage2_Section5';

class Stage2 extends React.Component {
  onSubmit = (values) => {
    console.log('submitting: ', values);
  }

  render() {
    return (
      <Stage
        stage={2}
        title={'Prelimary Assessment'}
        onSubmit={this.onSubmit}
        form={Stage2.formName}
      >
        <Stage2Section1 />
        <Stage2Section5 />
      </Stage>
    );
  }
}

Stage2.formName = 'stage-2';

export default Stage2;
