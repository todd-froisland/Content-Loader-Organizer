import React from 'react';

import { string } from 'prop-types;

import SkeletonWrapper from './components/SkeletonWrapper';

const propTypes = {
  recipe: string,
};

const defaultProps = {
  recipe: 'CHOOSE A DEFAULT',
};

const SkeletonLoader = ({ recipe }) => {
  const isDesktop =
    window.innerWidth > 768;
  const viewboxExample = "0 0 271 304"; // 0 0 X Y
  switch (recipe) {
    case 'card': {
      if (isDesktop) {
        return (
          <SkeletonWrapper
          //optional: testId goes here
            viewBox="SPECIFY VIEW BOX"
          >
          SPECIFY RECIPE
          </SkeletonWrapper>
        );
      }
      return (
        <SkeletonWrapper
          viewBox="SPECIFY VIEW BOX"
          SPECIFY RECIPE
        >
          <CardMobile />
        </SkeletonWrapper>
      );
    }
    default: {
      if (isDesktop) {
        if (isDesktop) {
        return (
          <SkeletonWrapper
          //optional: testId goes here
            viewBox="SPECIFY VIEW BOX"
          >
          DEFAULT RECIPE
          </SkeletonWrapper>
        );
      }
      return (
        <SkeletonWrapper
          viewBox="SPECIFY VIEW BOX"
          
        >
         DEFAULT RECIPE 
        </SkeletonWrapper>
      );
    }
  }
};

SkeletonLoader.propTypes = propTypes;
SkeletonLoader.defaultProps = defaultProps;

export default SkeletonLoader;
