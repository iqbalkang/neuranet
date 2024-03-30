import React from 'react';
import classnames from 'classnames';

const Tag = ({ children, bgTeal }) => {
  const classes = classnames(`bg-grayish text-xs p-1 px-2 capitalize inline-block rounded-lg`, {
    'bg-teal': bgTeal,
  });

  return <span className={classes}>{children}</span>;
};

export default Tag;
