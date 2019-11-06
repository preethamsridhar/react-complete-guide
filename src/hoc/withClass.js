import React from 'react';

const withClass = (WrappedComponent, classname) => {
  return ((props) => {
    return (
      <div className={classname}>
        <WrappedComponent {...props}/>
      </div> 
    );
  });
}

export default withClass;