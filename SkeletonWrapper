import React from 'react';
import ContentLoader from 'react-content-loader';
import { node, string } from 'prop-types';

const propTypes = {
  children: node.isRequired,
  viewBox: string.isRequired,
};

const SkeletonWrapper = props => {
  const { viewBox, children } = props;
  const foregroundColor = "PICK A COLOR"
  const backgroundColor = "PICK A COLOR"
  const speed = PICK A SPEED;

  return (
    <ContentLoader
      speed={speed}
      viewBox={viewBox}
      backgroundColor={backgroundColor}
      foregroundColor={foregroundColor}
    >
      {children}
    </ContentLoader>
  );
};

SkeletonWrapper.propTypes = propTypes;
SkeletonWrapper.defaultProps = defaultProps;

export default SkeletonWrapper;
