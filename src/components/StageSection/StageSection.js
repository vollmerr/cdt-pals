import React from 'react';
import T from 'prop-types';

const StageSection = ({
  children,
  section,
  stage,
  title,
}) => {
  const header = `${stage}.${section} ${title}`;

  return (
    <>
      <h3>{header}</h3>

      <div className={'row'}>
        {children}
      </div>

      <hr />
    </>
  );
};

StageSection.propTypes = {
  children: T.node.isRequired,
  section: T.number.isRequired,
  stage: T.number.isRequired,
  title: T.string.isRequired,
};

export default StageSection;
