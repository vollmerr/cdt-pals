import React from 'react';
import T from 'prop-types';
import { Button, ConnectedAsync, Form } from 'state-template';

const Stage = ({
  children,
  stage,
  title,
  ...rest
}) => {
  const header = `Stage ${stage} - ${title}`;

  return (
    <ConnectedAsync>
      <Form {...rest} enableReinitialize>
        <div className={'d-flex'}>
          <h2>{header}</h2>
          <Button
            text={'Back'}
            variant={'default'}
            onClick={() => {}}
          />
        </div>

        {children}
      </Form>
    </ConnectedAsync>
  );
};

Stage.propTypes = {
  /* form to render */
  children: T.node.isRequired,

  /* stage number */
  stage: T.number.isRequired,

  /* title of the stage */
  title: T.string.isRequired,
};

export default Stage;
