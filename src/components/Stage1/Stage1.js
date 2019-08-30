import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Stage from '../Stage';

import Stage1Section1 from './Stage1_Section1';
import Stage1Section2 from './Stage1_Section2';
import Stage1Section3 from './Stage1_Section3';
import Stage1Section4 from './Stage1_Section4';
import * as actions from './actions';
import * as selectors from './selectors';

class Stage1 extends React.Component {
  componentDidMount() {
    const { getProject } = this.props;
    getProject();
  }

  onSubmit = (values) => {
    console.log('submitting: ', values);
  }

  render() {
    const { project } = this.props;
    console.log('PROJECT', project);
    return (
      <Stage
        stage={1}
        title={'Business Analysis'}
        onSubmit={this.onSubmit}
        form={Stage1.formName}
        initialValues={project}
      >
        <Stage1Section1 />
        <Stage1Section2 />
        <Stage1Section3 />
        <Stage1Section4 />

        {/* <pre>{JSON.stringify(this.props.project, null, 2)}</pre> */}
      </Stage>
    );
  }
}

Stage1.formName = 'stage-1';

const mapStateToProps = createStructuredSelector({
  project: selectors.getProjectById('20'), // TODO: dynamic id based off url
});

const mapDispatchToProps = dispatch => ({
  getProject: () => dispatch(actions.getProject()),
});

const withRedux = connect(mapStateToProps, mapDispatchToProps)(Stage1);

export default withRedux;
