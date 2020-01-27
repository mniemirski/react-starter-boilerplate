import React from 'react';
import { useLocation } from 'react-router-dom';

import { CodeBlock } from 'ui';

export const LocationInfo: React.FC = () => {
  const location = useLocation();

  return (
    <div>
      <p>
        Current location (provided by{' '}
        <a href="https://reacttraining.com/react-router/web/api/Hooks/uselocation">
          <code>useLocation</code>
        </a>{' '}
        hook from <a href="https://github.com/ReactTraining/react-router">react-router</a>):
      </p>
      <CodeBlock>{JSON.stringify(location)}</CodeBlock>
    </div>
  );
};
