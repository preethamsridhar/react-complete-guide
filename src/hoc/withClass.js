import React from 'react';

const withClass = (WrappedComponent, classname) => {
  return ((props) => {
    return (
      <div className={classname}>
        <WrappedComponent/>
      </div>
    );
  });
}

export default withClass;