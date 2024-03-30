import React from 'react';
import classnames from 'classnames';

const Container = ({ children, noPadding }) => {
  const classes = classnames(`w-full mx-auto max-w-7xl`, {
    'px-0': noPadding,
    'px-4 xl:px-0': !noPadding,
  });

  return <div className={classes}>{children}</div>;
};

export default Container;
