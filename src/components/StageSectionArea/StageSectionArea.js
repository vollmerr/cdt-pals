import React from 'react';
import T from 'prop-types';

const StageSectionArea = ({
  area,
  children,
  section,
  stage,
  title,
}) => {
  const header = `${stage}.${section}.${area} ${title}`;

  return (
    <>
      <h4 className={'col-md-12'}>{header}</h4>

      {children}
    </>
  );
};

StageSectionArea.propTypes = {
  area: T.number.isRequired,
  children: T.node.isRequired,
  section: T.number.isRequired,
  stage: T.number.isRequired,
  title: T.string.isRequired,
};

export default StageSectionArea;
