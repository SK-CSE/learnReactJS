import React from 'react';

const withClass = (WrappedComponent, className) => {
    return props => (
      <div className={className}>
          <WrappedComponent></WrappedComponent>
      </div>
    );

}

export default withClass;
